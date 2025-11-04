document.addEventListener('DOMContentLoaded', function() {
  // DNS Configuration for AdGuard
  const dnsSettings = {
    primaryDNS: '94.140.14.14', // AdGuard DNS primary
    secondaryDNS: '94.140.15.15' // AdGuard DNS secondary
  };
  
  // Initialize DNS settings and ad blocker
  initAdBlocker(dnsSettings);
  
  // Current page for pagination
  let currentPage = 1;
  
  // Event listeners for pagination
  document.getElementById('next-page').addEventListener('click', () => {
    currentPage++;
    loadContent(currentPage);
    updatePaginationUI();
  });
  
  document.getElementById('prev-page').addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      loadContent(currentPage);
      updatePaginationUI();
    }
  });
  
  // Event listener for search
  document.getElementById('search-button').addEventListener('click', () => {
    const searchQuery = document.getElementById('search-input').value.trim();
    if (searchQuery) {
      searchContent(searchQuery);
    }
  });
  
  // Allow Enter key for search
  document.getElementById('search-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const searchQuery = e.target.value.trim();
      if (searchQuery) {
        searchContent(searchQuery);
      }
    }
  });
  
  // Load initial content
  loadContent(currentPage);
  
  // Update pagination UI based on current page
  function updatePaginationUI() {
    document.getElementById('page-indicator').textContent = `Page ${currentPage}`;
    document.getElementById('prev-page').disabled = currentPage <= 1;
  }
});

// Initialize ad blocker with AdGuard DNS
function initAdBlocker(settings) {
  console.log('Initializing ad blocking with AdGuard DNS:', settings);
  
  // This would typically involve more complex DNS configuration
  // For client-side, we can set a flag that our proxy can use
  localStorage.setItem('adguard_enabled', 'true');
  
  // Inject meta tag for DNS prefetch
  const meta = document.createElement('meta');
  meta.setAttribute('http-equiv', 'x-dns-prefetch-control');
  meta.setAttribute('content', 'on');
  document.head.appendChild(meta);
  
  const dnsLink = document.createElement('link');
  dnsLink.setAttribute('rel', 'dns-prefetch');
  dnsLink.setAttribute('href', `https://${settings.primaryDNS}`);
  document.head.appendChild(dnsLink);
  
  console.log('Ad blocking initialized with DNS prefetch');
}

// Function to load content from the API
async function loadContent(page = 1) {
  toggleLoading(true);
  
  try {
    const response = await fetch('/api/videos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        url: 'https://missav.ws/en/site/supjav',
        page: page
      })
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch content');
    }
    
    const data = await response.json();
    
    // Render featured content (first 4 items)
    renderContent(data.videos.slice(0, 4), 'featured-content');
     document.addEventListener('DOMContentLoaded', function() {
  // DNS Configuration for AdGuard
  const dnsSettings = {
    primaryDNS: '94.140.14.14', // AdGuard DNS primary
    secondaryDNS: '94.140.15.15' // AdGuard DNS secondary
  };
  
  // Initialize DNS settings and ad blocker
  initAdBlocker(dnsSettings);
  
  // Current page for pagination
  let currentPage = 1;
  
  // Event listeners for pagination
  document.getElementById('next-page').addEventListener('click', () => {
    currentPage++;
    loadContent(currentPage);
    updatePaginationUI();
  });
  
  document.getElementById('prev-page').addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      loadContent(currentPage);
      updatePaginationUI();
    }
  });
  
  // Event listener for search
  document.getElementById('search-button').addEventListener('click', () => {
    const searchQuery = document.getElementById('search-input').value.trim();
    if (searchQuery) {
      searchContent(searchQuery);
    }
  });
  
  // Allow Enter key for search
  document.getElementById('search-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const searchQuery = e.target.value.trim();
      if (searchQuery) {
        searchContent(searchQuery);
      }
    }
  });
  
  // Load initial content
  loadContent(currentPage);
  
  // Update pagination UI based on current page
  function updatePaginationUI() {
    document.getElementById('page-indicator').textContent = `Page ${currentPage}`;
    document.getElementById('prev-page').disabled = currentPage <= 1;
  }
});

// Initialize ad blocker with AdGuard DNS
function initAdBlocker(settings) {
  console.log('Initializing ad blocking with AdGuard DNS:', settings);
  
  // This would typically involve more complex DNS configuration
  // For client-side, we can set a flag that our proxy can use
  localStorage.setItem('adguard_enabled', 'true');
  
  // Inject meta tag for DNS prefetch
  const meta = document.createElement('meta');
  meta.setAttribute('http-equiv', 'x-dns-prefetch-control');
  meta.setAttribute('content', 'on');
  document.head.appendChild(meta);
  
  const dnsLink = document.createElement('link');
  dnsLink.setAttribute('rel', 'dns-prefetch');
  dnsLink.setAttribute('href', `https://${settings.primaryDNS}`);
  document.head.appendChild(dnsLink);
  
  console.log('Ad blocking initialized with DNS prefetch');
}

// Function to load content from the API
async function loadContent(page = 1) {
  toggleLoading(true);
  
  try {
    const response = await fetch('/api/videos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        url: 'https://missav.ws/en/site/supjav',
        page: page
      })
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch content');
    }
    
    const data = await response.json();
    
    // Render featured content (first 4 items)
    renderContent(data.videos.slice(0, 4), 'featured-content');
    
    // Render latest content (remaining items)
    renderContent(data.videos.slice(4), 'latest-content');
    
  } catch (error) {
    console.error('Error loading content:', error);
    showErrorMessage('Failed to load content. Please try again later.');
  } finally {
    toggleLoading(false);
    // Render latest content (remaining items)
    renderContent(data.videos.slice(4), 'latest-content');
    
  } catch (error) {
    console.error('Error loading content:', error);
    showErrorMessage('Failed to load content. Please try again later.');
  } finally {
    toggleLoading(false);
