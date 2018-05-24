//common funtion
function viewport() { //meta viewport 분기
	var isMobile = false; //initiate as false
	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { isMobile = true }
	var win_w = $(window).width();
	var win_w=window.innerWidth;
	//console.log(isMobile);
	if(!isMobile){
		if (win_w <= 1024 && win_w >= 769) {
			$("meta[name=viewport]").attr("content", "width=device-width, initial-scale=0.6, maximum-scale=1.0, minimum-scale=0.6, user-scalable=yes, target-densitydpi=medium-dpi");
		} else if (win_w <= 768 && win_w >= 451) {
			$("meta[name=viewport]").attr("content", "width=device-width, initial-scale=0.5, maximum-scale=1.0, minimum-scale=0.5, user-scalable=yes, target-densitydpi=medium-dpi");
		} else if (win_w <= 450) {
			$("meta[name=viewport]").attr("content", "width=device-width, initial-scale=0.3, maximum-scale=1.0, minimum-scale=0.3, user-scalable=yes, target-densitydpi=medium-dpi");
		} else {
			$("meta[name=viewport]").attr("content", "width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, target-densitydpi=medium-dpi");
		}
	}else if(isMobile){
	}
}
function newWin(url,nw,nh){ //새창열기
	cw=screen.availWidth;
	ch=screen.availHeight;
	ml=(cw-nw)/2;
	mt=(ch-nh)/2;
	optionT='width='+nw+',height='+nh+',top='+mt+',left='+mt+',toolbar=no,location=no,status=no,menubar=no,resizable=no,scrollbars=yes';
	window.open(url,'TaginTag',optionT);
	return false;
}
function objShow(obj){ //obj 보이기
	obj.css('display','block');
}
function objHide(obj){ //obj 숨기기
	obj.css('display','none');
}
function actAnim(obj,act) { //acting Animation (animation.css 참조)
	obj.removeClass(act + ' animated').addClass(act + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		$(this).removeClass(act + ' animated actBefore');console.log('ds');
	});
};
//snb UI s-----------------
function drawSnb(lnb_1d,snb_1d){
	$.each(arrMenu,function(index,item){ //lnb 그리기
		var snbCode="";
		if(index==lnb_1d && arrMenu[index].mDepth!=undefined){
			$.each(item.mDepth,function(index2,item2){
				if(index2==snb_1d){
					snbCode+="<li class='actOn'><a href='"+item2.m2Link+"'>"+item2.m2Name+"</a></li>";
				}else{
					snbCode+="<li><a href='"+item2.m2Link+"'>"+item2.m2Name+"</a></li>";
				}
			});
		}
		$(".snb").append(snbCode);
	});
}
//snb UI e-----------------
function currentLocation(pTitle,pTitle2,pTitle3){ //현재 페이지 표시
	var lnb_1d; var snb_1d; var snb_2d;
	$.each(arrMenu,function(index,item){
		if(arrMenu[index].mName==pTitle){
			lnb_1d=index;
		}
		if(arrMenu[index].mDepth!=undefined){
			$.each(item.mDepth,function(index2,item2){
				if(item.mDepth[index2].m2Name==pTitle2){
					snb_1d=index2;
				}
			});
		}
	});
	//console.log("lnb_1d="+pTitle+"//snb_1d="+pTitle2+"//snb_2d="+pTitle3);
	//console.log("lnb_1d="+lnb_1d+"//snb_1d="+snb_1d+"//snb_2d="+snb_2d);
	if(lnb_1d!=undefined){
		$('.lnb_1d > li').eq(lnb_1d).addClass('actOn');
	}
	if(snb_1d!=undefined){
		drawSnb(lnb_1d,snb_1d);
		$('.snb_1d > li').eq(snb_1d).addClass('actOn');
		//$('.snb_1d > li').eq(snb_1d).find('.snb_2d').slideDown();
	}
	if(snb_2d!=undefined){
		$('.snb_1d > li.actOn >.snb_2d > li').eq(snb_2d).addClass('actOn');
	}
}
function scrollMove(obj,addH){ //페이지 내 특정 obj 위치 스크롤이동
	if(addH!=undefined){
		var tempPosition=$(obj).offset().top+parseInt(addH);
	}else{
		var tempPosition=$(obj).offset().top;
	}
	$('html, body').stop().animate({scrollTop:tempPosition},300,'swing');
	return false;
}

//jquery function s-----------------
$(function($){
	//scroll s-----------------
	$(window).scroll(function(){ //스크롤시 quickMenu 활성화
	});
	//scroll e-----------------

	//lnb UI s-----------------
	/*
		$('.lnb_1d > li > a').focus(function(){ //lnb_1d focus
		$('.lnb_1d > li').removeClass('overOn');
		objHide($('.lnb_2d'));
		objShow($(this).parent().find('.lnb_2d'));
		$(this).parent().addClass('overOn');
	});
	*/
	$('.lnb_1d > li > a').hover(function(){ //lnb_1d hover
		$('.lnb_1d > li').removeClass('overOn');
		objHide($('.lnb_2d'));
		objShow($(this).parent().find('.lnb_2d'));
		$(this).parent().addClass('overOn');
	});
	/*
	$('.lnb_1d > li > a').bind('click',function(){ //lnb_1d click
		if($(this).parent().height()<=60){
			console.log($(this).parent().height());
			$('.lnb_2d').slideUp();
		}
		$('.lnb_1d > li').removeClass('overOn');
		
		$(this).parent().find('.lnb_2d').slideToggle();
		$(this).parent().addClass('overOn');
	});
	*/
	$('.lnb_2d li > a').hover(function(){ //lnb_2d hover
		$('.lnb_2d li').removeClass('overOn');
		$(this).parent().addClass('overOn');
	});
	function hideLnb(){ //lnb 숨기기
		$('.lnb_1d > li').removeClass('overOn');
		$('.lnb_2d > li').removeClass('overOn');
		objHide($('.lnb_2d'));
		objHide($('#lnb_2d_bg'));
	}
	$('#topLogo').mouseover(function(){
		hideLnb();
	});
	$('#pageVisualBox').mouseover(function(){
		hideLnb();
	});
	$('.pageVisualT').mouseover(function(){
		hideLnb();
	});
	$('#contents').mouseover(function(){
		hideLnb();
	});
	$('.lnbBtn_mobile').bind('click',function(){
		$('.lnb_1d').slideToggle();
		$('body').toggleClass('actHidden');
	});
	//lnb UI e-----------------

	//brandList UI s-----------------
	/*
	$('.bItem').bind("click",function(){
		var tempClass=$(this).find('.biDetailBox').attr('class');
		if(tempClass!="biDetailBox fadeEff slide-rt in-view"){
			$('.biDetailBox').removeClass("in-view");
		}
		$(this).find('.biDetailBox').toggleClass("in-view");
		//objShow($(this).find('.biDetailBox'));
		//actAnim($(this).find('.biDetailBox'),'zoomIn');
	});
	*/
	$('.bItem').hover(function(){
		var tempClass=$(this).find('.biDetailBox').attr('class');
		if(tempClass!="biDetailBox actOn"){
			$('.biDetailBox').removeClass("actOn");
		}
		$(this).find('.biDetailBox').toggleClass("actOn");
		//objShow($(this).find('.biDetailBox'));
		//actAnim($(this).find('.biDetailBox'),'zoomIn');
	});
	//brandList UI s-----------------

	//slideList UI s-----------------
	$('.slideListBox .titleLine a').click(function(){
		var totalIndex=$('.slideListBody > li').length;
		var tempIndex=$('.slideListBody > li').index($(this).parent().parent().parent());
		for(i=0;i<totalIndex;i++){
			if(i!=tempIndex){
				$('.slideListBody > li').eq(i).removeClass('openLine');
				$('.slideListBody > li').eq(i).find('a.slideBtn').removeClass('slideUpBtn').addClass('slideDownBtn');
				$('.slideListBody > li').eq(i).find('.conLine').slideUp();
			}
		}
		$(this).parent().parent().next('.conLine').slideToggle("",function(){
			if($(this).parent().height()>60){
				$(this).parent().addClass('openLine');
				$(this).parent().find('a.slideBtn').removeClass('slideDownBtn').addClass('slideUpBtn');
			}else{
				$(this).parent().removeClass('openLine');
				$(this).parent().find('a.slideBtn').removeClass('slideUpBtn').addClass('slideDownBtn');
			}
		});
	});
	$('.slideListBox .titleLine').hover(function(){
		$(this).parent().addClass('actOn');
	},function(){
		$(this).parent().removeClass('actOn');
	});
	$('.slideListBox .slideCloseBtn').click(function(){
		$(this).parent().parent().parent().removeClass('openLine');
		$(this).parent().parent().parent().find('a.slideBtn').removeClass('slideUpBtn').addClass('slideDownBtn');
		$(this).parent().parent().parent().find('.conLine').slideUp();
	});
	//slideList UI e-----------------

	$(".pageTab a").click(function(){ //pageTab 클릭시 스크롤 이동
		var targetObj=$(this).attr('data-target');
		$(".pageTab li").removeClass("actOn");
		$(this).parent().addClass("actOn");
		objHide($(".pageTabCon"));
		objShow($(targetObj));
	});

	$('.goToList').bind("click",function(){
		location.href = "news_index.html";
		//history.back(-1);
	});

	viewport();
});
