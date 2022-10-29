// ----------Dark Mode Functions------
let footerWaveSvg = document.getElementById("footerWave");
let darkModeBtn = document.getElementById("darkModeBtn");
let darkModeIcon = document.getElementById("darkModeIcon");

let body = document.querySelector("#body");
let isDark = true;


darkModeBtn.addEventListener("click", function () {
    body.classList.toggle("dark")
    if (isDark) {
        footerWaveSvg.src = "/pics/icons/svg/pattern(dark).svg";
        darkModeIcon.style.transform = "rotate(180deg)";
        body.style.backgroundColor = "#334e68";
        darkModeIcon.src = "/pics/icons/svg/contrast(dark).svg";
        isDark = false;
    } else {
        footerWaveSvg.src = "/pics/icons/svg/pattern(footer).svg";
        darkModeIcon.style.transform = "rotate(0)";
        body.style.backgroundColor = "#fff";
        darkModeIcon.src = "/pics/icons/svg/contrast.svg";
        isDark = true;
    }
});
// --------- Go To Top Function -----
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

// ------------hamburgerMenuBtn Toggle Function -------

let hamburgerMenuBtn = document.getElementById("humburgerMenuBtn");
let exBtn = document.getElementById("exBtn");
let navBar = document.querySelector("#navBar");
hamburgerMenuBtn.addEventListener("click", function () {
    navBar.style.display = "block";
    navBar.style.transform = "translateX(0px)"
})
exBtn.addEventListener("click", function () {
    navBar.style.transform = "translateX(-100%)"
    navBar.style.display = "hidden";
})



























// let scrollCont = document.getElementById("srollContainer");

// function nextFunc() {
//     scrollCont.scrollBy({
//         left: -40,
//         behavior: "smooth",
//     })
// }

// function prevFunc() {
//     scrollCont.scrollBy({
//         left: 80,
//         behavior: "smooth",
//     })
// }