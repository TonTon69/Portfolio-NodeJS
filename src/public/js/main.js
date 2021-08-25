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
    // if (
    //     document.body.scrollTop !== 0 ||
    //     document.documentElement.scrollTop !== 0
    // ) {
    //     window.scrollBy(0, -100);
    //     requestAnimationFrame(scrollToTop);
    // }
};
