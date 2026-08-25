import "./theme.js";
// import "./loader.js";

console.info("portfolio.js ok.");

const learnMoreBtn = document.querySelector(".learn-more-btn");

const projectDetails = document.querySelector(".project-details");

const detailsCloseBtn = document.querySelector(".project-details-close");

const screens = [...document.querySelectorAll(".screen")];

const lightbox = document.querySelector(".lightbox");

const lightboxImage = document.querySelector(".lightbox-image");

const lightboxClose = document.querySelector(".lightbox-close");

const prevBtn = document.querySelector(".prev");

const nextBtn = document.querySelector(".next");

let currentImageIndex = 0;

/* =========================
   AUTO OPEN PROJECT DETAILS
   ========================= */

const urlParams = new URLSearchParams(window.location.search);

const project = urlParams.get("project");

/* =========================
   FLOWTRACK PROJECT DETAILS OPENING
   ========================= */

if (project === "flowtrack") {

   projectDetails.classList.add("is-open");

   // Mise à jour de l'accessibilité
   projectDetails.setAttribute("aria-hidden", "false");

   // Le bouton doit également refléter l'état ouvert
   learnMoreBtn.setAttribute("aria-expanded", "true");

   // Modification du texte du bouton
   learnMoreBtn.textContent = "Réduire";
}

/* =========================
   CODEX C2 ADDITION: PROJECT DETAILS
   ========================= */

function setProjectDetailsState(isOpen) {

   if (!projectDetails || !learnMoreBtn) return;

   projectDetails.classList.toggle("is-open", isOpen);

   learnMoreBtn.setAttribute("aria-expanded", String(isOpen));

   projectDetails.setAttribute("aria-hidden", String(!isOpen));

   learnMoreBtn.textContent = isOpen ? "Reduce" : "Learn more";

   if (isOpen) {

      projectDetails.scrollIntoView({

         behavior: "smooth",

         block: "start"

      });

   }

}

learnMoreBtn?.addEventListener("click", () => {

   setProjectDetailsState(!projectDetails.classList.contains("is-open"));

});

detailsCloseBtn?.addEventListener("click", () => {

   setProjectDetailsState(false);

   learnMoreBtn?.focus();

});

/* =========================
   CODEX C2 ADDITION: GALLERY LIGHTBOX
   ========================= */

function updateLightboxImage() {

   const screen = screens[currentImageIndex];

   if (!screen || !lightboxImage) return;

   lightboxImage.src = screen.src;

   lightboxImage.alt = screen.alt || "Project preview image";

}

function openLightbox(index) {

   if (!lightbox || !screens.length) return;

   currentImageIndex = index;

   updateLightboxImage();

   lightbox.classList.add("is-open");

   lightbox.setAttribute("aria-hidden", "false");

   document.body.classList.add("no-scroll");

   lightboxClose?.focus();

}

function closeLightbox() {

   if (!lightbox) return;

   lightbox.classList.remove("is-open");

   lightbox.setAttribute("aria-hidden", "true");

   document.body.classList.remove("no-scroll");

}

function showNextImage(direction) {

   if (!screens.length) return;

   currentImageIndex = (currentImageIndex + direction + screens.length) % screens.length;

   updateLightboxImage();

}

screens.forEach((screen, index) => {

   screen.addEventListener("click", () => openLightbox(index));

});

lightboxClose?.addEventListener("click", closeLightbox);

prevBtn?.addEventListener("click", () => showNextImage(-1));

nextBtn?.addEventListener("click", () => showNextImage(1));

lightbox?.addEventListener("click", event => {

   if (event.target === lightbox) closeLightbox();

});

document.addEventListener("keydown", event => {

   if (!lightbox?.classList.contains("is-open")) return;

   if (event.key === "Escape") closeLightbox();

   if (event.key === "ArrowLeft") showNextImage(-1);

   if (event.key === "ArrowRight") showNextImage(1);

});

/* =========================
   CODEX C2 ADDITION: PROJECT RATING STORAGE
   ========================= */

// const ratingBlocks = document.querySelectorAll("[data-project-rating]");

// function getRatings() {

//    return JSON.parse(localStorage.getItem("portfolio-project-ratings") || "{}");

// }

// function saveRating(projectId, rating) {

//    const ratings = getRatings();

//    ratings[projectId] = {

//       rating,

//       updatedAt: new Date().toISOString()

//    };

//    localStorage.setItem("portfolio-project-ratings", JSON.stringify(ratings));

// }

// ratingBlocks.forEach(block => {

//    const projectId = block.dataset.projectRating;

//    const buttons = block.querySelectorAll(".rating-btn");

//    const feedback = block.querySelector(".rating-feedback");

//    const storedRating = getRatings()[projectId]?.rating;

//    function paintRating(rating) {

//       buttons.forEach(button => {

//          const isSelected = Number(button.dataset.rating) <= rating;

//          button.classList.toggle("is-selected", isSelected);

//          button.setAttribute("aria-pressed", String(Number(button.dataset.rating) === rating));

//       });

//       if (feedback) feedback.textContent = rating ? `Saved rating: ${rating}/5.` : "";

//    }

//    paintRating(Number(storedRating) || 0);

//    buttons.forEach(button => {

//       button.addEventListener("click", () => {

//          const rating = Number(button.dataset.rating);

//          saveRating(projectId, rating);

//          paintRating(rating);

//       });

//    });

// });
