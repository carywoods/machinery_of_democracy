/**
 * Chapter 6: Political Leaders
 * Political leadership predictor and analysis
 */

(function() {
    const leadershipFactors = [
        {factor: 'Military Service', weight: 15, description: 'Veterans overrepresented in Congress'},
        {factor: 'Legal Background', weight: 40, description: 'Lawyers dominate political careers'},
        {factor: 'Business Experience', weight: 25, description: 'Entrepreneurial background'},
        {factor: 'Political Dynasty', weight: 30, description: 'Family connections to politics'},
        {factor: 'Higher Education', weight: 35, description: 'Graduate degree holders'},
        {factor: 'Age 40-60', weight: 20, description: 'Optimal career stage'},
        {factor: 'State Legislature', weight: 45, description: 'Local political experience'},
        {factor: 'Urban Background', weight: 10, description: 'Major metropolitan area'}
    ];

    const profileExamples = [
        {name: 'Typical Senator', score: 185, traits: ['Law degree', 'State legislature', 'Age 52', 'Political family']},
        {name: 'Typical Representative', score: 145, traits: ['Business owner', 'City council', 'Age 48', 'Higher ed']},
        {name: 'Typical Governor', score: 175, traits: ['Attorney', 'State legislature', 'Age 54', 'Military']}
    ];

    const chapter = {
        render() {
            const container = document.createElement('div');
            container.className = 'chapter-content active';
            container.innerHTML = `
                <div class="section-header">
                    <h2 class="section-title">Political Leadership Analysis</h2>
                    <p class="section-subtitle">
                        Understanding the backgrounds, career paths, and demographic factors that predict
                        success in American political leadership positions.
                    </p>
                </div>

                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-label">Congress with Law Degrees</div>
                        <div class="stat-value">40%</div>
                        <div class="stat-description">Most common background</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-label">Average Age (Senate)</div>
                        <div class="stat-value">64 yrs</div>
                        <div class="stat-description">Oldest in history</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-label">Military Veterans (Congress)</div>
                        <div class="stat-value">18%</div>
                        <div class="stat-description">Down from 75% in 1970</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-label">Political Dynasties</div>
                        <div class="stat-value">12%</div>
                        <div class="stat-description">Have family in politics</div>
                    </div>
                </div>

                <div class="info-box" style="background: rgba(var(--color-teal-500-rgb), 0.05);">
                    <h3>Leadership Predictor Tool</h3>
                    <p style="color: var(--color-text-secondary); margin-bottom: 16px;">
                        Select factors that apply to calculate a political viability score
                    </p>
                    <div id="factor-checkboxes" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 12px; margin-bottom: 20px;">
                        ${leadershipFactors.map((factor, index) => `
                            <label style="display: flex; align-items: start; gap: 8px; cursor: pointer;">
                                <input type="checkbox" data-weight="${factor.weight}" data-index="${index}" style="margin-top: 4px;">
                                <div>
                                    <div style="font-weight: 500; color: var(--color-text);">${factor.factor}</div>
                                    <div style="font-size: 0.85rem; color: var(--color-text-secondary);">${factor.description}</div>
                                </div>
                            </label>
                        `).join('')}
                    </div>
                    <div style="padding: 16px; background: var(--color-surface); border-radius: var(--radius-base); border: 2px solid var(--color-primary);">
                        <div style="font-weight: 600; color: var(--color-primary); margin-bottom: 8px;">Your Calculated Score:</div>
                        <div style="font-size: 2rem; font-weight: 600; color: var(--color-text);" id="calculated-score">0</div>
                        <div style="font-size: 0.9rem; color: var(--color-text-secondary);" id="score-assessment">Select factors to calculate viability</div>
                    </div>
                </div>

                <h3 style="font-size: 1.25rem; font-weight: 600; margin: 32px 0 20px; color: var(--color-text);">
                    Typical Leadership Profiles
                </h3>
                <div class="data-cards">
                    ${profileExamples.map(profile => `
                        <div class="card">
                            <div class="card-title">${profile.name}</div>
                            <div style="font-size: 1.5rem; font-weight: 600; color: var(--color-primary); margin: 12px 0;">
                                Score: ${profile.score}
                            </div>
                            <div style="font-size: 0.85rem; color: var(--color-text-secondary);">
                                ${profile.traits.join(' • ')}
                            </div>
                        </div>
                    `).join('')}
                </div>

                <div class="info-box">
                    <h3>Key Findings on Political Leadership</h3>
                    <ul>
                        <li><strong>Legal Training Dominance:</strong> 40% of Congress members have law degrees, far exceeding the general population proportion.</li>
                        <li><strong>Age Acceleration:</strong> Average Senate age has increased from 53 in 1980 to 64 in 2024, the oldest in U.S. history.</li>
                        <li><strong>Military Service Decline:</strong> Congressional veterans dropped from 75% in 1970 to 18% in 2024, reducing civilian-military connection.</li>
                        <li><strong>Wealth Barrier:</strong> Median net worth of Congress members is ~$1 million, compared to ~$121,700 for American households.</li>
                        <li><strong>State Legislature Pipeline:</strong> 45% of Congress members previously served in state legislatures, making them critical training grounds.</li>
                        <li><strong>Dynasty Effect:</strong> Political families (Bushes, Clintons, Kennedys) have substantial advantages in fundraising and name recognition.</li>
                    </ul>
                </div>
            `;

            return container;
        },

        init() {
            const checkboxes = document.querySelectorAll('#factor-checkboxes input[type="checkbox"]');
            const scoreDisplay = document.getElementById('calculated-score');
            const assessmentDisplay = document.getElementById('score-assessment');

            const calculateScore = () => {
                let total = 0;
                checkboxes.forEach(cb => {
                    if (cb.checked) {
                        total += parseInt(cb.dataset.weight);
                    }
                });

                scoreDisplay.textContent = total;

                if (total === 0) {
                    assessmentDisplay.textContent = 'Select factors to calculate viability';
                } else if (total < 50) {
                    assessmentDisplay.textContent = 'Low viability - unlikely to reach national office';
                } else if (total < 100) {
                    assessmentDisplay.textContent = 'Moderate viability - potential for state legislature';
                } else if (total < 150) {
                    assessmentDisplay.textContent = 'Good viability - strong candidate for U.S. House';
                } else if (total < 180) {
                    assessmentDisplay.textContent = 'High viability - competitive for Senate or Governor';
                } else {
                    assessmentDisplay.textContent = 'Excellent viability - top-tier national candidate';
                }
            };

            checkboxes.forEach(cb => {
                cb.addEventListener('change', calculateScore);
            });
        },

        cleanup() {
            // No cleanup needed
        }
    };

    app.registerChapter('leaders', chapter);
})();
