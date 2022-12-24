// ----------Dark Mode Functions------
let $ = document;
let footerWaveSvg = $.getElementById("footerWave");
let darkModeBtn = $.getElementById("darkModeBtn");
let darkModeIcon = $.getElementById("darkModeIcon");
let body = $.querySelector("#body");
let isDark = true;
let likeIcon = $.querySelector("#likeIcon");
let moneyIcon = $.querySelector("#moneyIcon");
let deliveryIcon = $.querySelector("#deliveryIcon");
let darkmod = localStorage.getItem("dark");
let logo = $.querySelectorAll(".iconDark");



const enDark = () => {
    body.classList.add("dark");
    logo.src = "/pics/logo-dark.png";
    likeIcon.src = "/pics/icons/svg/Star(dark).svg";
    moneyIcon.src = "/pics/icons/svg/Money(dark).svg";
    deliveryIcon.src = "/pics/icons/svg/Delivery(dark).svg"
    footerWaveSvg.src = "/pics/icons/svg/pattern(dark).svg";
    darkModeIcon.style.transform = "rotate(-180deg)";
    body.style.backgroundColor = "#243b53";
    darkModeIcon.src = "/pics/icons/svg/contrast(dark).svg";
    localStorage.setItem("dark", "enabled");

}
const disDark = () => {
    body.classList.remove("dark");
    logo.src = "/pics/logo.png";
    likeIcon.src = "/pics/icons/svg/Star.svg";
    moneyIcon.src = "/pics/icons/svg/Money.svg";
    deliveryIcon.src = "/pics/icons/svg/Delivery.svg";
    footerWaveSvg.src = "/pics/icons/svg/pattern(footer).svg";
    darkModeIcon.style.transform = "rotate(0)";
    body.style.backgroundColor = "#fff";
    darkModeIcon.src = "/pics/icons/svg/contrast.svg";
    localStorage.setItem("dark", "disabled");
}
if (darkmod === "enabled") {
    enDark();
}
darkModeBtn.addEventListener("click", (e) => {
    darkmod = localStorage.getItem("dark");
    if (darkmod === "disabled") {
        enDark();
    } else {
        disDark();
    }
})
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
    navBar.style.transform = "scale(1) ";
})
exBtn.addEventListener("click", function () {
    navBar.style.transform = "scale(0) ";
    navBar.style.display = "hidden";
})

