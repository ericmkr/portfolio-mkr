/* =========================
   HERO TYPING SECTION
========================= */

const roles = [ 
   "Front-End Developer",
   "UX/UI Designer",
   "Product Designer",
   "Web Designer",
   "Graphic Designer",
   "QA Analyst"
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
   PROJECT SHOWCASE
========================= */


/* =========================
   PROJECT DATABASE
========================= */

// const projects = {
//    flowtrack: {
//       title: "FlowTrack",

//       category: "Mobile App",

//       description:
//          "FlowTrack est une application de gestion des tâches permettant aux utilisateurs d'organiser leurs journées, suivre leur progression et améliorer leur productivité.",

//       role: "UX/UI Designer",

//       tools: [
//          "Figma",
//          "Miro",
//          "Photoshop"
//       ],

//       challenge:
//          "Aider les utilisateurs à gérer efficacement leurs tâches sans surcharge cognitive.",

//       solution:
//          "Création d'une interface minimaliste avec système de priorisation visuelle.",

//       images: [
//          "assets/img/flowtrack-1.png",
//          "assets/img/flowtrack-2.png",
//          "assets/img/flowtrack-3.png"
//       ]
//    }
// };

/* =========================
   AUTO GENERATION
========================= */

// const buttons = document.querySelectorAll(".learn-more-btn");

// buttons.forEach(button => {

//    button.addEventListener("click", () => {

//       const projectId = button.dataset.project;

//       const project = projects[projectId];

//       if (!project) return;

//       const parentCard = button.closest(".card.text");

//       const existingDetail =
//          parentCard.parentElement.querySelector(".project-details");

//       if (existingDetail) {
//          existingDetail.remove();
//          return;
//       }

//       const details = document.createElement("div");

//       details.classList.add("project-details");

//       details.innerHTML = `
      
//          <div class="details-container">

//             <h2>${project.title}</h2>

//             <span class="category">
//                ${project.category}
//             </span>

//             <p class="description">
//                ${project.description}
//             </p>

//             <div class="info-grid">

//                <div>
//                   <h3>Role</h3>
//                   <p>${project.role}</p>
//                </div>

//                <div>
//                   <h3>Tools</h3>
//                   <p>${project.tools.join(", ")}</p>
//                </div>

//             </div>

//             <div class="section">
//                <h3>Challenge</h3>
//                <p>${project.challenge}</p>
//             </div>

//             <div class="section">
//                <h3>Solution</h3>
//                <p>${project.solution}</p>
//             </div>

//             <div class="gallery">

//                ${project.images.map(img => `
//                   <img src="${img}" alt="">
//                `).join("")}

//             </div>

//          </div>

//       `;

//       parentCard.parentElement.appendChild(details);
//    });

// });

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
         body:new FormData(form),
         headers: {Accept: "application/json"}
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