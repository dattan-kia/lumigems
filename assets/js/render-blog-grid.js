import { blogs } from "./data.js";

const blogDom = document.getElementById("blog-grid");

function renderBlogGrid() {
    let blogHTML = "";
    blogs.forEach((blog) => {
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
