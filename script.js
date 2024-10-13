// htmlcss progress circular bar 
let htmlProgress = document.querySelector(".html-css"),
  htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
  htmlEndValue = 90,
  htmlspeed = 30;

let progresshtml = setInterval(() => {
  htmlStartValue++;

  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#960104 ${
    htmlStartValue * 3.6
  }deg, #ededed 0deg)`; // #6A0305

  if (htmlStartValue == htmlEndValue) {
    clearInterval(progresshtml);
  }
}, htmlspeed);

// javasript progress circular bar 
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
  javascriptEndValue = 75,
  jsspeed = 30;

let progressjs = setInterval(() => {
  javascriptStartValue++;

  javascriptValue.textContent = `${javascriptStartValue}%`;
  javascriptProgress.style.background = `conic-gradient(#CC3F42 ${ javascriptStartValue*3.6 }deg, #ededed 0deg)`;

  if (javascriptStartValue == javascriptEndValue) {
    clearInterval(progressjs);
  }
}, jsspeed);

// php progress circular bar 
let phpProgress = document.querySelector(".php"),
  phpValue = document.querySelector(".php-progress");

let phpStartValue = 0,
  phpEndValue = 80,
  phpspeed = 30;

let progressphp = setInterval(() => {
  phpStartValue++;

  phpValue.textContent = `${phpStartValue}%`;
  phpProgress.style.background = `conic-gradient( #AC1618  ${
    phpStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (phpStartValue == phpEndValue) {
    clearInterval(progressphp);
  }
}, phpspeed);

// reactjs progress circular bar 
let reactProgress = document.querySelector(".reactjs"),
  reactValue = document.querySelector(".reactjs-progress");

let reactStartValue = 0,
  reactEndValue = 30,
  rjsspeed = 30;

let progressreact = setInterval(() => {
  reactStartValue++;

  reactValue.textContent = `${reactStartValue}%`;
  reactProgress.style.background = `conic-gradient(#E5676A ${
    reactStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (reactStartValue == reactEndValue) {
    clearInterval(progressreact);
  }
}, rjsspeed);


// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});


// javascript for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar-top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 


// adding funtionality to back to top button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// Get all 'Read More' links
const readMoreLinks = document.querySelectorAll('.read-more');

// Add click event listeners to all 'Read More' links
readMoreLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();  // Prevent the default link behavior

        // Find the associated image and paragraph within the same card
        const cardBody = this.closest('.card-body');
        const cardImage = cardBody.previousElementSibling; // The image is before card-body
        const cardText = cardBody.querySelector('.card-text'); // Find the text

        // Toggle visibility of the image and paragraph
        if (cardImage.style.display !== 'none') {
            // Hide the image and show the text
            cardImage.style.display = 'none';
            cardText.style.display = 'block';
            this.textContent = 'Show Image'; // Change link text
        } else {
            // Show the image and hide the text
            cardImage.style.display = 'block';
            cardText.style.display = 'none';
            this.textContent = 'Read More'; // Change link text
        }
    });
});
// Select all 'Read More' links
const readMoreLinks1 = document.querySelectorAll('.read-more1');

// Add a click event listener to each 'Read More' link
readMoreLinks1.forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor behavior

    // Find the associated '.more-text' paragraph in the same card
    const cardBody1 = this.closest('.content');
    const moreText1 = cardBody1.querySelector('.more-text');

    // Toggle the visibility of the additional paragraph
    if (moreText1.style.display === 'none') {
      moreText1.style.display = 'block'; // Show the hidden paragraph
      this.textContent = 'Show Less'; // Update the link text
    } else {
      moreText1.style.display = 'none'; // Hide the paragraph
      this.textContent = 'Read More'; // Revert the link text
    }
  });
});
