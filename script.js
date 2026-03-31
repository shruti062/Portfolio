document.addEventListener("DOMContentLoaded", function () {

  const typingTexts = [
    "Front-End Web Developer & Designer",
    "B.Tech CSE Student",
    "JavaScript Developer",
    "UI & UX Enthusiast"
  ];

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const typingElement = document.getElementById("typingText");

  function typingEffect() {
    const currentText = typingTexts[textIndex];

    if (!isDeleting) {
      typingElement.textContent = currentText.substring(0, charIndex++);
    } else {
      typingElement.textContent = currentText.substring(0, charIndex--);
    }

    let speed = isDeleting ? 50 : 100;

    // Pause at full text
    if (!isDeleting && charIndex === currentText.length + 1) {
      speed = 1200;
      isDeleting = true;
    }

    // Move to next text
    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % typingTexts.length;
      speed = 400;
    }

    setTimeout(typingEffect, speed);
  }

  typingEffect();
});
const toggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});