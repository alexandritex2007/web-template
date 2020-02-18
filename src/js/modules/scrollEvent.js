/**
 * スクロール発火関数
 * @param Target 発火ターゲット
 * @param func 発火した時の処理
 * @param correction 発火する画面位置
 */
export function scrollEvent (Target, func, correction = 0.8) {
  Target.each(function(){
    const target = $(this).offset().top;
    const windowTop = $(window).scrollTop();
    const windowHeight = $(window).height();
    self = $(this);
    if (windowTop > target - windowHeight * correction) {
      func();
    }
  });
}