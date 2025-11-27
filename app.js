// ============================================
// DATA
// ============================================

const tripsData = [
  {
    id: 1,
    name: 'Arunachal Valley Immersion',
    duration: '4 Days / 3 Nights',
    season: 'January - February',
    price: 5725,
    groupSize: '4-6 people',
    image: 'https://dwq3yv87q1b43.cloudfront.net/public/blogs/fit-in/1200x675/Blog_20241109-490819301-1731139799.jpg',
    description: 'Immerse yourself in authentic tribal culture and pristine wilderness of Arunachal Pradesh. Experience village life, forest trekking, and genuine local connections.',
    highlights: [
      'Wildlife sanctuary visit',
      'Riverside bonfire evening',
      'Village tribal workshop',
      'Waterfall exploration',
      'Farm-to-table meals'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Wildlife Sanctuary',
        description: 'Arrive at Pasighat. Explore the scenic wildlife sanctuary and enjoy a riverside bonfire under the stars.'
      },
      {
        day: 2,
        title: 'Village Immersion',
        description: 'Experience authentic village life in Boleng. Participate in tribal culture workshops and sleep in comfortable tents.'
      },
      {
        day: 3,
        title: 'Waterfall Trek',
        description: 'Trek to Upper Siang waterfalls. Stay in a homestay and connect with the local family.'
      },
      {
        day: 4,
        title: 'Farewell & Departure',
        description: 'Farm breakfast in the morning and departure with unforgettable memories.'
      }
    ],
    inclusions: [
      'Transport (Bolero & 2-wheelers)',
      'Accommodation (bamboo homestays & tents)',
      'All meals (farm-to-table)',
      'Expert local guides',
      'Activities & experiences'
    ],
    rating: 4.8,
    reviews: 127,
    featured: true,
    category: ['winter', 'budget']
  },
  {
    id: 2,
    name: 'Ziro Valley Culture Circuit',
    duration: '5 Days / 4 Nights',
    season: 'May - June, September - October',
    price: 7200,
    groupSize: '4-6 people',
    image: 'https://safarpanda.com/wp-content/uploads/cwf/2025/06/Ziro-fastival10.webp',
    description: 'Explore the land of the Apatani tribe with rice paddies, traditional villages, and breathtaking landscapes.',
    highlights: [
      'Apatani tribal villages',
      'Traditional rice paddies',
      'Bamboo craft workshops',
      'Scenic viewpoints',
      'Local cuisine experience'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival at Ziro',
        description: 'Welcome to the picturesque Ziro Valley. Visit local villages and meet the Apatani people.'
      },
      {
        day: 2,
        title: 'Cultural Immersion',
        description: 'Participate in bamboo craft workshops and explore traditional rice paddies.'
      },
      {
        day: 3,
        title: 'Nature Trails',
        description: 'Trek through pine forests and enjoy panoramic valley views.'
      },
      {
        day: 4,
        title: 'Village Experience',
        description: 'Spend time with local families, learn about their customs and traditions.'
      },
      {
        day: 5,
        title: 'Departure',
        description: 'Farewell breakfast and departure with beautiful memories.'
      }
    ],
    inclusions: [
      'All transportation',
      'Homestay accommodation',
      'All meals',
      'Cultural workshops',
      'Local guides'
    ],
    rating: 4.9,
    reviews: 89,
    featured: false,
    category: ['summer', 'premium']
  },
  {
    id: 3,
    name: 'Tawang Winter Wonderland',
    duration: '7 Days / 6 Nights',
    season: 'December - February',
    price: 9500,
    groupSize: '4-6 people',
    image: 'https://www.esikkimtourism.in/wp-content/uploads/2024/12/Arunachal-Pradesh-Tawang.jpg',
    description: 'Experience the majesty of Himalayan peaks, ancient monasteries, and pristine snow-covered landscapes.',
    highlights: [
      'Tawang Monastery visit',
      'Snow trekking',
      'Bum La Pass',
      'Mountain village homestay',
      'Sunrise from peaks'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Journey to Tawang',
        description: 'Scenic drive through Sela Pass, experiencing stunning mountain vistas.'
      },
      {
        day: 2,
        title: 'Tawang Monastery',
        description: 'Explore the largest monastery in India and immerse in Buddhist culture.'
      },
      {
        day: 3,
        title: 'Bum La Pass',
        description: 'Visit the Indo-China border at 15,200 feet altitude.'
      },
      {
        day: 4,
        title: 'Village Exploration',
        description: 'Spend time in remote mountain villages, experiencing local life.'
      },
      {
        day: 5,
        title: 'Snow Adventures',
        description: 'Enjoy snow activities and winter photography.'
      },
      {
        day: 6,
        title: 'Local Markets',
        description: 'Explore Tawang markets and try local delicacies.'
      },
      {
        day: 7,
        title: 'Return Journey',
        description: 'Departure with memories of the Himalayas.'
      }
    ],
    inclusions: [
      'All transportation including permits',
      'Hotel & homestay accommodation',
      'All meals',
      'Monastery entry fees',
      'Expert mountain guides'
    ],
    rating: 4.9,
    reviews: 112,
    featured: false,
    category: ['winter', 'premium']
  },
  {
    id: 4,
    name: 'Upper Siang Wilderness',
    duration: '6 Days / 5 Nights',
    season: 'October - March',
    price: 6800,
    groupSize: '4-6 people',
    image: 'https://krishnandusarkar.com/wp-content/uploads/2020/08/adi-tribe-household-structure-1024x684.webp',
    description: 'Remote trekking through pristine forests, ancient monasteries, and untouched wilderness.',
    highlights: [
      'Remote mountain trekking',
      'Ancient Buddhist monasteries',
      'Wildlife spotting',
      'Photography opportunities',
      'Community homestays'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Base Camp Arrival',
        description: 'Reach the starting point and prepare for wilderness adventure.'
      },
      {
        day: 2,
        title: 'Forest Trek',
        description: 'Trek through dense forests with opportunities for wildlife spotting.'
      },
      {
        day: 3,
        title: 'Monastery Visit',
        description: 'Visit ancient monasteries hidden in the mountains.'
      },
      {
        day: 4,
        title: 'River Exploration',
        description: 'Explore pristine rivers and camping by the riverside.'
      },
      {
        day: 5,
        title: 'Village Stay',
        description: 'Experience authentic village life in remote communities.'
      },
      {
        day: 6,
        title: 'Return',
        description: 'Trek back and departure.'
      }
    ],
    inclusions: [
      'All transportation',
      'Camping equipment & tents',
      'All meals',
      'Trekking permits',
      'Experienced guides'
    ],
    rating: 4.7,
    reviews: 67,
    featured: false,
    category: ['winter', 'budget']
  }
];

const testimonialsData = [
  {
    name: 'Priya Sharma',
    location: 'Mumbai, India',
    rating: 5,
    text: 'The most authentic travel experience I\'ve ever had. The guides were knowledgeable, the food was incredible, and the cultural immersion was beyond expectations!'
  },
  {
    name: 'Michael Chen',
    location: 'Singapore',
    rating: 5,
    text: 'Unscripted Travels gave us exactly what we were looking for - real connections with local communities away from commercialized tourism.'
  },
  {
    name: 'Sarah Williams',
    location: 'UK',
    rating: 5,
    text: 'Every moment was magical. Small group size allowed for genuine interactions. Highly recommend to anyone seeking authentic adventures!'
  },
  {
    name: 'Rajesh Kumar',
    location: 'Delhi, India',
    rating: 4.8,
    text: 'Outstanding organization and local knowledge. The homestay experience in Boleng was unforgettable. Worth every penny!'
  }
];

const faqData = [
  {
    question: 'What\'s the group size?',
    answer: 'We keep groups intimate at 4-6 people maximum. This ensures authentic local connections and a personalized experience.'
  },
  {
    question: 'Are meals vegetarian-friendly?',
    answer: 'Yes! We offer vegetarian, vegan, and non-vegetarian options. Please mention your dietary preferences during booking.'
  },
  {
    question: 'What\'s included in the trip cost?',
    answer: 'All transport, accommodation, meals, guides, and activities are included. Some optional experiences like wine tasting are extra.'
  },
  {
    question: 'What\'s the fitness level required?',
    answer: 'Moderate fitness is needed for most trips. We have options for varying fitness levels. Contact us to discuss.'
  },
  {
    question: 'Can we customize our trip?',
    answer: 'Absolutely! We specialize in customized experiences. Contact us with your preferences.'
  }
];

// ============================================
// GALLERY DEMO (replace with real images)
// ============================================
const demoGalleryImages = [
  {
    url: 'https://raw.githubusercontent.com/RushiBhatt12/ytdownload/refs/heads/main/20241018_095959.jpg',
    caption: 'River Side Camp, Siang',
    category: 'Nature'
  },
   {
    url: 'https://raw.githubusercontent.com/RushiBhatt12/ytdownload/refs/heads/main/20241018_100541.jpg',
    caption: 'Hanging Bridge Made of Tree Roots, Siang',
    category: 'Nature'
  },
  {
    url: 'https://raw.githubusercontent.com/RushiBhatt12/ytdownload/refs/heads/main/20241018_102032.jpg',
    caption: 'Hidden WaterFall, Siang',
    category: 'Nature'
  },
  {
    url: 'https://raw.githubusercontent.com/RushiBhatt12/ytdownload/refs/heads/main/20221219_121124.jpg',
    caption: 'Wilderness river trek, Siang',
    category: 'Community'
  },
 {
    url: 'https://raw.githubusercontent.com/RushiBhatt12/ytdownload/refs/heads/main/w2.png',
    caption: 'Misty Arunachal valley at dawn',
    category: 'Nature'
  },
  {
    url: 'https://i.pinimg.com/originals/f5/b0/aa/f5b0aa009a4635207166d984e4cbd9c5.jpg',
    caption: 'Apatani rice paddies, Ziro valley',
    category: 'Nature'
  },
  {
    url: 'https://raw.githubusercontent.com/RushiBhatt12/ytdownload/refs/heads/main/night.png',
    caption: 'Remote village ritual, East Siang',
    category: 'Culture'
  },
  {
    url: 'https://raw.githubusercontent.com/RushiBhatt12/ytdownload/refs/heads/main/(8).png',
    caption: ' ',
    category: ' '
  },
];


// == MAP DATA ==
const mapLocations = [
  { id:1, name:'Pasighat', district:'East Siang District', lat:28.0641, lng:93.8186, story:"Gateway to untouched wilderness. Where the Siang River flows through tribal lands and ancient cultures thrive beyond commercialism.", culture:"East Siang tribal heritage" },
  { id:2, name:'Boleng', district:'East Siang', lat:28.1231, lng:93.8754, story:"A hidden village where tribal families welcome strangers like kinfolk. Experience authentic village life far from tourism.", culture:"Adivasi immersion" },
  { id:3, name:'Rasing', district:'Upper Siang', lat:28.3642, lng:93.9845, story:"Untamed wilderness where forests embrace waterfalls and silence speaks louder than words. Real trekking, real nature.", culture:"Mountain wilderness" },
  { id:4, name:'Yingkiong', district:'Upper Siang', lat:28.4521, lng:93.9123, story:"Where mountains meet sky. A remote corner offering spiritual elevation and authentic cultural connections.", culture:"Himalayan spirituality" },
  { id:5, name:'Ziro Valley', district:'Lower Subansiri', lat:27.8123, lng:93.5642, story:"The land of the Apatani tribe. Ancient rice paddies, bamboo craft, and a culture that predates modern tourism.", culture:"Apatani traditions" },
  { id:6, name:'Tawang', district:'Tawang', lat:27.5895, lng:91.8621, story:"Sacred Himalayan heights. Ancient monasteries, spiritual journeys, and mountains that touch the divine.", culture:"Buddhist heritage" },
];

let currentPage = 'home';

// ============================================
// UTILITY FUNCTIONS
// ============================================

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerHeight = document.querySelector('.header').offsetHeight;
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerHeight - 20;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

function showToast(message, type = 'success') {
  const toastContainer = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  const icons = {
    success: '✓',
    error: '✗',
    info: 'ℹ'
  };
  
  toast.innerHTML = `
    <div class="toast-icon">${icons[type] || icons.info}</div>
    <div class="toast-message">${message}</div>
  `;
  
  toastContainer.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'slideIn 0.3s reverse';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target.toLocaleString();
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current).toLocaleString();
    }
  }, 16);
}

// ============================================
// HEADER & NAVIGATION
// ============================================

function initHeader() {
  const header = document.getElementById('header');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  
  // Sticky header on scroll
  const handleScroll = throttle(() => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    updateActiveNavLink();
    updateScrollProgress();
  }, 100);
  
  window.addEventListener('scroll', handleScroll);
  
  // Hamburger menu toggle
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  });
  
  // Close mobile menu on link click
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
      scrollToSection(targetId);
    });
  });
  
  // Desktop nav smooth scroll
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      scrollToSection(targetId);
    });
  });
}

function updateActiveNavLink() {
  const sections = ['home', 'about', 'trips', 'testimonials', 'faq', 'contact'];
  const navLinks = document.querySelectorAll('.nav-link');
  const scrollPosition = window.scrollY + 150;
  
  sections.forEach((sectionId, index) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        navLinks.forEach(link => link.classList.remove('active'));
        if (navLinks[index]) {
          navLinks[index].classList.add('active');
        }
      }
    }
  });
}

function updateScrollProgress() {
  const scrollProgress = document.getElementById('scrollProgress');
  const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (window.scrollY / windowHeight) * 100;
  scrollProgress.style.width = scrolled + '%';
}

// ============================================
// THEME TOGGLE
// ============================================

function initThemeToggle() {
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = themeToggle.querySelector('.theme-icon');
  
  // Check for saved theme preference
  let currentTheme = 'light';
  
  themeToggle.addEventListener('click', () => {
    if (currentTheme === 'light') {
      document.documentElement.setAttribute('data-theme', 'dark');
      themeIcon.textContent = '☀️';
      currentTheme = 'dark';
      showToast('Dark mode activated', 'info');
    } else {
      document.documentElement.removeAttribute('data-theme');
      themeIcon.textContent = '🌙';
      currentTheme = 'light';
      showToast('Light mode activated', 'info');
    }
  });
}

// ============================================
// STATS COUNTER ANIMATION
// ============================================

function initStatsCounter() {
  const statNumbers = document.querySelectorAll('.stat-number');
  let hasAnimated = false;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        statNumbers.forEach(stat => {
          const target = parseInt(stat.getAttribute('data-target'));
          animateCounter(stat, target);
        });
      }
    });
  }, { threshold: 0.5 });
  
  const statsGrid = document.querySelector('.stats-grid');
  if (statsGrid) {
    observer.observe(statsGrid);
  }
}

// ============================================
// TRIP CARDS & CAROUSEL
// ============================================

function renderTripCard(trip) {
  return `
    <div class="trip-card ${trip.featured ? 'featured' : ''}" data-id="${trip.id}" onclick="openTripModal(${trip.id})">
      ${trip.featured ? '<div class="trip-card-badge">Featured</div>' : ''}
      <div class="trip-card-image">
        <img src="${trip.image}" alt="${trip.name}" loading="lazy">
      </div>
      <div class="trip-card-info">
        <h3 class="trip-card-title">${trip.name}</h3>
        <div class="trip-card-meta">${trip.duration} • ${trip.season}</div>
        <p class="trip-card-details">${trip.description}</p>
        <div class="trip-card-price">₹${trip.price.toLocaleString()}</div>
        <button class="trip-card-view" onclick="event.stopPropagation();openTripModal(${trip.id})">View Details</button>
      </div>
    </div>
  `;
}

function initTrips() {
  const tripGrid = document.getElementById('tripGrid');
  const carouselTrack = document.getElementById('carouselTrack');
  
  // Render carousel
  carouselTrack.innerHTML = tripsData.map(trip => renderTripCard(trip)).join('');
  
  // Render grid
  tripGrid.innerHTML = tripsData.map(trip => renderTripCard(trip)).join('');
  
  // Initialize carousel controls
  document.getElementById('carouselPrev').addEventListener('click', () => moveCarousel(-1));
  document.getElementById('carouselNext').addEventListener('click', () => moveCarousel(1));
  
  // Start autoplay
  startCarouselAutoplay();
  
  // Initialize filters
  initTripFilters();
}

function moveCarousel(direction) {
  const track = document.getElementById('carouselTrack');
  const cards = track.querySelectorAll('.trip-card');
  const cardWidth = cards[0].offsetWidth + 24; // Card width + gap
  
  currentCarouselIndex += direction;
  
  if (currentCarouselIndex < 0) {
    currentCarouselIndex = cards.length - 1;
  } else if (currentCarouselIndex >= cards.length) {
    currentCarouselIndex = 0;
  }
  
  track.style.transform = `translateX(-${currentCarouselIndex * cardWidth}px)`;
  
  // Reset autoplay
  stopCarouselAutoplay();
  startCarouselAutoplay();
}

function startCarouselAutoplay() {
  carouselAutoplayInterval = setInterval(() => {
    moveCarousel(1);
  }, 5000);
}

function stopCarouselAutoplay() {
  clearInterval(carouselAutoplayInterval);
}

function initTripFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const tripCards = document.querySelectorAll('#tripGrid .trip-card');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');
      
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Filter trips
      tripCards.forEach(card => {
        const categories = card.getAttribute('data-category');
        
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
      
      showToast(`Showing ${filter === 'all' ? 'all' : filter} trips`, 'info');
    });
  });
}

// ============================================
// TRIP MODAL
// ============================================

function openTripModal(tripId) {
  const trip = tripsData.find(t => t.id === tripId);
  if (!trip) return;
  const modal = document.getElementById('tripModal');
  const modalBody = document.getElementById('modalBody');
  modalBody.innerHTML = `
    <h2 class="modal-trip-title">${trip.name}</h2>
    <img src="${trip.image}" alt="${trip.name}" class="modal-trip-image">
    <div class="modal-trip-meta">${trip.duration} • ${trip.season} • ${trip.groupSize}</div>
    <div class="modal-trip-price">₹${trip.price.toLocaleString()} per person</div>
    
    <div class="modal-trip-section">
      <h3>About This Experience</h3>
      <p style="color:var(--c-text-secondary);line-height:1.8;font-size:16px;">${trip.description}</p>
    </div>
    
    <div class="modal-trip-section">
      <h3>Highlights</h3>
      <ul>${trip.highlights.map(h => `<li>${h}</li>`).join('')}</ul>
    </div>
    
    <div class="modal-trip-section">
      <h3>Itinerary</h3>
      ${trip.itinerary.map(item => `
        <div class="itinerary-block">
          <div class="itinerary-day">Day ${item.day}</div>
          <div class="itinerary-title">${item.title}</div>
          <div class="itinerary-description">${item.description}</div>
        </div>
      `).join('')}
    </div>
    
    <div class="modal-trip-section">
      <h3>Inclusions</h3>
      <ul>${trip.inclusions.map(i => `<li>${i}</li>`).join('')}</ul>
    </div>
    
    <button class="btn btn-primary" onclick="inquireNow('${trip.name}')" style="width:100%;margin-top:24px;">Inquire Now</button>
  `;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('tripModal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function inquireNow(tripName) {
  closeModal();
  navigateToPage('contact');
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 100);
}

function initModal() {
  const modalClose = document.getElementById('modalClose');
  const modalOverlay = document.getElementById('modalOverlay');
  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalOverlay) modalOverlay.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

// ============================================
// TESTIMONIALS CAROUSEL
// ============================================

function initTestimonials() {
  const track = document.getElementById('testimonialTrack');
  const dotsContainer = document.getElementById('testimonialDots');
  
  // Render testimonials
  track.innerHTML = testimonialsData.map(testimonial => {
    const starsHTML = '★'.repeat(Math.floor(testimonial.rating));
    return `
      <div class="testimonial-card">
        <div class="testimonial-stars">${starsHTML}</div>
        <p class="testimonial-text">"${testimonial.text}"</p>
        <div class="testimonial-author">${testimonial.name}</div>
        <div class="testimonial-location">${testimonial.location}</div>
      </div>
    `;
  }).join('');
  
  // Render dots
  dotsContainer.innerHTML = testimonialsData.map((_, index) => 
    `<div class="testimonial-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></div>`
  ).join('');
  
  // Initialize controls
  document.getElementById('testimonialPrev').addEventListener('click', () => moveTestimonial(-1));
  document.getElementById('testimonialNext').addEventListener('click', () => moveTestimonial(1));
  
  // Dot navigation
  document.querySelectorAll('.testimonial-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      const index = parseInt(dot.getAttribute('data-index'));
      currentTestimonialIndex = index;
      updateTestimonialPosition();
      resetTestimonialAutoplay();
    });
  });
  
  // Start autoplay
  startTestimonialAutoplay();
}

function moveTestimonial(direction) {
  currentTestimonialIndex += direction;
  
  if (currentTestimonialIndex < 0) {
    currentTestimonialIndex = testimonialsData.length - 1;
  } else if (currentTestimonialIndex >= testimonialsData.length) {
    currentTestimonialIndex = 0;
  }
  
  updateTestimonialPosition();
  resetTestimonialAutoplay();
}

function updateTestimonialPosition() {
  const track = document.getElementById('testimonialTrack');
  track.style.transform = `translateX(-${currentTestimonialIndex * 100}%)`;
  
  // Update dots
  document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
    dot.classList.toggle('active', index === currentTestimonialIndex);
  });
}

function startTestimonialAutoplay() {
  testimonialAutoplayInterval = setInterval(() => {
    moveTestimonial(1);
  }, 6000);
}

function resetTestimonialAutoplay() {
  clearInterval(testimonialAutoplayInterval);
  startTestimonialAutoplay();
}

// ============================================
// FAQ ACCORDION
// ============================================

function initFAQ() {
  const faqContainer = document.getElementById('faqContainer');
  if (!faqContainer) return;
  faqContainer.innerHTML = faqData.map((faq, index) => `
    <div class="faq-item" data-index="${index}">
      <button class="faq-question">
        <span>${faq.question}</span>
        <span class="faq-icon">▼</span>
      </button>
      <div class="faq-answer">
        <div class="faq-answer-content">${faq.answer}</div>
      </div>
    </div>
  `).join('');
  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const faqItem = button.parentElement;
      const isActive = faqItem.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(item => item.classList.remove('active'));
      if (!isActive) faqItem.classList.add('active');
    });
  });
}

// ============================================
// CONTACT FORM
// ============================================

function initContactForm() {
  const form = document.getElementById('contactForm');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Clear previous errors
    document.querySelectorAll('.form-error').forEach(error => {
      error.classList.remove('show');
      error.textContent = '';
    });
    
    document.querySelectorAll('.error').forEach(input => {
      input.classList.remove('error');
    });
    
    // Get form values
    const name = document.getElementById('formName').value.trim();
    const email = document.getElementById('formEmail').value.trim();
    const message = document.getElementById('formMessage').value.trim();
    
    // Validate
    let isValid = true;
    
    if (name.length < 2) {
      showFieldError('formName', 'nameError', 'Name must be at least 2 characters');
      isValid = false;
    }
    
    if (!isValidEmail(email)) {
      showFieldError('formEmail', 'emailError', 'Please enter a valid email address');
      isValid = false;
    }
    
    if (message.length < 10) {
      showFieldError('formMessage', 'messageError', 'Message must be at least 10 characters');
      isValid = false;
    }
    
    if (isValid) {
      // Simulate form submission
      showToast('Thank you! Your inquiry has been sent successfully.', 'success');
      form.reset();
    } else {
      showToast('Please fix the errors in the form', 'error');
    }
  });
  
  // Real-time validation
  const inputs = form.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.addEventListener('blur', () => {
      validateField(input);
    });
    
    input.addEventListener('input', () => {
      if (input.classList.contains('error')) {
        validateField(input);
      }
    });
  });
}

function showFieldError(fieldId, errorId, message) {
  const field = document.getElementById(fieldId);
  const error = document.getElementById(errorId);
  
  field.classList.add('error');
  error.textContent = message;
  error.classList.add('show');
}

function validateField(input) {
  const errorElement = document.getElementById(input.id.replace('form', '').toLowerCase() + 'Error');
  
  if (input.type === 'email') {
    if (!isValidEmail(input.value)) {
      input.classList.add('error');
      if (errorElement) {
        errorElement.textContent = 'Please enter a valid email';
        errorElement.classList.add('show');
      }
      return false;
    }
  } else if (input.value.trim().length < 2) {
    input.classList.add('error');
    if (errorElement) {
      errorElement.textContent = 'This field is required';
      errorElement.classList.add('show');
    }
    return false;
  }
  
  input.classList.remove('error');
  if (errorElement) {
    errorElement.classList.remove('show');
  }
  return true;
}

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// ============================================
// BACK TO TOP BUTTON
// ============================================

function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTop');
  
  window.addEventListener('scroll', throttle(() => {
    if (window.scrollY > 500) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  }, 200));
  
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

function initScrollAnimations() {
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
  
  document.querySelectorAll('.fade-in-on-scroll').forEach(element => {
    observer.observe(element);
  });
}

// ============================================
// HERO PARALLAX + Canvas Effects (mist, birds, particles)
// ============================================
function initHeroParallax() {
  const parallax = document.querySelector('.hero-parallax');
  if (parallax) {
    window.addEventListener('scroll', throttle(() => {
      const rate = window.scrollY * 0.3;
      parallax.style.transform = `translateY(${rate}px)`;
    }, 20));
  }
  // Init particles/birds animation (canvas)
  const canvas = document.getElementById('heroCanvas');
  if (canvas) {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    startHeroCanvasAnimation(canvas);
  }
}

function startHeroCanvasAnimation(canvas) {
  const ctx = canvas.getContext('2d');
  // Particle/mist/bird simulation
  let birds = [], mist = [], particles = [];
  // Generate birds (minimal, 3-6, realistic)
  for (let i=0;i<3;i++) birds.push({ 
    x: Math.random()*canvas.width, 
    y: canvas.height*0.2 + Math.random()*100, 
    vx: 0.18+0.08*Math.random(), 
    vy: 0.02*Math.random(), 
    size: 32+Math.random()*24,
    gray: 60+Math.round(Math.random()*30)
  });
  // Mist particles
  for (let i=0;i<14;i++) mist.push({
    x: Math.random()*canvas.width, y: Math.random()*canvas.height*0.7, 
    radius: 60+Math.random()*40, opacity: 0.13+Math.random()*0.07, speed: 0.15+Math.random()*0.19 });
  // Dust particles
  for (let i=0;i<12;i++) particles.push({x:Math.random()*canvas.width, y:Math.random()*canvas.height, r:3+Math.random()*2, opacity:0.12+Math.random()*0.11, vx: 0.11+Math.random()*0.08, vy:0.04+Math.random()*0.09});
  function drawBird(b) {
    // Minimal: gray arc with wings (non-cartoon)
    ctx.save();
    ctx.globalAlpha = 0.7;
    ctx.translate(b.x, b.y);
    ctx.scale(b.size/56, b.size/56);
    ctx.beginPath();
    ctx.moveTo(-12,0); ctx.bezierCurveTo(-28,-14,16,-17,12,0);
    ctx.moveTo(-8,0); ctx.bezierCurveTo(-22,-10,12,-13,8,0);
    ctx.lineWidth = 2.1; ctx.strokeStyle = `rgba(${b.gray},${b.gray},${b.gray},0.65)`;
    ctx.stroke();
    ctx.restore();
  }
  function drawMist(m) {
    ctx.save();
    ctx.globalAlpha = m.opacity;
    ctx.beginPath();
    ctx.arc(m.x, m.y, m.radius, 0, 2*Math.PI);
    ctx.fillStyle = "#f5f1e8";
    ctx.fill();
    ctx.restore();
  }
  function drawParticle(p) {
    ctx.save();
    ctx.globalAlpha = p.opacity;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, 2*Math.PI);
    ctx.fillStyle = "#8b7355";
    ctx.fill();
    ctx.restore();
  }
  function animate() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    mist.forEach(m=>{
      drawMist(m);
      m.x += m.speed*0.7;
      if (m.x > canvas.width+100) m.x = -60;
    });
    particles.forEach(p=>{
      drawParticle(p);
      p.x += p.vx; p.y += p.vy;
      if (p.x > canvas.width+30) p.x = -10;
      if (p.y > canvas.height+30) p.y = -10;
    });
    birds.forEach(b=> {
      drawBird(b);
      b.x += b.vx; b.y += b.vy;
      if (b.x > canvas.width+60) b.x = -20;
      if (b.y > canvas.height*0.5) b.y = canvas.height*0.15+Math.random()*100;
    });
    requestAnimationFrame(animate);
  }
  animate();
}

// ============================================
// INITIALIZATION
// ============================================

// ============================================
// PAGE ROUTING LOGIC
// ============================================

function setupNavigation() {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = link.getAttribute('data-page');
      navigateToPage(page);
    });
  });
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = link.getAttribute('data-page');
      document.getElementById('hamburger').classList.remove('active');
      document.getElementById('mobileMenu').classList.remove('active');
      navigateToPage(page);
    });
  });
}

function navigateToPage(page) {
  const allowedPages = ['home','storymap','experiences','gallery','philosophy','contact'];
  if (!allowedPages.includes(page)) page = 'home';
  currentPage = page;
  renderPage(page);
  updateActiveNavLinkPage(page);
}

function updateActiveNavLinkPage(page) {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.getAttribute('data-page') === page);
  });
}

function renderPage(page) {
  const main = document.getElementById('mainContent');
  let tplId = '';
  if (page === 'home') tplId = 'homePage';
  else if (page === 'storymap') tplId = 'storymapPage';
  else if (page === 'experiences') tplId = 'experiencesPage';
  else if (page === 'gallery') tplId = 'galleryPage';
  else if (page === 'philosophy') tplId = 'philosophyPage';
  else if (page === 'contact') tplId = 'contactPage';
  else tplId = 'homePage';
  // Unmount previous page event listeners, if any
  main.innerHTML = '';
  const template = document.getElementById(tplId);
  if (template) {
    main.appendChild(template.content.cloneNode(true));
  }
  main.classList.remove('page-fade-in');
  setTimeout(() => main.classList.add('page-fade-in'), 10);

  // Run page-specific logic
  if (page === 'home') {
    renderFeaturedTrip();
    renderStats();
    initHeroParallax();
  }
  else if (page === 'storymap') {
    renderStoryMap();
  }
  else if (page === 'experiences') {
    renderExperiencesTripsGrid();
  }
  else if (page === 'gallery') {
    renderGalleryGrid();
  }
  else if (page === 'philosophy') {
    renderPhilosophyGrid();
  }
  // Contact/other logic as before
}

function renderFeaturedTrip() {
  const featuredTrip = tripsData.find(t => t.featured);
  const featuredDiv = document.getElementById('featuredTrip');
  if (!featuredTrip || !featuredDiv) return;
  featuredDiv.innerHTML = renderTripCard(featuredTrip);
}

function renderStats() {
  const stats = [
    { label: 'Travelers Served', value: 2847 },
    { label: 'Communities Supported', value: 34 },
    { label: 'Years of Excellence', value: 5 }
  ];
  const statDiv = document.getElementById('statsMinimal');
  statDiv.innerHTML = stats.map(s =>
    `<div class="stat-min-block">
      <div class="stat-min-label">${s.label}</div>
      <div class="stat-min-value">${s.value.toLocaleString()}</div>
    </div>`
  ).join('<hr class="stat-divider">');
}

function renderExperiencesTripsGrid() {
  const grid = document.getElementById('experiencesTripGrid');
  if (!grid) return;
  grid.innerHTML = tripsData.map(trip => renderTripCard(trip)).join('');
}

// ============================================
// GALLERY PAGE RENDER
// ============================================
function renderGalleryGrid() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;
  grid.innerHTML = demoGalleryImages.map(img => `
    <div class='gallery-item'><img src='${img.url}' alt='${img.caption}' loading='lazy'>
      <div class='gallery-caption'>${img.caption}</div>
    </div>
  `).join('');
}

// ============================================
// STORY MAP PAGE RENDER
// ============================================
function renderStoryMap() {
  const mapDiv = document.getElementById('interactiveMap');
  if (!mapDiv) return;
  // Clear
  mapDiv.innerHTML = '';
  // Init Leaflet
  const map = L.map(mapDiv, { scrollWheelZoom:true }).setView([28.2, 93.6], 7);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: 'Map &copy; OpenStreetMap' }).addTo(map);
  // Nature-inspired minimalist pin
  const pinSvg = `<svg viewBox='0 0 32 32' width='32' height='32' fill='none'><ellipse cx='12' cy='18' rx='8' ry='13' fill='#6b8e7f' opacity='0.7'/><circle cx='12' cy='18' r='6' fill='#8b7355' opacity='0.86'/></svg>`;
  mapLocations.forEach(loc => {
    const icon = L.divIcon({ className:'', html:pinSvg, iconAnchor:[12,18], popupAnchor:[0,-14] });
    const popupHtml = `
      <div class="map-popup">
        <div class="map-popup-title">${loc.name}</div>
        <div class="map-popup-district">${loc.district}</div>
        <div class="map-popup-story">${loc.story}</div>
        <div class="map-popup-culture">${loc.culture}</div>
        <a href="#" class="btn btn-link" style="margin-top:12px;color:#8b7355;text-decoration:underline;font-size:15px;letter-spacing:.5px;" onclick="navigateToPage('experiences')">Learn More</a>
      </div>
    `;
    const marker = L.marker([loc.lat, loc.lng], { icon });
    marker.addTo(map);
    marker.bindPopup(popupHtml, { className:"leaflet-popup map-popup glass-card" });
  });
}

// ============================================
// PHILOSOPHY PAGE RENDER
// ============================================
function renderPhilosophyGrid() {
  const values = [
    {title:'Authentic Connections',description:'We don\'t sell tours. We facilitate relationships. You meet real families, learn real stories, create real memories.'},
    {title:'Small Batches',description:'4-6 people maximum. Intimate groups allow genuine cultural exchange, not superficial photo ops.'},
    {title:'Community First',description:'100% of local payments go directly to guides and families. Your money supports their livelihoods, not corporate chains.'},
    {title:'Digital Detox',description:'Nature\'s silence is louder than notifications. Immerse in the present, disconnect from the virtual.'},
  ];
  const testimonials = [
    { name:'Priya Sharma', location:'Mumbai', story:"I didn't just visit Boleng. I became part of it. Shared meals around a fire, learned songs in tribal language, understood what 'home' really means." },
    { name:'Michael Chen', location:'Singapore', story:'This wasn\'t tourism. It was awakening. Real conversations, real families, real impact. I left pieces of my heart there.' },
  ];
  const grid = document.getElementById('valuesGrid');
  if (grid) {
    grid.innerHTML = values.map(v=>`
      <div class="value-card glass-card">
        <h3>${v.title}</h3>
        <p>${v.description}</p>
      </div>
    `).join('');
  }
  const testGrid = document.getElementById('testimonialGrid');
  if (testGrid) {
    testGrid.innerHTML = testimonials.map(t=>`
      <div class="testimonial-card glass-card">
        <p class="testimonial-text">"${t.story}"</p>
        <p class="testimonial-author">${t.name}, ${t.location}</p>
        <div class="testimonial-rating">★★★★★</div>
      </div>
    `).join('');
  }
}

// ============================================
// APP INITIALIZATION
// ============================================
function init() {
  const yearElement = document.getElementById('currentYear');
  if (yearElement) yearElement.textContent = new Date().getFullYear();

  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (hamburger) hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  });

  setupNavigation();
  initModal();
  renderPage('home');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

window.navigateToPage = navigateToPage;
window.openTripModal = openTripModal;
window.closeModal = closeModal;
window.inquireNow = inquireNow;


const circle = document.querySelector(".scroll-circle-progress");
const radius = 18;
const circumference = 2 * Math.PI * radius;
circle.style.strokeDasharray = `${circumference}`;
circle.style.strokeDashoffset = `${circumference}`;

function updateCircularScroll() {
  const doc = document.documentElement;
  const scrollTop = doc.scrollTop || document.body.scrollTop;
  const scrollHeight = doc.scrollHeight - doc.clientHeight;
  const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
  const offset = circumference * (1 - progress);
  circle.style.strokeDashoffset = offset;
}

window.addEventListener("scroll", updateCircularScroll);
window.addEventListener("load", updateCircularScroll);
