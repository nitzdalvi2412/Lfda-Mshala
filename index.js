


function toggleMenu() {
  console.log("toggleMenu");
  document.getElementById("menu").classList.toggle("active");
}

// Close the menu if clicked outside
// document.addEventListener("click", function(event) {
//     let menu = document.getElementById("menu");
//     let menuIcon = document.querySelector(".menu-img");

//     if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
//         menu.classList.remove("show");
//     }
// });



  

document.addEventListener("DOMContentLoaded", function () {
  AOS.init();
  const faqItems = document.querySelectorAll(".faq-item");
  
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    
    question.addEventListener("click", () => {
      // Toggle current item
      item.classList.toggle("active");
      
      // Close other FAQs
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });
    });
  });
});