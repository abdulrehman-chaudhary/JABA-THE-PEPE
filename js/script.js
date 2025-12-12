const sidebar = document.getElementById("mobileSidebar");
const openBtn = document.getElementById("openSidebar");
const closeBtn = document.getElementById("closeSidebar");
const sidebarLinks = sidebar.querySelectorAll(".sidebar-links a");

openBtn.addEventListener("click", () => {
    sidebar.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");
});

sidebarLinks.forEach(link => {
    link.addEventListener("click", () => {
        sidebar.classList.remove("active");
    });
});
