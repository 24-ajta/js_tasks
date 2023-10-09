// document.addEventListener('DOMContentLoaded',function(){
//     let products = document.querySelector('.products');
//     async function fetchProducts(url){
//        try {
//         let data = await fetch(url);
//         let result = await data.json();

//         for(let i=0;i<result.length;i++){
//             let description = result[i].description;
//             let title = result[i].title;
        
//         products.innerHTML += `
//         <div class="product">
//         <img class="product_img" src="${result[i].image[1]}" alt="${result[i].category}">
//         <div class="product_content">
//             <h2 class="product_title">${result[i].title[1]}</h2>
//             <h4 class="product_category">${result[i].category}</h4>
//             <p class="product_description">${result[i].description[1]}</p>
//             <div class="product_details">
//                 <h3 class="product_price">${result[i].price[1]}</h3>
//                 <h4 class=product_rating>${result[i].rating.rate[i]}</h4>
//             </div>
//         </div>
//     </div>
//     `;}
//         }catch (error) {
//             console.log(error)
//        }
//     }

//     fetchProducts('https://fakestoreapi.com/products')
// })
document.addEventListener('DOMContentLoaded', async function() {
    let products = document.querySelector('.products');
    async function fetchProducts(url) {
        try {
            let data = await fetch(url);
            console.log("data",data);
            let response = await data.json()
            console.log("response",response);
            console.log(typeof(response));
            console.log("data",typeof(data));
            for (i = 0; i < response.length; i++) {
                let description = response[i].description;
                let title = response[i].title;
                products.innerHTML += `
       <div class="product" style = "border:1px solid violet; display:flex; flex-wrap:wrap; flex-direction:column; width:500px; height:500px;padding: 1em; margin:2em;">
           <img width="100px" src="${response[i].image}" alt="${
          response[i].category
        }" class="product-img">
        <h2 class="product_title">${response[i].title}</h2>
        <h4 class="product_category">${response[i].category}</h4>
       
       <div class="product_details" style= "display:flex; flex-wrap:wrap;justify-content:space-between;  ">
       <div class="product_price"> <h3 >${response[i].price}</h3></div>
       <div class="product_rating"> <h4 >${response[i].rating.rate}</h4></div>
                      
                   </div>
                   </div>
       `;
            }
        } catch (err) {
            console.log(err);
        }
    }
    
    await fetchProducts('https://fakestoreapi.com/products');
});
