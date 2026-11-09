
// =========================
// SECTION REVEAL ANIMATION
// =========================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);

sections.forEach((section) => {

    observer.observe(section);

});


// =========================
// NAVIGATION ACTIVE EFFECT
// =========================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.forEach((item) => {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});


// =========================
// AUTOMATIC FOOTER YEAR
// =========================

const footerYear = document.querySelector(".footer-small");

if (footerYear) {

    footerYear.textContent =
        `© ${new Date().getFullYear()} All Rights Reserved.`;

}
