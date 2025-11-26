# Project Notes - The Machinery of Democracy Refactoring

**Date:** November 25, 2025
**Status:** In Progress - Awaiting Chapter Mapping Clarification

## What We've Accomplished

### ✅ Completed Work

1. **Analyzed all 10 existing HTML applications**
   - Catalogued structure, data, and features
   - Identified shared design patterns (CSS variables, color schemes, layouts)
   - Documented component patterns (stat cards, tables, tabs, filters)

2. **Created Unified Application Structure**
   ```
   /mod
   ├── index.html              # Main shell with navigation
   ├── app.js                  # Chapter switching controller
   ├── css/
   │   └── shared.css          # Consolidated design system
   ├── chapters/               # 10 modular JavaScript files
   │   ├── chapter1-ballot-access.js
   │   ├── chapter2-ballot-measures.js
   │   ├── chapter3-deepfake.js
   │   ├── chapter4-disinformation.js
   │   ├── chapter5-gerrymandering.js
   │   ├── chapter6-leaders.js
   │   ├── chapter7-donations.js
   │   ├── chapter8-state-federal.js
   │   ├── chapter9-turnover.js
   │   └── chapter10-voting-machines.js
   └── README.md               # Comprehensive documentation
   ```

3. **Extracted Shared CSS (css/shared.css)**
   - Complete design system with CSS custom properties
   - Cream/charcoal color scheme
   - Dark mode support via @media queries
   - Responsive grid layouts
   - Reusable components (stat cards, tables, tabs, badges, info boxes)

4. **Built Navigation System**
   - Sticky header with chapter tabs
   - Seamless chapter switching (no page reloads)
   - URL hash-based routing (shareable links)
   - Browser back/forward support

5. **Converted All 10 Apps to Modular Chapters**
   - Each chapter is self-contained
   - Preserved all original data and functionality
   - Interactive filters, controls, and visualizations
   - Chart.js integration where needed

6. **Created Documentation**
   - README.md with complete usage instructions
   - How to add new chapters guide
   - Common design patterns reference
   - CSS variables documentation

7. **Application Features**
   - Mobile-responsive design
   - Automatic dark mode
   - No build process required
   - Vanilla JavaScript (no framework dependencies)

## Current Issue: Chapter Mapping

### The Book Has 11 Chapters:
1. **The Laboratories** - Fifty-state patchwork of election rules
2. **The Distance Between Citizens and Ballots** - Structural barriers to voting
3. **The Economics of Disinformation** - Financial incentives behind misinfo
4. **The Pressure Valve** - Protest, civil unrest, alternative civic channels
5. **Pathways to Power** - How influence converts to political outcomes
6. **The New Money** - Modern campaign finance landscape
7. **The Technicians Leave the Factory Floor** - Election system professionals
8. **Phantom Constituents** - Turnout gaps, demographic distortions
9. **The Vulnerability Layer** - Technical/operational weak points
10. **Rebuilding the Machinery** - Practical reforms and redesign
11. **The Aging Machine** - Legacy systems, institutional fatigue

### We Built 10 Apps From These Original Directories:
1. `ballot access/` → Ballot Access app
2. `Ballot measure/` → Ballot Measures app
3. `Deepfake/` → Deepfakes app
4. `disinformation/` → Disinformation Economics app
5. `Gerrymander/` → Gerrymandering app
6. `leader/` → Political Leaders app
7. `small dollar donation/` → Small Dollar Donations app
8. `state v fed/` → State vs Federal app
9. `turnover/` → Election Turnover app
10. `Voting machine/` → Voting Machines app

### Tentative Mapping (Needs User Confirmation):
- Chapter 1 "The Laboratories" → State vs Federal (state-by-state variation)
- Chapter 2 "Distance Between Citizens and Ballots" → Ballot Access
- Chapter 3 "Economics of Disinformation" → Disinformation
- Chapter 4 "The Pressure Valve" → ??? (NO APP - or use Ballot Measures?)
- Chapter 5 "Pathways to Power" → Political Leaders
- Chapter 6 "The New Money" → Small Dollar Donations
- Chapter 7 "Technicians Leave the Factory Floor" → Election Turnover
- Chapter 8 "Phantom Constituents" → Gerrymandering
- Chapter 9 "The Vulnerability Layer" → Voting Machines
- Chapter 10 "Rebuilding the Machinery" → ??? (NO APP - or use Voting Machines recommendations tab?)
- Chapter 11 "The Aging Machine" → ??? (NO APP - or use Voting Machines overview?)

### Apps Not Yet Mapped:
- **Ballot Measures** - Where does this fit?
- **Deepfakes** - Where does this fit? (Could be part of Chapter 3 Disinformation?)

## Questions to Resolve Tomorrow

1. **How should we map the 10 apps to 11 chapters?**
   - Should some chapters share the same app?
   - Should some chapters not have an interactive component?
   - Where do Ballot Measures and Deepfakes fit?

2. **Chapter Naming in Navigation**
   - Should we use book chapter numbers and titles in the navigation?
   - Example: "Ch. 1: The Laboratories" instead of "Ballot Access"?

3. **Missing Chapters**
   - Does "The Pressure Valve" need a new app built?
   - Does "Rebuilding the Machinery" need a new app?
   - Does "The Aging Machine" need a new app?

## Files Created

### Core Application Files:
- `index.html` - Main application shell (1,679 bytes)
- `app.js` - Application controller (2,984 bytes)
- `css/shared.css` - Shared design system (13,683 bytes)

### Chapter Modules:
- `chapters/chapter1-ballot-access.js` (14,552 bytes)
- `chapters/chapter2-ballot-measures.js` (8,710 bytes)
- `chapters/chapter3-deepfake.js` (14,696 bytes)
- `chapters/chapter4-disinformation.js` (8,709 bytes)
- `chapters/chapter5-gerrymandering.js` (7,300 bytes)
- `chapters/chapter6-leaders.js` (8,896 bytes)
- `chapters/chapter7-donations.js` (9,816 bytes)
- `chapters/chapter8-state-federal.js` (12,849 bytes)
- `chapters/chapter9-turnover.js` (9,241 bytes)
- `chapters/chapter10-voting-machines.js` (15,795 bytes)

### Documentation:
- `README.md` - Complete usage guide (9,204 bytes)
- `CLAUDE.md` - Claude Code guidance (6,298 bytes)
- `PROJECT_NOTES.md` - This file

## Next Steps (Tomorrow)

1. **Clarify chapter mapping** with user
2. **Rename chapter files** if needed to match book chapter numbers
3. **Update navigation** in index.html to use book chapter titles
4. **Reorganize or merge apps** based on final mapping
5. **Create any missing chapters** if needed
6. **Final testing** of all chapters
7. **Update documentation** to reflect final structure

## Technical Details

### Application Architecture:
- **Pattern:** Self-registering chapter modules
- **Router:** Hash-based routing in app.js
- **Lifecycle:** render() → init() → cleanup()
- **State:** Each chapter manages its own state
- **Charts:** Chart.js from CDN, destroyed in cleanup()

### Design System:
- **Colors:** Cream/charcoal with teal accents
- **Typography:** System fonts (-apple-system, BlinkMacSystemFont, Segoe UI)
- **Spacing:** 8px grid (--space-8 through --space-32)
- **Breakpoints:** 768px (mobile), 1024px (tablet)

### Running the App:
```bash
# Server already running on port 8000
http://localhost:8000

# Or restart with:
python3 -m http.server 8000
```

## Original App Locations (For Reference)

Still present in original directories:
- `/home/cary/code/mod/ballot access/index.html`
- `/home/cary/code/mod/Ballot measure/index.html`
- `/home/cary/code/mod/Deepfake/index.html`
- `/home/cary/code/mod/disinformation/disinfo-economics-app/`
- `/home/cary/code/mod/Gerrymander/index.html`
- `/home/cary/code/mod/leader/index.html`
- `/home/cary/code/mod/small dollar donation/index.html`
- `/home/cary/code/mod/state v fed/index.html`
- `/home/cary/code/mod/turnover/index.html`
- `/home/cary/code/mod/Voting machine/index.html`

## Key Decisions Made

1. **Modular structure** over single-file - easier to maintain
2. **Vanilla JavaScript** - no build process, maximum simplicity
3. **Hash routing** - allows shareable chapter links
4. **CSS variables** - easy theming and dark mode
5. **Self-contained chapters** - each can be updated independently
6. **Progressive enhancement** - works without JavaScript for basic content

## Known Good State

- All 10 chapter modules load without errors
- Navigation switches chapters correctly
- Dark mode works
- Responsive design tested
- Charts render properly
- All original functionality preserved

---

**Resume Point:** Need user to clarify how to map 10 apps to 11 book chapters, then update navigation and chapter naming accordingly.
