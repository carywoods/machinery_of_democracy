/**
 * Chapter 9: Election Turnover
 * Election workforce monitor tracking turnover, threats, and capacity in U.S. election administration
 */

(function() {
    const stateData = [
        { name: 'Missouri', region: 'midwest', turnover: 87, harassment: 45, risk: 'high' },
        { name: 'Arizona', region: 'west', turnover: 80, harassment: 67, risk: 'high' },
        { name: 'Nevada', region: 'west', turnover: 60, harassment: 55, risk: 'high' },
        { name: 'Pennsylvania', region: 'northeast', turnover: 58, harassment: 48, risk: 'high' },
        { name: 'Michigan', region: 'midwest', turnover: 52, harassment: 52, risk: 'high' },
        { name: 'Georgia', region: 'south', turnover: 48, harassment: 61, risk: 'high' },
        { name: 'Wisconsin', region: 'midwest', turnover: 45, harassment: 49, risk: 'medium' },
        { name: 'Florida', region: 'south', turnover: 42, harassment: 38, risk: 'medium' },
        { name: 'Ohio', region: 'midwest', turnover: 39, harassment: 35, risk: 'medium' },
        { name: 'North Carolina', region: 'south', turnover: 38, harassment: 40, risk: 'medium' },
        { name: 'Texas', region: 'south', turnover: 35, harassment: 32, risk: 'medium' },
        { name: 'California', region: 'west', turnover: 33, harassment: 44, risk: 'medium' },
        { name: 'Illinois', region: 'midwest', turnover: 30, harassment: 28, risk: 'low' },
        { name: 'New York', region: 'northeast', turnover: 28, harassment: 31, risk: 'low' },
        { name: 'Virginia', region: 'south', turnover: 27, harassment: 29, risk: 'low' },
        { name: 'Washington', region: 'west', turnover: 26, harassment: 25, risk: 'low' }
    ];

    const caseStudies = [
        {
            title: 'Luzerne County Crisis',
            location: 'Pennsylvania',
            summary: '5 election directors in 5 years. Nov 2022 ballot paper shortage affected 44 precincts when acting director with only 3 months experience faced crisis.'
        },
        {
            title: 'Maricopa County Takeover',
            location: 'Arizona',
            summary: '12 of 15 county election chiefs departed since 2020. Outgoing recorder suffered death threats. 2024 election saw election denier win office.'
        },
        {
            title: 'Rochester Hills Threats',
            location: 'Michigan',
            summary: 'Clerk Tina Barton received death threat: "knife to throat, take you out your family." Perpetrator sentenced to 14 months. Barton left position.'
        },
        {
            title: 'Missouri Mass Exodus',
            location: 'Missouri',
            summary: '87% of 110 county clerks left positions between 2020-2024, representing catastrophic institutional knowledge loss statewide.'
        }
    ];

    const chapter = {
        render() {
            const container = document.createElement('div');
            container.className = 'chapter-content active';
            container.innerHTML = `
                <div class="section-header">
                    <h2 class="section-title">Election Workforce Monitor</h2>
                    <p class="section-subtitle">
                        Tracking turnover, threats, and capacity in U.S. election administration (2000-2024)
                    </p>
                </div>

                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-label">National Turnover Rate</div>
                        <div class="stat-value">41%</div>
                        <div class="stat-description">Highest in 25+ years (2024)</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-label">Poll Workers</div>
                        <div class="stat-value">644K</div>
                        <div class="stat-description">Down 130K from 2020</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-label">Officials Threatened</div>
                        <div class="stat-value">38%</div>
                        <div class="stat-description">Up from 30% in 2023</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-label">Officials 50+ Years</div>
                        <div class="stat-value">74%</div>
                        <div class="stat-description">Up from 63% in 2004-2008</div>
                    </div>
                </div>

                <div class="controls">
                    <div class="control-group">
                        <label for="region-filter">Region:</label>
                        <select id="region-filter">
                            <option value="all">All Regions</option>
                            <option value="northeast">Northeast</option>
                            <option value="midwest">Midwest</option>
                            <option value="south">South</option>
                            <option value="west">West</option>
                        </select>
                    </div>
                </div>

                <h3 style="font-size: 1.25rem; font-weight: 600; margin: 32px 0 20px; color: var(--color-text);">
                    State-Level Risk Assessment
                </h3>
                <div id="state-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 16px; margin-bottom: 32px;">
                </div>

                <h3 style="font-size: 1.25rem; font-weight: 600; margin: 32px 0 20px; color: var(--color-text);">
                    Case Studies
                </h3>
                <div class="data-cards">
                    ${caseStudies.map(study => `
                        <div class="card">
                            <div class="card-title">${study.title}</div>
                            <div style="font-size: 0.9rem; color: var(--color-text-secondary); margin-bottom: 12px;">
                                ${study.location}
                            </div>
                            <p style="font-size: 0.9rem; line-height: 1.6;">${study.summary}</p>
                        </div>
                    `).join('')}
                </div>

                <div class="info-box">
                    <h3>Key Findings</h3>
                    <ul>
                        <li><strong>Turnover Crisis:</strong> 41% national turnover rate is highest in 25+ years, threatening institutional knowledge.</li>
                        <li><strong>Harassment Epidemic:</strong> 38% of election officials received threats in 2024, up from 30% in 2023.</li>
                        <li><strong>Aging Workforce:</strong> 74% of election officials are over 50, with many nearing retirement without succession planning.</li>
                        <li><strong>Missouri Catastrophe:</strong> 87% clerk turnover in single state represents worst-case scenario for election administration.</li>
                        <li><strong>Experience Loss:</strong> Pennsylvania lost 293 combined years of experience, increasing error vulnerability.</li>
                        <li><strong>Poll Worker Shortage:</strong> 644K poll workers in 2024 vs. 774K in 2020, a 17% decline.</li>
                    </ul>
                </div>
            `;

            return container;
        },

        init() {
            this.renderStates('all');

            document.getElementById('region-filter').addEventListener('change', (e) => {
                this.renderStates(e.target.value);
            });
        },

        renderStates(region) {
            const grid = document.getElementById('state-grid');
            const filtered = region === 'all'
                ? stateData
                : stateData.filter(s => s.region === region);

            grid.innerHTML = filtered.map(state => {
                const riskColor = {
                    'high': 'var(--color-error)',
                    'medium': 'var(--color-warning)',
                    'low': 'var(--color-primary)'
                }[state.risk];

                const badgeClass = {
                    'high': 'badge-critical',
                    'medium': 'badge-warning',
                    'low': 'badge-info'
                }[state.risk];

                return `
                    <div class="card" style="border-left: 4px solid ${riskColor}; padding: 16px;">
                        <div style="font-weight: 600; margin-bottom: 8px;">${state.name}</div>
                        <div style="font-size: 0.85rem; color: var(--color-text-secondary); margin-bottom: 4px;">
                            Turnover: ${state.turnover}%
                        </div>
                        <div style="font-size: 0.85rem; color: var(--color-text-secondary); margin-bottom: 8px;">
                            Harassment: ${state.harassment}%
                        </div>
                        <span class="badge ${badgeClass}">${state.risk.toUpperCase()} RISK</span>
                    </div>
                `;
            }).join('');
        },

        cleanup() {
            // No cleanup needed
        }
    };

    app.registerChapter('turnover', chapter);
})();
