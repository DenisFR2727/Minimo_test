// по нажатию на картинку - смена на другую 
let images = document.querySelectorAll('.infinity_slider  img');
let current =0;

document.querySelector('.infinity_slider').onclick = slider
function slider(){
    for(let i=0; i<images.length; i++){
        images[i].classList.add('opacity0')
   }
   images[current].classList.remove('opacity0')
   if(current +1 == images.length){
        current =0;
   }else{
       current++
   }
}
// side-banner
// -----------------------------------
$(function(){
    $.fn.followTo = function (pos) {
      var $this = this,
          $window = $(window);
  
      $window.scroll(function (e) {
          if ($window.scrollTop() > pos) {
              $this.css({
                  position: 'fixed',
                  top: 10
              });
          } else {
              $this.css({
                  position: 'absolute',
                  top: 500
              });
          }
      });
  };
  
  $('.float-block').followTo(140);
  });


  
