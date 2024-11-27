document.addEventListener("DOMContentLoaded", () => {
    // Swiper avec l'effet Coverflow
    const coverflowSwiper = new Swiper('.coverflow-swiper', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });

    // Swiper avec l'effet Cards
    const cardsSwiper = new Swiper('.cards-swiper', {
      effect: 'cards',
      grabCursor: true,
    });
  });

console.log(Swiper.version);

