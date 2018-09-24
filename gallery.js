    var link = document.querySelectorAll(".gallery-content img");
    var galleryLength = link.length;
    var nextBtn = document.querySelector(".gallery-next");
    var prevBtn = document.querySelector(".gallery-prev");

    nextBtn.addEventListener("click", function (event) {
        var currentImg = document.querySelector(".img-show");
        var currentIndex = currentImg.getAttribute('id');
        var nextIndex = parseInt(currentIndex) + 1;
        if (nextIndex >=  galleryLength) {nextIndex = 0}
        var nextImg = document.getElementById(nextIndex.toString());
        
        event.preventDefault();
        currentImg.classList.toggle("img-show");
        nextImg.classList.toggle("img-show");
    });

    prevBtn.addEventListener("click", function (event) {
        var currentImg = document.querySelector(".img-show");
        var currentIndex = currentImg.getAttribute('id');
        var prevIndex = parseInt(currentIndex) - 1;
        if (prevIndex < 0) {prevIndex = galleryLength - 1}
        var prevImg = document.getElementById(prevIndex.toString());
        
        event.preventDefault();
        currentImg.classList.toggle("img-show");
        prevImg.classList.toggle("img-show");
    });