import { PcImgSwitch,SpImgSwitch } from './imgswitch';

// ブレイクポイント
const breakPoint = 767;

// メディアクエリ情報
export const mediaQueryList = matchMedia(`(min-width: ${breakPoint}px)`);

/**
 * メディアクエリが変更された際に実行される関数
 */
export function onMediaQueryChange(mediaQueryList) {
  if(mediaQueryList.matches == true) {
    //pc判定
    PcImgSwitch();
    console.log('PC');
  } else {
    //sp判定
    SpImgSwitch();
    console.log('SP');
  }
}