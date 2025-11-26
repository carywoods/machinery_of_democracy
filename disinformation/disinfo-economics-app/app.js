// Application data
const appData = {
  market_data: {
    Category: [
      "Global ad spend on misinformation",
      "US ad spend on misinformation",
      "Top 40 election disinfo sites revenue",
      "Annual global economic cost",
      "Annual stock market losses (US)",
      "Content detection market (2024)",
      "Content detection forecast (2030)",
      "Fake image detection (2023)",
      "Fake image detection forecast (2029)"
    ],
    Amount_Billions: [2.6, 1.62, 0.0427, 78, 39, 17.35, 38.9, 1.81, 4.21],
    Year: [2022, 2022, 2022, 2019, 2019, 2024, 2030, 2023, 2029],
    Source: [
      "NewsGuard/Comscore",
      "NewsGuard/Comscore",
      "Carter Center",
      "Univ. Baltimore/CHEQ",
      "Univ. Baltimore/CHEQ",
      "Grand View Research",
      "Grand View Research",
      "Markets & Markets",
      "Markets & Markets"
    ],
    Type: [
      "Revenue",
      "Revenue",
      "Revenue",
      "Economic Cost",
      "Economic Cost",
      "Counter-measure Market",
      "Counter-measure Market",
      "Counter-measure Market",
      "Counter-measure Market"
    ]
  },
  case_studies: {
    Case: [
      "Veles, Macedonia (2016)",
      "Internet Research Agency (2016)",
      "Cambridge Analytica",
      "YouTube Conspiracy Channels",
      "Anti-Vaccine Influencers",
      "QAnon Merchandise Networks",
      "COVID-19 Misinformation"
    ],
    Time_Period: [
      "2016",
      "2016-Present",
      "2014-2018",
      "2020-2022",
      "2020-2023",
      "2020-2023",
      "2020-2023"
    ],
    Primary_Motivation: [
      "Economic",
      "State-sponsored + Economic",
      "Commercial/Political",
      "Economic",
      "Economic",
      "Economic",
      "Economic"
    ],
    Revenue_Model: [
      "Google AdSense from viral content",
      "State funding + advertising revenue",
      "Political campaign contracts",
      "YouTube ads + alternative monetization",
      "Subscriptions + affiliate marketing",
      "Merchandise + platform ads",
      "Product sales + subscriptions"
    ],
    Revenue_Estimate: [
      "$60K-$1M+ per individual",
      "$1.25M+ monthly budget",
      "$5.8M+ (Cruz campaign alone)",
      "11x higher predatory ads",
      "$75-$850/year subscriptions",
      "Multiple revenue streams",
      "25%+ follower growth"
    ],
    Key_Finding: [
      "Teenagers earned more than doctors; purely profit-driven",
      "400 employees working 12-hour shifts",
      "Harvested 87M Facebook profiles for targeting",
      "53% of demonetized channels use alternative sites",
      "MLM products and alternative health supplements",
      "Vietnam-based commercial operations",
      "Pandemic created unprecedented monetization opportunity"
    ]
  },
  monetization_methods: {
    Method: [
      "Programmatic Advertising",
      "Affiliate Marketing",
      "Merchandise Sales",
      "Subscription Services",
      "Crowdfunding/Donations",
      "Influencer Sponsorships",
      "Click Farms",
      "Bot Networks",
      "Political Contracts",
      "MLM Products"
    ],
    Description: [
      "Automated ad placement on content sites via Google AdSense, Facebook Audience Network",
      "Commissions from product sales via Amazon Associates, health supplements, survival gear",
      "Direct sales of branded merchandise (QAnon, political merchandise)",
      "Premium content access, newsletters, exclusive communities",
      "Patreon, GoFundMe, PayPal donations from dedicated followers",
      "Paid posts from campaigns, Super PACs, political organizations",
      "Artificial traffic generation to boost ad revenue",
      "Amplification services sold to boost engagement metrics",
      "Direct payments from political campaigns for services",
      "Multi-level marketing health products, essential oils"
    ],
    Prevalence_Metric: [
      "81.47% of disinfo traffic monetizable",
      "95% of low-quality marketers use it",
      "Common on conspiracy channels",
      "Premium anti-vax model",
      "2.3x more on conspiracy vs mainstream",
      "Growing 25%+ follower growth",
      "Widespread for traffic generation",
      "Bot farms charge $0.15/upvote",
      "Multi-million dollar contracts",
      "Major revenue for wellness influencers"
    ],
    Platform_Vulnerability: [
      "High - opacity enables abuse",
      "High - difficult to trace",
      "Medium - easy to identify",
      "Low - direct relationship",
      "Low - direct relationship",
      "Medium - disclosure requirements weak",
      "High - detection challenges",
      "High - sophisticated evasion",
      "Low - legitimate transactions",
      "Medium - operates outside platforms"
    ]
  },
  regulations: {
    Initiative: [
      "EU Digital Services Act",
      "EU Code of Practice on Disinformation",
      "Brand Safety Verification (IAS, DoubleVerify)",
      "YouTube Demonetization Policies",
      "Facebook/Meta Fact-Checking",
      "Meta Fact-Checking Rollback",
      "YouTube Policy Reversals",
      "Twitter/X Community Notes"
    ],
    Year_Implemented: [2024, 2022, 2018, 2020, 2016, 2025, 2025, 2023],
    Type: [
      "Government Regulation",
      "Self-Regulation",
      "Industry Tool",
      "Platform Policy",
      "Platform Policy",
      "Deregulation",
      "Deregulation",
      "Self-Regulation"
    ],
    Jurisdiction: [
      "EU",
      "EU",
      "Global",
      "Global",
      "Global",
      "Global",
      "Global",
      "Global"
    ],
    Status: [
      "Active",
      "Active but gaps",
      "Active",
      "Active but weakening",
      "Discontinued",
      "Active",
      "Active",
      "Active"
    ],
    Effectiveness_Rating: [
      "Under evaluation",
      "Limited - 81% disinfo still monetized",
      "Limited - $2.6B still flows to misinfo",
      "Limited - 53% use alternative methods",
      "Moderate effectiveness reported",
      "Concerns of increased misinformation",
      "Concerns of increased misinformation",
      "Mixed results, scale challenges"
    ]
  },
  key_stats: {
    Statistic: [
      "Global ad revenue to misinformation",
      "US ad revenue to misinformation",
      "Percentage of disinfo traffic monetizable",
      "Ratio of disinfo ad spend vs total digital news ad revenue",
      "Conspiracy channels using alternative monetization",
      "Predatory ads on conspiracy vs mainstream",
      "Anti-vax influencer follower growth during COVID",
      "Misinformation spread speed vs truth",
      "Increase in hate speech on X after moderation rollback",
      "Monthly budget of Internet Research Agency",
      "Macedonian teenager earnings (6 months)",
      "Content detection market CAGR",
      "Global economic cost of fake news annually"
    ],
    Value: [
      "$2.6 billion",
      "$1.62 billion",
      "81.47%",
      "46% (nearly half)",
      "2.3x more likely",
      "11x higher",
      "25%+ growth",
      "70% faster",
      "50% increase",
      "$1.25 million",
      "$60,000-$1,000,000",
      "14.5%",
      "$78 billion"
    ],
    Source: [
      "NewsGuard/Comscore 2022",
      "NewsGuard/Comscore 2022",
      "Carter Center 2024",
      "NewsGuard analysis",
      "NYU research 2022",
      "NYU research 2022",
      "CCDH 2021",
      "Academic research",
      "Research post-Musk takeover",
      "Mueller indictment 2018",
      "Field research 2016",
      "Grand View Research",
      "Univ. Baltimore/CHEQ 2019"
    ]
  },
  academic_frameworks: {
    Concept: [
      "Attention Economy",
      "Information Pollution",
      "Algorithmic Amplification",
      "Filter Bubbles",
      "Pigouvian Taxation",
      "Behavioral Economics",
      "Market-Shaping",
      "Platform Capitalism"
    ],
    Description: [
      "Attention as scarce economic resource competed for by platforms",
      "Misinformation as negative externality similar to environmental pollution",
      "Engagement algorithms systematically favor viral/emotional content",
      "Echo chambers created when platforms maximize ad revenue through engagement",
      "Proposed taxes on misinformation to internalize social costs",
      "Cognitive biases interact with platform design to spread falsehoods",
      "Platforms actively shape markets for information goods",
      "Revenue optimization creates incentives for harmful content"
    ],
    Key_Finding: [
      "Users allocate attention in fixed patterns regardless of content quality",
      "Social costs exceed private costs, creating market failure",
      "Low-reliability content shared less but compensated by algorithmic echo chambers",
      "Platforms limit viral content spread only when it threatens revenue",
      "Economic incentives could align platform behavior with social good",
      "Misinformation spreads 70% faster due to novelty and emotional triggers",
      "Multiple market actors financially benefit from disinformation spread",
      "Engagement-based models create expected, not accidental, misinformation spread"
    ]
  }
};

// Chart instances storage
const charts = {};

// Chart colors
const chartColors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B'];

// Navigation
function initNavigation() {
  const navBtns = document.querySelectorAll('.nav-btn');
  const sections = document.querySelectorAll('.section');
  
  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const sectionId = btn.dataset.section;
      
      // Update active states
      navBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      sections.forEach(s => s.classList.remove('active'));
      document.getElementById(sectionId).classList.add('active');
      
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}

// Overview Dashboard
function initOverview() {
  const data = appData.market_data;
  
  // Populate filters
  const typeFilter = document.getElementById('overview-type-filter');
  const yearFilter = document.getElementById('overview-year-filter');
  
  const uniqueTypes = [...new Set(data.Type)];
  uniqueTypes.forEach(type => {
    const option = document.createElement('option');
    option.value = type;
    option.textContent = type;
    typeFilter.appendChild(option);
  });
  
  const uniqueYears = [...new Set(data.Year)].sort((a, b) => b - a);
  uniqueYears.forEach(year => {
    const option = document.createElement('option');
    option.value = year;
    option.textContent = year;
    yearFilter.appendChild(option);
  });
  
  // Render initial charts
  renderOverviewCharts();
  renderOverviewCards();
  
  // Add filter listeners
  typeFilter.addEventListener('change', () => {
    renderOverviewCharts();
    renderOverviewCards();
  });
  
  yearFilter.addEventListener('change', () => {
    renderOverviewCharts();
    renderOverviewCards();
  });
}

function getFilteredMarketData() {
  const typeFilter = document.getElementById('overview-type-filter').value;
  const yearFilter = document.getElementById('overview-year-filter').value;
  const data = appData.market_data;
  
  const filtered = {
    Category: [],
    Amount_Billions: [],
    Year: [],
    Source: [],
    Type: []
  };
  
  for (let i = 0; i < data.Category.length; i++) {
    const matchesType = typeFilter === 'all' || data.Type[i] === typeFilter;
    const matchesYear = yearFilter === 'all' || data.Year[i].toString() === yearFilter;
    
    if (matchesType && matchesYear) {
      filtered.Category.push(data.Category[i]);
      filtered.Amount_Billions.push(data.Amount_Billions[i]);
      filtered.Year.push(data.Year[i]);
      filtered.Source.push(data.Source[i]);
      filtered.Type.push(data.Type[i]);
    }
  }
  
  return filtered;
}

function renderOverviewCharts() {
  const filteredData = getFilteredMarketData();
  
  // Market Chart
  const marketCtx = document.getElementById('marketChart');
  if (charts.marketChart) {
    charts.marketChart.destroy();
  }
  
  charts.marketChart = new Chart(marketCtx, {
    type: 'bar',
    data: {
      labels: filteredData.Category,
      datasets: [{
        label: 'Amount (Billions USD)',
        data: filteredData.Amount_Billions,
        backgroundColor: chartColors,
        borderColor: chartColors,
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            afterLabel: function(context) {
              const index = context.dataIndex;
              return `Year: ${filteredData.Year[index]}\nSource: ${filteredData.Source[index]}`;
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Billions USD'
          }
        },
        x: {
          ticks: {
            autoSkip: false,
            maxRotation: 45,
            minRotation: 45
          }
        }
      }
    }
  });
  
  // Type Comparison Chart
  const typeData = {};
  filteredData.Type.forEach((type, i) => {
    if (!typeData[type]) {
      typeData[type] = 0;
    }
    typeData[type] += filteredData.Amount_Billions[i];
  });
  
  const typeCtx = document.getElementById('typeComparisonChart');
  if (charts.typeChart) {
    charts.typeChart.destroy();
  }
  
  charts.typeChart = new Chart(typeCtx, {
    type: 'doughnut',
    data: {
      labels: Object.keys(typeData),
      datasets: [{
        data: Object.values(typeData),
        backgroundColor: chartColors,
        borderWidth: 2,
        borderColor: '#fff'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom'
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              const value = context.parsed;
              const total = context.dataset.data.reduce((a, b) => a + b, 0);
              const percentage = ((value / total) * 100).toFixed(1);
              return `${context.label}: $${value.toFixed(2)}B (${percentage}%)`;
            }
          }
        }
      }
    }
  });
}

function renderOverviewCards() {
  const filteredData = getFilteredMarketData();
  const container = document.getElementById('overview-cards');
  container.innerHTML = '';
  
  filteredData.Category.forEach((category, i) => {
    const card = document.createElement('div');
    card.className = 'metric-card';
    card.innerHTML = `
      <h4>${filteredData.Type[i]}</h4>
      <div class="metric-value">$${filteredData.Amount_Billions[i]}B</div>
      <p style="font-size: var(--font-size-base); color: var(--color-text); margin-bottom: var(--space-8);">${category}</p>
      <div class="metric-meta">
        <div>Year: ${filteredData.Year[i]}</div>
        <div>Source: ${filteredData.Source[i]}</div>
      </div>
    `;
    container.appendChild(card);
  });
}

// Case Studies
function initCaseStudies() {
  const data = appData.case_studies;
  
  // Populate filter
  const motivationFilter = document.getElementById('case-filter');
  const uniqueMotivations = [...new Set(data.Primary_Motivation)];
  uniqueMotivations.forEach(motivation => {
    const option = document.createElement('option');
    option.value = motivation;
    option.textContent = motivation;
    motivationFilter.appendChild(option);
  });
  
  // Render initial
  renderCaseStudies();
  
  // Add listeners
  document.getElementById('case-sort').addEventListener('change', renderCaseStudies);
  document.getElementById('case-filter').addEventListener('change', renderCaseStudies);
}

function renderCaseStudies() {
  const data = appData.case_studies;
  const sortBy = document.getElementById('case-sort').value;
  const filterBy = document.getElementById('case-filter').value;
  
  // Create array of case objects
  const cases = [];
  for (let i = 0; i < data.Case.length; i++) {
    if (filterBy === 'all' || data.Primary_Motivation[i] === filterBy) {
      cases.push({
        case: data.Case[i],
        time: data.Time_Period[i],
        motivation: data.Primary_Motivation[i],
        model: data.Revenue_Model[i],
        estimate: data.Revenue_Estimate[i],
        finding: data.Key_Finding[i]
      });
    }
  }
  
  // Sort
  cases.sort((a, b) => {
    if (sortBy === 'time') {
      return a.time.localeCompare(b.time);
    } else if (sortBy === 'motivation') {
      return a.motivation.localeCompare(b.motivation);
    } else {
      return a.case.localeCompare(b.case);
    }
  });
  
  // Render
  const container = document.getElementById('cases-grid');
  container.innerHTML = '';
  
  cases.forEach(caseItem => {
    const card = document.createElement('div');
    card.className = 'case-card';
    card.innerHTML = `
      <h3>${caseItem.case}</h3>
      <div class="case-meta">
        <span class="case-tag">${caseItem.time}</span>
        <span class="case-tag">${caseItem.motivation}</span>
      </div>
      <div class="case-detail"><strong>Revenue Model:</strong> ${caseItem.model}</div>
      <div class="case-detail"><strong>Revenue Estimate:</strong> ${caseItem.estimate}</div>
      <div class="case-detail"><strong>Key Finding:</strong> ${caseItem.finding}</div>
    `;
    
    card.addEventListener('click', () => {
      showCaseModal(caseItem);
    });
    
    container.appendChild(card);
  });
}

function showCaseModal(caseItem) {
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');
  
  modalBody.innerHTML = `
    <h3>${caseItem.case}</h3>
    <p><strong>Time Period:</strong> ${caseItem.time}</p>
    <p><strong>Primary Motivation:</strong> ${caseItem.motivation}</p>
    <p><strong>Revenue Model:</strong> ${caseItem.model}</p>
    <p><strong>Revenue Estimate:</strong> ${caseItem.estimate}</p>
    <p><strong>Key Finding:</strong> ${caseItem.finding}</p>
  `;
  
  modal.classList.add('active');
}

// Monetization Models
function initMonetization() {
  renderMonetizationChart();
  renderMonetizationCards();
  
  document.getElementById('monetization-filter').addEventListener('change', () => {
    renderMonetizationChart();
    renderMonetizationCards();
  });
}

function renderMonetizationChart() {
  const data = appData.monetization_methods;
  const filter = document.getElementById('monetization-filter').value;
  
  // Count by vulnerability level
  const vulnerabilityCounts = { High: 0, Medium: 0, Low: 0 };
  
  data.Platform_Vulnerability.forEach(vuln => {
    const level = vuln.split(' - ')[0];
    if (filter === 'all' || level === filter) {
      vulnerabilityCounts[level]++;
    }
  });
  
  const ctx = document.getElementById('vulnerabilityChart');
  if (charts.vulnerabilityChart) {
    charts.vulnerabilityChart.destroy();
  }
  
  charts.vulnerabilityChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['High', 'Medium', 'Low'],
      datasets: [{
        label: 'Number of Methods',
        data: [vulnerabilityCounts.High, vulnerabilityCounts.Medium, vulnerabilityCounts.Low],
        backgroundColor: ['#DB4545', '#FFC185', '#1FB8CD'],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 1
          },
          title: {
            display: true,
            text: 'Number of Methods'
          }
        }
      }
    }
  });
}

function renderMonetizationCards() {
  const data = appData.monetization_methods;
  const filter = document.getElementById('monetization-filter').value;
  const container = document.getElementById('monetization-grid');
  container.innerHTML = '';
  
  for (let i = 0; i < data.Method.length; i++) {
    const vulnLevel = data.Platform_Vulnerability[i].split(' - ')[0];
    
    if (filter !== 'all' && vulnLevel !== filter) continue;
    
    const card = document.createElement('div');
    card.className = 'monetization-card';
    card.innerHTML = `
      <div class="monetization-header">
        <h3>${data.Method[i]}</h3>
        <span class="vulnerability-badge ${vulnLevel.toLowerCase()}">${vulnLevel} Vulnerability</span>
      </div>
      <p class="monetization-description">${data.Description[i]}</p>
      <div class="monetization-stat"><strong>Prevalence:</strong> ${data.Prevalence_Metric[i]}</div>
      <div class="monetization-stat"><strong>Platform Impact:</strong> ${data.Platform_Vulnerability[i]}</div>
    `;
    container.appendChild(card);
  }
}

// Regulations
function initRegulations() {
  const data = appData.regulations;
  
  // Populate filters
  const typeFilter = document.getElementById('regulation-type-filter');
  const statusFilter = document.getElementById('regulation-status-filter');
  
  const uniqueTypes = [...new Set(data.Type)];
  uniqueTypes.forEach(type => {
    const option = document.createElement('option');
    option.value = type;
    option.textContent = type;
    typeFilter.appendChild(option);
  });
  
  const uniqueStatuses = [...new Set(data.Status)];
  uniqueStatuses.forEach(status => {
    const option = document.createElement('option');
    option.value = status;
    option.textContent = status;
    statusFilter.appendChild(option);
  });
  
  renderRegulationChart();
  renderRegulations();
  
  typeFilter.addEventListener('change', renderRegulations);
  statusFilter.addEventListener('change', renderRegulations);
  document.getElementById('regulation-sort').addEventListener('change', renderRegulations);
}

function renderRegulationChart() {
  const data = appData.regulations;
  
  // Count by year
  const yearCounts = {};
  data.Year_Implemented.forEach(year => {
    yearCounts[year] = (yearCounts[year] || 0) + 1;
  });
  
  const sortedYears = Object.keys(yearCounts).sort();
  
  const ctx = document.getElementById('regulationTimelineChart');
  if (charts.regulationChart) {
    charts.regulationChart.destroy();
  }
  
  charts.regulationChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: sortedYears,
      datasets: [{
        label: 'Number of Initiatives',
        data: sortedYears.map(year => yearCounts[year]),
        backgroundColor: 'rgba(31, 184, 205, 0.2)',
        borderColor: '#1FB8CD',
        borderWidth: 2,
        tension: 0.3,
        fill: true
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 1
          },
          title: {
            display: true,
            text: 'Number of Initiatives'
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
}

function renderRegulations() {
  const data = appData.regulations;
  const typeFilter = document.getElementById('regulation-type-filter').value;
  const statusFilter = document.getElementById('regulation-status-filter').value;
  const sortBy = document.getElementById('regulation-sort').value;
  
  // Create array of regulation objects
  const regulations = [];
  for (let i = 0; i < data.Initiative.length; i++) {
    const matchesType = typeFilter === 'all' || data.Type[i] === typeFilter;
    const matchesStatus = statusFilter === 'all' || data.Status[i] === statusFilter;
    
    if (matchesType && matchesStatus) {
      regulations.push({
        initiative: data.Initiative[i],
        year: data.Year_Implemented[i],
        type: data.Type[i],
        jurisdiction: data.Jurisdiction[i],
        status: data.Status[i],
        effectiveness: data.Effectiveness_Rating[i]
      });
    }
  }
  
  // Sort
  regulations.sort((a, b) => {
    if (sortBy === 'year-desc') {
      return b.year - a.year;
    } else if (sortBy === 'year-asc') {
      return a.year - b.year;
    } else {
      return a.initiative.localeCompare(b.initiative);
    }
  });
  
  // Render
  const container = document.getElementById('regulations-table');
  container.innerHTML = '';
  
  regulations.forEach(reg => {
    const row = document.createElement('div');
    row.className = 'regulation-row';
    row.innerHTML = `
      <div class="regulation-header-row">
        <div class="regulation-title">${reg.initiative}</div>
        <div class="regulation-badges">
          <span class="regulation-badge year">${reg.year}</span>
          <span class="regulation-badge type">${reg.type}</span>
          <span class="regulation-badge status">${reg.status}</span>
        </div>
      </div>
      <div class="regulation-meta">
        <span><strong>Jurisdiction:</strong> ${reg.jurisdiction}</span>
      </div>
      <div class="regulation-effectiveness">
        <strong>Effectiveness:</strong> ${reg.effectiveness}
      </div>
    `;
    container.appendChild(row);
  });
}

// Academic Concepts
function initConcepts() {
  renderConcepts();
  
  document.getElementById('concept-search').addEventListener('input', (e) => {
    renderConcepts(e.target.value.toLowerCase());
  });
}

function renderConcepts(searchTerm = '') {
  const data = appData.academic_frameworks;
  const container = document.getElementById('concepts-grid');
  container.innerHTML = '';
  
  for (let i = 0; i < data.Concept.length; i++) {
    const concept = data.Concept[i];
    const description = data.Description[i];
    const finding = data.Key_Finding[i];
    
    if (searchTerm && !concept.toLowerCase().includes(searchTerm) && 
        !description.toLowerCase().includes(searchTerm) && 
        !finding.toLowerCase().includes(searchTerm)) {
      continue;
    }
    
    const card = document.createElement('div');
    card.className = 'concept-card';
    card.innerHTML = `
      <h3>${concept}</h3>
      <p class="concept-description">${description}</p>
      <div class="concept-finding">
        <strong>Key Finding:</strong> ${finding}
      </div>
    `;
    container.appendChild(card);
  }
  
  if (container.children.length === 0) {
    container.innerHTML = '<p style="color: var(--color-text-secondary); padding: var(--space-24);">No concepts found matching your search.</p>';
  }
}

// Key Statistics
function initStats() {
  renderStats();
  
  document.getElementById('stats-search').addEventListener('input', (e) => {
    renderStats(e.target.value.toLowerCase());
  });
}

function renderStats(searchTerm = '') {
  const data = appData.key_stats;
  const container = document.getElementById('stats-grid');
  container.innerHTML = '';
  
  for (let i = 0; i < data.Statistic.length; i++) {
    const statistic = data.Statistic[i];
    const value = data.Value[i];
    const source = data.Source[i];
    
    if (searchTerm && !statistic.toLowerCase().includes(searchTerm) && 
        !value.toLowerCase().includes(searchTerm) && 
        !source.toLowerCase().includes(searchTerm)) {
      continue;
    }
    
    const card = document.createElement('div');
    card.className = 'stat-card';
    card.innerHTML = `
      <div class="stat-value">${value}</div>
      <div class="stat-label">${statistic}</div>
      <div class="stat-source">Source: ${source}</div>
    `;
    container.appendChild(card);
  }
  
  if (container.children.length === 0) {
    container.innerHTML = '<p style="color: var(--color-text-secondary); padding: var(--space-24);">No statistics found matching your search.</p>';
  }
}

// Modal
function initModal() {
  const modal = document.getElementById('modal');
  const closeBtn = document.getElementById('modal-close');
  
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
  });
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
}

// Initialize app
function init() {
  initNavigation();
  initOverview();
  initCaseStudies();
  initMonetization();
  initRegulations();
  initConcepts();
  initStats();
  initModal();
}

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}