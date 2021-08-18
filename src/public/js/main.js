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
toTop.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
