const pcName = '_pc',
      spName = '_sp';

/**
 * PC表示時の画像表示処理
 */
export function PcImgSwitch () {
  $('.switch').each(function(){
    $(this).attr('src',$(this).attr('src').replace(spName,pcName)).css({visibility:'visible'});
  });
}

/**
 * SP表示時の画像表示処理
 */
export function SpImgSwitch () {
  $('.switch').each(function(){
    $(this).attr('src',$(this).attr('src').replace(pcName,spName)).css({visibility:'visible'});
  });
}

