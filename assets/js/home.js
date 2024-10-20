import products, { blogs } from "./data.js";

function renderTopProducts(products) {
    // Sort products by priority in descending order
    const sortedProducts = products.sort((a, b) => b.priority - a.priority);
    // Get the top 3 products
    const topProducts = sortedProducts.slice(0, 3);
    const popularDOM = document.getElementById("popular-products");
    const result = generateProductItem(topProducts);
    popularDOM.innerHTML = result;
}
function renderNewestProducts(products) {
    const sortedByDate = products.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    // Get the top 3 products
    const topNewestProducts = sortedByDate.slice(0, 3);
    const newestDom = document.getElementById("newest-products");
    const result = generateProductItem(topNewestProducts);
    newestDom.innerHTML = result;
}
function generateProductItem(products) {
    let HTML = "";
    products.forEach(
        (product, index) =>
            (HTML += `
                        <div class="rounded-lg overflow-hidden hover:shadow-lg hover:cursor-pointer product-grid-item" data-product-id="${
                            product.id
                        }">
                            <a href="../../../lumigems/product-details.html" class="block w-full h-full">
                                <img class="w-full aspect-square object-cover" src="${
                                    product.image
                                }" alt="Product Image">
                                <div class="p-4">
                                    <h3 class="text-md font-semibold line-clamp-1">${
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
                    `)
    );
    return HTML;
}

renderTopProducts(products);
renderNewestProducts(products);

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
const blogDom = document.getElementById("blog-grid");

function renderBlogGrid() {
    let blogHTML = "";
    blogs.slice(0, 4).forEach((blog) => {
        blogHTML += `
         <div class="rounded-lg overflow-hidden">
            <a href="${blog.url}">
                <div
                    class="w-full aspect-video rounded-lg mb-4 border"
                >
                    <img
                        src="${blog.image}"
                        alt="${blog.title}"
                        class="w-full h-full object-cover rounded-lg"
                    />
                </div>

                <p class="text-center text-black font-semibold">
                ${blog.title}
                </p>
               
            </a>
        </div>
        `;
    });
    blogDom.innerHTML = blogHTML;
}

renderBlogGrid();
