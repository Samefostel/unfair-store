// Product Data
const PRODUCTS = [
  {
    id: 1,
    name: 'Razer DeathAdder V3 Pro',
    category: ['mouse'],
    price: 3499,
    image: 'https://api.e-server.com.ua/storage/148708/rs/U0738017_big___rs_1200_1200.jpg',
    images: [
      'https://api.e-server.com.ua/storage/148708/rs/U0738017_big___rs_1200_1200.jpg',
      'https://i.rtings.com/assets/products/XZTWfCaG/razer-deathadder-v3-pro/design-medium.jpg?format=auto',
      'https://i.allo.ua/media/catalog/product/cache/1/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/r/z/rz01-04630100-r3g1_.jpg'
    ],
    tag: 'Хіт продажів',
    description: 'Бездротова ігрова миша Razer DeathAdder V3 Pro з ультралегким дизайном (63г) та сенсором Focus Pro 30K для професійних геймерів.',
    specs: {
      'Тип': 'Бездротова ігрова миша',
      'Сенсор': 'Razer Focus Pro 30K Optical',
      'DPI': 'до 30000',
      'Кнопки': '8 програмованих',
      'Вага': '63 г',
      'Автономність': 'до 90 годин'
    },
    dateAdded: '2023-09-15',
    isNew: true
  },
  {
    id: 2,
    name: 'Logitech G Pro X Headset',
    category: ['audio'],
    price: 5999,
    image: 'https://touch.com.ua/upload/dev2fun.imagecompress/webp/iblock/66d/tqhwvvz333q1f2gd82un5341u1cwnti8.webp',
    images: [
      'https://touch.com.ua/upload/dev2fun.imagecompress/webp/iblock/66d/tqhwvvz333q1f2gd82un5341u1cwnti8.webp',
      'https://files.foxtrot.com.ua/PhotoNew/img_0_22056_999_0_1_637756107776361920.jpg',
      'https://img.telemart.ua/190500-615993-product_popup/logitech-pro-x-gaming-headset-981-000818-black.jpg'
    ],
    tag: 'NEW',
    description: 'Професійні ігрові навушники Logitech G Pro X з мікрофоном Blue VO!CE для чіткого звуку та комунікації під час ігор.',
    specs: {
      'Тип': 'Навушники з мікрофоном',
      'Діапазон частот': '20Hz-20kHz',
      'Імпеданс': '35 Ом',
      'Мікрофон': 'Blue VO!CE (знімний)',
      'Вага': '320 г',
      'Підключення': 'USB / 3.5mm'
    },
    dateAdded: '2023-10-10',
    isNew: true
  },
  {
    id: 3,
    name: 'Corsair K70 RGB TKL',
    category: ['keyboard'],
    price: 4499,
    image: 'https://content2.rozetka.com.ua/goods/images/big/378114012.png',
    images: [
      'https://content2.rozetka.com.ua/goods/images/big/378114012.png',
      'https://images.prom.ua/6479778655_w640_h320_klaviatura-corsair-k70.jpg',
      'https://corsair.com.ua/wp-content/uploads/2022/09/06ys9uac6d1edclpxiv9bkq-1.fit_scale.size_1028x578.v1616005651.jpg'
    ],
    tag: 'Акція',
    description: 'Механічна ігрова клавіатура Corsair K70 RGB TKL з перемикачами Cherry MX Red та індивідуальною підсвіткою кожної клавіші.',
    specs: {
      'Тип': 'Механічна клавіатура (TKL)',
      'Перемикачі': 'Cherry MX Red',
      'Підсвітка': 'RGB per-key',
      'Антигейт': 'Так',
      'USB-порт': '1 x USB 2.0',
      'Формат': 'Без цифрового блоку'
    },
    dateAdded: '2023-08-20',
    isNew: false
  },
  {
    id: 4,
    name: 'ASUS ROG Zephyrus G14',
    category: ['laptop'],
    price: 45999,
    image: 'https://content.rozetka.com.ua/goods/images/big_tile/590625842.jpg',
    images: [
      'https://content.rozetka.com.ua/goods/images/big_tile/590625842.jpg',
      'https://mobileplanet.ua/uploads/small_photos/2024-7-12/asus-rog-zephyrus-g14-r7-8845hs-16gb-1tb-rtx4060-o-318682_3.webp',
      'https://dlcdnwebimgs.asus.com/gain/01302938-59F3-4094-900D-EF9ECBD412B6/w1000/h732'
    ],
    tag: 'Топ продаж',
    description: 'Ігровий ноутбук ASUS ROG Zephyrus G14 з процесором AMD Ryzen 9 та відеокартою NVIDIA RTX 3060 для максимальної продуктивності.',
    specs: {
      'Процесор': 'AMD Ryzen 9 5900HS',
      'Відеокарта': 'NVIDIA RTX 3060 (6GB)',
      'Оперативна пам\'ять': '16GB DDR4',
      'Накопичувач': '1TB NVMe SSD',
      'Діагональ екрана': '14" QHD 120Hz',
      'Вага': '1.7 кг'
    },
    dateAdded: '2023-09-01',
    isNew: true
  },
  {
    id: 5,
    name: 'HyperX Cloud II Wireless',
    category: ['audio'],
    price: 3999,
    image: 'https://content.rozetka.com.ua/goods/images/big/316030193.jpg',
    images: [
      'https://content.rozetka.com.ua/goods/images/big/316030193.jpg',
      'https://i.citrus.world/imgcache/size_800/uploads/shop/1/6/1676974663-5.jpg',
      'https://content.rozetka.com.ua/goods/images/big/316030019.jpg'
    ],
    tag: '',
    description: 'Бездротові ігрові навушники HyperX Cloud II з 7.1 віртуальним surround sound та 30-годинним часом роботи від акумулятора.',
    specs: {
      'Тип': 'Бездротові навушники',
      'Діапазон частот': '15Hz-25kHz',
      'Імпеданс': '60 Ом',
      'Мікрофон': 'Знімний шумозаглушуючий',
      'Вага': '320 г',
      'Автономність': 'до 30 годин'
    },
    dateAdded: '2023-07-15',
    isNew: false
  },
  {
    id: 6,
    name: 'SteelSeries Rival 650',
    category: ['mouse'],
    price: 2999,
    image: 'https://luckylink.kiev.ua/image/catalog/product/181/03/product_image_141403_351946.jpg',
    images: [
      'https://luckylink.kiev.ua/image/catalog/product/181/03/product_image_141403_351946.jpg',
      'https://content.rozetka.com.ua/goods/images/big/216127276.jpg',
      'https://mobileplanet.ua/uploads/product/2018-11-28/steelseries-rival-650-black-62456-93266.jpg'
    ],
    tag: '',
    description: 'Бездротова ігрова миша SteelSeries Rival 650 з сенсором TrueMove3+ та вагою, що регулюється (96-121г).',
    specs: {
      'Тип': 'Бездротова ігрова миша',
      'Сенсор': 'TrueMove3+ Optical',
      'DPI': 'до 12000',
      'Кнопки': '7 програмованих',
      'Вага': '96-121 г (регулюється)',
      'Автономність': 'до 24 годин'
    },
    dateAdded: '2023-06-10',
    isNew: false
  },
  {
    id: 7,
    name: 'Nintendo Switch OLED',
    category: ['console'],
    price: 15999,
    image: 'https://up2date.com.ua/image/cache/catalog/switch_cons/nintendo-switch-oled-model-white-main-500x500.jpg',
    images: [
      'https://up2date.com.ua/image/cache/catalog/switch_cons/nintendo-switch-oled-model-white-main-500x500.jpg',
      'https://content2.rozetka.com.ua/goods/images/big/561311684.png',
      'https://press-start.com.au/wp-content/uploads/2021/10/Switch-OLED.jpg'
    ],
    tag: 'Бестселлер',
    description: 'Ігрова консоль Nintendo Switch OLED з 7-дюймовым OLED-екраном, покращеним звуком та 64GB внутрішньої пам\'яті.',
    specs: {
      'Тип': 'Гібридна консоль',
      'Процесор': 'NVIDIA Custom Tegra',
      'Екран': '7" OLED 720p',
      'Пам\'ять': '64GB (розширювана)',
      'Режими': 'Док-станція, портативний, настільний',
      'Акумулятор': 'до 9 годин гри'
    },
    dateAdded: '2023-10-05',
    isNew: true
  },
  {
    id: 8,
    name: 'Elgato Stream Deck MK.2',
    category: ['stream'],
    price: 4999,
    image: 'https://content2.rozetka.com.ua/goods/images/big/555339107.jpg',
    images: [
      'https://content2.rozetka.com.ua/goods/images/big/555339107.jpg',
      'https://ae04.alicdn.com/kf/Sa5e9ac0529ab4f0cb71831cd8699e574z.jpg_640x640.jpg',
      'https://images.prom.ua/5932645945_w640_h640_5932645945.jpg'
    ],
    tag: '',
    description: 'Elgato Stream Deck MK.2 - професійна панель керування з 15 програмованими LCD-кнопками для стрімерів та створювачів контенту.',
    specs: {
      'Тип': 'Панель керування',
      'Кнопки': '15 програмованих LCD',
      'Підключення': 'USB-C',
      'Сумісність': 'Windows 10/11, macOS 10.13+',
      'Розміри': '107 x 103 x 26 мм',
      'Вага': '220 г'
    },
    dateAdded: '2023-08-25',
    isNew: false
  }
];

// App State
const state = {
  cart: JSON.parse(localStorage.getItem('cart')) || [],
  wishlist: JSON.parse(localStorage.getItem('wishlist')) || [],
  user: JSON.parse(localStorage.getItem('user')) || null,
  orders: JSON.parse(localStorage.getItem('orders')) || [],
  currentProduct: null,
  checkoutData: {
    step: 1,
    deliveryMethod: 'nova-poshta',
    paymentMethod: 'cash',
    personalInfo: {},
    deliveryInfo: {},
    paymentInfo: {}
  }
};

// DOM Elements
const elements = {
  // Header
  wishlistBtn: document.getElementById('wishlistBtn'),
  wishlistCount: document.getElementById('wishlistCount'),
  cartBtn: document.getElementById('cartBtn'),
  cartCount: document.getElementById('cartCount'),
  userBtn: document.getElementById('userBtn'),
  
  // Products
  productsGrid: document.getElementById('productsGrid'),
  filterBtns: document.querySelectorAll('.filter-btn'),
  newArrivalsBtn: document.getElementById('newArrivalsBtn'),
  
  // Purchases
  purchasesSection: document.getElementById('purchasesSection'),
  purchasesGrid: document.getElementById('purchasesGrid'),
  
  // Cart
  cartPanel: document.getElementById('cartPanel'),
  closeCart: document.getElementById('closeCart'),
  cartBody: document.getElementById('cartBody'),
  cartTotal: document.getElementById('cartTotal'),
  checkoutBtn: document.getElementById('checkoutBtn'),
  
  // Auth Modals
  loginModal: document.getElementById('loginModal'),
  closeLoginModal: document.getElementById('closeLoginModal'),
  loginForm: document.getElementById('loginForm'),
  registerModal: document.getElementById('registerModal'),
  closeRegisterModal: document.getElementById('closeRegisterModal'),
  registerForm: document.getElementById('registerForm'),
  showRegister: document.getElementById('showRegister'),
  showLogin: document.getElementById('showLogin'),
  
  // Product Modal
  productModal: document.getElementById('productModal'),
  closeProductModal: document.getElementById('closeProductModal'),
  productModalContent: document.getElementById('productModalContent'),
  
  // Checkout Modal
  checkoutModal: document.getElementById('checkoutModal'),
  closeCheckoutModal: document.getElementById('closeCheckoutModal'),
  cancelCheckout: document.getElementById('cancelCheckout'),
  checkoutSteps: document.querySelectorAll('.checkout-step'),
  checkoutStepContents: document.querySelectorAll('.checkout-step-content'),
  nextToStep2: document.getElementById('nextToStep2'),
  backToStep1: document.getElementById('backToStep1'),
  nextToStep3: document.getElementById('nextToStep3'),
  backToStep2: document.getElementById('backToStep2'),
  nextToStep4: document.getElementById('nextToStep4'),
  backToStep3: document.getElementById('backToStep3'),
  confirmOrder: document.getElementById('confirmOrder'),
  orderSummaryItems: document.getElementById('orderSummaryItems'),
  orderSummaryTotal: document.getElementById('orderSummaryTotal'),
  paymentAmount: document.getElementById('paymentAmount'),
  cardDetails: document.getElementById('cardDetails'),
  deliveryOptions: document.querySelectorAll('.checkout-option[data-method]'),
  paymentOptions: document.querySelectorAll('.checkout-option[data-method]'),
  orderNumber: document.getElementById('orderNumber'),
  closeSuccessModal: document.getElementById('closeSuccessModal'),
  
  // Toast
  toast: document.getElementById('toast'),
  toastMessage: document.getElementById('toastMessage')
};

// Initialize App
function init() {
  renderProducts();
  updateCartCount();
  updateWishlistCount();
  updateUserUI();
  renderRecentPurchases();
  setupEventListeners();
}

// Render Products
function renderProducts(products = PRODUCTS) {
  elements.productsGrid.innerHTML = '';
  
  if (products.length === 0) {
    elements.productsGrid.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--muted)">
        Товари не знайдено
      </div>
    `;
    return;
  }
  
  products.forEach(product => {
    const isInWishlist = state.wishlist.includes(product.id);
    const productEl = document.createElement('div');
    productEl.className = 'product-card';
    productEl.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="product-image" data-id="${product.id}">
      <div class="product-body">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px;">
          <div>
            <h3 class="product-title" data-id="${product.id}">${product.name}</h3>
            ${product.tag ? `<span class="product-tag">${product.tag}</span>` : ''}
          </div>
          <button class="wishlist-btn ${isInWishlist ? 'active' : ''}" data-id="${product.id}">
            <i class="fas fa-heart"></i>
          </button>
        </div>
        <div class="product-meta">
          <div class="product-price">${product.price.toLocaleString()} ₴</div>
          <div class="product-actions">
            <button class="btn btn-primary btn-sm" data-id="${product.id}">Купити</button>
          </div>
        </div>
      </div>
    `;
    elements.productsGrid.appendChild(productEl);
  });
}

// Render Recent Purchases
function renderRecentPurchases() {
  if (!state.user || state.orders.length === 0) {
    elements.purchasesSection.style.display = 'none';
    return;
  }
  
  elements.purchasesSection.style.display = 'block';
  elements.purchasesGrid.innerHTML = '';
  
  // Sort orders by date (newest first)
  const sortedOrders = [...state.orders].sort((a, b) => 
    new Date(b.date) - new Date(a.date)
  );
  
  // Show only last 3 orders
  const recentOrders = sortedOrders.slice(0, 3);
  
  recentOrders.forEach(order => {
    const orderDate = new Date(order.date).toLocaleDateString('uk-UA', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
    
    let itemsHtml = '';
    let total = 0;
    
    order.items.forEach(item => {
      const product = PRODUCTS.find(p => p.id === item.id);
      if (product) {
        itemsHtml += `
          <div class="purchase-item">
            <div>${product.name} (${item.quantity} шт.)</div>
            <div>${(product.price * item.quantity).toLocaleString()} ₴</div>
          </div>
        `;
        total += product.price * item.quantity;
      }
    });
    
    const purchaseCard = document.createElement('div');
    purchaseCard.className = 'purchase-card';
    purchaseCard.innerHTML = `
      <div class="purchase-header">
        <div class="purchase-id">Замовлення #${order.id}</div>
        <div class="purchase-date">${orderDate}</div>
      </div>
      <div class="purchase-items">
        ${itemsHtml}
      </div>
      <div class="purchase-total">
        <span>Всього:</span>
        <span>${total.toLocaleString()} ₴</span>
      </div>
      <div class="purchase-status status-delivered">Доставлено</div>
    `;
    
    elements.purchasesGrid.appendChild(purchaseCard);
  });
}

// Update Cart Count
function updateCartCount() {
  const count = state.cart.reduce((total, item) => total + item.quantity, 0);
  elements.cartCount.textContent = count;
  elements.cartCount.style.display = count > 0 ? 'block' : 'none';
  localStorage.setItem('cart', JSON.stringify(state.cart));
}

// Update Wishlist Count
function updateWishlistCount() {
  elements.wishlistCount.textContent = state.wishlist.length;
  elements.wishlistCount.style.display = state.wishlist.length > 0 ? 'block' : 'none';
  localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
}

// Update User UI
function updateUserUI() {
  if (state.user) {
    elements.userBtn.innerHTML = `<i class="fas fa-user-check"></i>`;
    elements.userBtn.setAttribute('title', state.user.name);
  } else {
    elements.userBtn.innerHTML = `<i class="fas fa-user"></i>`;
    elements.userBtn.removeAttribute('title');
  }
}

// Render Cart
function renderCart() {
  elements.cartBody.innerHTML = '';
  
  if (state.cart.length === 0) {
    elements.cartBody.innerHTML = `
      <div class="empty-cart">
        <p>Ваш кошик порожній</p>
        <button class="btn btn-outline" id="continueShopping">Продовжити покупки</button>
      </div>
    `;
    document.getElementById('continueShopping').addEventListener('click', () => {
      elements.cartPanel.classList.remove('open');
    });
    return;
  }
  
  let total = 0;
  
  state.cart.forEach(item => {
    const product = PRODUCTS.find(p => p.id === item.id);
    if (!product) return;
    
    total += product.price * item.quantity;
    
    const cartItemEl = document.createElement('div');
    cartItemEl.className = 'cart-item';
    cartItemEl.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="cart-item-image" data-id="${product.id}">
      <div class="cart-item-details">
        <h4 class="cart-item-title">${product.name}</h4>
        <div class="cart-item-price">${product.price.toLocaleString()} ₴</div>
      </div>
      <div class="cart-item-actions">
        <button class="cart-item-remove" data-id="${product.id}">
          <i class="fas fa-trash"></i>
        </button>
        <div class="cart-item-qty">
          <button class="qty-minus" data-id="${product.id}">-</button>
          <span>${item.quantity}</span>
          <button class="qty-plus" data-id="${product.id}">+</button>
        </div>
      </div>
    `;
    elements.cartBody.appendChild(cartItemEl);
  });
  
  elements.cartTotal.textContent = `${total.toLocaleString()} ₴`;
  
  // Add event listeners to cart items
  document.querySelectorAll('.cart-item-remove').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = parseInt(e.currentTarget.dataset.id);
      removeFromCart(id);
    });
  });
  
  document.querySelectorAll('.qty-minus').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = parseInt(e.currentTarget.dataset.id);
      updateCartItem(id, -1);
    });
  });
  
  document.querySelectorAll('.qty-plus').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = parseInt(e.currentTarget.dataset.id);
      updateCartItem(id, 1);
    });
  });
  
  document.querySelectorAll('.cart-item-image').forEach(img => {
    img.addEventListener('click', (e) => {
      const id = parseInt(e.currentTarget.dataset.id);
      openProductModal(id);
    });
  });
}

// Render Product Modal
function renderProductModal(product) {
  const isInWishlist = state.wishlist.includes(product.id);
  
  elements.productModalContent.innerHTML = `
    <div class="product-gallery">
      <img src="${product.images[0]}" alt="${product.name}" class="product-main-image" id="mainProductImage">
      <div class="product-thumbnails">
        ${product.images.map((img, index) => `
          <img src="${img}" alt="${product.name} - ${index + 1}" class="product-thumbnail" 
               onclick="document.getElementById('mainProductImage').src = '${img}'">
        `).join('')}
      </div>
    </div>
    <div class="product-info">
      <h1 class="product-modal-title">${product.name}</h1>
      <div class="product-modal-price">${product.price.toLocaleString()} ₴</div>
      
      ${product.tag ? `<span class="product-tag">${product.tag}</span>` : ''}
      
      <div class="product-modal-description">
        <p>${product.description}</p>
      </div>
      
      <div class="product-specs">
        ${Object.entries(product.specs).map(([key, value]) => `
          <div class="product-spec">
            <div class="product-spec-label">${key}:</div>
            <div class="product-spec-value">${value}</div>
          </div>
        `).join('')}
      </div>
      
      <div class="product-modal-actions">
        <button class="btn btn-primary" id="addToCartFromModal" data-id="${product.id}">
          Додати до кошика
        </button>
        <button class="btn btn-outline" id="toggleWishlistFromModal" data-id="${product.id}">
          <i class="fas fa-heart ${isInWishlist ? 'active' : ''}"></i>
          ${isInWishlist ? 'Видалити з обраного' : 'Додати в обране'}
        </button>
      </div>
    </div>
  `;
  
  // Add event listeners
  document.getElementById('addToCartFromModal').addEventListener('click', (e) => {
    const id = parseInt(e.currentTarget.dataset.id);
    addToCart(id);
    showToast('Товар додано до кошика');
  });
  
  document.getElementById('toggleWishlistFromModal').addEventListener('click', (e) => {
    const id = parseInt(e.currentTarget.dataset.id);
    toggleWishlist(id);
    
    const isInWishlist = state.wishlist.includes(id);
    e.currentTarget.innerHTML = `
      <i class="fas fa-heart ${isInWishlist ? 'active' : ''}"></i>
      ${isInWishlist ? 'Видалити з обраного' : 'Додати в обране'}
    `;
    
    showToast(isInWishlist ? 'Додано в список бажань' : 'Видалено зі списку бажань');
  });
}

// Render Order Summary
function renderOrderSummary() {
  let html = '';
  let total = 0;
  
  state.cart.forEach(item => {
    const product = PRODUCTS.find(p => p.id === item.id);
    if (!product) return;
    
    total += product.price * item.quantity;
    
    html += `
      <div class="order-item" style="display:flex;justify-content:space-between;margin-bottom:10px;">
        <div>
          <div>${product.name}</div>
          <div class="small">${item.quantity} × ${product.price.toLocaleString()} ₴</div>
        </div>
        <div>${(product.price * item.quantity).toLocaleString()} ₴</div>
      </div>
    `;
  });
  
  elements.orderSummaryItems.innerHTML = html;
  elements.orderSummaryTotal.textContent = `${total.toLocaleString()} ₴`;
  elements.paymentAmount.textContent = `${total.toLocaleString()} ₴`;
}

// Cart Functions
function addToCart(productId, quantity = 1) {
  const existingItem = state.cart.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    state.cart.push({
      id: productId,
      quantity: quantity
    });
  }
  
  updateCartCount();
  renderCart();
}

function removeFromCart(productId) {
  state.cart = state.cart.filter(item => item.id !== productId);
  updateCartCount();
  renderCart();
  showToast('Товар видалено з кошика');
}

function updateCartItem(productId, change) {
  const item = state.cart.find(item => item.id === productId);
  if (!item) return;
  
  item.quantity += change;
  
  if (item.quantity < 1) {
    removeFromCart(productId);
  } else {
    updateCartCount();
    renderCart();
  }
}

function clearCart() {
  state.cart = [];
  updateCartCount();
  renderCart();
}

// Wishlist Functions
function toggleWishlist(productId) {
  const index = state.wishlist.indexOf(productId);
  
  if (index === -1) {
    state.wishlist.push(productId);
  } else {
    state.wishlist.splice(index, 1);
  }
  
  updateWishlistCount();
  
  // Update wishlist buttons
  document.querySelectorAll(`.wishlist-btn[data-id="${productId}"]`).forEach(btn => {
    btn.classList.toggle('active');
  });
}

// Product Modal Functions
function openProductModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  
  state.currentProduct = product;
  renderProductModal(product);
  openModal(elements.productModal);
}

// Checkout Functions
function openCheckout() {
  if (state.cart.length === 0) {
    showToast('Кошик порожній', 'error');
    return;
  }
  
  if (!state.user) {
    showToast('Будь ласка, увійдіть в акаунт для оформлення замовлення', 'error');
    openModal(elements.loginModal);
    return;
  }
  
  renderOrderSummary();
  resetCheckoutSteps();
  openModal(elements.checkoutModal);
}

function resetCheckoutSteps() {
  state.checkoutData.step = 1;
  
  elements.checkoutSteps.forEach((step, index) => {
    step.classList.remove('active', 'completed');
    if (index === 0) step.classList.add('active');
  });
  
  elements.checkoutStepContents.forEach((content, index) => {
    content.classList.remove('active');
    if (index === 0) content.classList.add('active');
  });
  
  // Reset delivery/payment options
  elements.deliveryOptions[0].classList.add('selected');
  elements.deliveryOptions[1].classList.remove('selected');
  elements.paymentOptions[0].classList.add('selected');
  elements.paymentOptions[1].classList.remove('selected');
  elements.cardDetails.style.display = 'none';
  
  // Reset form fields
  document.getElementById('checkoutName').value = state.user?.name || '';
  document.getElementById('checkoutEmail').value = state.user?.email || '';
  document.getElementById('checkoutPhone').value = '';
  document.getElementById('checkoutCity').value = '';
  document.getElementById('checkoutBranch').value = '';
  document.getElementById('checkoutComment').value = '';
}

function goToCheckoutStep(step) {
  // Validate current step before proceeding
  if (state.checkoutData.step === 1) {
    const name = document.getElementById('checkoutName').value.trim();
    const phone = document.getElementById('checkoutPhone').value.trim();
    
    if (!name || !phone) {
      showToast('Будь ласка, заповніть всі обов\'язкові поля', 'error');
      return;
    }
    
    // Validate phone format
    const phoneRegex = /^(\+380|0)\d{9}$/;
    if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
      showToast('Будь ласка, введіть коректний номер телефону', 'error');
      return;
    }
    
    state.checkoutData.personalInfo = { name, phone };
    const email = document.getElementById('checkoutEmail').value.trim();
    if (email) state.checkoutData.personalInfo.email = email;
  }
  
  if (state.checkoutData.step === 2) {
    const city = document.getElementById('checkoutCity').value.trim();
    const branch = document.getElementById('checkoutBranch').value.trim();
    
    if (!city || !branch) {
      showToast('Будь ласка, заповніть всі обов\'язкові поля', 'error');
      return;
    }
    
    state.checkoutData.deliveryInfo = { city, branch };
  }
  
  // Update UI
  elements.checkoutSteps[state.checkoutData.step - 1].classList.remove('active');
  elements.checkoutSteps[state.checkoutData.step - 1].classList.add('completed');
  elements.checkoutStepContents[state.checkoutData.step - 1].classList.remove('active');
  
  state.checkoutData.step = step;
  
  elements.checkoutSteps[step - 1].classList.add('active');
  elements.checkoutStepContents[step - 1].classList.add('active');
  
  // Scroll to top
  elements.checkoutModal.scrollTo(0, 0);
}

function completeOrder() {
  // Generate order number
  const orderNumber = 'UF' + Math.floor(100000 + Math.random() * 900000);
  elements.orderNumber.textContent = orderNumber;
  
  // Calculate total
  const total = state.cart.reduce((total, item) => {
    const product = PRODUCTS.find(p => p.id === item.id);
    return total + (product ? product.price * item.quantity : 0);
  }, 0);
  
  // Save order
  const newOrder = {
    id: orderNumber,
    date: new Date().toISOString(),
    items: [...state.cart],
    total: total,
    status: 'processing',
    ...state.checkoutData
  };
  
  state.orders.push(newOrder);
  localStorage.setItem('orders', JSON.stringify(state.orders));
  
  // Clear cart
  clearCart();
  
  // Show success step
  goToCheckoutStep(5);
  
  // Update recent purchases
  renderRecentPurchases();
}

// Auth Functions
function login(email, password) {
  // In a real app, this would be an API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'user@example.com' && password === 'password') {
        const user = {
          id: 1,
          name: 'Іван Петренко',
          email: email
        };
        state.user = user;
        localStorage.setItem('user', JSON.stringify(user));
        updateUserUI();
        renderRecentPurchases();
        resolve(user);
      } else {
        reject(new Error('Невірний email або пароль'));
      }
    }, 1000);
  });
}

function register(name, email, password) {
  // In a real app, this would be an API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name && email && password) {
        const user = {
          id: Math.floor(Math.random() * 1000000),
          name: name,
          email: email
        };
        state.user = user;
        localStorage.setItem('user', JSON.stringify(user));
        updateUserUI();
        resolve(user);
      } else {
        reject(new Error('Будь ласка, заповніть всі поля'));
      }
    }, 1000);
  });
}

function logout() {
  state.user = null;
  localStorage.removeItem('user');
  updateUserUI();
  renderRecentPurchases();
  showToast('Ви вийшли з акаунту');
}

// Modal Functions
function openModal(modal) {
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

function closeAllModals() {
  document.querySelectorAll('.modal').forEach(modal => {
    closeModal(modal);
  });
}

// Toast Notification
function showToast(message, type = 'success') {
  elements.toastMessage.textContent = message;
  elements.toast.className = `toast toast-${type}`;
  elements.toast.classList.add('show');
  
  setTimeout(() => {
    elements.toast.classList.remove('show');
  }, 3000);
}

// Filter Products
function filterProducts(category) {
  if (category === 'all') {
    renderProducts(PRODUCTS);
    return;
  }
  
  const filtered = PRODUCTS.filter(product => 
    product.category.includes(category)
  );
  
  renderProducts(filtered);
}

function showNewArrivals() {
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  
  const newProducts = PRODUCTS.filter(product => {
    const addedDate = new Date(product.dateAdded);
    return addedDate >= thirtyDaysAgo;
  });
  
  renderProducts(newProducts);
  
  // Update active filter button
  elements.filterBtns.forEach(btn => btn.classList.remove('active'));
  elements.newArrivalsBtn.classList.add('active');
}

function searchProducts(query) {
  if (query.length < 2) {
    renderProducts(PRODUCTS);
    return;
  }
  
  const lowerQuery = query.toLowerCase();
  const results = PRODUCTS.filter(product => 
    product.name.toLowerCase().includes(lowerQuery) ||
    product.category.some(cat => cat.toLowerCase().includes(lowerQuery))
  );
  
  renderProducts(results);
}

// Event Listeners
function setupEventListeners() {
  // Header buttons
  elements.cartBtn.addEventListener('click', () => {
    elements.cartPanel.classList.add('open');
    renderCart();
  });
  
  elements.closeCart.addEventListener('click', () => {
    elements.cartPanel.classList.remove('open');
  });
  
  elements.wishlistBtn.addEventListener('click', () => {
    // In a real app, this would open a wishlist page/modal
    showToast('Список бажань');
  });
  
  elements.userBtn.addEventListener('click', () => {
    if (state.user) {
      // Show user menu (in a real app)
      if (confirm('Вийти з акаунту?')) {
        logout();
      }
    } else {
      openModal(elements.loginModal);
    }
  });
  
  // Product interactions
  elements.productsGrid.addEventListener('click', (e) => {
    const target = e.target.closest('[data-id]');
    if (!target) return;
    
    const id = parseInt(target.dataset.id);
    
    if (target.classList.contains('product-image') || 
        target.classList.contains('product-title')) {
      openProductModal(id);
    } else if (target.classList.contains('wishlist-btn') || 
               target.closest('.wishlist-btn')) {
      toggleWishlist(id);
      showToast(state.wishlist.includes(id) ? 
        'Додано в список бажань' : 'Видалено зі списку бажань');
    } else if (target.classList.contains('btn-primary')) {
      addToCart(id);
      showToast('Товар додано до кошика');
    }
  });
  
  // Filter buttons
  elements.filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.id === 'newArrivalsBtn') {
        showNewArrivals();
      } else {
        elements.filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filterProducts(btn.dataset.category);
      }
    });
  });
  
  // Search
  document.querySelector('.search input').addEventListener('input', (e) => {
    searchProducts(e.target.value);
  });
  
  // Checkout
  elements.checkoutBtn.addEventListener('click', openCheckout);
  
  // Auth modals
  elements.closeLoginModal.addEventListener('click', () => {
    closeModal(elements.loginModal);
  });
  
  elements.closeRegisterModal.addEventListener('click', () => {
    closeModal(elements.registerModal);
  });
  
  elements.showRegister.addEventListener('click', (e) => {
    e.preventDefault();
    closeModal(elements.loginModal);
    openModal(elements.registerModal);
  });
  
  elements.showLogin.addEventListener('click', (e) => {
    e.preventDefault();
    closeModal(elements.registerModal);
    openModal(elements.loginModal);
  });
  
  // Login form
  elements.loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    try {
      await login(email, password);
      showToast('Ви успішно увійшли');
      closeModal(elements.loginModal);
    } catch (error) {
      showToast(error.message, 'error');
    }
  });
  
  // Register form
  elements.registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;
    
    if (password !== confirmPassword) {
      showToast('Паролі не співпадають', 'error');
      return;
    }
    
    try {
      await register(name, email, password);
      showToast('Реєстрація успішна! Ви увійшли в систему');
      closeModal(elements.registerModal);
    } catch (error) {
      showToast(error.message, 'error');
    }
  });
  
  // Product modal
  elements.closeProductModal.addEventListener('click', () => {
    closeModal(elements.productModal);
  });
  
  // Checkout modal
  elements.closeCheckoutModal.addEventListener('click', () => {
    closeModal(elements.checkoutModal);
  });
  
  elements.cancelCheckout.addEventListener('click', () => {
    closeModal(elements.checkoutModal);
  });
  
  // Checkout navigation
  elements.nextToStep2.addEventListener('click', () => goToCheckoutStep(2));
  elements.backToStep1.addEventListener('click', () => goToCheckoutStep(1));
  elements.nextToStep3.addEventListener('click', () => goToCheckoutStep(3));
  elements.backToStep2.addEventListener('click', () => goToCheckoutStep(2));
  elements.nextToStep4.addEventListener('click', () => goToCheckoutStep(4));
  elements.backToStep3.addEventListener('click', () => goToCheckoutStep(3));
  
  // Delivery options
  elements.deliveryOptions.forEach(option => {
    option.addEventListener('click', () => {
      elements.deliveryOptions.forEach(opt => opt.classList.remove('selected'));
      option.classList.add('selected');
      state.checkoutData.deliveryMethod = option.dataset.method;
    });
  });
  
  // Payment options
  elements.paymentOptions.forEach(option => {
    option.addEventListener('click', () => {
      elements.paymentOptions.forEach(opt => opt.classList.remove('selected'));
      option.classList.add('selected');
      state.checkoutData.paymentMethod = option.dataset.method;
      
      if (option.dataset.method === 'card') {
        elements.cardDetails.style.display = 'block';
      } else {
        elements.cardDetails.style.display = 'none';
      }
    });
  });
  
  // Confirm order
  elements.confirmOrder.addEventListener('click', completeOrder);
  
  // Close success modal
  elements.closeSuccessModal.addEventListener('click', () => {
    closeModal(elements.checkoutModal);
  });
  
  // Close modals when clicking outside
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  });
}

// Initialize the app
init();
