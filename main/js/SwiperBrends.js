var swiperBrends = new Swiper(".mySwiperBrends", {
  slidesPerView: 5,
  spaceBetween: 20,
  loop: true,
  simulateTouch: false, // Отключаем перетаскивание слайдов мышью
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next", // Указываем класс элемента для кнопки "следующий слайд"
    prevEl: ".swiper-button-prev", // Указываем класс элемента для кнопки "предыдущий слайд"
  },
}); 
