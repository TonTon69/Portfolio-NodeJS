const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

window.onscroll = function () {
    if (this.scrollY > 20) {
        document.body.classList.add("show");
    } else {
        document.body.classList.remove("show");
    }
};

const toTop = $(".to-top span");
toTop.onclick = function scrollToTop() {
    if (
        document.body.scrollTop !== 0 ||
        document.documentElement.scrollTop !== 0
    ) {
        window.scrollBy(0, -100);
        requestAnimationFrame(scrollToTop);
    }
};
