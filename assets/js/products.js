import products from "./data.js";
console.log("products", products);

function renderProductGrid() {
    const productGrid = document.getElementById("product-grid");

    products.forEach((product) => {
        const productCard = `
            <div class="rounded-lg overflow-hidden hover:shadow-lg hover:cursor-pointer product-grid-item" data-product-id="${
                product.id
            }">
            <a href="/product-details.html" class="block w-full h-full">
                <img class="w-full aspect-square object-cover" src="${
                    product.image
                }" alt="Product Image">
                <div class="p-4">
                    <h3 class="text-md font-semibold line-clamp-2">${
                        product.name
                    }</h3>
                    <p class="text-gray-900 font-bold">${new Intl.NumberFormat(
                        "vn",
                        {
                            style: "currency",
                            currency: "VND",
                        }
                    ).format(product.price)}</p>
                </div>
                </a>
            </div>
        `;
        productGrid.innerHTML += productCard;
    });
}
renderProductGrid();

const items = document.querySelectorAll(".product-grid-item");
items.forEach((item) => {
    item.addEventListener("click", (e) => {
        const productId = item.dataset.productId;
        const currentProduct = products.find(
            (product) => product.id === productId
        );
        if (!currentProduct) return;

        localStorage.setItem(
            "LUMIGEMS_CURRENT_PRODUCT_ID",
            JSON.stringify(currentProduct.id)
        );
    });
});
