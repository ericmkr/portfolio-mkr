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



const DISPLAY_TIME = 3000;

function openModal() {

   submitBtn.disabled = true;

   document.documentElement.classList.add("modal-open");          ///
   
   document.body.classList.add("modal-open");         ///

   console.log(document.body.className);           ///

   overlay.hidden = false;

   // modal.hidden = true;

   requestAnimationFrame(() => {

      overlay.classList.add("show");

      // modal.classList.add("show");

   });

}

function closeModal() {

   overlay.classList.remove("show");

   //    modal.classList.remove("show");

   overlay.addEventListener("click", closeModal);

   document.documentElement.classList.remove("modal-open");          ///

   document.body.classList.remove("modal-open");         ///

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

/// 

   // updateModal("loading");



///

   setTimeout(() => {

      window.location.reload();

   }, 

   DISPLAY_TIME);
   
});

