var view = {};
//加载日期时间
view.loadDate = function () {
  var date = DateTool.getCurrentYMD();
	$(".time").html("数据时间 ："+date.year+"-"+date.fullMonth+"-"+date.fullDate+" "+DateTool.getCurrentTime());
}
//图表加载
view.loadChart = function  () {
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
        left: '2%',
        right: '3%',
        bottom: '15%',
        containLabel: true
    },
    xAxis: {
      type: 'category',
      name: 'x',
      data: ['1', '2', '3', '4', '5', '6', '7', '8', '9','10','11','12','13','14','15','16', '17', '18', '19', '20', '21', '22', '23', '24','25','26','27','28','29','30']
    },
    yAxis: {
      name: 'y',  
    },
    series: [
    	{
        name: '空气湿度',
        type: 'line',
        data: [5, 20, 36, 10, 10, 20,5, 20, 36, 10, 10, 20,15,48, 10, 20,15,48,5, 20, 36, 10, 10, 20,15,48, 10, 20,15,48]
      },
      {
        name: '空气温度',
        type: 'line',
        data: [2, 7, 5, 20, 30, 7,5,33, 20, 30, 7,5,33,2, 7, 5, 20, 30, 7,5,33, 20, 30, 7,5,33,2, 7, 5]
      },
      {
        name: '土壤温度',
        type: 'line',
        areaStyle: {normal: {}},
        data: [1, 2, 36, 40, 5, 6,7,8,36, 40, 5, 6,7,8,1, 2, 36, 40, 5, 6,7,8,36, 40, 5, 6,7,8]
      },
      {
        name: '光照',
        type: 'line',
        // areaStyle: {normal: {}},
        data: [28, 42, 39, 14, 35, 16,27,80, 39, 14, 35, 16,27,80,28, 42, 39, 14, 35, 16,27,80, 39, 14, 35, 16,27,80]
      },
    ],
    color:['#c23531','#FFB20F','#C7E69A','#78BDC2','','']
	}
	mychat.setOption(option);
}
//开关按钮点击样式
$(".on-off").click(function() {
	var onObj = $(this).find('.on');
	var offObj = $(this).find('.off');
	if(onObj.hasClass('onActive')){
		onObj.removeClass('onActive');
		offObj.addClass('offActive');
	}
	else{
		offObj.removeClass('offActive');
		onObj.addClass('onActive');
	}
});
$(function  () {
	view.loadDate();
  view.loadChart();
});