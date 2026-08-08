import "./form";

import { devConfig } from "./config.js";






/* =========================
   ANCHOR
========================= */

if (devConfig.enabled && devConfig.scrollToSection) {

   const devAnchor = "#contact";

   window.addEventListener("load", () => {

      const target = document.querySelector(devAnchor);

      if (!target) return;

      requestAnimationFrame(() => {
         target.scrollIntoView({
            behavior: "instant",
            block: "start"
         });
      });

   });

}
































/* =========================
   HERO TYPING SECTION
   ========================= */

const roles = [ 
   "Front-End Developer",
   "UX/UI Designer",
   // "Product Designer",
   // "Web Designer",
   // "Graphic Designer",
   // "QA Analyst"
];

const typingText = document.getElementById("typing-text");

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

   const currentRole = roles[roleIndex];

   if (!isDeleting) {

      typingText.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentRole.length) {

         isDeleting = true;

         setTimeout(typeEffect, 3000);

         return;

      }

   } 
   
   else {

      typingText.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {

         isDeleting = false;

         roleIndex = (roleIndex + 1) % roles.length;

      }

   }

   setTimeout(typeEffect, isDeleting ? 50 : 100);

}

typeEffect();

/* =========================
   BACK TO TOP BTN
   ========================= */

var backTopBtn = document.getElementById('back-to-top');

function updateBackToTopVisibility() {

   if (!backTopBtn) return;

   var shouldShow = window.scrollY > 240;
   
   if (shouldShow) backTopBtn.classList.add('show'); 

   else backTopBtn.classList.remove('show');   

}
  
if (backTopBtn) {

   backTopBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' }); 
   });

   window.addEventListener('scroll', updateBackToTopVisibility, { passive: true });
   window.addEventListener('resize', updateBackToTopVisibility);

   updateBackToTopVisibility();  

};











