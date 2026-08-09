import { modalConfig } from "./config.js";

console.info("modal.js ok.");

/* =========================
   MODAL ELEMENTS
========================= */

const overlay = document.getElementById("modal-overlay");

const modal = document.getElementById("form-modal");

const icon = document.getElementById("modal-icon");

const title = document.getElementById("modal-title");

const message = document.getElementById("modal-message");

const closeBtn = document.getElementById("modal-close");

// const countdown = document.getElementById("modal-countdown");

/* =========================
   SCROLLBAR
========================= */

function getScrollbarWidth() {
 
   return window.innerWidth - document.documentElement.clientWidth;

}

/* =========================
   OPEN MODAL
========================= */

export function openModal() {
 
   const scrollbarWidth = getScrollbarWidth();
 
   document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);

   document.body.classList.add('no-scroll');
   
   document.body.classList.add("modal-open");
 
   console.info(document.body.className);
    
   overlay.hidden = false;

   modal.hidden = false;

   requestAnimationFrame(() => {
      
      overlay.classList.add("show");

      modal.classList.add("show");

   });

}

/* =========================
   UPDATE MODAL
========================= */

export function updateModal(state) {

   switch (state) {

      case "loading":

         icon.textContent="⏳";

         title.textContent="Sending...";

         message.textContent="Your message is currently being sent.";
         
      break;

      case "success":

         icon.textContent="✓";

         title.textContent="Message sent successfully!";

         message.textContent="Thank you for contacting me. You will be redirected shortly.";

      break;

      case "error":

         icon.textContent="⚠";

         title.textContent="An error occurred.";

         message.textContent="Your message could not be sent. Please try again later.";

      break;

   };

}

/* =========================
   AUTO CLOSE RESOLVE
========================= */

let autoCloseTimer = null;

let autoCloseResolve = null;

function resolveAutoClose() {

   if (!autoCloseResolve) return;

   autoCloseResolve();

   autoCloseResolve = null;

}


/* =========================
   CLOSE MODAL
========================= */

export function closeModal() {

   if (autoCloseTimer) {

      clearTimeout(autoCloseTimer);

      autoCloseTimer = null;

   }
 
   resolveAutoClose();
 
   document.documentElement.style.setProperty('--scrollbar-width', `0px`);
   
   document.body.classList.remove('no-scroll');

   document.body.classList.remove("modal-open");

   overlay.classList.remove("show");

   modal.classList.remove("show");

   // overlay.hidden = true;

   // modal.hidden = true;

}

/* =========================
   AUTO CLOSE MODAL
========================= */

export function autoCloseModal() {

   return new Promise(resolve => {
 
      if (autoCloseTimer) {
      
         clearTimeout(autoCloseTimer);
      
      }

      autoCloseResolve = resolve;

      autoCloseTimer = setTimeout(() => {

         autoCloseTimer = null;

         closeModal();

      }, 
      
      modalConfig.displayTime);

   });

}

// function startCountdown(seconds) {

//    let remaining = seconds;

//    countdown.textContent = `Redirecting in ${remaining} seconds...`;

//    const interval = setInterval(() => {

//       remaining--;

//       if (remaining > 1) {

//          countdown.textContent = `Redirecting in ${remaining} seconds...`;
      
//       }

//       else if (remaining === 1) {
       
//          countdown.textContent = "Redirecting in 1 second...";
      
//       }

//       else {

//          clearInterval(interval);
      
//       }
   
//    }, 
   
//    1000);

// }

/* =========================
   CLOSE EVENTS
========================= */

overlay.addEventListener("click", closeModal);

closeBtn.addEventListener("click", closeModal);

document.addEventListener("keydown",(e) => {

   if (e.key === "Escape" && modal.classList.contains("show")) {
   
      closeModal();
   
   }

});