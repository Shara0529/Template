const home = document.querySelectorAll(".home4");
const popup = document.querySelector(".popup-box");
const popupCloseBtn = popup.querySelector(".popup-footer .btn");
const popupCloseIcon = popup.querySelector(".popup-close-icon");

home.forEach(home4 => {
  home4.addEventListener("click", function(event) {
    if (event.target.tagName.toLowerCase() === "button") {
      const item = event.target.parentElement;
      const h3 = item.querySelector("h3").innerHTML;
      const readMoreCont = item.querySelector(".read-more-cont").innerHTML;
      popup.querySelector(".popup-header h3").innerHTML = h3;
      popup.querySelector(".popup-body").innerHTML = readMoreCont;
      popupBox(true);
    }
  });
});

const home1 = document.querySelectorAll(".home3");
const popup1 = document.querySelector(".popup-box");
const popupCloseBtn1 = popup.querySelector(".popup-footer .btn");
const popupCloseIcon1 = popup.querySelector(".popup-close-icon");

home1.forEach(home3 => {
  home3.addEventListener("click", function(event) {
    if (event.target.tagName.toLowerCase() === "button") {
      const item = event.target.parentElement;
      const h3 = item.querySelector("h3").innerHTML;
      const readMoreCont = item.querySelector(".read-more-cont").innerHTML;
      popup.querySelector(".popup-header h3").innerHTML = h3;
      popup.querySelector(".popup-body").innerHTML = readMoreCont;
      popupBox(true);
    }
  });
});

popupCloseBtn.addEventListener("click", () => popupBox(false));
popupCloseIcon.addEventListener("click", () => popupBox(false));

function popupBox(isOpen) {
  popup.classList.toggle("open", isOpen);
}


let mybutton = document.getElementById("corner-button");


window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none"; 
    }
}

function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
}

