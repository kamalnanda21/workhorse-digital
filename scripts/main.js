$('.card-area').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


//services menu

$(document).ready(function(){
  $('.services-menu').click(function(){
      $('.submenu').toggle();
  });
});


// hamburger menu 

// const hamburger = document.getElementById("hamburger");
// const navlinks = document.getElementById("navlinks");

// hamburger.addEventListener("click", ()=>{
//     navlinks.classList.toggle("navlinks-active");
//     hamburger.classList.toggle("cross");
// })


// accordian

var acc = document.getElementsByClassName("accordion");
var i;

// Open the first accordion by default
var firstPanel = acc[0].nextElementSibling;
firstPanel.style.maxHeight = firstPanel.scrollHeight + "px";
acc[0].classList.add("active-acc");

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    // Close all panels except the clicked one
    for (var j = 0; j < acc.length; j++) {
      if (acc[j] !== this) {
        acc[j].classList.remove("active-acc");
        var panel = acc[j].nextElementSibling;
        panel.style.maxHeight = null;
      }
    }
    
    // Toggle active class and open/close panel
    this.classList.toggle("active-acc");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}