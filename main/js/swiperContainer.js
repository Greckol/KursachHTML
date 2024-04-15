var swiperContainer = new Swiper(".swiperContainerProducts", {
  slidesPerView: 5,
  spaceBetween: 20,
  loop: true,
  simulateTouch: false, // Отключаем перетаскивание слайдов мышью
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next", // Указываем класс элемента для кнопки "следующий слайд"
    prevEl: ".swiper-button-prev", // Указываем класс элемента для кнопки "предыдущий слайд"
  },
});
