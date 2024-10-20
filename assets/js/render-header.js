(function renderHeader() {
    const header = document.getElementById("header");
    const cart = JSON.parse(localStorage.getItem("LUMIGEMS_CART")) ?? [];

    header.className = "bg-white py-2.5";
    const headerHTML = `  <div
                class="container  xl:max-w-screen-xl  mx-auto grid grid-cols-12 px-4"
            >
                <div class="col-span-5 flex items-center justify-start">
                    <p class="text-black text-sm font-semibold hidden md:block">
                        HOTLINE: <span class="text-orange-500">0283.979.797</span>
                    </p>
                    <div class="block md:hidden" id="menu-button">
                        <button >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div class="col-span-2 flex items-center justify-center">
                    <!-- Logo -->
                    <div class="flex items-center">
                        <a href="../../../lumigems/index.html">
                            <img
                                src="../../../lumigems/assets/imgs/logo.png"
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
                    <a href="#" class="text-black hover:text-orange-500 hidden md:block"
                        >TÀI KHOẢN</a
                    >

                    <!-- Cart -->
                    <div class="relative">
                        <a
                            href="../../../lumigems/cart.html"
                            class="text-black hover:text-orange-500 flex items-center gap-4"
                        >
                          <span class="hidden md:inline-block">GIỎ HÀNG</span>
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
            <div class="bg-white shadow-sm md:block hidden">
                <nav
                    class="flex container  xl:max-w-screen-xl  mx-auto justify-between items-center px-4"
                >
                    <ul class="w-full grid grid-cols-6">
                        <li class="flex justify-center items-center">
                            <a
                                href="../../../lumigems/about.html"
                                class="w-full text-black hover:text-orange-500 px-2 py-1 lg:px-4 lg:py-2 flex justify-center items-center"
                                >CÂU CHUYỆN</a
                            >
                        </li>

                        <li
                            class="flex justify-center items-center relative group"
                        >
                            <a
                                href="../../../lumigems/products.html"
                                class="text-black hover:text-orange-500 flex items-center justify-center w-full px-2 py-1 lg:px-4 lg:py-2"
                                >SẢN PHẨM

                            </a>
                         
                           
                        </li>
                        <li
                            class="flex justify-center items-center relative group"
                        >
                            <a
                                href="../../../lumigems/blogs/index.html"
                                class="text-black hover:text-orange-500 flex items-center justify-center w-full px-2 py-1 lg:px-4 lg:py-2"
                                >BLOGS
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="size-4 ml-2"
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
                                        href="../../../lumigems/blogs/nhom-lua.html"
                                        class="w-full px-2 py-1 lg:px-4 lg:py-2 text-black hover:bg-gray-100"
                                        >NHÓM LỬA</a
                                    >
                                </li>
                                <li class="flex justify-center items-center">
                                    <a
                                        href="../../../lumigems/blogs/nhom-nuoc.html"
                                        class="w-full px-2 py-1 lg:px-4 lg:py-2 text-black hover:bg-gray-100"
                                        >NHÓM NƯỚC</a
                                    >
                                </li>
                                 <li class="flex justify-center items-center">
                                    <a
                                        href="../../../lumigems/blogs/nhom-khi.html"
                                        class="w-full px-2 py-1 lg:px-4 lg:py-2 text-black hover:bg-gray-100"
                                        >NHÓM KHÍ</a
                                    >
                                </li>
                                <li class="flex justify-center items-center">
                                    <a
                                        href="../../../lumigems/blogs/nhom-dat.html"
                                        class="w-full px-2 py-1 lg:px-4 lg:py-2 text-black hover:bg-gray-100"
                                        >NHÓM ĐẤT</a
                                    >
                                </li>
                               <li class="flex justify-center items-center">
                                    <a
                                        href="../../../lumigems/blogs/nhom-nguoi-menh-kim.html"
                                        class="w-full px-2 py-1 lg:px-4 lg:py-2 text-black hover:bg-gray-100"
                                        >NHÓM NGƯỜI MỆNH KIM</a
                                    >
                                </li>
                                 <li class="flex justify-center items-center">
                                    <a
                                        href="../../../lumigems/blogs/nhom-nguoi-menh-moc.html"
                                        class="w-full px-2 py-1 lg:px-4 lg:py-2 text-black hover:bg-gray-100"
                                        >NHÓM NGƯỜI MỆNH MỘC</a
                                    >
                                </li>
                                 <li class="flex justify-center items-center">
                                    <a
                                        href="../../../lumigems/blogs/nhom-nguoi-menh-thuy.html"
                                        class="w-full px-2 py-1 lg:px-4 lg:py-2 text-black hover:bg-gray-100"
                                        >NHÓM NGƯỜI MỆNH THỦY</a
                                    >
                                </li>
                                 <li class="flex justify-center items-center">
                                    <a
                                        href="../../../lumigems/blogs/nhom-nguoi-menh-hoa.html"
                                        class="w-full px-2 py-1 lg:px-4 lg:py-2 text-black hover:bg-gray-100"
                                        >NHÓM NGƯỜI MỆNH HỎA</a
                                    >
                                </li>
                                 <li class="flex justify-center items-center">
                                    <a
                                        href="../../../lumigems/blogs/nhom-nguoi-menh-tho.html"
                                        class="w-full px-2 py-1 lg:px-4 lg:py-2 text-black hover:bg-gray-100"
                                        >NHÓM NGƯỜI MỆNH THỔ</a
                                    >
                                </li>
                            </ul>
                        </li>
                        <li class="flex justify-center items-center group relative">
                            <a
                                href="#"
                                class="w-full text-black hover:text-orange-500 px-2 py-1 lg:px-4 lg:py-2 flex justify-center items-center"
                                >CHÍNH SÁCH
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="size-4 ml-2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                    />
                                </svg>
                                </a
                            >
                            
                            <!-- Submenu -->
                            <ul
                                class="absolute z-[99] left-0 top-full w-full bg-white border border-gray-200 shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden group-hover:block"
                            >
                                <li class="flex justify-center items-center">
                                    <a
                                        href="../../../lumigems/privacy-policy.html"
                                        class="w-full px-2 py-1 lg:px-4 lg:py-2 text-black hover:bg-gray-100"
                                        >CHÍNH SÁCH BẢO MẬT</a
                                    >
                                </li>
                                <li class="flex justify-center items-center">
                                    <a
                                        href="../../../lumigems/return-policy.html"
                                        class="w-full px-2 py-1 lg:px-4 lg:py-2 text-black hover:bg-gray-100"
                                        >CHÍNH SÁCH ĐỔI TRẢ</a
                                    >
                                </li>
                            </ul>
                        </li>
                        <li class="flex justify-center items-center">
                            <a
                                href="../../../lumigems/terms&conditions.html"
                                class="w-full text-black hover:text-orange-500 px-2 py-1 lg:px-4 lg:py-2 flex justify-center items-center"
                                >ĐIỀU KHOẢN</a
                            >
                        </li>
                        <li class="flex justify-center items-center">
                            <a
                                href="../../../lumigems/contact.html"
                                class="w-full text-black hover:text-orange-500 px-2 py-1 lg:px-4 lg:py-2 flex justify-center items-center"
                                >LIÊN HỆ</a
                            >
                        </li>
                    </ul>
                </nav>
            </div>
            <!-- Mobile Menu -->
<div id="mobile-menu" class="bg-white shadow-sm md:hidden hidden transition-all duration-500 transform origin-top">
  <nav
    class="flex container xl:max-w-screen-xl mx-auto justify-between items-center px-4"
  >
    <ul class="w-full grid grid-cols-1 gap-2">
      <li class="flex justify-center items-center">
        <a href="../../../lumigems/about.html" class="w-full text-black hover:text-orange-500 px-4 py-2">
          CÂU CHUYỆN
        </a>
      </li>
      <li class="flex justify-center items-center">
        <a href="../../../lumigems/products.html" class="w-full text-black hover:text-orange-500 px-4 py-2">
          SẢN PHẨM
        </a>
      </li>
      <li class="flex justify-center items-center">
        <a href="../../../lumigems/blogs/index.html" class="w-full text-black hover:text-orange-500 px-4 py-2">
          BLOGS
        </a>
      </li>
      <li class="flex justify-center items-center">
        <a href="#" class="w-full text-black hover:text-orange-500 px-4 py-2">
          CHÍNH SÁCH
        </a>
      </li>
      <li class="flex justify-center items-center">
        <a href="#" class="w-full text-black hover:text-orange-500 px-4 py-2">
          ĐIỀU KHOẢN
        </a>
      </li>
      <li class="flex justify-center items-center">
        <a href="../../../lumigems/contact.html" class="w-full text-black hover:text-orange-500 px-4 py-2">
          LIÊN HỆ
        </a>
      </li>
    </ul>
  </nav>
</div>
            `;
    header.innerHTML = headerHTML;
})();

const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");

menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("animate-slide-down"); // Trigger the slide-down animation
});
