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
    delay: 500,
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
    origin: "right",
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
        click() {
          if (typeof this.clickedIndex !== "undefined") {
            swiper.slideTo(this.clickedIndex);
          }
        },
      },
    });
  });
  
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 180,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#fff",
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.3,
          random: false,
          anim: {
            enable: false,
            speed: 4,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 4,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: false,
        },
        move: {
          enable: true,
          speed: 0.4,
          direction: "right",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      retina_detect: true,
    });
 
  


 





