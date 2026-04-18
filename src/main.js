const tabs = document.querySelectorAll('.tab');
const prodRow = document.querySelector('.prod-row');

// Product Data matched exactly to the reference image
const productsData = {
  'New Arrival': [
    { cat: 'Backpacks', img: 'https://picsum.photos/seed/backpack/400/400', title: 'Tan Solid Laptop Backpack', price: '$149.00', oldPrice: '$185.00', badge: '15% OFF' },
    { cat: 'Jackets', img: 'https://picsum.photos/seed/jacket/400/400', title: 'Brown Solid Biker Jacket', price: '$110.00', oldPrice: '$120.00' },
    { cat: 'Casual Shoes', img: 'https://picsum.photos/seed/shoes/400/400', title: 'Men Brown Solid Mid-Top', price: '$115.00', oldPrice: '' },
    { cat: 'Dresses & Tops', img: 'https://picsum.photos/seed/dress/400/400', title: 'Petite Olive Green Solid Top', price: '$49.00', oldPrice: '', badge: '10% OFF' },
    { cat: 'Handbags, Messenger Bag', img: 'https://picsum.photos/seed/bag/400/400', title: 'Brown Solid Laptop Bag', price: '$99.00', oldPrice: '$120.00' },
    { cat: 'Analog Watches', img: 'https://picsum.photos/seed/watch1/400/400', title: 'Black Analogue and Digital', price: '$1,599.00', oldPrice: '' },
    { cat: 'T-Shirts', img: 'https://picsum.photos/seed/tshirt/400/400', title: 'Men Navy Printed Round Neck', price: '$50.00', oldPrice: '' },
    { cat: 'Handbags', img: 'https://picsum.photos/seed/purse/400/400', title: 'Brown Self Design Shoulder', price: '$78.00', oldPrice: '', badge: '5% OFF' },
    { cat: 'Smart Watches', img: 'https://picsum.photos/seed/watch2/400/400', title: 'Brown Q Explorist HR Leather', price: '$1,699.00', oldPrice: '$2,000.00' },
    { cat: 'Belts', img: 'https://picsum.photos/seed/belt/400/400', title: 'Brown Solid Leather Belt', price: '$15.00', oldPrice: '$20.00', badge: '25% OFF' }
  ],
  'Best Selling': [],
  'Top Rated': []
};

// Fallbacks for empty categories to show they work
productsData['Best Selling'] = [...productsData['New Arrival']].reverse();
productsData['Top Rated'] = [productsData['New Arrival'][1], productsData['New Arrival'][3], productsData['New Arrival'][8]];

function renderProducts(category) {
  if (!prodRow) return;
  prodRow.innerHTML = '';
  const items = productsData[category] || productsData['New Arrival'];
  
  items.forEach(item => {
    const badgeHtml = item.badge ? `<div class="badge">${item.badge}</div>` : '';
    const oldPriceHtml = item.oldPrice ? `<span class="old-price">${item.oldPrice}</span>` : '';
    const starsHtml = `★★★★★`; // Static 5 stars matching the reference image format
    
    // In pure JS, we render the DOM components with our template literals
    const cardHTML = `
      <div class="prod-card">
        <div class="prod-img">
          <img src="${item.img}" alt="${item.title}" />
          ${badgeHtml}
        </div>
        <div class="prod-info">
          <div class="prod-cat">${item.cat}</div>
          <div class="prod-title">${item.title}</div>
          <div class="prod-stars">${starsHtml} <span style="color:#aaa; font-size:10px;">(1)</span></div>
          <div class="prod-price">${item.price} ${oldPriceHtml}</div>
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
    document.getElementById('nav-links').classList.remove('show-menu');
    showToast(`Navigating to ${e.target.innerText}...`);
  });
});

// Mobile menu toggle
document.getElementById('menu-toggle').addEventListener('click', () => {
  document.getElementById('nav-links').classList.toggle('show-menu');
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
