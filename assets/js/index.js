

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








/* =========================
   THEME DISPLAY
   ========================= */

function initTheme() {
  
   const storageKey = 'portfolio-theme-preference';
  
   const themeToggle = document.getElementById('theme-toggle');

   const themeIcon = document.getElementById('theme-icon');
  
   const themeLabel = document.getElementById('theme-label');
  
   const modes = ['auto', 'light', 'dark'];
  
   let mode = localStorage.getItem(storageKey) || 'auto';

   function getSystemTheme() {
    
      const hour = new Date().getHours();
    
      return hour >= 6 && hour < 18 ? 'light' : 'dark';
  
   }

   function applyTheme(selectedMode) {
    
      const activeTheme = selectedMode === 'auto' ? getSystemTheme() : selectedMode;
    
      document.documentElement.setAttribute('data-theme', activeTheme);

      themeIcon.textContent = selectedMode === 'auto' ? '🌓' : selectedMode === 'light' ? '☀️' : '🌙';
    
      themeLabel.textContent = selectedMode === 'auto' ? 'Auto' : selectedMode === 'light' ? 'Light' : 'Dark';

      themeToggle.setAttribute('aria-label', selectedMode === 'auto' ? 'Theme: Auto' : selectedMode === 'light' ? 'Theme: Light' : 'Theme: Dark');
  
   }
  
   function syncTheme() {
    
      applyTheme(mode);
  
   }

   themeToggle.addEventListener('click', () => {
    
      const currentIndex = modes.indexOf(mode);
    
      mode = modes[(currentIndex + 1) % modes.length];
    
      localStorage.setItem(storageKey, mode);

      themeIcon.classList.add('is-changing');

      themeLabel.classList.add('is-changing');
    
      setTimeout(() => {

         applyTheme(mode);

         themeIcon.classList.remove('is-changing');

         themeLabel.classList.remove('is-changing');

      }, 

      150);
  
   });
  
   syncTheme();
  
   setInterval(() => {
    
      if (mode === 'auto') {
      
         applyTheme('auto');
    
      }
  
   }, 
   
   60000);

}

initTheme();





/* =========================
   ANCHOR
========================= */

const isDev = true;

if (isDev) {

   const devAnchor = "#projects";

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