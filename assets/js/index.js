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
   } else {
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
   FORM SUBMIT FEEDBACK
========================= */

// const form = document.getElementById('contactForm');
// const status = document.getElementById('formStatus');
// const submitBtn = document.getElementById('submitBtn');

// form.addEventListener('submit', async (e) => { 
//    e.preventDefault();

//     submitBtn.disabled = true;
//     submitBtn.textContent = "Envoi en cours...";

//     const formData = new FormData(form);

//     try {
//         const response = await fetch(form.action, {
//             method: "POST",
//             body: formData
//         });

//         const data = await response.json();

//         if (data.success === "true") {

//             status.textContent =
//                 "✓ Message envoyé avec succès !";

//             status.className = "success";

//             form.reset();

//         } else {

//             status.textContent =
//                 "Une erreur est survenue.";

//             status.className = "error";
//         }

//     } catch (error) {

//         status.textContent =
//             "Impossible d'envoyer le message.";

//         status.className = "error";
//     }

//     submitBtn.disabled = false;
//     submitBtn.textContent = "Envoyer";
// });

/* =========================
   BACK TO TOP BTN
========================= */

// Back-to-top button: reveal on scroll and smooth return to top
var backTopBtn = document.getElementById('back-to-top');

function updateBackToTopVisibility() {
   if(!backTopBtn) return;

   var shouldShow = window.scrollY > 240;
   
   if(shouldShow) backTopBtn.classList.add('show');   
   else backTopBtn.classList.remove('show');   
}
  
if(backTopBtn){ 
   backTopBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' }); 
   });
   window.addEventListener('scroll', updateBackToTopVisibility, { passive: true });
   window.addEventListener('resize', updateBackToTopVisibility);
   updateBackToTopVisibility();
  }
