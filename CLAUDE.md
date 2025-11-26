# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

**UPDATE (Nov 25, 2025):** This repository has been refactored from 10 standalone HTML apps into a unified web application called "The Machinery of Democracy - Interactive Companion."

### Current State
- **Main Application**: `index.html` + `app.js` + `css/shared.css`
- **10 Chapter Modules**: Located in `chapters/` directory
- **Status**: Awaiting chapter-to-book mapping clarification (see PROJECT_NOTES.md)

### Original Structure (Still Present)
This started as a collection of standalone, interactive web applications focused on political and electoral topics. Each original application is still in its own directory and runs entirely in the browser using vanilla HTML, CSS, and JavaScript with no build process or dependencies beyond CDN-hosted libraries.

## Repository Structure

Each topic area has its own directory containing one or more HTML files:
- `ballet access/` - Interactive ballot access explorer mapping voting barriers by ZIP code and state
- `Ballot measure/` - Ballot measure analysis tool
- `Deepfake/` - Deepfake election tracker with case studies and statistics
- `Disinformation/` - Economics of political disinformation research dashboard (has a subdirectory `disinfo-economics-app/` with separated HTML/CSS/JS files)
- `Gerrymander/` - Gerrymandering analysis
- `leader/` - Political leadership analysis
- `small dollar donation/` - Small dollar donation tracker
- `state v fed/` - State vs federal election analysis
- `turnover/` - Political turnover tracking
- `Voting machine/` - Voting machine information

## Architecture

### Standalone Applications
Each application is completely independent and self-contained. There are no shared components, build systems, or dependencies between applications.

### Technology Stack
- **HTML5**: Semantic markup with embedded styles and scripts
- **Vanilla CSS**: Custom CSS variables for theming, responsive grid layouts
- **Vanilla JavaScript**: No frameworks, uses modern ES6+ features
- **External Libraries**: Chart.js loaded from CDN for data visualization (used in some apps)

### Common Patterns

#### Single-File vs Multi-File Structure
- Most applications use a single `index.html` file with embedded `<style>` and `<script>` tags
- The `disinformation/disinfo-economics-app/` is an exception with separated files:
  - `index.html` - Structure
  - `style.css` - Styling
  - `app.js` - Application logic and embedded data
  - `disinformation_economics_data.json` and `.yaml` - Data files (currently unused, data is embedded in app.js)

#### Data Management
- Data is embedded directly in JavaScript as objects (e.g., `appData` in disinformation app, `stateData` in ballot access app)
- Arrays of parallel data (e.g., `Category: [...], Amount_Billions: [...], Year: [...]`)
- Data structures match the needs of Chart.js and vanilla JS rendering

#### UI Patterns
- Navigation tabs/buttons with section toggling (show/hide via CSS classes)
- Filter dropdowns and search boxes for data exploration
- Modal overlays for detailed views
- Responsive grid layouts using CSS Grid
- Interactive visualizations using Chart.js (bar, line, doughnut charts)
- State selector patterns for geographic data

#### CSS Architecture
- CSS custom properties (variables) for theming, including dark mode support via `@media (prefers-color-scheme: dark)`
- Consistent naming conventions (e.g., `--color-`, `--space-`, `--font-`)
- Mobile-first responsive design with `@media` queries
- Animation and transition effects on cards, buttons, and sections

## Development Workflow

### Running Applications
Open any `index.html` file directly in a web browser. No build step or development server required.

### Testing Changes
Simply refresh the browser after editing any file. For multi-file applications like the disinformation app, ensure the file paths in `index.html` correctly reference `style.css` and `app.js`.

### Adding New Features
- For single-file apps: Edit the HTML file directly, adding styles in `<style>` and scripts in `<script>` tags
- For multi-file apps: Edit the appropriate file (HTML structure, CSS styling, or JS logic)
- Data changes: Modify the JavaScript data objects directly in the code

### Adding Data Visualizations
Applications using Chart.js follow this pattern:
1. Include Chart.js from CDN: `<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>`
2. Create a `<canvas>` element with an ID
3. Initialize Chart instance in JavaScript with data and configuration
4. Store chart references to destroy/recreate on filter changes

## File Naming Conventions

- Directories use lowercase with spaces (e.g., `ballot access/`, `small dollar donation/`)
- Main HTML files are named `index.html`
- Supporting files use descriptive names (e.g., `app.js`, `style.css`)
- Data files may be `.json` or `.yaml` (though currently data is embedded in JS)

## Key Implementation Details

### Interactive Filtering
Applications implement filtering by:
1. Storing original data in a top-level object
2. Creating filter functions that iterate through data and apply criteria
3. Re-rendering UI elements (cards, charts, tables) with filtered results
4. Attaching event listeners to select/input elements

### Section Navigation
Multi-section apps use this pattern:
- Navigation buttons with `data-section` attributes
- Sections with matching IDs
- Click handlers toggle `.active` class on both nav buttons and sections
- CSS hides/shows sections based on `.active` class

### Responsive Data Display
Data is presented using:
- **Stat cards**: Grid of numeric highlights with labels
- **Chart cards**: Containers with Chart.js visualizations
- **Case study cards**: Detailed narrative cards with structured information
- **Data tables**: Custom styled div-based tables (not `<table>` elements)

## Browser Compatibility

Applications use modern JavaScript (ES6+) and CSS features. Target modern browsers (Chrome, Firefox, Safari, Edge). Features used:
- Arrow functions
- Template literals
- Destructuring
- Spread operator
- CSS Grid and Flexbox
- CSS custom properties
- `const`/`let`

## Common Gotchas

1. **Chart.js lifecycle**: Always destroy existing chart instances before creating new ones to avoid memory leaks and canvas errors
2. **Data synchronization**: In parallel array structures, ensure all arrays have matching indices
3. **CSS specificity**: Embedded styles have global scope; use specific class names to avoid conflicts
4. **Modal state**: Remember to remove `.active` class when closing modals
5. **File paths**: When separating files, use relative paths correctly (e.g., `href="style.css"`, not `/style.css`)

---

## NEW UNIFIED APPLICATION STRUCTURE

### Application Files
- **index.html** - Main application shell with navigation
- **app.js** - MachineryOfDemocracy class that handles chapter switching
- **css/shared.css** - Consolidated design system (13KB)
- **chapters/** - 10 modular chapter JavaScript files

### Chapter Module Pattern
Each chapter in `chapters/` follows this pattern:
```javascript
(function() {
    const chapter = {
        render() {
            // Return DOM element
        },
        init() {
            // Optional: Initialize after DOM ready
        },
        cleanup() {
            // Optional: Cleanup before leaving chapter
        }
    };
    app.registerChapter('chapter-id', chapter);
})();
```

### Development Commands
```bash
# Run local server
python3 -m http.server 8000
# Then open http://localhost:8000

# No build process needed!
# Edit chapter files and refresh browser
```

### Key Files for Understanding
1. **PROJECT_NOTES.md** - Current status, questions, next steps
2. **README.md** - Complete usage guide
3. **app.js** - Chapter switching logic
4. **css/shared.css** - Design system reference

### Current Open Question
Need to map 10 apps to 11 book chapters. See PROJECT_NOTES.md for details.
