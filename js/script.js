function init() {
  //Add listeners for different events
  window.addEventListener('load', init);
  //JS Detection
  var html = document.getElementsByTagName('html')[0];
  if (html.className == 'nojs') {
    html.className = html.className.replace('nojs', 'hasjs');
  }
  document.getElementById('newSubmit').addEventListener('click', newSub);
  document.getElementById('contactForm').addEventListener('submit', showThanks);
  function showThanks() {
    event.preventDefault();
    var formDisp = document.getElementById('contactForm');
    var thanksDisp = document.getElementById('thanksPage');
    var subCheck = document.getElementById('acceptTC');
    if (subCheck.checked == true) {
      thanksDisp.style.display = 'block';
      formDisp.style.display = 'none';
    } else {
      alert("You must agree to be contacted or we won't be able to contact you.");
    }
  }

  //Clears the form and show it again (hiding the thank you) for multiple submissions.
  function newSub() {
    var formDisp = document.getElementById('contactForm');
    var thanksDisp = document.getElementById('thanksPage');
    document.getElementById('contactForm').reset();
    thanksDisp.style.display = 'none';
    formDisp.style.display = 'block';
  }
}
$(document).ready(function () {
  $('.slider').bxSlider({
    slideWidth: 600,
    adaptiveHeight: true,
    shrinkItems: true,
    controls: true,
    autoControls: false,
    auto: true,
    autoStart: true,
    autoHover: false,
    captions: false,
    touchEnabled: true,
    responsive: true,
    pager: false,
    mode: 'fade',
  });
});
