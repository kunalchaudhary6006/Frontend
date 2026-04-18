const tabs = document.querySelectorAll('.tab');
const prodRow = document.querySelector('.prod-row');

// Dummy data to handle interactivity via pure Vanilla JS exactly as previously requested
const productsData = {
  'New Arrival': [
    { img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600', title: 'Wool Blend Overcoat', price: '$129.00', badge: 'SALE' },
    { img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600', title: 'Slim Fit Chinos', price: '$59.00' },
    { img: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=600', title: 'Oxford Cotton Shirt', price: '$45.00' },
  ],
  'Best Selling': [
    { img: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=600', title: 'Leather Mini Bag', price: '$145.00', badge: 'NEW' },
    { img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600', title: 'Basic T-Shirt', price: '$25.00' },
    { img: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600', title: 'Aviator Sunglasses', price: '$110.00' },
  ],
  'Top Rated': [
    { img: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600', title: 'Casual Wool Sweater', price: '$75.00', badge: 'HOT' },
    { img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600', title: 'Sports Backpack', price: '$55.00' },
    { img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600', title: 'Classic White Sneakers', price: '$89.00' },
  ]
};

function renderProducts(category) {
  if (!prodRow) return;
  prodRow.innerHTML = '';
  const items = productsData[category] || productsData['New Arrival'];
  
  items.forEach(item => {
    const badgeHtml = item.badge ? `<div class="badge">${item.badge}</div>` : '';
    
    const cardHTML = `
      <div class="prod-card">
        <div class="prod-img">
          <img src="${item.img}" alt="${item.title}" />
          ${badgeHtml}
        </div>
        <div class="prod-info">
          <div class="prod-title">${item.title}</div>
          <div class="prod-price">${item.price}</div>
          <button class="btn-add-cart" data-title="${item.title}">Add to Cart</button>
        </div>
      </div>
    `;
    prodRow.insertAdjacentHTML('beforeend', cardHTML);
  });
}

tabs.forEach(tab => {
  tab.addEventListener('click', (e) => {
    tabs.forEach(t => t.classList.remove('active'));
    e.target.classList.add('active');
    renderProducts(e.target.textContent.trim());
  });
});

// Setup initial product load into the DOM
document.addEventListener('DOMContentLoaded', () => {
  renderProducts('New Arrival');
});

// --- UI Interaction Logic --- //

let cartCount = 0;

// Toast Notifications
window.showToast = function(message) {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerText = message;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 2800);
}

// Modal handling
const modalOverlay = document.getElementById('ui-modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const modalClose = document.getElementById('modal-close');

function openModal(title, contentHTML) {
  modalTitle.innerText = title;
  modalBody.innerHTML = contentHTML;
  modalOverlay.classList.remove('hidden');
  setTimeout(() => modalOverlay.classList.add('show'), 10);
}

function closeModal() {
  modalOverlay.classList.remove('show');
  setTimeout(() => modalOverlay.classList.add('hidden'), 300);
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
  if(e.target === modalOverlay) closeModal();
});

// Nav Icons Listeners
document.getElementById('nav-search').addEventListener('click', () => {
  openModal('Search', `
    <input type="text" placeholder="Search products, brands, and categories...">
    <button class="btn btn-dark" style="width:100%" onclick="closeModal(); showToast('Searching...')">Search</button>
  `);
});

document.getElementById('nav-account').addEventListener('click', () => {
  openModal('Sign In', `
    <input type="email" placeholder="Email Address">
    <input type="password" placeholder="Password">
    <button class="btn btn-dark" style="width:100%" onclick="closeModal(); showToast('Logged In Successfully')">Sign In</button>
  `);
});

document.getElementById('nav-wishlist').addEventListener('click', () => {
  openModal('Your Wishlist', '<p style="margin-bottom:16px;">Your wishlist is currently empty.</p><button class="btn btn-dark" style="width:100%" onclick="closeModal(); document.querySelector(\'.main-grid\').scrollIntoView({behavior: \'smooth\'});">Explore Items</button>');
});

document.getElementById('nav-cart').addEventListener('click', () => {
  openModal('Shopping Cart', `
    <p style="margin-bottom:16px;">You have <strong>${cartCount}</strong> item(s) in your cart.</p>
    ${cartCount > 0 ? '<button class="btn btn-dark" style="width:100%" onclick="closeModal(); showToast(\'Proceeding to secure checkout\');">Checkout</button>' : ''}
  `);
});

// Hero CTA Listeners
document.getElementById('btn-shop').addEventListener('click', () => {
  document.querySelector('.main-grid').scrollIntoView({behavior: 'smooth'});
});

document.getElementById('btn-read').addEventListener('click', () => {
  document.querySelector('.footer').scrollIntoView({behavior: 'smooth'});
});

// Newsletter Join Listener
document.getElementById('btn-newsletter').addEventListener('click', () => {
  const input = document.getElementById('newsletter-input');
  if(input.value.trim() === '') {
    showToast('Please enter a valid email');
  } else {
    showToast('Subscribed successfully!');
    input.value = '';
  }
});

// Nav Links (Smooth scroll interception)
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    showToast(`Navigating to ${e.target.innerText}...`);
  });
});

// Product "Add to Cart" listener (Event Delegation since cards are dynamic)
prodRow.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn-add-cart')) {
    const title = e.target.getAttribute('data-title');
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    showToast(`${title} added to cart`);
  }
});
