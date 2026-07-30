/* =========================
   PREFILLED FORM
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

   const form = document.querySelector("form");
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

   // Vérification à chaque saisie

   fields.forEach(field => {

      field.addEventListener("input", updateSubmitButton);

   });

   // Vérification au chargement

   updateSubmitButton();

/* =========================
   FORM SUBMIT FEEDBACK
   ========================= */

const form = document.querySelector("form");
const overlay = document.getElementById("modal-overlay");
const modal = document.getElementById("form-modal");
const icon = document.getElementById("modal-icon");
const title = document.getElementById("modal-title");
const message = document.getElementById("modal-message");
// const countdown = document.getElementById("modal-countdown");
// const closeBtn = document.getElementById("modal-close");
// let redirectTimer;

// const DISPLAY_TIME = 11000;

function openModal() {

   overlay.hidden = false;
   modal.hidden = false;

   requestAnimationFrame(() => {

      overlay.classList.add("show");
      modal.classList.add("show");

   });

}




// function closeModal() {
//    overlay.classList.remove("show");
//    modal.classList.remove("show");
 
   // setTimeout(()=>{
   //    overlay.hidden = true;
   //    modal.hidden = true;
   // }, 
   // 350
   // );

   // closeBtn.addEventListener("click", ()=>{
   //    clearTimeout(redirectTimer);
   //    closeModal();
   // });
// }





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





form.addEventListener("submit", async (e) => {

   e.preventDefault();

   // submit-btn.disabled = true;
   // submit-btn.textContent = "Sending...";

   openModal();

   updateModal("loading");

   try {

      const response = await fetch(form.action, {
         method:"POST",
         headers: {Accept: "application/json"},
         body:new FormData(form)
         
      });

      await debugResponse(response);

      if (response.ok) {

         updateModal("success");
      
      } 

      else if (response.status === 429) {

         alert (
            "⚠️ Error 429 - Too Many Requests\n\n" +
            "You have sent too many requests in a short period of time.\n\n" +
            "Please wait a few minutes before trying again."
         )
      
      }

      else {

         // alert (
         //    `Erreur HTTP ${response.status}\n\n${response.statusText}`
         // );

         updateModal("error");
      }
   }

   catch(error) {

      console.error(error);

      // alert (
      //    "Une erreur réseau est survenue.\n\n" + error.message
      // );

      // updateModal("error");

   }

   // submit-btn.disabled = false;
   // submit-btn.textContent = "Send message";

   setTimeout(() => {

      window.location.reload();

   }, 

   DISPLAY_TIME);

});







// document.addEventListener("keydown",(e)=>{
//    if(e.key==="Escape" && modal.classList.contains("show")){
//       clearTimeout(redirectTimer);
//       closeModal();
//    }
// });

// function startCountdown(seconds){
//    let remaining = seconds;

//    countdown.textContent = `Redirecting in ${remaining} seconds...`;

//    const interval = setInterval(()=>{
//       remaining--;

//       if (remaining > 1) {
//          countdown.textContent = `Redirecting in ${remaining} seconds...`;
//       }

//       else if (remaining === 1) {
//          countdown.textContent = "Redirecting in 1 second...";
//       }

//       else{
//          clearInterval(interval);
//       }
//    }, 
//    1000);
// }






// function debugResponse(response) {

//    console.group("HTTP");

//    console.log("Status :", response.status);
//    console.log("Status Text :", response.statusText);
//    console.log("OK :", response.ok);
//    console.log("Redirected :", response.redirected);
//    console.log("URL :", response.url);

//    console.groupEnd();

// }
