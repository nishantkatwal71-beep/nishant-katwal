

const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots");

let currentIndex = 0;
const totalSlides = images.length;

// Create navigation dots
images.forEach((image, index) => {

    const dot = document.createElement("span");

    dot.classList.add("dot");

    if(index === 0){
        dot.classList.add("active");
    }

    dot.addEventListener("click", () => {

        currentIndex = index;

        updateSlider();

    });

    dotsContainer.appendChild(dot);

});

const dots = document.querySelectorAll(".dot");

n
function updateSlider(){

    slides.style.transform = `translateX(-${currentIndex * 100}%)`;

    dots.forEach(dot => dot.classList.remove("active"));

    dots[currentIndex].classList.add("active");

}

// Next Button
next.addEventListener("click", () => {

    currentIndex++;

    if(currentIndex >= totalSlides){
        currentIndex = 0;
    }

    updateSlider();

});

// Previous Button
prev.addEventListener("click", () => {

    currentIndex--;

    if(currentIndex < 0){
        currentIndex = totalSlides - 1;
    }

    updateSlider();

});



const accordions = document.querySelectorAll(".accordion");

accordions.forEach(accordion => {

    accordion.addEventListener("click", function(){

        this.classList.toggle("active");

        const panel = this.nextElementSibling;

        if(panel.style.maxHeight){

            panel.style.maxHeight = null;

        }else{

            panel.style.maxHeight = panel.scrollHeight + "px";

        }

    });

});


window.addEventListener("resize", updateSlider);