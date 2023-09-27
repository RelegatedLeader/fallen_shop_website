let slideIndex = 0;
showSlides();

function showSlides() {

    //at first itll be 0 
  let slides = document.querySelectorAll('.slide');
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++; //increment it 
  if (slideIndex > slides.length) {
    slideIndex = 1; //set it to 1 
  }
  slides[slideIndex - 1].style.display = 'block'; ///unhide it , keep it going forever with -1 ?
  setTimeout(showSlides, 2300); // Change slide every 2 seconds (adjust as needed)
}


//this is to allow the button to be pressed to change the slides , optional 
/*function plusSlides(n) {
    showSlides((slideIndex += n));
  }
  
  function currentSlide(n) {
    showSlides((slideIndex = n));
  } */


  //for the logo button dropdown 
  // Get references to HTML elements
// Get references to HTML elements
const logo = document.getElementById('breadcrumb_logo');
const dropdownMenu = document.querySelector('.dropdown-menu');

// Initially hide the dropdown menu
dropdownMenu.style.display = 'none';

// Event listener for the logo click
logo.addEventListener('click', function () {
    // Toggle the visibility of the dropdown menu
    if (dropdownMenu.style.display === 'block') {
        dropdownMenu.style.display = 'none';
    } else {
        dropdownMenu.style.display = 'block';
    }
});