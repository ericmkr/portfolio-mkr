const projects = [

   {
      id: "flowtrack",

      title: "FlowTrack",

      subtitle:
         "Application mobile pour la gestion des tâches quotidiennes",

      image:
         "assets/img/FlowTrack logo.png",

      background:
         "#dff3ff",

      category:
         "Mobile App",

      role:
         "UX/UI Designer",

      duration:
         "3 semaines",

      description:
         "FlowTrack aide les utilisateurs à organiser leur travail quotidien grâce à une interface simple et intuitive.",

      challenge:
         "Réduire la charge mentale liée à la gestion de plusieurs tâches simultanées.",

      solution:
         "Création d'un système de priorisation visuelle et d'une navigation simplifiée.",

      tools: [
         "Figma",
         "Miro",
         "Photoshop"
      ],

      gallery: [
         "assets/img/flowtrack1.png",
         "assets/img/flowtrack2.png",
         "assets/img/flowtrack3.png"
      ],

      liveDemo:
         "#",

      github:
         "#"
   },

   {
      id: "timing-finance",

      title: "Timing Finance",

      subtitle:
         "Plateforme d'investissement communautaire",

      image:
         "assets/img/timing.png",

      background:
         "#f5f5f5",

      category:
         "Fintech",

      role:
         "Founder & Product Designer",

      duration:
         "En cours",

      description:
         "Écosystème destiné à démocratiser l'investissement et l'éducation financière.",

      challenge:
         "Créer une plateforme crédible et accessible.",

      solution:
         "Design orienté confiance, transparence et simplicité.",

      tools: [
         "Figma",
         "HTML",
         "CSS",
         "JavaScript"
      ],

      gallery: [],

      liveDemo:
         "#",

      github:
         "#"
   }

];

// Generation auto des cartes

const portfolioGrid =
   document.getElementById("portfolio-grid");

function renderProjects() {

   portfolioGrid.innerHTML = "";

   projects.forEach(project => {

      portfolioGrid.innerHTML += `

         <div class="project-row">

            <div class="card image">

               <img
                  src="${project.image}"
                  alt="${project.title}"
               >

            </div>

            <div
               class="card text"
               style="background:${project.background}"
            >

               <h2>${project.title}</h2>

               <p>${project.subtitle}</p>

               <button
                  class="learn-more-btn"
                  data-id="${project.id}"
               >
                  Learn More
               </button>

            </div>

         </div>

      `;
   });

   initButtons();
}

renderProjects();

// Generation auto des details

function initButtons() {

   const buttons =
      document.querySelectorAll(".learn-more-btn");

   buttons.forEach(button => {

      button.addEventListener("click", () => {

         const projectId =
            button.dataset.id;

         const project =
            projects.find(
               p => p.id === projectId
            );

         const row =
            button.closest(".project-row");

         const existing =
            row.querySelector(".project-details");

         if(existing){

            existing.remove();
            return;
         }

         const details =
            document.createElement("div");

         details.classList.add(
            "project-details"
         );

         details.innerHTML = createProjectHTML(project);

         row.appendChild(details);

      });

   });

}

// Template dynamique

function createProjectHTML(project){

   return `

      <div class="details-content">

         <h2>${project.title}</h2>

         <p>
            ${project.description}
         </p>

         <div class="meta-grid">

            <div>
               <h3>Role</h3>
               <p>${project.role}</p>
            </div>

            <div>
               <h3>Duration</h3>
               <p>${project.duration}</p>
            </div>

            <div>
               <h3>Category</h3>
               <p>${project.category}</p>
            </div>

         </div>

         <div class="case-study">

            <h3>Challenge</h3>

            <p>
               ${project.challenge}
            </p>

            <h3>Solution</h3>

            <p>
               ${project.solution}
            </p>

         </div>

         <div class="tools">

            ${project.tools.map(tool => `
               <span>${tool}</span>
            `).join("")}

         </div>

         <div class="gallery">

            ${project.gallery.map(image => `
               <img src="${image}">
            `).join("")}

         </div>

         <div class="links">

            <a href="${project.liveDemo}">
               Live Demo
            </a>

            <a href="${project.github}">
               Github
            </a>

         </div>

      </div>

   `;
}