$('.logout').click(function(event) {
	$.ajax({
		url: './logout.action',
		type: 'POST',
		dataType: 'json',
		success: function (data) {
			if(data.errorCode == "000004"){
				cookiesTool.clear();
				window.location.href = "./index.html";
			}else{
				alert('errorCode:'+data.errorCode,'errorMsg:'+data.errorMsg);
			}
		},
		error: function (data) {
			console.error(data);
		}    
	})	
});