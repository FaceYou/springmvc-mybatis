//加载基础信息
var view_loadDateInfo = function () {
	//加载日期
	var date = DateTool.getCurrentYMD();
	$(".info-box  .date").html(date.year+"年"+date.month+"月"+date.date+"日  "+DateTool.getCurrentDay());
	//加载用户名
	$(".username").html(cookiesTool.read('userName'));
	//TODO
}

$(function  () {
	view_loadDateInfo();
});

/*$("a[href='javascript:;']").click(function(event) {
	var mId = $(this).attr("id");
	console.log(mId);
	loadHtmlTool.loadHtml(mId);
});*/