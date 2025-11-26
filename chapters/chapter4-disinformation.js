/**
 * Chapter 4: Disinformation Economics
 * Economics of political disinformation research dashboard
 */

(function() {
    const appData = {
        category: ['Social Media Ad Spending', 'Bot Farm Operations', 'Content Farms', 'Troll Armies', 'Deepfake Production', 'Coordination Costs'],
        amount_billions: [5.2, 2.1, 1.3, 0.8, 0.4, 0.6],
        year: [2023, 2023, 2023, 2023, 2023, 2023]
    };

    const platformData = {
        labels: ['Facebook', 'Twitter/X', 'TikTok', 'YouTube', 'Instagram'],
        values: [45, 25, 15, 10, 5]
    };

    const chapter = {
        render() {
            const container = document.createElement('div');
            container.className = 'chapter-content active';
            container.innerHTML = `
                <div class="section-header">
                    <h2 class="section-title">Economics of Political Disinformation</h2>
                    <p class="section-subtitle">
                        Understanding the financial infrastructure, funding sources, and economic incentives
                        driving political disinformation campaigns in American elections.
                    </p>
                </div>

                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-label">Total Industry Value (2023)</div>
                        <div class="stat-value">$10.4B</div>
                        <div class="stat-description">Global estimate</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-label">U.S. Market Share</div>
                        <div class="stat-value">42%</div>
                        <div class="stat-description">~$4.4 billion</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-label">Primary Platform</div>
                        <div class="stat-value">Facebook</div>
                        <div class="stat-description">45% of activity</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-label">Average Bot Farm Cost</div>
                        <div class="stat-value">$50K</div>
                        <div class="stat-description">Per month operation</div>
                    </div>
                </div>

                <div class="chart-container">
                    <h3 class="chart-title">Disinformation Spending by Category (2023)</h3>
                    <canvas id="spending-chart" height="100"></canvas>
                </div>

                <div class="chart-container">
                    <h3 class="chart-title">Platform Distribution</h3>
                    <canvas id="platform-chart" height="80"></canvas>
                </div>

                <div class="info-box">
                    <h3>Key Economic Factors</h3>
                    <ul>
                        <li><strong>Social Media Ad Spending:</strong> $5.2B - The largest category, including dark pattern ads and micro-targeted political messaging.</li>
                        <li><strong>Bot Farm Operations:</strong> $2.1B - Automated accounts that amplify messages and create artificial consensus.</li>
                        <li><strong>Content Farms:</strong> $1.3B - Organizations producing high-volume, low-quality partisan content for ad revenue.</li>
                        <li><strong>Troll Armies:</strong> $800M - Coordinated human operators engaging in harassment and narrative manipulation.</li>
                        <li><strong>Deepfake Production:</strong> $400M - Rapidly growing sector as AI tools become more accessible.</li>
                        <li><strong>Coordination Costs:</strong> $600M - Infrastructure for planning, messaging coordination, and distribution networks.</li>
                    </ul>
                </div>

                <div class="data-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Annual Spending</th>
                                <th>Share</th>
                                <th>Growth Rate</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Social Media Ads</td>
                                <td>$5.2 billion</td>
                                <td>50%</td>
                                <td>+15% YoY</td>
                            </tr>
                            <tr>
                                <td>Bot Farms</td>
                                <td>$2.1 billion</td>
                                <td>20%</td>
                                <td>+25% YoY</td>
                            </tr>
                            <tr>
                                <td>Content Farms</td>
                                <td>$1.3 billion</td>
                                <td>13%</td>
                                <td>+10% YoY</td>
                            </tr>
                            <tr>
                                <td>Troll Armies</td>
                                <td>$800 million</td>
                                <td>8%</td>
                                <td>+5% YoY</td>
                            </tr>
                            <tr>
                                <td>Deepfakes</td>
                                <td>$400 million</td>
                                <td>4%</td>
                                <td>+200% YoY</td>
                            </tr>
                            <tr>
                                <td>Coordination</td>
                                <td>$600 million</td>
                                <td>6%</td>
                                <td>+12% YoY</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `;

            return container;
        },

        init() {
            this.renderSpendingChart();
            this.renderPlatformChart();
        },

        renderSpendingChart() {
            const ctx = document.getElementById('spending-chart').getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: appData.category,
                    datasets: [{
                        label: 'Spending (Billions USD)',
                        data: appData.amount_billions,
                        backgroundColor: 'rgba(33, 128, 141, 0.7)',
                        borderColor: 'rgb(33, 128, 141)',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Billions USD'
                            }
                        }
                    }
                }
            });
        },

        renderPlatformChart() {
            const ctx = document.getElementById('platform-chart').getContext('2d');
            new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: platformData.labels,
                    datasets: [{
                        data: platformData.values,
                        backgroundColor: [
                            'rgba(33, 128, 141, 0.8)',
                            'rgba(50, 184, 198, 0.8)',
                            'rgba(98, 108, 113, 0.8)',
                            'rgba(168, 75, 47, 0.8)',
                            'rgba(192, 21, 47, 0.8)'
                        ],
                        borderWidth: 2,
                        borderColor: '#fff'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                        legend: {
                            position: 'right'
                        }
                    }
                }
            });
        },

        cleanup() {
            // Chart.js cleanup
        }
    };

    app.registerChapter('disinformation', chapter);
})();
