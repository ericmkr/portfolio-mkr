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

const skills = [
   {
      title: "Front-End Development",
      icon: "fa-solid fa-code",
      level: 90
   },

   {
      title: "JavaScript",
      icon: "fa-brands fa-js",
      level: 75
   },

   {
      title: "Accessibility (WCAG)",
      icon: "fa-solid fa-universal-access",
      level: 85
   },

   {
      title: "Git & GitHub",
      icon: "fa-brands fa-github",
      level: 80
   }
];

const skillsContainer = document.querySelector(".skills-container");

function createSkillItem(skill) {

   const skillItem = document.createElement("div");
   skillItem.className = "skill-item";

   skillItem.innerHTML = 
   `
      <div class="skill-header">
         <div class="skill-left">
            <div class="icon-box">
               <i class="${skill.icon}" aria-hidden="true"></i>
            </div>
            <span>${skill.title}</span>
         </div>
         <span class="percent">${skill.level}%</span>
      </div>
      <div class="progress-bar">
         <div class="progress" style="width: ${skill.level}%" aria-hidden="true"></div>
      </div>
   `;

   return skillItem;

}

if (skillsContainer) {

   skills.forEach(skill => {
      skillsContainer.appendChild(createSkillItem(skill));
   });

}

/* =========================
   TOOLS SHOWCASE
   ========================= */

// const track = document.querySelector(".tools-track");
// const cards = [...track.children];

// cards.forEach(card => {
//    track.appendChild(card.cloneNode(true));
// });