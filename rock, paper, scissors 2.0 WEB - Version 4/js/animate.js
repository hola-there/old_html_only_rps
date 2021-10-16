$(document).on("mouseenter hover", "#gameModal .modal-header .close, #gameModal .modal-header .right, #gameModal .modal-body #nextRow #exitGame", function(event){
	event.preventDefault();
	TweenMax.to($('#gameModal .modal-header .right'), 1.5, {width: "20em", ease: Power4.easeInOut});
});
$(document).on("mouseout", "#gameModal .modal-header .close, #gameModal .modal-header .right, #gameModal .modal-body #nextRow #exitGame", function(event){
	event.preventDefault();
	TweenMax.to($('#gameModal .modal-header .right'), .9, {width: "11em", ease: Back.easeInOut});
});


var percentText;

var showPercent = function(obj, numObj){
	if(Number(obj.css("opacity")) > 0){
		TweenMax.to(numObj, .2, {
			opacity: "0", 
			onComplete: function(){
				percentText = obj.attr("data-value");
				numObj.text(percentText);
				TweenMax.to(numObj, 1.5, {opacity: "1", scale:1, ease: Power4.easeInOut});
			}});
	}
	else{
		percentText = obj.attr("data-value");
		numObj.text(percentText);
		TweenMax.to(obj, 1.5, {opacity: "1", scale:1, ease: Power4.easeInOut});
	}
};
var hidePercent = function(numObj){
	TweenMax.to(numObj, .8, {opacity: "0", scale:0, ease: Back.easeInOut});
};

$(".miniRound #wrapper").on("click mouseenter", function(){
	TweenMax.to($(this), 1, {y: "2", ease: Power4.easeInOut});
});

$(".miniRound #wrapper").on("mouseout",function(){
	TweenMax.to($(this), .8, {y: "-2", ease: Power4.easeInOut});
});

$("#chart1 #rock1").on("mouseenter hover", function(){
	showPercent($(this), $("#chart1 .percentNum"));
});
$("#chart1 #rock1").on("mouseout",function(){
	hidePercent($("#chart1 .percentNum"));
});
$("#chart1 #paper1").on("mouseenter hover", function(){
	showPercent($(this), $("#chart1 .percentNum"));
});
$("#chart1 #paper1").on("mouseout",function(){
	hidePercent($("#chart1 .percentNum"));
});
$("#chart1 #scissor1").on("mouseenter hover", function(){
	showPercent($(this), $("#chart1 .percentNum"));
});
$("#chart1 #scissor1").on("mouseout",function(){
	hidePercent($("#chart1 .percentNum"));
});

$("#chart2 #rock2").on("mouseenter hover", function(){
	showPercent($(this), $("#chart2 .percentNum"));
});
$("#chart2 #rock2").on("mouseout",function(){
	hidePercent($("#chart2 .percentNum"));
});
$("#chart2 #paper2").on("mouseenter hover", function(){
	showPercent($(this), $("#chart2 .percentNum"));
});
$("#chart2 #paper2").on("mouseout",function(){
	hidePercent($("#chart2 .percentNum"));
});
$("#chart2 #scissor2").on("mouseenter hover", function(){
	showPercent($(this), $("#chart2 .percentNum"));
});
$("#chart2 #scissor2").on("mouseout",function(){
	hidePercent($("#chart2 .percentNum"));
});

$("#chart3 #rock3").on("mouseenter hover", function(){
	showPercent($(this), $("#chart3 .percentNum"));
});
$("#chart3 #rock3").on("mouseout",function(){
	hidePercent($("#chart3 .percentNum"));
});
$("#chart3 #paper3").on("mouseenter hover", function(){
	showPercent($(this), $("#chart3 .percentNum"));
});
$("#chart3 #paper3").on("mouseout",function(){
	hidePercent($("#chart3 .percentNum"));
});
$("#chart3 #scissor3").on("mouseenter hover", function(){
	showPercent($(this), $("#chart3 .percentNum"));
});
$("#chart3 #scissor3").on("mouseout",function(){
	hidePercent($("#chart3 .percentNum"));
});

var test;
var test2;


$(".chart").on("mouseenter hover", "g path", function(event){
	event.preventDefault();
	$(this).css("opacity", .7);
	var chart = $(this).parent().parent().parent().parent().attr("id");
	chart = chart.substring(chart.length - 1);
	chart = Number(chart);
	test = chart;
	var hand = "";
	hand = $(".doughNutTip").eq(chart-1).text();
	hand = hand.substring(0, hand.lastIndexOf(":"));
	test2 = hand;
	switch(hand){
		case "rocks":
		case "Rocks":
			switch(chart){
				case 1:
					$("#chart1 #rock1").triggerHandler("mouseenter");
				break;
				case 2:
					$("#chart2 #rock2").triggerHandler("mouseenter");
				break;
				case 3:
					$("#chart3 #rock3").triggerHandler("mouseenter");
				break;
			}
		break;
		case "papers":
		case "Papers":
			switch(chart){
				case 1:
					$("#chart1 #paper1").triggerHandler("mouseenter");
				break;
				case 2:
					$("#chart2 #paper2").triggerHandler("mouseenter");
				break;
				case 3:
					$("#chart3 #paper3").triggerHandler("mouseenter");
				break;
			}
		break;
		case "scissors":
		case "Scissors":
			switch(chart){
				case 1:
					$("#chart1 #scissor1").triggerHandler("mouseenter");
				break;
				case 2:
					$("#chart2 #scissor2").triggerHandler("mouseenter");
				break;
				case 3:
					$("#chart3 #scissor3").triggerHandler("mouseenter");
				break;
			}
		break;
	}
});
$(".chart").on("mouseout", "g path", function(event){
	event.preventDefault();
	$(this).css("opacity", 1);
	var chart = $(this).parent().parent().parent().parent().attr("id");
	chart = chart.substring(chart.length - 1);
	chart = Number(chart);
	test = chart;
	var hand = "";
	hand = $(".doughNutTip").eq(chart-1).text();
	hand = hand.substring(0, hand.lastIndexOf(":"));
	test2 = hand;
	switch(hand){
		case "rocks":
		case "Rocks":
			switch(chart){
				case 1:
					$("#chart1 #rock1").triggerHandler("mouseout");
				break;
				case 2:
					$("#chart2 #rock2").triggerHandler("mouseout");
				break;
				case 3:
					$("#chart3 #rock3").triggerHandler("mouseout");
				break;
			}
		break;
		case "papers":
		case "Papers":
			switch(chart){
				case 1:
					$("#chart1 #paper1").triggerHandler("mouseout");
				break;
				case 2:
					$("#chart2 #paper2").triggerHandler("mouseout");
				break;
				case 3:
					$("#chart3 #paper3").triggerHandler("mouseout");
				break;
			}
		break;
		case "scissors":
		case "Scissors":
			switch(chart){
				case 1:
					$("#chart1 #scissor1").triggerHandler("mouseout");
				break;
				case 2:
					$("#chart2 #scissor2").triggerHandler("mouseout");
				break;
				case 3:
					$("#chart3 #scissor3").triggerHandler("mouseout");
				break;
			}
		break;
	}
});