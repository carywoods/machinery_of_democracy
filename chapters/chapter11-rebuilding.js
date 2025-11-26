/**
 * Chapter 11: Rebuilding the Machinery
 * Practical reforms and institutional redesign recommendations
 */

(function() {
    const chapter = {
        render() {
            const container = document.createElement('div');
            container.className = 'chapter-content active';
            container.innerHTML = `
                <div class="section-header">
                    <h2 class="section-title">Rebuilding the Machinery</h2>
                    <p class="section-subtitle">
                        Practical reforms, institutional redesign, and technical upgrades that strengthen
                        resilience and democratic capacity across four critical dimensions.
                    </p>
                </div>

                <div class="info-box" style="text-align: center; margin-bottom: 32px; background: rgba(var(--color-teal-500-rgb), 0.05);">
                    <p style="font-size: 1.1rem; font-style: italic; color: var(--color-text);">
                        "This does not buy equipment, pass laws, hire staff, or fund journalism.
                        It only makes visible what must be done and when."
                    </p>
                </div>

                <div class="tabs">
                    <button class="tab active" data-tab="foundations">Foundations</button>
                    <button class="tab" data-tab="defense">Defense</button>
                    <button class="tab" data-tab="sustainability">Sustainability</button>
                    <button class="tab" data-tab="people">People</button>
                </div>

                <div id="foundations" class="tab-content active">
                    <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 20px;">Foundations: How You Cast and Count</h3>

                    <div class="card" style="margin-bottom: 20px;">
                        <h4 style="margin-bottom: 12px;">Next Election (Short Term)</h4>
                        <ul style="list-style: none; padding: 0;">
                            <li style="padding: 8px 0; border-bottom: 1px solid var(--color-border);">✓ All polling-place systems produce voter-verifiable paper ballots</li>
                            <li style="padding: 8px 0; border-bottom: 1px solid var(--color-border);">✓ Post-election audit scheduled for every major contest</li>
                            <li style="padding: 8px 0;">✓ Pre-election logic and accuracy testing is observable and documented</li>
                        </ul>
                    </div>

                    <div class="card" style="margin-bottom: 20px;">
                        <h4 style="margin-bottom: 12px;">Next Cycles (Medium Term)</h4>
                        <ul style="list-style: none; padding: 0;">
                            <li style="padding: 8px 0; border-bottom: 1px solid var(--color-border);">✓ Risk-limiting audits (RLAs) piloted in at least one jurisdiction</li>
                            <li style="padding: 8px 0; border-bottom: 1px solid var(--color-border);">✓ State-level rules requiring routine post-election audits</li>
                            <li style="padding: 8px 0;">✓ Audit procedures allow public and partisan observation</li>
                        </ul>
                    </div>

                    <div class="card">
                        <h4 style="margin-bottom: 12px;">2030+ (Long Term)</h4>
                        <ul style="list-style: none; padding: 0;">
                            <li style="padding: 8px 0; border-bottom: 1px solid var(--color-border);">✓ RLAs or equivalent robust audits are mandatory statewide</li>
                            <li style="padding: 8px 0; border-bottom: 1px solid var(--color-border);">✓ Audit timelines are integrated into certification law</li>
                            <li style="padding: 8px 0;">✓ Citizens can understand and observe core counting steps without expert knowledge</li>
                        </ul>
                    </div>

                    <div class="info-box" style="margin-top: 20px;">
                        <strong>Critical:</strong> Paper and audits are non-negotiable redundancy for failing machinery.
                        You are either confirming outcomes mathematically or hoping you are right.
                    </div>
                </div>

                <div id="defense" class="tab-content">
                    <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 20px;">Defense: How You Protect and Verify</h3>

                    <div class="card" style="margin-bottom: 20px;">
                        <h4 style="margin-bottom: 12px;">Next Election (Short Term)</h4>
                        <ul style="list-style: none; padding: 0;">
                            <li style="padding: 8px 0; border-bottom: 1px solid var(--color-border);">✓ No voting machines transmit results via cellular modems or public networks</li>
                            <li style="padding: 8px 0; border-bottom: 1px solid var(--color-border);">✓ Bipartisan teams handle all equipment and media</li>
                            <li style="padding: 8px 0; border-bottom: 1px solid var(--color-border);">✓ Tamper-evident seals with logged serial numbers on all devices</li>
                            <li style="padding: 8px 0;">✓ Named point person for rapid debunking of synthetic media</li>
                        </ul>
                    </div>

                    <div class="card" style="margin-bottom: 20px;">
                        <h4 style="margin-bottom: 12px;">Next Cycles (Medium Term)</h4>
                        <ul style="list-style: none; padding: 0;">
                            <li style="padding: 8px 0; border-bottom: 1px solid var(--color-border);">✓ Regular penetration testing of voting, registration, and reporting systems</li>
                            <li style="padding: 8px 0; border-bottom: 1px solid var(--color-border);">✓ State rules banning modems and defining acceptable connectivity</li>
                            <li style="padding: 8px 0; border-bottom: 1px solid var(--color-border);">✓ Participation in a threat-sharing network (regional ISAC or equivalent)</li>
                            <li style="padding: 8px 0;">✓ Playbooks for election-period synthetic media attacks</li>
                        </ul>
                    </div>

                    <div class="card">
                        <h4 style="margin-bottom: 12px;">2030+ (Long Term)</h4>
                        <ul style="list-style: none; padding: 0;">
                            <li style="padding: 8px 0; border-bottom: 1px solid var(--color-border);">✓ Pen-testing, vulnerability disclosure, and red-team exercises institutionalized in law</li>
                            <li style="padding: 8px 0; border-bottom: 1px solid var(--color-border);">✓ Standing verification infrastructure at state level</li>
                            <li style="padding: 8px 0;">✓ Federal coordination is funded, staffed, and insulated from partisan cycles</li>
                        </ul>
                    </div>

                    <div class="info-box" style="margin-top: 20px;">
                        <strong>Critical:</strong> If one person with a USB stick or a deepfake can change the story, you're exposed.
                        Defense shifts from reacting to intrusions to hunting for vulnerabilities before they are exploited.
                    </div>
                </div>

                <div id="sustainability" class="tab-content">
                    <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 20px;">Sustainability: How You Fund and Replace</h3>

                    <div class="card" style="margin-bottom: 20px;">
                        <h4 style="margin-bottom: 12px;">Next Election (Short Term)</h4>
                        <ul style="list-style: none; padding: 0;">
                            <li style="padding: 8px 0; border-bottom: 1px solid var(--color-border);">✓ Inventory of all equipment with in-service dates and vendor support status</li>
                            <li style="padding: 8px 0; border-bottom: 1px solid var(--color-border);">✓ One-cycle survival plan for systems older than 10 years</li>
                            <li style="padding: 8px 0;">✓ Emergency reserve for critical repairs in the coming year</li>
                        </ul>
                    </div>

                    <div class="card" style="margin-bottom: 20px;">
                        <h4 style="margin-bottom: 12px;">Next Cycles (Medium Term)</h4>
                        <ul style="list-style: none; padding: 0;">
                            <li style="padding: 8px 0; border-bottom: 1px solid var(--color-border);">✓ Statutory policy setting 8-10 year replacement cycles for core equipment</li>
                            <li style="padding: 8px 0; border-bottom: 1px solid var(--color-border);">✓ Dedicated revenue source or sinking fund for replacements</li>
                            <li style="padding: 8px 0;">✓ Centralized or coordinated procurement to guarantee support and parts</li>
                        </ul>
                    </div>

                    <div class="card">
                        <h4 style="margin-bottom: 12px;">2030+ (Long Term)</h4>
                        <ul style="list-style: none; padding: 0;">
                            <li style="padding: 8px 0; border-bottom: 1px solid var(--color-border);">✓ Replacement cycles codified and funded beyond single appropriations fights</li>
                            <li style="padding: 8px 0; border-bottom: 1px solid var(--color-border);">✓ EAC or state-level technical standards tied to lifecycle planning</li>
                            <li style="padding: 8px 0;">✓ Small and rural jurisdictions receive equal-quality equipment and support</li>
                        </ul>
                    </div>

                    <div class="info-box" style="margin-top: 20px;">
                        <strong>Goal:</strong> Know exactly what is likely to fail and how you will limp through one more cycle.
                        Move from panic purchases to planned upgrades. Aging machines are a choice, not a fate.
                    </div>
                </div>

                <div id="people" class="tab-content">
                    <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 20px;">People: Who Keeps It Running</h3>

                    <div class="card" style="margin-bottom: 20px;">
                        <h4 style="margin-bottom: 12px;">Next Election (Short Term)</h4>
                        <ul style="list-style: none; padding: 0;">
                            <li style="padding: 8px 0; border-bottom: 1px solid var(--color-border);">✓ Core staff retained through next election; succession risks identified</li>
                            <li style="padding: 8px 0; border-bottom: 1px solid var(--color-border);">✓ Minimum training hours for poll workers and staff defined and scheduled</li>
                            <li style="padding: 8px 0;">✓ Formal policy for reporting threats; coordination with law enforcement</li>
                        </ul>
                    </div>

                    <div class="card" style="margin-bottom: 20px;">
                        <h4 style="margin-bottom: 12px;">Next Cycles (Medium Term)</h4>
                        <ul style="list-style: none; padding: 0;">
                            <li style="padding: 8px 0; border-bottom: 1px solid var(--color-border);">✓ Multi-year staffing plan with target headcounts and experience mix</li>
                            <li style="padding: 8px 0; border-bottom: 1px solid var(--color-border);">✓ Raise or stabilize compensation to competitive public-service levels</li>
                            <li style="padding: 8px 0; border-bottom: 1px solid var(--color-border);">✓ Dedicated budget for training (procedures, law, technology, communication)</li>
                            <li style="padding: 8px 0;">✓ Psychological and legal support structures for officials facing harassment</li>
                        </ul>
                    </div>

                    <div class="card">
                        <h4 style="margin-bottom: 12px;">2030+ (Long Term)</h4>
                        <ul style="list-style: none; padding: 0;">
                            <li style="padding: 8px 0; border-bottom: 1px solid var(--color-border);">✓ Election administration reclassified as a protected civil service career</li>
                            <li style="padding: 8px 0; border-bottom: 1px solid var(--color-border);">✓ Formal barriers to partisan interference in hiring, firing, and certification decisions</li>
                            <li style="padding: 8px 0;">✓ National or state training academies creating a pipeline of professional administrators</li>
                        </ul>
                    </div>

                    <div class="info-box" style="margin-top: 20px;">
                        <strong>Critical:</strong> If one departure or one threat can topple your operation, the machinery is brittle.
                        Treat election administration as a skilled profession, not a temp job. Technicians should see elections
                        as a career to grow in, not a battlefield to escape.
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

    app.registerChapter('rebuilding', chapter);
})();
