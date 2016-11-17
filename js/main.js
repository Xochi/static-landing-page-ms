var headerText = document.querySelector('.header-text');
var accentLine = headerText.querySelector('span.accent');
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

// video placeholder
// $('.video-wrapper img').click(function(){
//     var video = '<iframe src="'+ $(this).attr('data-video') +'"></iframe>';
//     $(this).replaceWith(video);
// });

function isElementVisible(el){
  var element = el.getBoundingClientRect();

  return (
    element.top >= 0 &&
    element.left >= 0 &&
    element.bottom <= (window.innerHeight || document.documentElemen.clientHeight) &&
    element.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function elementInViewportIE(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top >= window.pageYOffset &&
    left >= window.pageXOffset &&
    (top + height) <= (window.pageYOffset + window.innerHeight) &&
    (left + width) <= (window.pageXOffset + window.innerWidth)
  );
}

var modules = document.querySelectorAll('[data-fade="true"]');
modules.forEach(function(el){
  el.style.visibility = 'hidden';
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
      }, timing);
    }
  });
}

document.addEventListener('scroll', doThatFadeIn);

