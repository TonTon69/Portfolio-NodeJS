const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// When scroll, body add background black
window.onscroll = function () {
    if (this.scrollY > 20) {
        document.body.classList.add("show");
    } else {
        document.body.classList.remove("show");
    }

    const bgLight = $(".bg-light");
    if (bgLight) {
        const bounding = bgLight.getBoundingClientRect();
        const header = $(".header");
        if (bounding.top < 20 && bounding.top > -bounding.height + 20) {
            header.classList.add("dark");
        } else {
            header.classList.remove("dark");
        }
    }
};

// When to top clicked
const toTop = $(".to-top span");
toTop.onclick = function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
