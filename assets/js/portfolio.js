import { themeConfig } from

const learnMoreBtn = document.querySelector(".learn-more-btn");
const projectDetails = document.querySelector(".project-details");

learnMoreBtn.addEventListener("click", () => {

   const isOpen = projectDetails.classList.toggle("is-open");

   learnMoreBtn.setAttribute("aria-expanded", isOpen);
   projectDetails.setAttribute("aria-hidden", !isOpen);

   learnMoreBtn.textContent = isOpen
   ? "Réduire"
   : "En savoir plus";

});

