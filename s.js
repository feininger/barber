    var link = document.querySelector(".top-user");
    var popup = document.querySelector(".modal-login");
    var close = popup.querySelector(".modal-close");

    link.addEventListener("click", function (event) {
        event.preventDefault();
        popup.classList.add("modal-show");
    });

    close.addEventListener("click", function (event) {
        event.preventDefault();
        popup.classList.remove("modal-show");
    });
