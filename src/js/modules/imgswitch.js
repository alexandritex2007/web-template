const pcName = '_pc',
spName = '_sp';

export function PcImgSwitch () {
  $('.switch').each(function(){
    $(this).attr('src',$(this).attr('src').replace(spName,pcName)).css({visibility:'visible'});
  });
}

export function SpImgSwitch () {
  $('.switch').each(function(){
    $(this).attr('src',$(this).attr('src').replace(pcName,spName)).css({visibility:'visible'});
  });
}

