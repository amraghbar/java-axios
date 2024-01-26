
async function getproduct() {
    
        const urlSearchParams = new URLSearchParams(window.location.search);
        const id = urlSearchParams.get("id");

        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        const data = response.data;

        const { title, thumbnail, description, price, discountPercentage, rating, stock, brand, category } = data;

        document.querySelector(".details").innerHTML =
            `<h2>${title}</h2>
            <p>${description}</p>
            <p>Price: $${price}</p>
            <p>Discount: ${discountPercentage}</p>
            <p>Rating: ${rating}</p>
            <p>Stock: ${stock}</p>
            <p>Brand: ${brand}</p>
            <p>Category: ${category}</p>
            <img src="${thumbnail}" alt=" Image" style="max-width: 100%;">`;
   
}
getproduct();
