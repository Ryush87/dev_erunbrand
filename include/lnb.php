<ul class="lnbBtn_mobile">MENU</ul>
<ul class="lnb_1d"></ul>
<script>
//메뉴배열
	var arrMenu=[
		{
			mName:'HOME',mLink:'<?=$root?>'
		},{
			mName:'ABOUT US',mLink:'<?=$root?>',
			mDepth:[
				{m2Name:'서비스 소개',m2Link:'<?=$root?>/about/introduce.html'},
				{m2Name:'연혁',m2Link:'<?=$root?>/about/history.html'},
				{m2Name:'CEO인사말',m2Link:'<?=$root?>/about/ceo.html'},
				{m2Name:'오시는길',m2Link:'<?=$root?>/about/map.html'}
			]
		},{
			mName:'SERVICES',mLink:'<?=$root?>',
			mDepth:[
				{m2Name:'비즈니스 Objective',m2Link:'<?=$root?>/services/biz.html'},
				{m2Name:'License Out',m2Link:'<?=$root?>/services/license_out.html'},
				{m2Name:'License In',m2Link:'<?=$root?>/services/license_in.html'},
				{m2Name:'Total Platform',m2Link:'<?=$root?>/services/platform.html'},
				{m2Name:'Co-Marketing',m2Link:'<?=$root?>/services/marketing.html'},
				{m2Name:'브랜드사용절차',m2Link:'<?=$root?>/services/brand_use.html'},
				{m2Name:'브랜드 소개서',m2Link:'<?=$root?>/services/cover_1.html'}
			]
		},{
			mName:'BRAND',mLink:'<?=$root?>/brand/brand_index.html'
		},{
			mName:'FAQ',mLink:'<?=$root?>/faq/faq_index.html'
		},{
			mName:'CONTACT',mLink:'<?=$root?>/contact/contact_index.html'
		}
	];
	$.each(arrMenu,function(index,item){ //lnb 그리기
		var lnbCode="";
		if(arrMenu[index].mDepth!=undefined){
			lnbCode+="<li><a>"+item.mName+"</a>";
			lnbCode+="<div id='lnb_2d_"+index+"' class='lnb_2d'>";
			lnbCode+="<ul>";
			$.each(item.mDepth,function(index2,item2){
				lnbCode+="<li><a href='"+item2.m2Link+"'>"+item2.m2Name+"</a></li>";
			});
			lnbCode+="</ul>";
			lnbCode+="</div>";
		}else{
			lnbCode+="<li><a href='"+item.mLink+"'>"+item.mName+"</a>";
		}
		lnbCode+="</li>";
		$(".lnb_1d").append(lnbCode);
	});
</script>