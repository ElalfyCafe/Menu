const slides = document.querySelectorAll(".slides img");
let slideindex = 0;
let intervalid = null;

// initializeSlider()
document.addEventListener("DOMContentLoaded",initializeSlider)

function initializeSlider(){

   if(slides.length >0){
      slides[slideindex].classList.add("displaySlide");
      intervalid =  setInterval(nextSlide,5000);
   }
   
}
function showSlide(index){

   if(index >= slides.length){
      slideindex=0;
   }
   else if(index<0)
   {
 slideindex = slides.length-1;
   }
   slides.forEach(slide => {
      slide.classList.remove("displaySlide")
   })
   slides[slideindex].classList.add("displaySlide");
}
function prevSlide(){
   clearInterval(intervalid);
   slideindex--;
   showSlide(slideindex);
}
function nextSlide(){
   clearInterval(intervalid);
   slideindex++;
   showSlide(slideindex)
}
