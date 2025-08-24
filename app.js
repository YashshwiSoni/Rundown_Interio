// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#mn'),
//     smooth: true
// });




let bbb = document.querySelector("#page3");
let ccc = document.querySelector("#image-highlights");
let ddd = document.querySelectorAll("#popup-list");
let ee = document.querySelector('#mob-menu')
let ff = document.querySelector('#menupg')
let gg1 = document.querySelector('#mnulogo1')
let gg2 = document.querySelector('#mnulogo2')
let hh = document.querySelector('#pgloder')

let mnuposition = 0;

bbb.addEventListener("mouseenter",function() {
    ccc.style.display= "block";
})
bbb.addEventListener("mouseleave",function() {
    ccc.style.display= "none";
})

ddd.forEach(function(e){
    e.addEventListener("mouseenter",function () {
    let shoimage =e.getAttribute("data-sho");
    ccc.style.backgroundImage = `url(${shoimage})`;
    console.log(shoimage);
    
})
})

ee.addEventListener("click", function(){
  if (mnuposition === 0){
  ff.style.top = 0;
  mnuposition = 1
  gg1.style.display = "none";
  gg1.style.transition= "opacity 3s ease";
  gg2.style.display = "block";

  }else{
    ff.style.top = "-100%";
  mnuposition = 0
  gg1.style.display = "block";
  gg2.style.display = "none";

  }
    
})

const linkclick = document.querySelectorAll('#menupgtxt a')
linkclick.forEach(link =>{
  link.addEventListener("click", function(e){
    e.preventDefault();
  ff.style.top = "-100%";
  mnuposition = 0
  gg1.style.display = "block";
  gg2.style.display = "none";

  setTimeout(() => {
      window.location.href = link.href;
    }, 700); 
  });
});

setTimeout(() => {
  hh.style.top = "-100%"
}, 4000);



var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 100,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
});


let totop = document.querySelector('#bttop')

window.addEventListener('scroll', ()=>{
  if(window.scrollY > 200){
    totop.style.display = "block";
  }else{
    totop.style.display = "none";
  }
});
 
totop.addEventListener('click',()=>{
  window.scrollTo({
    top:"0",
    behavior: "smooth"
  });
});

