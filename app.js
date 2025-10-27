// MOONSHOT - Meme Coin Website JavaScript
// ==========================================

// State Management
const state = {
  isMenuOpen: false,
  currentSection: 'home'
};

// Tokenomics Data - CUSTOMIZE THIS
const tokenomicsData = [
  { name: 'Liquidity Pool', percentage: 40, color: '#8B5CF6' },
  { name: 'Marketing', percentage: 20, color: '#EC4899' },
  { name: 'Team', percentage: 15, color: '#10B981' },
  { name: 'Community Rewards', percentage: 15, color: '#F59E0B' },
  { name: 'Development', percentage: 10, color: '#3B82F6' }
];

// DOM Elements
const elements = {
  loading: document.getElementById('loading'),
  navbar: document.getElementById('navbar'),
  navToggle: document.getElementById('navToggle'),
  navMenu: document.getElementById('navMenu'),
  navLinks: document.querySelectorAll('.nav-link'),
  backToTop: document.getElementById('backToTop'),
  copyBtn: document.getElementById('copyBtn'),
  newsletterForm: document.getElementById('newsletterForm'),
  pieChart: document.getElementById('pieChart'),
  chartLegend: document.getElementById('chartLegend')
};

// Initialize Application
function init() {
  // Hide loading screen after page loads
  window.addEventListener('load', () => {
    setTimeout(() => {
      elements.loading.classList.add('hidden');
    }, 500);
  });

  // Setup event listeners
  setupNavigation();
  setupScrollEffects();
  setupBackToTop();
  setupCopyContract();
  setupNewsletterForm();
  renderPieChart();
  setupScrollAnimations();
}

// Navigation
function setupNavigation() {
  // Mobile menu toggle
  elements.navToggle.addEventListener('click', toggleMobileMenu);

  // Smooth scroll for navigation links
  elements.navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }

      // Close mobile menu if open
      if (state.isMenuOpen) {
        toggleMobileMenu();
      }
    });
  });
}

function toggleMobileMenu() {
  state.isMenuOpen = !state.isMenuOpen;
  elements.navMenu.classList.toggle('active');
  elements.navToggle.classList.toggle('active');
}

// Scroll Effects
function setupScrollEffects() {
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Navbar background on scroll
    if (currentScroll > 100) {
      elements.navbar.classList.add('scrolled');
    } else {
      elements.navbar.classList.remove('scrolled');
    }

    // Update active nav link
    updateActiveNavLink();

    lastScroll = currentScroll;
  });
}

function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const scrollPosition = window.pageYOffset + 200;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      elements.navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

// Back to Top Button
function setupBackToTop() {
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
      elements.backToTop.classList.add('visible');
    } else {
      elements.backToTop.classList.remove('visible');
    }
  });

  elements.backToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Copy Contract Address
function setupCopyContract() {
  elements.copyBtn.addEventListener('click', () => {
    const contractText = document.querySelector('#contractAddress span').textContent;
    
    // Create temporary textarea to copy text
    const textarea = document.createElement('textarea');
    textarea.value = contractText;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    
    try {
      document.execCommand('copy');
      showCopyFeedback();
    } catch (err) {
      console.error('Failed to copy:', err);
    }
    
    document.body.removeChild(textarea);
  });
}

function showCopyFeedback() {
  const originalText = elements.copyBtn.textContent;
  elements.copyBtn.textContent = '✓';
  elements.copyBtn.style.color = '#10B981';
  
  setTimeout(() => {
    elements.copyBtn.textContent = originalText;
    elements.copyBtn.style.color = '';
  }, 2000);
}

// Newsletter Form
function setupNewsletterForm() {
  elements.newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const emailInput = document.getElementById('newsletterEmail');
    const email = emailInput.value.trim();
    
    if (validateEmail(email)) {
      showNewsletterSuccess();
      emailInput.value = '';
    } else {
      showNewsletterError();
    }
  });
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function showNewsletterSuccess() {
  const btn = elements.newsletterForm.querySelector('.newsletter-btn');
  const originalText = btn.textContent;
  btn.textContent = 'Subscribed! ✓';
  btn.style.background = 'linear-gradient(135deg, #10B981 0%, #059669 100%)';
  
  setTimeout(() => {
    btn.textContent = originalText;
    btn.style.background = '';
  }, 3000);
}

function showNewsletterError() {
  const input = document.getElementById('newsletterEmail');
  input.style.borderColor = '#EF4444';
  
  setTimeout(() => {
    input.style.borderColor = '';
  }, 2000);
}

// Pie Chart Rendering
function renderPieChart() {
  const canvas = elements.pieChart;
  const ctx = canvas.getContext('2d');
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = Math.min(centerX, centerY) - 20;

  let currentAngle = -Math.PI / 2; // Start at top

  // Draw pie segments
  tokenomicsData.forEach(segment => {
    const sliceAngle = (segment.percentage / 100) * 2 * Math.PI;

    // Draw slice
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
    ctx.closePath();
    ctx.fillStyle = segment.color;
    ctx.fill();

    // Add border
    ctx.strokeStyle = '#0F172A';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Add percentage text
    const textAngle = currentAngle + sliceAngle / 2;
    const textX = centerX + (radius * 0.7) * Math.cos(textAngle);
    const textY = centerY + (radius * 0.7) * Math.sin(textAngle);
    
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 18px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`${segment.percentage}%`, textX, textY);

    currentAngle += sliceAngle;
  });

  // Render legend
  renderLegend();
}

function renderLegend() {
  elements.chartLegend.innerHTML = '';
  
  tokenomicsData.forEach(segment => {
    const legendItem = document.createElement('div');
    legendItem.className = 'legend-item';
    legendItem.innerHTML = `
      <div class="legend-color" style="background-color: ${segment.color}"></div>
      <span class="legend-label">${segment.name}</span>
      <span class="legend-percentage">${segment.percentage}%</span>
    `;
    elements.chartLegend.appendChild(legendItem);
  });
}

// Scroll Animations
function setupScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe all sections and cards
  const animateElements = document.querySelectorAll(
    '.feature-card, .detail-card, .roadmap-item, .team-card'
  );
  
  animateElements.forEach(el => {
    el.classList.add('scroll-animate');
    observer.observe(el);
  });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Export for potential external use
window.MoonshotApp = {
  state,
  tokenomicsData
};