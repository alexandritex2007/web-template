import checkDevice from './modules/checkDevice';
import scrollEvent from './modules/scrollEvent';
import ellipsis from './modules/ellipsis';
import gotop from './modules/gotop';
import { PcImgSwitch,SpImgSwitch } from './modules/imgswitch';

$(function(){
  ellipsis(); //3点リーダー
  gotop(); //トップに戻るボタン

});

//PC・SP切り替え
let resizeTimer = null;
$(window).on('load resize',function(){
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function(){
    deviceSwitch();
  },300);
});
//PC・SP処理記述箇所
function deviceSwitch() {
  if ( checkDevice() === 'PC' ) {
    //PCの時の処理

    PcImgSwitch();
    return;
  }
  if ( checkDevice() === 'SP' ) {
    //SPの時の処理

    SpImgSwitch();
    return;
  }
}

$(window).scroll(function(){
  /*
  scrollEvent($('#hoge'), hoge, 0.7);
  第一引数：発火ターゲット
  第二引数：発火した時の処理
  第三引数：発火する画面位置（default = 0.8）
  */
  scrollEvent();
});