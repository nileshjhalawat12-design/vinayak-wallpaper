// Fade animation
const sections = document.querySelectorAll("section");

window.addEventListener("scroll",()=>{
  sections.forEach(sec=>{
    const top = window.scrollY;
    const offset = sec.offsetTop - 400;
    if(top >= offset){
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
    }
  });
});

sections.forEach(sec=>{
  sec.style.opacity = 0;
  sec.style.transform = "translateY(60px)";
  sec.style.transition = "0.8s ease";
});

// Slider
let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(()=>{
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
},3000);