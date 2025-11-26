/**
 * Chapter 8: State vs Federal
 * State legislature policy tracker analyzing the shift from federal to state policymaking
 */

(function() {
    const chapter = {
        render() {
            const container = document.createElement('div');
            container.className = 'chapter-content active';
            container.innerHTML = `
                <div class="section-header">
                    <h2 class="section-title">State Legislature Policy Tracker</h2>
                    <p class="section-subtitle">
                        Analyzing the shift of policymaking power from federal to state legislatures,
                        including legislative productivity, voting rights, and policy divergence.
                    </p>
                </div>

                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-label">State Bills Introduced (2025)</div>
                        <div class="stat-value">135,500</div>
                        <div class="stat-description">13.6x more than federal</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-label">State Bills Enacted (2025)</div>
                        <div class="stat-value">29,000</div>
                        <div class="stat-description">28% passage rate</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-label">Federal Bills Introduced (2025)</div>
                        <div class="stat-value">~10,000</div>
                        <div class="stat-description">2.3% passage rate</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-label">Productivity Gap</div>
                        <div class="stat-value">12.2x</div>
                        <div class="stat-description">States are 12x more productive</div>
                    </div>
                </div>

                <div class="tabs">
                    <button class="tab active" data-tab="overview">Overview</button>
                    <button class="tab" data-tab="comparison">State vs Federal</button>
                    <button class="tab" data-tab="policies">Policy Areas</button>
                    <button class="tab" data-tab="insights">Key Insights</button>
                </div>

                <div id="overview" class="tab-content active">
                    <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 20px;">Legislative Activity Trends (2020-2025)</h3>
                    <div class="data-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Year</th>
                                    <th>Bills Introduced</th>
                                    <th>Bills Enacted</th>
                                    <th>Passage Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>2020</td><td>73,250</td><td>—</td><td>—</td></tr>
                                <tr><td>2021</td><td>117,188</td><td>—</td><td>—</td></tr>
                                <tr><td>2022</td><td>75,675</td><td>14,088</td><td>18.6%</td></tr>
                                <tr><td>2023</td><td>121,537</td><td>—</td><td>28.0%</td></tr>
                                <tr><td>2024</td><td>76,756</td><td>14,088</td><td>18.4%</td></tr>
                                <tr style="background: rgba(var(--color-teal-500-rgb), 0.08);">
                                    <td><strong>2025</strong></td><td><strong>135,500</strong></td><td><strong>29,000</strong></td><td><strong>28.0%</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div id="comparison" class="tab-content">
                    <div class="info-box">
                        <h3>Volume Disparity</h3>
                        <p style="margin-bottom: 12px; color: var(--color-text);">State legislatures introduce 13.6 times more bills than Congress</p>
                        <div style="background: var(--color-background); padding: 16px; border-radius: var(--radius-base);">
                            <div style="display: flex; gap: 12px; align-items: center; margin-bottom: 8px;">
                                <div style="flex: 1; height: 32px; background: var(--color-primary); border-radius: 4px; display: flex; align-items: center; padding: 0 12px; color: white; font-weight: 600; font-size: 0.85rem;">
                                    States: 135,500 (93%)
                                </div>
                            </div>
                            <div style="display: flex; gap: 12px; align-items: center;">
                                <div style="flex: 0.07; height: 32px; background: var(--color-slate-500); border-radius: 4px; display: flex; align-items: center; padding: 0 12px; color: white; font-weight: 600; font-size: 0.85rem;">
                                    Federal: 10,000 (7%)
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="info-box">
                        <h3>Effectiveness Gap</h3>
                        <p style="margin-bottom: 12px; color: var(--color-text);">States pass bills at a rate 12.2 times higher than the federal government</p>
                        <div style="background: var(--color-background); padding: 16px; border-radius: var(--radius-base);">
                            <div style="margin-bottom: 12px;">
                                <div style="font-weight: 600; margin-bottom: 4px;">State Passage Rate: 28%</div>
                                <div style="height: 24px; background: rgba(var(--color-teal-500-rgb), 0.2); border-radius: 4px; overflow: hidden;">
                                    <div style="width: 92%; height: 100%; background: var(--color-primary);"></div>
                                </div>
                            </div>
                            <div>
                                <div style="font-weight: 600; margin-bottom: 4px;">Federal Passage Rate: 2.3%</div>
                                <div style="height: 24px; background: rgba(var(--color-slate-500), 0.2); border-radius: 4px; overflow: hidden;">
                                    <div style="width: 8%; height: 100%; background: var(--color-slate-500);"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="info-box">
                        <h3>Federal Gridlock</h3>
                        <p style="color: var(--color-text);">The 118th Congress became one of the least productive sessions in modern history, passing only 34 bills by January 2024.</p>
                    </div>
                </div>

                <div id="policies" class="tab-content">
                    <div class="card" style="margin-bottom: 20px;">
                        <h3 style="font-size: 1.1rem; font-weight: 600; margin-bottom: 16px;">Voting Rights (2025)</h3>
                        <div style="display: grid; gap: 8px;">
                            <div style="display: flex; justify-content: space-between; padding: 12px; background: rgba(var(--color-orange-500-rgb), 0.08); border-radius: var(--radius-base);">
                                <span>Restrictive bills considered</span><strong>469</strong>
                            </div>
                            <div style="display: flex; justify-content: space-between; padding: 12px; background: rgba(var(--color-orange-500-rgb), 0.08); border-radius: var(--radius-base);">
                                <span>Restrictive laws enacted</span><strong>29 in 16 states</strong>
                            </div>
                            <div style="display: flex; justify-content: space-between; padding: 12px; background: rgba(var(--color-teal-500-rgb), 0.08); border-radius: var(--radius-base);">
                                <span>Expansive laws enacted</span><strong>30 in 25 states</strong>
                            </div>
                        </div>
                    </div>

                    <div class="card" style="margin-bottom: 20px;">
                        <h3 style="font-size: 1.1rem; font-weight: 600; margin-bottom: 16px;">Abortion Policy</h3>
                        <div style="display: grid; gap: 8px;">
                            <div style="display: flex; justify-content: space-between; padding: 12px; background: rgba(var(--color-teal-500-rgb), 0.08); border-radius: var(--radius-base);">
                                <span>Bills enacted since Roe v. Wade (1973)</span><strong>1,000+</strong>
                            </div>
                            <div style="display: flex; justify-content: space-between; padding: 12px; background: rgba(var(--color-teal-500-rgb), 0.08); border-radius: var(--radius-base);">
                                <span>States with complete bans</span><strong>13</strong>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <h3 style="font-size: 1.1rem; font-weight: 600; margin-bottom: 16px;">Gun Control & Safety (2025)</h3>
                        <div style="display: grid; gap: 8px;">
                            <div style="display: flex; justify-content: space-between; padding: 12px; background: rgba(var(--color-teal-500-rgb), 0.08); border-radius: var(--radius-base);">
                                <span>State funding for violence intervention</span><strong>$47M+</strong>
                            </div>
                            <div style="display: flex; justify-content: space-between; padding: 12px; background: rgba(var(--color-teal-500-rgb), 0.08); border-radius: var(--radius-base);">
                                <span>States with assault rifle bans</span><strong>11</strong>
                            </div>
                            <div style="display: flex; justify-content: space-between; padding: 12px; background: rgba(var(--color-orange-500-rgb), 0.08); border-radius: var(--radius-base);">
                                <span>States with permitless carry</span><strong>25+</strong>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="insights" class="tab-content">
                    <div class="info-box">
                        <h3>Key Insights</h3>
                        <ul>
                            <li><strong>Model Legislation Dominance:</strong> ALEC introduced 2,900+ model bills between 2010-2018, with over 600 becoming law.</li>
                            <li><strong>Funding Shift:</strong> Democratic groups planned $175M for 2024 state legislative races, recognizing the shift in power.</li>
                            <li><strong>Accountability Crisis:</strong> 90% of voters cannot identify their state legislator. Statehouse reporters declined 6% from 2014-2022.</li>
                            <li><strong>Democratic Backsliding:</strong> Political scientist Jake Grumbach warns of "laboratories against democracy."</li>
                            <li><strong>Policy Laboratory Variation:</strong> Red and blue states implement increasingly distinct agendas, creating "variable citizenship."</li>
                            <li><strong>Single-Party Efficiency:</strong> States with single-party control show exceptional productivity (Colorado: 73.5% passage rate).</li>
                        </ul>
                    </div>
                </div>
            `;

            return container;
        },

        init() {
            const tabs = document.querySelectorAll('.tab');
            const tabContents = document.querySelectorAll('.tab-content');

            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    const targetTab = tab.getAttribute('data-tab');

                    tabs.forEach(t => t.classList.remove('active'));
                    tabContents.forEach(tc => tc.classList.remove('active'));

                    tab.classList.add('active');
                    document.getElementById(targetTab).classList.add('active');
                });
            });
        },

        cleanup() {
            // No cleanup needed
        }
    };

    app.registerChapter('state-federal', chapter);
})();
