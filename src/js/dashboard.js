let isOpen = localStorage.getItem("dropDown");

let settingDropDown = document.getElementById("settingDropDown")
let settingBtn = document.getElementById("settingBtn")

function openDropDown() {
    settingDropDown.classList.replace("inline", "hidden");
    localStorage.setItem("dropDown", "open");
}

function closeDropDown() {
    settingDropDown.classList.replace("hidden", "inline");
    localStorage.setItem("dropDown", "close");

}
settingBtn.addEventListener("click", function () {
    if (drop)

})