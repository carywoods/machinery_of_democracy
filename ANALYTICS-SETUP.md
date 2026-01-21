# Analytics Setup Instructions

This guide explains how to set up simple self-hosted analytics tracking for the Machinery of Democracy application.

## Overview

The analytics system consists of two parts:
1. **track.php** - A PHP script on your web hosting that receives tracking data and writes it to a CSV file
2. **Modified app.js** - JavaScript tracking code that sends events to the PHP script

## Setup Steps

### 1. Upload PHP Script to Your Hosting

1. Connect to your web hosting via FTP (FileZilla, Cyberduck, or your hosting's FTP client)
2. Upload `track.php` to a publicly accessible directory
   - Example: `public_html/track.php`
   - Or create a subdirectory: `public_html/analytics/track.php`
3. Make sure the directory is writable (PHP needs permission to create/write `analytics.csv`)
   - Most shared hosting has this enabled by default
   - If needed, set directory permissions to `755` and file permissions to `644`

### 2. Update Tracking Endpoint URL

Open `app.js` and find line 15:

```javascript
this.trackingEndpoint = 'https://YOUR-HOSTING-DOMAIN.com/track.php';
```

Replace with your actual URL:
```javascript
this.trackingEndpoint = 'https://yourdomain.com/track.php';
```

Or if you used a subdirectory:
```javascript
this.trackingEndpoint = 'https://yourdomain.com/analytics/track.php';
```

### 3. Deploy to GitHub Pages

Commit and push the modified `app.js`:

```bash
git add app.js
git commit -m "Add analytics tracking"
git push origin master
```

GitHub Pages will automatically deploy within 1-2 minutes.

### 4. Test the Setup

1. Visit your site: `https://machineryofdemocracy.com`
2. Navigate to a few different chapters
3. Check your hosting via FTP - you should see a new file: `analytics.csv`
4. Download and open it - you should see rows with tracking data

## Data Collected

The CSV file contains these columns:

| Column | Description | Example |
|--------|-------------|---------|
| `timestamp` | ISO 8601 timestamp | `2026-01-21T10:30:15.234Z` |
| `event_type` | Type of event | `page_load`, `chapter_view` |
| `page` | URL path | `/` |
| `chapter_id` | Chapter identifier | `ballot-access` |
| `chapter_title` | Human-readable title | `Ballot Access` |
| `referrer` | Where user came from | `https://google.com` or `direct` |
| `user_agent` | Browser info | `Mozilla/5.0...` |
| `screen_width` | Screen width in pixels | `1920` |
| `screen_height` | Screen height in pixels | `1080` |
| `ip_address` | Visitor IP address | `192.168.1.1` |

## Monthly Analysis

### Download Data via FTP

1. Connect to your hosting via FTP
2. Navigate to the directory containing `analytics.csv`
3. Download the file to your computer
4. Optional: Delete or rename the file on the server to start fresh for next month

### Analyzing the Data

You can open the CSV file in:
- **Excel/Google Sheets** - For basic analysis, pivot tables, charts
- **Python/Pandas** - For advanced analysis
- **Any CSV viewer** - For quick inspection

### Example Analysis Queries

**Most popular chapters:**
```
Sort by chapter_id, count occurrences
```

**Traffic sources:**
```
Group by referrer column
```

**Peak traffic times:**
```
Group by date from timestamp column
```

**Device breakdown:**
```
Analyze screen_width/screen_height for mobile vs desktop
```

## Disabling Tracking

To temporarily disable tracking without removing code:

In `app.js` line 16, change:
```javascript
this.trackingEnabled = true;
```

To:
```javascript
this.trackingEnabled = false;
```

## Troubleshooting

### No analytics.csv file appearing

1. **Check PHP script URL** - Visit `https://yourdomain.com/track.php` in your browser
   - You should see: `{"error":"Method not allowed"}`
   - If you see PHP code or a 404 error, the path is wrong

2. **Check directory permissions**
   - Make sure PHP can write to the directory
   - Try creating a test file manually via FTP to verify write access

3. **Check browser console**
   - Open DevTools (F12) → Console tab
   - Look for tracking errors or CORS issues

### CORS errors in browser console

If you see CORS (Cross-Origin) errors:

1. The PHP script already includes CORS headers
2. Make sure you're using HTTPS for both sites
3. Some hosting providers block cross-origin requests - check with your host

### Empty CSV file

If the file exists but is empty:

1. Check that your site is actually loading (visit it in your browser)
2. Check browser console for JavaScript errors
3. Verify the tracking endpoint URL is correct in `app.js`

## Privacy Considerations

This tracking system:
- ✅ Does NOT use cookies
- ✅ Does NOT track users across sites
- ✅ Stores data on your own server
- ✅ You control all data retention and deletion
- ⚠️ Does collect IP addresses (required for basic analytics)
- ⚠️ Does collect user agent strings (browser info)

For privacy-conscious users, consider adding a privacy notice to your site footer explaining that you collect basic analytics.

## Advanced: Analyzing with Python

If you want to analyze data with Python:

```python
import pandas as pd
import matplotlib.pyplot as plt

# Load data
df = pd.read_csv('analytics.csv')

# Convert timestamp to datetime
df['timestamp'] = pd.to_datetime(df['timestamp'])

# Most popular chapters
chapter_views = df.groupby('chapter_title').size().sort_values(ascending=False)
print(chapter_views)

# Traffic by day
df['date'] = df['timestamp'].dt.date
daily_traffic = df.groupby('date').size()
daily_traffic.plot(kind='bar', title='Daily Traffic')
plt.show()

# Referrer breakdown
referrer_counts = df['referrer'].value_counts()
print(referrer_counts)
```

## Questions?

If you run into issues:
1. Check the troubleshooting section above
2. Verify PHP error logs on your hosting (usually in control panel)
3. Test the PHP script by visiting it directly in your browser
