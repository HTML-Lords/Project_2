function init(){
  //Add listeners for different events
  window.addEventListener('load', init);
  //JS Detection 
  var html = document.getElementsByTagName("html")[0];
    if(html.className == "nojs") {
      html.className = html.className.replace("nojs", "hasjs");
    }
  
}
