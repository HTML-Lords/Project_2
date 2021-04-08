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
  slideWidth: 2000,
  adaptiveHeight: true,
  shrinkItems: true,
  controls: true,
  autoControls: true,
  auto: true,
  autoStart: true,
  autoHover: true,
  captions: true,
  });
});