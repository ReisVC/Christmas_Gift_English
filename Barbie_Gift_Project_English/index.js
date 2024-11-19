let index = 1;
showSlides(index);

function addSlides(n) {
  showSlides(index += n)
}

function currentSlide(n) {
  showSlides(index = n)
}


let index1 = 1

function addSlides1(n) {
    showSlides(index1 += n)
}

function currentSlide1(n) {
    showSlides(index1 += n)
}



function showSlides(n) {
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    index = 1;
  }

  if (n < 1) {
    index = slides.length
  }

  for (let i=0; i<slides.length; i++) {
    slides[i].style.display = 'none';
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[index-1].style.display = "flex";
  dots[index-1].className += " active";
}


function removeDisplay() {
    let area = document.getElementById("Area")
   
    
    image.style.display = "none"
    alert("oii")
}
let btn = document.getElementById("btn-20")
let image = document.querySelector("img-barbie")

btn.addEventListener('click',()=>{
     image.style.display = "none"
})