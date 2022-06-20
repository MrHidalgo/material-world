import Common from "./common/common";


// EVENT LISTENER - LOAD
// ========================================
window.addEventListener('load', (ev) => {

  // COMMON
  Common.initLoad();

  // MACROS
  const initSmoothScroll = (
    btnName = "[anchor-js]",
    animateSpeed = 1000
  ) => {

    $(btnName).on("click", (e) => {

      let linkHref = $(e.currentTarget).attr('href'),
        headerHeight = $(".header").outerHeight() || 0,
        topHeightOffset = $(linkHref).offset().top - headerHeight;

      $('body, html').animate({
        scrollTop: topHeightOffset
      }, animateSpeed);

    });

  };

  $('.faq__collapse-head').on('click', (ev) => {
    if($(ev.currentTarget).hasClass('is-active')) {
      $(ev.currentTarget).siblings('.faq__collapse-body').slideUp(350);
      $(ev.currentTarget).removeClass('is-active');
    } else {
      $('.faq__collapse-head').removeClass('is-active');
      $('.faq__collapse-body').slideUp(350);

      $(ev.currentTarget).addClass('is-active');
      $(ev.currentTarget).siblings('.faq__collapse-body').slideDown(350);
    }
  });

  initSmoothScroll();

}, false);


// EVENT LISTENER - SCROLL
// ========================================
window.addEventListener('scroll', (ev) => {}, false);
