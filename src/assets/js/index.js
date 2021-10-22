var showSplash = localStorage.getItem("showSplash");
  
window.onload = () => {
  
    'use strict';
    if (localStorage.getItem("showSplash")){
        location.href = 'main.html';
    }
}

window.addEventListener("click", () => {

    localStorage.setItem("showSplash", false);
    location.href = 'main.html';
})

window.addEventListener("touchstart", () => {

    localStorage.setItem("showSplash", false);
    location.href = 'main.html';
})

window.addEventListener("touchend", () => {

    localStorage.setItem("showSplash", false);
    location.href = 'main.html';
})
