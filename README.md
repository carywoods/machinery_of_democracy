# The Machinery of Democracy - Interactive Companion

A unified web application consolidating 11 chapter-based interactive tools exploring American electoral infrastructure, from ballot access to rebuilding democracy.

## Overview

This application provides an interactive companion to "The Machinery of Democracy" book, allowing readers to explore data visualizations, interactive tools, and case studies for each chapter. The app includes a convenient dropdown to purchase the book on Amazon in paperback, hardback, or Kindle format.

## Features

- **11 Interactive Chapters**: Each chapter has unique data visualizations and interactive elements
- **Book Purchase Integration**: Quick access to purchase the book on Amazon (Paperback, Hardback, or Kindle)
- **Unified Navigation**: Seamless chapter switching without page reloads
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Dark Mode Support**: Automatic dark mode based on system preferences
- **Clean Architecture**: Modular structure for easy maintenance and updates

## Structure

```
/mod
├── index.html              # Main application shell
├── app.js                  # Application controller and chapter switching logic
├── css/
│   └── shared.css          # Common design system and styles
├── chapters/
│   ├── chapter1-ballot-access.js
│   ├── chapter2-ballot-measures.js
│   ├── chapter3-deepfake.js
│   ├── chapter4-disinformation.js
│   ├── chapter5-gerrymandering.js
│   ├── chapter6-leaders.js
│   ├── chapter7-donations.js
│   ├── chapter8-state-federal.js
│   ├── chapter9-turnover.js
│   ├── chapter10-voting-machines.js
│   └── chapter11-rebuilding.js
└── README.md               # This file
```

## Running the Application

### Option 1: Local File System
Simply open `index.html` in a modern web browser (Chrome, Firefox, Safari, Edge).

### Option 2: Local Development Server
For the best experience, use a local development server:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if you have http-server installed)
npx http-server -p 8000

# Then open http://localhost:8000 in your browser
```

## Chapter Overview

1. **Ballot Access** - Interactive ballot access explorer mapping voting barriers by state
2. **Ballot Measures** - Citizen-led direct democracy dashboard
3. **Deepfakes** - Deepfake election tracker with verified cases
4. **Disinformation** - Economics of political disinformation research dashboard
5. **Gerrymandering** - Prison gerrymandering and redistricting analysis
6. **Political Leaders** - Political leadership predictor and analysis
7. **Small Dollar Donations** - Campaign finance tracker (2010-2024)
8. **State vs Federal** - State legislature policy tracker
9. **Election Turnover** - Election workforce monitor
10. **Voting Machines** - U.S. voting machine infrastructure tracker
11. **Rebuilding** - Practical reforms and institutional redesign recommendations

## How to Add a New Chapter

### Step 1: Create the Chapter JavaScript File

Create a new file in the `chapters/` directory (e.g., `chapter11-new-topic.js`):

```javascript
/**
 * Chapter 11: New Topic
 * Description of your chapter
 */

(function() {
    // Your data
    const data = {
        // ... your data structure
    };

    const chapter = {
        // Required: Render function returns the DOM for this chapter
        render() {
            const container = document.createElement('div');
            container.className = 'chapter-content active';
            container.innerHTML = `
                <div class="section-header">
                    <h2 class="section-title">Your Chapter Title</h2>
                    <p class="section-subtitle">
                        Your chapter description
                    </p>
                </div>

                <div class="stats-grid">
                    <!-- Your stat cards -->
                </div>

                <!-- Your chapter content -->
            `;

            return container;
        },

        // Optional: Initialize interactive elements
        init() {
            // Set up event listeners, charts, etc.
            // This runs after render() is complete
        },

        // Optional: Cleanup when leaving chapter
        cleanup() {
            // Remove event listeners, destroy charts, etc.
        }
    };

    // Register the chapter with the app
    app.registerChapter('new-topic', chapter);
})();
```

### Step 2: Add Navigation Button

Edit `index.html` and add a new button to the chapter navigation:

```html
<button class="chapter-button" data-chapter="new-topic">
    <span class="chapter-number">11.</span> New Topic
</button>
```

### Step 3: Include the Script

Add a script tag in `index.html` after the existing chapter scripts, **but before the app initialization script**:

```html
<!-- Chapter Modules (loaded dynamically) -->
<script src="chapters/chapter1-ballot-access.js"></script>
<!-- ... other chapters ... -->
<script src="chapters/chapter12-new-topic.js"></script>

<!-- Chart.js for data visualization (used by some chapters) -->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<!-- Initialize app after all chapters have registered -->
<script>
    // App initialization code - MUST come after all chapter scripts
</script>
```

**Important:** The order of scripts matters! Chapter scripts must load before the app initialization script runs.

### Step 4: Update Documentation

Update this README with information about your new chapter.

## Common Design Patterns

### Stat Cards
```html
<div class="stats-grid">
    <div class="stat-card">
        <div class="stat-label">Label Text</div>
        <div class="stat-value">42%</div>
        <div class="stat-description">Description</div>
    </div>
</div>
```

### Data Tables
```html
<div class="data-table">
    <table>
        <thead>
            <tr>
                <th>Column 1</th>
                <th>Column 2</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Data 1</td>
                <td>Data 2</td>
            </tr>
        </tbody>
    </table>
</div>
```

### Filters and Controls
```html
<div class="controls">
    <div class="control-group">
        <label for="my-filter">Filter:</label>
        <select id="my-filter">
            <option value="all">All</option>
            <option value="specific">Specific</option>
        </select>
    </div>
</div>
```

### Tabs
```html
<div class="tabs">
    <button class="tab active" data-tab="tab1">Tab 1</button>
    <button class="tab" data-tab="tab2">Tab 2</button>
</div>

<div id="tab1" class="tab-content active">
    <!-- Tab 1 content -->
</div>

<div id="tab2" class="tab-content">
    <!-- Tab 2 content -->
</div>
```

### Info Boxes
```html
<div class="info-box">
    <h3>Section Title</h3>
    <ul>
        <li><strong>Point 1:</strong> Description</li>
        <li><strong>Point 2:</strong> Description</li>
    </ul>
</div>
```

### Data Cards
```html
<div class="data-cards">
    <div class="card">
        <div class="card-title">Card Title</div>
        <div class="card-content">Card content here</div>
    </div>
</div>
```

### Badges
```html
<span class="badge badge-critical">Critical</span>
<span class="badge badge-warning">Warning</span>
<span class="badge badge-info">Info</span>
```

## Using Chart.js

Chart.js is included via CDN for data visualization. Example usage:

```javascript
const ctx = document.getElementById('my-chart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2020', '2021', '2022'],
        datasets: [{
            label: 'Dataset',
            data: [10, 20, 30],
            borderColor: 'rgb(33, 128, 141)',
            backgroundColor: 'rgba(33, 128, 141, 0.1)',
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true
    }
});
```

Remember to destroy charts in the `cleanup()` method to prevent memory leaks.

## CSS Variables

The design system uses CSS custom properties for consistent styling:

### Colors
- `--color-background`: Page background
- `--color-surface`: Card/surface background
- `--color-text`: Primary text
- `--color-text-secondary`: Secondary text
- `--color-primary`: Primary brand color (teal)
- `--color-error`: Error/critical color (red)
- `--color-warning`: Warning color (orange)
- `--color-border`: Border color
- `--color-card-border`: Card border color

### Spacing
- `--space-8` through `--space-32`: Consistent spacing values

### Other
- `--radius-base`: 8px
- `--radius-lg`: 12px
- `--shadow-sm`: Small shadow
- `--shadow-md`: Medium shadow

## Browser Compatibility

Supports modern browsers with ES6+ JavaScript:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Updating Data

Each chapter's data is contained within its JavaScript file. To update:

1. Open the relevant chapter file (e.g., `chapters/chapter1-ballot-access.js`)
2. Locate the data objects at the top of the file
3. Update the data
4. Save and refresh the browser

No build step is required!

## Technical Notes

### Script Loading Order

The application uses a specific script loading order to ensure proper initialization:

1. `app.js` loads first and creates the global `app` instance
2. All chapter scripts load and register themselves via `app.registerChapter()`
3. Chart.js library loads
4. An inline script calls `app.init()` to start the application

This order is critical - if `app.init()` runs before chapters register, you'll see a "Chapter Not Found" error.

### Book Purchase Feature

The header includes a dropdown selector that opens Amazon links for the book in three formats:
- Paperback
- Hardback
- Kindle

The selector resets after each use, allowing repeated access without navigation.

## Design Philosophy

- **Vanilla JavaScript**: No framework dependencies for maximum simplicity
- **Progressive Enhancement**: Works without JavaScript for basic content
- **Mobile-First**: Responsive design that works on all screen sizes
- **Accessible**: Semantic HTML and ARIA labels where appropriate
- **Maintainable**: Clear separation of concerns between structure, style, and logic

## Contributing

To contribute a new chapter or improve existing ones:

1. Follow the chapter creation guide above
2. Use the shared design system (CSS variables, common components)
3. Test on mobile and desktop
4. Test in both light and dark modes
5. Ensure all interactive elements work without errors

## License

This application is a companion to "The Machinery of Democracy" book.

## Support

For issues or questions, please refer to the book or contact the author.
