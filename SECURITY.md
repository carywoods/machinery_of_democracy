# Security Features - Analytics Tracking

## Overview

The `track.php` script includes multiple layers of security to protect against abuse and unauthorized access.

## Security Features Implemented

### 1. **Origin Whitelist (CORS Protection)**

Only requests from authorized domains are accepted:
- `https://machineryofdemocracy.com` (production)
- `http://localhost:8000` (local testing)
- `http://127.0.0.1:8000` (local testing)

Any request from an unauthorized origin receives a `403 Forbidden` response.

**Configuration:** Edit the `$allowed_origins` array in `track.php` (lines 21-25)

---

### 2. **Rate Limiting**

Prevents abuse by limiting requests per IP address.

**Default:** 60 requests per minute per IP address

How it works:
- Each IP gets a temporary rate limit file: `rate_limit_{hash}.txt`
- Files are automatically cleaned up after 1 minute
- Excessive requests receive `429 Rate Limit Exceeded` response

**Configuration:** Edit `$rate_limit` in `track.php` (line 28)

**File Protection:** The `.htaccess` file prevents direct access to rate limit files.

---

### 3. **Data Sanitization**

All incoming data is sanitized before writing to CSV:

- **Length limits:** Max 500 characters per field
- **CSV injection prevention:** Fields starting with `=`, `+`, `-`, `@` are escaped
- **Type casting:** All values converted to strings
- **Trimming:** Whitespace removed

This prevents:
- CSV formula injection attacks
- Buffer overflow attempts
- Malformed data corruption

---

### 4. **File Size Management**

Automatic CSV rotation when file exceeds size limit.

**Default:** 10 MB maximum file size

When limit is reached:
- Old file is renamed: `analytics_YYYY-MM-DD_HHMMSS.csv`
- New file is started automatically
- No data loss occurs

**Configuration:** Edit `$max_csv_size` in `track.php` (line 31)

**Benefits:**
- Prevents disk space exhaustion
- Keeps files manageable for analysis
- Natural monthly/weekly archiving

---

### 5. **Optional Secret Token Authentication**

For extra security, you can require a secret token.

**How to enable:**

1. In `track.php` (line 35), set a random secret:
   ```php
   $secret_token = 'your-random-secret-here-use-a-long-string';
   ```

2. In `app.js`, add token to tracking config:
   ```javascript
   this.trackingToken = 'your-random-secret-here-use-a-long-string';
   ```

3. Update the `track()` method to send the token:
   ```javascript
   fetch(this.trackingEndpoint, {
       method: 'POST',
       headers: {
           'Content-Type': 'application/json',
           'X-Analytics-Token': this.trackingToken
       },
       body: JSON.stringify(data)
   });
   ```

**Note:** Only enable this if you need extra security. Most users won't need it.

---

### 6. **File Access Protection (.htaccess)**

The `.htaccess-analytics` file (rename to `.htaccess`) prevents direct access to:

- **CSV files:** `analytics.csv`, `analytics_*.csv`
- **Rate limit files:** `rate_limit_*.txt`
- **PHP script is still accessible** for POST requests

Example protection:
```
https://hcwoods.com/analytics.csv → 403 Forbidden
https://hcwoods.com/track.php → ✓ Works (POST only)
```

---

### 7. **Input Validation**

All requests are validated before processing:

- **Method check:** Only POST requests accepted (GET returns 405)
- **JSON validation:** Malformed JSON returns 400 error
- **Required fields:** Enforces presence of `timestamp`, `event_type`, `page`
- **Data type checking:** Ensures expected data structure

---

### 8. **Secure Data Collection**

- **IP addresses captured server-side:** Client can't spoof their IP
- **No SQL injection risk:** Uses CSV files, not databases
- **No shell execution:** Pure PHP, no system calls
- **No file includes:** No dynamic file loading

---

## Attack Vectors Mitigated

| Attack Type | Mitigation |
|-------------|------------|
| **DDoS / Flood** | Rate limiting (60 req/min per IP) |
| **CSV Injection** | Data sanitization, formula escaping |
| **CORS Abuse** | Origin whitelist |
| **Unauthorized Access** | Optional token authentication |
| **Data Theft** | .htaccess blocks direct CSV access |
| **Disk Exhaustion** | Automatic file rotation at 10MB |
| **XSS** | No data rendered to HTML, CSV only |
| **Path Traversal** | `__DIR__` ensures same-directory access |
| **SQL Injection** | N/A - No database used |

---

## What This Does NOT Protect Against

1. **Server-level attacks:** PHP/Apache vulnerabilities
2. **Hosting account compromise:** If FTP credentials are stolen
3. **Man-in-the-middle:** Use HTTPS (already configured)
4. **Bot traffic:** Rate limiting helps, but determined bots can bypass
5. **GeoIP blocking:** No geographic restrictions (would require GeoIP database)

---

## Best Practices

### For Maximum Security

1. ✅ Upload `.htaccess` file (rename from `.htaccess-analytics`)
2. ✅ Use HTTPS for your domain (already configured)
3. ✅ Enable secret token if handling sensitive data
4. ✅ Download and delete CSV files monthly (don't accumulate data)
5. ✅ Keep PHP and web server updated
6. ✅ Use strong FTP/hosting passwords
7. ⚠️ Don't commit actual CSV files to git (already in .gitignore)

### Optional Advanced Security

1. **Password-protect directory:** Uncomment lines in `.htaccess` and create `.htpasswd`
2. **IP whitelist:** Add your IP to allowed list, block all others
3. **Firewall rules:** Use hosting control panel to add firewall rules
4. **Separate subdomain:** Host track.php on separate subdomain (e.g., `analytics.hcwoods.com`)

---

## Monitoring

Keep an eye on:

1. **CSV file size growth:** If it grows too quickly, you may have bot traffic
2. **Rate limit files:** Lots of files = lots of unique IPs hitting your site
3. **Referrer field:** Check for unusual referrers (spam sites, etc.)
4. **Event frequency:** Sudden spikes may indicate automated traffic

---

## Testing Security

### Test 1: Verify Origin Blocking
```bash
curl -X POST https://hcwoods.com/track.php \
  -H "Origin: https://evil-site.com" \
  -H "Content-Type: application/json" \
  -d '{"timestamp":"2026-01-21","event_type":"test","page":"/"}'

# Expected: {"error":"Origin not allowed"}
```

### Test 2: Verify Rate Limiting
```bash
# Send 61 requests rapidly
for i in {1..61}; do
  curl -X POST https://hcwoods.com/track.php \
    -H "Origin: https://machineryofdemocracy.com" \
    -H "Content-Type: application/json" \
    -d '{"timestamp":"2026-01-21","event_type":"test","page":"/"}'
done

# Request 61 should return: {"error":"Rate limit exceeded"}
```

### Test 3: Verify CSV Protection
```bash
curl https://hcwoods.com/analytics.csv

# Expected: 403 Forbidden (if .htaccess is configured)
```

---

## Security Checklist

Before going live:

- [ ] `track.php` uploaded to `hcwoods.com`
- [ ] `.htaccess` uploaded (renamed from `.htaccess-analytics`)
- [ ] Verified track.php is accessible: `curl -X POST https://hcwoods.com/track.php`
- [ ] Verified CSV is protected: `curl https://hcwoods.com/analytics.csv` returns 403
- [ ] Tested from actual site (not localhost)
- [ ] Checked browser console for errors
- [ ] Confirmed CSV file is being created

---

## Questions?

If something seems insecure or you have questions:
1. Check PHP error logs on your hosting
2. Review the security features above
3. Test each security layer independently
4. Consider enabling token authentication for sensitive sites
