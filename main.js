$(document).ready(function () {
    $('.menu > ul > li').hover(function () {
        // over
        $(this).find('.sub-menu').slideDown(400);
    }, function () {
        // out
        $(this).find('.sub-menu').slideUp(200);
    }
    );
    $('.menu > ul > li >ul>li').hover(function () {
        // over
        $(this).find('.sub-menu1').slideDown(400);
    }, function () {
        // out
        $(this).find('.sub-menu1').slideUp(200);
    }
    );
});
$(document).ready(function(){
	var stt = 0;
    starImg = $("img.anh:first").attr("stt");
    endImg = $("img.anh:last").attr("stt");
    $("img.anh").each(function(){
    	if ($(this).is(':visible'))
    		stt = $(this).attr("stt");
    });
    $("#tienlen").click(function(){
    	if (stt == endImg){
    		stt = -1;
    	}
    	tienlen = ++stt;
    	$("img.anh").hide();
    	$("img.anh").eq(tienlen).show();
    });
    $("#quaylai").click(function(){
    	if (stt == 0){
    		stt =  endImg;
    		quaylai = stt++;
    	}
    	quaylai = --stt;
    	$("img.anh").hide();
    	$("img.anh").eq(quaylai).show();
    });
    setInterval(function(){
    	$("#tienlen").click();
    },2000);
});

var modal = document.getElementsByClassName("modal"),
    btn = document.getElementsByClassName('btn'),
    close = document.getElementsByByClassName("close");

    btn.onclick = function(){
        modal[0].style.display = 'block';
    }
    close  [0].onclick = function(){
        modal[0].style.display = 'none';
    }