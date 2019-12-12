import CheckDevice from './modules/checkDevice';
import ScrollEvent from './modules/scrollEvent';
import Ellipsis from './modules/ellipsis';
import Gotop from './modules/gotop';
import {PcImgSwitch,SpImgSwitch} from './modules/imgswitch';

$(function(){
  Ellipsis();
  Gotop();
});

let resizeTimer = null;
$(window).on('load resize',function(){
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function(){
    if ( CheckDevice() === 'PC' ) {
      setCookiePc();
    }
    deviceSwitch();
  },300);
});

//PC・SP切り替え関数
function deviceSwitch() {
  //SPの時の処理
  if ( CheckDevice() === 'SP' ) {
    SpImgSwitch();
    return;
  }
  //PCの時の処理、判定不可の時の処理
  PcImgSwitch();
  return;
}

$(window).scroll(function(){
  ScrollEvent();
});