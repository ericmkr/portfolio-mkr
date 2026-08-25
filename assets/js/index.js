import "./theme.js";
import "./cards.js";
import "./form.js";
// import "./loader.js";
import { devConfig } from "./config.js";

console.info("index.js ok.");

/* =========================
   SCROLL NAVIGATION BEHAVIOR
   ========================= */

history.scrollRestoration = "manual";

window.addEventListener("load", () => {
 
   if (devConfig.enabled && devConfig.scrollToSection) {

      const devAnchor = "#projects";

      const target = document.querySelector(devAnchor);

      if (target) {

         requestAnimationFrame(() => {

            target.scrollIntoView({

               behavior: "instant",

               block: "start"
   
            });
   
         });

         return;

      }

   }

   window.scrollTo({

      top: 0,
   
      left: 0,

      behavior: "instant"   

   });

});

/* =========================
   HERO TYPING SECTION
   ========================= */

const roles = [ 

   "Front-End Developer",

   "UX/UI Designer",

   // "Product Designer",

   // "Web Designer",

   // "Graphic Designer",

   "QA Analyst"

];

const typingText = document.getElementById("typing-text");

const accessibleRoles = document.getElementById("accessible-roles");

if (accessibleRoles) {

   accessibleRoles.textContent = roles.join(", ");
   
}

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

const backTopBtn = document.getElementById('back-to-top');

function updateBackToTopVisibility() {

   if (!backTopBtn) return;

   const shouldShow = window.scrollY > 240;
   
   backTopBtn.classList.toggle("show", shouldShow);

}
  
if (backTopBtn) {

   backTopBtn.addEventListener('click', () => {

      window.scrollTo({ 
      
         top: 0, 
      
         behavior: 'smooth' 
      
      }); 

   });

   window.addEventListener('scroll', updateBackToTopVisibility, { passive: true });

   window.addEventListener('resize', updateBackToTopVisibility);

   updateBackToTopVisibility();  

};