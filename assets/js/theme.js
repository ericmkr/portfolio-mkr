import { themeConfig } from "./config.js";

console.info("theme.js ok.");

/* =========================
   THEME DISPLAY
   ========================= */

function initTheme() {
 
   const themeToggle = document.getElementById("theme-toggle");
   
   const themeIcon = document.getElementById("theme-icon");
   
   const themeLabel = document.getElementById("theme-label");

   const {defaultTheme, storageKey, modes, transitionDuration} = themeConfig;
   
   /* =========================
      SYSTEM THEME
      ========================= */
   
   function getSystemTheme() {
      
      const hour = new Date().getHours();
      
      return hour >= 6 && hour < 18
      
      ? "light"
      
      : "dark";

      // return window.matchMedia("(prefers-color-scheme: dark)").matches

      // ? "dark"

      // : "light";
    
   }
   
   /* =========================
      THEME UI DATA
      ========================= */
      
   const themeData = {
   
      auto: {
      
         label: "Auto",
   
         icon: "🌓"
   
      },
   
      light: {
   
         label: "Light",
   
         icon: "☀️"
   
      },

      dark: {
   
         label: "Dark",
   
         icon: "🌙"
   
      }
   
   };

   /* =========================
      GET SAVED MODE
      ========================= */
   
   let mode = localStorage.getItem(storageKey);
      
   if (!modes.includes(mode)) {
   
      mode = defaultTheme;   
         
   }

   /* =========================   
      UPDATE THEME UI
      ========================= */
   
   function updateThemeUI(currentMode) {

      const data = themeData[currentMode];

      if (!themeToggle || !themeIcon || !themeLabel) return;
   
      if (!data) return;
      
      themeIcon.textContent = data.icon;

      themeLabel.textContent = data.label;
   
      themeToggle.setAttribute(
   
         "aria-label",
   
         `Current theme: ${data.label}. Activate to change theme.`
   
      );
   
   }

   /* =========================   
      APPLY THEME
      ========================= */

   function applyTheme(selectedMode) {
      
      const activeTheme =
      
      selectedMode === "auto"
      
      ? getSystemTheme()
      
      : selectedMode;
      
      document.documentElement.setAttribute(
         
         "data-theme",
         
         activeTheme
         
      );

      updateThemeUI(selectedMode);
    
   }
   
   /* =========================   
      THEME TOGGLE
      ========================= */

   // if (!themeToggle) return;

   if (themeToggle) {

   themeToggle.addEventListener("click", () => {
   
      const currentIndex = modes.indexOf(mode);
   
      const nextIndex = (currentIndex + 1) % modes.length;
      
      mode = modes[nextIndex];

      localStorage.setItem(
      
         storageKey,
      
         mode
      
      );
      
      themeIcon.classList.add("is-changing");
        
      themeLabel.classList.add("is-changing");
      
      setTimeout(() => {

         applyTheme(mode);
      
         themeIcon.classList.remove("is-changing");
      
         themeLabel.classList.remove("is-changing");
      
      }, 
      
      transitionDuration);
    
   });
   
   /* =========================
      INITIALIZE THEME
      ========================= */
   
   applyTheme(mode);

   /* =========================   
      AUTO THEME SYNC
      ========================= */
   
   setInterval(() => {

      if (mode === "auto") {
   
         applyTheme("auto");
   
      }
   
   }, 
   
   60000);

}};

initTheme();