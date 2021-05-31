# Read Me
## はじめに
外部jsの利用方法を記載
- "chart.js": "2.9.4"
- "swiper": "6.6.2"
## 利用方法
### Chart.js
#### 1、〇〇.php
グラフを表示したい箇所にhtmlを追加。各属性の値を必要に応じて修正。
```html
<div class="chart_pie">
	<canvas id="chart" width="250" height="250" data-data="[ 26, 14.9, 20.8, 21.7, 16.6 ]"></canvas>
</div>
```
#### 2、common.js
以下の記述のコメントアウトを外す。
```js
// import { myPieChart } from './modules/chart';
```
#### 3、modules > chart.js
必要に応じて以下ファイルをchart.jsを書き換える

### swiper.js
#### 1、header.php
common.cssの上にswiper用のcssファイルを追記。
```html
<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
```
#### 2、〇〇.php
スライドを表示したい場所にhtmlを追加。
```html
<div class="swiper-container">
	<div class="swiper-wrapper">
		<div class="swiper-slide"><img src="http://placehold.jp/250x150.png" alt=""></div>
		<div class="swiper-slide"><img src="http://placehold.jp/250x150.png" alt=""></div>
		<div class="swiper-slide"><img src="http://placehold.jp/250x150.png" alt=""></div>
	</div>

    <div class="swiper-pagination"></div>

	<div class="swiper-button-prev"></div>
	<div class="swiper-button-next"></div>
</div>
```
#### 3、common.js
以下の記述のコメントアウトを外す。
```js
// import slider from './modules/swiperSlider';
// slider();
```