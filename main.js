// Fetch products from FakeStore API and display them
const API_URL = 'https://fakestoreapi.com/products';

async function fetchProducts() {
  const container = document.getElementById('products');
  container.innerHTML = '<p>Loading products...</p>';

   try {
    const response = await fetch(API_URL);
    const data = await response.json();

    // Clear loading text
    container.innerHTML = '';

    // Loop through products and display them
    data.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('product-card');
      card.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p class="price">$${product.price}</p>
        <a href="Product Detail.html" class="btn">View Details</a>
      `;
      container.appendChild(card);
    });
  } catch (error) {
    container.innerHTML = '<p>Failed to load products. Please try again later.</p>';
    console.error(error);
  }
}

// Run when page loads
document.addEventListener('DOMContentLoaded', fetchProducts);


