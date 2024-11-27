const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");
menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");
    const isOpen=navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line")
});
navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open")
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollReavalOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
}
ScrollReveal().reveal(".header_img img", {
    ...scrollReavalOption,
    origin: "right",
});
ScrollReveal().reveal(".header_content h2", {
    ...scrollReavalOption,
    origin: "right",
});
ScrollReveal().reveal(".header_content .p1", {
    ...scrollReavalOption,
    delay: 1000,
});
ScrollReveal().reveal(".header_content .p2", {
    ...scrollReavalOption,
    delay: 1500,
});
ScrollReveal().reveal(".experiences_content h2", {
    ...scrollReavalOption,
    origin: "left",
});
ScrollReveal().reveal(".experiences_content h3", {
  ...scrollReavalOption,
  origin: "left",
  delay: 1000,
});
ScrollReveal().reveal(".coverflow-swiper", {
  ...scrollReavalOption,
  origin: "left",
  delay: 1500,
});
ScrollReveal().reveal(".coverflow-swiper", {
  ...scrollReavalOption,
  origin: "left",
  delay: 1500,
});





    


document.addEventListener("DOMContentLoaded", () => {
    // Swiper Coverflow
    var swiperCoverflow = new Swiper(".coverflow-swiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true,
        },
        loop: true,
    });
});

  //SECTION PROJETS
  document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper(".swiper", {
      grabCursor: true,
      initialSlide: 1,
      centeredSlides: true,
      slidesPerView: "auto",
      spaceBetween: 10,
      speed: 1000,
      freeMode: false,
      mousewheel: {
        thresholdDelta: 30,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      on: {
        slideChange: function () { 
          updateSlideText(this.activeIndex); 
        },
        // click() {
        //   if (typeof this.clickedIndex !== "undefined") {
        //     swiper.slideTo(this.clickedIndex);
        //   }
        // },
      },

    });
    function updateSlideText(index) { 
      const texts = [ 
        "Texte pour Lucas-Lucas Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempora aliquam, odit libero officia labore doloremque omnis nulla explicabo beatae praesentium mollitia? Adipisci explicabo nobis voluptas enim incidunt exercitationem!",
         "Texte pour Mike-Mike Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempora aliquam, odit libero officia labore doloremque omnis nulla explicabo beatae praesentium mollitia? Adipisci explicabo nobis voluptas enim incidunt exercitationem!", 
         "Texte pour Max-Max Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempora aliquam, odit libero officia labore doloremque omnis nulla explicabo beatae praesentium mollitia? Adipisci explicabo nobis voluptas enim incidunt exercitationem!", 
         "Texte pour Will-Will Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempora aliquam, odit libero officia labore doloremque omnis nulla explicabo beatae praesentium mollitia? Adipisci explicabo nobis voluptas enim incidunt exercitationem!" 
        ];
        const textElement = document.getElementById("slide-text"); 
        textElement.textContent = texts[index];
        } 
    // Initialisation du texte au démarrage 
    updateSlideText(swiper.initialSlide); 
  });

  
    
 
  


 





