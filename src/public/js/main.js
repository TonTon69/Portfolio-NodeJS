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

var deleteProjectModal = $("#delete-project-modal");
var projectId;
var deleteProjectForm = document.forms["delete-project-form"];

deleteProjectModal.addEventListener("show.bs.modal", function (event) {
    // Button that triggered the modal
    var button = event.relatedTarget;
    projectId = button.getAttribute("data-bs-id");
});

var btnDeleteProject = $("#btn-delete-project");
//When delete project btn clicked
btnDeleteProject.onclick = function () {
    deleteProjectForm.setAttribute(
        "action",
        "/projects/" + projectId + "?_method=DELETE"
    );
    deleteProjectForm.submit();
};
