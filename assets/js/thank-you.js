import "./loader.js";

console.info("thank-you.js ok.");

/* =========================
   CODEX C2 ADDITION: THANK YOU REDIRECT
   ========================= */

const redirectDelay = 5;

const countdown = document.getElementById("countdown");

const progressBar = document.getElementById("progress-bar");

let remainingTime = redirectDelay;

function updateCountdown() {

   if (countdown) countdown.textContent = remainingTime;

   if (progressBar) {

      const progress = ((redirectDelay - remainingTime) / redirectDelay) * 100;

      progressBar.style.width = `${progress}%`;

   }

}

updateCountdown();

const timer = setInterval(() => {

   remainingTime--;

   updateCountdown();

   if (remainingTime <= 0) {

      clearInterval(timer);

      window.location.replace("index.html");

   }

}, 1000);
