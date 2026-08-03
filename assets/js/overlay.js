/* =========================
   PREFILLED FORM DATA
========================= */
 
const isDev = true;

if (isDev) {

   document.getElementById("name").value = "Tester";

   document.getElementById("email").value = "tester@tests.test";

   document.getElementById("message").value = "Hello, this is a test message sent automatically to verify that the form is working correctly.";

}

/* =========================
   FORM SUBMIT VALIDATION
========================= */

const form = document.getElementById("contact-form");

const submitBtn = document.getElementById("submit-btn");

const fields = [

   document.getElementById("name"),

   document.getElementById("email"),

   document.getElementById("message")

];

function updateSubmitButton() {

   console.log(form.checkValidity());        ///

   submitBtn.disabled = !form.checkValidity();

}

// Vérification à chaque saisie

fields.forEach(field => {

   field.addEventListener("input", updateSubmitButton);

});

// Vérification au chargement

updateSubmitButton();

/* =========================
   FORM SUBMIT FEEDBACK
========================= */

const overlay = document.getElementById("modal-overlay");

const modal = document.getElementById("form-modal");

const icon = document.getElementById("modal-icon");

const title = document.getElementById("modal-title");

const message = document.getElementById("modal-message");

const DISPLAY_TIME = 11000;

function getScrollbarWidth() {
 
   return window.innerWidth - document.documentElement.clientWidth;

}

function openModal() {
 
   const scrollbarWidth = getScrollbarWidth();
 
   document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);
 
   document.body.classList.add('no-scroll');

   submitBtn.disabled = true;

   console.log(document.body.className);
    
   overlay.hidden = false;

   // modal.hidden = false;

   requestAnimationFrame(() => {
      
      overlay.classList.add("show");

      // modal.classList.add("show");

   });

}

function updateModal(state) {

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


function closeModal() {
 
   document.body.classList.remove('no-scroll');
 
   document.documentElement.style.setProperty('--scrollbar-width', `0px`);

   // overlay.classList.remove("show");

   // modal.classList.remove("show");

   overlay.hidden = true;

   console.log("modal-close");

   // setTimeout(() => {
   
   // overlay.hidden = true;

   // modal.hidden = true;
 
   // }, 
 
   // 350

   // );

}



form.addEventListener("submit", async (e) => {

   e.preventDefault();

   submitBtn.textContent = "Sending...";

   openModal();

   // updateModal("loading");

      
   setTimeout(() => {

      window.location.reload();

   }, 

   DISPLAY_TIME);
   
});

overlay.addEventListener("click", closeModal);

