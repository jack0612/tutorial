


import { Component, Input, OnInit, ElementRef } from '@angular/core';
import type { EChartsOption } from 'echarts';

@Component({
  selector: 'line-chart',
  template: `
  <div echarts [options]="chartOption" class="demo-chart"></div>
`,

})

export class LineChartComponent {


  chartOption: EChartsOption = {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
      type: 'value'
    },
    tooltip: {
      trigger: 'item',
      showDelay: 0,
      transitionDuration: 0.2,
      formatter: function (params) {
        return `<b>${params['name']}</b> : $ ${params['value']}`;
      }
    },
    series: [{
      data: [820, 932, 901, 934, 1290, 1430, 1550, 1200, 1650.1450, 1680, 1890, 2300],
      type: 'line',
      areaStyle: {}
    }]
  }


}
