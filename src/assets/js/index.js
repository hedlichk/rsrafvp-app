var beenSplashed = localStorage.getItem("beenSplashed");
  
window.onload = () => {
  
  'use strict';
 
  if (localStorage.getItem("beenSplashed")){
    location.href = 'main.html'
  } 
}

window.addEventListener("click", () => {

    localStorage.setItem("beenSplashed", true);
    location.href = 'main.html'    
})

window.addEventListener("touchstart", () => {

  localStorage.setItem("beenSplashed", true);
  location.href = 'main.html'
})

window.addEventListener("touchend", () => {

  localStorage.setItem("beenSplashed", true);
  location.href = 'main.html'
})
