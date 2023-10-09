document.addEventListener('DOMContentLoaded',function(){
    let products = document.querySelector('.products');
    async function fetchProducts(url){
        let data = await fetch(url);
        let result = await data.json();

        for(let i=0;i<result.length;i++){
            let description = result[i].description;
            let title = result[i].title;
        }
        products.innerHTML += `
        <div class="product">
        <img class="product_img" src="${result[i].images[1]}" alt="${result[i].category.name}">
        <div class="product_content">
            <h2 class="product_title">${result[i].title[1]}</h2>
            <h4 class="product_category">${result[i].category.name}</h4>
            <p class="product_description">${result[i].description[1]}</p>
            <div class="product_details">
                <h3 class="product_price">${result[i].price[1]}</h3>
                
            </div>
        </div>
    </div>
    `;
    }
    fetchProducts('https://fakestoreapi.com/products')
})