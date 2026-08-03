/* =========================
   HERO TYPING SECTION
   ========================= */

const roles = [ 
   "Front-End Developer",
   "UX/UI Designer",
   // "Product Designer",
   // "Web Designer",
   // "Graphic Designer",
   // "QA Analyst"
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
   PROJECTS SHOWCASE
   ========================= */

const projectCards = [
   {
      title: "Eden Market – Digital marketplace for local merchants",
      description: "UX/UI design of a mobile marketplace connecting local merchants and customers.",
      image: "assets/img/eden-market-logo.jpg",
      imageAlt: "Eden Market logo",
      category: "UX/UI Design",
      link: "#",
      id: "eden-market"
   },
   
   {
      title: "ONCOLINK – Cancer patient care companion",
      description: "UX/UI design of a mobile healthcare app for cancer patient monitoring and medical follow-up.",
      image: "assets/img/ONCOLINK-splash-logo.png",
      imageAlt: "ONCOLINK logo",
      category: "UX/UI Design",
      link: "#",
      id: "oncolink"
   }
];

const projectsGrid = document.querySelector(".projects-grid");

function createProjectCard(project) {

   const cardLink = document.createElement("a");
   cardLink.className = "card-link";
   cardLink.href = project.link;

   cardLink.innerHTML = 
   `
      <article class="project-card" data-project="${project.id}">
         <div class="project-image">
            <img src="${project.image}" alt="${project.imageAlt}"/>
            <div class="project-overlay">
               <span class="project-category">${project.category}</span>
            </div>
         </div>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
      </article>
   `;

   return cardLink;
}

if (projectsGrid) {
   projectCards.forEach(project => {
      projectsGrid.appendChild(createProjectCard(project));
   });
}

/* =========================
   SKILLS SHOWCASE
   ========================= */


/* =========================
   TOOLS SHOWCASE
   ========================= */

// const track = document.querySelector(".tools-track");
// const cards = [...track.children];

// cards.forEach(card => {
//    track.appendChild(card.cloneNode(true));
// });

/* =========================
   PROJECT DATABASE
   ========================= */


/* =========================
   PREFILLED FORM
   ========================= */

const isDev = false;

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