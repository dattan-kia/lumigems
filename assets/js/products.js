import products from "./data.js";

const groupedProducts = Object.values(
    products.reduce((acc, product) => {
        if (!acc[product.parentId]) {
            acc[product.parentId] = product;
        }
        return acc;
    }, {})
);

function renderProductGrid(filteredProducts) {
    const productGrid = document.getElementById("product-grid");
    productGrid.innerHTML = ""; // Clear previous products

    if (filteredProducts.length === 0) {
        productGrid.innerHTML = "<p>No products found.</p>";
        return;
    }
    filteredProducts.forEach((product) => {
        const productCard = `
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
        `;
        productGrid.innerHTML += productCard;
    });
}
renderProductGrid(groupedProducts);

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

const checkboxs = document.querySelectorAll("input[name='price']");
checkboxs.forEach((checkbox) => {
    checkbox.addEventListener("change", filterProducts);
});
const radios = document.querySelectorAll("input[name='sort']");
radios.forEach((checkbox) => {
    checkbox.addEventListener("change", filterProducts);
});

function filterProducts() {
    const checkboxes = document.querySelectorAll('input[name="price"]:checked');
    const selectedRanges = Array.from(checkboxes).map((cb) => cb.value);
    const sortOption = document.querySelector(
        'input[name="sort"]:checked'
    )?.value;

    // Filter products by price
    let filteredProducts =
        selectedRanges.length === 0
            ? groupedProducts
            : groupedProducts.filter((product) => {
                  return selectedRanges.some((range) => {
                      const [minPrice, maxPrice] = range.split("-").map(Number);
                      return (
                          product.price >= minPrice && product.price <= maxPrice
                      );
                  });
              });
    // Sort products based on the selected option
    if (sortOption) {
        if (sortOption === "name-asc") {
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortOption === "name-desc") {
            filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
        } else if (sortOption === "price-asc") {
            filteredProducts.sort((a, b) => a.price - b.price);
        } else if (sortOption === "price-desc") {
            filteredProducts.sort((a, b) => b.price - a.price);
        }
    }
    renderProductGrid(filteredProducts);
}
