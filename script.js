let slideIndex = 0; // index of slide
showSlides(); // show slides
/*
This function is the logic behind the automatic slideshow functionality
*/
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

/*
This fucntion helps us clear the inputs.
*/
function clear(){
    document.getElementById("input-name").value="";
    document.getElementById("input-email").value="";
    document.getElementById("input-phone").value="";
    document.getElementById("input-message").value="";
    document.getElementById("input-choice").value="";
    document.getElementById("input-date").value="";
}

document.getElementById("button").onclick = function () {clear()}; //the onclick action