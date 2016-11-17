var headerText = document.querySelector('.header-text');
var accentLine = headerText.querySelector('span.accent');
headerText.style.opacity = 0;
accentLine.style.width = '1px';
window.onload = function(){
  setTimeout(function(){
    headerText.classList.add('fadeInUp');
    headerText.style.opacity = 1;
  }, 500);
  setTimeout(function(){
    accentLine.style.width = '85px';
  }, 1000);
};
function isElementVisible(el){
  var element = el.getBoundingClientRect();
  var inViewPort = false;
  if(element.top >= 0){
  	if(element.left >= 0){
		if(element.bottom <= (window.innerHeight || document.documentElemen.clientHeight)){
			if(element.right <= (window.innerWidth || document.documentElement.clientWidth)){
				inViewPort = true;
			}		
		}
  	}
  }
  return inViewPort;
}
function elementInViewportIE(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;
  var inViewPort = false;
  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }
  if(top >= window.pageYOffset){
  	if(left >= window.pageXOffset){
  		if((top + height) <= (window.pageYOffset + window.innerHeight)){
  			if((left + width) <= (window.pageXOffset + window.innerWidth)){
  				inViewPort = true;
  			}
  		}
  	}
  }
  return inViewPort;
}
var modules = document.querySelectorAll('[data-fade="true"]');
modules.forEach(function(el){
  el.style.visibility = 'hidden';
  if(el.tagName == 'HR'){
  	el.style.width = '0';
  }
});
function doThatFadeIn(e){
  modules.forEach(function(el){
    if (isElementVisible(el) || elementInViewportIE(el)){
      var _this = el;
      var timing = el.getAttribute('data-fade-time');
      setTimeout(function(){
        _this.style.visibility = 'visible';
        _this.classList.add('animated');
        _this.classList.add('fadeInUp');
        if(el.tagName == 'HR'){
        	if(window.innerWidth < 769){
        		if(window.innerWidth > 376){
				  	el.style.width = 'calc(100% - 4em)';
				  }
				if(window.innerWidth < 376){
				  	el.style.width = 'calc(100% - 2em)';
				}
			  }else{
			  	el.style.width = '100%';
			  }
		  }
      }, timing);
    }
  });
}
document.addEventListener('scroll', doThatFadeIn);
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('autoplay-video', {
      videoId: 'h4AklYrj34o',
      origin: 'https://',
      events: {
        'onReady': onPlayerReady
      }
    });
  }
function onPlayerReady(event) {
	document.addEventListener('scroll', videoInViewport);
}
function videoInViewport(el){
  	var videoFrame = document.getElementById('autoplay-video');
	if (isElementVisible(videoFrame) || elementInViewportIE(videoFrame)){
		player.playVideo();
	} else{
		player.pauseVideo();
	}
}



