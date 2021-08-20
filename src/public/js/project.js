document.addEventListener("DOMContentLoaded", function () {
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
});
