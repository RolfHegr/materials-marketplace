const materials = [
  { name: "Carrara Marble", type: "wall", color: "#e8e4df", co2: 12.4, fire: "A1", price: 185 },
  { name: "Brushed Concrete", type: "floor", color: "#9a9a96", co2: 8.1, fire: "A1", price: 62 },
  { name: "White Oak Plank", type: "floor", color: "#c8a97e", co2: 3.2, fire: "B", price: 94 },
  { name: "Acoustic Felt", type: "ceiling", color: "#5c5c5c", co2: 5.7, fire: "B-s1", price: 48 },
  { name: "Terracotta Tile", type: "wall", color: "#c4724e", co2: 6.3, fire: "A1", price: 55 },
  { name: "Zinc Panel", type: "wall", color: "#a8b0b4", co2: 15.8, fire: "A1", price: 210 },
  { name: "Cork Sheet", type: "floor", color: "#d4b896", co2: 1.8, fire: "C", price: 38 },
  { name: "Gypsum Board", type: "ceiling", color: "#f0ece6", co2: 4.2, fire: "A2", price: 22 },
  { name: "Recycled Glass Tile", type: "wall", color: "#7ba3a0", co2: 2.9, fire: "A1", price: 78 },
  { name: "Bamboo Panel", type: "ceiling", color: "#c9b47f", co2: 1.4, fire: "C", price: 56 },
  { name: "Basalt Stone", type: "floor", color: "#3d3d3d", co2: 9.6, fire: "A1", price: 142 },
  { name: "Mineral Wool", type: "ceiling", color: "#d6d0c4", co2: 7.1, fire: "A1", price: 34 },
];

function renderCards(containerId, materials, cardRenderer) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  materials.forEach(m => {
    container.innerHTML += cardRenderer(m);
  });
  if (materials.length === 0) {
    container.innerHTML = '<p class="no-results">No materials match your filters.</p>';
  }
}

function filterMaterials() {
  const search = (document.getElementById('search')?.value || '').toLowerCase();
  const cat = document.getElementById('category')?.value || 'all';
  const minPrice = parseFloat(document.getElementById('minPrice')?.value) || 0;
  const maxPrice = parseFloat(document.getElementById('maxPrice')?.value) || 999;
  return materials.filter(m => {
    const matchSearch = m.name.toLowerCase().includes(search) || m.type.includes(search);
    const matchCat = cat === 'all' || m.type === cat;
    const matchPrice = m.price >= minPrice && m.price <= maxPrice;
    return matchSearch && matchCat && matchPrice;
  });
}
