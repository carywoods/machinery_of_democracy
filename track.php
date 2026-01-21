<?php
/**
 * Simple Analytics Tracker for Machinery of Democracy
 *
 * This script receives tracking data via POST and appends it to a CSV file.
 * Upload this to your web hosting (e.g., https://yourdomain.com/track.php)
 *
 * FTP Access: Download analytics.csv monthly for analysis
 *
 * SECURITY FEATURES:
 * - Origin whitelist (only machineryofdemocracy.com)
 * - Rate limiting per IP
 * - Data sanitization
 * - CSV file size limits
 * - Optional secret token validation
 */

// ==================== CONFIGURATION ====================

// Allowed origins (whitelist)
$allowed_origins = [
    'https://machineryofdemocracy.com',
    'http://localhost:8000',  // For local testing
    'http://127.0.0.1:8000'   // For local testing
];

// Rate limiting: max requests per IP per minute
$rate_limit = 60;  // Max 60 requests per minute per IP

// Maximum CSV file size before rotation (in bytes, 10MB default)
$max_csv_size = 10 * 1024 * 1024;

// Optional: Secret token for extra security (leave empty to disable)
// If set, requests must include this token in X-Analytics-Token header
$secret_token = '';  // Set to a random string if you want token auth

// ==================== SECURITY CHECKS ====================

header('Content-Type: application/json');

// Check origin whitelist
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin && !in_array($origin, $allowed_origins)) {
    http_response_code(403);
    echo json_encode(['error' => 'Origin not allowed']);
    exit;
}

// Set CORS headers for allowed origin
if ($origin) {
    header("Access-Control-Allow-Origin: $origin");
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, X-Analytics-Token');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Check secret token if configured
if ($secret_token !== '') {
    $provided_token = $_SERVER['HTTP_X_ANALYTICS_TOKEN'] ?? '';
    if ($provided_token !== $secret_token) {
        http_response_code(401);
        echo json_encode(['error' => 'Invalid token']);
        exit;
    }
}

// Rate limiting check
$client_ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rate_limit_file = __DIR__ . '/rate_limit_' . md5($client_ip) . '.txt';

// Clean up old rate limit files (older than 1 minute)
$old_files = glob(__DIR__ . '/rate_limit_*.txt');
foreach ($old_files as $file) {
    if (filemtime($file) < time() - 60) {
        @unlink($file);
    }
}

// Check current rate
if (file_exists($rate_limit_file)) {
    $requests = (int)file_get_contents($rate_limit_file);
    if ($requests >= $rate_limit) {
        http_response_code(429);
        echo json_encode(['error' => 'Rate limit exceeded']);
        exit;
    }
    file_put_contents($rate_limit_file, $requests + 1);
} else {
    file_put_contents($rate_limit_file, 1);
}

// Get JSON data from request body
$json = file_get_contents('php://input');
$data = json_decode($json, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON']);
    exit;
}

// Validate required fields
$required = ['timestamp', 'event_type', 'page'];
foreach ($required as $field) {
    if (!isset($data[$field])) {
        http_response_code(400);
        echo json_encode(['error' => "Missing required field: $field"]);
        exit;
    }
}

// CSV file path (same directory as this script)
$csv_file = __DIR__ . '/analytics.csv';

// Check if file exists, if not create with headers
$file_exists = file_exists($csv_file);

// Open file for appending
$handle = fopen($csv_file, 'a');

if (!$handle) {
    http_response_code(500);
    echo json_encode(['error' => 'Could not open CSV file']);
    exit;
}

// Write headers if new file
if (!$file_exists || filesize($csv_file) === 0) {
    fputcsv($handle, [
        'timestamp',
        'event_type',
        'page',
        'chapter_id',
        'chapter_title',
        'referrer',
        'user_agent',
        'screen_width',
        'screen_height',
        'ip_address'
    ]);
}

// Sanitize function to prevent CSV injection
function sanitize_csv($value) {
    // Convert to string and trim
    $value = trim((string)$value);

    // Limit length
    $value = substr($value, 0, 500);

    // Remove any formula injection attempts (=, +, -, @)
    if (strlen($value) > 0 && in_array($value[0], ['=', '+', '-', '@'])) {
        $value = "'" . $value;
    }

    return $value;
}

// Prepare row data with sanitization
$row = [
    sanitize_csv($data['timestamp'] ?? ''),
    sanitize_csv($data['event_type'] ?? ''),
    sanitize_csv($data['page'] ?? ''),
    sanitize_csv($data['chapter_id'] ?? ''),
    sanitize_csv($data['chapter_title'] ?? ''),
    sanitize_csv($data['referrer'] ?? ''),
    sanitize_csv($data['user_agent'] ?? ''),
    sanitize_csv($data['screen_width'] ?? ''),
    sanitize_csv($data['screen_height'] ?? ''),
    sanitize_csv($_SERVER['REMOTE_ADDR'] ?? '')
];

// Check CSV file size and rotate if needed
if ($file_exists && filesize($csv_file) > $max_csv_size) {
    // Rename old file with timestamp
    $backup_file = __DIR__ . '/analytics_' . date('Y-m-d_His') . '.csv';
    rename($csv_file, $backup_file);
    $file_exists = false;

    // Reopen handle for new file
    fclose($handle);
    $handle = fopen($csv_file, 'a');
}

// Write data to CSV
fputcsv($handle, $row);
fclose($handle);

// Return success response
echo json_encode(['status' => 'success', 'message' => 'Event tracked']);
http_response_code(200);
