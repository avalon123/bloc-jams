var pointsArray = document.getElementsByClassName('point');
<<<<<<< HEAD
var animatePoints = function(points) {
    var animatePoints = function()  {
=======

    var animatePoints = function() {
>>>>>>> checkpoint-32
        var revealPoint = function() {
         $(this).css({
             opacity: 1,
             transform: 'scaleX(1) translateY(0)'
         });
     };
     $.each($('.point'), revealPoint);
<<<<<<< HEAD
}};
 $(window).load(function(){
=======
    };
 $(window).load (function() {
>>>>>>> checkpoint-32

   var scrollDistance = $('.selling-points').offset().top - $(window).height() + 200;
     if ($(window).height() > 950) {
        animatePoints();
     }

    $(window).scroll(function(event) {
        if ($(window).scrollTop() >= scrollDistance) {
             animatePoints();
         }
    });
  
 });
