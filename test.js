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


ScrollReveal().reveal(".card_1", {
    ...scrollReavalOption,
    delay: 3000,
});
ScrollReveal().reveal(".card_2", {
    ...scrollReavalOption,
    delay: 2500,
});
ScrollReveal().reveal(".card_3", {
    ...scrollReavalOption,
    delay: 2000,
});
ScrollReveal().reveal(".card_4", {
    ...scrollReavalOption,
    delay: 1500,
});
ScrollReveal().reveal(".card_5", {
    ...scrollReavalOption,
    delay: 1000,
});


    

    document.addEventListener("DOMContentLoaded", function () {
        const steps = document.querySelectorAll("#exp_progress_bar_container li");
        const lineProcess = document.querySelector("#line_process");
        const contents = document.querySelectorAll("#progress_content_section .section_content");

        steps.forEach((step, index) => {
            step.addEventListener("click", function () {
                // Mettre à jour les cercles et la barre de progression
                updateProgress(index);

                // Afficher uniquement le contenu correspondant
                showContent(index);
            });
        });

        function updateProgress(activeIndex) {
            // Met à jour les cercles
            steps.forEach((step, index) => {
                if (index <= activeIndex) {
                    step.classList.add("active"); // Activer les cercles précédents et le cercle courant
                } else {
                    step.classList.remove("active"); // Désactiver les cercles suivants
                }
            });

            // Met à jour la largeur de la barre
            const width = ((activeIndex + 1) / steps.length) * 100;
            lineProcess.style.width = `${width}%`;

            // Couleur fixe pour la barre de progression
            lineProcess.style.background = "#753188";
        }

        function showContent(activeIndex) {
            // Masquer tous les contenus
            contents.forEach(content => {
                content.classList.remove("active");
            });

            // Afficher uniquement le contenu correspondant
            contents[activeIndex].classList.add("active");
        }
    });

    var swiper = new Swiper(".swiper-container", {
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





