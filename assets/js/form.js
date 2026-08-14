import { devConfig, formConfig } from "./config.js";
import { openModal, updateModal, autoCloseModal } from "./modal.js";
import { hidePageLoader, showPageLoader } from "./loader.js";

console.info("form.js ok.");

/* =========================
   FORM ELEMENTS
   ========================= */

const form = document.getElementById("contact-form");

const submitBtn = document.getElementById("submit-btn");

const nameInput = document.getElementById("name");

const emailInput = document.getElementById("email");

const messageInput = document.getElementById("message");

const fields = [

   nameInput,

   emailInput,

   messageInput

];

/* =========================
   PREFILLED FORM DATA
   ========================= */

if (devConfig.enabled && devConfig.prefillForm) {

   nameInput.value = devConfig.formData.name;

   emailInput.value = devConfig.formData.email;

   messageInput.value = devConfig.formData.message;

}

/* =========================
   SUBMIT AUTOMATION
   ========================= */

if (devConfig.enabled && formConfig.autoTest) {

   setInterval(() => {

      if (!submitBtn.disabled) {

         console.info("⚙️ Auto submit 🤖");

         form.requestSubmit();

      }

   }, 
   
   formConfig.autoTestDelay);

}

/* =========================
   FORM SUBMIT VALIDATION
   ========================= */

function updateSubmitButton() {

   console.info("Form valid :", form.checkValidity());

   submitBtn.disabled = !form.checkValidity();

}

fields.forEach(field => {

   field.addEventListener("input", updateSubmitButton);

});

updateSubmitButton();

/* =========================
   FORM SUBMIT FEEDBACK
   ========================= */


function debugResponse(response, responseTime) {

   console.group("HTTP Response");

   console.info("Status :", response.status);
   
   console.info("Status Text :", response.statusText);
   
   console.info("OK :", response.ok);
   
   console.info("Redirected :", response.redirected);
   
   console.info("URL :", response.url);

   console.info(`Response Time : ${responseTime.toFixed(2)} ms`);

   if ("headers" in response) {
   
      console.info("headers :", response.headers);
   
   }

   // if ("json" in response) {

   //    const data = await response.json();
   
   //    console.info("Response Body :", data);

   // }

   if (response.ok) {

      console.info("✔ Request succeeded");

      updateModal("success");

   }

   else {
   
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
   
   }

   console.groupEnd();

   return response.ok;

}

/* =========================
   FORM SUBMISSION
   ========================= */

form.addEventListener("submit", async (e) => {

   e.preventDefault();

   // const formData = new FormData(form);

   submitBtn.textContent = "Sending...";

   showPageLoader("Preparing secure feedback...");

   await new Promise(resolve => setTimeout(resolve, 650));

   hidePageLoader();

   openModal();

   updateModal("loading");

   let submissionSucceeded = false;

   try {

      const start = performance.now();
 
      // Simule une attente réseau (dev)

      await new Promise(resolve => setTimeout(resolve, 1500));

      // Test du catch (dev)

      // throw new Error("Network Error");

      // Fausse réponse HTTP (dev)
   
      const response = {

         ok: true,
   
         status: 200,

         statusText: "OK",
   
         redirected: false,
   
         url: "https://formsubmit.co/victorericmoukouri@outlook.com",

         headers: {Accept: "application/json"},

         // json: async () => ({
      
         //    success: true,
      
         //    responseMessage: "Message sent successfully.",
      
         //    data: {
      
         //       name: formData.get("name"),
      
         //       email: formData.get("email"),

         //       message: formData.get("message"),

         //       submittedAt: new Date().toISOString()

         //    }
   
         // })

      };

      // const response = await fetch(form.action, {

      //    method:"POST",

      //    headers: {Accept: "application/json"},
         
      //    body:new FormData(form),

      //    url: form.action,

      //    json: async () => ({
      
      //       // success: true,
      
      //       // responseMessage: "Message sent successfully.",
      
      //       data: {
      
      //          name: formData.get("name"),
      
      //          email: formData.get("email"),

      //          message: formData.get("message"),

      //          submittedAt: new Date().toISOString()

      //       }
   
      //    })
         
      // });

      const end = performance.now();

      const responseTime = end - start;

      submissionSucceeded = debugResponse(response, responseTime);

   } 
   
   catch (error) {

      console.error(error);

      updateModal("error");

   }

   await autoCloseModal();

   submitBtn.textContent = "Send message"; 
  
   submitBtn.disabled = false;

   // if (submissionSucceeded) {

   //    window.location.reload();

   // }

   // form.reset();
   
});