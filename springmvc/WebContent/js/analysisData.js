// 日期选择设置
$('.input_date').datetimepicker({
  startDate: '1970-01-01',
  endDate: '2016-05-31',
  weekStart: 1,
  todayBtn:  1,
  autoclose: 1,
  todayHighlight: 1,
  startView: 2,
  minView: 2,
  forceParse: 0
});
loadChart = function  () {
  var mychat = echarts.init(document.getElementById('chart-content'));
  var option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c}'
    },
    legend: {
      bottom: 'bottom',
      data: ['空气湿度', '空气温度','土壤温度','光照']
    },
    grid: {
        top: '4%',
        left: '0%',
        right: '0%',
        bottom: '15%',
        containLabel: true
    },
    xAxis: {
      type: 'category',
      name: 'x',
      data: ['1', '2', '3', '4', '5', '6', '7', '8', '9','10','11','12','13','14','15','16', '17', '18', '19', '20', '21', '22', '23', '24']
    },
    yAxis: {
      name: 'y'
    },
    series: [
      {
        name: '空气湿度',
        type: 'line',
        data: [5, 20, 36, 10, 10, 20,5, 20, 36, 10, 10, 20,15,48, 10, 20,15,48,5, 20, 36, 10]
      },
      {
        name: '空气温度',
        type: 'line',
        data: [2, 7, 5, 20, 30, 7,5,33, 20, 30, 7,5,33,2, 7, 5, 20, 30, 7,5,33, 20]
      },
      {
        name: '土壤温度',
        type: 'line',
        data: [1, 2, 36, 40, 5, 6,7,8,36, 40, 5, 6,7,8,1, 2, 36, 40, 5, 6,7,8,36,31]
      },
      {
        name: '光照',
        type: 'line',
        // areaStyle: {normal: {}},
        data: [28, 42, 39, 14, 35, 16,27,80, 39, 14, 35, 16,27,80,28, 42, 39, 14, 35, 16,27,31]
      },
    ],
    color:['#c23531','#FFB20F','#C7E69A','#78BDC2','','']
  }
  mychat.setOption(option);
}
loadChart();