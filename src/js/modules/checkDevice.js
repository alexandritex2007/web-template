const breakPointSp = 640;
export function checkDevice() {
  let windowWidth = $(window).width();
  //pc判定
  if (windowWidth > breakPointSp) {
    return 'PC';
  }
  //sp判定
  if (windowWidth <= breakPointSp) {
    return 'SP';
  }
  return 'unknown';
}