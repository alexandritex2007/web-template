import { mediaQueryList, onMediaQueryChange } from './modules/mediaQuery';
import scrollEvent from './modules/scrollEvent';
import gotop from './modules/gotop';

$(function(){
  //トップに戻るボタン
  gotop();
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