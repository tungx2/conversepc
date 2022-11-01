var swiper = new Swiper(".main_banner", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    autoplay: true
  });
  var swiper = new Swiper(".noticeLeft", {
    loop: true,
    autoplay: true,
    direction: 'vertical'
  });
  var swiper = new Swiper(".noticeRight", {
    loop: true,
    autoplay: true,
    direction: 'vertical',
  });
  var swiper = new Swiper(".productS", {
        slidesPerView: 4,
        spaceBetween: 32,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: "progressbar",
        },
      navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
      });