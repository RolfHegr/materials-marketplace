const materials = [
  { name: "Carrara Marble", type: "wall", color: "#e8e4df", colorFamily: "white", co2: 12.4, fire: "A1", price: 185, finish: "glossy", use: "indoor", cert: ["EPD"], brand: "Stonemark", leadDays: 14 },
  { name: "Brushed Concrete", type: "floor", color: "#9a9a96", colorFamily: "grey", co2: 8.1, fire: "A1", price: 62, finish: "brushed", use: "both", cert: ["EPD","BREEAM"], brand: "Cemex", leadDays: 7 },
  { name: "White Oak Plank", type: "floor", color: "#c8a97e", colorFamily: "brown", co2: 3.2, fire: "B", price: 94, finish: "matte", use: "indoor", cert: ["Nordic Swan","EPD"], brand: "Dinesen", leadDays: 21 },
  { name: "Acoustic Felt", type: "ceiling", color: "#5c5c5c", colorFamily: "grey", co2: 5.7, fire: "B", price: 48, finish: "textured", use: "indoor", cert: ["Nordic Swan"], brand: "FilzFelt", leadDays: 10 },
  { name: "Terracotta Tile", type: "wall", color: "#c4724e", colorFamily: "red", co2: 6.3, fire: "A1", price: 55, finish: "matte", use: "both", cert: ["EPD"], brand: "Mutina", leadDays: 14 },
  { name: "Zinc Panel", type: "facade", color: "#a8b0b4", colorFamily: "grey", co2: 15.8, fire: "A1", price: 210, finish: "brushed", use: "outdoor", cert: ["EPD","BREEAM"], brand: "Rheinzink", leadDays: 28 },
  { name: "Cork Sheet", type: "floor", color: "#d4b896", colorFamily: "brown", co2: 1.8, fire: "C", price: 38, finish: "matte", use: "indoor", cert: ["Nordic Swan","EPD"], brand: "Amorim", leadDays: 5 },
  { name: "Gypsum Board", type: "ceiling", color: "#f0ece6", colorFamily: "white", co2: 4.2, fire: "A2", price: 22, finish: "matte", use: "indoor", cert: ["EPD"], brand: "Knauf", leadDays: 3 },
  { name: "Recycled Glass Tile", type: "wall", color: "#7ba3a0", colorFamily: "green", co2: 2.9, fire: "A1", price: 78, finish: "glossy", use: "both", cert: ["BREEAM","EPD"], brand: "Fireclay", leadDays: 18 },
  { name: "Bamboo Panel", type: "ceiling", color: "#c9b47f", colorFamily: "brown", co2: 1.4, fire: "C", price: 56, finish: "matte", use: "indoor", cert: ["Nordic Swan"], brand: "MOSO", leadDays: 12 },
  { name: "Basalt Stone", type: "floor", color: "#3d3d3d", colorFamily: "black", co2: 9.6, fire: "A1", price: 142, finish: "textured", use: "both", cert: ["EPD"], brand: "Stonemark", leadDays: 21 },
  { name: "Mineral Wool", type: "ceiling", color: "#d6d0c4", colorFamily: "white", co2: 7.1, fire: "A1", price: 34, finish: "textured", use: "indoor", cert: ["EPD","BREEAM"], brand: "Rockwool", leadDays: 5 },
  { name: "Slate Cladding", type: "facade", color: "#4a4a4f", colorFamily: "black", co2: 10.2, fire: "A1", price: 168, finish: "textured", use: "outdoor", cert: ["EPD"], brand: "Cupa", leadDays: 25 },
  { name: "Linoleum Roll", type: "floor", color: "#a0b07a", colorFamily: "green", co2: 2.1, fire: "B", price: 44, finish: "matte", use: "indoor", cert: ["Nordic Swan","BREEAM","EPD"], brand: "Forbo", leadDays: 7 },
  { name: "Ceramic Facade Tile", type: "facade", color: "#e0d5c0", colorFamily: "white", co2: 7.8, fire: "A1", price: 125, finish: "glossy", use: "outdoor", cert: ["EPD"], brand: "Agrob Buchtal", leadDays: 30 },
  { name: "Wool Carpet Tile", type: "floor", color: "#8b7d6b", colorFamily: "brown", co2: 4.5, fire: "B", price: 68, finish: "textured", use: "indoor", cert: ["Nordic Swan"], brand: "Ege", leadDays: 10 },
  { name: "Copper Standing Seam", type: "roof", color: "#b87333", colorFamily: "red", co2: 18.3, fire: "A1", price: 320, finish: "brushed", use: "outdoor", cert: ["EPD"], brand: "KME", leadDays: 35 },
  { name: "Green Roof Substrate", type: "roof", color: "#6b8e4e", colorFamily: "green", co2: 0.8, fire: "E", price: 45, finish: "textured", use: "outdoor", cert: ["BREEAM"], brand: "ZinCo", leadDays: 14 },
];

const allTypes = [...new Set(materials.map(m=>m.type))];
const allFire = [...new Set(materials.map(m=>m.fire))].sort();
const allFinish = [...new Set(materials.map(m=>m.finish))];
const allColorFamily = [...new Set(materials.map(m=>m.colorFamily))];
const allCert = [...new Set(materials.flatMap(m=>m.cert))];
const allBrand = [...new Set(materials.map(m=>m.brand))].sort();
const allUse = ["indoor","outdoor","both"];

function renderCards(containerId, mats, cardRenderer) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  mats.forEach(m => { container.innerHTML += cardRenderer(m); });
  if (mats.length === 0) {
    container.innerHTML = '<p class="no-results">No materials match your filters.</p>';
  }
}

function filterMaterials() {
  const search = (document.getElementById('search')?.value || '').toLowerCase();
  const cat = document.getElementById('category')?.value || 'all';
  const minPrice = parseFloat(document.getElementById('minPrice')?.value) || 0;
  const maxPrice = parseFloat(document.getElementById('maxPrice')?.value) || 9999;
  return materials.filter(m => {
    const matchSearch = m.name.toLowerCase().includes(search) || m.type.includes(search);
    const matchCat = cat === 'all' || m.type === cat;
    const matchPrice = m.price >= minPrice && m.price <= maxPrice;
    return matchSearch && matchCat && matchPrice;
  });
}
