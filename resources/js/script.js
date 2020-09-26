$(document).ready(function(){
  /* For the sticky navigation */
  $('.js--section-features').waypoint(function(direction){
    if (direction == "down")
    {
      $('nav').addClass('sticky');
    }
    else
    {
      $('nav').removeClass('sticky');
    }
  },{
      offset: '60px;'
    });

    /*Slider*/
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        }
    }); 
});
