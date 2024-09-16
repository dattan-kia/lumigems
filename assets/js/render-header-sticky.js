const headerDom = document.getElementById("header-sticky");
headerDom.className =
    "sticky top-0 left-0 right-0 shadow-md bg-white z-[99] px-4 py-2";
headerDom.innerHTML = `
<div class="container mx-auto flex justify-between items-center">
                <!-- Logo -->
                <a class="flex items-center space-x-2" href="../index.html">
                    <img
                        src="../../../lumigems/assets/imgs/logo.png"
                        alt="Logo"
                        class="h-10 w-10"
                    />
                    <span class="font-bold text-lg">LumiGems</span>
                </a>

                <!-- Navigation -->
                <nav class="flex items-center justify-end gap-4">
                    <ul class="flex items-center justify-end gap-4">
                        <li
                            class="flex justify-center items-center relative group"
                        >
                            <a
                                href="../../../lumigems/index.html"
                                class="w-full text-black hover:text-orange-500 px-4 py-2 flex justify-center items-center"
                                >Trang chủ</a
                            >
                        </li>
                        <li
                            class="flex justify-center items-center relative group"
                        >
                            <a
                                href="../../../lumigems/products.html"
                                class="w-full text-black hover:text-orange-500 px-4 py-2 flex justify-center items-center"
                                >Sản phẩm</a
                            >
                        </li>
                        <li
                            class="flex justify-center items-center relative group"
                        >
                            <a
                                href="../../../lumigems/blogs/index.html"
                                class="w-full text-black hover:text-orange-500 px-4 py-2 flex justify-center items-center"
                            >
                                Blogs
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
                            <ul
                                class="absolute left-0 top-full w-full min-w-60 bg-white border border-gray-200 shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden group-hover:block"
                            >
                                <li class="flex justify-center items-center">
                                    <a
                                        href="../../../lumigems/blogs/nhom-lua.html"
                                        class="w-full px-4 py-2 text-black hover:bg-gray-100"
                                        >NHÓM LỬA</a
                                    >
                                </li>
                                <li class="flex justify-center items-center">
                                    <a
                                        href="../../../lumigems/blogs/nhom-nuoc.html"
                                        class="w-full px-4 py-2 text-black hover:bg-gray-100"
                                        >NHÓM NƯỚC</a
                                    >
                                </li>
                            </ul>
                        </li>
                        <li
                            class="flex justify-center items-center relative group"
                        >
                            <a
                                href="../../../lumigems/cart.html"
                                class="w-full text-black hover:text-orange-500 px-4 py-2 flex justify-center items-center"
                                >Giỏ hàng</a
                            >
                        </li>
                        <li
                            class="flex justify-center items-center relative group"
                        >
                            <a
                                href="#"
                                class="w-full text-black hover:text-orange-500 px-4 py-2 flex justify-center items-center"
                                >Tài khoản</a
                            >
                        </li>
                    </ul>

                    <button class="flex justify-center items-center">
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
                                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                            />
                        </svg>
                    </button>
                </nav>
            </div>
`;
