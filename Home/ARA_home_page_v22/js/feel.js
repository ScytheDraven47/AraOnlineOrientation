
$(document).ready(function(ev) {
  var toggle = $('#ss_toggle');
  var feel = $('#ss_feel');
  var rot;
  
  $('#ss_toggle').on('click', function(ev) {
    rot = parseInt($(this).data('rot')) - 180;
    feel.css('transform', 'rotate(' + rot + 'deg)');
    feel.css('webkitTransform', 'rotate(' + rot + 'deg)');
    if ((rot / 180) % 2 == 0) {
      //Moving in
      toggle.parent().addClass('ss_active');

	  
      toggle.addClass('close');
    } else {
      //Moving Out
      toggle.parent().removeClass('ss_active');

	  
      toggle.removeClass('close');
    }
    $(this).data('rot', rot);
  });

  feel.on('transitionend webkitTransitionEnd oTransitionEnd', function() {
    if ((rot / 180) % 2 == 0) {
      $('#ss_feel div i').addClass('ss_animate');
    } else {
      $('#ss_feel div i').removeClass('ss_animate');
    }
  });
  
});




  