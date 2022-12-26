function decrement(e) {
    const btn = e.target.parentNode.parentElement.querySelector(
        'button[data-action="decrement"]'
    );
    const target = btn.nextElementSibling;
    let value = Number(target.value);
    value--;
    if (value === -1) {
        value = 0;
    }
    target.value = value;
    
    
}

function increment(e) {
    const btn = e.target.parentNode.parentElement.querySelector(
        'button[data-action="decrement"]'
    );
    const target = btn.nextElementSibling;
    let value = Number(target.value);
    value++;
    target.value = value;
}

const decrementButtons = document.querySelectorAll(
    `button[data-action="decrement"]`
);

const incrementButtons = document.querySelectorAll(
    `button[data-action="increment"]`
);

decrementButtons.forEach(btn => {
    btn.addEventListener("click", decrement);
});

incrementButtons.forEach(btn => {
    btn.addEventListener("click", increment);
});



// Gallery Picture Zoom
//  Gallery Pictures Select & 
let mainPic = document.querySelector("#mainPic");
let picZoomBg = document.getElementById("picZoomBg")
let exitBtn = document.getElementById("#exitBtn")


 mainPic.addEventListener("click", function () {
    picZoomBg.classList.toggle("hidden")
    mainPic.classList.toggle("lg:scale-110");
    mainPic.classList.toggle("lg:-translate-x-96");
    mainPic.classList.toggle("lg:translate-y-12")
    mainPic.style.transition = "all 0.5s ease";

})
function exFunc() {
    mainPic.classList.toggle("lg:translate-y-12")
    mainPic.classList.toggle("lg:-translate-x-96");
    mainPic.classList.toggle("lg:scale-110");
    picZoomBg.classList.toggle("hidden")

}
let thumbPicCont = document.querySelectorAll(".thumbPicCont img");
for (let i = 0; i <= thumbPicCont.length; i++) {

    mainPic.src = thumbPicCont[0].src;
    thumbPicCont[i].addEventListener("click", function () {
        mainPic.src = thumbPicCont[i].src;
        
        
    })

}