console.info("loader.js ok.");

const loader = document.getElementById("page-loader");

const loaderText = loader?.querySelector(".page-loader-text");

/* =========================
   CODEX C2 ADDITION: PAGE LOADER
   ========================= */

export function showPageLoader(text = "Loading...") {

   if (!loader) return;

   if (loaderText) loaderText.textContent = text;

   loader.hidden = false;

   requestAnimationFrame(() => {

      loader.classList.add("is-visible");

   });

}

export function hidePageLoader() {

   if (!loader) return;

   loader.classList.remove("is-visible");

   setTimeout(() => {

      loader.hidden = true;

   }, 300);

}

function isPageLink(link) {

   if (!link || link.target === "_blank" || link.hasAttribute("download")) return false;

   const url = new URL(link.href, window.location.href);

   return url.origin === window.location.origin && url.pathname.endsWith(".html");

}

document.addEventListener("click", event => {

   const link = event.target.closest("a");

   if (!isPageLink(link)) return;

   event.preventDefault();

   showPageLoader("Opening page...");

   setTimeout(() => {

      window.location.href = link.href;

   }, 450);

});

window.addEventListener("pageshow", hidePageLoader);
