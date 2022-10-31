let signInSub = document.querySelector("#signIn");
let signInContainer = document.querySelector("#signInContainer");
let changeBtn = document.querySelector("#changeBtn");
let changeBtnIcon = document.querySelector(".fa-chevron-right")
let logIn = document.querySelector("#logIn");
let logInContainer = document.querySelector("#logInContainer");
let loginImage = document.querySelector("#loginImage");
let iconRotate = document.querySelector(".fa-chevron-right");
let isLogin = false;
changeBtn.textContent = "ورود به حساب کاربردی";
changeBtn.addEventListener("click", function () {
    if (isLogin) {
        changeBtn.textContent = "ورود به حساب کاربردی";
        isLogin = false;
    } else {
        changeBtn.textContent = "ثبت نام";
        isLogin = true;
    }
    signInSub.classList.toggle("opacity-0");
    signInContainer.classList.toggle("translate-x-96");
    signInSub.classList.toggle("w-1/3");
    logIn.classList.toggle("w-full");
    logInContainer.classList.toggle("opacity-0");
    logInContainer.classList.toggle("hidden");
    loginImage.classList.toggle("-translate-x-full");
    changeBtnIcon.classList.toggle("rotate-180")
    
});
