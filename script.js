// NIFITIVA Premium Amazon Affiliate Hub - Main Core Logic
// Structured product inventory, fuzzy searching, category tabs filtering, and toast controls

const PRODUCTS = [
  {
    id: 1,
    name: "3D Sandscape In Motion Display",
    url: "https://amzn.to/4wg0bKQ",
    image: "https://media.bio.site/sites/590d4e5c-2c2f-401d-acca-7d3d15156ab4/2YMopVyFdSAndZYoVkVq2Z.webp",
    category: "useful finds",
    description: "Mesmerizing moving sand picture that creates a dynamic, relaxing frame of shifting golden sands. A gorgeous tabletop accent for office desks or living room shelves."
  },
  {
    id: 2,
    name: "LED Vine Wall Light",
    url: "https://amzn.to/4d57NXW",
    image: "https://media.bio.site/sites/590d4e5c-2c2f-401d-acca-7d3d15156ab4/q7WAk8TY5PnEZacpYBwwA9.jpg",
    category: "lighting",
    description: "Cozy, warm cascading artificial ivy leaves integrated with soft glowing micro-LED lights. Perfect for adding a magical, biological ambiance to bedrooms and reading nooks."
  },
  {
    id: 3,
    name: "Aesthetic Room Decor Items",
    url: "https://amzn.to/4dvaNOA",
    image: "https://media.bio.site/sites/590d4e5c-2c2f-401d-acca-7d3d15156ab4/q8Gg8MXp2n8jxeVuHPQtZf.jpg",
    category: "decor",
    description: "Handpicked selection of modern minimalist vases and abstract ceramic artifacts. Curated specifically to transform empty console tables into highly-styled gallery spaces."
  },
  {
    id: 4,
    name: "3D Cube Pixelated Box Illusion Wall Sticker",
    url: "https://amzn.to/4daXyRV",
    image: "https://media.bio.site/sites/590d4e5c-2c2f-401d-acca-7d3d15156ab4/3KBBEMhLiP4ohReDtq7Aj6.jpg",
    category: "decor",
    description: "Striking geometric optical illusion wall decal that plays with perspective and depth. Adds an instant, artistic modern tech edge to accent walls."
  },
  {
    id: 5,
    name: "Neon LED Strip Lights",
    url: "https://amzn.to/3QWv9HN",
    image: "https://media.bio.site/sites/590d4e5c-2c2f-401d-acca-7d3d15156ab4/Stg5aG6yA3f8437dsEhLAe.jpg",
    category: "lighting",
    description: "Flexible, ultra-bright neon string lights designed to outline custom setups, desk backings, or headboards. High-intensity diffusion yields solid, continuous light lines."
  },
  {
    id: 6,
    name: "Wireless Motion Sensor Light for Home",
    url: "https://amzn.to/4f7mj3S",
    image: "https://media.bio.site/sites/590d4e5c-2c2f-401d-acca-7d3d15156ab4/qJiRxfsp6aXoJzNaf5XCJg.jpg",
    category: "lighting",
    description: "Magnetic, rechargeable smart LED bars that illuminate automatically upon sensing movement. Sleek design fits under cabinets, inside wardrobes, or along dark stairways."
  },
  {
    id: 7,
    name: "Big Square Mirror Stickers for Wall",
    url: "https://amzn.to/4dfYxAt",
    image: "https://media.bio.site/sites/590d4e5c-2c2f-401d-acca-7d3d15156ab4/TGDeFtwF4VqaED4zBLnBkR.jpg",
    category: "decor",
    description: "Acrylic adhesive mirror panels to construct customized patterns on hallways or doors. Creates a spacious feeling, bounces light, and adds geometric symmetry."
  },
  {
    id: 8,
    name: "Peel and Stick Wall Tile",
    url: "https://amzn.to/4wcfEeY",
    image: "https://media.bio.site/sites/590d4e5c-2c2f-401d-acca-7d3d15156ab4/7Lw7TMiaz4CnybrPCV5heU.jpg",
    category: "decor",
    description: "Waterproof, realistic self-adhesive premium tiles for a luxurious and quick kitchen backsplash or bathroom visual upgrade."
  },
  {
    id: 9,
    name: "Motivational Wall Art Decor (Set of 9 Posters)",
    url: "https://amzn.to/4etv880",
    image: "https://media.bio.site/sites/590d4e5c-2c2f-401d-acca-7d3d15156ab4/hbviuBtthQjxtaxWjZ74Bo.jpg",
    category: "decor",
    description: "Inspirational typographic art prints to build a motivating, high-aesthetic gallery wall in your study space or office."
  },
  {
    id: 10,
    name: "Modern Wooden Pinecone Pendant Ceiling Light",
    url: "https://amzn.to/4ddbpXY",
    image: "https://media.bio.site/sites/590d4e5c-2c2f-401d-acca-7d3d15156ab4/u9Laig32U3ozxfEZgmysRG.jpg",
    category: "lighting",
    description: "Architectural Scandinavian-style layered wooden ceiling light that casts gorgeous warm geometric shadows."
  },
  {
    id: 11,
    name: "Wood Computer Desk with Shelf",
    url: "https://amzn.to/42oEPxo",
    image: "https://media.bio.site/sites/590d4e5c-2c2f-401d-acca-7d3d15156ab4/itZeaVjusTXaevhmxZYGQF.jpg",
    category: "furniture",
    description: "Sleek, minimalist dual-level workspace featuring robust walnut finish and matching upper storage shelves."
  },
  {
    id: 12,
    name: "VanSmaGo Plastic Star Projector Night Light",
    url: "https://amzn.to/49IKnGP",
    image: "https://media.bio.site/sites/590d4e5c-2c2f-401d-acca-7d3d15156ab4/GnSNskza6DUeoYm9b9VZd6.jpg",
    category: "lighting",
    description: "Advanced planetary nebula cloud projection light with matching Bluetooth speakers for a full cosmos experience."
  },
  {
    id: 13,
    name: "Wave Arched Mirror (Beige & Cream)",
    url: "https://amzn.to/49euxnb",
    image: "https://media.bio.site/sites/590d4e5c-2c2f-401d-acca-7d3d15156ab4/4ySBjtPu9TYZWyc7jmXdr9.jpg",
    category: "furniture",
    description: "A breathtaking statement dressing mirror with a luxurious, sculptural waved frame in soft, cozy aesthetic colors."
  },
  {
    id: 14,
    name: "Irregular Makeup Mirror Tabletop Vanity Mirror",
    url: "https://amzn.to/49EpSeH",
    image: "https://media.bio.site/sites/590d4e5c-2c2f-401d-acca-7d3d15156ab4/S3ohHeSQUy8BsYmVMQdhqd.jpg",
    category: "furniture",
    description: "A high-end, frameless asymmetric vanity mirror with a matching organic wooden stand for retro dresser layouts."
  }
];

// State variables
let currentSearch = "";
let currentCategory = "all";

// Document Elements
const gridContainer = document.getElementById("product-grid");
const searchInput = document.getElementById("search-input");
const categoryButtons = document.querySelectorAll(".filter-btn");
const toastBox = document.getElementById("toast");
const toastText = document.getElementById("toast-text");
const navbar = document.querySelector(".navbar");

// Core initialization
window.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  setupEventListeners();
});

// Setup DOM event listeners
function setupEventListeners() {
  // Real-time search filter
  searchInput.addEventListener("input", (e) => {
    currentSearch = e.target.value.toLowerCase().trim();
    renderProducts();
  });

  // Category selection click handlers
  categoryButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Toggle active states
      categoryButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // Filter and render
      currentCategory = btn.getAttribute("data-category");
      renderProducts();
    });
  });

  // Sticky navbar transition on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}

// Main rendering engine
function renderProducts() {
  // Filter core inventory array
  const filtered = PRODUCTS.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(currentSearch) ||
      product.description.toLowerCase().includes(currentSearch);
      
    const matchesCategory =
      currentCategory === "all" || product.category === currentCategory;

    return matchesSearch && matchesCategory;
  });

  // Handle empty search results state
  if (filtered.length === 0) {
    gridContainer.innerHTML = `
      <div class="empty-state">
        <i class="fa-solid fa-face-sad-tear animate-pulse"></i>
        <h3>No Products Discovered</h3>
        <p>We couldn't find matches for "${currentSearch}" in this category.</p>
      </div>
    `;
    return;
  }

  // Generate and insert product cards HTML
  gridContainer.innerHTML = filtered.map((product) => `
    <article class="product-card" data-category="${product.category}">
      <span class="card-badge">${product.category}</span>
      
      <div class="product-image-wrapper">
        <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
        
        <div class="product-action-overlay">
          <button class="copy-link-btn" title="Copy Affiliate Link" onclick="copyLink('${product.url}')">
            <i class="fa-regular fa-copy"></i>
          </button>
        </div>
      </div>

      <div class="product-content">
        <h3 class="product-title">${product.name}</h3>
        <p class="product-desc">${product.description}</p>
        
        <a href="${product.url}" target="_blank" rel="noopener noreferrer" class="buy-button">
          <span>View on Amazon</span>
          <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </article>
  `).join("");
}

// Utility to copy affiliate shortlink and display custom toast alert
function copyLink(url) {
  navigator.clipboard.writeText(url).then(() => {
    showToast("Affiliate link copied to clipboard!");
  }).catch(() => {
    // Fallback in case clipboard permission is denied
    const textarea = document.createElement("textarea");
    textarea.value = url;
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand("copy");
      showToast("Affiliate link copied!");
    } catch (err) {
      console.error("Copy failed: ", err);
    }
    document.body.removeChild(textarea);
  });
}

// Display custom notifications toast
function showToast(message) {
  toastText.innerText = message;
  toastBox.classList.add("show");
  
  // Clean dismissal
  setTimeout(() => {
    toastBox.classList.remove("show");
  }, 2300);
}
