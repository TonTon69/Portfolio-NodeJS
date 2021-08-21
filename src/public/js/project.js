document.addEventListener("DOMContentLoaded", function () {
    var deleteProjectModal = $("#delete-project-modal");
    var projectId;
    var deleteProjectForm = document.forms["delete-project-form"];
    var restoreProjectForm = document.forms["restore-project-form"];
    var btnDeleteProject = $("#btn-delete-project");
    var restoreBtn = $$(".btn-restore");

    deleteProjectModal.addEventListener("show.bs.modal", function (event) {
        // Button that triggered the modal
        var button = event.relatedTarget;
        projectId = button.getAttribute("data-bs-id");
    });

    //When delete project btn clicked
    btnDeleteProject.onclick = function () {
        deleteProjectForm.setAttribute(
            "action",
            "/projects/" + projectId + "?_method=DELETE"
        );
        deleteProjectForm.submit();
    };

    // Restore btn clicked
    for (let item of restoreBtn) {
        item.onclick = function (e) {
            e.preventDefault();
            var projectId = item.getAttribute("data-bs-id");
            restoreProjectForm.setAttribute(
                "action",
                "/projects/" + projectId + "/restore?_method=PATCH"
            );
            restoreProjectForm.submit();
        };
    }
});
