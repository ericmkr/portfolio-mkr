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
   SUBMIT AUTOMATION
========================= */

const AUTO_TEST = false;

const AUTO_TEST_DELAY = 11000;

if (AUTO_TEST) {

   setInterval(() => {

      if (!submitBtn.disabled) {

         console.info("⚙️ Auto submit 🤖");

         form.requestSubmit();

      }

   }, 
   
   AUTO_TEST_DELAY);

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

   console.log(form.checkValidity());

   submitBtn.disabled = !form.checkValidity();

}

fields.forEach(field => {

   field.addEventListener("input", updateSubmitButton);

});

updateSubmitButton();

/* =========================
   FORM SUBMIT FEEDBACK
========================= */

const overlay = document.getElementById("modal-overlay");

const modal = document.getElementById("form-modal");

const icon = document.getElementById("modal-icon");

const title = document.getElementById("modal-title");

const message = document.getElementById("modal-message");

const closeBtn = document.getElementById("modal-close");

// const countdown = document.getElementById("modal-countdown");

const DISPLAY_TIME = 3000;

function getScrollbarWidth() {
 
   return window.innerWidth - document.documentElement.clientWidth;

}

function openModal() {
 
   const scrollbarWidth = getScrollbarWidth();
 
   document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);

   // document.documentElement.classList.add("modal-open");

   document.body.classList.add('no-scroll');
   
   document.body.classList.add("modal-open");
 
   console.log(document.body.className);

   submitBtn.disabled = true;
    
   overlay.hidden = false;

   modal.hidden = false;

   requestAnimationFrame(() => {
      
      overlay.classList.add("show");

      modal.classList.add("show");

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
 
   document.documentElement.style.setProperty('--scrollbar-width', `0px`);

   // document.documentElement.classList.remove("modal-open");
   
   document.body.classList.remove('no-scroll');

   document.body.classList.remove("modal-open");

   overlay.classList.remove("show");

   modal.classList.remove("show");

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

function debugResponse(response, responseTime) {

   console.group("HTTP Response");

   console.log("Status :", response.status);
   
   console.log("Status Text :", response.statusText);
   
   console.log("OK :", response.ok);
   
   console.log("Redirected :", response.redirected);
   
   console.log("URL :", response.url);

   console.log(`Response Time : ${responseTime.toFixed(2)} ms`);

   if ("headers" in response) {
   
      console.log("headers :", response.headers);
   
   }

   if (response.ok) {

      console.info("✔ Request succeeded");

      updateModal("success");

   return;

   }

   switch (response.status) {

      case 400:
         console.error("Bad Request");
      break;

      case 404:
         console.error("Not Found");
      break;

      case 429:
         console.warn("Too Many Requests");
         alert(
            "You have sent too many requests in a short period of time.\n\n" +
            "Please wait a few minutes before trying again."
         );
      break;

      case 500:
         console.error("Internal Server Error");
      break;

      default:
         console.error(`HTTP ${response.status} - ${response.statusText}`);
   
   }

   updateModal("error");

   console.groupEnd();

}

form.addEventListener("submit", async (e) => {

   e.preventDefault();

   submitBtn.textContent = "Sending...";

   openModal();

   updateModal("loading");

   try {

      const start = performance.now();
 
      // Simule une attente réseau

      await new Promise(resolve => setTimeout(resolve, 1500));

      // Test du catch

      // throw new Error("Network Error");

      // Fausse réponse HTTP
   
      const response = {

         ok: true,
   
         status: 200,

         statusText: "OK",
   
         redirected: false,
   
         url: "https://formsubmit.co/victorericmoukouri@outlook.com", // form.action

         headers: {Accept: "application/json"},

      };

      const end = performance.now();

      const responseTime = end - start;

      debugResponse(response, responseTime);

   } 
   
   catch (error) {

      console.error(error);

      updateModal("error");

   }
  
      // countdown();
      
   setTimeout(() => {

      // window.location.reload();

      closeModal();

      submitBtn.textContent = "Send message"; 

      submitBtn.disabled = false;

      // form.reset();

   }, 

   DISPLAY_TIME);
   
});

overlay.addEventListener("click", closeModal);

closeBtn.addEventListener("click", closeModal);

document.addEventListener("keydown",(e) => {

   if (e.key === "Escape" && modal.classList.contains("show")) {
   
      closeModal();
   
   }

});