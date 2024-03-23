const products = [
    { name: 'HP 1', price: 'Rp. 1.000.000', image: 'img/hp1.jpeg', Detail: 'Hp Bagus' },
    { name: 'HP 2', price: 'Rp. 1.000.000', image: 'img/hp2.jpeg', Detail: 'Hp Bagus' },
    { name: 'HP 3', price: 'Rp. 1.000.000', image: 'img/hp3.jpeg', Detail: 'Hp Bagus' },
    { name: 'HP 4', price: 'Rp. 1.000.000', image: 'img/hp4.jpeg', Detail: 'Hp Bagus' },
    { name: 'HP 5', price: 'Rp. 1.000.000', image: 'img/hp5.jpeg', Detail: 'Hp Bagus' },
    { name: 'HP 6', price: 'Rp. 1.000.000', image: 'img/hp6.jpeg', Detail: 'Hp Bagus' },
    { name: 'HP 7', price: 'Rp. 1.000.000', image: 'img/hp7.jpeg', Detail: 'Hp Bagus' },
    { name: 'HP 8', price: 'Rp. 1.000.000', image: 'img/hp8.jpeg', Detail: 'Hp Bagus' },

];

const productContainer = document.getElementById('products');

products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card blue';
    
    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <p>Nama: ${product.name}</p>
        <p>Harga: ${product.price}</p>
        <p>Detail: ${product.Detail}</p>`;
    
     productContainer.appendChild(productCard);
});