/**
 * Chapter 1: Ballot Access
 * Interactive ballot access explorer mapping voting barriers by ZIP code and state
 */

(function() {
    const stateData = {
        'AL': {name: 'Alabama', idRequired: 'Photo ID', early: '15 days', registration: '15 days', onlineReg: false},
        'AK': {name: 'Alaska', idRequired: 'Non-photo ID', early: '15 days', registration: '30 days', onlineReg: true},
        'AZ': {name: 'Arizona', idRequired: 'Photo ID', early: '27 days', registration: '29 days', onlineReg: true},
        'AR': {name: 'Arkansas', idRequired: 'Photo ID', early: '15 days', registration: '30 days', onlineReg: true},
        'CA': {name: 'California', idRequired: 'No ID', early: '29 days', registration: 'Same-day', onlineReg: true},
        'CO': {name: 'Colorado', idRequired: 'Non-photo ID', early: '15 days', registration: 'Same-day', onlineReg: true},
        'CT': {name: 'Connecticut', idRequired: 'Non-photo ID', early: 'No early', registration: '7 days', onlineReg: true},
        'DE': {name: 'Delaware', idRequired: 'Non-photo ID', early: 'No early', registration: '24 days', onlineReg: true},
        'FL': {name: 'Florida', idRequired: 'Photo ID', early: '10 days', registration: '29 days', onlineReg: true},
        'GA': {name: 'Georgia', idRequired: 'Photo ID', early: '21 days', registration: '29 days', onlineReg: true},
        'HI': {name: 'Hawaii', idRequired: 'Photo ID', early: '10 days', registration: '30 days', onlineReg: true},
        'ID': {name: 'Idaho', idRequired: 'Photo ID', early: 'Varies', registration: 'Same-day', onlineReg: true},
        'IL': {name: 'Illinois', idRequired: 'Non-photo ID', early: '40 days', registration: 'Same-day', onlineReg: true},
        'IN': {name: 'Indiana', idRequired: 'Photo ID', early: '28 days', registration: '29 days', onlineReg: true},
        'IA': {name: 'Iowa', idRequired: 'Non-photo ID', early: '29 days', registration: 'Same-day', onlineReg: true},
        'KS': {name: 'Kansas', idRequired: 'Photo ID', early: '20 days', registration: '21 days', onlineReg: true},
        'KY': {name: 'Kentucky', idRequired: 'Photo ID', early: '11 days', registration: '29 days', onlineReg: true},
        'LA': {name: 'Louisiana', idRequired: 'Photo ID', early: '7 days', registration: '30 days', onlineReg: true},
        'ME': {name: 'Maine', idRequired: 'Non-photo ID', early: 'No early', registration: 'Same-day', onlineReg: true},
        'MD': {name: 'Maryland', idRequired: 'No ID', early: '8 days', registration: 'Same-day', onlineReg: true},
        'MA': {name: 'Massachusetts', idRequired: 'Non-photo ID', early: '11 days', registration: '20 days', onlineReg: true},
        'MI': {name: 'Michigan', idRequired: 'Photo ID', early: '40 days', registration: 'Same-day', onlineReg: true},
        'MN': {name: 'Minnesota', idRequired: 'Non-photo ID', early: '46 days', registration: 'Same-day', onlineReg: true},
        'MS': {name: 'Mississippi', idRequired: 'Photo ID', early: 'No early', registration: '30 days', onlineReg: true},
        'MO': {name: 'Missouri', idRequired: 'Photo ID', early: '6 days', registration: '27 days', onlineReg: true},
        'MT': {name: 'Montana', idRequired: 'Non-photo ID', early: '30 days', registration: 'Same-day', onlineReg: true},
        'NE': {name: 'Nebraska', idRequired: 'Non-photo ID', early: '30 days', registration: '18 days', onlineReg: true},
        'NV': {name: 'Nevada', idRequired: 'Non-photo ID', early: '14 days', registration: 'Same-day', onlineReg: true},
        'NH': {name: 'New Hampshire', idRequired: 'Photo ID', early: 'No early', registration: 'Same-day', onlineReg: false},
        'NJ': {name: 'New Jersey', idRequired: 'Non-photo ID', early: '7 days', registration: '21 days', onlineReg: true},
        'NM': {name: 'New Mexico', idRequired: 'No ID', early: '28 days', registration: '28 days', onlineReg: true},
        'NY': {name: 'New York', idRequired: 'No ID', early: '10 days', registration: '25 days', onlineReg: true},
        'NC': {name: 'North Carolina', idRequired: 'Photo ID', early: '17 days', registration: '25 days', onlineReg: true},
        'ND': {name: 'North Dakota', idRequired: 'Photo ID', early: '15 days', registration: 'No registration', onlineReg: false},
        'OH': {name: 'Ohio', idRequired: 'Photo ID', early: '28 days', registration: '30 days', onlineReg: true},
        'OK': {name: 'Oklahoma', idRequired: 'Photo ID', early: '4 days', registration: '25 days', onlineReg: true},
        'OR': {name: 'Oregon', idRequired: 'No ID', early: 'Mail-only', registration: '21 days', onlineReg: true},
        'PA': {name: 'Pennsylvania', idRequired: 'Non-photo ID', early: '50 days', registration: '15 days', onlineReg: true},
        'RI': {name: 'Rhode Island', idRequired: 'Non-photo ID', early: '20 days', registration: '30 days', onlineReg: true},
        'SC': {name: 'South Carolina', idRequired: 'Photo ID', early: '30 days', registration: '30 days', onlineReg: true},
        'SD': {name: 'South Dakota', idRequired: 'Photo ID', early: '46 days', registration: '15 days', onlineReg: true},
        'TN': {name: 'Tennessee', idRequired: 'Photo ID', early: '20 days', registration: '30 days', onlineReg: true},
        'TX': {name: 'Texas', idRequired: 'Photo ID', early: '11 days', registration: '30 days', onlineReg: true},
        'UT': {name: 'Utah', idRequired: 'Non-photo ID', early: '14 days', registration: 'Same-day', onlineReg: true},
        'VT': {name: 'Vermont', idRequired: 'Non-photo ID', early: '45 days', registration: 'Same-day', onlineReg: true},
        'VA': {name: 'Virginia', idRequired: 'Photo ID', early: '45 days', registration: '22 days', onlineReg: true},
        'WA': {name: 'Washington', idRequired: 'No ID', early: 'Mail-only', registration: '8 days', onlineReg: true},
        'WV': {name: 'West Virginia', idRequired: 'Photo ID', early: '13 days', registration: '21 days', onlineReg: true},
        'WI': {name: 'Wisconsin', idRequired: 'Photo ID', early: '14 days', registration: 'Same-day', onlineReg: true},
        'WY': {name: 'Wyoming', idRequired: 'Non-photo ID', early: '40 days', registration: '14 days', onlineReg: true}
    };

    let selectedState = null;

    const chapter = {
        render() {
            const container = document.createElement('div');
            container.className = 'chapter-content active';
            container.innerHTML = `
                <div class="section-header">
                    <h2 class="section-title">Ballot Access Explorer</h2>
                    <p class="section-subtitle">
                        Understanding voting requirements, registration deadlines, and early voting access across all 50 states.
                        Select a state to see detailed voting requirements and barriers.
                    </p>
                </div>

                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-label">States with Photo ID Required</div>
                        <div class="stat-value">21</div>
                        <div class="stat-description">42% of all states</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-label">States with Same-Day Registration</div>
                        <div class="stat-value">21</div>
                        <div class="stat-description">Plus DC</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-label">States with Online Registration</div>
                        <div class="stat-value">43</div>
                        <div class="stat-description">86% of states</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-label">Average Early Voting Period</div>
                        <div class="stat-value">20 days</div>
                        <div class="stat-description">Varies by state</div>
                    </div>
                </div>

                <div class="controls">
                    <div class="control-group">
                        <label for="state-selector">Select State:</label>
                        <select id="state-selector">
                            <option value="">-- Choose a state --</option>
                            ${Object.entries(stateData).sort((a, b) => a[1].name.localeCompare(b[1].name)).map(([code, data]) => `
                                <option value="${code}">${data.name}</option>
                            `).join('')}
                        </select>
                    </div>
                    <div class="control-group">
                        <label for="id-filter">ID Requirement:</label>
                        <select id="id-filter">
                            <option value="all">All States</option>
                            <option value="Photo ID">Photo ID Required</option>
                            <option value="Non-photo ID">Non-Photo ID</option>
                            <option value="No ID">No ID Required</option>
                        </select>
                    </div>
                </div>

                <div id="state-details" class="info-box" style="display: none;">
                    <h3 id="state-name-display"></h3>
                    <div class="stats-grid">
                        <div class="stat-card">
                            <div class="stat-label">ID Requirement</div>
                            <div class="stat-value" id="state-id-req"></div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-label">Early Voting Period</div>
                            <div class="stat-value" id="state-early"></div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-label">Registration Deadline</div>
                            <div class="stat-value" id="state-reg"></div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-label">Online Registration</div>
                            <div class="stat-value" id="state-online"></div>
                        </div>
                    </div>
                </div>

                <div class="data-table">
                    <table id="states-table">
                        <thead>
                            <tr>
                                <th>State</th>
                                <th>ID Requirement</th>
                                <th>Early Voting</th>
                                <th>Registration Deadline</th>
                                <th>Online Registration</th>
                            </tr>
                        </thead>
                        <tbody id="states-tbody">
                        </tbody>
                    </table>
                </div>

                <div class="info-box">
                    <h3>Understanding Ballot Access Barriers</h3>
                    <ul>
                        <li><strong>Photo ID Requirements:</strong> 21 states require government-issued photo identification to vote, which can disproportionately affect low-income, elderly, and minority voters.</li>
                        <li><strong>Registration Deadlines:</strong> States with earlier registration deadlines create barriers for new voters and those who relocate.</li>
                        <li><strong>Early Voting:</strong> Extended early voting periods increase accessibility for working voters and those with inflexible schedules.</li>
                        <li><strong>Same-Day Registration:</strong> 21 states plus DC allow voters to register on Election Day, significantly increasing turnout.</li>
                        <li><strong>Online Registration:</strong> 43 states offer online registration, making the process more accessible and reducing errors.</li>
                    </ul>
                </div>
            `;

            return container;
        },

        init() {
            const stateSelector = document.getElementById('state-selector');
            const idFilter = document.getElementById('id-filter');
            const stateDetails = document.getElementById('state-details');
            const tbody = document.getElementById('states-tbody');

            // Populate table initially
            this.updateTable('all');

            // State selector handler
            stateSelector.addEventListener('change', (e) => {
                selectedState = e.target.value;
                if (selectedState) {
                    this.showStateDetails(selectedState);
                } else {
                    stateDetails.style.display = 'none';
                }
            });

            // ID filter handler
            idFilter.addEventListener('change', (e) => {
                this.updateTable(e.target.value);
            });
        },

        showStateDetails(stateCode) {
            const data = stateData[stateCode];
            const stateDetails = document.getElementById('state-details');

            document.getElementById('state-name-display').textContent = data.name;
            document.getElementById('state-id-req').textContent = data.idRequired;
            document.getElementById('state-early').textContent = data.early;
            document.getElementById('state-reg').textContent = data.registration;
            document.getElementById('state-online').textContent = data.onlineReg ? 'Yes' : 'No';

            stateDetails.style.display = 'block';
        },

        updateTable(filter) {
            const tbody = document.getElementById('states-tbody');
            const filteredStates = Object.entries(stateData)
                .filter(([code, data]) => filter === 'all' || data.idRequired === filter)
                .sort((a, b) => a[1].name.localeCompare(b[1].name));

            tbody.innerHTML = filteredStates.map(([code, data]) => `
                <tr>
                    <td><strong>${data.name}</strong></td>
                    <td>${data.idRequired}</td>
                    <td>${data.early}</td>
                    <td>${data.registration}</td>
                    <td>${data.onlineReg ? '✓ Yes' : '✗ No'}</td>
                </tr>
            `).join('');
        },

        cleanup() {
            selectedState = null;
        }
    };

    app.registerChapter('ballot-access', chapter);
})();
