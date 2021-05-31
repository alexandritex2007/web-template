import Chart from 'chart.js';
const dateNumArray = ['①', '②', '③', '④', '⑤'];

const dataLabelPlugin = {
  afterDatasetsDraw: function (chart, easing) {
    // To only draw at the end of animation, check for easing === 1
    const ctx = chart.ctx;
    chart.data.datasets.forEach(function (dataset, i) {
      let dataSum = 0;
      dataset.data.forEach(function (element){
        dataSum += element;
      });
      const meta = chart.getDatasetMeta(i);
      if (!meta.hidden) {
        meta.data.forEach(function (element, index) {
          // Draw the text in black, with the specified font
          ctx.fillStyle = 'rgb(255, 255, 255)';
          const fontSize = 16;
          const fontStyle = 'normal';
          const fontFamily = 'Varela Round';
          ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);
          // Just naively convert to string for now
          // const labelString = chart.data.labels[index];
          const dataString = (Math.round(dataset.data[index] / dataSum * 1000)/10).toString() + "%";
          // Make sure alignment settings are correct
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          const padding = 5;
          const position = element.tooltipPosition();
          // ctx.fillText(labelString, position.x, position.y - (fontSize / 2) - padding);
          ctx.fillText(dateNumArray[index] + dataString, position.x, position.y + (fontSize / 2) - padding);
        });
      }
    });
  }
};

const ctxData = $('#chart').data('data');
const ctx = document.getElementById("chart");

export const myPieChart = new Chart(ctx, {
  //グラフの種類
  type: 'doughnut',
  //データの設定
  data: {
    //データ項目のラベル
    labels: ["①テキスト１", "②テキスト２", "③テキスト３", "④テキスト５", "⑤テキスト６"],
    //データセット
    datasets: [{
      //背景色
      backgroundColor: [
        "#0084c7",
        "#f06200",
        "#009e62",
        "#efa600",
        "#e8374a"
      ],
      //グラフのデータ
      data: ctxData
    }]
  },
  options: {
    legend: {
        display: false
    },
    maintainAspectRatio: false
  },
  plugins: [dataLabelPlugin]
});