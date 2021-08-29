const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Show 1s brand when loaded page
const brand = $(".header__brand");
window.onload = function () {
    Object.assign(brand.style, {
        opacity: 1,
        visibility: "visible",
        transform: "translateX(0)",
    });
};

setTimeout(function () {
    Object.assign(brand.style, {
        opacity: 0,
        visibility: "hidden",
        transform: "translateX(50px)",
    });
}, 1000);

// When scroll, body add background black
window.onscroll = function () {
    if (this.scrollY > 20) {
        document.body.classList.add("show");
    } else {
        document.body.classList.remove("show");
    }
};

// When to top clicked
const toTop = $(".to-top span");
toTop.onclick = function scrollToTop() {
    window.scrollTo(0, { behavior: "smooth" });
};

// When header mobile clicked
const navMobileIconMenu = $(".nav-mobile-icon");
const nav = $(".nav");
const navOverlay = $(".nav-overlay");
const navMobileIconClose = $(".nav-mobile-icon-close");

navMobileIconMenu.onclick = function () {
    nav.classList.add("nav-mobile");
    navOverlay.classList.add("nav-overlay-mobile");
};

navOverlay.onclick = function () {
    nav.classList.remove("nav-mobile");
    this.classList.remove("nav-overlay-mobile");
};

navMobileIconClose.onclick = function () {
    nav.classList.remove("nav-mobile");
    navOverlay.classList.remove("nav-overlay-mobile");
};

// Highlight the active link in a navigation menu
for (var i = 0; i < document.links.length; i++) {
    if (document.links[i].href === document.URL) {
        var parentLink = document.links[i].parentElement;
        parentLink.classList.add("active");
    }
}
