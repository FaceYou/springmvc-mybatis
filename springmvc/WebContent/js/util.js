/*
* @purpose 用于获取当前日期时间的工具类
* @param 无
* @return DateTool对象
* @exception
*/
DateTool = (function() {
	var _DateTool = function  () {
		var me = this;
	}
	var dateObj = new Date();
	var dayObj ={0 :"星期日", 1 :"星期一", 2 :"星期二", 3 :"星期三",	4 :"星期四", 5 :"星期五", 6 :"星期六" };
	//得到当前年
	function getCurrentYear () {
		return dateObj.getFullYear();
	}
	//得到当前完整月
	function getCurrentFullMonth () {
		var month = dateObj.getMonth()+1;
		if(month < 10){
			return "0"+month;
		}else{
			return month;
		}	
	}
	//得到当前月
	function getCurrentMonth () {
		return dateObj.getMonth()+1;
	}
	//得到当前完整日
	function getCurrentFullDate () {
		var date = dateObj.getDate();
		if(date < 10){
			return "0"+date;
		}else{
			return date;
		}	
	}
	//得到当前日
	function getCurrentDate () {
		return dateObj.getDate();
	}
	//得到当前年月日
	_DateTool.getCurrentYMD = function  () {
		return {
			'year':getCurrentYear(),
			'fullMonth':getCurrentFullMonth(),
			'fullDate':getCurrentFullDate(),
			'month':getCurrentMonth(),
			'date':getCurrentDate(),
		};
	}
	//得到当前天
	_DateTool.getCurrentDay = function  () {
		return dayObj[dateObj.getDay()];
	}
	//得到当前时
	function  getCurrentHours() {
		var dateObj = new Date();
		var hour =  dateObj.getHours();
		return hour > 9 ? hour : "0"+hour;
	}
	//得到当前分
	function  getCurrentMinutes() {
		var dateObj = new Date();
		var minutes =  dateObj.getMinutes();
		return minutes > 9 ? minutes : "0"+minutes;
	}
	//得到当前秒
	function  getCurrentSeconds() {
		var dateObj = new Date();
		var seconds =  dateObj.getSeconds();
		return seconds > 9 ? seconds : "0" + seconds;
	}
	//得到当前时间
	_DateTool.getCurrentTime = function  () {
		var c =":";
		var hour =getCurrentHours() +c;
		var minutes =getCurrentMinutes()+c;
		var seconds =getCurrentSeconds();
		return hour+minutes+seconds;
	}
	return _DateTool;
})();
/**
 * 验证信息工具
 * @type {Object}
 */
proveTool = {
	regExp:{
		username : /^[a-zA-Z0-9_.]{6,13}$/,
		password : /^[a-zA-Z0-9_.]{6,13}$/
	},
	tipMsg:{
		username : "用户ID不合法！",
		password : "密码不合法！"
	}
};
/**
 * [loadHtmlTool html加载工具]
 * @type {Object}
 */
loadHtmlTool = {
	/**
	 * [htmlInfoMap html的css和js信息映射图]
	 * @type {Object}
	 */	
	htmlInfoMap:{
		eMonitor:{'css':['./css/eMonitor.css'],'js':['./js/echarts.min.js','./js/eMonitor.js']},
		liveData:{'css':['./css/liveData.css'],'js':[]},
		analysisData:{'css':['./css/analysisData.css'],'js':['./js/echarts.min.js','./js/analysisData.js']},
		historicalData:{'css':['./css/historicalData.css'],'js':['./js/historicalData.js']},
		cropInformation:{'css':[],'js':[]},

		liveVideo:{'css':['./css/liveVideo.css'],'js':['./js/liveVideo.js']},
		videoView:{'css':['./css/videoView.css'],'js':['./js/videoView.js']},
		videoControl:{'css':['./css/videoControl.css'],'js':['./js/videoControl.js']},
		
		farmingActivities:{'css':['./css/farmingActivities.css'],'js':['./js/farmingActivities.js']},
		pesticideUsing:{'css':['./css/pesticideUsing.css'],'js':['./js/pesticideUsing.js']},
		fertilizerNotes:{'css':['./css/pesticideUsing.css'],'js':['./js/pesticideUsing.js']}
	},
	/**
	 * [loadCss 加载css文件到头部]
	 * @param  {[Object]} ele [要加载的css的url数组对象]
	 */
	loadCss:function (ele) {
		$("link").remove(".css");
		try{
			for (var i = 0; i < ele.length; i++) {
				$("head").append('<link>');
				$("head").children(':last').attr({
					rel:"stylesheet",
					href:ele[i],
					class:"css"
				});
			}
		}catch(e){
			console.error(e);
		}
	},
	/**
	 * [loadJs 加载js文件到文档底部]
	 * @param  {[Object]} ele [要加载的js的url数组对象]
	 */
	loadJs:function (ele) {
		$("script").remove(".js");
		try{
			for (var i = 0; i < ele.length; i++) {
				var script = document.createElement("script");
				script.src = ele[i];
				script.type = "text/javascript";
				script.className = 'js';
				document.getElementsByTagName("body")[0].appendChild(script);
			}
		}catch(e){
			console.error(e);
		}
	},
	/**
	 * [loadHtml 加载指定的]
	 * @param  {[String]} hName [要加载的html的名称]
	 */
	loadHtml:function (hName) {
		var url = hName+'.html .main-box';
		$(".main").empty();
		$(".main").load(url,function() {
			loadHtmlTool.loadCss(loadHtmlTool.htmlInfoMap[hName].css);
			loadHtmlTool.loadJs(loadHtmlTool.htmlInfoMap[hName].js);
		});
	},
	/**
	 * [isLogin 判断用户是否登陆]
	 * @return {Boolean} [是或否]
	 */
	isLogin:function () {
		var loginState = cookiesTool.read('loginState');
		return loginState == "true" ? true:false;
	}
};
/**
 * [cookiesTool cookies操作工具]
 * @type {Object}
 */
cookiesTool = {
	/**
	 * [add 增加cookies内容用';'隔开]
	 * @param {[type]} cookieStr [要增加的cookies字符串]
	 */
	add: function (cookieStr) {
		document.cookie = cookieStr;
	},
	/**
	 * [read 读取指定名称的cookie]
	 * @param  {[type]} cookieName [要读取cookie名称]
	 * @return {[type]}            [若存在该cookieName，返回该name的值，若不存在返回null]
	 */
	read: function (cookieName) {
		var arr;
		var reg=new RegExp("(^| )"+cookieName+"=([^;]*)(;|$)");
		if(arr=document.cookie.match(reg))
			return unescape(arr[2]);
		else
			return null;
	},
	/**
	 * [remove 移除指定名称的cookie]
	 * @param  {[type]} cookieName [要移除的cookie的名称]
	 */
	remove: function (cookieName) {
		var date = new Date(0);
		document.cookie = cookieName + "=a; expires=" + date.toGMTString();
	},
	/**
	 * [clear 清除所有cookies]
	 */
	clear: function () {
		var keys=document.cookie.match(/[^ =;]+(?=\=)/g); 
		if (keys) { 
			for (var i = keys.length; i--;)
				cookiesTool.remove(keys[i]);
		} 
	}
};
/**
 * 测试
 * @return {[type]} [description]
 */
(function () {
	//console.log(proveTool.regExp.username);
	//console.log(loadHtmlTool.htmlInfoMap.analysisData.css);
	//loadHtmlTool.loadHtml('eMonitor.html');
	//cookiesTool.add('12=123456;agwe=123456');
	//console.log(cookiesTool.read('name'));
	/*cookiesTool.remove('178979');
	console.log(document.cookie);
*/})()