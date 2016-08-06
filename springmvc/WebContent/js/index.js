/**
 * [inputTest 输入验证]
 * @return {[boolean]} [输入是否通过校验]
 */
function inputTest() {
	/**
	 * 提示信息
	 * @param {[object]} ele  输入文本对象
	 * @param {[string]} flag 输入文本是否符合要求标志位
	 * @param {[string]} msg  提示信息
	 */
	this.addTips = function(ele,flag,msg) {
		msgEle = ele.nextAll('.tips');
		if (flag) {
			ele.parent('.input-box').css('borderColor', 'green');
			msgEle.css('display', 'none');
		}else{
			ele.parent('.input-box').css('borderColor', 'red');
			msgEle.css({display:'block',color:'red'});
			msgEle.text(msg);
		}
	}
	//用户名输入框事件绑定
	$('#username').blur(function(event) {
		var me = $(this);
		musername = me.val();
		if (!proveTool.regExp.username.test(musername)) {
			addTips(me,false,proveTool.tipMsg.username);
		}else{
			addTips(me,true);
		}
	});
	//密码输入框事件绑定
	$('#password').blur(function(event) {
		var me = $(this);
		mpassword = me.val();
		if (!proveTool.regExp.password.test(mpassword)) {
			addTips(me,false,proveTool.tipMsg.password);
		}else{
			addTips(me,true);	
		}
	});	
}
inputTest();
//登录事件处理
function onLoginClick() {
	if(!proveTool.regExp.password.test($('#username').val())){
		addTips($('#username'),false,proveTool.tipMsg.username);
	}else if(!proveTool.regExp.password.test($('#password').val())){
		addTips($('#password'),false,proveTool.tipMsg.password);
	}else{
		$.ajax({
			url: './login.action',
			type: 'post',
			dataType: 'json',
			data: {
				username: $('#username').val(),
				password:$('#password').val()
			},
			success:function (data) {
				if(data.errorCode == "000000"){
					cookiesTool.add('userName='+$('#username').val());
					cookiesTool.add('loginState=true');
					window.location.href = "./main.html";
				}else{
					alert('errorCode:'+data.errorCode,'errorMsg:'+data.errorMsg);
				}
			},
			error:function (data) {
				console.error(data);
			}
		})
	}
}