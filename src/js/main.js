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