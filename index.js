const navLinks = document.querySelectorAll(".nav-link");
let nav = document.querySelector(".nav-link")
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        link.classList.add("active");
        nav = link;
    });
});
    