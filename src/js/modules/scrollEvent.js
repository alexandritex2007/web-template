/**
 * スクロール発火関数
 * @param Target 発火対象
 * @param func 発火実行内容
 * @param correction 発火位置
 */
export default function (Target, func, correction = 0.8) {
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