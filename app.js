/**
 * The Machinery of Democracy - Main Application Controller
 * Handles chapter navigation and initialization
 */

class MachineryOfDemocracy {
    constructor() {
        this.currentChapter = null;
        this.chapters = new Map();
        this.container = document.getElementById('chapter-container');
        this.navButtons = document.querySelectorAll('.chapter-button');

        this.init();
    }

    init() {
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

// Initialize the application
const app = new MachineryOfDemocracy();
