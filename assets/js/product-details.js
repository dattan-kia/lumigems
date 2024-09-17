import products from "./data.js";
const currentProductID = JSON.parse(
    localStorage.getItem("LUMIGEMS_CURRENT_PRODUCT_ID")
);
const carts = JSON.parse(localStorage.getItem("LUMIGEMS_CART")) ?? [];
function renderProductDetails() {
    const currentProduct = products.find(
        (product) => product.id === currentProductID
    );

    if (!currentProduct) {
        console.log("Product not found");
        return;
    }
    const dom = document.getElementById("product-details");
    dom.innerHTML = `
     <!-- Product Image -->
    <div class="flex justify-center aspect-square">
        <img
            src="${currentProduct.image}"
            alt="${currentProduct.name}"
            class="w-full h-auto object-cover rounded-lg shadow-md"
        />
    </div>

    <!-- Product Details -->
    <div>
        <!-- Product Title -->
        <h1 class="text-2xl font-bold mb-4">
            ${currentProduct.name}
        </h1>
        <p class="text-sm text-gray-500 mb-2">SKU: ${currentProduct.id}</p>

        <!-- Product Price -->
        <p class="text-3xl font-semibold text-gray-900 mb-4">
        ${new Intl.NumberFormat("vn", {
            style: "currency",
            currency: "VND",
        }).format(currentProduct.price)}
        </p>

        <!-- Stock Status -->
        <p class="text-green-500 mb-4">Tình trạng: Còn hàng</p>

        <!-- Variants (Selection) -->
        <!-- <div class="mb-6">
            <label for="variants" class="font-medium mb-2 block"
                >Kiểu dáng:</label
            >
            <div class="flex space-x-2">
                <select id="variants" class="border rounded-lg p-2">
                    <option value="no1">No1</option>
                    <option value="no2">No2</option>
                    <option value="no3">No3</option>
                    <option value="no4">No4</option>
                </select>
            </div>
        </div> -->

        <!-- Quantity Selector -->
        <div class="mb-6 flex items-center space-x-4">
            <label for="quantity" class="font-medium"
                >Số lượng:</label
            >
            <div class="flex items-center space-x-2">
                <button
                    class="border rounded-full w-8 h-8 flex items-center justify-center leading-8 text-gray-600"
                     id="decrease"
                >
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                    </svg>

                </button>
                <input
                    id="quantity"
                    type="text"
                    disabled
                    class="w-12 text-center border rounded-lg outline-none"
                    value="1"
                />
                <button
                    class="border rounded-full w-8 h-8 flex items-center justify-center leading-8 text-gray-600"
                 id="increase"
                    >
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>

                </button>
            </div>
        </div>

        <!-- Buy Button -->
        <button
            class="bg-black text-white px-6 py-3 rounded-lg font-semibold w-full"
            id="place-order-button"
        >
            MUA NGAY
        </button>

        <!-- Additional Info -->
        <div class="mt-6 space-y-4">
            <div class="flex items-center space-x-2">
                <i class="fas fa-check text-green-500"></i>
                <p>Thanh toán tiện lợi</p>
            </div>
            <div class="flex items-center space-x-2">
                <i class="fas fa-truck text-green-500"></i>
                <p>
                    Miễn phí vận chuyển cho đơn hàng từ 1,000,000₫
                </p>
            </div>
            <div class="flex items-center space-x-2">
                <i class="fas fa-gift text-green-500"></i>
                <p>Quà tặng bất ngờ cho mọi đơn hàng</p>
            </div>
            <div class="flex items-center space-x-2">
                <i class="fas fa-hands text-green-500"></i>
                <p>Làm thủ công bằng cả trái tim</p>
            </div>
        </div>
    </div>
    `;
}
renderProductDetails();

// Select the buttons and input
const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const quantityInput = document.getElementById("quantity");
const placeOrderBtn = document.getElementById("place-order-button");
// Initial quantity value
let quantity = 1;

// Function to update the quantity value in the input field
function updateQuantity() {
    quantityInput.value = quantity;
}

// Decrease quantity
decreaseBtn.addEventListener("click", function () {
    if (quantity > 1) {
        quantity--;
        updateQuantity();
    }
});

// Increase quantity
increaseBtn.addEventListener("click", function () {
    quantity++;
    updateQuantity();
});

placeOrderBtn.addEventListener("click", function () {
    const isOrdered = carts.find(
        (order) => order.productId === currentProductID
    );
    if (isOrdered) {
        const newCart = carts.map((order) =>
            order.productId === currentProductID
                ? { ...order, quantity: order.quantity + quantity }
                : order
        );
        localStorage.setItem("LUMIGEMS_CART", JSON.stringify(newCart));
    } else {
        const newCart = [...carts, { quantity, productId: currentProductID }];
        localStorage.setItem("LUMIGEMS_CART", JSON.stringify(newCart));
    }
    Toastify({
        text: "Place order successfully",
        duration: 3000,
        close: true,
        destination: "../../../lumigems/cart.html",
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
    }).showToast();
});
