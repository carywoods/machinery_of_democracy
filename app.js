/**
 * The Machinery of Democracy - Main Application Controller
 * Handles chapter navigation and initialization
 */

class MachineryOfDemocracy {
    constructor() {
        this.currentChapter = null;
        this.chapters = new Map();
        this.container = null;
        this.navButtons = null;
    }

    init() {
        // Get DOM references
        this.container = document.getElementById('chapter-container');
        this.navButtons = document.querySelectorAll('.chapter-button');

        // Set up navigation event listeners
        this.navButtons.forEach(button => {
            button.addEventListener('click', () => {
                const chapterId = button.dataset.chapter;
                this.switchToChapter(chapterId);
            });
        });

        // Load the first chapter from URL hash or default to ballot-access
        const hash = window.location.hash.slice(1);
        const initialChapter = hash || 'ballot-access';
        this.switchToChapter(initialChapter);

        // Handle browser back/forward
        window.addEventListener('hashchange', () => {
            const chapterId = window.location.hash.slice(1);
            if (chapterId) {
                this.switchToChapter(chapterId, false);
            }
        });
    }

    registerChapter(id, chapter) {
        this.chapters.set(id, chapter);
    }

    switchToChapter(chapterId, updateHash = true) {
        // Update URL hash
        if (updateHash) {
            window.location.hash = chapterId;
        }

        // Update navigation buttons
        this.navButtons.forEach(button => {
            if (button.dataset.chapter === chapterId) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });

        // Cleanup previous chapter
        if (this.currentChapter && this.chapters.get(this.currentChapter)) {
            const prevChapter = this.chapters.get(this.currentChapter);
            if (prevChapter.cleanup) {
                prevChapter.cleanup();
            }
        }

        // Load and render new chapter
        const chapter = this.chapters.get(chapterId);
        if (chapter) {
            this.currentChapter = chapterId;
            this.container.innerHTML = '';
            this.container.appendChild(chapter.render());

            // Initialize chapter if it has an init method
            if (chapter.init) {
                // Use setTimeout to ensure DOM is ready
                setTimeout(() => chapter.init(), 0);
            }

            // Scroll to top
            window.scrollTo(0, 0);
        } else {
            console.warn(`Chapter "${chapterId}" not found`);
            this.container.innerHTML = `
                <div class="empty-state">
                    <h2>Chapter Not Found</h2>
                    <p>The requested chapter "${chapterId}" could not be loaded.</p>
                </div>
            `;
        }
    }
}

// Create app instance immediately so chapter scripts can register
const app = new MachineryOfDemocracy();

// Initialize after DOM and all chapter scripts are loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        app.init();
    });
} else {
    // DOM already loaded
    app.init();
}
