/**
 * Chapter 2: Ballot Measures
 * Citizen-led direct democracy data dashboard
 */

(function() {
    const data = {
        years: [2010, 2012, 2014, 2016, 2018, 2020, 2022, 2024],
        proposed: [159, 174, 146, 154, 164, 120, 130, 146],
        approved: [74, 97, 60, 71, 79, 68, 67, 78]
    };

    const issueCategories = {
        'Healthcare': [
            {state: 'Missouri', year: 2022, title: 'Medicaid Expansion', result: 'Passed'},
            {state: 'Ohio', year: 2023, title: 'Abortion Rights', result: 'Passed'},
            {state: 'Kansas', year: 2022, title: 'Abortion Restrictions', result: 'Rejected'}
        ],
        'Criminal Justice': [
            {state: 'California', year: 2020, title: 'Prop 25 (End Cash Bail)', result: 'Rejected'},
            {state: 'Oregon', year: 2020, title: 'Drug Decriminalization', result: 'Passed'},
            {state: 'Colorado', year: 2022, title: 'Psychedelic Therapy', result: 'Passed'}
        ],
        'Voting Rights': [
            {state: 'Florida', year: 2018, title: 'Restore Voting Rights to Felons', result: 'Passed'},
            {state: 'Michigan', year: 2022, title: 'Voting Rights Act', result: 'Passed'},
            {state: 'Nevada', year: 2024, title: 'Voter ID Requirements', result: 'Passed'}
        ],
        'Economic Policy': [
            {state: 'Florida', year: 2024, title: 'Minimum Wage ($15)', result: 'Passed'},
            {state: 'California', year: 2020, title: 'App Worker Classification (Prop 22)', result: 'Passed'},
            {state: 'Massachusetts', year: 2024, title: 'Minimum Wage for Tipped Workers', result: 'Rejected'}
        ]
    };

    const chapter = {
        render() {
            const container = document.createElement('div');
            container.className = 'chapter-content active';
            container.innerHTML = `
                <div class="section-header">
                    <h2 class="section-title">Ballot Measures Dashboard</h2>
                    <p class="section-subtitle">
                        Tracking citizen-led direct democracy initiatives across U.S. states, from healthcare and criminal justice
                        to voting rights and economic policy.
                    </p>
                </div>

                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-label">Measures Proposed (2024)</div>
                        <div class="stat-value">146</div>
                        <div class="stat-description">Across all states</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-label">Measures Approved (2024)</div>
                        <div class="stat-value">78</div>
                        <div class="stat-description">53% approval rate</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-label">Most Active States</div>
                        <div class="stat-value">CA, FL, CO</div>
                        <div class="stat-description">Top 3 by volume</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-label">Total (2010-2024)</div>
                        <div class="stat-value">1,293</div>
                        <div class="stat-description">Measures proposed</div>
                    </div>
                </div>

                <div class="chart-container">
                    <h3 class="chart-title">Ballot Measures Over Time (2010-2024)</h3>
                    <canvas id="measures-chart" height="100"></canvas>
                </div>

                <div class="controls">
                    <label for="category-filter">Filter by Issue:</label>
                    <select id="category-filter">
                        <option value="all">All Issues</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Criminal Justice">Criminal Justice</option>
                        <option value="Voting Rights">Voting Rights</option>
                        <option value="Economic Policy">Economic Policy</option>
                    </select>
                </div>

                <div id="measures-container" class="data-cards"></div>

                <div class="info-box">
                    <h3>Key Trends in Direct Democracy</h3>
                    <ul>
                        <li><strong>Healthcare Dominance:</strong> Medicaid expansion and abortion rights have been major ballot issues since 2018.</li>
                        <li><strong>Criminal Justice Reform:</strong> Drug decriminalization, bail reform, and sentencing reform gaining traction.</li>
                        <li><strong>Voting Rights:</strong> Both expansive measures (automatic registration) and restrictive measures (voter ID) appearing.</li>
                        <li><strong>Economic Populism:</strong> Minimum wage increases consistently popular, even in conservative states.</li>
                        <li><strong>Circumventing Legislatures:</strong> Voters increasingly use ballot measures when legislatures are gridlocked or unresponsive.</li>
                    </ul>
                </div>
            `;

            return container;
        },

        init() {
            this.renderChart();
            this.renderMeasures('all');

            document.getElementById('category-filter').addEventListener('change', (e) => {
                this.renderMeasures(e.target.value);
            });
        },

        renderChart() {
            const ctx = document.getElementById('measures-chart').getContext('2d');
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: data.years,
                    datasets: [
                        {
                            label: 'Proposed',
                            data: data.proposed,
                            borderColor: 'rgb(33, 128, 141)',
                            backgroundColor: 'rgba(33, 128, 141, 0.1)',
                            tension: 0.3
                        },
                        {
                            label: 'Approved',
                            data: data.approved,
                            borderColor: 'rgb(34, 197, 94)',
                            backgroundColor: 'rgba(34, 197, 94, 0.1)',
                            tension: 0.3
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        title: {
                            display: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Number of Measures'
                            }
                        },
                        x: {
                            title: {
                                display: true,
                                text: 'Year'
                            }
                        }
                    }
                }
            });
        },

        renderMeasures(category) {
            const container = document.getElementById('measures-container');
            let measures = [];

            if (category === 'all') {
                Object.values(issueCategories).forEach(cat => measures.push(...cat));
            } else {
                measures = issueCategories[category] || [];
            }

            container.innerHTML = measures.map(measure => `
                <div class="card">
                    <div class="card-title">${measure.title}</div>
                    <div style="font-size: 0.9rem; color: var(--color-text-secondary); margin-bottom: 8px;">
                        ${measure.state} • ${measure.year}
                    </div>
                    <div>
                        <span class="badge ${measure.result === 'Passed' ? 'badge-info' : 'badge-warning'}">
                            ${measure.result}
                        </span>
                    </div>
                </div>
            `).join('');
        },

        cleanup() {
            // Chart.js cleanup handled by library
        }
    };

    app.registerChapter('ballot-measures', chapter);
})();
