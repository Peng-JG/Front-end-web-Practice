

// 点击预留图片切换背景和样式
window.onload = function () {
	if (window.navigator.onLine != true) {
		alert("无法连接网络！！\n素材均来源于网络，请联网查看");
	}
	var Myid = document.getElementById('content_list');
	var Myimg = Myid.getElementsByTagName('img');
	Species();
	for (var i = 0; i < Myimg.length; i++) {
		var bg = document.getElementById('Content_left_bg');
		bg.style.backgroundImage = "url(" + Myimg[0].src + ")";
		Myimg[0].style = "opacity:1;border:2px solid #0073eb;";
		$("#Content_left_summary").show();
		Myimg[i].onclick = function () {
			for (var i = 0; i < Myimg.length; i++) {
				Myimg[i].style = "border: 2px solid #ebebeb;opacity: 0.5";
			}
			//换背景图片
			bg.style.backgroundImage = "url(" + this.src + ")";
			this.style = "opacity:1; border:2px solid #0073eb;";
			Click_flash();
			show1();
		}
	}
	Rotating()
}

//识别图片时的动态效果
function Click_flash() {
	$("#bg_flash").css('animation', 'pop 500ms linear');
	setTimeout(function () {
		$("#bg_flash").css('animation', '');
	}, 400);        //400ms
}

//识别结框图
function show1() {
	$("#Content_left_summary").toggle();
	setTimeout(function () {
		$("#Content_left_summary").show();
	}, 550);
	$("#json_content").toggle();
	setTimeout(function () {
		$("#json_content").show();
	}, 550);
}

//按钮旋转
function Rotating() {
	var flag = 0;
	document.getElementById('json_intro_title').onclick = function () {
		flag++;
		if (flag % 2 != 0) {
			document.getElementById('json_intro_title_show').classList.remove('click_rotating_t');
			document.getElementById('json_intro_title_show').classList.add('click_rotating');
			document.getElementById('json_request_show').classList.add('click_rotating_t');
			if ($("#json-intro-contain").css("display") == 'none') {
				$("#json-intro-contain").slideDown();
			}
		}
		else {
			document.getElementById('json_intro_title_show').classList.add('click_rotating_t');
			document.getElementById('json_request_show').classList.remove('click_rotating_t');
			document.getElementById('json_request_show').classList.add('click_rotating');
			$("#json-intro-contain").slideUp();
		}
	}
	document.getElementById('json_request-title').onclick = function () {
		flag++;
		if (flag % 2 != 0) {
			document.getElementById('json_request_show').classList.add('click_rotating_t');
			document.getElementById('json_intro_title_show').classList.remove('click_rotating_t');
			document.getElementById('json_intro_title_show').classList.add('click_rotating');
			if ($("#json-intro-contain").css("display") == 'none') {
				$("#json-intro-contain").slideDown();
			}
		}
		else {
			document.getElementById('json_intro_title_show').classList.add('click_rotating_t');
			document.getElementById('json_request_show').classList.remove('click_rotating_t');
			document.getElementById('json_request_show').classList.add('click_rotating');
			$("#json-intro-contain").slideUp();
		}
	}
}

//上传文件
function addfile() {
	document.getElementById('addfile').click();
}

//
function Species() {
	var Type = document.getElementById('Type');
	var Mydiv = Type.getElementsByTagName('div');
	for (var i = 0; i < Mydiv.length; i++) {
		Mydiv[0].style = "border-bottom:2px solid #0073eb;color: #0073eb;";
		Mydiv[i].onclick = function () {
			for (var i = 0; i < Mydiv.length; i++) {
				Mydiv[i].style = "clear:both;";
			}
			var Myid = document.getElementById('content_list');
			var Myimg = Myid.getElementsByTagName('img');
			for (var i = 0; i < Myimg.length; i++) {
				Myimg[i].style = "border: 2px solid #ebebeb;opacity: 0.5";
			}
			this.style = "border-bottom: 2px solid #0073eb;color: #0073eb;";
			if (this.id == 'Animal') {
				document.getElementById('Content_left_bg').style.backgroundImage = "url(https://aip.bdstatic.com/portal/dist/1553224161993/ai_images/imageRecognition/animal/1@2x.jpg)";
				document.getElementById('img01').src = "https://aip.bdstatic.com/portal/dist/1553224161993/ai_images/imageRecognition/animal/1@2x.jpg";
				document.getElementById('img02').src = "https://aip.bdstatic.com/portal/dist/1553224161993/ai_images/imageRecognition/animal/2@2x.jpg";
				document.getElementById('img03').src = "https://aip.bdstatic.com/portal/dist/1553224161993/ai_images/imageRecognition/animal/3@2x.jpg";
				document.getElementById('img04').src = "https://aip.bdstatic.com/portal/dist/1553224161993/ai_images/imageRecognition/animal/4@2x.jpg";
				document.getElementById('img05').src = "https://aip.bdstatic.com/portal/dist/1553224161993/ai_images/imageRecognition/animal/5@2x.jpg";

			} else if (this.id == 'Dishes') {
				document.getElementById('Content_left_bg').style.backgroundImage = "url(https://aip.bdstatic.com/portal/dist/1553224161993/ai_images/imageRecognition/foods/1@2x.jpg)";
				document.getElementById('img01').src = "https://aip.bdstatic.com/portal/dist/1553224161993/ai_images/imageRecognition/foods/1@2x.jpg";
				document.getElementById('img02').src = "https://aip.bdstatic.com/portal/dist/1553224161993/ai_images/imageRecognition/foods/2@2x.jpg";
				document.getElementById('img03').src = "https://aip.bdstatic.com/portal/dist/1553224161993/ai_images/imageRecognition/foods/3@2x.jpg";
				document.getElementById('img04').src = "https://aip.bdstatic.com/portal/dist/1553224161993/ai_images/imageRecognition/foods/4@2x.jpg";
				document.getElementById('img05').src = "https://aip.bdstatic.com/portal/dist/1553224161993/ai_images/imageRecognition/foods/5@2x.jpg";

			} else if (this.id == 'Models') {
				document.getElementById('Content_left_bg').style.backgroundImage = "url(https://aip.bdstatic.com/portal/dist/1553224161993/ai_images/imageRecognition/cars/1@2x.jpg)";
				document.getElementById('img01').src = "https://aip.bdstatic.com/portal/dist/1553224161993/ai_images/imageRecognition/cars/1@2x.jpg";
				document.getElementById('img02').src = "https://aip.bdstatic.com/portal/dist/1553224161993/ai_images/imageRecognition/cars/2@2x.png";
				document.getElementById('img03').src = "https://aip.bdstatic.com/portal/dist/1553224161993/ai_images/imageRecognition/cars/3@2x.jpg";
				document.getElementById('img04').src = "https://aip.bdstatic.com/portal/dist/1553224161993/ai_images/imageRecognition/cars/4@2x.jpg";
				document.getElementById('img05').src = "https://aip.bdstatic.com/portal/dist/1553224161993/ai_images/imageRecognition/cars/5@2x.jpg";

			} else if (this.id == 'Plant') {
				document.getElementById('Content_left_bg').style.backgroundImage = "url(https://aip.bdstatic.com/portal/dist/1553224161993/ai_images/imageRecognition/plants/1@2x.jpg)";
				document.getElementById('img01').src = "https://aip.bdstatic.com/portal/dist/1553224161993/ai_images/imageRecognition/plants/1@2x.jpg";
				document.getElementById('img02').src = "https://aip.bdstatic.com/portal/dist/1553224161993/ai_images/imageRecognition/plants/2@2x.jpg";
				document.getElementById('img03').src = "https://aip.bdstatic.com/portal/dist/1553224161993/ai_images/imageRecognition/plants/3@2x.jpg";
				document.getElementById('img04').src = "https://aip.bdstatic.com/portal/dist/1553224161993/ai_images/imageRecognition/plants/4@2x.jpg";
				document.getElementById('img05').src = "https://aip.bdstatic.com/portal/dist/1553224161993/ai_images/imageRecognition/plants/5@2x.jpg";

			}
			var Myid = document.getElementById('content_list');
			var Myimg = Myid.getElementsByTagName('img');
			for (var i = 0; i < Myimg.length; i++) {
				var bg = document.getElementById('Content_left_bg');
				bg.style.backgroundImage = "url(" + Myimg[0].src + ")";
				Myimg[0].style = "opacity:1;border:2px solid #0073eb;";
				$("#Content_left_summary").show();
				Myimg[i].onclick = function () {
					for (var i = 0; i < Myimg.length; i++) {
						Myimg[i].style = "border: 2px solid #ebebeb;opacity: 0.5";
					}
					//换背景图片
					bg.style.backgroundImage = "url(" + this.src + ")";
					this.style = "opacity:1; border:2px solid #0073eb;";
					Click_flash();
					show1();
				}
			}
			Click_flash();
			show1();
		}
	}
}
// 				隐藏/显示效果
// function ap() {
// 	if ($("#json-intro-contain").css("display") == 'none') {
// 		$("#json-intro-contain").slideDown();
// 		$("#json-intro-contain").div("#json_intro_title");
// 	} else {
// 		$("#json-intro-contain").slideUp();
// 	}
// }

