const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        // Remove 'active' class from all nav links
        navLinks.forEach(nav => nav.classList.remove("active"));
        
        // Add 'active' class to the clicked link
        link.classList.add("active");
    });
});
    