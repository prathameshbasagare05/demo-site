document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.getElementById("navbar");

    menuIcon.addEventListener("click", () => {
        navbar.classList.toggle("show");
    });
    document.addEventListener("click", (event) => {
        if (!navbar.contains(event.target) && !menuIcon.contains(event.target)) {
            navbar.classList.remove("show");
        }
    });
});


const navLinks = document.querySelectorAll(".nav-link");
let nav = document.querySelector(".nav-link")
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        link.classList.add("active");
        nav = link;
    });
});
    

document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".carousel-slide");
    const prevButton = document.querySelector(".carousel-nav.prev");
    const nextButton = document.querySelector(".carousel-nav.next");
    const slidesContainer = document.querySelector(".carousel-slides");

    let currentSlide = 0;
    console.log(slides);
    function updateCarousel() {
        slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    nextButton.addEventListener("click", () => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateCarousel();
    });

    prevButton.addEventListener("click", () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateCarousel();
    });

    indicators.forEach((indicator, index) => {
        indicator.addEventListener("click", () => {
            currentSlide = index;
            updateCarousel();
        });
    });

    updateCarousel();
});
