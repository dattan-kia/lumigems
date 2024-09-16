(function renderHeader() {
    const header = document.getElementById("header");
    const cart = JSON.parse(localStorage.getItem("LUMIGEMS_CART")) ?? [];

    header.className = "bg-white py-2.5";
    const headerHTML = `  <div
                class="container max-w-screen-xl mx-auto grid grid-cols-12 px-4"
            >
                <div class="col-span-5 flex items-center justify-start">
                    <p class="text-black text-sm font-semibold">
                        HOTLINE: <span class="text-orange-500">0343854597</span>
                    </p>
                </div>

                <div class="col-span-2 flex items-center justify-center">
                    <!-- Logo -->
                    <div class="flex items-center">
                        <a href="../index.html">
                            <img
                                src="../../assets/imgs/logo.png"
                                alt="Logo"
                                class="h-20"
                            />
                        </a>
                        <!-- <span class="ml-2 text-lg font-bold text-orange-500"
                            >Lumigems</span
                        > -->
                    </div>
                </div>

                <div class="col-span-5 flex items-center justify-end space-x-6">
                    <!-- Account -->
                    <a href="#" class="text-black hover:text-orange-500"
                        >TÀI KHOẢN</a
                    >

                    <!-- Cart -->
                    <div class="relative">
                        <a
                            href="../cart.html"
                            class="text-black hover:text-orange-500 flex items-center gap-4"
                        >
                            GIỎ HÀNG
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                                />
                            </svg>
                        </a>
                        <span
                            class="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                            >${cart.length}</span
                        >
                    </div>
                </div>
            </div>
            <!-- Menu -->
            <div class="bg-white shadow-sm">
                <nav
                    class="flex container max-w-screen-xl mx-auto justify-between items-center px-4"
                >
                    <ul class="w-full grid grid-cols-6">
                        <li class="flex justify-center items-center">
                            <a
                                href="../about.html"
                                class="w-full text-black hover:text-orange-500 px-4 py-2 flex justify-center items-center"
                                >CÂU CHUYỆN</a
                            >
                        </li>

                        <li
                            class="flex justify-center items-center relative group"
                        >
                            <a
                                href="../products.html"
                                class="text-black hover:text-orange-500 flex items-center justify-center w-full px-4 py-2"
                                >SẢN PHẨM

                            </a>
                         
                           
                        </li>
                        <li
                            class="flex justify-center items-center relative group"
                        >
                            <a
                                href="../../blogs/index.html"
                                class="text-black hover:text-orange-500 flex items-center justify-center w-full px-4 py-2"
                                >BLOGS
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="size-4"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                    />
                                </svg>
                            </a>
                            <!-- Submenu -->
                            <ul
                                class="absolute z-[99] left-0 top-full w-full bg-white border border-gray-200 shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden group-hover:block"
                            >
                                <li class="flex justify-center items-center">
                                    <a
                                        href="../../blogs/nhom-lua.html"
                                        class="w-full px-4 py-2 text-black hover:bg-gray-100"
                                        >NHÓM LỬA</a
                                    >
                                </li>
                                <li class="flex justify-center items-center">
                                    <a
                                        href="../../blogs/nhom-nuoc.html"
                                        class="w-full px-4 py-2 text-black hover:bg-gray-100"
                                        >NHÓM NƯỚC</a
                                    >
                                </li>
                            </ul>
                        </li>
                        <li class="flex justify-center items-center">
                            <a
                                href="#"
                                class="w-full text-black hover:text-orange-500 px-4 py-2 flex justify-center items-center"
                                >CHÍNH SÁCH</a
                            >
                        </li>
                        <li class="flex justify-center items-center">
                            <a
                                href="#"
                                class="w-full text-black hover:text-orange-500 px-4 py-2 flex justify-center items-center"
                                >ĐIỀU KHOẢN</a
                            >
                        </li>
                        <li class="flex justify-center items-center">
                            <a
                                href="../contact.html"
                                class="w-full text-black hover:text-orange-500 px-4 py-2 flex justify-center items-center"
                                >LIÊN HỆ</a
                            >
                        </li>
                    </ul>
                </nav>
            </div>`;
    header.innerHTML = headerHTML;
})();
