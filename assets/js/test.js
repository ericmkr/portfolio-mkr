function openModal() {

   document.documentElement.classList.add("modal-open");
   
   document.body.classList.add("modal-open");


}

function closeModal() {

   document.documentElement.classList.remove("modal-open");

   document.body.classList.remove("modal-open");


   // closeBtn.addEventListener("click", () => {

   //    clearTimeout(redirectTimer);
   
   //    closeModal();
   
   // });

}

form.addEventListener("submit", async (e) => {

   e.preventDefault();


   openModal();

/// 

   // updateModal("loading");

    
   // try {

   //    const response = await fetch(form.action, {

   //       method:"POST",

   //       headers: {Accept: "application/json"},
         
   //       body:new FormData(form)
         
   //    });

   //    await debugResponse(response);

   //    if (response.ok) {

   //       updateModal("success");
      
   //    } 

   //    else if (response.status === 429) {

   //       alert (
   //          "⚠️ Error 429 - Too Many Requests\n\n" +
   //          "You have sent too many requests in a short period of time.\n\n" +
   //          "Please wait a few minutes before trying again."
   //       )
      
   //    }

   //    else {

   //       // alert (
   //       //    `Erreur HTTP ${response.status}\n\n${response.statusText}`
   //       // );

   //       updateModal("error");

   //    }

   // }

   // catch(error) {

   //    console.error(error);

   //    // alert (
   //    //    "Une erreur réseau est survenue.\n\n" + error.message
   //    // );

   //    // updateModal("error");

   // }



///

   setTimeout(() => {

      window.location.reload();

   }, 

   DISPLAY_TIME);
   
});

overlay.addEventListener("click", closeModal);
