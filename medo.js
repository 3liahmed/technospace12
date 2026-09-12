const ICONS = {
  case: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="2" width="10" height="20" rx="3"/><path d="M9.5 2v1.2a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V2"/><circle cx="12" cy="17.3" r="1"/></svg>`,
  earbuds: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10V7a2 2 0 1 1 4 0v2.2"/><rect x="6" y="10" width="4.6" height="7.2" rx="2.3"/><path d="M17 10V7a2 2 0 1 0-4 0v2.2"/><rect x="13.4" y="10" width="4.6" height="7.2" rx="2.3"/><circle cx="8.3" cy="12.6" r=".6" fill="currentColor" stroke="none"/><circle cx="15.7" cy="12.6" r=".6" fill="currentColor" stroke="none"/></svg>`,
  charger: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="9" rx="2"/><path d="M9 12v2.2M15 12v2.2"/><path d="M12 15.4 9.4 19h2.4l-.6 2.6L14.6 17h-2.4l.6-2.6z" fill="currentColor" stroke="none"/></svg>`,
  cable: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3v4M15 3v4"/><rect x="7" y="7" width="10" height="6.4" rx="2"/><path d="M12 13.4V17a4 4 0 0 0 4 4h2"/></svg>`,
  powerbank: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="3" width="12" height="18" rx="2.4"/><path d="M9.5 3V1.6h5V3"/><path d="M13 8.4 10 13h2.4l-.6 3.6L15.6 12h-2.4z" fill="currentColor" stroke="none"/></svg>`,
  screen: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M8.4 2h7.2a2.4 2.4 0 0 1 2.4 2.4v15.2a2.4 2.4 0 0 1-2.4 2.4H8.4A2.4 2.4 0 0 1 6 19.6V4.4A2.4 2.4 0 0 1 8.4 2z"/><path d="M9.5 3V1.6h5V3"/><circle cx="12" cy="17.3" r="1"/></svg>`,
  holder: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v4"/><path d="M7 7h10l-1.4 4.4a2 2 0 0 1-1.9 1.4h-3.4a2 2 0 0 1-1.9-1.4L7 7z"/><rect x="8.4" y="12.8" width="7.2" height="9" rx="2"/></svg>`,
  smartwatch: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="8" width="10" height="8" rx="2.4"/><path d="M9.5 8V5.4a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1V8"/><path d="M9.5 16v2.6a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V16"/><path d="M12 10.6v2l1.4 1"/></svg>`,
  cart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 4h2l2.4 12.2a2 2 0 0 0 2 1.6h7.4a2 2 0 0 0 2-1.6L20.6 8H6.2"/><circle cx="9.5" cy="20.2" r="1.1" fill="currentColor" stroke="none"/><circle cx="17" cy="20.2" r="1.1" fill="currentColor" stroke="none"/></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m20 20-4.4-4.4"/></svg>`,
  menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M5 5l14 14M19 5 5 19"/></svg>`,
  star: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2.6l2.9 6 6.6.7-4.9 4.5 1.3 6.5L12 17l-5.9 3.3 1.3-6.5-4.9-4.5 6.6-.7z"/></svg>`,
  arrow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>`,
  bolt: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M13 2 4.2 13.4h5.6L10.4 22 19.8 10h-5.9z"/></svg>`,
  truck: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h10v9H3z"/><path d="M13 10h4l3 3v2h-7z"/><circle cx="7" cy="17.4" r="1.6"/><circle cx="17" cy="17.4" r="1.6"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.2 5 5.6v5.6c0 4.6 3 7.7 7 8.8 4-1.1 7-4.2 7-8.8V5.6z"/><path d="m9 12 2.2 2.2L15.5 10"/></svg>`,
  headset: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 13v-1a8 8 0 0 1 16 0v1"/><rect x="3.4" y="13" width="4" height="6" rx="1.6"/><rect x="16.6" y="13" width="4" height="6" rx="1.6"/><path d="M20.6 19v.6a3 3 0 0 1-3 3h-3.4"/></svg>`,
  refresh: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12a8 8 0 0 1 13.7-5.7L20 8"/><path d="M20 4v4h-4"/><path d="M20 12a8 8 0 0 1-13.7 5.7L4 16"/><path d="M4 20v-4h4"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>`,
  minus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M5 12h14"/></svg>`,
  trash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"/><path d="M9 7V4.6A1.6 1.6 0 0 1 10.6 3h2.8A1.6 1.6 0 0 1 15 4.6V7"/><path d="M6 7l1 13.4A2 2 0 0 0 9 22h6a2 2 0 0 0 2-1.6L18 7"/><path d="M10 11v6M14 11v6"/></svg>`,
  edit: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h4L18.5 9.5a2.1 2.1 0 0 0-3-3L5 17v3z"/><path d="m14 7 3 3"/></svg>`,
  image: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4.5" width="18" height="15" rx="2.2"/><circle cx="8.5" cy="10" r="1.6"/><path d="m4 17 5-5 4 4 3-3 4 4"/></svg>`,
  lock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="5.5" y="10.5" width="13" height="9.5" rx="2.2"/><path d="M8.5 10.5V7.8a3.5 3.5 0 0 1 7 0v2.7"/></svg>`,
  logout: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h3"/><path d="M13 8l4 4-4 4"/><path d="M17 12H8"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a8 8 0 0 0-6.9 12l-1 4 4.2-1A8 8 0 1 0 12 3z"/><path d="M9 10c.3 2 2 3.7 4 4"/></svg>`
};

const CATEGORIES = [
  { id: "cases",      name: "كفرات وحافظات",     icon: "case" },
  { id: "earbuds",     name: "سماعات لاسلكية",     icon: "earbuds" },
  { id: "chargers",    name: "شواحن سريعة",        icon: "charger" },
  { id: "cables",      name: "كابلات شحن",         icon: "cable" },
  { id: "powerbank",   name: "باور بانك",           icon: "powerbank" },
  { id: "screen",      name: "واقيات شاشة",        icon: "screen" },
  { id: "holders",     name: "حاملات وماونتات",     icon: "holder" },
  { id: "smartwatch",  name: "إكسسوارات الساعات",  icon: "smartwatch" }
];

const DEFAULT_PRODUCTS = [
  { id: "p1", name: "كفر حماية شفاف مقاوم للصدمات", category: "cases", icon: "case", image: null,
    price: 249, oldPrice: 349, rating: 4.6, reviews: 312, bestSeller: true },
  { id: "p2", name: "سماعات بلوتوث لاسلكية X20", category: "earbuds", icon: "earbuds", image: null,
    price: 899, oldPrice: 1199, rating: 4.8, reviews: 540, bestSeller: true },
  { id: "p3", name: "شاحن سريع GaN بقوة 65 وات", category: "chargers", icon: "charger", image: null,
    price: 699, oldPrice: null, rating: 4.7, reviews: 208, bestSeller: true },
  { id: "p4", name: "كابل Type-C مضفر 1.2 متر", category: "cables", icon: "cable", image: null,
    price: 149, oldPrice: null, rating: 4.5, reviews: 421, bestSeller: true },
  { id: "p5", name: "باور بانك 20000 مللي أمبير", category: "powerbank", icon: "powerbank", image: null,
    price: 999, oldPrice: 1299, rating: 4.9, reviews: 177, bestSeller: false },
  { id: "p6", name: "واقي شاشة زجاجي مقوى 9H", category: "screen", icon: "screen", image: null,
    price: 99, oldPrice: null, rating: 4.4, reviews: 633, bestSeller: true },
  { id: "p7", name: "حامل جوال مغناطيسي للسيارة", category: "holders", icon: "holder", image: null,
    price: 199, oldPrice: 259, rating: 4.6, reviews: 150, bestSeller: false },
  { id: "p8", name: "سوار سيليكون لساعة ذكية", category: "smartwatch", icon: "smartwatch", image: null,
    price: 129, oldPrice: null, rating: 4.3, reviews: 98, bestSeller: true }
];

const DEFAULT_STORE_SETTINGS = {
  storeName: "Techno Space",
  storeTagline: "كل إكسسوارات موبايلك في مكان واحد",
  phone: "015 58420517"
};

const STORE_SETTINGS_KEY = "technoSpace.storeSettings";
const PRODUCTS_KEY       = "technoSpace.products";
const CART_KEY            = "technoSpace.cart";
const ADMIN_SESSION_KEY   = "technoSpace.adminSession";
const ADMIN_LOCKOUT_KEY    = "technoSpace.adminLockout";
const MAX_LOGIN_ATTEMPTS   = 3;

function uid(prefix) {
  return (prefix || "p") + "_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

function safeParse(raw, fallback) {
  try {
    const v = JSON.parse(raw);
    return v == null ? fallback : v;
  } catch (e) {
    return fallback;
  }
}

function digitsOnly(str) { return String(str || "").replace(/\D/g, ""); }

function phoneForTel(phone) {
  const d = digitsOnly(phone);
  if (!d) return "";
  if (d.startsWith("20")) return "+" + d;
  if (d.startsWith("0")) return "+20" + d.slice(1);
  return "+20" + d;
}

function phoneForWhatsapp(phone) { return phoneForTel(phone).replace("+", ""); }

/* ============================================================
   DATA LAYER (browser-local — no backend required)
   Everything reads/writes localStorage directly. Data is
   per-browser: the shop owner's changes only show on the
   device/browser they were made on — see the note in the
   admin bar. window.refreshStorefront() (defined below, in
   the storefront IIFE) is called right after every save so the
   storefront re-renders immediately in THIS SAME TAB, without
   needing a page reload.

   IMPORTANT LIMITATION: because this all lives in localStorage,
   it only works within ONE browser. A product added here will
   show up for anyone browsing the site in THIS SAME browser
   (this is what "vistor" testing in the same tab/browser will
   see, once the display-filter bug below is fixed). It will
   NOT show up for a real customer opening the site on their own
   phone or computer — that requires a real server + database
   instead of localStorage. This file only fixes the local bug;
   it doesn't add that server.
   ============================================================ */

function getStoreSettings() {
  return { ...DEFAULT_STORE_SETTINGS, ...safeParse(localStorage.getItem(STORE_SETTINGS_KEY), {}) };
}

async function saveStoreSettings(settings) {
  const merged = { ...getStoreSettings(), ...settings };
  localStorage.setItem(STORE_SETTINGS_KEY, JSON.stringify(merged));
  return merged;
}

function getProducts() {
  const stored = safeParse(localStorage.getItem(PRODUCTS_KEY), null);
  if (stored === null) {
    localStorage.setItem(PRODUCTS_KEY, JSON.stringify(DEFAULT_PRODUCTS));
    return DEFAULT_PRODUCTS.map(p => ({ ...p }));
  }
  return stored.map(p => ({ ...p }));
}

function setProducts(list) {
  localStorage.setItem(PRODUCTS_KEY, JSON.stringify(list));
}

async function addProduct(product) {
  const saved = { ...product, id: uid("p") };
  const list = getProducts();
  list.unshift(saved);
  setProducts(list);
  return saved;
}

async function updateProduct(id, patch) {
  const list = getProducts();
  let saved = null;
  const next = list.map(p => {
    if (p.id === id) { saved = { ...p, ...patch, id }; return saved; }
    return p;
  });
  setProducts(next);
  return saved;
}

async function deleteProduct(id) {
  setProducts(getProducts().filter(p => p.id !== id));
  saveCart(getCart().filter(c => c.id !== id));
}

async function resetProductsToDefault() {
  const fresh = DEFAULT_PRODUCTS.map(p => ({ ...p }));
  setProducts(fresh);
  return fresh;
}

async function fetchInitialData() {
  // Nothing to fetch remotely — data already lives in localStorage
  // (seeded with defaults on first run by getProducts/getStoreSettings).
  return Promise.resolve();
}

function getCart() {
  return safeParse(localStorage.getItem(CART_KEY), []);
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function addToCart(productId, qty) {
  qty = qty || 1;
  const cart = getCart();
  const line = cart.find(c => c.id === productId);
  if (line) line.qty += qty;
  else cart.push({ id: productId, qty });
  saveCart(cart);
  return cart;
}

function setCartQty(productId, qty) {
  let cart = getCart();
  if (qty <= 0) {
    cart = cart.filter(c => c.id !== productId);
  } else {
    const line = cart.find(c => c.id === productId);
    if (line) line.qty = qty;
  }
  saveCart(cart);
  return cart;
}

function removeFromCart(productId) {
  saveCart(getCart().filter(c => c.id !== productId));
}

function cartCount() {
  return getCart().reduce((sum, c) => sum + c.qty, 0);
}

function cartLines() {
  const products = getProducts();
  return getCart()
    .map(c => {
      const product = products.find(p => p.id === c.id);
      return product ? { product, qty: c.qty } : null;
    })
    .filter(Boolean);
}

function cartTotal() {
  return cartLines().reduce((sum, l) => sum + l.product.price * l.qty, 0);
}

const ADMIN_USERNAME = "medoziper";
const ADMIN_PASSWORD_HASH = "a3a6eefe8f35a29c7c6eb6c60482b24acc5287dd9f096ea6fff0c638149fc585";

async function sha256Hex(str) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(str));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, "0")).join("");
}

async function checkAdminCredentials(username, password) {
  if (username !== ADMIN_USERNAME) return false;
  const hash = await sha256Hex(password);
  return hash === ADMIN_PASSWORD_HASH;
}

function getAdminLockoutState() {
  return safeParse(localStorage.getItem(ADMIN_LOCKOUT_KEY), { attempts: 0, locked: false });
}

function saveAdminLockoutState(state) {
  localStorage.setItem(ADMIN_LOCKOUT_KEY, JSON.stringify(state));
}

function isLoginLocked() {
  return getAdminLockoutState().locked;
}

function recordFailedLoginAttempt() {
  const state = getAdminLockoutState();
  state.attempts += 1;
  if (state.attempts >= MAX_LOGIN_ATTEMPTS) state.locked = true;
  saveAdminLockoutState(state);
  return state;
}

function resetLoginAttempts() {
  saveAdminLockoutState({ attempts: 0, locked: false });
}

function isAdminSession() {
  return sessionStorage.getItem(ADMIN_SESSION_KEY) === "1";
}

function setAdminSession(on) {
  if (on) sessionStorage.setItem(ADMIN_SESSION_KEY, "1");
  else sessionStorage.removeItem(ADMIN_SESSION_KEY);
}


(function () {
  "use strict";

  function applyStoreSettings() {
    const s = getStoreSettings();
    document.title = `${s.storeName} | ${s.storeTagline}`;
    document.querySelectorAll("#brandName, #mobileBrandName, #footerBrandName")
      .forEach(el => { el.textContent = s.storeName; });

    const tagline = document.getElementById("heroTagline");
    if (tagline) tagline.textContent = s.storeTagline;

    const footerCopy = document.getElementById("footerCopy");
    if (footerCopy) footerCopy.textContent = `© 2026 ${s.storeName}. جميع الحقوق محفوظة.`;

    const tel = phoneForTel(s.phone);
    const wa = phoneForWhatsapp(s.phone);

    const callLink = document.getElementById("footerCallLink");
    const callText = document.getElementById("footerCallText");
    if (callLink && tel) callLink.href = "tel:" + tel;
    if (callText) callText.textContent = s.phone;

    const waMsg = encodeURIComponent(`مرحبًا ${s.storeName}، حابب أستفسر عن منتج 🙌`);
    const waLink = document.getElementById("footerWaLink");
    if (waLink && wa) waLink.href = `https://wa.me/${wa}?text=${waMsg}`;

    const fab = document.getElementById("whatsappFab");
    if (fab && wa) fab.href = `https://wa.me/${wa}?text=${waMsg}`;

    const heroWa = document.getElementById("heroWhatsapp");
    if (heroWa && wa) { heroWa.href = `https://wa.me/${wa}?text=${waMsg}`; heroWa.target = "_blank"; heroWa.rel = "noopener"; }
  }

  function icon(name) { return ICONS[name] || ""; }

  function mediaContent(p) {
    return p.image ? `<img src="${p.image}" alt="${p.name}">` : icon(p.icon);
  }

  function starRow(rating) {
    const full = Math.round(rating);
    let html = "";
    for (let i = 0; i < 5; i++) {
      html += `<span style="opacity:${i < full ? 1 : .28}">${icon("star")}</span>`;
    }
    return html;
  }

  function priceFmt(n) { return Number(n).toLocaleString("ar-EG") + " ج.م"; }

  let activeCategory = null;

  function renderCategories() {
    const grid = document.getElementById("categoryGrid");
    grid.innerHTML = CATEGORIES.map(cat => `
      <button class="category-card" data-cat="${cat.id}" type="button">
        <span class="category-card__icon">${icon(cat.icon)}</span>
        <span>${cat.name}</span>
      </button>
    `).join("");

    grid.querySelectorAll(".category-card").forEach(card => {
      card.addEventListener("click", () => {
        const cat = card.dataset.cat;
        activeCategory = activeCategory === cat ? null : cat;
        grid.querySelectorAll(".category-card").forEach(c =>
          c.classList.toggle("is-active", c.dataset.cat === activeCategory));
        renderProducts();
        document.getElementById("products").scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  function productCard(p) {
    const badges = [];
    if (p.bestSeller) badges.push(`<span class="pill-badge pill-badge--spark">الأكثر مبيعًا</span>`);
    if (p.oldPrice) badges.push(`<span class="pill-badge pill-badge--danger">خصم ${Math.round((1 - p.price / p.oldPrice) * 100)}%</span>`);
    const catName = (CATEGORIES.find(c => c.id === p.category) || {}).name || "";

    return `
      <article class="product-card">
        <div class="product-card__media">
          <div class="product-card__badges">${badges.join("")}</div>
          ${mediaContent(p)}
        </div>
        <div class="product-card__body">
          <span class="product-card__cat">${catName}</span>
          <h3 class="product-card__name">${p.name}</h3>
          <div class="product-card__rating">
            <span class="stars">${starRow(p.rating)}</span>
            <span>${p.rating} (${p.reviews})</span>
          </div>
          <div class="product-card__footer">
            <div class="price-block">
              <span class="price-now">${priceFmt(p.price)}</span>
              ${p.oldPrice ? `<span class="price-old">${priceFmt(p.oldPrice)}</span>` : ""}
            </div>
            <button class="add-btn" data-add="${p.id}" aria-label="أضف للسلة">${icon("cart")}</button>
          </div>
        </div>
      </article>
    `;
  }

  function renderProducts() {
    const grid = document.getElementById("productGrid");
    const clearBtn = document.getElementById("clearFilter");
    // FIX: previously this filtered to `p.bestSeller` only, so any product
    // added from the admin panel without the "best seller" checkbox ticked
    // never appeared anywhere on the storefront. The grid now lists every
    // product; the "best seller" flag is still shown as a badge only.
    let list = getProducts();
    if (activeCategory) {
      list = list.filter(p => p.category === activeCategory);
      clearBtn.style.display = "inline-flex";
    } else {
      clearBtn.style.display = "none";
    }

    grid.innerHTML = list.length
      ? list.map(productCard).join("")
      : `<div class="grid-empty">لا توجد منتجات ضمن هذا التصنيف حاليًا.</div>`;

    bindAddButtons(grid);
  }

  function initClearFilter() {
    document.getElementById("clearFilter").addEventListener("click", () => {
      activeCategory = null;
      document.querySelectorAll(".category-card").forEach(c => c.classList.remove("is-active"));
      renderProducts();
    });
  }

  function dealCard(p) {
    const off = Math.round((1 - p.price / p.oldPrice) * 100);
    const claimed = 40 + (hashNum(p.id) * 9) % 45;
    return `
      <article class="deal-card">
        <div class="deal-card__media">
          <span class="deal-card__off">-${off}%</span>
          ${mediaContent(p)}
        </div>
        <div class="deal-card__body">
          <h3 class="deal-card__name">${p.name}</h3>
          <div class="price-block">
            <span class="price-now">${priceFmt(p.price)}</span>
            <span class="price-old">${priceFmt(p.oldPrice)}</span>
          </div>
          <div class="deal-progress"><div class="deal-progress__bar" style="width:${claimed}%"></div></div>
          <span class="deal-progress__label">${claimed}% من الكمية اتحجزت</span>
          <button class="btn btn--primary btn--sm btn--block" data-add="${p.id}">
            أضف للسلة
          </button>
        </div>
      </article>
    `;
  }

  function hashNum(str) {
    let h = 0;
    for (let i = 0; i < String(str).length; i++) h = (h * 31 + String(str).charCodeAt(i)) >>> 0;
    return h % 100;
  }

  function renderDeals() {
    const grid = document.getElementById("dealGrid");
    const list = getProducts().filter(p => p.oldPrice);
    grid.innerHTML = list.length
      ? list.map(dealCard).join("")
      : `<div class="grid-empty">لا توجد عروض حاليًا، تابعنا فأي خصم جديد هيظهر هنا فورًا.</div>`;
    bindAddButtons(grid);
  }

  function bindAddButtons(scope) {
    scope.querySelectorAll("[data-add]").forEach(btn => {
      btn.addEventListener("click", () => {
        addToCart(btn.dataset.add, 1);
        const p = getProducts().find(x => x.id === btn.dataset.add);
        showToast(`تمت إضافة "${p ? p.name : "المنتج"}" إلى السلة`);
        renderCartCount();
        if (document.getElementById("cartOverlay").classList.contains("is-open")) renderCartPanel();
      });
    });
  }

  function renderCartCount() {
    const count = cartCount();
    const badge = document.getElementById("cartCount");
    badge.textContent = count;
    badge.hidden = count === 0;
  }

  function cartLineHtml(line) {
    const p = line.product;
    return `
      <div class="cart-line" data-line="${p.id}">
        <div class="cart-line__media">${mediaContent(p)}</div>
        <div>
          <div class="cart-line__name">${p.name}</div>
          <div class="cart-line__price">${priceFmt(p.price)}</div>
          <div class="cart-line__qty">
            <button type="button" data-qty-down="${p.id}" aria-label="إنقاص الكمية">${icon("minus")}</button>
            <span>${line.qty}</span>
            <button type="button" data-qty-up="${p.id}" aria-label="زيادة الكمية">${icon("plus")}</button>
          </div>
        </div>
        <button class="cart-line__remove" type="button" data-remove="${p.id}" aria-label="إزالة">${icon("trash")}</button>
      </div>
    `;
  }

  function renderCartPanel() {
    const lines = cartLines();
    const body = document.getElementById("cartBody");
    body.innerHTML = lines.length
      ? lines.map(cartLineHtml).join("")
      : `<div class="cart-empty">${icon("cart")}<span>السلة فاضية حاليًا</span></div>`;

    document.getElementById("cartTotal").textContent = priceFmt(cartTotal());

    body.querySelectorAll("[data-qty-up]").forEach(b => b.addEventListener("click", () => {
      const id = b.dataset.qtyUp;
      const line = getCart().find(c => c.id === id);
      setCartQty(id, (line ? line.qty : 0) + 1);
      renderCartPanel(); renderCartCount();
    }));
    body.querySelectorAll("[data-qty-down]").forEach(b => b.addEventListener("click", () => {
      const id = b.dataset.qtyDown;
      const line = getCart().find(c => c.id === id);
      setCartQty(id, (line ? line.qty : 0) - 1);
      renderCartPanel(); renderCartCount();
    }));
    body.querySelectorAll("[data-remove]").forEach(b => b.addEventListener("click", () => {
      removeFromCart(b.dataset.remove);
      renderCartPanel(); renderCartCount();
    }));
  }

  function initCart() {
    const overlay = document.getElementById("cartOverlay");
    const open = () => { renderCartPanel(); overlay.classList.add("is-open"); };
    const close = () => overlay.classList.remove("is-open");

    document.getElementById("cartBtn").addEventListener("click", open);
    document.getElementById("cartClose").addEventListener("click", close);
    overlay.addEventListener("click", e => { if (e.target === overlay) close(); });
    document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });

    document.getElementById("cartCheckout").addEventListener("click", () => {
      const lines = cartLines();
      if (!lines.length) { showToast("السلة فاضية، ضيف منتج الأول"); return; }
      const s = getStoreSettings();
      const wa = phoneForWhatsapp(s.phone);
      let msg = `مرحبًا ${s.storeName}، حابب أطلب:%0A`;
      lines.forEach(l => { msg += `- ${l.product.name} × ${l.qty} (${priceFmt(l.product.price)})%0A`; });
      msg += `الإجمالي: ${priceFmt(cartTotal())}`;
      window.open(`https://wa.me/${wa}?text=${msg}`, "_blank", "noopener");
    });

    renderCartCount();
  }

  function startCountdown() {
    const key = "technoSpace.dealEndsAt";
    let endsAt = Number(localStorage.getItem(key));
    if (!endsAt || endsAt < Date.now()) {
      endsAt = Date.now() + 1000 * 60 * 60 * 26;
      localStorage.setItem(key, String(endsAt));
    }
    const h = document.getElementById("cdH");
    const m = document.getElementById("cdM");
    const s = document.getElementById("cdS");

    function tick() {
      let diff = Math.max(0, endsAt - Date.now());
      const hours = Math.floor(diff / 3600000);
      const mins = Math.floor((diff % 3600000) / 60000);
      const secs = Math.floor((diff % 60000) / 1000);
      h.textContent = String(hours).padStart(2, "0");
      m.textContent = String(mins).padStart(2, "0");
      s.textContent = String(secs).padStart(2, "0");
      if (diff <= 0) { localStorage.removeItem(key); }
    }
    tick();
    setInterval(tick, 1000);
  }

  function initMobileNav() {
    const nav = document.getElementById("mobileNav");
    const open = document.getElementById("navToggle");
    const close = document.getElementById("mobileNavClose");
    open.addEventListener("click", () => nav.classList.add("is-open"));
    close.addEventListener("click", () => nav.classList.remove("is-open"));
    nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("is-open")));
  }

  function initSearch() {
    const overlay = document.getElementById("searchOverlay");
    const input = document.getElementById("searchInput");
    const results = document.getElementById("searchResults");
    const open = () => { overlay.classList.add("is-open"); setTimeout(() => input.focus(), 150); };
    const close = () => { overlay.classList.remove("is-open"); input.value = ""; results.innerHTML = ""; };

    document.getElementById("searchToggle").addEventListener("click", open);
    document.getElementById("searchClose").addEventListener("click", close);
    overlay.addEventListener("click", e => { if (e.target === overlay) close(); });
    document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });

    input.addEventListener("input", () => {
      const q = input.value.trim();
      if (!q) { results.innerHTML = ""; return; }
      const matches = getProducts().filter(p => p.name.includes(q));
      results.innerHTML = matches.length
        ? matches.map(p => `
            <a href="#products" data-goto="${p.id}">
              <span class="sr-icon">${mediaContent(p)}</span>
              <span>${p.name} — ${priceFmt(p.price)}</span>
            </a>`).join("")
        : `<div class="search-empty">لا نتائج مطابقة لـ "${q}"</div>`;

      results.querySelectorAll("[data-goto]").forEach(a => a.addEventListener("click", close));
    });
  }

  function initNewsletter() {
    const form = document.getElementById("newsletterForm");
    form.addEventListener("submit", e => {
      e.preventDefault();
      showToast("تم الاشتراك بنجاح، هنبعتلك كل جديد");
      form.reset();
    });
  }

  let toastTimer;
  function showToast(msg) {
    const toast = document.getElementById("toast");
    document.getElementById("toastMsg").textContent = msg;
    toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2600);
  }

  function initReveal() {
    if (!("IntersectionObserver" in window)) return;
    const items = document.querySelectorAll(".reveal");
    items.forEach(el => el.classList.add("pre-anim"));
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.remove("pre-anim"); io.unobserve(e.target); }
      });
    }, { threshold: .15 });
    items.forEach(el => io.observe(el));
  }

  async function refreshFromServer() {
    try {
      await fetchInitialData();
      applyStoreSettings();
      renderProducts();
      renderDeals();
      if (document.getElementById("cartOverlay").classList.contains("is-open")) renderCartPanel();
      renderCartCount();
    } catch (err) {
      console.error("[Techno Space] refreshFromServer failed:", err);
    }
  }

  function safeRun(fn, label) {
    try { fn(); } catch (err) { console.error("[Techno Space] " + label + " failed:", err); }
  }

  document.addEventListener("DOMContentLoaded", async () => {
    try {
      await fetchInitialData();
    } catch (err) {
      console.error("[Techno Space] fetchInitialData failed:", err);
    }
    safeRun(applyStoreSettings, "applyStoreSettings");
    safeRun(renderCategories, "renderCategories");
    safeRun(renderProducts, "renderProducts");
    safeRun(initClearFilter, "initClearFilter");
    safeRun(renderDeals, "renderDeals");
    safeRun(startCountdown, "startCountdown");
    safeRun(initMobileNav, "initMobileNav");
    safeRun(initSearch, "initSearch");
    safeRun(initCart, "initCart");
    safeRun(initNewsletter, "initNewsletter");
    safeRun(initReveal, "initReveal");
  });

  // Exposed so the admin panel (same page, different view) can trigger an
  // immediate re-render right after it saves a change — see initSettingsForm
  // and initProductsAdmin below, which call this after every successful save.
  window.refreshStorefront = refreshFromServer;
})();


(function () {
  "use strict";

  const loginGate = document.getElementById("loginGate");
  const adminContent = document.getElementById("adminContent");

  function showLockedView() {
    document.getElementById("loginView").hidden = true;
    document.getElementById("lockedView").hidden = false;
  }

  function showGate() {
    loginGate.hidden = false;
    adminContent.hidden = true;
    if (isLoginLocked()) {
      showLockedView();
    } else {
      document.getElementById("loginView").hidden = false;
      document.getElementById("lockedView").hidden = true;
      document.getElementById("loginUser").focus();
    }
  }

  function unlock() {
    loginGate.hidden = true;
    adminContent.hidden = false;
    initAdminContent();
  }

  document.getElementById("loginForm").addEventListener("submit", async e => {
    e.preventDefault();
    if (isLoginLocked()) { showLockedView(); return; }

    const user = document.getElementById("loginUser").value.trim();
    const pw = document.getElementById("loginPw").value;
    const err = document.getElementById("loginError");
    const submitBtn = e.target.querySelector("button[type=submit]");
    submitBtn.disabled = true;
    const ok = await checkAdminCredentials(user, pw);
    submitBtn.disabled = false;

    if (!ok) {
      const state = recordFailedLoginAttempt();
      if (state.locked) { showLockedView(); return; }
      const remaining = MAX_LOGIN_ATTEMPTS - state.attempts;
      err.textContent = `بيانات الدخول غير صحيحة — متبقي ${remaining} ${remaining === 1 ? "محاولة" : "محاولات"}`;
      err.classList.add("is-visible");
      return;
    }

    err.classList.remove("is-visible");
    resetLoginAttempts();
    setAdminSession(true);
    unlock();
  });

  document.addEventListener("DOMContentLoaded", () => {
    if (isAdminSession()) { unlock(); } else { showGate(); }
  });

  let initialized = false;
  function initAdminContent() {
    if (initialized) return;
    initialized = true;

    document.getElementById("logoutBtn").addEventListener("click", () => {
      setAdminSession(false);
      location.reload();
    });

    initSettingsForm();
    initProductsAdmin();
  }

  function initSettingsForm() {
    const nameInput = document.getElementById("storeName");
    const taglineInput = document.getElementById("storeTagline");
    const phoneInput = document.getElementById("storePhone");
    const nameCount = document.getElementById("nameCount");
    const taglineCount = document.getElementById("taglineCount");
    const previewHeaderName = document.getElementById("previewHeaderName");
    const previewHeroName = document.getElementById("previewHeroName");
    const previewHeroTagline = document.getElementById("previewHeroTagline");
    const previewPhone = document.getElementById("previewPhone");
    const saveMsg = document.getElementById("saveMsg");
    const form = document.getElementById("settingsForm");
    const resetBtn = document.getElementById("resetBtn");

    function updatePreview() {
      const name = nameInput.value.trim() || DEFAULT_STORE_SETTINGS.storeName;
      const tagline = taglineInput.value.trim() || DEFAULT_STORE_SETTINGS.storeTagline;
      const phone = phoneInput.value.trim() || DEFAULT_STORE_SETTINGS.phone;
      previewHeaderName.textContent = name;
      previewHeroName.textContent = name;
      previewHeroTagline.textContent = tagline;
      previewPhone.textContent = "رقم التواصل: " + phone;
      nameCount.textContent = nameInput.value.length;
      taglineCount.textContent = taglineInput.value.length;
    }

    function loadForm() {
      const s = getStoreSettings();
      nameInput.value = s.storeName;
      taglineInput.value = s.storeTagline;
      phoneInput.value = s.phone;
      updatePreview();
    }

    function flashSaved() {
      saveMsg.classList.add("is-visible");
      clearTimeout(flashSaved._t);
      flashSaved._t = setTimeout(() => saveMsg.classList.remove("is-visible"), 2400);
    }

    async function persist(settings) {
      const btn = form.querySelector("button[type=submit]");
      btn.disabled = true;
      try {
        await saveStoreSettings(settings);
        loadForm();
        flashSaved();
        if (window.refreshStorefront) await window.refreshStorefront();
      } catch (err) {
        console.error(err);
        alert("تعذّر حفظ الإعدادات، حاول تاني.");
      } finally {
        btn.disabled = false;
      }
    }

    form.addEventListener("submit", e => {
      e.preventDefault();
      persist({
        storeName: nameInput.value.trim() || DEFAULT_STORE_SETTINGS.storeName,
        storeTagline: taglineInput.value.trim() || DEFAULT_STORE_SETTINGS.storeTagline,
        phone: phoneInput.value.trim() || DEFAULT_STORE_SETTINGS.phone
      });
    });

    resetBtn.addEventListener("click", () => {
      persist({ ...DEFAULT_STORE_SETTINGS });
    });

    [nameInput, taglineInput, phoneInput].forEach(el => el.addEventListener("input", updatePreview));

    loadForm();
  }

  function icon(name) { return ICONS[name] || ""; }
  function priceFmt(n) { return Number(n).toLocaleString("ar-EG") + " ج.م"; }

  function initProductsAdmin() {
    const categorySelect = document.getElementById("productCategory");
    categorySelect.innerHTML = CATEGORIES.map(c => `<option value="${c.id}">${c.name}</option>`).join("");

    const form = document.getElementById("productForm");
    const nameInput = document.getElementById("productName");
    const priceInput = document.getElementById("productPrice");
    const oldPriceInput = document.getElementById("productOldPrice");
    const reviewsInput = document.getElementById("productReviews");
    const ratingInput = document.getElementById("productRating");
    const bestSellerInput = document.getElementById("productBestSeller");
    const imageInput = document.getElementById("imageInput");
    const imagePreview = document.getElementById("imagePreview");
    const removeImageBtn = document.getElementById("removeImageBtn");
    const submitBtn = document.getElementById("productSubmitBtn");
    const cancelBtn = document.getElementById("cancelEditBtn");
    const formTitle = document.getElementById("formTitle");
    const editingTag = document.getElementById("editingTag");
    const saveMsg = document.getElementById("productSaveMsg");
    const list = document.getElementById("productsList");
    const countLabel = document.getElementById("productsCountLabel");

    let editingId = null;
    let currentImage = null;

    function flashSaved() {
      saveMsg.classList.add("is-visible");
      clearTimeout(flashSaved._t);
      flashSaved._t = setTimeout(() => saveMsg.classList.remove("is-visible"), 2400);
    }

    function renderImagePreview() {
      imagePreview.innerHTML = currentImage ? `<img src="${currentImage}" alt="">` : icon("image");
    }
    renderImagePreview();

    function resizeImageFile(file, maxDim, quality) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onerror = () => reject(new Error("تعذّرت قراءة الملف"));
        reader.onload = () => {
          const img = new Image();
          img.onerror = () => reject(new Error("تعذّر تحميل الصورة"));
          img.onload = () => {
            let { width, height } = img;
            if (width > height && width > maxDim) { height = Math.round(height * (maxDim / width)); width = maxDim; }
            else if (height > maxDim) { width = Math.round(width * (maxDim / height)); height = maxDim; }
            const canvas = document.createElement("canvas");
            canvas.width = width; canvas.height = height;
            canvas.getContext("2d").drawImage(img, 0, 0, width, height);
            resolve(canvas.toDataURL("image/jpeg", quality));
          };
          img.src = reader.result;
        };
        reader.readAsDataURL(file);
      });
    }

    imageInput.addEventListener("change", async () => {
      const file = imageInput.files[0];
      if (!file) return;
      try {
        currentImage = await resizeImageFile(file, 640, 0.82);
        renderImagePreview();
      } catch (err) {
        console.error(err);
        alert("تعذّر معالجة هذه الصورة، جرّب صورة تانية.");
      } finally {
        imageInput.value = "";
      }
    });

    removeImageBtn.addEventListener("click", () => {
      currentImage = null;
      renderImagePreview();
    });

    function resetForm() {
      editingId = null;
      currentImage = null;
      form.reset();
      renderImagePreview();
      formTitle.textContent = "إضافة منتج جديد";
      editingTag.classList.remove("is-visible");
      submitBtn.textContent = "إضافة المنتج";
      cancelBtn.hidden = true;
    }

    function startEdit(product) {
      editingId = product.id;
      currentImage = product.image || null;
      nameInput.value = product.name;
      categorySelect.value = product.category;
      priceInput.value = product.price;
      oldPriceInput.value = product.oldPrice || "";
      reviewsInput.value = product.reviews || 0;
      ratingInput.value = product.rating || "";
      bestSellerInput.checked = !!product.bestSeller;
      renderImagePreview();
      formTitle.textContent = "تعديل: " + product.name;
      editingTag.classList.add("is-visible");
      submitBtn.textContent = "حفظ التعديلات";
      cancelBtn.hidden = false;
      form.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    cancelBtn.addEventListener("click", resetForm);

    form.addEventListener("submit", async e => {
      e.preventDefault();
      const category = categorySelect.value;
      const categoryDef = CATEGORIES.find(c => c.id === category);
      const payload = {
        name: nameInput.value.trim(),
        category,
        icon: categoryDef ? categoryDef.icon : "case",
        image: currentImage,
        price: Number(priceInput.value) || 0,
        oldPrice: oldPriceInput.value ? Number(oldPriceInput.value) : null,
        rating: ratingInput.value ? Math.min(5, Math.max(0, Number(ratingInput.value))) : 0,
        reviews: reviewsInput.value ? Number(reviewsInput.value) : 0,
        bestSeller: bestSellerInput.checked
      };
      if (!payload.name) return;

      submitBtn.disabled = true;
      try {
        if (editingId) await updateProduct(editingId, payload);
        else await addProduct(payload);

        flashSaved();
        resetForm();
        renderList();
        if (window.refreshStorefront) await window.refreshStorefront();
      } catch (err) {
        console.error(err);
        alert("تعذّر حفظ المنتج، حاول تاني.");
      } finally {
        submitBtn.disabled = false;
      }
    });

    function productRow(p) {
      const catName = (CATEGORIES.find(c => c.id === p.category) || {}).name || "";
      const meta = [
        catName,
        priceFmt(p.price),
        p.oldPrice ? `(قبل الخصم ${priceFmt(p.oldPrice)})` : "",
        p.bestSeller ? "الأكثر مبيعًا" : ""
      ].filter(Boolean).join(" · ");

      return `
        <div class="product-row" data-id="${p.id}">
          <div class="product-row__media">${p.image ? `<img src="${p.image}" alt="">` : icon(p.icon)}</div>
          <div>
            <div class="product-row__name">${p.name}</div>
            <div class="product-row__meta">${meta}</div>
          </div>
          <div class="product-row__actions">
            <button type="button" class="edit-btn" data-edit="${p.id}" aria-label="تعديل">${icon("edit")}</button>
            <button type="button" class="delete-btn" data-delete="${p.id}" aria-label="حذف">${icon("trash")}</button>
          </div>
        </div>
      `;
    }

    function renderList() {
      const products = getProducts();
      countLabel.textContent = products.length;
      list.innerHTML = products.length
        ? products.map(productRow).join("")
        : `<div class="products-empty">لسه مفيش منتجات، ضيف أول منتج من النموذج جنب.</div>`;

      list.querySelectorAll("[data-edit]").forEach(b => b.addEventListener("click", () => {
        const p = getProducts().find(x => x.id === b.dataset.edit);
        if (p) startEdit(p);
      }));
      list.querySelectorAll("[data-delete]").forEach(b => b.addEventListener("click", () => {
        const p = getProducts().find(x => x.id === b.dataset.delete);
        if (!p) return;
        if (confirm(`متأكد إنك عايز تحذف "${p.name}"؟ الإجراء ده مش هينفع يتراجع عنه.`)) {
          b.closest(".product-row").style.opacity = ".5";
          deleteProduct(p.id)
            .then(async () => {
              if (editingId === p.id) resetForm();
              renderList();
              if (window.refreshStorefront) await window.refreshStorefront();
            })
            .catch(err => {
              console.error(err);
              alert("تعذّر حذف المنتج، حاول تاني.");
              renderList();
            });
        }
      }));
    }

    renderList();
  }
})();


(function () {
  "use strict";
  const storefront = document.getElementById("storefrontView");
  const adminView = document.getElementById("adminView");

  function isAdminRoute() {
    return location.hash.replace("#", "").startsWith("admin");
  }

  function applyRoute() {
    const admin = isAdminRoute();
    storefront.hidden = admin;
    adminView.hidden = !admin;
    if (admin) {
      window.scrollTo(0, 0);
    } else if (window.refreshStorefront) {
      window.refreshStorefront();
    }
  }

  window.addEventListener("hashchange", applyRoute);
  document.addEventListener("DOMContentLoaded", applyRoute);
})();