console.info("cards.js ok.");

/* =========================
   PROJECTS
   ========================= */

   const projectCards = [

      {

         title: "Eden Market – Digital marketplace for local merchants",

         description: "UX/UI design of a mobile marketplace connecting local merchants and customers.",

         image: "assets/img/eden-market-logo.jpg",

         imageAlt: "",

         category: "UX/UI Design",

         link: "maintenance.html",

         id: "eden-market"

      },
   
      {

         title: "ONCOLINK – Cancer patient care companion",

         description: "UX/UI design of a mobile healthcare app for cancer patient monitoring and medical follow-up.",

         image: "assets/img/OncoLink-splash-logo.png",

         imageAlt: "",

         category: "UX/UI Design",

         link: "404.html",

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
   SKILLS
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
   EXPERIENCES
   ========================= */

   const experiences = [

      {

         title: "UX / UI Designer - Freelance",

         description: "Building responsive, accessible and performant web interfaces.",

         period: "2025 - 2026"

      },

      {
   
         title: "Product Designer - Freelance",
   
         description: "Building responsive, accessible and performant web interfaces.",
   
         period: "2025"
   
      }

   ];

   const experiencesContainer = document.querySelector(".experiences-container");

   function createExperienceItem(experience) {

      const experienceItem = document.createElement("div");
   
      experienceItem.className = "experience-item";
   
      experienceItem.innerHTML = 
      `
      <h4>${experience.title}</h4>

      <p>${experience.description}</p>

      <p>${experience.period}</p>
      `;

      return experienceItem;

   }

   if (experiencesContainer) {

      experiences.forEach(experience => {

         experiencesContainer.appendChild(createExperienceItem(experience));

      });

   }

/* =========================
   SERVICES
   ========================= */

   const services = [

      {

         title: "UX/UI Design",

         description: "Modern layouts, wireframes, and interfaces focused on clarity, usability, and visual consistency."

      },

      {

         title: "Landing Pages",

         description: "Conversion-oriented pages for products, campaigns, portfolios, and business presentations."

      },

      {

         title: "Website Redesign",

         description: "Visual and structural improvements that refresh existing websites without losing their identity."

      },

      {

         title: "Prototyping",

         description: "Interactive concepts and user flows that help validate product ideas before full development."

      },

      {

         title: "QA Testing",

         description: "Interface checks, bug reports, and usability reviews to make digital products feel polished."

      }

   ];

   const servicesGrid = document.querySelector(".services-grid");

   function createServiceCard(service, index) {

      const serviceCard = document.createElement("article");

      serviceCard.className = "service-card";

      serviceCard.innerHTML = 
      `
      <span class="service-number">${String(index + 1).padStart(2, "0")}</span>

      <h3>${service.title}</h3>

      <p>${service.description}</p>
      `;

      return serviceCard;

   }

   if (servicesGrid) {
   
      const startIndex = servicesGrid.querySelectorAll(".service-card").length;

      services.forEach((service, index) => {

         servicesGrid.appendChild(createServiceCard(service, index + startIndex));
   
      });

   }

/* =========================
   TOOLS / PARTNERS
   ========================= */

// const track = document.querySelector(".tools-track");
// const cards = [...track.children];

// cards.forEach(card => {
//    track.appendChild(card.cloneNode(true));
// });


/* =========================
   TESTIMONIALS
   ========================= */
   
   const testimonials = [
   
      {
   
         name: "David K.",
   
         role: "Startup Founder",
   
         message: "The interface became cleaner, faster to understand, and more convincing for our first users.",
   
         rating: 5.0
   
      },
   
      {
   
         name: "Sandra L.",
   
         role: "Independant client",
   
         message: "I appreciated the attention to detail, the communication, and the elegant final result.",
   
         rating: 4.8
   
      }

   ];

   const testimonialsGrid = document.querySelector(".testimonials-grid");

   function getInitials(name) {

      return name

      .split(" ")

      .map(word => word[0])

      .join("")

      .toUpperCase();

   }

   function createTestimonialCard(testimonial) {
   
      const testimonialCard = document.createElement("article");
     
      testimonialCard.className = "testimonial-card";
   
      testimonialCard.innerHTML = 
      `
      <div class="testimonial-profile">

         <div class="testimonial-avatar" aria-hidden="true">${getInitials(testimonial.name)}</div>

         <div>

            <h3>${testimonial.name}</h3>

            <p>${testimonial.role}</p>   

         </div>

      </div>

      <p class="testimonial-message">
         ${testimonial.message}
      </p>

      <p class="testimonial-rating">

      <span aria-hidden="true"> ${"★".repeat(Math.floor(testimonial.rating))} </span> 

      <span> ${testimonial.rating.toFixed(1)} out of 5 </span>
      
      </p>
      `;

      return testimonialCard;

   }

   if (testimonialsGrid) {

      testimonials.forEach(testimonial => {

         testimonialsGrid.appendChild(

            createTestimonialCard(testimonial)

         );

      });

   }

   /* =========================
      RATES
      ========================= */

   const rates = [
   
      {
      
         title: "Professional",
      
         price: "$249",
      
         features: [
      
            "Up to 5 custom sections",
      
            "UX/UI structure included",
      
            "Animations and polish",
      
            "Two revision rounds"
      
         ],
      
         note: "Best for portfolios and small businesses.",
      
         featured: true
   
      },
   
      {
   
         title: "Premium",
   
         price: "$499+",
   
         features: [
   
            "Multi-page website",
   
            "Advanced design support",
   
            "Testing and optimization",
   
            "Priority follow-up"
   
         ],
   
         note: "Best for complete digital projects.",
   
         featured: false
   
      },

   ];

   const ratesGrid = document.querySelector(".rates-grid");

   function createRateCard(rate) {

      const rateCard = document.createElement("article");
  
      rateCard.className = `rate-card${rate.featured ? " featured-rate" : ""}`;
  
      rateCard.innerHTML = 
      `
      <h3>${rate.title}</h3>

      <p class="rate-price">${rate.price}</p>
      
      <ul>

         ${rate.features 

            .map(feature => 

               `<li>${feature}</li>`)

               .join("")}   

      </ul>

      <p class="rate-note">${rate.note}</p>
      `;

      return rateCard;

   }

   if (ratesGrid) {

      rates.forEach(rate => {

         ratesGrid.appendChild(createRateCard(rate));

      });

   }
