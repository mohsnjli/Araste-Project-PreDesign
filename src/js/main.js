// --------- Go To Top Button -----


let goToTop = document.getElementById("goToTop");
goToTop.style.transform = "translateX(-100px)";
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
        goToTop.style.transform = "translateX(0)";
    } else {
        goToTop.style.transform = "translateX(-100px)";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome , Firefox and Opera
};
// --------- Go To Top Button End-----

let header = document.getElementById("header");
window.onload = function () {
    headerTrasition()
}

function headerTrasition() {
    header.style.transform = "translateY(0)"
}

// ----------Dark Mode Functions------
let waveSvg = document.getElementById("footerWave");
let darkModeBtn = document.getElementById("darkModeBtn");
let darkModeIcon = document.getElementById("darkModeIcon");
let afterLi = document.getElementsByClassName("after");
let body = document.querySelector("#body");
let isDark = true;

darkModeBtn.addEventListener("click", function () {
    body.classList.toggle("dark")
    if (isDark) {
        waveSvg.src = "/pics/icons/svg/pattern(dark).svg";
        darkModeIcon.style.transform = "rotate(180deg)";
        afterLi.style.backgroundColor = "white";
        isDark = false;
    } else {
        waveSvg.src = "/pics/icons/svg/pattern(footer).svg";
        darkModeIcon.style.transform = "rotate(0)";
        afterLi.style.backgroundColor = "white";

        isDark = true;
    }
});