console.info("config.js ok.");

export const devConfig = {

   enabled: true,

   prefillForm: false,

   scrollToSection: true,

   formData: {

      name: "Tester",

      email: "tester@tests.test",

      message: "Hello, this is a test message sent automatically to verify that the form is working correctly."
   }

};

export const formConfig = {

   autoTest: true,

   autoTestDelay: 11000,

   // maxMessageLength: 3000

};

export const modalConfig = {
   
   displayTime: 5000

};

export const themeConfig = {

   defaultTheme: "auto",

   storageKey: "portfolio-theme-preference",

   modes: [

      "auto",

      "light",

      "dark"

   ],

   transitionDuration: 300

};

// export const carouselConfig = {

//    autoplay: true,

//    duration: 3000,

//    pauseOnHover: true,

//    pauseOnFocus: true

// };