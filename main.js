
async function getdata() {

    const response = await axios.get("https://dummyjson.com/product");
    const data = response.data;
    const products = data.products;

    const reuslt = products
        .map(function (product) {
            return `
    <div class="produ">
        <h2>${product.title}</h2>
        <img src="${product.thumbnail}"/>
        <a href="details.html?id=${product.id}"> Details</a> 
    </div>
    `;
        })
        .join("");

    const sw = products.map(function (e) {
        return `
    <div class="swiper-slide"> 
        <img src="${e.thumbnail}"/>
    </div>
    `;
    }).join("");

    document.querySelector(".data").innerHTML = reuslt;
    document.querySelector(".swiper-wrapper").innerHTML = sw;

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        speed: 100,
        slidesPerView: 5,
        autoplay: true,
        clickable: true,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
   
}

getdata();
