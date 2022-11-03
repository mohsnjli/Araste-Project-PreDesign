let signInSub = document.querySelector("#signIn");
let signInContainer = document.querySelector("#signInContainer");
let changeBtn = document.querySelector("#changeBtn");
let logIn = document.querySelector("#logIn");
let logInContainer = document.querySelector("#logInContainer");
let loginImage = document.querySelector("#loginImage");
let iconRotate = document.querySelector(".fa-chevron-right");
let isLogin = false;
let loginOpt2 = document.querySelector("#opt2");
changeBtn.innerHTML = 'ورود به حساب کاربری <i class="fa-solid fa-chevron-right"></i>';
changeBtn.addEventListener("click", function () {
    if (isLogin) {
        isLogin = false;
        changeBtn.innerHTML = 'ورود به حساب کاربری <i class="fa-solid fa-chevron-right"></i>';
    } else {
        changeBtn.innerHTML = '<i class="fa-solid fa-chevron-left"></i>  ثبت نام در سایت';
        isLogin = true;
    }
    signInSub.classList.toggle("opacity-0");
    signInContainer.classList.toggle("translate-x-96");
    signInSub.classList.toggle("w-1/3");
    logIn.classList.toggle("w-full");
    logInContainer.classList.toggle("opacity-0");
    logInContainer.classList.toggle("hidden");
    loginImage.classList.toggle("-translate-x-full");
    loginOpt2.classList.toggle("hidden")
    loginOpt2.classList.add("translate-y-0")

});


// -----------Mobile - Tablet Login Animation -------------


let mobileLoginBtn = document.getElementById("mobileLoginBtn");
let mobileLoginBtnArrow = document.querySelector("#mobileLoginBtn span");
let mobileLoginContainer = document.getElementById("mobileLoginContainer")
let bgBlur = document.querySelector("#bgBlur");
mobileLoginBtn.addEventListener("click", function () {
    mobileLoginContainer.classList.toggle("-translate-y-[70%]");
    mobileLoginContainer.classList.toggle("text-4xl");
    mobileLoginBtnArrow.classList.toggle("hidden")
    bgBlur.classList.toggle("blur-md")
    
})