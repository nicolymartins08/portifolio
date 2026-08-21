"use strict";


/* =====================================================
   TEMA
===================================================== */

const themeToggle = document.getElementById("themeToggle");

function updateThemeIcon() {

    if (!themeToggle) return;

    const icon = themeToggle.querySelector("i");

    if (document.body.classList.contains("dark-mode")) {
        icon.className = "bi bi-sun-fill";
    } else {
        icon.className = "bi bi-moon-stars-fill";
    }
}


function toggleTheme() {

    document.body.classList.toggle("dark-mode");

    const isDark =
        document.body.classList.contains("dark-mode");

    localStorage.setItem(
        "portfolio-theme",
        isDark ? "dark" : "light"
    );

    updateThemeIcon();
}


if (themeToggle) {
    themeToggle.addEventListener(
        "click",
        toggleTheme
    );
}


/* =====================================================
   CARREGAR TEMA
===================================================== */

const savedTheme =
    localStorage.getItem("portfolio-theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}

updateThemeIcon();


/* =====================================================
   NAVBAR
===================================================== */

const navbar =
    document.getElementById("mainNavbar");

function updateNavbar() {

    if (!navbar) return;

    if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
}

window.addEventListener(
    "scroll",
    updateNavbar,
    { passive: true }
);

updateNavbar();


/* =====================================================
   BOTÃO VOLTAR AO TOPO
===================================================== */

const backToTop =
    document.getElementById("backToTop");


function updateBackToTop() {

    if (!backToTop) return;

    if (window.scrollY > 500) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
}


window.addEventListener(
    "scroll",
    updateBackToTop,
    { passive: true }
);


if (backToTop) {

    backToTop.addEventListener(
        "click",
        function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


/* =====================================================
   ANIMAÇÕES
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.08
            }
        );


    revealElements.forEach(function (element) {
        observer.observe(element);
    });

} else {

    revealElements.forEach(function (element) {
        element.classList.add("visible");
    });

}


/* =====================================================
   FECHAR MENU MOBILE AO CLICAR
===================================================== */

const navLinks =
    document.querySelectorAll(
        ".navbar-collapse .nav-link"
    );

const navbarContent =
    document.getElementById("navbarContent");


navLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function () {

            if (
                navbarContent &&
                navbarContent.classList.contains("show")
            ) {

                const collapse =
                    bootstrap.Collapse.getInstance(
                        navbarContent
                    );

                if (collapse) {
                    collapse.hide();
                }

            }

        }
    );

});


/* =====================================================
   ANO
===================================================== */

const currentYear =
    document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent =
        new Date().getFullYear();
}
