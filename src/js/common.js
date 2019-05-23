import Ellipsis from "./modules/ellipsis";
import Gotop from "./modules/gotop";
import {SpImgSwitch,PcImgSwitch} from "./modules/imgswitch";


const breakPoint = 640;

$(function(){
    Gotop();
    Ellipsis();
});

let resizeTimer = null;
$(window).on('load resize',function(){
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function(){
    PcSpSwitch(SpImgSwitch,PcImgSwitch);
  },300);
});

// $(window).scroll(function(){
//   scrollAction();
// });


//スクロール発火関数（第一引数：オブジェクト、第二引数：処理）
function scrollAction(Target,func) {
  Target.each(function(){
    const target = $(this).offset().top;
    const windowTop = $(window).scrollTop();
    const windowHeight = $(window).height();
    self = $(this);
    if (windowTop > target - windowHeight * 0.8 ) {
      func();
    }
  });
}

//PC・SP切り替え関数（第一引数：PC処理、第二引数：SP処理）
function PcSpSwitch(sp, pc) {
  const windowWidth = $(window).width();
  if (windowWidth < breakPoint) {
    sp();
  } else {
    pc();
  }
}
