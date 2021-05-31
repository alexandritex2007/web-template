import { mediaQueryList, onMediaQueryChange } from './modules/mediaQuery';
import scrollEvent from './modules/scrollEvent';
import gotop from './modules/gotop';
// import slider from './modules/swiperSlider';
// import { myPieChart } from './modules/chart';
import validation from './modules/validation';

$(function(){
  //トップに戻るボタン
  gotop();
  //swiperスライダー
  // slider();
  //フォームバリデーション
  validation();

  //ハンバーガーメニュー開閉
  $('.l-header_hamburger_wrap').on('click', function(){
    $('.l-header_hamburger').toggleClass('is-menuopen');
  });
});

/* ----- スクロールイベント ----- */
$(window).scroll(function(){
  // スクロールでイベント発火
  // scrollEvent();
});

/* ----- PC・SP切り替え ----- */
// メディアクエリが変更されたタイミングで処理
mediaQueryList.addListener(onMediaQueryChange);

// ページ表示時に一度onMediaQueryChange()を実行
onMediaQueryChange(mediaQueryList);