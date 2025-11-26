/**
 * Chapter 10: Voting Machines
 * U.S. voting machine infrastructure tracker
 */

(function() {
    const incidents = [
        {date: 'Nov 2023', location: 'Northampton County, PA', type: 'Programming Error', impact: 'Vote flipping on 300+ machines'},
        {date: 'Nov 2024', location: 'Milwaukee, WI', type: 'Human Error', impact: '30,000 ballots retabulated'},
        {date: 'Jan 2021', location: 'Coffee County, GA', type: 'Unauthorized Access', impact: 'Trump allies accessed systems, criminal charges'},
        {date: 'Nov 2024', location: 'Cambria County, PA', type: 'Software Malfunction', impact: 'Ballots could not be scanned, hours extended'},
        {date: '2015', location: 'Virginia', type: 'Security Vulnerability', impact: 'All WINVote machines decertified statewide'}
    ];

    const internationalData = [
        {country: 'Germany', status: 'Banned', year: '2009', principle: 'Public examinability required'},
        {country: 'Netherlands', status: 'Abandoned', year: '2008', principle: 'Transparency concerns'},
        {country: 'Ireland', status: 'Abandoned', year: '2004', principle: 'Machine reliability issues'},
        {country: 'Estonia', status: 'Internet Voting', year: '21% online (2013)', principle: 'E-identity infrastructure'},
        {country: 'Australia', status: 'Paper-Based', year: 'Current', principle: 'Manual counting with oversight'}
    ];

    const chapter = {
        render() {
            const container = document.createElement('div');
            container.className = 'chapter-content active';
            container.innerHTML = `
                <div class="section-header">
                    <h2 class="section-title">U.S. Voting Machine Infrastructure Tracker</h2>
                    <p class="section-subtitle">
                        Comprehensive analysis of voting equipment age, security vulnerabilities, modernization efforts,
                        and federal funding for election infrastructure.
                    </p>
                </div>

                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-label">Voters Using 10+ Year Old Equipment</div>
                        <div class="stat-value">44.6M</div>
                        <div class="stat-description">Registered voters across 24 states</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-label">Discontinued Equipment</div>
                        <div class="stat-value">21M</div>
                        <div class="stat-description">Voters in 23 states</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-label">Paperless DRE Systems</div>
                        <div class="stat-value">~1.4%</div>
                        <div class="stat-description">Down from 22.4% in 2016</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-label">Replacement Cost (10 Years)</div>
                        <div class="stat-value">$1.8B</div>
                        <div class="stat-description">Estimated modernization cost</div>
                    </div>
                </div>

                <div class="tabs">
                    <button class="tab active" data-tab="overview">Overview</button>
                    <button class="tab" data-tab="funding">Federal Funding</button>
                    <button class="tab" data-tab="incidents">Security Incidents</button>
                    <button class="tab" data-tab="international">International</button>
                    <button class="tab" data-tab="recommendations">Recommendations</button>
                </div>

                <div id="overview" class="tab-content active">
                    <div class="info-box">
                        <h3>Critical Issues</h3>
                        <ul>
                            <li><strong>Windows 7 End of Life:</strong> January 14, 2020 - vast majority of jurisdictions used Windows 7 or older in 2019</li>
                            <li><strong>Expected Lifespan:</strong> Voting machines designed for 10-20 years, reality "probably closer to 10"</li>
                            <li><strong>Spare Parts Crisis:</strong> Officials report searching eBay for obsolete components like Zip disks</li>
                            <li><strong>Certification Gap:</strong> EAC will not de-certify systems running unsupported operating systems</li>
                        </ul>
                    </div>

                    <h3 style="font-size: 1.25rem; font-weight: 600; margin: 32px 0 20px;">Paperless DRE States (Some Counties)</h3>
                    <div class="data-table">
                        <table>
                            <thead>
                                <tr><th>State</th><th>Status</th><th>Modernization Deadline</th></tr>
                            </thead>
                            <tbody>
                                <tr><td><strong>Louisiana</strong></td><td><span class="badge badge-critical">100% Paperless</span></td><td>In process (SB 221, 2021)</td></tr>
                                <tr><td><strong>Texas</strong></td><td><span class="badge badge-critical">~33% Paperless</span></td><td>September 1, 2026</td></tr>
                                <tr><td><strong>Indiana</strong></td><td><span class="badge badge-warning">Partial Paperless</span></td><td>2024</td></tr>
                                <tr><td><strong>Mississippi</strong></td><td><span class="badge badge-warning">Partial Paperless</span></td><td>2024</td></tr>
                                <tr><td><strong>Tennessee</strong></td><td><span class="badge badge-warning">Partial Paperless</span></td><td>2024</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div id="funding" class="tab-content">
                    <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 20px;">Federal Funding Timeline</h3>
                    <div class="data-cards">
                        <div class="card"><div class="card-title">2018</div><div style="font-size: 1.25rem; font-weight: 600; color: var(--color-primary); margin: 8px 0;">$380M</div><p style="font-size: 0.9rem;">First new HAVA funding since 2010</p></div>
                        <div class="card"><div class="card-title">2020</div><div style="font-size: 1.25rem; font-weight: 600; color: var(--color-primary); margin: 8px 0;">$425M</div><p style="font-size: 0.9rem;">Consolidated Appropriations Act</p></div>
                        <div class="card"><div class="card-title">2022</div><div style="font-size: 1.25rem; font-weight: 600; color: var(--color-primary); margin: 8px 0;">$75M</div><p style="font-size: 0.9rem;">Election Security Grants</p></div>
                        <div class="card"><div class="card-title">2024</div><div style="font-size: 1.25rem; font-weight: 600; color: var(--color-error); margin: 8px 0;">$15M</div><p style="font-size: 0.9rem;">Dramatic reduction</p></div>
                        <div class="card"><div class="card-title">2025</div><div style="font-size: 1.25rem; font-weight: 600; color: var(--color-error); margin: 8px 0;">$15M</div><p style="font-size: 0.9rem;">Continued reduced funding</p></div>
                    </div>

                    <div class="info-box">
                        <h3>Spending Analysis (As of August 2024)</h3>
                        <ul>
                            <li><strong>Total appropriated (2018-2024):</strong> Over $1 billion</li>
                            <li><strong>Amount spent:</strong> $638 million (63%)</li>
                            <li><strong>Voting equipment & cybersecurity:</strong> $343 million (56% of spending)</li>
                            <li><strong>Funding decline:</strong> $805M in 2018-2020 → $165M in 2022-2024</li>
                        </ul>
                    </div>
                </div>

                <div id="incidents" class="tab-content">
                    <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 20px;">Documented Security Incidents</h3>
                    <div class="data-table">
                        <table>
                            <thead>
                                <tr><th>Date</th><th>Location</th><th>Type</th><th>Impact</th></tr>
                            </thead>
                            <tbody>
                                ${incidents.map(inc => {
                                    const badgeClass = inc.type.includes('Unauthorized') || inc.type.includes('Security') ? 'badge-critical' : 'badge-warning';
                                    return `<tr>
                                        <td>${inc.date}</td>
                                        <td>${inc.location}</td>
                                        <td><span class="badge ${badgeClass}">${inc.type}</span></td>
                                        <td>${inc.impact}</td>
                                    </tr>`;
                                }).join('')}
                            </tbody>
                        </table>
                    </div>

                    <div class="info-box">
                        <h3>CISA Status (2025)</h3>
                        <ul>
                            <li><strong>February 2025:</strong> Trump administration dramatically curtailed CISA's election security activities</li>
                            <li><strong>Operations frozen:</strong> All election security operations frozen pending internal review</li>
                            <li><strong>EI-ISAC defunded:</strong> Discontinued Election Infrastructure Information Sharing Center</li>
                            <li><strong>Staff dismissed:</strong> ~130 workers including election security advisers dismissed</li>
                        </ul>
                    </div>
                </div>

                <div id="international" class="tab-content">
                    <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 20px;">International Electronic Voting Practices</h3>
                    <div class="data-table">
                        <table>
                            <thead>
                                <tr><th>Country</th><th>Status</th><th>Year/Details</th><th>Key Principle</th></tr>
                            </thead>
                            <tbody>
                                ${internationalData.map(country => {
                                    const badgeClass = country.status === 'Banned' || country.status === 'Abandoned' ? 'badge-critical' : 'badge-info';
                                    return `<tr>
                                        <td><strong>${country.country}</strong></td>
                                        <td><span class="badge ${badgeClass}">${country.status}</span></td>
                                        <td>${country.year}</td>
                                        <td>${country.principle}</td>
                                    </tr>`;
                                }).join('')}
                            </tbody>
                        </table>
                    </div>

                    <div class="info-box">
                        <h3>Key International Lessons</h3>
                        <ul>
                            <li><strong>Paper Ballot Primacy:</strong> Most democracies emphasize paper ballots as most transparent method</li>
                            <li><strong>Public Verifiability:</strong> German court ruled citizens must verify without special expertise</li>
                            <li><strong>Security Concerns:</strong> Netherlands abandoned DREs after side-channel attack demonstrations</li>
                            <li><strong>Estonia Success:</strong> National e-identity, vote changing allowed, mandatory paper option</li>
                        </ul>
                    </div>
                </div>

                <div id="recommendations" class="tab-content">
                    <div class="info-box">
                        <h3>1. Universal Paper Ballot Requirement</h3>
                        <ul>
                            <li>Replace all paperless machines with voter-verifiable paper ballots</li>
                            <li>Over 98% of jurisdictions already compliant as of 2024</li>
                            <li>Endorsed by 100+ computer scientists and NIST research</li>
                        </ul>
                    </div>

                    <div class="info-box">
                        <h3>2. Risk-Limiting Audits (RLAs)</h3>
                        <ul>
                            <li>Implement "gold standard" post-election audits using statistical sampling</li>
                            <li>Approximately half of states currently conduct some form of audit</li>
                        </ul>
                    </div>

                    <div class="info-box">
                        <h3>3. Enhanced Testing & Certification</h3>
                        <ul>
                            <li>VVSG 2.0 establishes baseline cybersecurity and accessibility requirements</li>
                            <li>Mandatory penetration testing of federally certified systems</li>
                            <li>Allow vetted researchers to test systems in controlled environments</li>
                        </ul>
                    </div>

                    <div class="stats-grid">
                        <div class="stat-card">
                            <div class="stat-label">Paper Ballot Adoption</div>
                            <div class="stat-value">98%+</div>
                            <div class="stat-description">✓ Jurisdictions compliant</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-label">Post-Election Audits</div>
                            <div class="stat-value">~50%</div>
                            <div class="stat-description">⚠ States conducting audits</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-label">Federal Funding Decline</div>
                            <div class="stat-value">-91%</div>
                            <div class="stat-description">✗ 2020 ($425M) to 2025 ($15M)</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-label">CISA Support</div>
                            <div class="stat-value">Uncertain</div>
                            <div class="stat-description">✗ Operations frozen Feb 2025</div>
                        </div>
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

    app.registerChapter('voting-machines', chapter);
})();
