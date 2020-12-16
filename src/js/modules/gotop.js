/**
 * トップに戻るボタン
 */
export default function() {
  $('.gotop').css('opacity',0);
  $('.gotop > a').click(function(){
    $('html,body').animate({
      'scrollTop': $('body').offset().top
    },{
      'duration':'normal','easing':'swing','queue':false
    });
    return false;
  });
  $(window).scroll(function(){
    moveGoTop();
  });
}

function moveGoTop(){
  const x = $(".l-footer_bottom").offset().top - $(window).scrollTop();
  if ( x <= $(window).height() ){
    $(".gotop").css( "position", "absolute" );
    $(".gotop").addClass("change");
  } else{ $(".gotop").css( "position", "fixed" );
    $(".gotop").removeClass("change");
  }
  if( $(window).scrollTop() < 200 ) {
    $(".gotop").animate({"opacity":0}, {"duration":"fast","easing":"linear","queue":false});
  } else {
    $(".gotop").animate({"opacity":1}, {"duration":"fast","easing":"linear","queue":false});
  }
}