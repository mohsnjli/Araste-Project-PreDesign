// ----------Dark Mode Functions------
let footerWaveSvg = document.getElementById("footerWave");
let darkModeBtn = document.getElementById("darkModeBtn");
let darkModeIcon = document.getElementById("darkModeIcon");
let body = document.querySelector("#body");
let isDark = true;
let likeIcon = document.querySelector("#likeIcon");
let moneyIcon = document.querySelector("#moneyIcon");
let deliveryIcon = document.querySelector("#deliveryIcon");

darkModeBtn.addEventListener("click", function () {
    body.classList.toggle("dark")
    if (isDark) {
        likeIcon.src = "/pics/icons/svg/Star(dark).svg"
        moneyIcon.src = "/pics/icons/svg/Money(dark).svg"
        deliveryIcon.src = "/pics/icons/svg/Delivery(dark).svg"
        footerWaveSvg.src = "/pics/icons/svg/pattern(dark).svg";
        darkModeIcon.style.transform = "rotate(180deg)";
        body.style.backgroundColor = "#243b53";
        darkModeIcon.src = "/pics/icons/svg/contrast(dark).svg";
        isDark = false;
    } else {
        likeIcon.src = "/pics/icons/svg/Star.svg";
        moneyIcon.src = "/pics/icons/svg/Money.svg";
        deliveryIcon.src = "/pics/icons/svg/Delivery.svg";
        footerWaveSvg.src = "/pics/icons/svg/pattern(footer).svg";
        darkModeIcon.style.transform = "rotate(0)";
        body.style.backgroundColor = "#fff";
        darkModeIcon.src = "/pics/icons/svg/contrast.svg";
        isDark = true;
    }
});
// --------- Go To Top Function -----
let goToTop = document.getElementById("goToTop");
let socialBar = document.getElementById("socialBar");
goToTop.style.transform = "translateX(-100px)";
socialBar.style.transform = "translateY(100px)";
window.onscroll = function () {
    scrollFunction(goToTop, socialBar)
};

function scrollFunction(bars1, bars2) {
    if (document.body.scrollTop > 35 || document.documentElement.scrollTop > 35) {
        bars1.style.transform = "translateX(0)";
        bars2.style.transform = "translateY(0)";
    } else {
        bars1.style.transform = "translateX(-100px)";
        bars2.style.transform = "translateY(100px)";
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

const date = new Date();
var n = date.getFullYear();
let copyRightYear = document.getElementById("yearCopyRight");
copyRightYear.innerHTML = n +"copyrights";




















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