/**
 * Chapter 7: Small Dollar Donations
 * Campaign finance tracker focusing on small-dollar fundraising evolution
 */

(function() {
    const data = [
        {year: 2010, smallDonor: 19, actblue: null, winred: null, events: 'Tea Party movement energizes small donors'},
        {year: 2012, smallDonor: 18, actblue: 0.329, winred: null, events: 'Obama re-election; ActBlue processes $329M'},
        {year: 2014, smallDonor: 17, actblue: 0.329, winred: null, events: 'Republican wave election'},
        {year: 2016, smallDonor: 23.97, actblue: 0.8, winred: null, events: 'Bernie Sanders revolution; Trump small-donor surge'},
        {year: 2018, smallDonor: 24, actblue: 1.6, winred: null, events: 'Blue Wave; Democratic House takeover; $1.6B via ActBlue'},
        {year: 2020, smallDonor: 23.97, actblue: 4.8, winred: 1.2, events: 'George Floyd protests; RBG death; WinRed launches'},
        {year: 2022, smallDonor: 24, actblue: 2.2, winred: 1.0, events: 'Dobbs decision spurs record ActBlue day ($20.6M)'},
        {year: 2024, smallDonor: 25, actblue: 4.3, winred: 2.1, events: 'Harris campaign raises $81M in 24 hours via ActBlue'}
    ];

    let currentChart = null;

    const chapter = {
        render() {
            const container = document.createElement('div');
            container.className = 'chapter-content active';
            container.innerHTML = `
                <div class="section-header">
                    <h2 class="section-title">Campaign Finance Tracker</h2>
                    <p class="section-subtitle">
                        Small-Dollar Fundraising Evolution (2010-2024): Tracking the rise of grassroots political funding
                        through platforms like ActBlue and WinRed.
                    </p>
                </div>

                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-label">Small Donor Share (2024)</div>
                        <div class="stat-value">25%</div>
                        <div class="stat-description">Of all campaign contributions</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-label">ActBlue Total (2024)</div>
                        <div class="stat-value">$4.3B</div>
                        <div class="stat-description">+95% vs 2022</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-label">WinRed Total (2024)</div>
                        <div class="stat-value">$2.1B</div>
                        <div class="stat-description">+110% vs 2022</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-label">Growth Since 2010</div>
                        <div class="stat-value">+32%</div>
                        <div class="stat-description">Small donor share increase</div>
                    </div>
                </div>

                <div class="controls">
                    <button class="btn active" data-view="all">All Metrics</button>
                    <button class="btn" data-view="platforms">Platform Comparison</button>
                    <button class="btn" data-view="donors">Small Donor Share</button>
                </div>

                <div class="chart-container">
                    <h3 class="chart-title" id="chart-title">Campaign Finance Evolution (2010-2024)</h3>
                    <canvas id="donations-chart" height="100"></canvas>
                </div>

                <div class="data-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th>Small Donor %</th>
                                <th>ActBlue ($B)</th>
                                <th>WinRed ($B)</th>
                                <th>Key Events</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${data.map(d => `
                                <tr>
                                    <td><strong>${d.year}</strong></td>
                                    <td>${d.smallDonor}%</td>
                                    <td>${d.actblue !== null ? '$' + d.actblue.toFixed(2) + 'B' : '—'}</td>
                                    <td>${d.winred !== null ? '$' + d.winred.toFixed(2) + 'B' : '—'}</td>
                                    <td>${d.events}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>

                <div class="info-box">
                    <h3>The Small Dollar Revolution</h3>
                    <ul>
                        <li><strong>ActBlue Dominance:</strong> Founded 2004, ActBlue processed $4.8 billion in 2020, democratizing political fundraising for Democrats.</li>
                        <li><strong>WinRed Response:</strong> Launched 2019 to compete with ActBlue, consolidating Republican small-dollar infrastructure.</li>
                        <li><strong>Bernie Effect:</strong> 2016 Sanders campaign proved viability of grassroots funding, averaging $27 per contribution.</li>
                        <li><strong>Crisis Fundraising:</strong> Major events (RBG death, Dobbs decision) trigger massive donation surges within hours.</li>
                        <li><strong>Mobile Revolution:</strong> Smartphone optimization made impulse political giving as easy as e-commerce.</li>
                        <li><strong>Recurring Donations:</strong> Auto-renewal subscriptions now represent significant share of small-dollar fundraising.</li>
                    </ul>
                </div>
            `;

            return container;
        },

        init() {
            this.renderChart('all');

            document.querySelectorAll('.btn[data-view]').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    document.querySelectorAll('.btn[data-view]').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');

                    const view = btn.dataset.view;
                    const titles = {
                        all: 'Campaign Finance Evolution (2010-2024)',
                        platforms: 'Platform Fundraising Comparison',
                        donors: 'Small Donor Share Trend'
                    };

                    document.getElementById('chart-title').textContent = titles[view];
                    this.renderChart(view);
                });
            });
        },

        renderChart(view) {
            if (currentChart) {
                currentChart.destroy();
            }

            const ctx = document.getElementById('donations-chart').getContext('2d');
            const datasets = [];

            if (view === 'all' || view === 'donors') {
                datasets.push({
                    label: 'Small Donor Share (%)',
                    data: data.map(d => d.smallDonor),
                    borderColor: 'rgb(46, 125, 50)',
                    backgroundColor: 'rgba(46, 125, 50, 0.1)',
                    yAxisID: 'y',
                    tension: 0.3
                });
            }

            if (view === 'all' || view === 'platforms') {
                datasets.push({
                    label: 'ActBlue ($B)',
                    data: data.map(d => d.actblue),
                    borderColor: 'rgb(0, 102, 204)',
                    backgroundColor: 'rgba(0, 102, 204, 0.1)',
                    yAxisID: view === 'all' ? 'y1' : 'y',
                    tension: 0.3
                });
                datasets.push({
                    label: 'WinRed ($B)',
                    data: data.map(d => d.winred),
                    borderColor: 'rgb(204, 0, 0)',
                    backgroundColor: 'rgba(204, 0, 0, 0.1)',
                    yAxisID: view === 'all' ? 'y1' : 'y',
                    tension: 0.3
                });
            }

            const scales = view === 'all' ? {
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    title: { display: true, text: 'Small Donor %' }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    title: { display: true, text: 'Platform $B' },
                    grid: { drawOnChartArea: false }
                }
            } : {
                y: {
                    beginAtZero: true,
                    title: { display: true, text: view === 'donors' ? 'Percentage' : 'Billions USD' }
                }
            };

            currentChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: data.map(d => d.year),
                    datasets: datasets
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    interaction: {
                        mode: 'index',
                        intersect: false,
                    },
                    plugins: {
                        legend: {
                            position: 'top',
                        }
                    },
                    scales: scales
                }
            });
        },

        cleanup() {
            if (currentChart) {
                currentChart.destroy();
                currentChart = null;
            }
        }
    };

    app.registerChapter('donations', chapter);
})();
