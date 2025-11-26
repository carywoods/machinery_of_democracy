/**
 * Chapter 3: Deepfakes
 * Deepfake election tracker with verified cases
 */

(function() {
    const incidents = [
        {
            id: 1,
            title: "South-Western City School District AI Campaign Video",
            location: "Ohio",
            year: 2025,
            type: "school-board",
            date: "November 2025",
            description: "Republican-endorsed candidates Chris Boso, Steve Feucht, and Jason Gocha deployed an AI-generated video featuring synthetic footage of their Democrat-endorsed opponents (Camille Peterson, Chelsea Alkire, and Kelly Dillon) making fabricated statements. Despite controversy and the video being labeled as AI-generated, the Republican candidates won the election.",
            outcome: "Republican candidates prevailed. Boso defended the deepfake as 'lighthearted' aimed at boosting turnout. Peterson condemned it as 'downright wrong.'",
            impact: "Demonstrated that even disclosed deepfakes can reshape races where voters lack experience evaluating synthetic media."
        },
        {
            id: 2,
            title: "Shreveport Mayoral Race Deepfake Ad",
            location: "Louisiana",
            year: 2022,
            type: "mayor",
            date: "October 2022",
            description: "Incumbent Mayor Adrian Perkins faced a satirical TV commercial funded by PAC 'People Over Politics' using deep learning to superimpose his face onto an actor's body, depicting him as a high school student being reprimanded. Despite carrying a disclaimer, Perkins believes the ad significantly affected his campaign.",
            outcome: "Perkins stated: 'One hundred percent the deepfake ad affected our campaign because we were a down-ballot, less resourced place.' He lacked funds to counter the attack.",
            impact: "Marked one of the earliest documented deepfake deployments in American politics, illustrating asymmetric vulnerability of smaller campaigns."
        },
        {
            id: 3,
            title: "Dallas City Council Runoff AI Video",
            location: "Texas",
            year: 2025,
            type: "council",
            date: "May 2025",
            description: "In a city council runoff between Bill Roth and Jeff Kidner, a Roth supporter created a deepfake video using audio from Kidner's podcast appearance, manipulating it with AI to present him unfavorably. The creator claimed exemption from regulation by asserting he wasn't paid by any campaign.",
            outcome: "The incident highlighted enforcement loopholes—creators can avoid regulation by claiming non-compensation, even when supporting specific candidates.",
            impact: "Demonstrated difficulty of enforcing disclosure requirements when actors operate independently of official campaigns."
        },
        {
            id: 4,
            title: "Pikesville High School Principal Racist Audio",
            location: "Maryland",
            year: 2024,
            type: "criminal",
            date: "January 2024",
            description: "Athletic director Dazhon Darien allegedly created AI-generated audio depicting Principal Eric Eiswert making racist and antisemitic remarks. The deepfake spread rapidly on social media, triggering death threats against Eiswert and his administrative leave. Forensic analysis revealed AI-generated elements edited with background noise for authenticity.",
            outcome: "Darien pleaded guilty to disturbing school operations and received a four-month sentence. Principal Eiswert filed a lawsuit against Baltimore County schools.",
            impact: "While not electoral, demonstrated deepfakes' capacity for reputational destruction of public officials and established criminal prosecution precedent."
        },
        {
            id: 5,
            title: "Biden New Hampshire Primary Robocall",
            location: "New Hampshire",
            year: 2024,
            type: "presidential",
            date: "January 2024",
            description: "Political consultant Steve Kramer orchestrated robocalls featuring AI-generated voice mimicking President Biden, reaching ~5,000 voters with messages discouraging primary participation. The fake Biden urged Democrats to 'save your vote for the November election.' Kramer hired a street magician to create the audio using ElevenLabs for $1 in under 20 minutes.",
            outcome: "FCC imposed $6 million fine. New Hampshire indicted Kramer on 13 felony voter suppression charges and 13 misdemeanor impersonation charges. In June 2025, jury acquitted Kramer of all charges.",
            impact: "Most prominent deepfake attack on American electoral infrastructure. Acquittal despite admission signals potential enforcement challenges and loopholes in voter suppression statutes."
        },
        {
            id: 6,
            title: "Multiple State Election Board Preparedness Exercises",
            location: "Various",
            year: 2024,
            type: "presidential",
            date: "Throughout 2024",
            description: "Arizona, Michigan, Colorado, and other states conducted tabletop exercises confronting hypothetical Election Day scenarios involving deepfake videos and voice-cloning technology. Fictional scenarios included AI-generated fake news headlines claiming shootings at polling places and election rescheduling.",
            outcome: "State election officials identified deepfakes as top concern. Michigan SOS Jocelyn Benson warned of 'hyper-localized' disinformation campaigns. Colorado SOS Jena Griswold convened AI risk working groups.",
            impact: "Demonstrated election officials' recognition of threat, but also revealed limited capacity for rapid response if multiple deepfakes emerge simultaneously on Election Day."
        }
    ];

    const chapter = {
        render() {
            const container = document.createElement('div');
            container.className = 'chapter-content active';
            container.innerHTML = `
                <div class="section-header">
                    <h2 class="section-title">Deepfake Election Tracker</h2>
                    <p class="section-subtitle">
                        Verified cases of AI-generated content used to mislead voters or damage reputations in local and state elections (2019-2025)
                    </p>
                </div>

                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-label">Total Verified Incidents</div>
                        <div class="stat-value" id="total-incidents">6</div>
                        <div class="stat-description">Documented cases</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-label">States with Legislation</div>
                        <div class="stat-value">26</div>
                        <div class="stat-description">Have enacted laws</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-label">Deepfake Incidents (Q1 2025)</div>
                        <div class="stat-value">179</div>
                        <div class="stat-description">Globally tracked</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-label">Fraud Increase (2023)</div>
                        <div class="stat-value">3,000%</div>
                        <div class="stat-description">Year-over-year</div>
                    </div>
                </div>

                <div class="controls">
                    <div class="control-group">
                        <label for="race-filter">Race Type:</label>
                        <select id="race-filter">
                            <option value="all">All Races</option>
                            <option value="school-board">School Board</option>
                            <option value="mayor">Mayor</option>
                            <option value="council">City Council</option>
                            <option value="criminal">Criminal/Non-Electoral</option>
                            <option value="presidential">Presidential Primary</option>
                        </select>
                    </div>
                    <div class="control-group">
                        <label for="year-filter">Year:</label>
                        <select id="year-filter">
                            <option value="all">All Years</option>
                            <option value="2025">2025</option>
                            <option value="2024">2024</option>
                            <option value="2022">2022</option>
                        </select>
                    </div>
                    <div class="control-group">
                        <label for="search">Search:</label>
                        <input type="text" id="search" placeholder="Location, candidate, keyword...">
                    </div>
                </div>

                <div id="incidents-container" class="data-cards"></div>

                <div class="info-box">
                    <h3>State Legislation Status</h3>
                    <p style="margin-bottom: 16px; color: var(--color-text-secondary);">
                        26 states have enacted laws regulating political deepfakes as of 2025:
                    </p>
                    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 8px;">
                        <div style="padding: 8px; background: var(--color-background); border-radius: var(--radius-base); font-size: 0.9rem;">California</div>
                        <div style="padding: 8px; background: var(--color-background); border-radius: var(--radius-base); font-size: 0.9rem;">Pennsylvania</div>
                        <div style="padding: 8px; background: var(--color-background); border-radius: var(--radius-base); font-size: 0.9rem;">Minnesota</div>
                        <div style="padding: 8px; background: var(--color-background); border-radius: var(--radius-base); font-size: 0.9rem;">Texas</div>
                        <div style="padding: 8px; background: var(--color-background); border-radius: var(--radius-base); font-size: 0.9rem;">Florida</div>
                        <div style="padding: 8px; background: var(--color-background); border-radius: var(--radius-base); font-size: 0.9rem;">New York</div>
                        <div style="padding: 8px; background: var(--color-background); border-radius: var(--radius-base); font-size: 0.9rem;">Arizona</div>
                        <div style="padding: 8px; background: var(--color-background); border-radius: var(--radius-base); font-size: 0.9rem;">Michigan</div>
                    </div>
                </div>
            `;

            return container;
        },

        init() {
            this.renderIncidents(incidents);

            const raceFilter = document.getElementById('race-filter');
            const yearFilter = document.getElementById('year-filter');
            const searchInput = document.getElementById('search');

            const filterIncidents = () => {
                const race = raceFilter.value;
                const year = yearFilter.value;
                const search = searchInput.value.toLowerCase();

                const filtered = incidents.filter(incident => {
                    const matchesRace = race === 'all' || incident.type === race;
                    const matchesYear = year === 'all' || incident.year.toString() === year;
                    const matchesSearch = search === '' ||
                        incident.title.toLowerCase().includes(search) ||
                        incident.location.toLowerCase().includes(search) ||
                        incident.description.toLowerCase().includes(search);

                    return matchesRace && matchesYear && matchesSearch;
                });

                document.getElementById('total-incidents').textContent = filtered.length;
                this.renderIncidents(filtered);
            };

            raceFilter.addEventListener('change', filterIncidents);
            yearFilter.addEventListener('change', filterIncidents);
            searchInput.addEventListener('input', filterIncidents);
        },

        renderIncidents(filteredIncidents) {
            const container = document.getElementById('incidents-container');

            if (filteredIncidents.length === 0) {
                container.innerHTML = '<div class="empty-state">No incidents match your filters</div>';
                return;
            }

            container.innerHTML = filteredIncidents.map(incident => {
                const badgeClass = {
                    'school-board': 'badge-info',
                    'mayor': 'badge-warning',
                    'council': 'badge-info',
                    'criminal': 'badge-critical',
                    'presidential': 'badge-critical'
                }[incident.type] || 'badge-info';

                return `
                    <div class="card">
                        <div style="display: flex; justify-content: space-between; align-items: start; gap: 16px; margin-bottom: 12px;">
                            <div class="card-title" style="margin: 0; flex: 1;">${incident.title}</div>
                            <span class="badge ${badgeClass}">${incident.type.replace('-', ' ').toUpperCase()}</span>
                        </div>
                        <div style="font-size: 0.9rem; color: var(--color-text-secondary); margin-bottom: 12px;">
                            📍 ${incident.location} • 📅 ${incident.date}
                        </div>
                        <div style="margin-bottom: 12px; line-height: 1.6; font-size: 0.9rem;">${incident.description}</div>
                        <div style="padding: 12px; background: rgba(var(--color-teal-500-rgb), 0.1); border-left: 3px solid var(--color-primary); border-radius: var(--radius-base); font-size: 0.85rem;">
                            <div style="font-weight: 600; color: var(--color-primary); margin-bottom: 4px;">Outcome & Impact</div>
                            <div>${incident.outcome}</div>
                            ${incident.impact ? `<div style="margin-top: 8px; font-style: italic;">${incident.impact}</div>` : ''}
                        </div>
                    </div>
                `;
            }).join('');
        },

        cleanup() {
            // No cleanup needed
        }
    };

    app.registerChapter('deepfake', chapter);
})();
