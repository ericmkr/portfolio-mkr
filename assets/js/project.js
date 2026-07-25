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