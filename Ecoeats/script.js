const groceryCatalog = [
  ["Aashirvaad Atta 5kg", 245], ["Fortune Chakki Fresh Atta 5kg", 238], ["Pillsbury Atta 5kg", 252], ["Multigrain Atta 5kg", 289],
  ["Sooji Rava 1kg", 62], ["Maida 1kg", 54], ["Besan 1kg", 94], ["Poha Thick 1kg", 78], ["Dalia Broken Wheat 1kg", 72],
  ["Idli Rice 5kg", 330], ["Sona Masoori Rice 5kg", 399], ["Basmati Rice 5kg", 525], ["Brown Rice 1kg", 129], ["Kolam Rice 5kg", 420],
  ["Toor Dal 1kg", 176], ["Moong Dal 1kg", 159], ["Masoor Dal 1kg", 138], ["Urad Dal 1kg", 154], ["Chana Dal 1kg", 112],
  ["Rajma Chitra 1kg", 158], ["Kabuli Chana 1kg", 149], ["Kala Chana 1kg", 118], ["Moth Beans 500g", 86], ["Lobia 1kg", 134],
  ["Fortune Sunflower Oil 1L", 148], ["Saffola Gold Oil 1L", 182], ["Mustard Oil 1L", 169], ["Groundnut Oil 1L", 178], ["Rice Bran Oil 1L", 165],
  ["Organic Sugar 1kg", 59], ["Brown Sugar 1kg", 84], ["Jaggery Powder 1kg", 88], ["Rock Salt 1kg", 46], ["Iodized Salt 1kg", 24],
  ["Turmeric Powder 200g", 52], ["Red Chilli Powder 200g", 69], ["Coriander Powder 200g", 58], ["Garam Masala 100g", 74], ["Cumin Seeds 200g", 82],
  ["Mustard Seeds 200g", 44], ["Jeera Whole 500g", 168], ["Black Pepper 100g", 96], ["Tea Masala 100g", 64], ["Ginger Garlic Paste 200g", 62],
  ["Corn Flakes 875g", 186], ["Instant Oats 1kg", 174], ["Peanut Butter 925g", 315], ["Honey 500g", 225], ["Makhana 250g", 198]
];

const snacksCatalog = [
  ["Lays Classic Salted 52g", 28], ["Lays American Style 52g", 30], ["Kurkure Masala Munch 90g", 26], ["Uncle Chips 60g", 27],
  ["Bingo Mad Angles 72g", 35], ["Haldiram Aloo Bhujia 200g", 68], ["Haldiram Navratan Mix 200g", 72], ["Balaji Wafers 90g", 24],
  ["Bikaneri Bhujia 400g", 128], ["Banana Chips 200g", 86], ["Murukku 200g", 74], ["Khakhra Jeera 200g", 79], ["Masala Peanuts 200g", 66],
  ["Roasted Chana 200g", 52], ["Peri Peri Makhana 100g", 88], ["Salted Cashews 200g", 248], ["Almonds Roasted 200g", 272],
  ["Good Day Butter 200g", 42], ["Marie Gold 250g", 38], ["Parle-G Family Pack", 45], ["Hide and Seek 200g", 58], ["Dark Fantasy Choco Fills", 92],
  ["Oreo Vanilla 120g", 34], ["Sunfeast Mom's Magic", 56], ["Bourbon Biscuits 150g", 40], ["Jim Jam Pops 120g", 34],
  ["Dairy Milk Silk 60g", 88], ["Dairy Milk Crackle 36g", 56], ["Munch Max 32g", 30], ["KitKat 4 Finger", 32], ["Perk Double", 24],
  ["5 Star 40g", 40], ["Snickers Peanut Bar", 55], ["Pulse Candy Pack", 58], ["Kaccha Aam Candy 200g", 52], ["Digestive Biscuits 400g", 124],
  ["Ragi Chips 100g", 62], ["Jowar Puffs 100g", 58], ["Protein Bar Choco", 68], ["Granola Bar Nuts", 44], ["Til Chikki 250g", 64],
  ["Peanut Chikki 250g", 58]
];

const beveragesCatalog = [
  ["Amul Taaza Milk 1L", 68], ["Amul Gold Milk 1L", 74], ["Nandini Milk 1L", 66], ["Mother Dairy Toned 1L", 67],
  ["Buttermilk Masala 1L", 58], ["Sweet Lassi 1L", 72], ["Mango Lassi 200ml", 28], ["Cold Coffee Bottle 250ml", 48],
  ["Coca Cola 750ml", 42], ["Pepsi 750ml", 41], ["Sprite 750ml", 40], ["Thums Up 750ml", 44], ["Limca 750ml", 40],
  ["Maaza Mango Drink 600ml", 42], ["Frooti 1L", 60], ["Slice Mango 1.2L", 72], ["Mixed Fruit Juice 1L", 95],
  ["Orange Juice 1L", 92], ["Apple Juice 1L", 105], ["Pomegranate Juice 1L", 128], ["Coconut Water 1L", 118],
  ["Real Activ Juice 1L", 145], ["Fresh Lemon Juice 1L", 89], ["Rose Sharbat 750ml", 120], ["Khus Sharbat 750ml", 126],
  ["Iced Tea Lemon 500ml", 58], ["Iced Tea Peach 500ml", 62], ["Green Tea 100 Bags", 220], ["Masala Tea 500g", 194],
  ["Premium Assam Tea 1kg", 468], ["Instant Coffee 100g", 176], ["Filter Coffee 200g", 212], ["Cold Brew Can 250ml", 74],
  ["Energy Drink 250ml", 110], ["Sports Drink 750ml", 95], ["Sparkling Water 750ml", 78], ["Sugarcane Juice 300ml", 35],
  ["Jaljeera Drink 300ml", 28], ["Aam Panna 300ml", 32], ["Badam Milk 180ml", 42], ["Mountain Dew 2.25L", 69]
];

const categoryImages = {
  groceries: ["Images/aata.jpg", "Images/besan.jpg", "Images/rice.jpg", "Images/lentil.jpg", "Images/sugar.jpg", "Images/corn flakes.jpg", "Images/oil.jpg"],
  snacks: ["Images/lays.jpg", "Images/oreo.jpg", "Images/chocolate.jpg"],
  beverages: ["Images/milk.jpg", "Images/tea.jpg", "Images/cola.jpg"]
};

const productImageMap = {
  // Fill image path values, e.g. "Images/my-file.jpg"
  "Aashirvaad Atta 5kg": "Images/aashirvaad_aata.jpg",
  "Fortune Chakki Fresh Atta 5kg": "Images/fortune_aata.jpg",
  "Pillsbury Atta 5kg": "Images/pilsbury_aata.jpg",
  "Multigrain Atta 5kg": "Images/mg_aata.jpg",
  "Sooji Rava 1kg": "Images/sooji_rava.jpg",
  "Maida 1kg": "Images/maida.jpg",
  "Besan 1kg": "Images/besan.jpg",
  "Poha Thick 1kg": "Images/poha.jpg",
  "Dalia Broken Wheat 1kg": "Images/dalia.jpg",
  "Idli Rice 5kg": "Images/idli.jpg",
  "Sona Masoori Rice 5kg": "Images/sona.jpg",
  "Basmati Rice 5kg": "Images/basmati.jpg",
  "Brown Rice 1kg": "Images/brown.jpg",
  "Kolam Rice 5kg": "Images/kolam.jpg",
  "Toor Dal 1kg": "Images/toor.jpg",
  "Moong Dal 1kg": "Images/moong.jpg",
  "Masoor Dal 1kg": "Images/masoor.jpg",
  "Urad Dal 1kg": "Images/urad.jpg",
  "Chana Dal 1kg": "Images/chana.jpg",
  "Rajma Chitra 1kg": "Images/rajma.jpg",
  "Kabuli Chana 1kg": "Images/chana.jpg",
  "Kala Chana 1kg": "Images/kala.jpg",
  "Moth Beans 500g": "Images/moth.jpg",
  "Lobia 1kg": "Images/lobia.jpg",
  "Fortune Sunflower Oil 1L": "Images/fortune_sunflower.jpg",
  "Saffola Gold Oil 1L": "Images/saffola_gold.jpg",
  "Mustard Oil 1L": "Images/mustard.jpg",
  "Groundnut Oil 1L": "Images/groundnut.jpg",
  "Rice Bran Oil 1L": "Images/rice_bran.jpg",
  "Organic Sugar 1kg": "Images/sugar.jpg",
  "Brown Sugar 1kg": "Images/brown.jpg",
  "Jaggery Powder 1kg": "Images/jaggery.jpg",
  "Rock Salt 1kg": "Images/rock.jpg",
  "Iodized Salt 1kg": "Images/salt.jpg",
  "Turmeric Powder 200g": "Images/turmeric.jpg",
  "Red Chilli Powder 200g": "Images/chili.jpg",
  "Coriander Powder 200g": "Images/coriander.jpg",
  "Garam Masala 100g": "Images/garam.jpg",
  "Cumin Seeds 200g": "Images/cumin.jpg",
  "Mustard Seeds 200g": "Images/mustard_seeds.jpg",
  "Jeera Whole 500g": "Images/jeera.jpg",
  "Black Pepper 100g": "Images/black_pepper.jpg",
  "Tea Masala 100g": "Images/tea_masala.jpg",
  "Ginger Garlic Paste 200g": "Images/ginger.jpg",
  "Corn Flakes 875g": "Images/kellogs_cf.jpg",
  "Instant Oats 1kg": "Images/oats.jpg",
  "Peanut Butter 925g": "Images/peanut.jpg",
  "Honey 500g": "Images/honey.jpg",
  "Makhana 250g": "Images/makhna.jpg",
  "Lays Classic Salted 52g": "Images/lays_yellow.jpg",
  "Lays American Style 52g": "Images/lays_green.jpg",
  "Kurkure Masala Munch 90g": "Images/kurkure.jpg",
  "Uncle Chips 60g": "Images/unc.jpg",
  "Bingo Mad Angles 72g": "Images/bingo.jpg",
  "Haldiram Aloo Bhujia 200g": "Images/aloo_bhujia.jpg",
  "Haldiram Navratan Mix 200g": "Images/navratan.jpg",
  "Balaji Wafers 90g": "Images/wafers.jpg",
  "Bikaneri Bhujia 400g": "Images/bikaner.jpg",
  "Banana Chips 200g": "Images/bv.jpg",
  "Murukku 200g": "Images/murukku.jpg",
  "Khakhra Jeera 200g": "Images/jeera.jpg",
  "Masala Peanuts 200g": "Images/masala_peanuts.jpg",
  "Roasted Chana 200g": "Images/chana.jpg",
  "Peri Peri Makhana 100g": "Images/peri.jpg",
  "Salted Cashews 200g": "Images/casew.jpg",
  "Almonds Roasted 200g": "Images/almonds.jpg",
  "Good Day Butter 200g": "Images/good.jpg",
  "Marie Gold 250g": "Images/marie.jpg",
  "Parle-G Family Pack": "Images/parleg.jpg",
  "Hide and Seek 200g": "Images/hide.jpg",
  "Dark Fantasy Choco Fills": "Images/dark.jpg",
  "Oreo Vanilla 120g": "Images/oreo.jpg",
  "Sunfeast Mom's Magic": "Images/mom.jpg",
  "Bourbon Biscuits 150g": "Images/bourbon.jpg",
  "Jim Jam Pops 120g": "Images/jim.jpg",
  "Dairy Milk Silk 60g": "Images/dm_silk.jpg",
  "Dairy Milk Crackle 36g": "Images/dm_crackle.jpg",
  "Munch Max 32g": "Images/munch.jpg",
  "KitKat 4 Finger": "Images/kitkat.jpg",
  "Perk Double": "Images/perk.jpg",
  "5 Star 40g": "Images/five_star.jpg",
  "Snickers Peanut Bar": "Images/snickers.jpg",
  "Pulse Candy Pack": "Images/pulse.jpg",
  "Kaccha Aam Candy 200g": "Images/kacha.jpg",
  "Digestive Biscuits 400g": "Images/digestive.jpg",
  "Ragi Chips 100g": "Images/ragi.jpg",
  "Jowar Puffs 100g": "Images/jowar.jpg",
  "Protein Bar Choco": "Images/protien.jpg",
  "Granola Bar Nuts": "Images/granola.jpg",
  "Til Chikki 250g": "Images/til.jpg",
  "Peanut Chikki 250g": "Images/chikki.jpg",
  "Amul Taaza Milk 1L": "Images/amul_taaza.jpg",
  "Amul Gold Milk 1L": "Images/amul_gold.jpg",
  "Nandini Milk 1L": "Images/nandini.jpg",
  "Mother Dairy Toned 1L": "Images/md.jpg",
  "Buttermilk Masala 1L": "Images/buttermilk.jpg",
  "Sweet Lassi 1L": "Images/lassi.jpg",
  "Mango Lassi 200ml": "Images/mango.jpg",
  "Cold Coffee Bottle 250ml": "Images/cold.jpg",
  "Coca Cola 750ml": "Images/cocacola.jpg",
  "Pepsi 750ml": "Images/pepsi.jpg",
  "Sprite 750ml": "Images/sprite.jpg",
  "Thums Up 750ml": "Images/thumsup.jpg",
  "Limca 750ml": "Images/limca.jpg",
  "Maaza Mango Drink 600ml": "Images/maaza.jpg",
  "Frooti 1L": "Images/frooti.jpg",
  "Slice Mango 1.2L": "Images/slice.jpg",
  "Mixed Fruit Juice 1L": "Images/mixed.jpg",
  "Orange Juice 1L": "Images/orange.jpg",
  "Apple Juice 1L": "Images/apple.jpg",
  "Pomegranate Juice 1L": "Images/pom.jpg",
  "Coconut Water 1L": "Images/coco.jpg",
  "Real Activ Juice 1L": "Images/real.jpg",
  "Fresh Lemon Juice 1L": "Images/lemon.jpg",
  "Rose Sharbat 750ml": "Images/rose.jpg",
  "Khus Sharbat 750ml": "Images/khus.jpg",
  "Iced Tea Lemon 500ml": "Images/iced_tea.jpg",
  "Iced Tea Peach 500ml": "Images/peach.jpg",
  "Green Tea 100 Bags": "Images/green_tea.jpg",
  "Masala Tea 500g": "Images/masala_tea.jpg",
  "Premium Assam Tea 1kg": "Images/assam.jpg",
  "Instant Coffee 100g": "Images/coffee.jpg",
  "Filter Coffee 200g": "Images/filter.jpg",
  "Cold Brew Can 250ml": "Images/cold_brew.jpg",
  "Energy Drink 250ml": "Images/energy.jpg",
  "Sports Drink 750ml": "Images/sports.jpg",
  "Sparkling Water 750ml": "Images/sparkling.jpg",
  "Sugarcane Juice 300ml": "Images/sugarcane.jpg",
  "Jaljeera Drink 300ml": "Images/jaljeera.jpg",
  "Aam Panna 300ml": "Images/aam.jpg",
  "Badam Milk 180ml": "Images/badam.jpg",
  "Mountain Dew 2.25L": "Images/mountain_dew.jpg"
};

const categoryExpiryRange = {
  groceries: [8, 24],
  snacks: [5, 18],
  beverages: [3, 14]
};

const categoryImpactRange = {
  groceries: [0.8, 1.6],
  snacks: [0.3, 0.8],
  beverages: [0.5, 1.2]
};

const discountPattern = [18, 20, 22, 24, 25, 28, 30, 32, 35, 38, 40];

function makeProduct(catalogItem, category, index, id) {
  const [name, price] = catalogItem;
  const imagePool = categoryImages[category];
  const [minExpiry, maxExpiry] = categoryExpiryRange[category];
  const [minImpact, maxImpact] = categoryImpactRange[category];

  const expiryDays = minExpiry + ((index * 3 + id) % (maxExpiry - minExpiry + 1));
  const discount = discountPattern[(index + id) % discountPattern.length];
  const originalPrice = Math.round(price * (1 + discount / 100));
  const impactFraction = ((index * 7 + id) % 100) / 100;
  const impactKg = Number((minImpact + (maxImpact - minImpact) * impactFraction).toFixed(1));

  const mappedImage = productImageMap[name];

  return {
    id,
    name,
    category,
    expiryDays,
    price,
    originalPrice,
    image: mappedImage || imagePool[index % imagePool.length],
    impactKg
  };
}

const inventory = [
  ...groceryCatalog.map((item, index) => makeProduct(item, "groceries", index, index + 1)),
  ...snacksCatalog.map((item, index) => makeProduct(item, "snacks", index, groceryCatalog.length + index + 1)),
  ...beveragesCatalog.map((item, index) => makeProduct(item, "beverages", index, groceryCatalog.length + snacksCatalog.length + index + 1))
];

const products = inventory;

const categories = [
  { id: "all", label: "All" },
  { id: "groceries", label: "Groceries" },
  { id: "snacks", label: "Snacks & Chocolates" },
  { id: "beverages", label: "Beverages" }
];

const expiryFilters = [
  { id: "all", label: "All Deals", check: () => true },
  { id: "7", label: "Expiring in 7 Days", check: (days) => days <= 7 },
  { id: "10", label: "Expiring 10 Days", check: (days) => days <= 10 },
  { id: "15", label: "Expiring 15 Days", check: (days) => days <= 15 }
];

const state = {
  selectedCategory: "all",
  selectedExpiry: "all",
  searchTerm: "",
  cart: new Map()
};

const productsGrid = document.getElementById("productsGrid");
const emptyState = document.getElementById("emptyState");
const categoryTabs = document.getElementById("categoryTabs");
const expiryTabs = document.getElementById("expiryTabs");
const searchInput = document.getElementById("searchInput");
const cartCount = document.getElementById("cartCount");
const savedKg = document.getElementById("savedKg");
const cartPanel = document.getElementById("cartPanel");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartToggle = document.getElementById("cartToggle");
const closeCart = document.getElementById("closeCart");
const checkoutBtn = document.getElementById("checkoutBtn");
const toast = document.getElementById("toast");
const promoButtons = Array.from(document.querySelectorAll(".promo-btn"));

function rupees(value) {
  return `₹${value}`;
}

function buildTabs() {
  categoryTabs.innerHTML = categories
    .map((category) => {
      const activeClass = state.selectedCategory === category.id ? "is-active" : "";
      return `<button class="pill-tab ${activeClass}" data-category="${category.id}" role="tab">${category.label}</button>`;
    })
    .join("");

  expiryTabs.innerHTML = expiryFilters
    .map((filter) => {
      const activeClass = state.selectedExpiry === filter.id ? "is-active" : "";
      return `<button class="expiry-tab ${activeClass}" data-expiry="${filter.id}" role="tab">${filter.label}</button>`;
    })
    .join("");
}

function getFilteredProducts() {
  const expiryRule = expiryFilters.find((entry) => entry.id === state.selectedExpiry);

  return products.filter((item) => {
    const categoryMatch = state.selectedCategory === "all" || item.category === state.selectedCategory;
    const expiryMatch = expiryRule.check(item.expiryDays);
    const searchMatch = item.name.toLowerCase().includes(state.searchTerm.toLowerCase());
    return categoryMatch && expiryMatch && searchMatch;
  });
}

function renderProducts() {
  const visibleProducts = getFilteredProducts();

  productsGrid.innerHTML = visibleProducts
    .map(
      (item, index) => `
      <article class="card" style="animation-delay:${index * 35}ms">
        <span class="badge">Limited Stock</span>
        <img src="${item.image}" alt="${item.name}">
        <p class="name">${item.name}</p>
        <div class="price-row">
          <p class="price">${rupees(item.price)}</p>
          <p class="original">${rupees(item.originalPrice)}</p>
        </div>
        <p class="expiry">Expires in ${item.expiryDays} Days</p>
        <button class="cart-btn" data-product-id="${item.id}">
          <i class="fa-solid fa-cart-shopping"></i>Add to Cart
        </button>
      </article>
    `
    )
    .join("");

  emptyState.hidden = visibleProducts.length !== 0;
}

function renderCart() {
  const cartEntries = [...state.cart.entries()];
  if (cartEntries.length === 0) {
    cartItems.innerHTML = '<p class="cart-empty">Your cart is empty.</p>';
    cartTotal.textContent = "₹0";
    cartCount.textContent = "0";
    savedKg.textContent = "0";
    return;
  }

  let total = 0;
  let count = 0;
  let impact = 0;

  cartItems.innerHTML = cartEntries
    .map(([id, qty]) => {
      const item = products.find((product) => product.id === id);
      total += item.price * qty;
      count += qty;
      impact += item.impactKg * qty;
      return `
        <div class="cart-row">
          <img class="cart-thumb" src="${item.image}" alt="${item.name}">
          <div>
            <p class="cart-name">${item.name}</p>
            <p class="cart-meta">${rupees(item.price)} each</p>
            <div class="cart-actions">
              <button class="cart-action-btn" data-cart-action="decrease" data-product-id="${id}">-1</button>
              <button class="cart-action-btn" data-cart-action="increase" data-product-id="${id}">+1</button>
              <button class="cart-action-btn remove" data-cart-action="remove" data-product-id="${id}">Remove</button>
            </div>
          </div>
          <p class="cart-qty">x${qty}</p>
        </div>
      `;
    })
    .join("");

  cartTotal.textContent = rupees(total);
  cartCount.textContent = String(count);
  savedKg.textContent = impact.toFixed(1).replace(/\.0$/, "");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timeoutId);
  showToast.timeoutId = setTimeout(() => toast.classList.remove("show"), 1400);
}

function attachEvents() {
  categoryTabs.addEventListener("click", (event) => {
    const tab = event.target.closest("[data-category]");
    if (!tab) {
      return;
    }
    state.selectedCategory = tab.dataset.category;
    buildTabs();
    renderProducts();
  });

  expiryTabs.addEventListener("click", (event) => {
    const tab = event.target.closest("[data-expiry]");
    if (!tab) {
      return;
    }
    state.selectedExpiry = tab.dataset.expiry;
    buildTabs();
    renderProducts();
  });

  searchInput.addEventListener("input", (event) => {
    state.searchTerm = event.target.value.trim();
    renderProducts();
  });

  productsGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-product-id]");
    if (!button) {
      return;
    }

    const productId = Number(button.dataset.productId);
    const quantity = state.cart.get(productId) || 0;
    state.cart.set(productId, quantity + 1);
    renderCart();

    const item = products.find((product) => product.id === productId);
    showToast(`${item.name} added to cart`);
  });

  cartItems.addEventListener("click", (event) => {
    const actionBtn = event.target.closest("[data-cart-action]");
    if (!actionBtn) {
      return;
    }

    const productId = Number(actionBtn.dataset.productId);
    const action = actionBtn.dataset.cartAction;
    const currentQty = state.cart.get(productId) || 0;

    if (action === "increase") {
      state.cart.set(productId, currentQty + 1);
    }

    if (action === "decrease") {
      const nextQty = currentQty - 1;
      if (nextQty <= 0) {
        state.cart.delete(productId);
      } else {
        state.cart.set(productId, nextQty);
      }
    }

    if (action === "remove") {
      state.cart.delete(productId);
      showToast("Item removed from cart");
    }

    renderCart();
  });

  cartToggle.addEventListener("click", () => cartPanel.classList.add("open"));
  closeCart.addEventListener("click", () => cartPanel.classList.remove("open"));

  checkoutBtn.addEventListener("click", () => {
    if (state.cart.size === 0) {
      showToast("Cart is empty");
      return;
    }
    state.cart.clear();
    renderCart();
    showToast("Checkout complete. Food rescued!");
    cartPanel.classList.remove("open");
  });

  promoButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const quick = button.dataset.quick;
      if (quick === "soon") {
        state.selectedExpiry = "7";
      }
      if (quick === "discount") {
        state.selectedExpiry = "10";
      }
      if (quick === "daily") {
        state.selectedCategory = "groceries";
      }
      if (quick === "impact") {
        cartPanel.classList.add("open");
      }
      buildTabs();
      renderProducts();
    });
  });
}

if (productsGrid) {
  buildTabs();
  renderProducts();
  renderCart();
  attachEvents();
}
