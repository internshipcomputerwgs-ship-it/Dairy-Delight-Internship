// Add chatbot functionality later
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Start the slider
showSlide(currentSlide);
setInterval(nextSlide, 3000); // change every 3 seconds
function recommendFlavor() {
  const age = document.getElementById("ageInput").value;
  const output = document.getElementById("recommendation");

  if (!age || age <= 0) {
    output.textContent = "Please enter a valid age!";
    return;
  }

  let flavor = "";

  if (age <= 12) {
    flavor = "Cotton Candy";
  } else if (age <= 18) {
    flavor = "Chocolate Fudge";
  } else if (age <= 30) {
    flavor = "Strawberry Cheesecake";
  } else if (age <= 50) {
    flavor = "Classic Vanilla Bean";
  } else {
    flavor = "Pistachio Almond";
  }

  output.textContent = `We recommend: 🍦 ${flavor}!`;
}
