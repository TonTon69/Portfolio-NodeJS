document.addEventListener("DOMContentLoaded", function () {
    var deleteAwardModal = $("#delete-award-modal");
    var awardId;
    var deleteAwardForm = document.forms["delete-award-form"];
    var restoreAwardForm = document.forms["restore-award-form"];
    var btnDeleteAward = $("#btn-delete-award");
    var restoreBtn = $$(".btn-restore");
    var awardItemCheckbox = $$('input[name="awardIds[]"]');

    var checkboxAll = $("#checkbox-all");

    var deleteContactModal = $("#delete-contact-modal");
    var contactId;
    var deleteContactForm = document.forms["delete-contact-form"];
    var restoreContactForm = document.forms["restore-contact-form"];
    var btnDeleteContact = $("#btn-delete-contact");
    var restoreBtn = $$(".btn-restore");
    var contactItemCheckbox = $$('input[name="contactIds[]"]');

    var deleteProjectModal = $("#delete-project-modal");
    var projectId;
    var deleteProjectForm = document.forms["delete-project-form"];
    var btnDeleteProject = $("#btn-delete-project");
    var restoreBtn = $$(".btn-restore");
    var projectItemCheckbox = $$('input[name="projectIds[]"]');

    var deleteAwardModal = $("#delete-award-modal");
    var awardId;
    var deleteAwardForm = document.forms["delete-award-form"];
    var restoreAwardForm = document.forms["restore-award-form"];
    var btnDeleteAward = $("#btn-delete-award");
    var restoreBtn = $$(".btn-restore");
    var awardItemCheckbox = $$('input[name="awardIds[]"]');
    var btnRestoreAward = $("#btn-restore-award");
    var btnForceDeleteAward = $("#btn-force-delete-award");

    var deleteContactModal = $("#delete-contact-modal");
    var contactId;
    var deleteContactForm = document.forms["delete-contact-form"];
    var restoreContactForm = document.forms["restore-contact-form"];
    var btnDeleteContact = $("#btn-delete-contact");
    var restoreBtn = $$(".btn-restore");
    var contactItemCheckbox = $$('input[name="contactIds[]"]');
    var btnRestoreContact = $("#btn-restore-contact");
    var btnForceDeleteContact = $("#btn-force-delete-contact");

    var deleteProjectModal = $("#delete-project-modal");
    var projectId;
    var deleteProjectForm = document.forms["delete-project-form"];
    var restoreProjectForm = document.forms["restore-project-form"];
    var btnDeleteProject = $("#btn-delete-project");
    var restoreBtn = $$(".btn-restore");
    var projectItemCheckbox = $$('input[name="projectIds[]"]');
    var btnRestoreProject = $("#btn-restore-project");
    var btnForceDeleteProject = $("#btn-force-delete-project");

    // toast message
    let msgToast = "#{msg}";
    if (msgToast != "") {
        Eggy({
            title: "Success",
            message: msgToast,
            type: "success",
            duration: 3000,
        });
    }

    deleteAwardModal.addEventListener("show.bs.modal", function (event) {
        // Button that triggered the modal
        var button = event.relatedTarget;
        awardId = button.getAttribute("data-bs-id");
    });

    deleteContactModal.addEventListener("show.bs.modal", function (event) {
        // Button that triggered the modal
        var button = event.relatedTarget;
        contactId = button.getAttribute("data-bs-id");
    });

    deleteProjectModal.addEventListener("show.bs.modal", function (event) {
        // Button that triggered the modal
        var button = event.relatedTarget;
        projectId = button.getAttribute("data-bs-id");
    });

    window.onload = function () {
        renderSelectedAwardsAction();
        renderSelectedContactsAction();
        renderSelectedProjectsAction();
    };

    //Re-render checked all submit button
    function renderSelectedAwardsAction() {
        var checkedCount = $$('input[name="awardIds[]"]:checked').length;
        var storedAwardsLink = $(".stored-awards__link");

        if (checkedCount > 0) {
            storedAwardsLink.classList.add("delete-all-show");
            $(".delete-select-all span").innerText = checkedCount + " selected";
        } else {
            storedAwardsLink.classList.remove("delete-all-show");
        }
    }

    //Re-render checked all submit button
    function renderSelectedContactsAction() {
        var checkedCount = $$('input[name="contactIds[]"]:checked').length;
        var storedContactsLink = $(".stored-contacts__link");

        if (checkedCount > 0) {
            storedContactsLink.classList.add("delete-all-show");
            $(".delete-select-all span").innerText = checkedCount + " selected";
        } else {
            storedContactsLink.classList.remove("delete-all-show");
        }
    }

    //Re-render checked all submit button
    function renderSelectedProjectsAction() {
        var checkedCount = $$('input[name="projectIds[]"]:checked').length;
        var storedProjectsLink = $(".stored-projects__link");

        if (checkedCount > 0) {
            storedProjectsLink.classList.add("delete-all-show");
            $(".delete-select-all span").innerText = checkedCount + " selected";
        } else {
            storedProjectsLink.classList.remove("delete-all-show");
        }
    }

    //When delete contact btn clicked
    btnDeleteContact.onclick = function () {
        deleteContactForm.setAttribute(
            "action",
            "/contacts/" + contactId + "?_method=DELETE"
        );
        deleteContactForm.submit();
    };

    //When delete contact btn clicked
    btnDeleteContact.onclick = function () {
        deleteContactForm.setAttribute(
            "action",
            "/contacts/" + contactId + "/force?_method=DELETE"
        );
        deleteContactForm.submit();
    };

    //When delete project btn clicked
    btnDeleteProject.onclick = function () {
        deleteProjectForm.setAttribute(
            "action",
            "/projects/" + projectId + "?_method=DELETE"
        );
        deleteProjectForm.submit();
    };

    //When delete project btn clicked
    btnDeleteProject.onclick = function () {
        deleteProjectForm.setAttribute(
            "action",
            "/projects/" + projectId + "/force?_method=DELETE"
        );
        deleteProjectForm.submit();
    };

    //When delete award btn clicked
    btnDeleteAward.onclick = function () {
        deleteAwardForm.setAttribute(
            "action",
            "/awards/" + awardId + "?_method=DELETE"
        );
        deleteAwardForm.submit();
    };

    //When delete award btn clicked
    btnDeleteAward.onclick = function () {
        deleteAwardForm.setAttribute(
            "action",
            "/awards/" + awardId + "/force?_method=DELETE"
        );
        deleteAwardForm.submit();
    };

    //Checkbox all changed
    checkboxAll.onchange = function () {
        for (let contactItem of contactItemCheckbox) {
            contactItem.checked = this.checked;
        }
        renderSelectedContactsAction();
    };

    //Checkbox all changed
    checkboxAll.onchange = function () {
        for (let projectItem of projectItemCheckbox) {
            projectItem.checked = this.checked;
        }
        renderSelectedProjectsAction();
    };

    //Checkbox all changed
    checkboxAll.onchange = function () {
        for (let awardItem of awardItemCheckbox) {
            awardItem.checked = this.checked;
        }
        renderSelectedAwardsAction();
    };

    // Project item checkbox changed
    for (let awardItem of awardItemCheckbox) {
        awardItem.onchange = function () {
            var isCheckedAll =
                awardItemCheckbox.length ===
                $$('input[name="awardIds[]"]:checked').length;
            checkboxAll.checked = isCheckedAll;
            renderSelectedAwardsAction();
        };
    }

    // Project item checkbox changed
    for (let contactItem of contactItemCheckbox) {
        contactItem.onchange = function () {
            var isCheckedAll =
                contactItemCheckbox.length ===
                $$('input[name="contactIds[]"]:checked').length;
            checkboxAll.checked = isCheckedAll;
            renderSelectedContactsAction();
        };
    }

    // Project item checkbox changed
    for (let projectItem of projectItemCheckbox) {
        projectItem.onchange = function () {
            var isCheckedAll =
                projectItemCheckbox.length ===
                $$('input[name="projectIds[]"]:checked').length;
            checkboxAll.checked = isCheckedAll;
            renderSelectedProjectsAction();
        };
    }

    // Restore btn clicked
    for (let item of restoreBtn) {
        item.onclick = function (e) {
            e.preventDefault();
            var awardId = item.getAttribute("data-bs-id");
            restoreAwardForm.setAttribute(
                "action",
                "/awards/" + awardId + "/restore?_method=PATCH"
            );
            restoreAwardForm.submit();
        };
    }

    // Restore btn clicked
    for (let item of restoreBtn) {
        item.onclick = function (e) {
            e.preventDefault();
            var contactId = item.getAttribute("data-bs-id");
            restoreContactForm.setAttribute(
                "action",
                "/contacts/" + contactId + "/restore?_method=PATCH"
            );
            restoreContactForm.submit();
        };
    }

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

    // Set value to handle submit form
    btnRestoreAward.onclick = function () {
        $("select option").value = "restore";
    };

    btnForceDeleteAward.onclick = function () {
        $("select option").value = "force-delete";
    };

    // Set value to handle submit form
    btnRestoreContact.onclick = function () {
        $("select option").value = "restore";
    };

    btnForceDeleteContact.onclick = function () {
        $("select option").value = "force-delete";
    };

    // Set value to handle submit form
    btnRestoreProject.onclick = function () {
        $("select option").value = "restore";
    };

    btnForceDeleteProject.onclick = function () {
        $("select option").value = "force-delete";
    };
});
