/**
 * Chapter 5: Gerrymandering
 * Prison gerrymandering and redistricting analysis
 */

(function() {
    const prisonData = [
        {state: 'Texas', prisoners: 140000, ruralDistricts: 12, impact: 'High'},
        {state: 'Florida', prisoners: 82000, ruralDistricts: 8, impact: 'High'},
        {state: 'Georgia', prisoners: 52000, ruralDistricts: 6, impact: 'Medium'},
        {state: 'Ohio', prisoners: 46000, ruralDistricts: 5, impact: 'Medium'},
        {state: 'Pennsylvania', prisoners: 44000, ruralDistricts: 5, impact: 'Medium'},
        {state: 'Michigan', prisoners: 38000, ruralDistricts: 4, impact: 'Medium'},
        {state: 'Illinois', prisoners: 37000, ruralDistricts: 4, impact: 'Medium'},
        {state: 'New York', prisoners: 34000, ruralDistricts: 4, impact: 'Low (Reformed)'},
        {state: 'Arizona', prisoners: 39000, ruralDistricts: 3, impact: 'Medium'},
        {state: 'California', prisoners: 97000, ruralDistricts: 7, impact: 'Low (Reformed)'}
    ];

    const reformStates = [
        {state: 'California', year: 2020, method: 'Resident address counting'},
        {state: 'Colorado', year: 2020, method: 'Excluded from count'},
        {state: 'Connecticut', year: 2021, method: 'Last known address'},
        {state: 'Delaware', year: 2010, method: 'Last known address'},
        {state: 'Maryland', year: 2010, method: 'Last known address'},
        {state: 'Nevada', year: 2019, method: 'Excluded from count'},
        {state: 'New Jersey', year: 2020, method: 'Last known address'},
        {state: 'New York', year: 2010, method: 'Last known address'},
        {state: 'Washington', year: 2021, method: 'Last known address'}
    ];

    const chapter = {
        render() {
            const container = document.createElement('div');
            container.className = 'chapter-content active';
            container.innerHTML = `
                <div class="section-header">
                    <h2 class="section-title">Gerrymandering & Prison Population Analysis</h2>
                    <p class="section-subtitle">
                        Examining how prison populations affect redistricting and political representation,
                        and which states have implemented reforms to address prison gerrymandering.
                    </p>
                </div>

                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-label">Incarcerated Population (U.S.)</div>
                        <div class="stat-value">1.9M</div>
                        <div class="stat-description">State & federal prisoners</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-label">States with Reforms</div>
                        <div class="stat-value">9</div>
                        <div class="stat-description">Address prison counting</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-label">Districts Affected</div>
                        <div class="stat-value">~200</div>
                        <div class="stat-description">Legislative districts</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-label">Rural Advantage</div>
                        <div class="stat-value">+15%</div>
                        <div class="stat-description">Avg. population boost</div>
                    </div>
                </div>

                <h3 style="font-size: 1.25rem; font-weight: 600; margin: 32px 0 20px; color: var(--color-text);">
                    Prison Population by State
                </h3>
                <div class="data-table">
                    <table>
                        <thead>
                            <tr>
                                <th>State</th>
                                <th>Prison Population</th>
                                <th>Rural Districts Affected</th>
                                <th>Impact Level</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${prisonData.map(row => `
                                <tr>
                                    <td><strong>${row.state}</strong></td>
                                    <td>${row.prisoners.toLocaleString()}</td>
                                    <td>${row.ruralDistricts}</td>
                                    <td><span class="badge ${row.impact.includes('High') ? 'badge-critical' : row.impact.includes('Low') ? 'badge-info' : 'badge-warning'}">${row.impact}</span></td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>

                <h3 style="font-size: 1.25rem; font-weight: 600; margin: 32px 0 20px; color: var(--color-text);">
                    States with Prison Gerrymandering Reforms
                </h3>
                <div class="data-cards">
                    ${reformStates.map(reform => `
                        <div class="card">
                            <div class="card-title">${reform.state}</div>
                            <div style="font-size: 0.9rem; color: var(--color-text-secondary); margin-bottom: 8px;">
                                Reformed: ${reform.year}
                            </div>
                            <div style="font-size: 0.85rem;">
                                <strong>Method:</strong> ${reform.method}
                            </div>
                        </div>
                    `).join('')}
                </div>

                <div class="info-box">
                    <h3>Understanding Prison Gerrymandering</h3>
                    <ul>
                        <li><strong>The Problem:</strong> U.S. Census counts prisoners at their facility location, not their home address, artificially inflating rural district populations where prisons are located.</li>
                        <li><strong>Political Impact:</strong> This gives rural districts (often Republican) extra representation while diminishing urban areas (often Democratic) where prisoners originated.</li>
                        <li><strong>Disenfranchisement:</strong> Most prisoners cannot vote, yet they count toward district population, creating "phantom constituents."</li>
                        <li><strong>Reform Approaches:</strong> States addressing this either exclude prisoners from redistricting counts entirely or count them at their last known address.</li>
                        <li><strong>Federal Inaction:</strong> Despite proposals, the Census Bureau has not changed its counting methodology nationwide.</li>
                        <li><strong>Magnitude:</strong> In some rural districts, prisoners comprise 15-30% of the "population," significantly skewing representation.</li>
                    </ul>
                </div>
            `;

            return container;
        },

        init() {
            // No dynamic interactions needed
        },

        cleanup() {
            // No cleanup needed
        }
    };

    app.registerChapter('gerrymandering', chapter);
})();
