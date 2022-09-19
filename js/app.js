
$('.owl-services').owlCarousel({
    items:3,
    loop:true,
    dots: true,
    nav: false,
    autoplay: true,
    margin:5,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          }
      }
})

let toggle = document.querySelector(".mobile-header .bars .toggle");

let nav = document.querySelector(".mobile-header nav");

toggle.addEventListener("click" , ()=>{
    console.log(nav);
    nav.classList.toggle("show");
})
