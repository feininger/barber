    var link = document.querySelector(".top-user");
    var popup = document.querySelector(".modal-login");
    var close = popup.querySelector(".modal-close");

    var mapButton = document.querySelector(".map-btn");
    var mapLink = document.querySelector(".map-link");
    var map = document.querySelector(".modal-map");
    if (map){
        var mapClose = map.querySelector(".modal-close");
    }

    link.addEventListener("click", function (event) {
        event.preventDefault();
        popup.classList.add("modal-show");
    });

    close.addEventListener("click", function (event) {
        event.preventDefault();
        popup.classList.remove("modal-show");
    });

    mapButton.addEventListener("click", function (event) {
        event.preventDefault();
        map.classList.add("modal-show");
    });

    mapLink.addEventListener("click", function (event) {
        event.preventDefault();
        map.classList.add("modal-show");
    });

    mapClose.addEventListener("click", function (event) {
        event.preventDefault();
        map.classList.remove("modal-show");
    });