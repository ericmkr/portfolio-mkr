import { themeConfig } from "./config.js";

console.info("theme.js ok.");

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