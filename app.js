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

        // Analytics configuration
        // Set to null to disable tracking, or your tracking endpoint URL
        this.trackingEndpoint = 'https://hcwoods.com/track.php';
        this.trackingEnabled = true;
    }

    /**
     * Send tracking event to analytics endpoint
     */
    track(eventType, additionalData = {}) {
        if (!this.trackingEnabled || !this.trackingEndpoint) {
            return;
        }

        try {
            const data = {
                timestamp: new Date().toISOString(),
                event_type: eventType,
                page: window.location.pathname,
                referrer: document.referrer || 'direct',
                user_agent: navigator.userAgent,
                screen_width: window.screen.width,
                screen_height: window.screen.height,
                ...additionalData
            };

            // Send beacon (non-blocking, works even if user navigates away)
            if (navigator.sendBeacon) {
                const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
                navigator.sendBeacon(this.trackingEndpoint, blob);
            } else {
                // Fallback to fetch for older browsers
                fetch(this.trackingEndpoint, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data),
                    keepalive: true
                }).catch(err => console.warn('Tracking failed:', err));
            }
        } catch (err) {
            console.warn('Tracking error:', err);
        }
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

        // Track initial page load
        this.track('page_load', {
            chapter_id: initialChapter,
            chapter_title: this.getChapterTitle(initialChapter)
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

            // Track chapter view (only when not triggered by hashchange)
            if (updateHash) {
                this.track('chapter_view', {
                    chapter_id: chapterId,
                    chapter_title: this.getChapterTitle(chapterId)
                });
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

    /**
     * Get human-readable chapter title from chapter ID
     */
    getChapterTitle(chapterId) {
        const button = document.querySelector(`[data-chapter="${chapterId}"]`);
        return button ? button.textContent.trim() : chapterId;
    }
}

// Create app instance immediately so chapter scripts can register
const app = new MachineryOfDemocracy();
