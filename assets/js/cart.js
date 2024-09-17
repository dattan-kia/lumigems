import products from "./data.js";
const cartDOM = document.getElementById("cart");
const cartCount = document.getElementById("item-count");

function renderCartItems() {
    const cart = JSON.parse(localStorage.getItem("LUMIGEMS_CART")) ?? [];
    cartCount.innerText = cart.length;

    const cartProductIds = cart.map((item) => item.productId);
    const productsInCart =
        cartProductIds.length > 0
            ? products.filter((product) => cartProductIds.includes(product.id))
            : [];
    if (productsInCart.length > 0) {
        let cartItemsDom = "";

        // render cart items
        productsInCart.forEach((product, index) => {
            cartItemsDom += `
            <div
                    class="cart-item flex flex-col md:flex-row justify-between items-center mt-5 "
                                data-product-id="${product.id}"

                >
                    <div class="flex items-center">
                        <!-- Product Image -->
                        <div class="w-40 aspect-square rounded-lg">
                            <img
                                src="${product.image}"
                                alt="${product.name}"
                                class="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                        <!-- Product Info -->
                        <div class="ml-5 max-w-96">
                            <h2 class="text-lg font-semibold">
                            ${product.name}
                            </h2>
                            <button
                                class="text-sm text-red-500 cursor-pointer mt-2 remove-item"
                            >
                                Xóa
                            </button>
                        </div>
                    </div>
                    <!-- Product Quantity and Price -->
                    <div class="flex items-center mt-5 md:mt-0">
                        <span class="font-semibold text-lg"
                            >${new Intl.NumberFormat("vn", {
                                style: "currency",
                                currency: "VND",
                            }).format(product.price)}</span
                        >
                        <!-- Quantity Controller -->
                        <div class="flex items-center ml-5">
                              <button
                                class="decrease border rounded-full w-8 h-8 flex items-center justify-center leading-8 text-gray-600"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                                </svg>

                            </button>
                            <input
                                type="text"
                                disabled
                                value="${cart[index].quantity}"
                                class="quantity w-12 text-center border mx-2"
                            />
                             <button
                                class="increase border rounded-full w-8 h-8 flex items-center justify-center leading-8 text-gray-600"
                                >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            `;
        });
        // render cart
        cartDOM.innerHTML = ` 
        <div class="container mx-auto grid grid-col-1 lg:grid-cols-4 gap-4 lg:gap-8">
            <div class="lg:col-span-3 col-span-1">
                <!-- Cart Items -->
            ${cartItemsDom}
            </div>
            <div class="col-span-1">
                <!-- Cart Totals -->
                <div class="mt-10 flex flex-col gap-4" id="cart-totals">
                        
                </div>

                <!-- Checkout Buttons -->
                <div class="mt-8 flex flex-col gap-4">
                    <button
                        class="px-5 py-2 bg-black text-white font-bold w-full"
                    >
                        THANH TOÁN
                    </button>
                    <a href="../lumigems/products.html" class="block ">
                        <button
                        class="px-5 py-2 bg-white text-black border border-black font-bold w-full"
                        >
                        TIẾP TỤC MUA HÀNG
                        </button>
                        </a>
                </div>
            </div>
        </div>`;
    } else {
        cartDOM.innerHTML = `
        <div class="container mx-auto my-10 p-5" id="empty-cart">
            
            <div class="text-center mt-10">
                <img
                    src="./assets/imgs/empty-cart.png"
                    alt="Empty Cart"
                    class="min-w-24 max-w-52 mx-auto"
                />
                <a href="./products.html">
                    <button
                        class="mt-5 px-5 py-2 bg-black text-white font-semibold"
                    >
                        TIẾP TỤC MUA SẮM
                    </button>
                </a>
            </div>
        </div>
        `;
    }
    handleListener();
}

function renderTotalsCart() {
    const cart = JSON.parse(localStorage.getItem("LUMIGEMS_CART")) ?? [];
    const dom = document.getElementById("cart-totals");
    const cartProductIds = cart.map((item) => item.productId);
    const productsInCart = products.filter((product) =>
        cartProductIds.includes(product.id)
    );
    const totalPrice = productsInCart.reduce(
        (sum, item, index) => sum + item.price * cart[index].quantity,
        0
    );
    dom.innerHTML = `
    <p class="flex justify-between items-center">
                        Tạm tính:
                        <span id="subtotal" class="text-lg font-semibold"
                            >${new Intl.NumberFormat("vn", {
                                style: "currency",
                                currency: "VND",
                            }).format(totalPrice)}</span
                        >
                    </p>
                    <p class="flex justify-between items-center ">
                        Thành tiền: <span id="total" class="text-2xl font-bold ">${new Intl.NumberFormat(
                            "vn",
                            {
                                style: "currency",
                                currency: "VND",
                            }
                        ).format(totalPrice)}</span>
                    </p>
    `;
}

// run
renderCartItems();
renderTotalsCart();

function handleListener() {
    const cartItems = document.querySelectorAll(".cart-item");

    console.log(cartItems);

    // Add event listeners for each cart item
    cartItems.forEach((item) => {
        const increaseBtn = item.querySelector(".increase");
        const productId = item.dataset.productId;

        const decreaseBtn = item.querySelector(".decrease");
        const quantityInput = item.querySelector(".quantity");
        const removeItemBtn = item.querySelector(".remove-item");
        const priceEl = item.querySelector(".price");

        // Handle increase button
        increaseBtn.addEventListener("click", () => {
            const cart =
                JSON.parse(localStorage.getItem("LUMIGEMS_CART")) ?? [];
            let quantity = parseInt(quantityInput.value);
            quantity++;
            quantityInput.value = quantity;
            console.log("cart", cart);

            const newCart = cart.map((item) =>
                item.productId === productId
                    ? { ...item, quantity: quantity }
                    : item
            );
            console.log("new cart", newCart);

            localStorage.setItem("LUMIGEMS_CART", JSON.stringify(newCart));

            renderTotalsCart();
        });

        // Handle decrease button
        decreaseBtn.addEventListener("click", () => {
            let quantity = parseInt(quantityInput.value);
            const cart =
                JSON.parse(localStorage.getItem("LUMIGEMS_CART")) ?? [];
            if (quantity > 1) {
                quantity--;
                quantityInput.value = quantity;

                const newCart = cart.map((item) =>
                    item.productId === productId
                        ? { ...item, quantity: quantity }
                        : item
                );
                console.log("new cart", newCart);

                localStorage.setItem("LUMIGEMS_CART", JSON.stringify(newCart));
                renderTotalsCart();
            }
        });

        // Handle remove item button
        removeItemBtn.addEventListener("click", () => {
            const cart =
                JSON.parse(localStorage.getItem("LUMIGEMS_CART")) ?? [];

            const newCart = cart.filter((item) => item.productId !== productId);
            localStorage.setItem("LUMIGEMS_CART", JSON.stringify(newCart));
            renderCartItems();
            renderTotalsCart();
        });
    });
}
