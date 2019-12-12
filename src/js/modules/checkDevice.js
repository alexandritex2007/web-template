const breakPointSp = 640;
export default function () {
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