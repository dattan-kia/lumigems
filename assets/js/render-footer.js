(function renderFooter() {
    const footer = document.getElementById("footer");
    footer.className = "bg-gray-100 py-10";
    const footerHTML = `
     <div
                class="container px-4  xl:max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8"
            >
                <!-- Company Info -->
                <div class="col-span-1">
                    <img
                        src="../../../lumigems/assets/imgs/logo.png"
                        alt="Logo-Gumigems"
                        class="mb-4"
                    />
                    <ul class="text-sm text-gray-700 space-y-2">
                        <li class="flex items-start gap-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-7"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                />
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                                />
                            </svg>
                            <span
                                >Lầu 1, 18 Phan Văn Trị, KDC Cityland Park
                                Hills, quận Gò Vấp, TPHCM</span
                            >
                        </li>

                        <li class="flex items-start gap-4">
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
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                                />
                            </svg>

                            <span>0283.979.797</span>
                        </li>
                        <li class="flex items-start gap-4">
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
                                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                                />
                            </svg>
                            <span>lumigemshandmade@gmail.com</span>
                        </li>
                    </ul>
                </div>

                <!-- Shop Links -->
                <div class="col-span-1">
                    <h3 class="text-lg font-semibold text-gray-900 mb-4">
                        Shop
                    </h3>
                    <ul class="text-sm text-gray-700 space-y-2">
                        <li>
                            <a
                                href="../../../lumigems/about.html"
                                class="hover:text-gray-900 hover:underline"
                                >CÂU CHUYỆN</a
                            >
                        </li>
                        <li>
                            <a
                                href="../../../lumigems/products.html"
                                class="hover:text-gray-900 hover:underline"
                                >SẢN PHẨM</a
                            >
                        </li>
                        <li>
                            <a
                                href="../../../lumigems/blogs/index.html"
                                class="hover:text-gray-900 hover:underline"
                                >BLOGS</a
                            >
                        </li>
                        <li>
                            <a
                                href="../../../lumigems/contact.html"
                                class="hover:text-gray-900 hover:underline"
                                >LIÊN HỆ</a
                            >
                        </li>
                    </ul>
                </div>

                <!-- Customer Services -->
                <div class="col-span-1">
                    <h3 class="text-lg font-semibold text-gray-900 mb-4">
                        Dịch Vụ Khách Hàng
                    </h3>
                    <ul class="text-sm text-gray-700 space-y-2 mb-4">
                        <li>
                            <a
                                href="#"
                                class="hover:text-gray-900 hover:underline"
                                >TÌM KIẾM</a
                            >
                        </li>
                        <li>
                            <a
                                href="../../../lumigems/terms&conditions.html"
                                class="hover:text-gray-900 hover:underline"
                                >ĐIỀU KHOẢN DỊCH VỤ</a
                            >
                        </li>
                        <li>
                            <a
                                href="../../../lumigems/privacy-policy.html"
                                class="hover:text-gray-900 hover:underline"
                                >CHÍNH SÁCH BẢO MẬT</a
                            >
                        </li>
                        <li>
                            <a
                                href="../../../lumigems/return-policy.html"
                                class="hover:text-gray-900 hover:underline"
                                >CHÍNH SÁCH ĐỔI TRẢ</a
                            >
                        </li>
                    </ul>
                    <div class="flex justify-start items-center gap-4">
                        <a href="https://www.facebook.com/profile.php?id=61565143884195&mibextid=LQQJ4d" target="_black">
                            <button
                                class="w-8 h-8 rounded-full  flex justify-center items-center"
                            >
                                <img src="../../../lumigems/assets/imgs/facebook-logo.png" alt="facebook-logo"/>
                            </button> 
                        </a>
                        <a href="https://s.net.vn/whr1?fbclid=IwZXh0bgNhZW0CMTAAAR0UV5NLUrja8PA-2XmANCpCyLq1NhnzR5pKP-eNem74BKUfVwF2H5uZFz0_aem_6eRMw1q33a30lXH38q6IGA" target="_black">
                            <button
                                class="w-8 h-8 rounded-full  flex justify-center items-center"
                            >
                                <img src="../../../lumigems/assets/imgs/tiktok-logo.png" alt="tiktok-logo"/>
                            </button> 
                        </a>
                    </div>
                </div>

                <!-- Newsletter and Social -->
                <div class="col-span-1">
                    <h3 class="text-lg font-semibold text-gray-900 mb-4">
                        Đăng Ký
                    </h3>
                    <p class="text-sm text-gray-700 mb-4">
                        Đăng ký nhận tin để được nhiều chương trình ưu đãi và
                        quà tặng.
                    </p>
                    <form class="flex flex-col items-center space-x-2 gap-4">
                        <input
                            type="email"
                            class="p-2 w-full border border-gray-300 rounded-md outline-none"
                            placeholder="Email của bạn"
                        />
                        <button
                            type="submit"
                            class="w-full bg-black text-white px-4 py-2 rounded-md"
                        >
                            ĐĂNG KÝ
                        </button>
                    </form>
                    <div class="flex space-x-4">
                        <!-- Social Icons -->
                        <a href="#" class="text-gray-700 hover:text-gray-900">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" class="text-gray-700 hover:text-gray-900">
                            <i class="fab fa-google"></i>
                        </a>
                        <a href="#" class="text-gray-700 hover:text-gray-900">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
`;
    footer.innerHTML = footerHTML;
})();
