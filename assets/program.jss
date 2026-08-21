"use strict";

/* =========================================
   TEMA CLARO / ESCURO
========================================= */

const themeToggle = document.getElementById("themeToggle");

function toggleTheme() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("portfolio-theme", "dark");
    } else {
        localStorage.setItem("portfolio-theme", "light");
    }

    updateThemeIcon();
}

function updateThemeIcon() {
    if (!themeToggle) return;

    const icon = themeToggle.querySelector("i");

    if (document.body.classList.contains("dark-mode")) {
        icon.className = "bi bi-sun-fill";
    } else {
        icon.className = "bi bi-moon-stars-fill";
    }
}

if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
}


/* =========================================
   CARREGAR TEMA SALVO
========================================= */

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}

updateThemeIcon();


/* =========================================
   NAVBAR
========================================= */

const navbar = document.getElementById("mainNavbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* =========================================
   BOTÃO VOLTAR AO TOPO
========================================= */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================================
   ANIMAÇÕES
========================================= */

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }

        });

    },
    {
        threshold: 0.1
    }
);

revealElements.forEach(function (element) {
    observer.observe(element);
});


/* =========================================
   ANO DO FOOTER
========================================= */

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}