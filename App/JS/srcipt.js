const preloader = document.querySelector(".preloader");
const arrow = document.querySelector(".arrow");

// hide the preloader
function show(){
    preloader.classList.add("preloader-hidden");
    arrow.classList.add("arrow-hide");
};
setInterval(show,2000)