
document.addEventListener("DOMContentLoaded", function () {
    const catImages = [
        "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/495636.svg",
        "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/495625.svg",
        "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/495622.svg",
        "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/495619.svg",
        "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/495616.svg",
        "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/495613.svg",
        "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/495592.svg",
        "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/495579.svg",
        "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/336916.svg"
    ];

    function Slider(catsImg, place){
        let currentSlide = 0;
        let getPlace = document.getElementById(place);
        let sliderContent = "<button class=\"prev-slide button-slide\">&#9668;</button>\n" +
            "    <button class=\"next-slide button-slide\">&#9658;</button>\n" +
            "    <img src=\"\" alt=\"\">";
        getPlace.innerHTML = sliderContent;
        let carNavigationWrapper = getPlace.insertAdjacentHTML("beforeEnd", "<div class='cat-navigation__wrapper'></div>");
        let getNewElement = getPlace.querySelector(".cat-navigation__wrapper");
        catsImg.forEach(function (cat, i) {
            getNewElement.insertAdjacentHTML("beforeEnd", "<div class='cat-navigation' data-number='" + i + "'></div>");
        });

        getPlace.querySelector("img").setAttribute("src", catsImg[0]);
        getPlace.querySelector(".cat-navigation").classList.add("nav-active");

        function navigationActive(slideNumber) {
            let getNavAll = getPlace.querySelectorAll(".cat-navigation");
            [...getNavAll].forEach(function(navElement){
                navElement.classList.remove("nav-active");
            });

            getNavAll[slideNumber].classList.add("nav-active");
        }

        this.goToNextSlide = function(){
            if (currentSlide === catsImg.length - 1){
                currentSlide = 0;
            } else {
                currentSlide += 1;
            }
            getPlace.querySelector("img").setAttribute("src", catsImg[currentSlide]);
            navigationActive(currentSlide);
        };

        this.goToPrevioustSlide = function(){
            if (currentSlide === 0){
                currentSlide = catsImg.length - 1;
            } else {
                currentSlide -= 1;
            }
            getPlace.querySelector("img").setAttribute("src", catsImg[currentSlide]);
            navigationActive(currentSlide);
        };

        this.getSliderToNumber = function(number){
            currentSlide = number;
            getPlace.querySelector("img").setAttribute("src", catsImg[currentSlide]);
            navigationActive(currentSlide);
        };


        getPlace.querySelector(".cat-navigation__wrapper").addEventListener("click", (e) => {
            let target = e.target;
            if(target.className !== "cat-navigation") return;
            let getActiveSlideNumber = target.dataset.number;
            this.getSliderToNumber(+getActiveSlideNumber);
        });

        getPlace.querySelector(".prev-slide").addEventListener("click", () => {
            this.goToPrevioustSlide();
        });

        getPlace.querySelector(".next-slide").addEventListener("click", () => {
            this.goToNextSlide();
        });
    }


    const slider = new Slider(catImages, 'slider-1');
});