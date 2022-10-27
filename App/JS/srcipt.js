const preloader = document.querySelector(".preloader");

// hide the preloader
function show(){
    preloader.classList.add("preloader-hidden");
};
setInterval(show,2000)