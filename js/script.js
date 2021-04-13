function init(){
  //Add listeners for different events
  window.addEventListener('load', init);
  //JS Detection 
  var html = document.getElementsByTagName("html")[0];
    if(html.className == "nojs") {
      html.className = html.className.replace("nojs", "hasjs");
    }
}
$(document).ready(function(){
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
  pager:false,
  mode: 'fade',
  });
});