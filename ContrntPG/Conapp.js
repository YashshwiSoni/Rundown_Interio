
// const shobs= document.querySelector('#apage2');
// const bs1= document.querySelector('.base1');
// const bs2= document.querySelector('.base2');


// window.addEventListener('scroll', ()=>{
//     const replac = shobs.getBoundingClientRect().top;

//     if (replac <= 0) {
//         bs1.style.opacity = 0;
//         bs2.style.opacity = 1;
//       }else{
//         bs1.style.opacity = 1;
//         bs2.style.opacity = 0;
//       }
// });


let ee = document.querySelector('#mob-menu')
let ff = document.querySelector('#menupg')
let gg1 = document.querySelector('#mnulogo1')
let gg2 = document.querySelector('#mnulogo2')
let mnuposition = 0;

ee.addEventListener("click", function(){
  if (mnuposition === 0){
  ff.style.top = "0";
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
    }, 500); 
  });
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

