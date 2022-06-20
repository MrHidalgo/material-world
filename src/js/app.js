import Common from "./common/common";


// EVENT LISTENER - LOAD
// ========================================
window.addEventListener('load', (ev) => {

  // COMMON
  Common.initLoad();

  // MACROS
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

}, false);


// EVENT LISTENER - SCROLL
// ========================================
window.addEventListener('scroll', (ev) => {}, false);
