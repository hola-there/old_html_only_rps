// Created by Ola Bamisaiye just testing out some things in Javascript if you're wondering about redundancies or things that aren't really necessary; if you have any tips fill free to message me on Twitter: @olabamisaiye

//Construtor Function
function Player(name, wins, ties, losses, rocks, papers, scissors, color1, color2, color3, rHandColor, pHandColor, sHandColor) {
    this.name = name;
    this.wins = wins;
    this.ties = ties;
    this.losses = losses;
    this.rocks = rocks;
    this.papers = papers;
    this.scissors = scissors;
	this.color1 = color1;
	this.color2 = color2;
	this.color3 = color3;
	this.rHandColor = rHandColor;
	this.pHandColor = pHandColor;
	this.sHandColor = sHandColor;
    this.getName = function () {
		return this.name;
	};
    this.getWins = function () {
		return this.wins;
	};
	this.getTies = function () {
		return this.ties;
	};
    this.getLosses = function () {
		return this.losses;
	};
    this.getRocks = function () {
		return this.rocks;
	};
    this.getPapers = function () {
		return this.papers;
	};
    this.getScissors = function () {
		return this.scissors;
	};
	this.getColor1 = function () {
		return this.color1;
	};
	this.getColor2 = function () {
		return this.color2;
	};
	this.getColor3 = function () {
		return this.color3;
	};
	this.getRHandColor = function () {
		return this.rHandColor;
	};
	this.getPHandColor = function () {
		return this.pHandColor;
	};
	this.getSHandColor = function () {
		return this.sHandColor;
	};
    this.setName = function (newName) {
		this.name = newName;
	};
    this.addWin = function () {
		this.wins++;
	};
    this.addTie = function () {
		this.ties++;
	};
    this.addLoss =  function () {
		this.losses++;
	};
    this.usedRock = function () {
		this.rocks++;
	};
    this.usedPaper = function () {
		this.papers+=1;
	};
    this.usedScissors = function () {
		this.scissors++;
	};
	this.setColor1 = function (newColor) {
		this.color1 = newColor;
	};
	this.setColor2 = function (newColor) {
		this.color2 = newColor;
	};
	this.setColor3 = function (newColor) {
		this.color3 = newColor;
	};
	this.setRHandColor = function (newColor) {
		this.rHandColor = newColor;
	};
	this.setPHandColor = function (newColor) {
		this.pHandColor = newColor;
	};
	this.setSHandColor = function (newColor) {
		this.sHandColor = newColor;
	};
};

//Objects are a type so it can be placed within an array
var players = [];
players[0] = new Player("Computer", 0, 0, 0, 1, 2, 3, "red", "blue", "green", "black", "black", "black");
players[1] = new Player("Player 1", 0, 0, 0, 1, 2, 3, "orange", "orangered", "darkorange", "black", "black", "black");
players[2] = new Player("Player 2", 0, 0, 0, 1, 2, 3, "skyblue", "blue", "dodgerblue", "black", "black", "black");

var whoIsLeading = function (playerOne, playerTwo) {
	function difference(a, b) {
		return a - b;
	}
	
	if (playerOne.wins > playerTwo.wins) {
		return playerOne.name + " is leading with " + difference(playerOne.wins, playerTwo.wins) + " more wins than " + playerTwo.name;
	}
	else if (playerTwo.wins > playerOne.wins) {
		return playerTwo.name + " is leading with " + difference(playerTwo.wins, playerOne.wins) + " more wins than " + playerOne.name;
	}
	else {
		return playerOne.name + " is tied with " + playerTwo.name + " at " + playerOne.wins + " wins.";
	}
};

//Another way to make players:
/*
	var player1 = new Player("Player1",0,0,0,0,0,0);
	var player2 = new Player("Player2",0,0,0,0,0,0);
	var computer = new Player("Computer",0,0,0,0,0,0);
*/

//Access with ObjectName.PropertyName (dot notation)
//Or access with braket notation ObjectName["PropertyName"]

/*
//Another way to create the functions that will be used as methods / access an object through a method
var getName = function () {
    return this.name;
};
var getWins = function () {
    return this.wins;
};
var getTies = function () {
    return this.ties;
};
var getLosses = function () {
    return this.losses;
};
var getRocks = function () {
    return this.rocks;
};
var getPapers = function () {
    return this.papers;
};
var getScissors = function (){
    return this.scissors;
};

var setName = function (newName){
    this.name = newName;
};
var addWin = function (){
    this.wins++;
};
var addTie = function (){
    this.ties++;
};
var addLoss = function (){
    this.losses++;
};
var usedRock = function (){
    this.rock++;
};
var usedPaper = function (){
    this.paper++;
};
var usedScissors = function (){
    this.scissors++;
};

*/

/*
//Another Way to construct

var player2 = new Object();
player2.name = "Player2";
player2.wins = 0;
player2.ties = 0;
player2.losses = 0;
player2.rocks = 0;
player2.papers = 0;
player2.scissors = 0;

//Would be needed for assigning a function to this method if constructed this way
player2.setName = setName;
player2.getWins = getWins;
player2.getTies = getTies;
player2.getLosses = getLosses;
player2.setName = setName;
player2.usedRock = usedRock;
player2.usedPaper = usedPaper;
player2.usedScissors = usedScissors;
*/

/*

//Another way to construct
var computer ={
    name: "Computer",
    wins: 0,
    ties: 0,
    losses: 0,
    rocks: 0,
    papers: 0,
    scissors: 0
};

*/

// Lol all of these functions just to make a lighter shade of color for the chart upon hover

// These two convert RGB to Hex (I should probably try to learn how to do this...ehh later after I complete this) I understand most of it. Since hexadecimals have a base 16
function rgbToHex(red, green, blue) {
	return "#" + ((1 << 24) + (Math.floor(red) << 16) + (Math.floor(green) << 8) + Math.floor(blue)).toString(16).slice(1);
}

// Lum works by a number value; so 1 is 100% lighter while -1 is 100% darker
// Thanks Craig
function ColorLuminance(hex, lum) {

	// validate hex string
	hex = String(hex).replace(/[^0-9a-f]/gi, '');
	if (hex.length < 6) {
		hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
	}
	lum = lum || 0;

	// convert to decimal and change luminosity
	var rgb = "#", c, i;
	for (i = 0; i < 3; i++) {
		c = parseInt(hex.substr(i*2,2), 16);
		c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
		rgb += ("00"+c).substr(c.length);
	}

	return rgb;
}

// Since color is converted to rgb no matter its intial color type (whether it be a css color name, hex, hsl, rgb, etc.) I use what was orginially set in the constructor that I created for a "players" then I take that rgb value convert it to hex then use the colorluminance function to lighten that color value now in hex so that a lighter color appears on the portion of the chart that is hovered upon
var getRGB = function (a, b){
	switch(a){
		case 0:
			switch(b){
				case 1:
					var color, r, g, b;
					color = $(".stats .usage #chart1 .list-group li:nth-child(1)").css("color");
					r = color.substring(color.lastIndexOf("(")+1, color.indexOf(',', color.lastIndexOf("(")+1));
					r = Number(r);
					g = color.substring(color.indexOf(',')+2, color.lastIndexOf(","));
					g = Number(g);
					b = color.substring(color.lastIndexOf(',')+2, color.lastIndexOf(")"));
					b = Number(b);
					var hex = rgbToHex(r, g, b);
					return ColorLuminance(hex, .3); 
				break;
				case 2:
					var color, r, g, b;
					color = $(".stats .usage #chart1 .list-group li:nth-child(2)").css("color");
					r = color.substring(color.lastIndexOf("(")+1, color.indexOf(',', color.lastIndexOf("(")+1));
					r = Number(r);
					g = color.substring(color.indexOf(',')+2, color.lastIndexOf(","));
					g = Number(g);
					b = color.substring(color.lastIndexOf(',')+2, color.lastIndexOf(")"));
					b = Number(b);
					var hex = rgbToHex(r, g, b);
					return ColorLuminance(hex, .3); 
				break;
				case 3:
					var color, r, g, b;
					color = $(".stats .usage #chart1 .list-group li:nth-child(3)").css("color");
					r = color.substring(color.lastIndexOf("(")+1, color.indexOf(',', color.lastIndexOf("(")+1));
					r = Number(r);
					g = color.substring(color.indexOf(',')+2, color.lastIndexOf(","));
					g = Number(g);
					b = color.substring(color.lastIndexOf(',')+2, color.lastIndexOf(")"));
					b = Number(b);
					var hex = rgbToHex(r, g, b);
					return ColorLuminance(hex, .3); 
				break;
			}
		break;
		case 1:
			switch(b){
				case 1:
					var color, r, g, b;
					color = $(".stats .usage #chart2 .list-group li:nth-child(1)").css("color");
					r = color.substring(color.lastIndexOf("(")+1, color.indexOf(',', color.lastIndexOf("(")+1));
					r = Number(r);
					g = color.substring(color.indexOf(',')+2, color.lastIndexOf(","));
					g = Number(g);
					b = color.substring(color.lastIndexOf(',')+2, color.lastIndexOf(")"));
					b = Number(b);
					var hex = rgbToHex(r, g, b);
					return ColorLuminance(hex, .3);
					break;
				case 2:
					var color, r, g, b;
					color = $(".stats .usage #chart2 .list-group li:nth-child(2)").css("color");
					r = color.substring(color.lastIndexOf("(")+1, color.indexOf(',', color.lastIndexOf("(")+1));
					r = Number(r);
					g = color.substring(color.indexOf(',')+2, color.lastIndexOf(","));
					g = Number(g);
					b = color.substring(color.lastIndexOf(',')+2, color.lastIndexOf(")"));
					b = Number(b);
					var hex = rgbToHex(r, g, b);
					return ColorLuminance(hex, .3);
					break;
				case 3:
					var color, r, g, b;
					color = $(".stats .usage #chart2 .list-group li:nth-child(3)").css("color");
					r = color.substring(color.lastIndexOf("(")+1, color.indexOf(',', color.lastIndexOf("(")+1));
					r = Number(r);
					g = color.substring(color.indexOf(',')+2, color.lastIndexOf(","));
					g = Number(g);
					b = color.substring(color.lastIndexOf(',')+2, color.lastIndexOf(")"));
					b = Number(b);
					var hex = rgbToHex(r, g, b);
					return ColorLuminance(hex, .3); 
				break;
			}
		break;
		case 2:
			switch(b){
				case 1:
					color = $(".stats .usage #chart3 .list-group li:nth-child(1)").css("color");
					r = color.substring(color.lastIndexOf("(")+1, color.indexOf(',', color.lastIndexOf("(")+1));
					r = Number(r);
					g = color.substring(color.indexOf(',')+2, color.lastIndexOf(","));
					g = Number(g);
					b = color.substring(color.lastIndexOf(',')+2, color.lastIndexOf(")"));
					b = Number(b);
					var hex = rgbToHex(r, g, b);
					return ColorLuminance(hex, .3); 
				break;
				case 2:
					color = $(".stats .usage #chart3 .list-group li:nth-child(2)").css("color");
					r = color.substring(color.lastIndexOf("(")+1, color.indexOf(',', color.lastIndexOf("(")+1));
					r = Number(r);
					g = color.substring(color.indexOf(',')+2, color.lastIndexOf(","));
					g = Number(g);
					b = color.substring(color.lastIndexOf(',')+2, color.lastIndexOf(")"));
					b = Number(b);
					var hex = rgbToHex(r, g, b);
					return ColorLuminance(hex, .3); 
				break;
				case 3:
					color = $(".stats .usage #chart3 .list-group li:nth-child(3)").css("color");
					r = color.substring(color.lastIndexOf("(")+1, color.indexOf(',', color.lastIndexOf("(")+1));
					r = Number(r);
					g = color.substring(color.indexOf(',')+2, color.lastIndexOf(","));
					g = Number(g);
					b = color.substring(color.lastIndexOf(',')+2, color.lastIndexOf(")"));
					b = Number(b);
					var hex = rgbToHex(r, g, b);
					return ColorLuminance(hex, .3); 
				break;
			}
		break;
	}
};

//Stats feeeder
var names = ["#computerStat", "#name1", "#name2"];
var namesAgain = ["#computerName", "#player1Name", "#player2Name"];
var wins = ["#win1", "#win2", "#win3"];
var ties = ["#tie1", "#tie2", "#tie3"];
var losses = ["#loss1", "#loss2", "#loss3"];
var rocks = ["#rock1", "#rock2", "#rock3"];
var papers = ["#paper1", "#paper2", "#paper3"];
var scissors = ["#scissor1", "#scissor2", "#scissor3"];
var pWins = ["#pWin1", "#pWin2", "#pWin3"];
var pTies = ["#pTie1", "#pTie2", "#pTie3"];
var pLosses = ["#pLoss1", "#pLoss2", "#pLoss3"];
var colorArea = ["#computerColors", "#player1Colors", "#player2Colors"];
var colors = ["#color1", "#color2", "#color3"];
var charts = ["#chart1 ul", "#chart2 ul", "#chart3 ul"];

var pWinsVal = [];
var pTiesVal = [];
var pLossesVal = [];
var determinePercent = function () {
	var total = 0;
	for (var i = 0; i < players.length; i++)
	{
		total += (players[i].getWins());
		total += (players[i].getLosses());
		total += (players[i].getTies());
		if(total === 0){
			total = 1;
			pWinsVal[i] = (((players[i].getWins())/total) * 100) + "%";
			pLossesVal[i] = (((players[i].getLosses())/total) * 100)  + "%";
			pTiesVal[i] = (((players[i].getTies())/total) * 100)  + "%";
			$(pWins[i] + "").text(parseInt(pWinsVal[i]) + "%").css("width","" + (100/3) + "%");
			$(pTies[i] + "").text(parseInt(pTiesVal[i]) + "%").css("width","" + (100/3) + "%");
			$(pLosses[i] + "").text(parseInt(pLossesVal[i]) + "%").css("width","" + (100/3) + "%");
		}
		else{
			pWinsVal[i] = (((players[i].getWins())/total) * 100) + "%";
			pLossesVal[i] = (((players[i].getLosses())/total) * 100)  + "%";
			pTiesVal[i] = (((players[i].getTies())/total) * 100)  + "%";
			$(pWins[i] + "").text(parseInt(pWinsVal[i]) + "%").css("width","" + pWinsVal[i]);
			$(pTies[i] + "").text(parseInt(pTiesVal[i]) + "%").css("width","" + pTiesVal[i]);
			$(pLosses[i] + "").text(parseInt(pLossesVal[i]) + "%").css("width","" + pLossesVal[i]);
			if(pWinsVal[i] === "0%"){
				$(pWins[i] + "").css("display","none");
			}
			else{
				$(pWins[i] + "").css("display","block");
			}
			if(pLossesVal[i] === "0%"){
				$(pLosses[i] + "").css("display","none");
			}
			else{
				$(pLosses[i] + "").css("display","block");
			}
			if(pTiesVal[i] === "0%"){
				$(pTies[i] + "").css("display","none");
			}
			else{
				$(pTies[i] + "").css("display","block");
			}
		}
		total = 0;
	}
};
var statFeed = function(a){
	$(names[a] + "").text(players[a].getName());
	$(namesAgain[a] + "").text(players[a].getName() + ":");
	$(wins[a] + "").text(players[a].getWins());
	$(ties[a] + "").text(players[a].getTies());
	$(losses[a] + "").text(players[a].getLosses());
	var totalHands = players[a].getRocks() +  players[a].getPapers() +  players[a].getScissors();
	$(rocks[a] + "").attr('data-value', "" + Math.round((players[a].getRocks()/totalHands) * 100) + "%").html("Rocks <br>" + players[a].getRocks());
	$(papers[a] + "").attr('data-value', "" + Math.round((players[a].getPapers()/totalHands) * 100) + "%").html("Papers <br>" + players[a].getPapers());
	$(scissors[a] + "").attr('data-value', "" + Math.round((players[a].getScissors()/totalHands) * 100) + "%").html("Scissors <br>" + players[a].getScissors());
	determinePercent();
};

var refreshStats = function(){
	for (var i = 0; i < players.length; i++){
		statFeed(i);
		var tempChart = "" + charts[i];
		var tempPlayers = players[i];
		for(var j = 0; j < charts.length; j++){
			switch(j) {
				case 0:
					$(tempChart + " li:nth-child(1)").css("color", "" + tempPlayers.getColor1());		
					break;
				case 1:
					$(tempChart + " li:nth-child(2)").css("color", "" + tempPlayers.getColor2());		
					break;
				case 2:
					$(tempChart + " li:nth-child(3)").css("color", "" + tempPlayers.getColor3());		
					break;
			}
		}
	}
	updateChart();
};

//TODO [x] Complete this color function
var colorFeed = function(){
	var numOfColors = colors.length;
	var temp;
	var temp2;
	var tempPlayer;
	for(var i = 0; i < numOfColors; i++){
		temp = colorArea[i] + " .row ";
		tempPlayer = players[i];
		for(var j = 0; j < numOfColors; j++){
			temp2 = colors[j] + "";
			switch(j) {
				case 0:
					$("#collapseThree .panel-body " + temp + "" + temp2).css("background-color", "" + tempPlayer.getColor1());
					break;
				case 1:
					$("#collapseThree .panel-body " + temp + "" + temp2).css("background-color", "" +  tempPlayer.getColor2());
					break;
				case 2:
					$("#collapseThree .panel-body " + temp + "" + temp2).css("background-color", "" +  tempPlayer.getColor3());
					break;
			}
		}
	}
};

var entry;
var well = $(".well");
var content = $("#content");

var start = new function(){};
var graphics = new function(){};
var noGraphics = new function(){};
var thumbsUp = new function(){};
var thumbsDown = new function(){};
var confirm = new function(){};
var whatWasPressed = new function(letter){};
var showStats = new function(){};
var creditTime = new function(){};
var reset = new function(){};

$('[data-toggle="tooltip"]').tooltip({
	trigger: 'hover focus'
});
$(function () {
  $('[data-toggle="popover"]').popover();
});

var optionChosen;
thumbsUp = function(){
	var event = new Event("keydown", {"bubbles":false, "cancelable":true});
	event.keyCode = 89;
	event.which = 89;
	if((event.which == 89)||(event.keycode == 89)){
		well.append("<h4>You chose yes. The Game will now begin!</h4>");
		well.append("<div class='insert'></div>");
		$('#thumbsUp').attr("onclick","null");
		$('#thumbsUp svg').css({"cursor":"not-allowed","background-color": "#d1d1d1"});
		$('#thumbsDown').attr("onclick","null");
		$('#thumbsDown svg').css({"cursor":"not-allowed","background-color":"#fff","border-color":"#ccc","opacity":".65"});
		optionChosen = true;
		$('html, body').animate({scrollTop:$('#well .insert').last().position().top}, 'slow');
		running = true;
		game();
	}
};
thumbsDown = function(){
	var event = new Event("keydown", {"bubbles":false, "cancelable":true});
	event.keyCode = 78;
	event.which = 78;
	if(optionChosen === false || optionChosen === undefined){
		if((event.which == 78)||(event.keycode == 78)){
			well.append("<h4><strong>You chose no. So you will have the chance to try again.</strong></h4>");
			$('.yesNo').remove();
			$("#friendBtn").remove();
			$("#computerBtn").remove();
			$("#p1VComp").remove();
			$("#p2VComp").remove();
			$(".roundHolder").remove();
			$(".row").remove();
			$('#continuation').hide().last().replaceWith( "<s><p>" + $("#continuation").text() + "</p></s>" );
			well.append("<div class='insert'></div><h3>Would you like to play with default settings or would you like to customize your settings?</h3><div class='row'><div class='col-sm-6'><button id='default' class='btn btn-default' onclick='decision(0)'>Default Settings</button></div><div class='col-sm-6'><button id='custom' class='btn btn-default' onclick='decision(1)'>Custom Settings</button></div></div><div class='row'><div class='col-md-6'><a onclick='moreInfo(1)' class='moreInfo'>More Info<span class='downArrow' id='dA1'>&#94;</span></a><div class='hiddenWellSection' id='hiddenInfo1'><div class='arrow-down2'></div><h4>If you select Default Settings:</h4><li>Default Player Names</li><li>Matches per Round will be set to 3</li><li>Player colors that determine the color of the pie chart in the stats area will remain to be the same color they currently are</li><li>The colors of the rock, paper, or scissors hand will be black</li></ul></div></div><div class='col-md-6'><a onclick='moreInfo(2)' class='moreInfo'>More Info<span class='downArrow' id='dA2'>&#94;</span></a><div class='hiddenWellSection' id='hiddenInfo2'><div class='arrow-down2'></div><h4>If you select Custom Settings:</h4><li>Customize Player 1's, Player 2's, and the Computer's Names</li><li>Custom # of Matches</li><li>Customize Player Colors</li><li>Customize Rock, Paper, or Scissors Hand Colors for each Player</li></ul></div></div></div>");
			optionChosen = false;
			$('#thumbsUp').attr("onclick","null");
			$('#thumbsDown svg').css({"cursor":"not-allowed","background-color": "#d1d1d1"});
			$('#thumbsDown').attr("onclick","null");
			$('#thumbsUp svg').css({"cursor":"not-allowed"});
			$('html, body').animate({scrollTop:$('#well .insert').last().position().top}, 'slow');
		}
	}
};

var sameName = function(a){
	var which = a;
	var checked;
	switch(which){
		case 1:
			checked = document.getElementById("keepPlayer1Name").checked;
			if(checked === true){
				$("#player1NameChangeBox").prop("disabled",'disabled');
			}
			else{
				$("#player1NameChangeBox").prop("disabled",false);
			}
			break;
		case 2:
			checked = document.getElementById("keepPlayer2Name").checked;
			if(checked === true){
				$("#player2NameChangeBox").prop("disabled","disabled");
			}
			else{
				$("#player2NameChangeBox").prop("disabled",false);
			}
			break;
		case 'c':
			checked = document.getElementById("keepComputerName").checked;
			if(checked === true){
				$("#computerNameChangeBox").prop("disabled","disabled");
			}
			else{
				$("#computerNameChangeBox").prop("disabled",false);
			}
			break;
		case 3:
			checked = document.getElementById("checkP1").checked;
			if(checked === true){
				$("#nameForP1").prop("disabled","disabled");
			}
			else{
				$("#nameForP1").prop("disabled",false);
			}
			if($("#checkP2").prop("checked") != undefined){
				if((document.getElementById("checkP1").checked) && (document.getElementById("checkP2").checked)){
					$("#switchModal .modal-footer .btn-success").attr("onclick","changeName('d',1)").removeClass("disabled");
				}
				else if((document.getElementById("checkP1").checked === false) && (document.getElementById("checkP2").checked === false)){
					$("#switchModal .modal-footer .btn-success").attr("onclick","null").addClass("disabled");
				}
			}
			else if($("#checkComp").prop("checked") != undefined){
				if((document.getElementById("checkP1").checked) && (document.getElementById("checkComp").checked)){
					$("#switchModal .modal-footer .btn-success").attr("onclick","changeName('d',0)").removeClass("disabled");
				}
				else if((document.getElementById("checkP1").checked === false) && (document.getElementById("checkComp").checked === false)){
					$("#switchModal .modal-footer .btn-success").attr("onclick","null").addClass("disabled");
				}
			}
		break;
		case 4:
			checked = document.getElementById("checkP2").checked;
			if(checked === true){
				$("#nameForP2").prop("disabled","disabled");
			}
			else{
				$("#nameForP2").prop("disabled",false);
			}
			if((document.getElementById("checkP1").checked) && (document.getElementById("checkP2").checked)){
				$("#switchModal .modal-footer .btn-success").attr("onclick","changeName('d',1)").removeClass("disabled");
			}
			else if((document.getElementById("checkP1").checked === false) && (document.getElementById("checkP2").checked === false)){
				$("#switchModal .modal-footer .btn-success").attr("onclick","null").addClass("disabled");
			}
		break;
		case 5:
			checked = document.getElementById("checkComp").checked;
			if(checked === true){
				$("#nameForComp").prop("disabled","disabled");
			}
			else{
				$("#nameForComp").prop("disabled",false);
			}
			if((document.getElementById("checkP1").checked) && (document.getElementById("checkComp").checked)){
				$("#switchModal .modal-footer .btn-success").attr("onclick","changeName('d',0)").removeClass("disabled");
			}
			else if((document.getElementById("checkP1").checked === false) && (document.getElementById("checkComp").checked === false)){
				$("#switchModal .modal-footer .btn-success").attr("onclick","null").addClass("disabled");
			}
		break;
	}
};

//TODO [x] Finish this
var sameColor = function(a, b){
	var checked;
	var whichRow = a;
	var whichInput = b;
	switch(whichRow){
		case 1:
			tempPlayer = players[1];
			switch(whichInput){
				case 1:
					//TODO [x] Come back here
					checked = document.getElementById("check11").checked;
					if(checked === true){
						$("#player1Color1").prop("disabled",'disabled');
						$("#goBtn11").attr("onclick","null");
					}
					else{
						$("#player1Color1").prop("disabled",false);
						$("#goBtn11").attr("onclick","changeColor(1,1)");
					}	
				break;
				case 2:
					checked = document.getElementById("check12").checked;
					if(checked === true){
						$("#player1Color2").prop("disabled",'disabled');
						$("#goBtn12").attr("onclick","null");
					}
					else{
						$("#player1Color2").prop("disabled",false);
						$("#goBtn12").attr("onclick","changeColor(1,2)");
					}
				break;
				case 3:
					checked = document.getElementById("check13").checked;
					if(checked === true){
						$("#player1Color3").prop("disabled",'disabled');
						$("#goBtn13").attr("onclick","null");
					}
					else{
						$("#player1Color3").prop("disabled",false);
						$("#goBtn13").attr("onclick","changeColor(1,3)");
					}
				break;	
			}
		break;
		case 2:
			switch(whichInput){
				case 1:
					checked = document.getElementById("check21").checked;
					if(checked === true){
						$("#player2Color1").prop("disabled",'disabled');
						$("#goBtn21").attr("onclick","null");
					}
					else{
						$("#player2Color1").prop("disabled",false);
						$("#goBtn21").attr("onclick","changeColor(2,1)");
					}
				break;
				case 2:
					checked = document.getElementById("check22").checked;
					if(checked === true){
						$("#player2Color2").prop("disabled",'disabled');
						$("#goBtn22").attr("onclick","null");
					}
					else{
						$("#player2Color2").prop("disabled",false);
						$("#goBtn22").attr("onclick","changeColor(2,2)");
					}
				break;
				case 3:
					checked = document.getElementById("check23").checked;
					if(checked === true){
						$("#player2Color3").prop("disabled",'disabled');
						$("#goBtn23").attr("onclick","null");
					}
					else{
						$("#player2Color3").prop("disabled",false);
						$("#goBtn23").attr("onclick","changeColor(2,3)");
					}
				break;
			}
		break;
		case 3:
			switch(whichInput){
				case 1:
					checked = document.getElementById("check31").checked;
					if(checked === true){
						$("#computerColor1").prop("disabled",'disabled');
						$("#goBtn31").attr("onclick","null");
					}
					else{
						$("#computerColor1").prop("disabled",false);
						$("#goBtn31").attr("onclick","changeColor(3,1)");
					}
				break;
				case 2:
					checked = document.getElementById("check32").checked;
					if(checked === true){
						$("#computerColor2").prop("disabled",'disabled');
						$("#goBtn32").attr("onclick","null");
					}
					else{
						$("#computerColor2").prop("disabled",false);
						$("#goBtn32").attr("onclick","changeColor(3,2)");
					}
				break;
				case 3:
					checked = document.getElementById("check33").checked;
					if(checked === true){
						$("#computerColor3").prop("disabled",'disabled');
						$("#goBtn33").attr("onclick","null");
					}
					else{
						$("#computerColor3").prop("disabled",false);
						$("#goBtn33").attr("onclick","changeColor(3,3)");
					}
				break;
			}
		break;
	}
};

var changeColor = function(a, b){
	if(a > 3){
		var keepOrChangeColor = a;
		var whichCase;
		switch(a){
			case 4:
				switch(b){
					case 0:
						$('#switchModal').attr('aria-labelledby',"myOtherRoundValueModalLabel").modal('show');
						$('#switchModal .modal-title').text("Change Player 1's &/or the Computer's Colors");
						$('#switchModal .modal-body').html("<h5><b>NOTE:</b> * Enter*</h5><div class='row'><label for='nameForP1'>Change " + players[1].getName() + "'s Name:</label><div class='input-group'><span class='input-group-addon'><input id='checkP1' onclick='sameName(3)' type='checkbox' aria-label='...'></span><input type='text' class='form-control' placeholder='Enter New Name for " + players[1].getName() + " Here....' id='nameForP1'><span class='input-group-btn'><button class='btn btn-default' type='button' onclick='changeName(1, 1)'>Change your Name!</button></span></div>");
						if(players[0].getName() !== "Computer"){
							$('#switchModal .modal-body').append("<div class='row'><label for='nameForComp'>Change " + players[0].getName() + "'s (The Computer) Name:</label><div class='input-group'><span class='input-group-addon'><input id='checkComp' onclick='sameName(5)' type='checkbox' aria-label='...'></span><input type='text' class='form-control' placeholder='Enter New Name for the " + players[0].getName() + " Here....' id='nameForComp'><span class='input-group-btn'><button class='btn btn-default' type='button' onclick='changeName(1, 0)'>Change the Computer's Name!</button></span></div></div>");
						}
						else{
							$('#switchModal .modal-body').append("<div class='row'><label for='nameForComp'>Change the Computer's Name:</label><div class='input-group'><span class='input-group-addon'><input id='checkComp' onclick='sameName(5)' type='checkbox' aria-label='...'></span><input type='text' class='form-control' placeholder='Enter New Name for the " + players[0].getName() + " Here....' id='nameForComp'><span class='input-group-btn'><button class='btn btn-default' type='button' onclick='changeName(1, 0)'>Change the Computer's Name!</button></span></div></div>");
						}
						$("#switchModal .modal-footer .btn-success").attr("onclick","null").addClass("disabled").removeClass("active");
						break;
					case 1:
						$('#switchModal').attr('aria-labelledby',"changeNameLabel").modal('show');
						$('#switchModal .modal-title').text("Change Player 1's &/or Player 2's Colors");
						$('#switchModal .modal-body').html("<h5><b>NOTE:</b>* Enter names in the text areas in order to chnage the player's name upon clicking the button on the right of said text area. Checking a checkbox will make the player's name be set to the player's default name. For example checking both checkboxes will allow you to set both player names to their default names. In this case Player 1 and Player 2.*</h5><div class='row'><label for='nameForP1'>Change " + players[1].getName() + "'s Name:</label><div class='input-group'><span class='input-group-addon'><input id='checkP1' onclick='sameName(3)' type='checkbox' aria-label='...'></span><input type='text' class='form-control' placeholder='Enter New Name for " + players[1].getName() + " Here....' id='nameForP1'><span class='input-group-btn'><button class='btn btn-default' type='button' onclick='changeName(1, 1)'>Change your Name!</button></span></div>");
						$('#switchModal .modal-body').append("<div class='row'><label for='nameForP2'>Change " + players[2].getName() + "'s Name:</label><div class='input-group'><span class='input-group-addon'><input id='checkP2' onclick='sameName(4)' type='checkbox' aria-label='...'></span><input type='text' class='form-control' placeholder='Enter New Name for " + players[2].getName() + " Here....' id='nameForP2'><span class='input-group-btn'><button class='btn btn-default' type='button' onclick='changeName(1, 2)'>Change the Computer's Name!</button></span></div></div>");
						$("#switchModal .modal-footer .btn-success").attr("onclick","null").addClass("disabled").removeClass("active");
						break;
				}
				break;
		}
	}
	else{
		var tempPlayer;
		var whichRow = a;
		var whichInput = b;
		var tempColor;
		switch(whichRow){
			case 1:
				tempPlayer = players[1];
				switch(whichInput){
					case 1:
						tempColor = $("#player1Color1").val();
						$("#collapseThree .panel-body #player1Colors .row #color1").css("background-color", "" + tempColor);

						break;
					case 2:
						tempColor = $("#player1Color2").val();
						$("#collapseThree .panel-body #player1Colors .row #color2").css("background-color", "" + tempColor);
						break;
					case 3:
						tempColor = $("#player1Color3").val();
						$("#collapseThree .panel-body #player1Colors .row #color3").css("background-color", "" + tempColor);
						break;	
				}
				break;
			case 2:
				switch(whichInput){
					case 1:
						tempColor = $("#player2Color1").val();
						$("#collapseThree .panel-body #player2Colors .row #color1").css("background-color", "" + tempColor);
						break;
					case 2:
						tempColor = $("#player2Color2").val();
						$("#collapseThree .panel-body #player2Colors .row #color2").css("background-color", "" + tempColor);
						break;
					case 3:
						tempColor = $("#player2Color3").val();
						$("#collapseThree .panel-body #player2Colors .row #color3").css("background-color", "" + tempColor);
						break;
				}
				break;
			case 3:
				switch(whichInput){
					case 1:
						tempColor = $("#computerColor1").val();
						$("#collapseThree .panel-body #computerColors .row #color1").css("background-color", "" + tempColor);
						break;
					case 2:
						tempColor = $("#computerColor2").val();
						$("#collapseThree .panel-body #computerColors .row #color2").css("background-color", "" + tempColor);
						break;
					case 3:
						tempColor = $("#computerColor3").val();
						$("#collapseThree .panel-body #computerColors .row #color3").css("background-color", "" + tempColor);
						break;
				}
				break;
		}
	}
};

var tempRoundNum = 0;

//The next two variables and three arrays are for the function changeHandColor()
var whichHand; 
var tempVal;
var player1Colors = [players[1].getRHandColor(), players[1].getPHandColor(), players[1].getSHandColor()];
var player2Colors = [players[2].getRHandColor(), players[2].getPHandColor(), players[2].getSHandColor()];
var computerColors = [players[0].getRHandColor(), players[0].getPHandColor(), players[0].getSHandColor()];
var changeHandColor = function(a){
	var player = a;
	var whichPlayer;
	var changeHandColorName;
	var color;
	$("#collapseFour .panel-body button").removeClass("disabled");
	switch(player){
		case 1:
			$("#collapseFour .panel-body a").removeClass("active");
			tempVal = 1;
			whichPlayer = players[1];
			changeHandColorName = whichPlayer.getName();
			$("#collapseFour .panel-body #player1Name").addClass("active");
			$("#collapseFour .panel-body #rock").attr({"fill":"" + player1Colors[0], "onclick":"changeHandColor(4)"});
			$("#collapseFour .panel-body #paper").attr({"fill":"" + player1Colors[1], "onclick":"changeHandColor(5)"});
			$("#collapseFour .panel-body #scissors").attr({"fill":"" + player1Colors[2], "onclick":"changeHandColor(6)"});
			$("#collapseFour .panel-body #changeColorArea h4").html("" + changeHandColorName + " is Currently Selected: <small>(Click on one of the hands to be able to change its color)</small>");
			$("#collapseFour .panel-body #changeColorArea").show();
		break;
		case 2:
			$("#collapseFour .panel-body a").removeClass("active");
			tempVal = 2;
			whichPlayer = players[2];
			changeHandColorName = whichPlayer.getName();
			$("#collapseFour .panel-body #player2Name").addClass("active");
			$("#collapseFour .panel-body #rock").attr({"fill":"" + player2Colors[0], "onclick":"changeHandColor(4)"});
			$("#collapseFour .panel-body #paper").attr({"fill":"" + player2Colors[1], "onclick":"changeHandColor(5)"});
			$("#collapseFour .panel-body #scissors").attr({"fill":"" + player2Colors[2], "onclick":"changeHandColor(6)"});
			$("#collapseFour .panel-body #changeColorArea h4").html("" + changeHandColorName + " is Currently Selected: <small>(Click on one of the hands to be able to change its color)</small>");
			$("#collapseFour .panel-body #changeColorArea").show();
		break;
		case 3:
			$("#collapseFour .panel-body a").removeClass("active");
			tempVal = "c";
			whichPlayer = players[0];
			changeHandColorName = whichPlayer.getName();
			$("#collapseFour .panel-body #rock").attr({"fill":"" + computerColors[0], "onclick":"changeHandColor(4)"});
			$("#collapseFour .panel-body #paper").attr({"fill":"" + computerColors[1], "onclick":"changeHandColor(5)"});
			$("#collapseFour .panel-body #scissors").attr({"fill":"" + computerColors[2], "onclick":"changeHandColor(6)"});
			$("#collapseFour .panel-body #changeColorArea h4").html("" + changeHandColorName + " is Currently Selected: <small>(Click on one of the hands to be able to change its color)</small>");
			$("#collapseFour .panel-body #changeColorArea").show();
		break;
		case 4:
			$("#collapseFour .panel-body button").removeClass("active");
			$("#collapseFour .panel-body #rock").addClass("active");
			$("#collapseFour #changeHandColorBox").removeAttr("disabled").attr("placeholder","Change Rock's Hand Color");
			whichHand = "r";
			$('#collapseFour .panel-body #changeColorArea p:last').replaceWith( "<br><s>" + $("#collapseFour .panel-body #changeColorArea p:last").text() + "</s>" );
			$("#collapseFour .panel-body #changeColorArea").append("<p>Rock had been selected!</p>");
		break;
		case 5:
			$("#collapseFour .panel-body button").removeClass("active");
			$("#collapseFour .panel-body #paper").addClass("active");
			$("#collapseFour #changeHandColorBox").removeAttr("disabled").attr("placeholder","Change Paper's Hand Color");
			whichHand = "p";
			$('#collapseFour .panel-body #changeColorArea p:last').replaceWith( "<br><s>" + $("#collapseFour .panel-body #changeColorArea p:last").text() + "</s>" );
			$("#collapseFour .panel-body #changeColorArea").append("<p>Paper had been selected!</p>");
			break;
		case 6:
			$("#collapseFour .panel-body button").removeClass("active");
			$("#collapseFour .panel-body #scissors").addClass("active");
			$("#collapseFour #changeHandColorBox").removeAttr("disabled").attr("placeholder","Change Scissor's Hand Color");
			whichHand = "s";
			$('#collapseFour .panel-body #changeColorArea p:last').replaceWith( "<br><s>" + $("#collapseFour .panel-body #changeColorArea p:last").text() + "</s>" );
			$("#collapseFour .panel-body #changeColorArea").append("<p>Scissors had been selected!</p>");
		break;
		case 90:
			var playerBeingChanged = function(a, b, c){
				switch(a){
					case 1:
						player1Colors[b] = c;
					break;
					case 2:
						player2Colors[b] = c;
					break;
					case "c":
						computerColors[b] = c;
					break;
				}
			};
			color = $("#collapseFour #changeHandColorBox").val();
			if(color !== ""){
				switch(whichHand){
					case "r":
						$("#collapseFour .panel-body #rock").attr("fill","" + color);
						playerBeingChanged(tempVal, 0, color);
					break;
					case "p":
						$("#collapseFour .panel-body #paper").attr("fill","" + color);
						playerBeingChanged(tempVal, 1, color);
					break;
					case "s":
						$("#collapseFour .panel-body #scissors").attr("fill","" + color);
						playerBeingChanged(tempVal, 2, color);
					break;
				}
			}
		break;
	}
};

$(document).on( "focusout", '#collapseOne .panel-body #roundSelection', function(){
	tempRoundNum = $('#collapseOne .panel-body #roundSelection input').val();
	var textToSave = "The number of rounds to be played upon saving changes: ";
	if(tempRoundNum == numRounds){
		tempRoundNum = numRounds + ". What you entered is the same number you currently have set.";
		$("#collapseOne .panel-body #roundSelection").next().html( "<h5>" + textToSave + tempRoundNum + "</h5>" );
	}
	else{
		$("#collapseOne .panel-body #roundSelection").next().html( "<h5>" + textToSave + tempRoundNum + "</h5>" );
	}
});
$(document).on( "focusout", '#collapseOne .panel-body #otherMatch', function(){
	var tempMatchNum = 0;
	tempMatchNum = $('#collapseOne .panel-body #otherMatch input').val();
	$('#collapseOne .panel-body .btn').removeClass('active');
	$('#collapseOne .panel-body #matchOther').addClass('active');
	$("#collapseOne .panel-body p").hide().last().replaceWith("<br/><s>" + $("#collapseOne .panel-body p").text() + "</s>");
	if(tempMatchNum == numMatches){
		$('#collapseOne .panel-body').append('<p>You have decided to have each round consist of ' + tempMatchNum + ' Matches. Which is what you currently have set as the number of matches per round.</p>');
	}
	else{
		$('#collapseOne .panel-body').append('<p>You have decided to have each round consist of ' + tempMatchNum + ' Matches.</p>');
	}
});

$(document).on("click", '#saveSettings', function(){
	$("#rExtraModal").modal('hide');
	$("#switchModal").modal('hide');
});
// Thanks Paulund
$(window).scroll(function(){
	if ($(this).scrollTop() > 100) {
		$('#scrollToTop').fadeIn();
	} else {
		$('#scrollToTop').fadeOut();
	}
});
//TODO
$(window).resize(function(){
	updateChart();
	
});
//Click event to scroll to top
$('#scrollToTop').click(function(){
	$('html, body').animate({scrollTop : 0},800);
	$(".hiddenSection").slideUp();
	return false;
});
//Another click event to scroll to top
$('#topScroll').click(function(){
	$('html, body').animate({scrollTop : 0},800);
	$(".hiddenSection").slideUp();
	return false;
});
//Click event to scroll to stats area
$('#goToStats').click(function(){
	$('html, body').animate({scrollTop:$('.stats').position().top}, 'slow');
});
//Click event to scroll to credits area
$('#goToCredits').click(function(){
	$(".hiddenSection").slideDown();
	$('html, body').animate({scrollTop:$('.creditSection').position().top}, 'slow');
});
//Click event to scroll to coming soon area
$('#comingSoonBtn').click(function(){
	$('html, body').animate({scrollTop:$('#coming').position().top}, 'slow');
});

confirm = function(){
	well.append("<h4 id='chosen'>Do you like the choices you have currently made? If so the game will begin; if not you can try again.</h4>");
	well.append("<h4 id='yNContinue'>Please press <kbd>y</kbd> or <kbd>n</kbd> to continue or tap/click yes or no.</h4><a onclick='thumbsUp()' id='thumbsUp'><svg class='yesNo' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' x='0px' y='0px' viewBox='0 0 100 125' enable-background='new 0 0 100 100' xml:space='preserve'><path d='M23.5,76.6c3,0,5.1,0.8,7.6,1.8c3.7,1.5,8.7,3.4,19.9,3.6c-0.6-1-1-2.2-1-3.4c0-2.1,1-3.9,2.5-5.1c-1.3-1.2-2.2-2.9-2.2-4.9  c0-1.9,0.9-3.7,2.2-4.9c-1.5-1.2-2.5-3-2.5-5.1c0-2,0.9-3.9,2.5-5.1c-1.4-1.2-2.2-2.9-2.2-4.9c0-1.3,0.4-2.5,1-3.5h-5.1  c-0.6,4.9-2.1,6.5-2.4,6.8c-0.3,0.3-0.7,0.4-1,0.4c-0.4,0-0.8-0.2-1.1-0.5c-0.5-0.6-0.5-1.5,0.1-2.1c0,0,1.3-1.4,1.6-6.2l1-14.2  c0-2-0.3-7.1-3.2-9.7c-1.3-1.2-3-1.8-5.1-1.8l0,12.5c0,0.1,0,0.3-0.1,0.4l-2,7.5c0,0.1,0,0.1-0.1,0.2c-0.1,0.4-3.7,9.1-10,10.9  c-0.8,0.2-1.6-0.2-1.9-1c-0.2-0.8,0.2-1.6,1-1.9c4.6-1.3,7.7-8.3,8-9.1l1.9-7.2l0-13.8c0-0.8,0.6-1.4,1.4-1.5  c3.6-0.3,6.6,0.5,8.8,2.6c3.6,3.4,4.1,8.9,4.1,12l-0.9,12.7h24.1c3.6,0,6.5,2.9,6.5,6.5c0,1.8-0.7,3.4-1.9,4.6  c1.7,1.2,2.9,3.1,2.9,5.4c0,2.2-1.1,4.2-2.9,5.4c1.2,1.2,1.9,2.8,1.9,4.6c0,2.5-1.4,4.7-3.5,5.8c1,1.1,1.5,2.6,1.5,4.2  c0,3.6-2.9,6.5-6.5,6.5l-15.7,0c-13.1,0-18.7-2.2-22.8-3.8c-2.4-0.9-4.1-1.6-6.5-1.6c-0.8,0-1.5-0.7-1.5-1.5S22.7,76.6,23.5,76.6z   M71.5,62.2c1.9,0,3.5-1.6,3.5-3.5c0-1.9-1.6-3.5-3.5-3.5l-15.4,0c-1.7,0.2-3,1.7-3,3.4c0,1.9,1.6,3.5,3.5,3.5H71.5z M70.5,45.3  H56.2c-1.7,0.2-2.9,1.7-2.9,3.5c0,1.9,1.6,3.5,3.5,3.5h13.7c1.9,0,3.5-1.6,3.5-3.5S72.4,45.3,70.5,45.3z M70.5,65.2l-14.2,0  c-1.7,0.2-3,1.7-3,3.4c0,1.9,1.6,3.5,3.5,3.5h13.7c1.9,0,3.5-1.6,3.5-3.5C74,66.7,72.4,65.2,70.5,65.2z M72,78.6  c0-1.9-1.6-3.5-3.5-3.5h-12c-1.9,0-3.5,1.6-3.5,3.5c0,1.8,1.4,3.3,3.2,3.4l12.3,0C70.4,82.1,72,80.5,72,78.6z'/></svg></a><a onclick='thumbsDown()' id='thumbsDown'><svg class='yesNo' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' x='0px' y='0px' viewBox='0 0 100 125' enable-background='new 0 0 100 100' xml:space='preserve'><path d='M75.2,50.7c-6.3,1.8-9.8,10.5-10,10.9c0,0.1,0,0.1-0.1,0.2l-2,7.5c0,0.1-0.1,0.3-0.1,0.4v12.5c-2.1,0-3.8-0.7-5.1-1.8  c-2.9-2.7-3.2-7.7-3.2-9.6l1-14.3c0-0.4-0.1-0.8-0.4-1.1c-0.3-0.3-0.7-0.5-1.1-0.5H29.5c-1.9,0-3.5-1.6-3.5-3.5s1.6-3.5,3.5-3.5H32  c0.8,0,1.5-0.7,1.5-1.5s-0.7-1.5-1.5-1.5h-2.5c-1.9,0-3.5-1.6-3.5-3.5s1.6-3.5,3.5-3.5l0,0H32c0.8,0,1.5-0.7,1.5-1.5  s-0.7-1.5-1.5-1.5h-2.5c-1.9,0-3.5-1.6-3.5-3.5c0-0.8,0.2-3.5,2.7-3.5H32l0,0c0.8,0,1.5-0.7,1.5-1.5s-0.7-1.5-1.5-1.5l0,0h-2.5  c-1.9,0-3.5-1.6-3.5-3.5s1.6-3.5,3.5-3.5h16.7c12.5,0,17.8,2.1,21.7,3.6c2.5,1,4.6,1.8,7.6,1.8c0.8,0,1.5-0.7,1.5-1.5  s-0.7-1.5-1.5-1.5c-2.4,0-4.1-0.7-6.5-1.6c-4.1-1.6-9.7-3.8-22.8-3.8H29.5c-3.6,0-6.5,2.9-6.5,6.5c0,1.9,0.8,3.6,2.1,4.8  C23.9,27.2,23,29,23,31.4c0,2,0.9,3.8,2.3,5c-1.4,1.2-2.4,3-2.4,5s0.9,3.8,2.3,5c-1.4,1.2-2.3,3-2.3,5c0,3.6,2.9,6.5,6.5,6.5h23.1  l-0.9,12.8c0,3,0.5,8.6,4.1,11.9c1.9,1.8,4.4,2.6,7.4,2.6c0.5,0,0.9,0,1.4-0.1c0.8-0.1,1.4-0.7,1.4-1.5V69.8l1.9-7.2  c0.3-0.8,3.4-7.7,8-9.1c0.8-0.2,1.3-1.1,1-1.9C76.8,51,76,50.5,75.2,50.7z'/></svg></a>");
	whatWasPressed("yn");
};
// TODO
whatWasPressed = function (letter){
    content.on('keydown', function(event){
		event.stopImmediatePropagation();
		switch(letter){
			case "yn":
				if((event.which == 89)||(event.keycode == 89)){
					if((optionChosen === false)||(optionChosen === undefined)){
						well.append("<h4>You entered <kbd>" + String.fromCharCode(event.which) + "</kbd>. The Game will now begin!</h4>");
						well.append("<div class='insert'></div>");
						$('#thumbsUp').attr("onclick","null");
						$('#thumbsUp svg').css({"cursor":"not-allowed","background-color": "#d1d1d1"});
						$('#thumbsDown').attr("onclick","null");
						$('#thumbsDown svg').css({"cursor":"not-allowed","background-color":"#fff","border-color":"#ccc","opacity":".65"});
						optionChosen = true;
						$('html, body').animate({scrollTop:$('#well .insert').last().position().top}, 'slow');
						running = true;
						game();
						return;
					}
					else{
						return;
					}
				}
				else if((event.which == 78)||(event.keycode == 78)){
					if((optionChosen === false)||(optionChosen === undefined)){
						well.append("<h4><strong>You entered <kbd>" + String.fromCharCode(event.which) + "</kbd>. So you will have the chance to try again.</strong></h4>");
						$('.yesNo').remove();
						$("#friendBtn").remove();
						$("#computerBtn").remove();
						$("#p1VComp").remove();
						$("#p2VComp").remove();
						$(".roundHolder").remove();
						$(".row").remove();
						$('#continuation').hide().last().replaceWith( "<s><p>" + $("#continuation").text() + "</p></s>" );
						well.append("<div class='insert'></div><h3>Would you like to play with default settings or would you like to customize your settings?</h3><div class='row'><div class='col-sm-6'><button id='default' class='btn btn-default' onclick='decision(0)'>Default Settings</button></div><div class='col-sm-6'><button id='custom' class='btn btn-default' onclick='decision(1)'>Custom Settings</button></div></div><div class='row'><div class='col-md-6'><a onclick='moreInfo(1)' class='moreInfo'>More Info<span class='downArrow' id='dA1'>&#94;</span></a><div class='hiddenWellSection' id='hiddenInfo1'><div class='arrow-down2'></div><h4>If you select Default Settings:</h4><li>Default Player Names</li><li>Matches per Round will be set to 3</li><li>Player colors that determine the color of the pie chart in the stats area will remain to be the same color they currently are</li><li>The colors of the rock, paper, or scissors hand will be black</li></ul></div></div><div class='col-md-6'><a onclick='moreInfo(2)' class='moreInfo'>More Info<span class='downArrow' id='dA2'>&#94;</span></a><div class='hiddenWellSection' id='hiddenInfo2'><div class='arrow-down2'></div><h4>If you select Custom Settings:</h4><li>Customize Player 1's, Player 2's, and the Computer's Names</li><li>Custom # of Matches</li><li>Customize Player Colors</li><li>Customize Rock, Paper, or Scissors Hand Colors for each Player</li></ul></div></div></div>");
						optionChosen = false;
						$('#thumbsUp').attr("onclick","null");
						$('#thumbsDown svg').css({"cursor":"not-allowed","background-color": "#d1d1d1"});
						$('#thumbsDown').attr("onclick","null");
						$('#thumbsUp svg').css({"cursor":"not-allowed"});	
						$('html, body').animate({scrollTop:$('#well .insert').last().position().top}, 'slow');
						return;
					}
					else{
						return;
					}
				}
				else{
					if(optionChosen === undefined){
						well.append("<div class='insert'></div><h4>You did not enter <kbd>y</kbd> or <kbd>n</kbd>. Instead you entered <kbd>" + String.fromCharCode(event.which) + "</kbd>. Please try again.</h4>");
						$('.yesNo').remove();
						well.append("<h5>Please press <kbd>y</kbd> or <kbd>n</kbd> to continue or tap/click yes or no.</h5><a onclick='thumbsUp()' id='thumbsUp'><svg class='yesNo' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' x='0px' y='0px' viewBox='0 0 100 125' enable-background='new 0 0 100 100' xml:space='preserve'><path d='M23.5,76.6c3,0,5.1,0.8,7.6,1.8c3.7,1.5,8.7,3.4,19.9,3.6c-0.6-1-1-2.2-1-3.4c0-2.1,1-3.9,2.5-5.1c-1.3-1.2-2.2-2.9-2.2-4.9  c0-1.9,0.9-3.7,2.2-4.9c-1.5-1.2-2.5-3-2.5-5.1c0-2,0.9-3.9,2.5-5.1c-1.4-1.2-2.2-2.9-2.2-4.9c0-1.3,0.4-2.5,1-3.5h-5.1  c-0.6,4.9-2.1,6.5-2.4,6.8c-0.3,0.3-0.7,0.4-1,0.4c-0.4,0-0.8-0.2-1.1-0.5c-0.5-0.6-0.5-1.5,0.1-2.1c0,0,1.3-1.4,1.6-6.2l1-14.2  c0-2-0.3-7.1-3.2-9.7c-1.3-1.2-3-1.8-5.1-1.8l0,12.5c0,0.1,0,0.3-0.1,0.4l-2,7.5c0,0.1,0,0.1-0.1,0.2c-0.1,0.4-3.7,9.1-10,10.9  c-0.8,0.2-1.6-0.2-1.9-1c-0.2-0.8,0.2-1.6,1-1.9c4.6-1.3,7.7-8.3,8-9.1l1.9-7.2l0-13.8c0-0.8,0.6-1.4,1.4-1.5  c3.6-0.3,6.6,0.5,8.8,2.6c3.6,3.4,4.1,8.9,4.1,12l-0.9,12.7h24.1c3.6,0,6.5,2.9,6.5,6.5c0,1.8-0.7,3.4-1.9,4.6  c1.7,1.2,2.9,3.1,2.9,5.4c0,2.2-1.1,4.2-2.9,5.4c1.2,1.2,1.9,2.8,1.9,4.6c0,2.5-1.4,4.7-3.5,5.8c1,1.1,1.5,2.6,1.5,4.2  c0,3.6-2.9,6.5-6.5,6.5l-15.7,0c-13.1,0-18.7-2.2-22.8-3.8c-2.4-0.9-4.1-1.6-6.5-1.6c-0.8,0-1.5-0.7-1.5-1.5S22.7,76.6,23.5,76.6z   M71.5,62.2c1.9,0,3.5-1.6,3.5-3.5c0-1.9-1.6-3.5-3.5-3.5l-15.4,0c-1.7,0.2-3,1.7-3,3.4c0,1.9,1.6,3.5,3.5,3.5H71.5z M70.5,45.3  H56.2c-1.7,0.2-2.9,1.7-2.9,3.5c0,1.9,1.6,3.5,3.5,3.5h13.7c1.9,0,3.5-1.6,3.5-3.5S72.4,45.3,70.5,45.3z M70.5,65.2l-14.2,0  c-1.7,0.2-3,1.7-3,3.4c0,1.9,1.6,3.5,3.5,3.5h13.7c1.9,0,3.5-1.6,3.5-3.5C74,66.7,72.4,65.2,70.5,65.2z M72,78.6  c0-1.9-1.6-3.5-3.5-3.5h-12c-1.9,0-3.5,1.6-3.5,3.5c0,1.8,1.4,3.3,3.2,3.4l12.3,0C70.4,82.1,72,80.5,72,78.6z'/></svg></a><a onclick='thumbsDown()' id='thumbsDown'><svg class='yesNo' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' x='0px' y='0px' viewBox='0 0 100 125' enable-background='new 0 0 100 100' xml:space='preserve'><path d='M75.2,50.7c-6.3,1.8-9.8,10.5-10,10.9c0,0.1,0,0.1-0.1,0.2l-2,7.5c0,0.1-0.1,0.3-0.1,0.4v12.5c-2.1,0-3.8-0.7-5.1-1.8  c-2.9-2.7-3.2-7.7-3.2-9.6l1-14.3c0-0.4-0.1-0.8-0.4-1.1c-0.3-0.3-0.7-0.5-1.1-0.5H29.5c-1.9,0-3.5-1.6-3.5-3.5s1.6-3.5,3.5-3.5H32  c0.8,0,1.5-0.7,1.5-1.5s-0.7-1.5-1.5-1.5h-2.5c-1.9,0-3.5-1.6-3.5-3.5s1.6-3.5,3.5-3.5l0,0H32c0.8,0,1.5-0.7,1.5-1.5  s-0.7-1.5-1.5-1.5h-2.5c-1.9,0-3.5-1.6-3.5-3.5c0-0.8,0.2-3.5,2.7-3.5H32l0,0c0.8,0,1.5-0.7,1.5-1.5s-0.7-1.5-1.5-1.5l0,0h-2.5  c-1.9,0-3.5-1.6-3.5-3.5s1.6-3.5,3.5-3.5h16.7c12.5,0,17.8,2.1,21.7,3.6c2.5,1,4.6,1.8,7.6,1.8c0.8,0,1.5-0.7,1.5-1.5  s-0.7-1.5-1.5-1.5c-2.4,0-4.1-0.7-6.5-1.6c-4.1-1.6-9.7-3.8-22.8-3.8H29.5c-3.6,0-6.5,2.9-6.5,6.5c0,1.9,0.8,3.6,2.1,4.8  C23.9,27.2,23,29,23,31.4c0,2,0.9,3.8,2.3,5c-1.4,1.2-2.4,3-2.4,5s0.9,3.8,2.3,5c-1.4,1.2-2.3,3-2.3,5c0,3.6,2.9,6.5,6.5,6.5h23.1  l-0.9,12.8c0,3,0.5,8.6,4.1,11.9c1.9,1.8,4.4,2.6,7.4,2.6c0.5,0,0.9,0,1.4-0.1c0.8-0.1,1.4-0.7,1.4-1.5V69.8l1.9-7.2  c0.3-0.8,3.4-7.7,8-9.1c0.8-0.2,1.3-1.1,1-1.9C76.8,51,76,50.5,75.2,50.7z'/></svg></a>");
						whatWasPressed("yn");
					}
					else{
						return;
					}
				}
			break;
			default:
			alert("You haven't entered a case for whatWasPressed yet");
			break;
		} 
    });
};

showCS = function(){
	var cSArea = $("#coming .panel-body");
	cSArea.slideToggle(400);
};
showStats = function(){
  	var statArea = $("#stats .panel-body");
	statArea.slideToggle(400);
};
creditTime = function(){
    var credit = $(".hiddenSection");
    credit.slideToggle(800); 
	$('html, body').animate({scrollTop:$('.creditSection').position().top}, 'slow');
  };
var toggleOtherMatch = function(){
	var matchButtons = ['#match1','#match3','#match5'];
	var otherMatch = $('#otherMatch');
	otherMatch.slideToggle();  
	var otherMatchButton = $('#matchOther');
	matchButtons.forEach(function(value){
		$(value).removeClass('active');
	});
	otherMatchButton.toggleClass('active');
	$("#collapseOne .panel-body p").hide().last().replaceWith("<br/><s>" + $("#collapseOne .panel-body p").text() + "</s>");
	var customMatchValue = $('#collapseOne .panel-body input').val();
};
// TODO [x] Finish this gunction too
var toggleChangeColor = function(row){
	var whichRow = row;
	var rows = ["#collapseThree .panel-body #player1Colors #row1", "#collapseThree .panel-body #player2Colors #row2", "#collapseThree .panel-body #computerColors #row3"];
	switch(whichRow){
		case 1:
			$("#collapseThree .panel-body #player1Colors #changeColorBtn1").toggleClass('active');
			$("" + rows[whichRow - 1]).slideToggle();
		break;
		case 2:
			$("#collapseThree .panel-body #player2Colors #changeColorBtn2").toggleClass('active');
			$("" + rows[whichRow - 1]).slideToggle();
		break;
		case 3:
			$("#collapseThree .panel-body #computerColors #changeColorBtn3").toggleClass('active');
			$("" + rows[whichRow - 1]).slideToggle();
		break;
	}
};

var moreInfo = function(a){
	switch(a){
		case 1:
			if($("#well #hiddenInfo1").css("display") === "none"){
				$("#dA1").css("transform","rotate(0deg)");
			}
			else{
				$("#dA1").css("transform","rotate(180deg)");
			}
			$("#well #hiddenInfo1").slideToggle("slow");
		break;
		case 2:
			if($("#well #hiddenInfo2").css("display")==="block"){
				$("#dA2").css("transform","rotate(180deg)");
			}
			else{
				$("#dA2").css("transform","rotate(0deg)");
			}
			$("#well #hiddenInfo2").slideToggle("slow");
		break;
	}
};
start = function(){
	well.append("<h1 id='firstLine'>Welcome to Rock, Paper, Scissors 2.0!</h1><h3>Would you like to play with default settings or would you like to customize your settings?<br><small>Settings can be changed at any time by clicking or tapping the settings button located at the top of the page.</small></h3><div class='row'><div class='col-sm-6'><button id='default' class='btn btn-default' onclick='decision(0)'>Default Settings</button></div><div class='col-sm-6'><button id='custom' class='btn btn-default' onclick='decision(1)'>Custom Settings</button></div></div><div class='row'><div class='col-md-6'><a onclick='moreInfo(1)' class='moreInfo'>More Info<span class='downArrow' id='dA1'>&#94;</span></a><div class='hiddenWellSection' id='hiddenInfo1'><div class='arrow-down2'></div><h4>If you select Default Settings:</h4><li>Default Player Names</li><li>Matches per Round will be set to 3</li><li>Player colors that determine the color of the pie chart in the stats area will remain to be the same color they currently are</li><li>The colors of the rock, paper, or scissors hand will be black</li></ul></div></div><div class='col-md-6'><a onclick='moreInfo(2)' class='moreInfo'>More Info<span class='downArrow' id='dA2'>&#94;</span></a><div class='hiddenWellSection' id='hiddenInfo2'><div class='arrow-down2'></div><h4>If you select Custom Settings:</h4><li>Customize Player 1's, Player 2's, and the Computer's Names</li><li>Custom # of Matches</li><li>Customize Player Colors</li><li>Customize Rock, Paper, or Scissors Hand Colors for each Player</li></ul></div></div></div>");
	$('#start').addClass("disabled").attr("onclick","null").tooltip('destroy').css({"pointer-events":"painted", "cursor":"not-allowed"});
	$('html, body').animate({scrollTop:$('#well #firstLine').last().position().top}, 'slow');
};

var decision = function(a){
	switch(a){
		case 0:
			$("#default").removeAttr("onclick").addClass("active").css("cursor","not-allowed");
			$("#custom").removeAttr("onclick").addClass("disabled").css("cursor","not-allowed");
			players[0].setName("Computer");
			players[1].setName("Player 1");
			players[2].setName("Player 2");
			numMatches = 3;
			var numOfPlayers = players.length;
			for(var i = 0; i < numOfPlayers; i++){
				players[i].setRHandColor("black");
				players[i].setPHandColor("black");
				players[i].setSHandColor("black");
			}
			whichOpponent();
			$('html, body').animate({scrollTop:$('#well h4').last().position().top}, 'slow');
		break;
		case 1:
			$("#custom").removeAttr("onclick").addClass("active").css("cursor","not-allowed");
			$("#default").removeAttr("onclick").addClass("disabled").css("cursor","not-allowed");
			settings();
			whichOpponent();
			$('html, body').animate({scrollTop:$('#well h4').last().position().top}, 'slow');

		break;
	}
};
//TODO Complete the reset function
reset = function(){
	$('#start').removeClass("disabled").attr("onclick","start()").tooltip('toggle').css({"pointer-events":"painted", "cursor":"pointer"});
	well.append("<div class='insert'></div><h1>The game has been reset!</h1>");
};

var settings = function(){
	$('#switchModal').attr('aria-labelledby',"mySettingsModalLabel").modal('show');
	$('#switchModal .modal-dialog').removeClass('modal-sm');
	$('#switchModal .modal-dialog').addClass('modal-lg');
	$('#switchModal .modal-title').text("Settings Menu");
	$('#switchModal .modal-body').html("<div class='panel-group' id='accordion' role='tablist' aria-multiselectable='false'> <div class='panel panel-default'> <div class='panel-heading' data-toggle='collapse' data-target='#collapseOne' data-parent='#accordion' role='tab button' aria-expanded='true' aria-controls='collapseOne' aria-expanded='false' id='headingOne'> <h4 class='panel-title'> <a class='settings' role='button'>Change Number of Rounds:</a> </h4> </div> <div id='collapseOne' class='panel-collapse collapse in' role='tabpanel' aria-labelledby='headingOne'> <div class='panel-body'><h5><strong>*Note:</strong> Changes made will be saved upon clicking \"Save Changes\" below.</h5><br/> <h4>Currently Selected Number of Rounds: " + numRounds + "</h4> <h5>Select the number of rounds you would like to play:</h5> <div class='input-group' id=\"roundSelection\"> <input type='number' min='1' class='form-control' placeholder='Enter the number of Rounds you'd like to play here..' aria-describedby='roundsArea'> <span class='input-group-addon' id='roundsArea'>Round(s)</span> </div> <h5>The number of rounds to be played upon saving changes: " + tempRoundNum + "</h5><h5>Default setting for Matches per Round are: 3.</h5> <h5>Please select the number of matches you'd like to play within each round:</h5><button class='btn btn-default' id='match1'>1</button><button class='btn btn-default' id='match3'>3</button><button class='btn btn-default' id='match5'>5</button><button class='btn btn-default' id='matchOther' onclick='toggleOtherMatch()'>Other</button><div class='input-group' class='pull-left' id='otherMatch'><input type='number' min='1' class='form-control' placeholder='Enter the number of matches here...' aria-describedby='matchesArea'> <span class='input-group-addon' id='matchesArea'>Matches(s)</span> </div> </div> </div> </div> <div class='panel panel-default'> <div class='panel-heading collapsed' data-toggle='collapse' data-target='#collapseTwo' data-parent='#accordion' role='tab button' aria-expanded='false' id='headingTwo' aria-controls='collapseTwo'> <h4 class='panel-title'> <a class='settings' role='button'>Change Player Names:</a> </h4> </div> <div id='collapseTwo' class='panel-collapse collapse' role='tabpanel' aria-labelledby='headingTwo'> <div class='panel-body'> <p>*<b>Note:</b> For all names entered, in their respective boxes, they will be changed upon saving changes*</p> <label for='player1NameChangeBox'>Change Player 1's Name:</label> <p>Default Name: Player 1</p> <div class='input-group'> <span class='input-group-addon' id='player1Box'>New Name for Player 1</span> <input type='text' class='form-control' id='player1NameChangeBox' aria-describedby='player1Box' placeholder='Enter New Name Here...'> </div> <div class='checkbox'> <label onclick='sameName(1)'> <input id='keepPlayer1Name' type='checkbox' value='keepName'>Use Default Name </label> </div> <label for='player2NameChangeBox'>Change Player 2's Name:</label> <p>Default Name: Player 2</p> <div class='input-group'> <span class='input-group-addon' id='player2Box'>New Name for Player 2</span> <input type='text' class='form-control' id='player2NameChangeBox' aria-describedby='player2Box' placeholder='Enter New Name Here...'> </div> <div class='checkbox'> <label onclick='sameName(2)'> <input id='keepPlayer2Name' type='checkbox' value='keepName'>Use Default Name </label> </div> <label for='computerNameChangeBox'>Change the Computer's Name:</label> <p>Default Name: Computer</p> <div class='input-group'> <span class='input-group-addon' id='basic-addon3'>New Name for the Computer</span> <input type='text' class='form-control' id='computerNameChangeBox' aria-describedby='basic-addon3' placeholder='Enter New Name Here...'></div> <div class='checkbox'> <label onclick='sameName(\"c\")'><input id='keepComputerName' type='checkbox' value='keepName'>Use Default Name </label> </div> </div> </div> </div><div class='panel panel-default'> <div class='panel-heading collapsed' data-toggle='collapse' data-target='#collapseThree' data-parent='#accordion' role='tab button' aria-expanded='false' id='headingThree' aria-controls='collapseThree'> <h4 class='panel-title'> <a class='settings' role='button'>Change Player Colors:</a> </h4> </div> <div id='collapseThree' class='panel-collapse collapse' role='tabpanel' aria-labelledby='headingThree'> <div class='panel-body'> </div> </div> </div><div class='panel panel-default'><div class='panel-heading collapsed' data-toggle='collapse' data-target='#collapseFour' data-parent='#accordion' role='tab button' aria-expanded='false' id='headingFour' aria-controls='collapseFour'><h4 class='panel-title'><a class='settings' role='button'>Change Player Hand Colors:</a></h4></div><div id='collapseFour' class='panel-collapse collapse' role='tabpanel' aria-labelledby='headingFour'><div class='panel-body'> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</div></div></div></div>");
	
	
	$('#switchModal #collapseThree .panel-body').append("<p>*<b>Note:</b> Any changes will be changed upon clicking \"Save changes\" below. You can enter colors in any of these ways: a name from the list that appears below the textbox; rgb(#,#,#); a hex value like #ff0000; hsl(#,#%,#%); or hsla(#,#%,#%,#). For example: For Player 1 if the color is changed for the R1 block then it will be saved upon clicking save changes even if you check the checkbox next to Change Color 1 box just under the button \"Change Color(s)\"*</p><br/><div id='player1Colors'><div class='row'><h4 class='colorName'>" + players[1].getName() + ":</h4><div class='square square1' id='color1'><p>1</p><p class='colorSpecial'>R</p></div><div class='square square2' id='color2'><p>2</p><p class='colorSpecial'>P</p></div><div class='square square3' id='color3'><p>3</p><p class='colorSpecial'>S</p></div><br/><button class='btn btn-default' id='changeColorBtn1' onclick='toggleChangeColor(1)'>Change Color(s)</button></div><div class='row' id='row1'><div class='col-lg-4'><div class='input-group'><span class='input-group-addon'><input onclick='sameColor(1,1)' id='check11' type='checkbox' aria-label='...'></span><input type='text' class='form-control' placeholder='Change Color 1' list='colors' id='player1Color1'><span class='input-group-btn'><button class='btn btn-default' id='goBtn11' type='button' onclick='changeColor(1, 1)'>Go!</button></span></div></div><div class='col-lg-4'><div class='input-group'><span class='input-group-addon'><input onclick='sameColor(1,2)' id='check12' type='checkbox' aria-label='...'></span><input type='text' class='form-control' list='colors' placeholder='Change Color 2' id='player1Color2'><span class='input-group-btn'><button class='btn btn-default' id='goBtn12' type='button' onclick='changeColor(1, 2)'>Go!</button></span></div></div><div class='col-lg-4'><div class='input-group'><span class='input-group-addon'><input onclick='sameColor(1,3)' id='check13' type='checkbox' aria-label='...'></span><input type='text' class='form-control' list='colors' placeholder='Change Color 3' id='player1Color3'><span class='input-group-btn'><button class='btn btn-default' id='goBtn13' type='button' onclick='changeColor(1, 3)'>Go!</button></span></div></div></div></div><div id='player2Colors'><div class='row'><h4 class='colorName'>" + players[2].getName() + ":</h4><div class='square square1' id='color1'><p>1</p><p class='colorSpecial'>R</p></div><div class='square square2' id='color2'><p>2</p><p class='colorSpecial'>P</p></div><div class='square square3' id='color3'><p>3</p><p class='colorSpecial'>S</p></div><br/><button class='btn btn-default' id='changeColorBtn2' onclick='toggleChangeColor(2)'>Change Color(s)</button></div><div class='row' id='row2'><div class='col-lg-4'><div class='input-group'><span class='input-group-addon'><input onclick='sameColor(2,1)' id='check21' type='checkbox' aria-label='...'></span><input type='text' class='form-control' list='colors' placeholder='Change Color 1' id='player2Color1'><span class='input-group-btn'><button class='btn btn-default' id='goBtn21' type='button' onclick='changeColor(2, 1)'>Go!</button></span></div></div><div class='col-lg-4'><div class='input-group'><span class='input-group-addon'><input onclick='sameColor(2,2)' id='check22' type='checkbox' aria-label='...'></span><input type='text' class='form-control' list='colors' placeholder='Change Color 2' id='player2Color2'><span class='input-group-btn'><button class='btn btn-default' id='goBtn22' type='button' onclick='changeColor(2, 2)'>Go!</button></span></div></div><div class='col-lg-4'><div class='input-group'><span class='input-group-addon'><input onclick='sameColor(2,3)' id='check23' type='checkbox' aria-label='...'></span><input type='text' class='form-control' list='colors' placeholder='Change Color 3' id='player2Color3'><span class='input-group-btn'><button class='btn btn-default' id='goBtn23' type='button' onclick='changeColor(2, 3)'>Go!</button></span></div></div></div></div><div id='computerColors'><div class='row'><h4 class='colorName'>" + players[0].getName() + " (Computer):</h4><div class='square square1' id='color1'><p>1</p><p class='colorSpecial'>R</p></div><div class='square square2' id='color2'><p>2</p><p class='colorSpecial'>P</p></div><div class='square square3' id='color3'><p>3</p><p class='colorSpecial'>S</p></div><br/><button class='btn btn-default' id='changeColorBtn3' onclick='toggleChangeColor(3)'>Change Color(s)</button></div><div class='row' id='row3'><div class='col-lg-4'><div class='input-group'><span class='input-group-addon'><input onclick='sameColor(3,1)' id='check31' type='checkbox' aria-label='...'></span><input type='text' class='form-control' list='colors' placeholder='Change Color 1' id='computerColor1'><span class='input-group-btn'><button class='btn btn-default' id='goBtn31' type='button' onclick='changeColor(3, 1)'>Go!</button></span></div></div><div class='col-lg-4'><div class='input-group'><span class='input-group-addon'><input onclick='sameColor(3,2)' id='check32' type='checkbox' aria-label='...'></span><input type='text' class='form-control' list='colors' placeholder='Change Color 2' id='computerColor2'><span class='input-group-btn'><button class='btn btn-default' id='goBtn32' type='button' onclick='changeColor(3, 2)'>Go!</button></span></div></div><div class='col-lg-4'><div class='input-group'><span class='input-group-addon'><input onclick='sameColor(3,3)' id='check33' type='checkbox' aria-label='...'></span><input type='text' class='form-control' list='colors' placeholder='Change Color 3' id='computerColor3'><span class='input-group-btn'><button class='btn btn-default' id='goBtn33' type='button' onclick='changeColor(3, 3)'>Go!</button></span></div></div></div></div>");
	
	//TODO: [x] The last settings panel
	$('#switchModal #collapseFour .panel-body').html("<p><b>*Note:</b>Click on the player that you would like to alter the hand of, then you will be able to change the color of the hand you select afterward should you like to do so.<br> You can enter colors in any of these ways: a name from the list that appears below the textbox; rgb(#,#,#); a hex value like #ff0000; hsl(#,#%,#%); or hsla(#,#%,#%,#)*</p><div id='mainArea' class='row'><div class='col-md-6'><a class='btn btn-default' id='player1Name' onclick='changeHandColor(1)'> " + players[1].getName() + ":</a><a class='btn btn-default' id='player2Name' onclick='changeHandColor(2)'> " + players[2].getName() + ":</a><a class='btn btn-default' id='computerName' onclick='changeHandColor(3)'> " + players[0].getName() + ":</a></div><div class='col-md-6'><button class='btn btn-default disabled'><svg id='rock' xmlns='http://www.w3.org/2000/svg' enable-background='new 0 0 100 100' viewBox='0 0 100 125' x='0px' y='0px' xmlns:xml='http://www.w3.org/XML/1998/namespace' xml:space='preserve' version='1.1'><path d='M 49.46 79.258 c -2.858 0 -5.457 -0.156 -7.455 -0.275 c -10.978 -0.656 -21.154 -13.612 -23.419 -24.83 l -0.026 -0.165 c -0.176 -1.505 2.688 -15.322 5.127 -17.15 c 1.909 -1.432 5.465 -1.746 7.386 -1.806 c -0.045 -1.558 -0.104 -2.487 -0.105 -2.5 c -0.2 -5.494 3.116 -8.383 6.281 -8.767 c 2.956 -0.359 5.551 1.238 6.744 3.994 c 0.023 -2.444 1.184 -4.57 3.223 -5.852 c 2.234 -1.404 5.134 -1.541 7.387 -0.347 c 2.091 1.107 3.343 3.219 3.434 5.794 l 0.029 0.901 l 0.006 -0.029 c 0.823 -4.057 4.344 -5.634 7.392 -5.078 c 3.006 0.548 5.706 3.213 5.335 7.307 c 1.385 -1.699 3.535 -2.422 5.767 -1.823 c 2.704 0.726 5.367 3.588 4.826 8.158 l -0.167 1.848 c -0.041 0.902 -1.25 24.197 -10.212 34.102 C 66.065 78.207 56.887 79.258 49.46 79.258 Z M 22.542 53.533 c 2.454 11.766 12.394 21.02 19.702 21.457 c 6.058 0.363 20.24 1.213 25.802 -4.934 c 8.011 -8.854 9.178 -31.466 9.189 -31.693 l 0.178 -1.988 c 0.269 -2.276 -0.754 -3.576 -1.885 -3.879 c -0.408 -0.111 -1.417 -0.226 -1.97 1.061 c -0.245 0.568 -0.622 1.279 -0.622 1.279 l -0.811 1.529 l -5.9 -2.114 l 0.54 -3.772 c 0.353 -2.177 -0.813 -3.175 -2.019 -3.396 c -1.049 -0.19 -2.403 0.21 -2.761 1.971 l -0.987 4.486 l -6.798 -1.045 l -0.161 -5.006 c -0.041 -1.148 -0.481 -1.956 -1.308 -2.394 c -0.981 -0.521 -2.373 -0.438 -3.387 0.199 c -0.647 0.406 -1.406 1.208 -1.348 2.722 l 0.112 4.579 l -6.946 0.894 l -0.593 -3.373 c -0.405 -1.946 -1.784 -2.506 -2.839 -2.381 c -1.454 0.176 -2.873 1.665 -2.767 4.595 c 0.002 0.022 0.121 1.89 0.153 4.791 c 0.053 4.79 -0.215 11.466 -3.138 14.793 c -0.729 0.83 -1.992 0.913 -2.822 0.183 c -0.83 -0.729 -0.912 -1.993 -0.183 -2.822 c 0.943 -1.074 2.037 -3.728 2.14 -10.243 c -2.117 0.074 -4.128 0.449 -4.914 0.931 C 25.068 41.661 22.625 51.572 22.542 53.533 Z'/><text x='30' y='98' fill='#000000' font-size='18px' font-weight='bold'>Rock</text></svg></button><button class='btn btn-default disabled'><svg id='paper' xmlns='http://www.w3.org/2000/svg' enable-background='new 0 0 100 100' viewBox='0 0 100 125' x='0px' y='0px' xmlns:xml='http://www.w3.org/XML/1998/namespace' xml:space='preserve' version='1.1'><path d='M 53.25 95.878 c -0.001 0 -0.001 0 -0.002 0 c -2.701 0 -5.105 -0.131 -7.336 -0.265 C 35.657 95 23.662 83.081 23.156 82.574 l -0.242 -0.294 L 6.343 57.705 l 1.321 -1.161 c 2.088 -1.835 4.243 -2.766 6.407 -2.766 c 4.423 0 7.803 3.79 10.785 7.134 c 2.178 2.44 4.429 4.965 6.211 4.964 c 0.243 0 0.482 -0.046 0.732 -0.142 c 5.843 -2.234 3.501 -13.771 3.476 -13.887 l -5.354 -28.194 c -0.432 -3.302 0.596 -5.269 1.534 -6.338 c 1.061 -1.208 2.528 -1.873 4.135 -1.873 c 2.602 0 5.606 1.833 6.456 5.928 l 6.164 24.311 l 0.122 -0.016 l -0.24 -34.788 c 0.107 -4.661 3.428 -6.757 6.467 -6.757 c 3.116 0 6.525 2.255 6.707 6.436 l 0.749 35.123 l 0.276 0.042 l 4.647 -26.44 c 0.645 -3.173 3.137 -5.27 6.21 -5.27 c 1.951 0 3.78 0.834 5.018 2.288 c 1.284 1.508 1.794 3.552 1.438 5.753 l -4.796 25.233 c 3.529 -7.273 7.29 -14.998 7.544 -15.409 c 1.214 -1.967 3.115 -3.096 5.217 -3.096 c 1.946 0 3.794 0.967 4.944 2.586 c 1.203 1.694 1.468 3.884 0.728 6.008 l -0.062 0.158 l -8.064 18.033 c -0.189 3.231 -1.747 24.465 -10.194 33.803 C 70.956 93.75 63.867 95.878 53.25 95.878 Z M 26.118 79.877 c 1.286 1.253 11.804 11.251 20.032 11.744 c 2.171 0.13 4.507 0.257 7.098 0.257 c 9.294 0 15.587 -1.746 18.705 -5.19 c 8 -8.845 9.175 -31.466 9.186 -31.693 l 0.019 -0.376 l 8.33 -18.631 c 0.365 -1.111 0.075 -1.864 -0.235 -2.302 c -0.396 -0.557 -1.041 -0.902 -1.684 -0.902 c -0.703 0 -1.33 0.414 -1.813 1.197 c -0.333 0.614 -5.269 10.763 -8.496 17.419 l -0.753 1.553 l -6.461 -2.027 l 5.619 -29.564 c 0.159 -0.987 -0.025 -1.858 -0.544 -2.468 c -0.47 -0.551 -1.206 -0.88 -1.972 -0.88 c -0.562 0 -1.91 0.196 -2.28 2.015 l -5.315 30.244 l -7.466 -1.149 l -0.819 -38.436 c -0.076 -1.749 -1.458 -2.565 -2.709 -2.565 c -0.563 0 -2.407 0.201 -2.468 2.79 l 0.265 38.27 l -7.151 0.922 l -7.055 -27.834 c -0.413 -1.979 -1.578 -2.826 -2.56 -2.826 c -0.31 0 -0.757 0.088 -1.129 0.512 c -0.548 0.625 -0.754 1.733 -0.58 3.126 l 5.312 27.965 c 0.123 0.552 3.183 14.928 -5.966 18.425 c -0.704 0.27 -1.431 0.405 -2.16 0.405 c -3.574 0.001 -6.432 -3.203 -9.196 -6.302 c -2.541 -2.85 -5.17 -5.796 -7.8 -5.796 c -0.76 0 -1.541 0.24 -2.363 0.729 L 26.118 79.877 Z'/><text x='32' y='113' fill='#000000' font-size='18px' font-weight='bold'>Paper</text></svg></button><button class='btn btn-default disabled'><svg id='scissors' xmlns='http://www.w3.org/2000/svg' enable-background='new 0 0 100 100' viewBox='0 0 100 125' x='0px' y='0px' xmlns:xml='http://www.w3.org/XML/1998/namespace' xml:space='preserve' version='1.1'><path d='M 57.06 95.878 C 57.06 95.878 57.06 95.878 57.06 95.878 c -2.698 0 -5.102 -0.13 -7.333 -0.264 C 39.472 95 27.475 83.082 26.969 82.575 l -0.242 -0.294 L 10.157 57.705 l 1.321 -1.162 c 2.088 -1.834 4.243 -2.765 6.407 -2.765 c 4.423 0 7.803 3.79 10.785 7.133 c 2.177 2.441 4.429 4.965 6.21 4.964 c 0.243 0 0.483 -0.046 0.733 -0.142 c 5.843 -2.234 3.501 -13.769 3.476 -13.884 l -5.354 -28.195 c -0.432 -3.302 0.596 -5.269 1.534 -6.337 c 1.061 -1.208 2.528 -1.874 4.135 -1.874 c 2.602 0 5.606 1.833 6.456 5.929 l 6.164 24.312 l 0.123 -0.016 l -0.241 -34.788 c 0.107 -4.662 3.428 -6.757 6.468 -6.757 c 3.116 0 6.526 2.256 6.706 6.437 l 0.749 35.121 l 0.301 0.046 l 0.134 -0.708 c 0.639 -3.149 3.13 -5.246 6.203 -5.246 c 1.951 0 3.78 0.834 5.019 2.288 c 1.104 1.298 1.637 2.991 1.537 4.841 c 1.13 -1.329 2.668 -2.074 4.343 -2.074 c 1.989 0 3.989 1.077 5.222 2.812 c 1.297 1.825 1.604 4.122 0.845 6.3 l -0.495 1.52 c -0.16 2.823 -1.653 24.462 -10.203 33.913 C 74.771 93.75 67.681 95.878 57.06 95.878 Z M 29.931 79.877 c 1.287 1.253 11.806 11.251 20.034 11.744 c 2.171 0.13 4.507 0.257 7.094 0.257 c 9.297 0 15.591 -1.747 18.709 -5.191 c 8 -8.843 9.177 -31.466 9.188 -31.694 l 0.014 -0.269 l 0.673 -2.065 c 0.462 -1.325 -0.001 -2.262 -0.315 -2.706 c -0.487 -0.686 -1.257 -1.128 -1.961 -1.128 c -0.612 0 -1.138 0.347 -1.56 1.031 c -0.128 0.206 -0.461 0.919 -0.692 1.459 L 80.4 52.976 l -6.128 -1.921 l 0.709 -3.917 c 0.162 -1.004 -0.023 -1.876 -0.542 -2.486 c -0.47 -0.551 -1.207 -0.881 -1.973 -0.881 c -0.562 0 -1.909 0.196 -2.278 2.015 l -0.846 4.482 l -7.441 -1.146 l -0.819 -38.435 c -0.075 -1.749 -1.457 -2.565 -2.708 -2.565 c -0.564 0 -2.408 0.201 -2.469 2.79 l 0.268 38.271 l -7.154 0.919 l -7.055 -27.833 c -0.413 -1.979 -1.578 -2.826 -2.56 -2.826 c -0.31 0 -0.757 0.089 -1.129 0.512 c -0.548 0.625 -0.754 1.734 -0.58 3.126 l 5.312 27.966 c 0.123 0.552 3.183 14.926 -5.966 18.423 c -0.703 0.269 -1.431 0.406 -2.16 0.406 h -0.001 c -3.574 0 -6.432 -3.204 -9.195 -6.302 c -2.541 -2.849 -5.169 -5.795 -7.8 -5.795 c -0.76 0 -1.541 0.24 -2.363 0.729 L 29.931 79.877 Z'/><text x='20' y='112' fill='#000000' font-size='18px' font-weight='bold'>Scissors</text></svg></button></div></div><div class='row' id='changeColorArea'><div class='col-md-12'><h4> (Player Name Here) is Currently Selected: <small>(Click on one of the hands to be able to change its color)</small></h4><div class='input-group'><input type='text' class='form-control' list='colors' disabled placeholder='Change (Blank)s Hand Color' id='changeHandColorBox'><span class='input-group-btn'><button class='btn btn-default' id='handColorGoButton' type='button' onclick='changeHandColor(90)'>Go!</button></span></div></div></div>");
	
	$('#switchModal .modal-footer').html("<button type='button' class='btn btn-danger' data-dismiss='modal'>Cancel</button> <button type='button' class='btn btn-success' onclick='saveSettingsMenu()'>Save Changes</button>");
	$('#match1').click(function(){
		if($('#matchOther').hasClass('active')){
			toggleOtherMatch();
		}
		$('#collapseOne .panel-body .btn').removeClass('active');
		$(this).addClass('active');
		$("#collapseOne .panel-body p").hide().last().replaceWith("<br/><s>" + $("#collapseOne .panel-body p").text() + "</s>");
		$('#collapseOne .panel-body').append('<p>You have decided to have each round consist of 1 Match.</p>');
	});
	$('#match3').click(function(){
		if($('#matchOther').hasClass('active')){
			toggleOtherMatch();
		}
		$('#collapseOne .panel-body .btn').removeClass('active');
		$(this).addClass('active');
		$("#collapseOne .panel-body p").hide().last().replaceWith("<br/><s>" + $("#collapseOne .panel-body p").text() + "</s>");
		$('#collapseOne .panel-body').append('<p>You have decided to have each round consist of 3 Matches.</p>');
	});
	$('#match5').click(function(){
		if($('#matchOther').hasClass('active')){
				toggleOtherMatch();
		}
		$('#collapseOne .panel-body .btn').removeClass('active');
		$(this).addClass('active');
		$("#collapseOne .panel-body p").hide().last().replaceWith("<br/><s>" + $("#collapseOne .panel-body p").text() + "</s>");
		$('#collapseOne .panel-body').append('<p>You have decided to have each round consist of 5 Matches.</p>');
	});
	$(function () {
	  $('[data-toggle="popover"]').popover();
	});
	colorFeed();
};
// FIXME Changes CHanges CHanges
var saveSettingsMenu = function(){
	//Setting up the pop-up modal; passing new html; centering focus upon it
	$('#switchModal').css('z-index','1000');	
	var num = $('#switchModal').css('z-index');
	$('#rExtraModal').css('z-index', num + 1 + '').focus();
	$('#rExtraModal .modal-dialog').css('width','45%');
	$('#rExtraModal').attr('aria-labelledby',"mySettingsChangeListLabel").modal('show');
	$('#rExtraModal .modal-title').text("Settings Change List");
	$('#rExtraModal .modal-body').html('<table class="table table-striped table-hover"><thead><th>Setting</th><th>Change Made</th></thead><tbody></tbody></table>');
	$('#rExtraModal .modal-body table thead th:first').css('border-right', '2px solid #ddd');
	$("#rExtraModal .modal-footer .btn:first").text('Make More Changes').attr("data-dismiss","modal");
	$('#rExtraModal .modal-footer .btn:last').text('Continue to the Game').attr("id","saveSettings");
	
	//First Panel for Changing Number of Rounds
	var roundAreaValue = $('#collapseOne .panel-body #roundSelection input').val();
	var tempRoundValue;
	if(roundAreaValue === ""){
		tempRoundValue = "N/A. You have not entered any new number for the number of rounds you'd like to play";
		$('#rExtraModal .modal-body table tbody').append("<tr><td>Number of Rounds</td><td> The number of rounds you entered is: " + tempRoundValue + ", so the number of rounds will remain to be:" + numRounds + "</td></tr>");
	}
	else if(roundAreaValue === numRounds){
		tempRoundValue = numRounds + " round(s). Which is the same as the number of rounds you chose when you started the game.";
		$('#rExtraModal .modal-body table tbody').append('<tr><td>Number of Rounds</td><td> The number of rounds you entered is: ' + tempRoundValue + '</td></tr>');
	}
	else{
		tempRoundValue = roundAreaValue;
		numRounds = roundAreaValue;
		$('#rExtraModal .modal-body table tbody').append('<tr><td>Number of Rounds</td><td>The number of rounds has been changed to: ' + numRounds + ' round(s).</td></tr>');
	}

	if($("#collapseOne .panel-body #otherMatch input").css('display') === "none"){
		var whichMatchButton;
		if($('#match1').hasClass('active')){
			if(numMatches === 1){
				numMatches = 1;
				$('#rExtraModal .modal-body table tbody').append('<tr><td>Number of Matches</td><td> The number of matches per round you chose is 1 match; which is the same as the number of matches that is currently set.</td></tr>');
			}
			else{
				numMatches = 1;
				$('#rExtraModal .modal-body table tbody').append('<tr><td>Number of Matches</td><td>The number of matches has been changed to: ' + numMatches + ' match.</td></tr>');
			}
		}
		else if($('#match5').hasClass('active')){
			if(numMatches === 5){
				numMatches = 5;
				$('#rExtraModal .modal-body table tbody').append('<tr><td>Number of Matches</td><td> The number of matches per round you chose is 5 matches; which is the same as the number of matches that is currently set.</td></tr>');
			}
			else{
				numMatches = 5;
				$('#rExtraModal .modal-body table tbody').append('<tr><td>Number of Matches</td><td>The number of matches has been changed to: ' + numMatches + ' matches.</td></tr>');
			}
		}
		else{
			if(numMatches === 3){
				numMatches = 3;
				$('#rExtraModal .modal-body table tbody').append('<tr><td>Number of Matches</td><td> The number of matches per round you chose is 3 matches; which is the same as the number of matches that is currently set.</td></tr>');
			}
			else{
				numMatches = 3;
				$('#rExtraModal .modal-body table tbody').append('<tr><td>Number of Matches</td><td>The number of matches has been changed to: ' + numMatches + ' matches.</td></tr>');
			}
		}
	}
	else{
		var newMatchNum = $("#collapseOne .panel-body #otherMatch input").val();
		var tempMatchValue;
		if(newMatchNum === ""){
			tempMatchValue = ". You did not enter a new number for the number of matches per round";
			$('#rExtraModal .modal-body table tbody').append('<tr><td>Number of Matches</td><td>The number of matches per round has not been changed'+ tempMatchValue + '; so the number of matches per round will remain to be ' + numMatches + ' match(es).</td></tr>');
		}
		else if(newMatchNum === numMatches){
			tempMatchValue = numMatchNum + " match(es); which is the same as the number of matches that is currently set.";
			$('#rExtraModal .modal-body table tbody').append('<tr><td>Number of Matches</td><td> The number of matches per round you entered is ' + tempMatchValue + '</td></tr>');
		}
		else{
			numMatches = newMatchNum;
			$('#rExtraModal .modal-body table tbody').append('<tr><td>Number of Matches</td><td>The number of matches has been changed to: ' + numMatches + ' match(es).</td></tr>');
		}
	}

	//Second Panel for Changing Names
	var name;
	if(($("#player1NameChangeBox").prop("disabled"))){
		name = players[1].getName();
		$('#rExtraModal .modal-body table tbody').append('<tr><td>' + name + '\'s Name</td><td>You have decided to have this player\'s name remain to be: ' + name + '.</td></tr>');
	}
	else if($('#player1NameChangeBox').val() == ""){
		name = players[1].getName();
		$('#rExtraModal .modal-body table tbody').append('<tr><td>' + name + '\'s Name</td><td>You have decided to not enter a new name or use the default name so the name will remain to be: ' + name + '.</td></tr>');
	}
	else{
		var player1TempName = $('#player1NameChangeBox').val();
		players[1].setName(player1TempName);
		$('#rExtraModal .modal-body table tbody').append('<tr><td>' + player1TempName + '\'s Name</td><td>You have decided to have this player named: ' + player1TempName + '</td></tr>');
	}

	if(($("#player2NameChangeBox").prop("disabled"))){
		name = players[2].getName();
		$('#rExtraModal .modal-body table tbody').append('<tr><td>' + name + '\'s Name</td><td>You have decided to have this player remain to be named: ' + name + '</td></tr>');
	}
	else if($('#player2NameChangeBox').val() == ""){
		name = players[2].getName();
		opponent = name;
		$('#rExtraModal .modal-body table tbody').append('<tr><td>' + name + '\'s Name</td><td>You have decided to not enter a new name or use the default name so the name will remain to be: ' + name + '.</td></tr>');
	}
	else{
		var player2TempName = $('#player2NameChangeBox').val();
		players[2].setName(player2TempName);
		opponent = player2TempName;
		$('#rExtraModal .modal-body table tbody').append('<tr><td>Player 2\'s Name</td><td>You have decided to have this player named: ' + player2TempName + '</td></tr>');
	}

	if(($("#computerNameChangeBox").prop("disabled"))){
		$('#rExtraModal .modal-body table tbody').append('<tr><td>Computer\'s Name</td><td>You have decided to have the Computer remain to be named: ' + players[0].getName() + '</td></tr>');

	}
	else if($('#computerNameChangeBox').val() == ""){
		name = players[0].getName();
		opponent = name;
		$('#rExtraModal .modal-body table tbody').append('<tr><td>' + name + '\'s Name</td><td>You have decided to not enter a new name or use the default name so the name will remain to be: ' + name + '.</td></tr>');
	}
	else{
		var computerTempName = $('#computerNameChangeBox').val();
		players[0].setName(computerTempName);
		opponent = computerTempName;
		$('#rExtraModal .modal-body table tbody').append('<tr><td>Computer\'s Name</td><td>You have decided to have the Computer be named: ' + computerTempName + '</td></tr>');

	}

	var p1Name = players[1].getName();
	var p2Name = players[2].getName();
	var compName = players[0].getName();

	//Third Panel for Changing Colors
	var p1Color = [$("#collapseThree .panel-body #player1Colors .row #color1").css("background-color"), $("#collapseThree .panel-body #player1Colors .row #color2").css("background-color"), $("#collapseThree .panel-body #player1Colors .row #color3").css("background-color")];
	var p2Color = [$("#collapseThree .panel-body #player2Colors .row #color1").css("background-color"), $("#collapseThree .panel-body #player2Colors .row #color2").css("background-color"), $("#collapseThree .panel-body #player2Colors .row #color3").css("background-color")];
	var compColor = [$("#collapseThree .panel-body #computerColors .row #color1").css("background-color"), $("#collapseThree .panel-body #computerColors .row #color2").css("background-color"), $("#collapseThree .panel-body #computerColors .row #color3").css("background-color")];

	$('#rExtraModal .modal-body table tbody').append("<tr><td>" + compName + "'s Colors</td><td>Color 1 is: <span style='background-color:" + compColor[0] + "'>" + compColor[0] + "</span><br>Color 2 is: <span style='background-color:" + compColor[1] + "'>" + compColor[1] + "</span><br>Color 3 is: <span style='background-color:" + compColor[2] + "'>" + compColor[2] + "</span></td></tr>");
	players[0].setColor1(compColor[0]);
	players[0].setColor2(compColor[1]);
	players[0].setColor3(compColor[2]);
	$('#rExtraModal .modal-body table tbody').append("<tr><td>" + p1Name + "'s Colors</td><td>Color 1 is: <span style='background-color:" + p1Color[0] + "'>" + p1Color[0] + "</span><br>Color 2 is: <span style='background-color:" + p1Color[1] + "'>" + p1Color[1] + "</span><br>Color 3 is: <span style='background-color:" + p1Color[2] + "'>" + p1Color[2] + "</span></td></tr>");
	players[1].setColor1(p1Color[0]);
	players[1].setColor2(p1Color[1]);
	players[1].setColor3(p1Color[2]);
	$('#rExtraModal .modal-body table tbody').append("<tr><td>" + p2Name + "'s Colors</td><td>Color 1 is: <span style='background-color:" + p2Color[0] + "'>" + p2Color[0] + "</span><br>Color 2 is: <span style='background-color:" + p2Color[1] + "'>" + p2Color[1] + "</span><br>Color 3 is: <span style='background-color:" + p2Color[2] + "'>" + p2Color[2] + "</span></td></tr>");
	players[2].setColor1(p2Color[0]);
	players[2].setColor2(p2Color[1]);
	players[2].setColor3(p2Color[2]);
	
	//Fourth Panel - Referred to in arrays above named player1Colors[], player2Colors[], computerColors[] 
	$('#rExtraModal .modal-body table tbody').append("<tr><td>" + compName + "'s Hands Colors</td><td>This player's Rock Hand Color is: <span style='background-color:" + computerColors[0] + "'>" + computerColors[0] + "</span><br>This player's Paper Hand Color is: <span style='background-color:" + computerColors[1] + "'>" + computerColors[1] + "</span><br>This player's Scissor Hand Color is: <span style='background-color:" + computerColors[2] + "'>" + computerColors[2] + "</span></td></tr>");
	players[0].setRHandColor(computerColors[0]);
	players[0].setPHandColor(computerColors[1]);
	players[0].setSHandColor(computerColors[2]);
	$('#rExtraModal .modal-body table tbody').append("<tr><td>" + p1Name + "'s Hands Colors</td><td>This player's Rock Hand Color is: <span style='background-color:" + player1Colors[0] + "'>" + player1Colors[0] + "</span><br>This player's Paper Hand Color is: <span style='background-color:" + player1Colors[1] + "'>" + player1Colors[1] + "</span><br>This player's Scissor Hand Color is: <span style='background-color:" + player1Colors[2] + "'>" + player1Colors[2] + "</span></td></tr>");
	players[1].setRHandColor(player1Colors[0]);
	players[1].setPHandColor(player1Colors[1]);
	players[1].setSHandColor(player1Colors[2]);
	$('#rExtraModal .modal-body table tbody').append("<tr><td>" + p2Name + "'s Hands Colors</td><td>This player's Rock Hand Color is: <span style='background-color:" + player2Colors[0] + "'>" + player2Colors[0] + "</span><br>This player's Paper Hand Color is: <span style='background-color:" + player2Colors[1] + "'>" + player2Colors[1] + "</span><br>This player's Scissor Hand Color is: <span style='background-color:" + player2Colors[2] + "'>" + player2Colors[2] + "</span></td></tr>");
	players[2].setRHandColor(player2Colors[0]);
	players[2].setPHandColor(player2Colors[1]);
	players[2].setSHandColor(player2Colors[2]);
	
	$('#rExtraModal .modal-body table tbody tr td:first-of-type').css('border-right', '2px solid #ddd');
};

$('#switchModal').on('hidden.bs.modal', function (event) {
	$('#switchModal').attr('aria-labelledby',"mySwitchingModalLabel");
	$('#switchModal .modal-dialog').removeClass('modal-sm');
	$('#switchModal .modal-title').text("Modal Title");
	$('#switchModal .modal-body').html("<p>One <em>Fine</em> body... ;) lol if you see this</p>");
	$('switchModal .modal-footer .btn').removeClass('active');
	$("#switchModal .modal-footer").show();
});
$('#rExtraModal').on('hidden.bs.modal', function (event) {
	$('#rExtraModal').attr('aria-labelledby',"myExtraModalLabel");
	$('#rExtraModal .modal-title').text("Modal Title");
	$('#rExtraModal .modal-body').html("<p>One Small <em>Fine</em> BODY... ;) lol if you see this little variation of the other one</p>");
	$("#rExtraModal .modal-footer .btn:first").text("Cancel").removeAttr("id").removeAttr("data-dismiss").css("onclick","null").removeClass('active');
	$('#rExtraModal .modal-footer .btn:last').text('Save Changes').css("onclick","null").removeClass('active');
	$('#switchModal').css('z-index','1200');
	
});
$('#gameModal').on('hidden.bs.modal', function (event) {
	$('#gameModal').attr('aria-labelledby',"myGameModalLabel");
	$('#gameModal .modal-title').text("Modal Title");
	$('#gameModal .modal-body').html("<p>One <em>Fine</em> body... ;) lol if you see this</p>");
	$('gameModal .modal-footer .btn').removeClass('active');
	$("#gameModal .modal-footer").show();
});

var totalRounds;
var totalMatches;
var numRounds = 3;
var numMatches = 3;
var currentRoundNum = 1;
var currentMatchNum = 1;
var majorityWinVal;
var player;
var opponent;
var running = false;
var p1Array = [0, 0, 0]; // [Wins, Ties, Losses]
var p2Array = [0, 0, 0]; // [Wins, Ties, Losses]


// Determines who will play who and takes the following into account: plurality, cases, etc. 
var whichOpponent = function(){
	well.append("<h4>Who would you like to play against? <small>A Friend or A Computer?</small></h4>");
	$('html, body').animate({scrollTop:$('#well h4').last().position().top}, 'slow');
	well.append("<button type='button' class='btn btn-default btn-lg' id='friendBtn' onclick='friend()'>Friend</button><button type='button' class='btn btn-default btn-lg' id='computerBtn' onclick='computer()'>Computer</button>");
};
var friend = function(){
	var p1Name = players[1].getName();
	var p2Name = players[2].getName();
	majorityWinVal = (numMatches % 2) + 1;
	if($("#well #custom").last().hasClass("active")){
		if(numMatches === 1){
			well.append("<h4>You have decided that each round will have 1 match within it, whoever wins that match wins the round. <br><small>You can change the number of rounds left while playing the game at any time (through the Settings button which is located at the top of the page) or simply end the game whenever you'd like. The number of matches in a game can be changed from what you currently have to any other number in the settings also.</small></h4>");
		}
		else if(numMatches === 2){
			well.append("<h4>You have decided that each round will have 2 matches within it, whoever wins both matches wins the round. <br><small>You can change the number of rounds left while playing the game at any time (through the Settings which is located at the top of the page) or simply end the game whenever you'd like. The number of matches in a game can be changed from what you currently have to any other number in the settings also.</small></h4>");
		}
		else{
			well.append("<h4>>You have decided that each round will have " + numMatches + " matches within it, whoever wins " + majorityWinVal + " out of " + numMatches + " matches wins the round. <br><small>You can change the number of rounds left while playing the game at any time (through the Settings which is located at the top of the page) or simply end the game whenever you'd like. The number of matches in a game can be changed from what you currently have to any other number in the settings also.</small></h4>");
		}
		play();
	}
	else{
		if(p1Name === "Player 1"){
			if(p2Name === "Player 2"){
				if(numMatches === 1){
					well.append("<h4>How many rounds would you (Player 1) like to play against Player 2?  Each round has 1 match within it, whoever wins that match wins the round. <br><small>You can change the number of rounds left while playing the game at any time (through the Settings button which is located at the top of the page) or simply end the game whenever you'd like. The number of matches in a game can be changed from what you currently have to any other number in the settings also.</small></h4>");
				}
				else if(numMatches === 2){
					well.append("<h4>How many rounds would you (Player 1) like to play against Player 2?  Each round has 2 matches within it, whoever wins both matches wins the round. <br><small>You can change the number of rounds left while playing the game at any time (through the Settings which is located at the top of the page) or simply end the game whenever you'd like. The number of matches in a game can be changed from what you currently have to any other number in the settings also.</small></h4>");
				}
				else{
					well.append("<h4>How many rounds would you (Player 1) like to play against Player 2?  Each round has " + numMatches + " matches within it, whoever wins " + majorityWinVal + " out of " + numMatches + " matches wins the round. <br><small>You can change the number of rounds left while playing the game at any time (through the Settings which is located at the top of the page) or simply end the game whenever you'd like. The number of matches in a game can be changed from what you currently have to any other number in the settings also.</small></h4>");
				}
				chooseNumRounds();
			}
			else{
				if(numMatches === 1){
					well.append("<h4>How many rounds would you (Player 1) like to play against " + p2Name + "?  Each round has 1 match within it, whoever wins that match wins the round. <br><small>You can change the number of rounds left while playing the game at any time (through the Settings button which is located at the top of the page) or simply end the game whenever you'd like. The number of matches in a game can be changed from what you currently have to any other number in the settings also.</small></h4>");
				}
				else if(numMatches === 2){
					well.append("<h4>How many rounds would you (Player 1) like to play against " + p2Name + "?  Each round has 2 matches within it, whoever wins both matches wins the round. <br><small>You can change the number of rounds left while playing the game at any time (through the Settings which is located at the top of the page) or simply end the game whenever you'd like. The number of matches in a game can be changed from what you currently have to any other number in the settings also.</small></h4>");
				}
				else{
					well.append("<h4>How many rounds would you (Player 1) like to play against " + p2Name + "?  Each round has " + numMatches + " matches within it, whoever wins " + majorityWinVal + " out of " + numMatches + " matches wins the round. <br><small>You can change the number of rounds left while playing the game at any time (through the Settings which is located at the top of the page) or simply end the game whenever you'd like. The number of matches in a game can be changed from what you currently have to any other number in the settings also.</small></h4>");
				}
				chooseNumRounds();
			}
		}
		else if(p2Name === "Player 2"){
			if(numMatches === 1){
				well.append("<h4>How many rounds would you (" + p1Name + ") like to play against Player 2?  Each round has 1 match within it, whoever wins that match wins the round. <br><small>You can change the number of rounds left while playing the game at any time (through the Settings button which is located at the top of the page) or simply end the game whenever you'd like. The number of matches in a game can be changed from what you currently have to any other number in the settings also.</small></h4>");
			}
			else if(numMatches === 2){
				well.append("<h4>How many rounds would you (" + p1Name + ") like to play against Player 2?  Each round has 2 matches within it, whoever wins both matches wins the round. <br><small>You can change the number of rounds left while playing the game at any time (through the Settings which is located at the top of the page) or simply end the game whenever you'd like. The number of matches in a game can be changed from what you currently have to any other number in the settings also.</small></h4>");
			}
			else{
				well.append("<h4>How many rounds would you (" + p1Name + ") like to play against Player 2?  Each round has " + numMatches + " matches within it, whoever wins " + majorityWinVal + " out of " + numMatches + " matches wins the round. <br><small>You can change the number of rounds left while playing the game at any time (through the Settings which is located at the top of the page) or simply end the game whenever you'd like. The number of matches in a game can be changed from what you currently have to any other number in the settings also.</small></h4>");
			}
			chooseNumRounds();
		}
		else{
			if(numMatches === 1){
				well.append("<h4>How many rounds would you (" + p1Name + ") like to play against " + p2Name + "?  Each round has 1 match within it, whoever wins that match wins the round. <br><small>You can change the number of rounds left while playing the game at any time (through the Settings button which is located at the top of the page) or simply end the game whenever you'd like. The number of matches in a game can be changed from what you currently have to any other number in the settings also.</small></h4>");
			}
			else if(numMatches === 2){
				well.append("<h4>How many rounds would you (" + p1Name + ") like to play against " + p2Name + "?  Each round has 2 matches within it, whoever wins both matches wins the round. <br><small>You can change the number of rounds left while playing the game at any time (through the Settings which is located at the top of the page) or simply end the game whenever you'd like. The number of matches in a game can be changed from what you currently have to any other number in the settings also.</small></h4>");
			}
			else{
				well.append("<h4>How many rounds would you (" + p1Name + ") like to play against " + p2Name + "?  Each round has " + numMatches + " matches within it, whoever wins " + majorityWinVal + " out of " + numMatches + " matches wins the round. <br><small>You can change the number of rounds left while playing the game at any time (through the Settings which is located at the top of the page) or simply end the game whenever you'd like. The number of matches in a game can be changed from what you currently have to any other number in the settings also.</small></h4>");
			}
			chooseNumRounds();
		}
	}
	$('#friendBtn').addClass('active').attr("onclick","null").css("cursor","not-allowed");
	$('#computerBtn').addClass('disabled').attr("onclick","null");
	opponent = players[2].getName();
	player = players[1].getName();
	$('html, body').animate({scrollTop:$('#well h4').last().position().top}, 'slow');

};
var computer = function(){
	var p1Name = players[1].getName();
	var p2Name = players[2].getName();
	if(p1Name === "Player 1"){
		if(p2Name === "Player 2"){
			well.append("<h4>Who is playing against the computer? Player 1 or Player 2?</h4><button type='button' class='btn btn-default btn-lg' id='p1VComp' onclick='whoAgainstComp(1)'>Player 1</button><button type='button' class='btn btn-default btn-lg' id='p2VComp' onclick='whoAgainstComp(2)'>Player 2</button>");
		}
		else{
			well.append("<h4>Who is playing against the computer? Player 1 or " + players[2].getName() + "(Player 2)?</h4><button type='button' class='btn btn-default btn-lg' id='p1VComp' onclick='whoAgainstComp(1)'>Player 1</button><button type='button' class='btn btn-default btn-lg' id='p2VComp' onclick='whoAgainstComp(2)'>" + players[2].getName() + "</button>");
		}
	}
	else if(p2Name === "Player 2"){
		well.append("<h4>Who is playing against the computer? " + players[1].getName() + "(Player 1) or Player 2?</h4><button type='button' class='btn btn-default btn-lg' id='p1VComp' onclick='whoAgainstComp(1)'>" + players[1].getName() + "</button><button type='button' class='btn btn-default btn-lg' id='p2VComp' onclick='whoAgainstComp(2)'>Player 2</button>");
	}
	else{
		well.append("<h4>Who is playing against the computer? " + players[1].getName() + "(Player 1) or " + players[2].getName() + "(Player 2)?</h4><button type='button' class='btn btn-default btn-lg' id='p1VComp' onclick='whoAgainstComp(1)'>" + players[1].getName() + "</button><button type='button' class='btn btn-default btn-lg' id='p2VComp' onclick='whoAgainstComp(2)'>" + players[2].getName() + "</button>");
	}
	$('#computerBtn').addClass('active').attr("onclick","null").css("cursor","not-allowed");
	$('#friendBtn').addClass('disabled').attr("onclick","null");
	opponent = players[0].getName();
	$('html, body').animate({scrollTop:$('#well h4').last().position().top}, 'slow');
};
var whoAgainstComp = function(a){
	var p1Name = players[1].getName();
	var p2Name = players[2].getName();
	majorityWinVal = (numMatches % 2) + 1;
	switch(a){
		case 1:
			player = players[1].getName();
			$('#p1VComp').addClass('active').attr("onclick","null").css("cursor","not-allowed");
			$('#p2VComp').addClass('disabled').attr("onclick","null");
			if($("#well #custom").last().hasClass("active")){
				if(numMatches === 1){
					well.append("<h4>You have decided that each round will have 1 match within it, whoever wins that match wins the round. <br><small>You can change the number of rounds left while playing the game at any time (through the Settings button which is located at the top of the page) or simply end the game whenever you'd like. The number of matches in a game can be changed from what you currently have to any other number in the settings also.</small></h4>");
				}
				else if(numMatches === 2){
					well.append("<h4>You have decided that each round will have 2 matches within it, whoever wins both matches wins the round. <br><small>You can change the number of rounds left while playing the game at any time (through the Settings which is located at the top of the page) or simply end the game whenever you'd like. The number of matches in a game can be changed from what you currently have to any other number in the settings also.</small></h4>");
				}
				else{
					well.append("<h4>>You have decided that each round will have " + numMatches + " matches within it, whoever wins " + majorityWinVal + " out of " + numMatches + " matches wins the round. <br><small>You can change the number of rounds left while playing the game at any time (through the Settings which is located at the top of the page) or simply end the game whenever you'd like. The number of matches in a game can be changed from what you currently have to any other number in the settings also.</small></h4>");
				}
				play();
			}
			else{
				if(p1Name === "Player 1"){
					if(numMatches === 1){
						well.append("<h4>How many rounds would you (Player 1) like to play against the difficult computer?  Each round has 1 match within it, whoever wins that match wins the round. <br><small>You can change the number of rounds left while playing the game at any time (through the Settings button which is located at the top of the page) or simply end the game whenever you'd like. The number of matches in a game can be changed from what you currently have to any other number in the settings also.</small></h4>");
					}
					else if(numMatches === 2){
						well.append("<h4>How many rounds would you (Player 1) like to play against the difficult computer?  Each round has 2 matches within it, whoever wins both matches wins the round. <br><small>You can change the number of rounds left while playing the game at any time (through the Settings which is located at the top of the page) or simply end the game whenever you'd like. The number of matches in a game can be changed from what you currently have to any other number in the settings also.</small></h4>");
					}
					else{
						well.append("<h4>How many rounds would you (Player 1) like to play against the difficult computer?  Each round has " + numMatches + " matches within it, whoever wins " + majorityWinVal + " out of " + numMatches + " matches wins the round. <br><small>You can change the number of rounds left while playing the game at any time (through the Settings which is located at the top of the page) or simply end the game whenever you'd like. The number of matches in a game can be changed from what you currently have to any other number in the settings also.</small></h4>");
					}
					chooseNumRounds();
				}
				else{
					if(numMatches === 1){
						well.append("<h4>How many rounds would you (" + players[1].getName() + ") like to play against the difficult computer?  Each round has 1 match within it, whoever wins that match wins the round. <br><small>You can change the number of rounds left while playing the game at any time (through the Settings button which is located at the top of the page) or simply end the game whenever you'd like. The number of matches in a game can be changed from what you currently have to any other number in the settings also.</small></h4>");
					}
					else if(numMatches === 2){
						well.append("<h4>How many rounds would you (" + players[1].getName() + ") like to play against the difficult computer?  Each round has 2 matches within it, whoever wins both matches wins the round. <br><small>You can change the number of rounds left while playing the game at any time (through the Settings which is located at the top of the page) or simply end the game whenever you'd like. The number of matches in a game can be changed from what you currently have to any other number in the settings also.</small></h4>");
					}
					else{
						well.append("<h4>How many rounds would you (" + players[1].getName() + ") like to play against the difficult computer?  Each round has " + numMatches + " matches within it, whoever wins " + majorityWinVal + " out of " + numMatches + " matches wins the round. <br><small>You can change the number of rounds left while playing the game at any time (through the Settings which is located at the top of the page) or simply end the game whenever you'd like. The number of matches in a game can be changed from what you currently have to any other number in the settings also.</small></h4>");
					}
					chooseNumRounds();
				}
			}
		break;
		case 2:
			player = players[2].getName();
			$('#p2VComp').addClass('active').attr("onclick","null").css("cursor","not-allowed");
			$('#p1VComp').addClass('disabled').attr("onclick","null");
			if($("#well #custom").last().hasClass("active")){
				if(numMatches === 1){
					well.append("<h4>You have decided that each round will have 1 match within it, whoever wins that match wins the round. <br><small>You can change the number of rounds left while playing the game at any time (through the Settings button which is located at the top of the page) or simply end the game whenever you'd like. The number of matches in a game can be changed from what you currently have to any other number in the settings also.</small></h4>");
				}
				else if(numMatches === 2){
					well.append("<h4>You have decided that each round will have 2 matches within it, whoever wins both matches wins the round. <br><small>You can change the number of rounds left while playing the game at any time (through the Settings which is located at the top of the page) or simply end the game whenever you'd like. The number of matches in a game can be changed from what you currently have to any other number in the settings also.</small></h4>");
				}
				else{
					well.append("<h4>You have decided that each round will have " + numMatches + " matches within it, whoever wins " + majorityWinVal + " out of " + numMatches + " matches wins the round. <br><small>You can change the number of rounds left while playing the game at any time (through the Settings which is located at the top of the page) or simply end the game whenever you'd like. The number of matches in a game can be changed from what you currently have to any other number in the settings also.</small></h4>");
				}
				play();
			}
			else{
				if(p2Name === "Player 2"){
					if(numMatches === 1){
						well.append("<h4>How many rounds would you (Player 2) like to play against the difficult computer?  Each round has 1 match within it, whoever wins that match wins the round. <br><small>You can change the number of rounds left while playing the game at any time (through the Settings button which is located at the top of the page) or simply end the game whenever you'd like. The number of matches in a game can be changed from what you currently have to any other number in the settings also.</small></h4>");
					}
					else if(numMatches === 2){
						well.append("<h4>How many rounds would you (Player 2) like to play against the difficult computer?  Each round has 2 matches within it, whoever wins both matches wins the round. <br><small>You can change the number of rounds left while playing the game at any time (through the Settings which is located at the top of the page) or simply end the game whenever you'd like. The number of matches in a game can be changed from what you currently have to any other number in the settings also.</small></h4>");
					}
					else{
						well.append("<h4>How many rounds would you (Player 2) like to play against the difficult computer?  Each round has " + numMatches + " matches within it, whoever wins " + majorityWinVal + " out of " + numMatches + " matches wins the round. <br><small>You can change the number of rounds left while playing the game at any time (through the Settings which is located at the top of the page) or simply end the game whenever you'd like. The number of matches in a game can be changed from what you currently have to any other number in the settings also.</small></h4>");
					}
					chooseNumRounds();
				}
				else{
					if(numMatches === 1){
						well.append("<h4>How many rounds would you (" + players[2].getName() + ") like to play against the difficult computer?  Each round has 1 match within it, whoever wins that match wins the round. <br><small>You can change the number of rounds left while playing the game at any time (through the Settings button which is located at the top of the page) or simply end the game whenever you'd like. The number of matches in a game can be changed from what you currently have to any other number in the settings also.</small></h4>");
					}
					else if(numMatches === 2){
						well.append("<h4>How many rounds would you (" + players[2].getName() + ") like to play against the difficult computer?  Each round has 2 matches within it, whoever wins both matches wins the round. <br><small>You can change the number of rounds left while playing the game at any time (through the Settings which is located at the top of the page) or simply end the game whenever you'd like. The number of matches in a game can be changed from what you currently have to any other number in the settings also.</small></h4>");
					}
					else{
						well.append("<h4>How many rounds would you (" + players[2].getName() + ") like to play against the difficult computer?  Each round has " + numMatches + " matches within it, whoever wins " + majorityWinVal + " out of " + numMatches + " matches wins the round. <br><small>You can change the number of rounds left while playing the game at any time (through the Settings which is located at the top of the page) or simply end the game whenever you'd like. The number of matches in a game can be changed from what you currently have to any other number in the settings also.</small></h4>");
					}
					chooseNumRounds();
				}
			}
		break;
	}
	$('html, body').animate({scrollTop:$('#well h4').last().position().top}, 'slow');
};

var saveCustomRound = function(){
	numRounds = $("#inputData").val();
	$("#switchModal .modal-footer .btn-success").addClass("active");
	$("#switchModal").modal('hide');
	if(numRounds === 1){
		if(numMatches === 1){
			well.append("<h3>You have selected 1 round. Each round consists of 1 match.<br><small>(The number of matches in a round may be changed within the settings area and will occur upon reseting the game.)</small></h3>");
		}
		else{
			well.append("<h3>You have selected 1 round. Each round consists of " + numMatches + " matches.<br><small>(The number of matches in a round may be changed within the settings area and will occur upon reseting the game.)</small></h3>");
		}
	}
	else{
		if(numMatches === 1){
			well.append("<h3>You have selected " + numRounds + " rounds. Each round consists of 1 match.<br><small>(The number of matches in a round may be changed within the settings area and will occur upon reseting the game.)</small></h3>");
		}
		else{
			well.append("<h3>You have selected " + numRounds + " rounds. Each round consists of " + numMatches + " matches.<br><small>(The number of matches in a round may be changed within the settings area and will occur upon reseting the game.)</small></h3>");
		}
	}
	$(".roundHolder .btn").addClass("disabled").attr("onclick","null");
	$("#other").removeClass("disabled").addClass("active").css("cursor","not-allowed");
	play();
	$('html, body').animate({scrollTop:$('#well h3').last().position().top}, 'slow');
};
var otherNumRound = function() {
	var num = $("#inputData").val();
	if(num < 0){
		$("#switchModal .modal-body p").hide().last().replaceWith( "<s>" + $("#switchModal .modal-body p").text() + "</s>" );
		$("#switchModal .modal-body").append("<br><p>The number of rounds that you entered was: " + num + ". That value is below 0. Please enter a value above 0.</p>");
		
		$("#switchModal .modal-footer .btn-success").attr("onclick","null").addClass("disabled");
	}
	else if(num === 0){
		$("#switchModal .modal-body p").hide().last().replaceWith( "<s>" + $("#switchModal .modal-body p").text() + "</s>" );
		$("#switchModal .modal-body").append("<br><p>You entered: " + num + ". Please enter a value above 0.</p>");
		
		$("#switchModal .modal-footer .btn-success").attr("onclick","null").addClass("disabled");
	}
	else{
		$("#switchModal .modal-body p").hide().last().replaceWith("<s>" + $("#switchModal .modal-body p").text() + "</s>");
		$("#switchModal .modal-body").append("<br><p>The number of rounds that will be played will be set to: " + num + ", upon clicking 'Save changes'.</p>");
		$("#switchModal .modal-footer .btn-success").attr("onclick","saveCustomRound()").removeClass("disabled");
	}
};
var determineRounds = function() {
	var roundNum = 0; 
	/*Ehhh a bit similar to another variable but learning about scope is great so this 
	is in the local scope of a Left hand declaration of determineRounds*/
	$('#switchModal').attr('aria-labelledby',"myOtherRoundValueModalLabel").modal('show');
	$('#switchModal .modal-dialog').addClass('modal-sm');
	$('#switchModal .modal-title').text("Custom Round Setting");
	$('#switchModal .modal-body').html("<label for ='inputData'>Enter Custom Number of Rounds Here to Continue: (Click/Tap 'Go!' once complete)</label><div class='input-group'><input type='number' min='1' class='form-control' id='inputData' placeholder='Enter Number Here...'><span class='input-group-btn'><button class='btn btn-default' type='button' onclick='otherNumRound()'>Go!</button></span></div><!-- /input-group -->");
	$("#switchModal .modal-footer .btn-success").attr("onclick","null").addClass("disabled");
	// It's getting a bit long perhaps someone out there would like to reduce it to the smallest or as effiecent as it can be as a little challenge; some of it though is just me practicing things I've learned over the years or recently
};

// TODO [x] Needs changes
var chosenNum = function(c){
	var rounds = ["empty (well sort of)","#round1","#rounds2","#rounds3","#rounds4","#rounds5","#rounds6","#rounds7"];
	switch(c){
		case 1:
			numRounds = c;
			if(numMatches === 1){
				well.append("<h3>You have selected " + numRounds + " round. Each round consists of 1 match.<br><small>(The number of matches in a round may be changed within the settings area and will occur upon reseting the game.)</small></h3>");
			}
			else{
				well.append("<h3>You have selected " + numRounds + " round. Each round consists of " + numMatches + " matches.<br><small>(The number of matches in a round may be changed within the settings area and will occur upon reseting the game.)</small></h3>");
			}
			$(".roundHolder .btn").addClass("disabled").attr("onclick","null");
			$(rounds[1]).removeClass("disabled").addClass("active").css("cursor","not-allowed");
			play();
		break;
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
		case 7:
			numRounds = c;
			if(numMatches === 1){
				well.append("<h3>You have selected " + numRounds + " rounds. Each round consists of 1 match.<br><small>(The number of matches in a round may be changed within the settings area and will occur upon reseting the game.)</small></h3>");
			}
			else{
				well.append("<h3>You have selected " + numRounds + " rounds. Each round consists of " + numMatches + " matches.<br><small>(The number of matches in a round may be changed within the settings area and will occur upon reseting the game.)</small></h3>");
			}
			$(".roundHolder .btn").addClass("disabled").attr("onclick","null");
			$(rounds[c]).removeClass("disabled").addClass("active").css("cursor","not-allowed");
			play();
		break;
		case "i":
			numRounds = undefined;
			well.append("<h3>You have decided to play until you no longer want to. In this mode you will have the option to end the game at any moment to recieve the final score. So there are no rounds.<br><small>(The number of matches in a round may be changed within the settings area and will occur upon reseting the game.)</small></h3>");
			$(".roundHolder .btn").addClass("disabled").attr("onclick","null");
			$("#infin").removeClass("disabled").addClass("active").css("cursor","not-allowed");
			play();
		break;
		case "o":
			determineRounds();
		break;
	}
	$('html, body').animate({scrollTop:$('#well h3').last().position().top}, 'slow');
};

var chooseNumRounds = function(){
	well.append("<div class='roundHolder'><button type='button' class='btn btn-default' id='round1' onclick='chosenNum(1)'>1</button><button type='button' class='btn btn-default' id='rounds2' onclick='chosenNum(2)'>2</button><button type='button' class='btn btn-default' id='rounds3' onclick='chosenNum(3)'>3</button><button type='button' class='btn btn-default' id='rounds4' onclick='chosenNum(4)'>4</button><button type='button' class='btn btn-default' id='rounds5' onclick='chosenNum(5)'>5</button><button type='button' class='btn btn-default' id='rounds6' onclick='chosenNum(6)'>6</button><button type='button' class='btn btn-default' id='rounds7' onclick='chosenNum(7)'>7</button><button type='button' class='btn btn-default' id='infin' onclick='chosenNum(\"i\")'>Infinite</button><button type='button' class='btn btn-default' id='other' onclick='chosenNum(\"o\")'>Other</button</div>");
};

var addMatch = function(a){
	var temp = a.toString();
	var b = temp.length;
	if(b > 1){
		var arr = temp.split("");
		for(var i = 0; i < b; i++){
			switch(arr[i]){
				case "0":
					$('#gameModal .modal-body #wrapper #matchHolder .matchNumber').append("<figure class='number-wrapper'><span class='number number0'><span class='top'></span><span class='bottom'></span><span class='sides'></span></span><figcaption>0</figcaption></figure>");
				break;
				case "1":
					$('#gameModal .modal-body #wrapper #matchHolder .matchNumber').append("<figure class='number-wrapper'><span class='number number1'><span class='top'></span><span class='middle'></span><span class='bottom'></span><span class='extra'></span><span class='extra2'></span></span><figcaption>1</figcaption></figure>");
				break;
				case "2":
					$('#gameModal .modal-body #wrapper #matchHolder .matchNumber').append("<figure class='number-wrapper'><span class='number number2'><span class='top'></span><span class='middle'></span><span class='bottom'></span><span class='extra'></span></span><figcaption>2</figcaption></figure>");
				break;
				case "3":
					$('#gameModal .modal-body #wrapper #matchHolder .matchNumber').append("<figure class='number-wrapper'><span class='number number3'><span class='top'></span><span class='middle'></span><span class='bottom'></span><span class='extra'></span><span class='extra2'></span></span><figcaption>3</figcaption></figure>");
				break;
				case "4":
					$('#gameModal .modal-body #wrapper #matchHolder .matchNumber').append("<figure class='number-wrapper'><span class='number number4'><span class='right'></span><span class='bottom'></span><span class='top'></span></span><figcaption>4</figcaption></figure>");
				break;
				case "5":
					$('#gameModal .modal-body #wrapper #matchHolder .matchNumber').append("<figure class='number-wrapper'><span class='number number5'><span class='left'></span><span class='right'></span><span class='bottom'></span><span class='top'></span></span><figcaption>5</figcaption></figure>");
				break;
				case "6":
					$('#gameModal .modal-body #wrapper #matchHolder .matchNumber').append("<figure class='number-wrapper'><span class='number number6'><span class='sides'></span><span class='bottom'></span><span class='top'></span><span class='extra'></span></span><figcaption>6</figcaption></figure>");
				break;
				case "7":
					$('#gameModal .modal-body #wrapper #matchHolder .matchNumber').append("<figure class='number-wrapper'><span class='number number7'><span class='allInOne'></span></span><figcaption>7</figcaption></figure>");
				break;
				case "8":
					$('#gameModal .modal-body #wrapper #matchHolder .matchNumber').append("<figure class='number-wrapper'><span class='number number8'><span class='left'></span><span class='right'></span><span class='top'></span><span class='bottom'></span></span><figcaption>8</figcaption></figure>");
				break;
				case "9":
					$('#gameModal .modal-body #wrapper #matchHolder .matchNumber').append("<figure class='number-wrapper'><span class='number number9'><span class='sides'></span><span class='top'></span><span class='bottom'></span></span><figcaption>9</figcaption></figure>");
				break;
			}
		}
	}
	else{
		switch(a){
			case 0:
				$('#gameModal .modal-body #wrapper #matchHolder .matchNumber').append("<figure class='number-wrapper'><span class='number number0'><span class='top'></span><span class='bottom'></span><span class='sides'></span></span><figcaption>0</figcaption></figure>");
			break;
			case 1:
				$('#gameModal .modal-body #wrapper #matchHolder .matchNumber').append("<figure class='number-wrapper'><span class='number number1'><span class='top'></span><span class='middle'></span><span class='bottom'></span><span class='extra'></span><span class='extra2'></span></span><figcaption>1</figcaption></figure>");
			break;
			case 2:
				$('#gameModal .modal-body #wrapper #matchHolder .matchNumber').append("<figure class='number-wrapper'><span class='number number2'><span class='top'></span><span class='middle'></span><span class='bottom'></span><span class='extra'></span></span><figcaption>2</figcaption></figure>");
			break;
			case 3:
				$('#gameModal .modal-body #wrapper #matchHolder .matchNumber').append("<figure class='number-wrapper'><span class='number number3'><span class='top'></span><span class='middle'></span><span class='bottom'></span><span class='extra'></span><span class='extra2'></span></span><figcaption>3</figcaption></figure>");
			break;
			case 4:
				$('#gameModal .modal-body #wrapper #matchHolder .matchNumber').append("<figure class='number-wrapper'><span class='number number4'><span class='right'></span><span class='bottom'></span><span class='top'></span></span><figcaption>4</figcaption></figure>");
			break;
			case 5:
				$('#gameModal .modal-body #wrapper #matchHolder .matchNumber').append("<figure class='number-wrapper'><span class='number number5'><span class='left'></span><span class='right'></span><span class='bottom'></span><span class='top'></span></span><figcaption>5</figcaption></figure>");
			break;
			case 6:
				$('#gameModal .modal-body #wrapper #matchHolder .matchNumber').append("<figure class='number-wrapper'><span class='number number6'><span class='sides'></span><span class='bottom'></span><span class='top'></span><span class='extra'></span></span><figcaption>6</figcaption></figure>");
			break;
			case 7:
				$('#gameModal .modal-body #wrapper #matchHolder .matchNumber').append("<figure class='number-wrapper'><span class='number number7'><span class='allInOne'></span></span><figcaption>7</figcaption></figure>");
			break;
			case 8:
				$('#gameModal .modal-body #wrapper #matchHolder .matchNumber').append("<figure class='number-wrapper'><span class='number number8'><span class='left'></span><span class='right'></span><span class='top'></span><span class='bottom'></span></span><figcaption>8</figcaption></figure>");
			break;
			case 9:
				$('#gameModal .modal-body #wrapper #matchHolder .matchNumber').append("<figure class='number-wrapper'><span class='number number9'><span class='sides'></span><span class='top'></span><span class='bottom'></span></span><figcaption>9</figcaption></figure>");
			break;
		}
	}
	
}
var addRound = function(a){
	$('#gameModal .modal-header .ribbon p').text("Round " + a);
};

//FUTURE Start the animation work
var game = function() {
	conFadeOut();
	$('#gameModal .modal-header').html("<div class='ribbon' id='title'><p>ROUND</p></div><span class='right'></span><button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>");
	$('#gameModal .modal-body').html("<div id='wrapper'><div id='matchHolder'><figure class='letter-wrapper'><span class='letter m'><span class='bottom'></span><span class='middle'></span><span class='split'></span><span class='extra'></span><span class='top'></span></span><figcaption>M</figcaption></figure><figure class='letter-wrapper'><span class='letter a'><span class='bottom'></span><span class='top'></span><span class='ribbonExtra'></span></span><figcaption>A</figcaption></figure><figure class='letter-wrapper'><span class='letter t'><span class='left'></span><span class='bottom'></span><span class='right'></span><span class='extra'></span><span class='extra2'></span></span><figcaption>T</figcaption></figure><figure class='letter-wrapper'><span class='letter c'><span class='bottom'></span><span class='middle'></span><span class='top'></span></span><figcaption>C</figcaption></figure><figure class='letter-wrapper'><span class='letter h'><span class='bottom'></span><span class='middle'></span><span class='top'></span></span><figcaption>H</figcaption></figure><div class='matchNumber'></div></div></div>");
	addRound(currentRoundNum);
	addMatch(currentMatchNum);
	$('#gameModal .modal-dialog').addClass('modal-lg');
	$('#gameModal .modal-title').html("");
	$("#gameModal .modal-header").css("border-bottom","none");
	$('#gameModal').attr('aria-labelledby',"myAnimationArea").modal({backdrop: "static", keyboard: false});
	$("#gameModal .modal-body").append("<div class='row' id='ribbonRow'><div class='col-md-6'></div><div class='col-md-6'></div></div>");
	// Dynamically Adding the Hands that will rotate endlessly
	$("#gameModal .modal-body").append("<div class='row'><div class='playArea' id='playerLeft'><svg class='rpsHand' id='leftHand' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' x='0px' y='0px' viewBox='0 0 100 125' enable-background='new 0 0 100 100' xml:space='preserve'><path d='M49.46,79.258c-2.858,0-5.457-0.156-7.455-0.275c-10.978-0.656-21.154-13.612-23.419-24.83l-0.026-0.165 c-0.176-1.505,2.688-15.322,5.127-17.15c1.909-1.432,5.465-1.746,7.386-1.806c-0.045-1.558-0.104-2.487-0.105-2.5 c-0.2-5.494,3.116-8.383,6.281-8.767c2.956-0.359,5.551,1.238,6.744,3.994c0.023-2.444,1.184-4.57,3.223-5.852 c2.234-1.404,5.134-1.541,7.387-0.347c2.091,1.107,3.343,3.219,3.434,5.794l0.029,0.901l0.006-0.029 c0.823-4.057,4.344-5.634,7.392-5.078c3.006,0.548,5.706,3.213,5.335,7.307c1.385-1.699,3.535-2.422,5.767-1.823 c2.704,0.726,5.367,3.588,4.826,8.158l-0.167,1.848c-0.041,0.902-1.25,24.197-10.212,34.102 C66.065,78.207,56.887,79.258,49.46,79.258z M22.542,53.533c2.454,11.766,12.394,21.02,19.702,21.457 c6.058,0.363,20.24,1.213,25.802-4.934c8.011-8.854,9.178-31.466,9.189-31.693l0.178-1.988c0.269-2.276-0.754-3.576-1.885-3.879 c-0.408-0.111-1.417-0.226-1.97,1.061c-0.245,0.568-0.622,1.279-0.622,1.279l-0.811,1.529l-5.9-2.114l0.54-3.772 c0.353-2.177-0.813-3.175-2.019-3.396c-1.049-0.19-2.403,0.21-2.761,1.971l-0.987,4.486l-6.798-1.045l-0.161-5.006 c-0.041-1.148-0.481-1.956-1.308-2.394c-0.981-0.521-2.373-0.438-3.387,0.199c-0.647,0.406-1.406,1.208-1.348,2.722l0.112,4.579 l-6.946,0.894l-0.593-3.373c-0.405-1.946-1.784-2.506-2.839-2.381c-1.454,0.176-2.873,1.665-2.767,4.595 c0.002,0.022,0.121,1.89,0.153,4.791c0.053,4.79-0.215,11.466-3.138,14.793c-0.729,0.83-1.992,0.913-2.822,0.183 c-0.83-0.729-0.912-1.993-0.183-2.822c0.943-1.074,2.037-3.728,2.14-10.243c-2.117,0.074-4.128,0.449-4.914,0.931 C25.068,41.661,22.625,51.572,22.542,53.533z'/></svg></div><div class='playArea' id='playerRight'><svg class='rpsHand' id='rightHand' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' x='0px' y='0px' viewBox='0 0 100 125' enable-background='new 0 0 100 100' xml:space='preserve'><path d='M49.46,79.258c-2.858,0-5.457-0.156-7.455-0.275c-10.978-0.656-21.154-13.612-23.419-24.83l-0.026-0.165 c-0.176-1.505,2.688-15.322,5.127-17.15c1.909-1.432,5.465-1.746,7.386-1.806c-0.045-1.558-0.104-2.487-0.105-2.5 c-0.2-5.494,3.116-8.383,6.281-8.767c2.956-0.359,5.551,1.238,6.744,3.994c0.023-2.444,1.184-4.57,3.223-5.852 c2.234-1.404,5.134-1.541,7.387-0.347c2.091,1.107,3.343,3.219,3.434,5.794l0.029,0.901l0.006-0.029 c0.823-4.057,4.344-5.634,7.392-5.078c3.006,0.548,5.706,3.213,5.335,7.307c1.385-1.699,3.535-2.422,5.767-1.823 c2.704,0.726,5.367,3.588,4.826,8.158l-0.167,1.848c-0.041,0.902-1.25,24.197-10.212,34.102 C66.065,78.207,56.887,79.258,49.46,79.258z M22.542,53.533c2.454,11.766,12.394,21.02,19.702,21.457 c6.058,0.363,20.24,1.213,25.802-4.934c8.011-8.854,9.178-31.466,9.189-31.693l0.178-1.988c0.269-2.276-0.754-3.576-1.885-3.879 c-0.408-0.111-1.417-0.226-1.97,1.061c-0.245,0.568-0.622,1.279-0.622,1.279l-0.811,1.529l-5.9-2.114l0.54-3.772 c0.353-2.177-0.813-3.175-2.019-3.396c-1.049-0.19-2.403,0.21-2.761,1.971l-0.987,4.486l-6.798-1.045l-0.161-5.006 c-0.041-1.148-0.481-1.956-1.308-2.394c-0.981-0.521-2.373-0.438-3.387,0.199c-0.647,0.406-1.406,1.208-1.348,2.722l0.112,4.579 l-6.946,0.894l-0.593-3.373c-0.405-1.946-1.784-2.506-2.839-2.381c-1.454,0.176-2.873,1.665-2.767,4.595 c0.002,0.022,0.121,1.89,0.153,4.791c0.053,4.79-0.215,11.466-3.138,14.793c-0.729,0.83-1.992,0.913-2.822,0.183 c-0.83-0.729-0.912-1.993-0.183-2.822c0.943-1.074,2.037-3.728,2.14-10.243c-2.117,0.074-4.128,0.449-4.914,0.931 C25.068,41.661,22.625,51.572,22.542,53.533z'/></svg></div></div>");
	$("#gameModal .modal-body").append("<div class='row' id='vs'><div id='wrapper'><div id='vsHolder'><figure class='letter-wrapper'><span class='letter v'><span class='bottom'></span></span><figcaption>V</figcaption></figure><figure class='letter-wrapper'><span class='letter s'><span class='bottom'></span><span class='middle'></span><span class='top'></span></span><figcaption>S</figcaption></figure></div></div></div>");
	$("#gameModal .modal-body").append("<div class='row' id='nameRow'><div class='col-md-6'><h3>" + player + "</h3></div><div class='col-md-6'><h3>" + opponent + "</h3></div></div>");
	$("#gameModal .modal-body").append("<div class='row' id='lastRow'><div id='leftButtonGroup'><div class='optionHand'><svg class='rock' onclick=\"itsOn(1, 'r')\" xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' x='0px' y='0px' viewBox='0 0 100 125' enable-background='new 0 0 100 100' xml:space='preserve'><path d='M49.46,79.258c-2.858,0-5.457-0.156-7.455-0.275c-10.978-0.656-21.154-13.612-23.419-24.83l-0.026-0.165 c-0.176-1.505,2.688-15.322,5.127-17.15c1.909-1.432,5.465-1.746,7.386-1.806c-0.045-1.558-0.104-2.487-0.105-2.5 c-0.2-5.494,3.116-8.383,6.281-8.767c2.956-0.359,5.551,1.238,6.744,3.994c0.023-2.444,1.184-4.57,3.223-5.852 c2.234-1.404,5.134-1.541,7.387-0.347c2.091,1.107,3.343,3.219,3.434,5.794l0.029,0.901l0.006-0.029 c0.823-4.057,4.344-5.634,7.392-5.078c3.006,0.548,5.706,3.213,5.335,7.307c1.385-1.699,3.535-2.422,5.767-1.823 c2.704,0.726,5.367,3.588,4.826,8.158l-0.167,1.848c-0.041,0.902-1.25,24.197-10.212,34.102 C66.065,78.207,56.887,79.258,49.46,79.258z M22.542,53.533c2.454,11.766,12.394,21.02,19.702,21.457 c6.058,0.363,20.24,1.213,25.802-4.934c8.011-8.854,9.178-31.466,9.189-31.693l0.178-1.988c0.269-2.276-0.754-3.576-1.885-3.879 c-0.408-0.111-1.417-0.226-1.97,1.061c-0.245,0.568-0.622,1.279-0.622,1.279l-0.811,1.529l-5.9-2.114l0.54-3.772 c0.353-2.177-0.813-3.175-2.019-3.396c-1.049-0.19-2.403,0.21-2.761,1.971l-0.987,4.486l-6.798-1.045l-0.161-5.006 c-0.041-1.148-0.481-1.956-1.308-2.394c-0.981-0.521-2.373-0.438-3.387,0.199c-0.647,0.406-1.406,1.208-1.348,2.722l0.112,4.579 l-6.946,0.894l-0.593-3.373c-0.405-1.946-1.784-2.506-2.839-2.381c-1.454,0.176-2.873,1.665-2.767,4.595 c0.002,0.022,0.121,1.89,0.153,4.791c0.053,4.79-0.215,11.466-3.138,14.793c-0.729,0.83-1.992,0.913-2.822,0.183 c-0.83-0.729-0.912-1.993-0.183-2.822c0.943-1.074,2.037-3.728,2.14-10.243c-2.117,0.074-4.128,0.449-4.914,0.931 C25.068,41.661,22.625,51.572,22.542,53.533z'/></svg><br/><kbd>a</kbd></div><div class='optionHand'><svg class='paper' onclick=\"itsOn(1, 'p')\" xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' x='0px' y='0px' viewBox='0 0 100 125' enable-background='new 0 0 100 100' xml:space='preserve'><path d='M53.25,95.878c-0.001,0-0.001,0-0.002,0c-2.701,0-5.105-0.131-7.336-0.265C35.657,95,23.662,83.081,23.156,82.574 l-0.242-0.294L6.343,57.705l1.321-1.161c2.088-1.835,4.243-2.766,6.407-2.766c4.423,0,7.803,3.79,10.785,7.134 c2.178,2.44,4.429,4.965,6.211,4.964c0.243,0,0.482-0.046,0.732-0.142c5.843-2.234,3.501-13.771,3.476-13.887l-5.354-28.194 c-0.432-3.302,0.596-5.269,1.534-6.338c1.061-1.208,2.528-1.873,4.135-1.873c2.602,0,5.606,1.833,6.456,5.928l6.164,24.311 l0.122-0.016l-0.24-34.788c0.107-4.661,3.428-6.757,6.467-6.757c3.116,0,6.525,2.255,6.707,6.436l0.749,35.123l0.276,0.042 l4.647-26.44c0.645-3.173,3.137-5.27,6.21-5.27c1.951,0,3.78,0.834,5.018,2.288c1.284,1.508,1.794,3.552,1.438,5.753l-4.796,25.233 c3.529-7.273,7.29-14.998,7.544-15.409c1.214-1.967,3.115-3.096,5.217-3.096c1.946,0,3.794,0.967,4.944,2.586 c1.203,1.694,1.468,3.884,0.728,6.008l-0.062,0.158l-8.064,18.033c-0.189,3.231-1.747,24.465-10.194,33.803 C70.956,93.75,63.867,95.878,53.25,95.878z M26.118,79.877c1.286,1.253,11.804,11.251,20.032,11.744 c2.171,0.13,4.507,0.257,7.098,0.257c9.294,0,15.587-1.746,18.705-5.19c8-8.845,9.175-31.466,9.186-31.693l0.019-0.376l8.33-18.631 c0.365-1.111,0.075-1.864-0.235-2.302c-0.396-0.557-1.041-0.902-1.684-0.902c-0.703,0-1.33,0.414-1.813,1.197 c-0.333,0.614-5.269,10.763-8.496,17.419l-0.753,1.553l-6.461-2.027l5.619-29.564c0.159-0.987-0.025-1.858-0.544-2.468 c-0.47-0.551-1.206-0.88-1.972-0.88c-0.562,0-1.91,0.196-2.28,2.015l-5.315,30.244l-7.466-1.149l-0.819-38.436 c-0.076-1.749-1.458-2.565-2.709-2.565c-0.563,0-2.407,0.201-2.468,2.79l0.265,38.27l-7.151,0.922l-7.055-27.834 c-0.413-1.979-1.578-2.826-2.56-2.826c-0.31,0-0.757,0.088-1.129,0.512c-0.548,0.625-0.754,1.733-0.58,3.126l5.312,27.965 c0.123,0.552,3.183,14.928-5.966,18.425c-0.704,0.27-1.431,0.405-2.16,0.405c-3.574,0.001-6.432-3.203-9.196-6.302 c-2.541-2.85-5.17-5.796-7.8-5.796c-0.76,0-1.541,0.24-2.363,0.729L26.118,79.877z'/></svg><br/><kbd>s</kbd></div><div class='optionHand'><svg class='scissors' onclick=\"itsOn(1, 's')\" xmlns='http://www.w3.org/2000/svg' enable-background='new 0 0 100 100' viewBox='0 0 100 125' x='0px' y='0px' version='1.1' xmlns:xml='http://www.w3.org/XML/1998/namespace' xml:space='preserve'><path d='M 57.06 95.878 C 57.06 95.878 57.06 95.878 57.06 95.878 c -2.698 0 -5.102 -0.13 -7.333 -0.264 C 39.472 95 27.475 83.082 26.969 82.575 l -0.242 -0.294 L 10.157 57.705 l 1.321 -1.162 c 2.088 -1.834 4.243 -2.765 6.407 -2.765 c 4.423 0 7.803 3.79 10.785 7.133 c 2.177 2.441 4.429 4.965 6.21 4.964 c 0.243 0 0.483 -0.046 0.733 -0.142 c 5.843 -2.234 3.501 -13.769 3.476 -13.884 l -5.354 -28.195 c -0.432 -3.302 0.596 -5.269 1.534 -6.337 c 1.061 -1.208 2.528 -1.874 4.135 -1.874 c 2.602 0 5.606 1.833 6.456 5.929 l 6.164 24.312 l 0.123 -0.016 l -0.241 -34.788 c 0.107 -4.662 3.428 -6.757 6.468 -6.757 c 3.116 0 6.526 2.256 6.706 6.437 l 0.749 35.121 l 0.301 0.046 l 0.134 -0.708 c 0.639 -3.149 3.13 -5.246 6.203 -5.246 c 1.951 0 3.78 0.834 5.019 2.288 c 1.104 1.298 1.637 2.991 1.537 4.841 c 1.13 -1.329 2.668 -2.074 4.343 -2.074 c 1.989 0 3.989 1.077 5.222 2.812 c 1.297 1.825 1.604 4.122 0.845 6.3 l -0.495 1.52 c -0.16 2.823 -1.653 24.462 -10.203 33.913 C 74.771 93.75 67.681 95.878 57.06 95.878 Z M 29.931 79.877 c 1.287 1.253 11.806 11.251 20.034 11.744 c 2.171 0.13 4.507 0.257 7.094 0.257 c 9.297 0 15.591 -1.747 18.709 -5.191 c 8 -8.843 9.177 -31.466 9.188 -31.694 l 0.014 -0.269 l 0.673 -2.065 c 0.462 -1.325 -0.001 -2.262 -0.315 -2.706 c -0.487 -0.686 -1.257 -1.128 -1.961 -1.128 c -0.612 0 -1.138 0.347 -1.56 1.031 c -0.128 0.206 -0.461 0.919 -0.692 1.459 L 80.4 52.976 l -6.128 -1.921 l 0.709 -3.917 c 0.162 -1.004 -0.023 -1.876 -0.542 -2.486 c -0.47 -0.551 -1.207 -0.881 -1.973 -0.881 c -0.562 0 -1.909 0.196 -2.278 2.015 l -0.846 4.482 l -7.441 -1.146 l -0.819 -38.435 c -0.075 -1.749 -1.457 -2.565 -2.708 -2.565 c -0.564 0 -2.408 0.201 -2.469 2.79 l 0.268 38.271 l -7.154 0.919 l -7.055 -27.833 c -0.413 -1.979 -1.578 -2.826 -2.56 -2.826 c -0.31 0 -0.757 0.089 -1.129 0.512 c -0.548 0.625 -0.754 1.734 -0.58 3.126 l 5.312 27.966 c 0.123 0.552 3.183 14.926 -5.966 18.423 c -0.703 0.269 -1.431 0.406 -2.16 0.406 h -0.001 c -3.574 0 -6.432 -3.204 -9.195 -6.302 c -2.541 -2.849 -5.169 -5.795 -7.8 -5.795 c -0.76 0 -1.541 0.24 -2.363 0.729 L 29.931 79.877 Z'/></svg><br/><kbd>d</kbd></div></div></div>");
	if(opponent === players[2].getName()){
		$("#gameModal .modal-body #lastRow").append("<div id='rightButtonGroup'><div class='optionHand'><svg class='rock' onclick=\"itsOn(1, 'r', 2)\" xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' x='0px' y='0px' viewBox='0 0 100 125' enable-background='new 0 0 100 100' xml:space='preserve'><path d='M49.46,79.258c-2.858,0-5.457-0.156-7.455-0.275c-10.978-0.656-21.154-13.612-23.419-24.83l-0.026-0.165 c-0.176-1.505,2.688-15.322,5.127-17.15c1.909-1.432,5.465-1.746,7.386-1.806c-0.045-1.558-0.104-2.487-0.105-2.5 c-0.2-5.494,3.116-8.383,6.281-8.767c2.956-0.359,5.551,1.238,6.744,3.994c0.023-2.444,1.184-4.57,3.223-5.852 c2.234-1.404,5.134-1.541,7.387-0.347c2.091,1.107,3.343,3.219,3.434,5.794l0.029,0.901l0.006-0.029 c0.823-4.057,4.344-5.634,7.392-5.078c3.006,0.548,5.706,3.213,5.335,7.307c1.385-1.699,3.535-2.422,5.767-1.823 c2.704,0.726,5.367,3.588,4.826,8.158l-0.167,1.848c-0.041,0.902-1.25,24.197-10.212,34.102 C66.065,78.207,56.887,79.258,49.46,79.258z M22.542,53.533c2.454,11.766,12.394,21.02,19.702,21.457 c6.058,0.363,20.24,1.213,25.802-4.934c8.011-8.854,9.178-31.466,9.189-31.693l0.178-1.988c0.269-2.276-0.754-3.576-1.885-3.879 c-0.408-0.111-1.417-0.226-1.97,1.061c-0.245,0.568-0.622,1.279-0.622,1.279l-0.811,1.529l-5.9-2.114l0.54-3.772 c0.353-2.177-0.813-3.175-2.019-3.396c-1.049-0.19-2.403,0.21-2.761,1.971l-0.987,4.486l-6.798-1.045l-0.161-5.006 c-0.041-1.148-0.481-1.956-1.308-2.394c-0.981-0.521-2.373-0.438-3.387,0.199c-0.647,0.406-1.406,1.208-1.348,2.722l0.112,4.579 l-6.946,0.894l-0.593-3.373c-0.405-1.946-1.784-2.506-2.839-2.381c-1.454,0.176-2.873,1.665-2.767,4.595 c0.002,0.022,0.121,1.89,0.153,4.791c0.053,4.79-0.215,11.466-3.138,14.793c-0.729,0.83-1.992,0.913-2.822,0.183 c-0.83-0.729-0.912-1.993-0.183-2.822c0.943-1.074,2.037-3.728,2.14-10.243c-2.117,0.074-4.128,0.449-4.914,0.931 C25.068,41.661,22.625,51.572,22.542,53.533z'/></svg><br/><kbd>j</kbd></div><div class='optionHand'><svg class='paper' onclick=\"itsOn(1, 'p', 2)\" xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' x='0px' y='0px' viewBox='0 0 100 125' enable-background='new 0 0 100 100' xml:space='preserve'><path d='M53.25,95.878c-0.001,0-0.001,0-0.002,0c-2.701,0-5.105-0.131-7.336-0.265C35.657,95,23.662,83.081,23.156,82.574 l-0.242-0.294L6.343,57.705l1.321-1.161c2.088-1.835,4.243-2.766,6.407-2.766c4.423,0,7.803,3.79,10.785,7.134 c2.178,2.44,4.429,4.965,6.211,4.964c0.243,0,0.482-0.046,0.732-0.142c5.843-2.234,3.501-13.771,3.476-13.887l-5.354-28.194 c-0.432-3.302,0.596-5.269,1.534-6.338c1.061-1.208,2.528-1.873,4.135-1.873c2.602,0,5.606,1.833,6.456,5.928l6.164,24.311 l0.122-0.016l-0.24-34.788c0.107-4.661,3.428-6.757,6.467-6.757c3.116,0,6.525,2.255,6.707,6.436l0.749,35.123l0.276,0.042 l4.647-26.44c0.645-3.173,3.137-5.27,6.21-5.27c1.951,0,3.78,0.834,5.018,2.288c1.284,1.508,1.794,3.552,1.438,5.753l-4.796,25.233 c3.529-7.273,7.29-14.998,7.544-15.409c1.214-1.967,3.115-3.096,5.217-3.096c1.946,0,3.794,0.967,4.944,2.586 c1.203,1.694,1.468,3.884,0.728,6.008l-0.062,0.158l-8.064,18.033c-0.189,3.231-1.747,24.465-10.194,33.803 C70.956,93.75,63.867,95.878,53.25,95.878z M26.118,79.877c1.286,1.253,11.804,11.251,20.032,11.744 c2.171,0.13,4.507,0.257,7.098,0.257c9.294,0,15.587-1.746,18.705-5.19c8-8.845,9.175-31.466,9.186-31.693l0.019-0.376l8.33-18.631 c0.365-1.111,0.075-1.864-0.235-2.302c-0.396-0.557-1.041-0.902-1.684-0.902c-0.703,0-1.33,0.414-1.813,1.197 c-0.333,0.614-5.269,10.763-8.496,17.419l-0.753,1.553l-6.461-2.027l5.619-29.564c0.159-0.987-0.025-1.858-0.544-2.468 c-0.47-0.551-1.206-0.88-1.972-0.88c-0.562,0-1.91,0.196-2.28,2.015l-5.315,30.244l-7.466-1.149l-0.819-38.436 c-0.076-1.749-1.458-2.565-2.709-2.565c-0.563,0-2.407,0.201-2.468,2.79l0.265,38.27l-7.151,0.922l-7.055-27.834 c-0.413-1.979-1.578-2.826-2.56-2.826c-0.31,0-0.757,0.088-1.129,0.512c-0.548,0.625-0.754,1.733-0.58,3.126l5.312,27.965 c0.123,0.552,3.183,14.928-5.966,18.425c-0.704,0.27-1.431,0.405-2.16,0.405c-3.574,0.001-6.432-3.203-9.196-6.302 c-2.541-2.85-5.17-5.796-7.8-5.796c-0.76,0-1.541,0.24-2.363,0.729L26.118,79.877z'/></svg><br/><kbd>k</kbd></div><div class='optionHand'><svg class='scissors' onclick=\"itsOn(1, 's', 2)\" xmlns='http://www.w3.org/2000/svg' enable-background='new 0 0 100 100' viewBox='0 0 100 125' x='0px' y='0px' version='1.1' xmlns:xml='http://www.w3.org/XML/1998/namespace' xml:space='preserve'><path d='M 57.06 95.878 C 57.06 95.878 57.06 95.878 57.06 95.878 c -2.698 0 -5.102 -0.13 -7.333 -0.264 C 39.472 95 27.475 83.082 26.969 82.575 l -0.242 -0.294 L 10.157 57.705 l 1.321 -1.162 c 2.088 -1.834 4.243 -2.765 6.407 -2.765 c 4.423 0 7.803 3.79 10.785 7.133 c 2.177 2.441 4.429 4.965 6.21 4.964 c 0.243 0 0.483 -0.046 0.733 -0.142 c 5.843 -2.234 3.501 -13.769 3.476 -13.884 l -5.354 -28.195 c -0.432 -3.302 0.596 -5.269 1.534 -6.337 c 1.061 -1.208 2.528 -1.874 4.135 -1.874 c 2.602 0 5.606 1.833 6.456 5.929 l 6.164 24.312 l 0.123 -0.016 l -0.241 -34.788 c 0.107 -4.662 3.428 -6.757 6.468 -6.757 c 3.116 0 6.526 2.256 6.706 6.437 l 0.749 35.121 l 0.301 0.046 l 0.134 -0.708 c 0.639 -3.149 3.13 -5.246 6.203 -5.246 c 1.951 0 3.78 0.834 5.019 2.288 c 1.104 1.298 1.637 2.991 1.537 4.841 c 1.13 -1.329 2.668 -2.074 4.343 -2.074 c 1.989 0 3.989 1.077 5.222 2.812 c 1.297 1.825 1.604 4.122 0.845 6.3 l -0.495 1.52 c -0.16 2.823 -1.653 24.462 -10.203 33.913 C 74.771 93.75 67.681 95.878 57.06 95.878 Z M 29.931 79.877 c 1.287 1.253 11.806 11.251 20.034 11.744 c 2.171 0.13 4.507 0.257 7.094 0.257 c 9.297 0 15.591 -1.747 18.709 -5.191 c 8 -8.843 9.177 -31.466 9.188 -31.694 l 0.014 -0.269 l 0.673 -2.065 c 0.462 -1.325 -0.001 -2.262 -0.315 -2.706 c -0.487 -0.686 -1.257 -1.128 -1.961 -1.128 c -0.612 0 -1.138 0.347 -1.56 1.031 c -0.128 0.206 -0.461 0.919 -0.692 1.459 L 80.4 52.976 l -6.128 -1.921 l 0.709 -3.917 c 0.162 -1.004 -0.023 -1.876 -0.542 -2.486 c -0.47 -0.551 -1.207 -0.881 -1.973 -0.881 c -0.562 0 -1.909 0.196 -2.278 2.015 l -0.846 4.482 l -7.441 -1.146 l -0.819 -38.435 c -0.075 -1.749 -1.457 -2.565 -2.708 -2.565 c -0.564 0 -2.408 0.201 -2.469 2.79 l 0.268 38.271 l -7.154 0.919 l -7.055 -27.833 c -0.413 -1.979 -1.578 -2.826 -2.56 -2.826 c -0.31 0 -0.757 0.089 -1.129 0.512 c -0.548 0.625 -0.754 1.734 -0.58 3.126 l 5.312 27.966 c 0.123 0.552 3.183 14.926 -5.966 18.423 c -0.703 0.269 -1.431 0.406 -2.16 0.406 h -0.001 c -3.574 0 -6.432 -3.204 -9.195 -6.302 c -2.541 -2.849 -5.169 -5.795 -7.8 -5.795 c -0.76 0 -1.541 0.24 -2.363 0.729 L 29.931 79.877 Z'/></svg><br/><kbd>l</kbd></div></div>");
		
		$("#leftButtonGroup .rock").attr("onclick","itsOn(1, 'r', 1)").css("fill", players[1].getRHandColor());
		$("#leftButtonGroup .paper").attr("onclick","itsOn(1, 'p', 1)").css("fill", players[1].getPHandColor());
		$("#leftButtonGroup .scissors").attr("onclick","itsOn(1, 's', 1)").css("fill", players[1].getSHandColor());
		$("#rightButtonGroup .rock").css("fill", players[2].getRHandColor());
		$("#rightButtonGroup .paper").css("fill", players[2].getPHandColor());
		$("#rightButtonGroup .scissors").css("fill", players[2].getSHandColor());
		
		$(".playArea #leftHand").css("fill", players[1].getRHandColor());
		$(".playArea #rightHand").css("fill", players[2].getRHandColor());
	}
	else{
		if(player === players[1].getName()){
			$("#leftButtonGroup .rock").attr("onclick","itsOn(0, 'r')").css("fill", players[1].getRHandColor());
			$("#leftButtonGroup .paper").attr("onclick","itsOn(0, 'p')").css("fill", players[1].getPHandColor());
			$("#leftButtonGroup .scissors").attr("onclick","itsOn(0, 's')").css("fill", players[1].getSHandColor());
			$(".playArea #leftHand").css("fill", players[1].getRHandColor());
			$(".playArea #rightHand").css("fill", players[0].getRHandColor());
		}
		else {
			$("#leftButtonGroup .rock").attr("onclick","itsOn(0, 'r')").css("fill", players[2].getRHandColor());
			$("#leftButtonGroup .paper").attr("onclick","itsOn(0, 'p')").css("fill", players[2].getPHandColor());
			$("#leftButtonGroup .scissors").attr("onclick","itsOn(0, 's')").css("fill", players[2].getSHandColor());
			$(".playArea #leftHand").css("fill", players[2].getRHandColor());
			$(".playArea #rightHand").css("fill", players[0].getRHandColor());
		}
	}
	rpsHandTimeline.insert(TweenMax.fromTo($('#leftHand'), .55, { rotation: 0, ease: Power1.easeIn}, { rotation: 84, repeat: -1, /* Aka infinite amount of repeats */	yoyo: true, /* Make it go back and forth */  ease: Power1.easeIn }));
	rpsHandTimeline.insert(TweenMax.fromTo($('#rightHand'), .55, {scaleY: -1, rotation: 90}, { rotation: 174, repeat: -1, /* Aka infinite amount of repeats */ yoyo: true /* Make it go back and forth */ }));
	rpsHandTimeline.play();
	//$("#gameModal").modal("handleUpdate");
	//TODO
	$("#gameModal").on('keydown', function(event){
		event.stopPropagation();
		var keycode = event.keyCode;
		var human;
		if(opponent === players[0].getName()){
			human = 0;
		}
		else{
			human = 1;
		}
		switch(keycode){
			case '65': //a
				switch(human){
					case 0:
						itsOn(0, 'r');
					break;
					case 1:
						itsOn(1, 'r', 1);
					break;
				}
			break;
			case '83': //s
				switch(human){
					case 0:
						itsOn(0, 'p');
					break;
					case 1:
						itsOn(1, 'p', 1);
					break;
				}
			break;
			case '68': //d
				switch(human){
					case 0:
						itsOn(0, 's');
					break;
					case 1:
						itsOn(1, 's', 1);
					break;
				}
			break;
			case '74': //j
				itsOn(1, 'r', 2);
			break;
			case '75': //k
				itsOn(1, 'p', 2);
			break;
			case '76': //l
				itsOn(1, 's', 2);
			break;
			default:
				keycode = event.which;
				switch(keycode){
					case 65: //a
						switch(human){
							case 0:
								itsOn(0, 'r');
							break;
							case 1:
								itsOn(1, 'r', 1);
							break;
						}
					break;
					case 83: //s
						switch(human){
							case 0:
								itsOn(0, 'p');
							break;
							case 1:
								itsOn(1, 'p', 1);
							break;
						}
					break;
					case 68: //d
						switch(human){
							case 0:
								itsOn(0, 's');
							break;
							case 1:
								itsOn(1, 's', 1);
							break;
						}
					break;
					case 74: //j
						itsOn(1, 'r', 2);
					break;
					case 75: //k
						itsOn(1, 'p', 2);
					break;
					case 76: //l
						itsOn(1, 's', 2);
					break;
				}
			break;
		}
	});
	svgHand = undefined;
	otherSvgHand = undefined;
	well.append("<div class='miniRound'><p id='title'>Round " + currentRoundNum + "</p><div id='wrapper'><span class='left'></span><span class='right'></span><p class='ribbon'>Match " + currentMatchNum + "</p></div></div>");
	$("#gameModal").focus();
	return;
};

var gameUpdate = function(){
	if(currentMatchNum >= numMatches){
		currentMatchNum = 1;
		totalMatches++;
		totalRounds++;
		if(currentRoundNum >= numRounds){
			endGame();
			currentRoundNum = 1;
			currentMatchNum = 1;
		}
		else{
			currentRoundNum++;
		}
		return "Round";
	}
	else{
		currentMatchNum++;
		totalMatches++;
		return "Match";
	}
};

var rpsHandTimeline = new TimelineMax();

var returnHand = function(hand){
	var randomNum;
	switch(hand){
		case 'r':
			return "<path d='M49.46,79.258c-2.858,0-5.457-0.156-7.455-0.275c-10.978-0.656-21.154-13.612-23.419-24.83l-0.026-0.165 c-0.176-1.505,2.688-15.322,5.127-17.15c1.909-1.432,5.465-1.746,7.386-1.806c-0.045-1.558-0.104-2.487-0.105-2.5 c-0.2-5.494,3.116-8.383,6.281-8.767c2.956-0.359,5.551,1.238,6.744,3.994c0.023-2.444,1.184-4.57,3.223-5.852 c2.234-1.404,5.134-1.541,7.387-0.347c2.091,1.107,3.343,3.219,3.434,5.794l0.029,0.901l0.006-0.029 c0.823-4.057,4.344-5.634,7.392-5.078c3.006,0.548,5.706,3.213,5.335,7.307c1.385-1.699,3.535-2.422,5.767-1.823 c2.704,0.726,5.367,3.588,4.826,8.158l-0.167,1.848c-0.041,0.902-1.25,24.197-10.212,34.102 C66.065,78.207,56.887,79.258,49.46,79.258z M22.542,53.533c2.454,11.766,12.394,21.02,19.702,21.457 c6.058,0.363,20.24,1.213,25.802-4.934c8.011-8.854,9.178-31.466,9.189-31.693l0.178-1.988c0.269-2.276-0.754-3.576-1.885-3.879 c-0.408-0.111-1.417-0.226-1.97,1.061c-0.245,0.568-0.622,1.279-0.622,1.279l-0.811,1.529l-5.9-2.114l0.54-3.772 c0.353-2.177-0.813-3.175-2.019-3.396c-1.049-0.19-2.403,0.21-2.761,1.971l-0.987,4.486l-6.798-1.045l-0.161-5.006 c-0.041-1.148-0.481-1.956-1.308-2.394c-0.981-0.521-2.373-0.438-3.387,0.199c-0.647,0.406-1.406,1.208-1.348,2.722l0.112,4.579 l-6.946,0.894l-0.593-3.373c-0.405-1.946-1.784-2.506-2.839-2.381c-1.454,0.176-2.873,1.665-2.767,4.595 c0.002,0.022,0.121,1.89,0.153,4.791c0.053,4.79-0.215,11.466-3.138,14.793c-0.729,0.83-1.992,0.913-2.822,0.183 c-0.83-0.729-0.912-1.993-0.183-2.822c0.943-1.074,2.037-3.728,2.14-10.243c-2.117,0.074-4.128,0.449-4.914,0.931 C25.068,41.661,22.625,51.572,22.542,53.533z'/>";
		break;
		case 'p':
			return "<path d='M53.25,95.878c-0.001,0-0.001,0-0.002,0c-2.701,0-5.105-0.131-7.336-0.265C35.657,95,23.662,83.081,23.156,82.574 l-0.242-0.294L6.343,57.705l1.321-1.161c2.088-1.835,4.243-2.766,6.407-2.766c4.423,0,7.803,3.79,10.785,7.134 c2.178,2.44,4.429,4.965,6.211,4.964c0.243,0,0.482-0.046,0.732-0.142c5.843-2.234,3.501-13.771,3.476-13.887l-5.354-28.194 c-0.432-3.302,0.596-5.269,1.534-6.338c1.061-1.208,2.528-1.873,4.135-1.873c2.602,0,5.606,1.833,6.456,5.928l6.164,24.311 l0.122-0.016l-0.24-34.788c0.107-4.661,3.428-6.757,6.467-6.757c3.116,0,6.525,2.255,6.707,6.436l0.749,35.123l0.276,0.042 l4.647-26.44c0.645-3.173,3.137-5.27,6.21-5.27c1.951,0,3.78,0.834,5.018,2.288c1.284,1.508,1.794,3.552,1.438,5.753l-4.796,25.233 c3.529-7.273,7.29-14.998,7.544-15.409c1.214-1.967,3.115-3.096,5.217-3.096c1.946,0,3.794,0.967,4.944,2.586 c1.203,1.694,1.468,3.884,0.728,6.008l-0.062,0.158l-8.064,18.033c-0.189,3.231-1.747,24.465-10.194,33.803 C70.956,93.75,63.867,95.878,53.25,95.878z M26.118,79.877c1.286,1.253,11.804,11.251,20.032,11.744 c2.171,0.13,4.507,0.257,7.098,0.257c9.294,0,15.587-1.746,18.705-5.19c8-8.845,9.175-31.466,9.186-31.693l0.019-0.376l8.33-18.631 c0.365-1.111,0.075-1.864-0.235-2.302c-0.396-0.557-1.041-0.902-1.684-0.902c-0.703,0-1.33,0.414-1.813,1.197 c-0.333,0.614-5.269,10.763-8.496,17.419l-0.753,1.553l-6.461-2.027l5.619-29.564c0.159-0.987-0.025-1.858-0.544-2.468 c-0.47-0.551-1.206-0.88-1.972-0.88c-0.562,0-1.91,0.196-2.28,2.015l-5.315,30.244l-7.466-1.149l-0.819-38.436 c-0.076-1.749-1.458-2.565-2.709-2.565c-0.563,0-2.407,0.201-2.468,2.79l0.265,38.27l-7.151,0.922l-7.055-27.834 c-0.413-1.979-1.578-2.826-2.56-2.826c-0.31,0-0.757,0.088-1.129,0.512c-0.548,0.625-0.754,1.733-0.58,3.126l5.312,27.965 c0.123,0.552,3.183,14.928-5.966,18.425c-0.704,0.27-1.431,0.405-2.16,0.405c-3.574,0.001-6.432-3.203-9.196-6.302 c-2.541-2.85-5.17-5.796-7.8-5.796c-0.76,0-1.541,0.24-2.363,0.729L26.118,79.877z'/>";
		break;
		case 's':
			randomNum = Math.random();
			if (randomNum < 0.49){
				return "<path d='M49.456,95.89c-2.857,0-5.453-0.155-7.451-0.275c-10.979-0.657-21.153-13.613-23.418-24.831L18.56,70.62 c-0.176-1.504,2.687-15.32,5.126-17.15c1.859-1.394,5.278-1.729,7.229-1.802c-0.639-5.559-2.67-19.632-4.108-29.265 c-0.502-4.961,2.589-7.687,5.67-8.161c3.14-0.481,6.784,1.281,7.677,5.585l3.868,23.235L43.732,11.48 c-0.1-2.574,1.072-4.856,3.217-6.205c2.235-1.404,5.135-1.541,7.386-0.348c2.092,1.107,3.344,3.22,3.436,5.794l0.346,33.925 c0.901-3.902,4.35-5.415,7.348-4.868c3.006,0.548,5.705,3.213,5.335,7.306c1.386-1.699,3.536-2.421,5.766-1.822 c2.704,0.726,5.367,3.588,4.826,8.158l-0.167,1.849c-0.042,0.901-1.251,24.196-10.212,34.101 C66.064,94.838,56.884,95.89,49.456,95.89z M22.542,70.164c2.454,11.766,12.394,21.021,19.702,21.458 c6.054,0.362,20.24,1.211,25.801-4.934c8.001-8.843,9.178-31.466,9.188-31.694l0.179-1.989c0.27-2.275-0.754-3.575-1.885-3.878 c-0.407-0.11-1.417-0.224-1.97,1.061c-0.244,0.568-0.622,1.281-0.622,1.281l-0.812,1.527l-5.9-2.114l0.542-3.773 c0.352-2.176-0.813-3.174-2.02-3.394c-1.052-0.19-2.404,0.209-2.762,1.971l-0.987,4.485l-6.835-1.051l-0.391-38.306 c-0.04-1.105-0.48-1.913-1.309-2.352c-0.981-0.52-2.372-0.438-3.385,0.199c-0.646,0.407-1.405,1.209-1.347,2.723l0.35,37.846 l-6.937,0.892l-4.92-29.561c-0.392-1.882-1.864-2.563-3.138-2.366c-1.278,0.196-2.556,1.274-2.31,3.711 c0.43,2.866,4.308,28.912,4.34,31.846c0.053,4.791-0.216,11.467-3.139,14.793c-0.729,0.83-1.993,0.911-2.823,0.182 c-0.83-0.729-0.911-1.993-0.182-2.823c0.943-1.073,2.038-3.728,2.141-10.243c-2.117,0.075-4.127,0.45-4.914,0.932 C25.068,58.293,22.625,68.205,22.542,70.164z'/>";
			}
			else{
				return "<path d='M 57.06 95.878 C 57.06 95.878 57.06 95.878 57.06 95.878 c -2.698 0 -5.102 -0.13 -7.333 -0.264 C 39.472 95 27.475 83.082 26.969 82.575 l -0.242 -0.294 L 10.157 57.705 l 1.321 -1.162 c 2.088 -1.834 4.243 -2.765 6.407 -2.765 c 4.423 0 7.803 3.79 10.785 7.133 c 2.177 2.441 4.429 4.965 6.21 4.964 c 0.243 0 0.483 -0.046 0.733 -0.142 c 5.843 -2.234 3.501 -13.769 3.476 -13.884 l -5.354 -28.195 c -0.432 -3.302 0.596 -5.269 1.534 -6.337 c 1.061 -1.208 2.528 -1.874 4.135 -1.874 c 2.602 0 5.606 1.833 6.456 5.929 l 6.164 24.312 l 0.123 -0.016 l -0.241 -34.788 c 0.107 -4.662 3.428 -6.757 6.468 -6.757 c 3.116 0 6.526 2.256 6.706 6.437 l 0.749 35.121 l 0.301 0.046 l 0.134 -0.708 c 0.639 -3.149 3.13 -5.246 6.203 -5.246 c 1.951 0 3.78 0.834 5.019 2.288 c 1.104 1.298 1.637 2.991 1.537 4.841 c 1.13 -1.329 2.668 -2.074 4.343 -2.074 c 1.989 0 3.989 1.077 5.222 2.812 c 1.297 1.825 1.604 4.122 0.845 6.3 l -0.495 1.52 c -0.16 2.823 -1.653 24.462 -10.203 33.913 C 74.771 93.75 67.681 95.878 57.06 95.878 Z M 29.931 79.877 c 1.287 1.253 11.806 11.251 20.034 11.744 c 2.171 0.13 4.507 0.257 7.094 0.257 c 9.297 0 15.591 -1.747 18.709 -5.191 c 8 -8.843 9.177 -31.466 9.188 -31.694 l 0.014 -0.269 l 0.673 -2.065 c 0.462 -1.325 -0.001 -2.262 -0.315 -2.706 c -0.487 -0.686 -1.257 -1.128 -1.961 -1.128 c -0.612 0 -1.138 0.347 -1.56 1.031 c -0.128 0.206 -0.461 0.919 -0.692 1.459 L 80.4 52.976 l -6.128 -1.921 l 0.709 -3.917 c 0.162 -1.004 -0.023 -1.876 -0.542 -2.486 c -0.47 -0.551 -1.207 -0.881 -1.973 -0.881 c -0.562 0 -1.909 0.196 -2.278 2.015 l -0.846 4.482 l -7.441 -1.146 l -0.819 -38.435 c -0.075 -1.749 -1.457 -2.565 -2.708 -2.565 c -0.564 0 -2.408 0.201 -2.469 2.79 l 0.268 38.271 l -7.154 0.919 l -7.055 -27.833 c -0.413 -1.979 -1.578 -2.826 -2.56 -2.826 c -0.31 0 -0.757 0.089 -1.129 0.512 c -0.548 0.625 -0.754 1.734 -0.58 3.126 l 5.312 27.966 c 0.123 0.552 3.183 14.926 -5.966 18.423 c -0.703 0.269 -1.431 0.406 -2.16 0.406 h -0.001 c -3.574 0 -6.432 -3.204 -9.195 -6.302 c -2.541 -2.849 -5.169 -5.795 -7.8 -5.795 c -0.76 0 -1.541 0.24 -2.363 0.729 L 29.931 79.877 Z'/>";
			}
		break;
	}
};

var computerChoice = function(){
	var computerChoice = Math.random();
    if (computerChoice < 0.34){
		return "r";
    } 
    else if(computerChoice <= 0.67){
		return "p";
    } 
    else{
		return "s";
	}
};

var addRibbon = function(side, result){
	switch(side){
		case "l":
			switch(result){
				case "w":
					$("#gameModal .modal-body #ribbonRow .col-md-6").first().html("<div class='resultRibbon'><div class='wrapper'><span class='left'></span><span class='right'></span><p class='littleRibbon'><i class='fa fa-smile-o' aria-hidden='true'></i> Winner!</p></div></div>").fadeIn("slow");
				break;
				case "t":
					$("#gameModal .modal-body #ribbonRow .col-md-6").first().html("<div class='resultRibbon'><div class='wrapper'><span class='left'></span><span class='right'></span><p class='littleRibbon'>-_- Tie! <i class='fa fa-meh-o' aria-hidden='true'></i></p></div></div>").fadeIn("slow");
				break;
				case "l":
					$("#gameModal .modal-body #ribbonRow .col-md-6").first().html("<div class='resultRibbon'><div class='wrapper'><span class='left'></span><span class='right'></span><p class='littleRibbon'><i class='fa fa-frown-o' aria-hidden='true'></i> Loser!</p></div></div>").fadeIn("slow");
				break;
				default:
					alert("A result was not entered!! Come on mate check your parameters!");
				break;
			}
		break;
		case "r":
			switch(result){
				case "w":
					$("#gameModal .modal-body #ribbonRow .col-md-6").last().html("<div class='resultRibbon'><div class='wrapper'><span class='left'></span><span class='right'></span><p class='littleRibbon'>Winner! <i class='fa fa-smile-o' aria-hidden='true'></i></p></div></div>").fadeIn("slow");
				break;
				case "t":
					$("#gameModal .modal-body #ribbonRow .col-md-6").last().html("<div class='resultRibbon'><div class='wrapper'><span class='left'></span><span class='right'></span><p class='littleRibbon'><i class='fa fa-meh-o' aria-hidden='true'></i> Tie! -_-</p></div></div>").fadeIn("slow");
				break;
				case "l":
					$("#gameModal .modal-body #ribbonRow .col-md-6").last().html("<div class='resultRibbon'><div class='wrapper'><span class='left'></span><span class='right'></span><p class='littleRibbon'>Loser! <i class='fa fa-frown-o' aria-hidden='true'></i></p></div></div>").fadeIn("slow");
				break;
				default:
					alert("A result was not entered!! Come on mate check your parameters!");
				break;
			}
		break;
		default:
			alert("A side was not entered!");
		break;
	}
}

var nextGame = function(){
	TweenMax.fromTo($("#gameModal"), 1, {
		ease: Power4.easeInOut, 
		opacity: 0, 
		scale: 0, 
		onComplete:
		game()
		},
		{	
		ease: Power4.easeInOut, 
		opacity: 1, 
		scale: 1
		}
   );
};

var whoWon = function(p, p2){
	var mainPlayer;
	var secondaryPlayer;
	if(player === players[1].getName()){
		mainPlayer = players[1];
		if(opponent === players[2].getName()){
			secondaryPlayer = players[2];
		}
		else{
			secondaryPlayer = players[0];
		}
	}
	else{
		mainPlayer = players[2];
		secondaryPlayer = players[0];
	}
	switch(p){
		case "r":
			mainPlayer.usedRock();
			switch(p2){
				case "r":
					$("#well .miniRound").last().append("<br/><code>" + player + " & " + opponent + " Tie!</code>");
					mainPlayer.addTie();
					secondaryPlayer.addTie();
					secondaryPlayer.usedRock();
					addRibbon("l","t");
					addRibbon("r","t");
					p1Array[2]++;
					p2Array[2]++;
				break;
				case "p":
					$("#well .miniRound").last().append("<br/><code>" + opponent + " Wins!</code>");
					mainPlayer.addLoss();
					secondaryPlayer.addWin();
					secondaryPlayer.usedPaper();
					addRibbon("l","l");
					addRibbon("r","w");
					p1Array[3]++;
					p2Array[1]++;
				break;
				case "s":
					$("#well .miniRound").last().append("<br/><code>" + player + " Wins!</code>");
					mainPlayer.addWin();
					secondaryPlayer.addLoss();
					secondaryPlayer.usedScissors();
					addRibbon("l","w");
					addRibbon("r","l");
					p1Array[1]++;
					p2Array[3]++;
				break;
			}
		break;
		case "p":
			mainPlayer.usedPaper();
			switch(p2){
				case "r":
					$("#well .miniRound").last().append("<br/><code>" + player + " Wins!</code>");
					mainPlayer.addWin();
					secondaryPlayer.addLoss();
					secondaryPlayer.usedRock();
					addRibbon("l","w");
					addRibbon("r","l");
					p1Array[1]++;
					p2Array[3]++;
				break;
				case "p":
					$("#well .miniRound").last().append("<br/><code>" + player + " & " + opponent + " Tie!</code>");
					mainPlayer.addTie();
					secondaryPlayer.addTie();
					secondaryPlayer.usedPaper();
					addRibbon("l","t");
					addRibbon("r","t");
					p1Array[2]++;
					p2Array[2]++;
				break;
				case "s":
					$("#well .miniRound").last().append("<br/><code>" + opponent + " Wins!</code>");
					mainPlayer.addLoss();
					secondaryPlayer.addWin();
					secondaryPlayer.usedScissors();
					addRibbon("l","l");
					addRibbon("r","w");
					p1Array[3]++;
					p2Array[1]++;
				break;
			}
		break;
		case "s":
			mainPlayer.usedScissors();
			switch(p2){
				case "r":
					$("#well .miniRound").last().append("<br/><code>" + opponent + " Wins!</code>");
					mainPlayer.addLoss();
					secondaryPlayer.addWin();
					secondaryPlayer.usedRock();
					addRibbon("l","l");
					addRibbon("r","w");
					p1Array[3]++;
					p2Array[1]++;
				break;
				case "p":
					$("#well .miniRound").last().append("<br/><code>" + player + " Wins!</code>");
					mainPlayer.addWin();
					secondaryPlayer.addLoss();
					secondaryPlayer.usedPaper();
					addRibbon("l","w");
					addRibbon("r","l");
					p1Array[1]++;
					p2Array[3]++;
				break;
				case "s":
					$("#well .miniRound").last().append("<br/><code>" + player + " & " + opponent + " Tie!</code>");
					mainPlayer.addTie();
					secondaryPlayer.addTie();
					secondaryPlayer.usedScissors();
					addRibbon("l","t");
					addRibbon("r","t");
					p1Array[2]++;
					p2Array[2]++;
				break;
			}
		break;
	}
	refreshStats();
	var fadeOut = { opacity: 0, transition: 'opacity 1s' };
	$("#gameModal .modal-body #lastRow").css(fadeOut).slideUp("slow", function(){
		$(this).remove();
		$("#gameModal .modal-body #nameRow").css("marginBottom","0%");
		$("#gameModal .modal-body").append("<div class='row' id='nextRow'><div class='col-md-6'><button class='btn btn-danger btn-lg btn-block' data-dismiss='modal' id='exitGame' onclick='conFadeIn()'>Exit</button></div><div class='col-md-6'><button class='btn btn-success btn-lg btn-block' onclick='nextGame()'>Play the Next " + gameUpdate() + "</button></div></div>");
		var fadeIn = { opacity: 1, transition: 'opacity 1s' };
		$("#gameModal .modal-body #nextRow").css(fadeIn).slideDown("slow");
		p1Chose = false;
		p2Chose = false;
	});
	
	$("#gameModal").off("keydown");
};

var conFadeIn = function(){
	TweenMax.to($("#cBtn"), 1, {
		ease: Power4.easeIn, 
		opacity: 1, 
		display: "inline-block"
	});	
};
var conFadeOut = function(){
	TweenMax.to($("#cBtn"), 1, {
		ease: Power4.easeIn, 
		opacity: 0, 
		display: "none"
	});	
};

var p1Chose = false;
var p2Chose = false;
var p1Choice;
var p2Choice;
var svgHand;
var otherSvgHand;

var itsOn = function(a, choice, b){
	switch(a){
		case 0:
			rpsHandTimeline.stop();
			$("#gameModal .modal-body #leftButtonGroup .rock").attr("onclick","null");
			$("#gameModal .modal-body #leftButtonGroup .paper").attr("onclick","null");
			$("#gameModal .modal-body #leftButtonGroup .scissors").attr("onclick","null");
			svgHand = returnHand(choice);
			$("#gameModal .modal-body .playArea #leftHand").html(svgHand);
			if(player === players[1].getName()){
				$(".playArea #leftHand").css("fill", players[1].getRHandColor());
			}
			else{
				$(".playArea #leftHand").css("fill", players[2].getRHandColor());
			}
			switch(choice){
				case 'r':
					$("#well .miniRound").last().append("<br/><code>" + player + " chose Rock</code>");
					break;
				case 'p':
					$("#well .miniRound").last().append("<br/><code>" + player + " chose Paper</code>");
					break;
				case 's':
					$("#well .miniRound").last().append("<br/><code>" + player + " chose Scissors</code>");
					break;
			}
			otherSvgHand = computerChoice();
			switch(otherSvgHand){
				case 'r':
					$("#well .miniRound").last().append("<br/><code>" + opponent + " chose Rock</code>");
					break;
				case 'p':
					$("#well .miniRound").last().append("<br/><code>" + opponent + " chose Paper</code>");
					break;
				case 's':
					$("#well .miniRound").last().append("<br/><code>" + opponent + " chose Scissors</code>");
					break;
			}
			whoWon(choice, otherSvgHand);
			otherSvgHand = returnHand(otherSvgHand);
			$("#gameModal .modal-body .playArea #rightHand").html(otherSvgHand);
			$(".playArea #rightHand").css("fill", players[0].getRHandColor());
		break;
		case 1:
			switch(b){
				case 1:
					p1Chose = true;
					p1Choice = choice;
					svgHand = returnHand(p1Choice);
				break;
				case 2:
					p2Chose = true;
					p2Choice = choice;
					otherSvgHand = returnHand(p2Choice);
				break;
			}
			if(p1Chose && p2Chose){
				var fill1;
				var fill2;
				rpsHandTimeline.stop();
				$("#gameModal .modal-body #leftButtonGroup .rock").attr("onclick","null");
				$("#gameModal .modal-body #leftButtonGroup .paper").attr("onclick","null");
				$("#gameModal .modal-body #leftButtonGroup .scissors").attr("onclick","null");
				$("#gameModal .modal-body #rightButtonGroup .rock").attr("onclick","null");
				$("#gameModal .modal-body #rightButtonGroup .paper").attr("onclick","null");
				$("#gameModal .modal-body #rightButtonGroup .scissors").attr("onclick","null");
				$("#gameModal .modal-body .playArea #leftHand").html(svgHand);
				$("#gameModal .modal-body .playArea #rightHand").html(otherSvgHand);
				switch(p1Choice){
					case 'r':
						switch(p2Choice){
							case 'r':
								$("#well .miniRound").last().append("<br/><code>" + player + " chose Rock</code>");
								$("#well .miniRound").last().append("<br/><code>" + opponent + " chose Rock</code>");
								fill2 = players[2].getRHandColor();
							break;
							case 'p':
								$("#well .miniRound").last().append("<br/><code>" + player + " chose Rock</code>");
								$("#well .miniRound").last().append("<br/><code>" + opponent + " chose Paper</code");
								fill2 = players[2].getPHandColor();
							break;
							case 's':
								$("#well .miniRound").last().append("<br/><code>" + player + " chose Rock</code>");
								$("#well .miniRound").last().append("<br/><code>" + opponent + " chose Scissors</code");
								fill2 = players[2].getSHandColor();
							break;
						}
						fill1 = players[1].getRHandColor();
					break;
					case 'p':
						switch(p2Choice){
							case 'r':
								$("#well .miniRound").last().append("<br/><code>" + player + " chose Paper</code>");
								$("#well .miniRound").last().append("<br/><code>" + opponent + " chose Rock</code>");
								fill2 = players[2].getRHandColor();
							break;
							case 'p':
								$("#well .miniRound").last().append("<br/><code>" + player + " chose Paper</code>");
								$("#well .miniRound").last().append("<br/><code>" + opponent + " chose Paper</code>");
								fill2 = players[2].getPHandColor();
							break;
							case 's':
								$("#well .miniRound").last().append("<br/><code>" + player + " chose Paper</code>");
								$("#well .miniRound").last().append("<br/><code>" + opponent + " chose Scissors</code");
								fill2 = players[2].getSHandColor();
							break;
						}
						fill1 = players[1].getPHandColor();
					break;
					case 's':
						switch(p2Choice){
							case 'r':
								$("#well .miniRound").last().append("<br/><code>" + player + " chose Scissors</code>");
								$("#well .miniRound").last().append("<br/><code>" + opponent + " chose Rock</code>");
								fill2 = players[2].getRHandColor();
							break;
							case 'p':
								$("#well .miniRound").last().append("<br/><code>" + player + " chose Scissors</code>");
								$("#well .miniRound").last().append("<br/><code>" + opponent + " chose Paper</code>");
								fill2 = players[2].getPHandColor();
							break;
							case 's':
								$("#well .miniRound").last().append("<br/><code>" + player + " chose Scissors</code>");
								$("#well .miniRound").last().append("<br/><code>" + opponent + " chose Scissors</code");
								fill2 = players[2].getSHandColor();
							break;
						}
						fill1 = players[1].getSHandColor();
					break;
				}
				whoWon(p1Choice, p2Choice);
			}
		break;
	}
	TweenMax.to($('#leftHand'), .3, {ease: Power1.easeIn, rotation: 84, fill: fill1});
	TweenMax.to($('#rightHand'), .3, {scaleY: -1, rotation: 90, ease: Power1.easeIn, fill: fill2});
};

var play = function(){
	$(".roundHolder .btn").removeAttr("onclick");
	confirm();
};

var clocks = [];
var clockNum = 0;
var holderCounter = 0;
var gameDetails = function(){
	well.append("<div id='clockHolder" + clockNum + "' class='row'><div class='col-md-6 p3'><h2>" + player + "</h2><div class='col-md-4'></div><div class='col-md-4'></div><div class='col-md-4'></div></div><div class='col-md-6 o3'><h2>" + opponent + "</h2><div class='col-md-4'></div><div class='col-md-4'></div><div class='col-md-4'></div></div></div>");
	for(i = 0; i < 6; i++){
		clocks.push("temp");
		switch(i){
			case 0:
				$("#clockHolder" + holderCounter + " .p3 .col-md-4:nth-of-type(" + (i + 1) + ")").attr("id","clock" + clockNum).css("display","inline-block").addClass("clock");
				clocks[clockNum] = new FlipClock($("#clock" + clockNum), p1Array[0], {
					clockFace: 'Counter'
					
				});
			break;
			case 1:
				$("#clockHolder" + holderCounter + " .p3 .col-md-4:nth-of-type(" + (i + 1) + ")").attr("id","clock" + clockNum).css("display","inline-block");
				clocks[clockNum] = new FlipClock($("#clock" + clockNum), p1Array[1], {
					clockFace: 'Counter'
					
				});
			break;
			case 2:
				$("#clockHolder" + holderCounter + " .p3 .col-md-4:nth-of-type(" + (i + 1) + ")").attr("id","clock" + clockNum).css("display","inline-block");
				clocks[clockNum] = new FlipClock($("#clock" + clockNum), p1Array[2], {
					clockFace: 'Counter'
					
				});
			break;
			case 3:
				$("#clockHolder" + holderCounter + " .o3 .col-md-4:nth-of-type(" + (i + 1) + ")").attr("id","clock" + clockNum).css("display","inline-block");
				clocks[clockNum] = new FlipClock($("#clock" + clockNum), p2Array[0], {
					clockFace: 'Counter'
					
				});
			break;
			case 4:
				$("#clockHolder" + holderCounter + " .o3 .col-md-4:nth-of-type(" + (i + 1) + ")").attr("id","clock" + clockNum).css("display","inline-block");
				clocks[clockNum] = new FlipClock($("#clock" + clockNum), p2Array[1], {
					clockFace: 'Counter'
					
				});
			break;
			case 5:
				$("#clockHolder" + holderCounter + " .o3 .col-md-4:nth-of-type(" + (i + 1) + ")").attr("id","clock" + clockNum).css("display","inline-block");
				clocks[clockNum] = new FlipClock($("#clock" + clockNum), p2Array[2], {
					clockFace: 'Counter'
				});
			break;
		}
		clockNum++;
	}
};
	
//FUTURE Complete this function
var endGame = function(){
	if(runnning === true){
		alert("The Game Has Ended");
		running = false;
		TweenMax.to($("#cBtn"), 1, {
			ease: Power4.easeIn, 
			opacity: 0, 
			display: "none"
		});
		gameDetails();
	}
};

var updateChart = function(){
	$(".usage #computer svg").first().remove();
	$(".usage #player1 svg").first().remove();
	$(".usage #player2 svg").first().remove();
	
	$("#computer .doughnutSummary").first().remove();
	$("#player1 .doughnutSummary").first().remove();
	$("#player2 .doughnutSummary").first().remove();
	
	$(".doughNutTip").remove();
	
	$("#computer").drawDoughnutChart([
		{title: "Rocks", value : players[0].getRocks(), color:  players[0].getColor1()},
		{title: "Papers", value: players[0].getPapers(), color: players[0].getColor2()},
		{title: "Scissors", value: players[0].getScissors(), color: players[0].getColor3()}
	]);
	$("#player1").drawDoughnutChart([
		{title: "Rocks", value : players[1].getRocks(), color: players[1].getColor1()},
		{title: "Papers", value: players[1].getPapers(), color: players[1].getColor2()},
		{title: "Scissors", value: players[1].getScissors(), color: players[1].getColor3()}
	]);
	$("#player2").drawDoughnutChart([
		{title: "Rocks", value : players[2].getRocks(), color: players[2].getColor1()},
		{title: "Papers", value: players[2].getPapers(), color: players[2].getColor2()},
		{title: "Scissors", value: players[2].getScissors(), color: players[2].getColor3()}
	]);
	
	$(".doughnutSummary").removeAttr("style");
};

refreshStats();

var clearWell = function(){
	well.html("");
	$('html, body').animate({scrollTop : 0},800);
	clockNum = 0;
	
};

//Example of searching for a keypress
/*
$(document).keypress(function(e) {
	if(e.which == 13) {
       alert('You pressed enter!');
   	}
	e.stopPropagation(); 
});

$(document).keypress(function(event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13') {
        alert('You pressed a "enter" key in somewhere');    
    }
	event.stopPropagation();
});
*/

// Old Browser Console Based Rock, Paper, Scissors game below if you'd like to play it & know how too :p
/*
var maxPlay = 0;
var numOfTies = 0;
var numOfRounds = 0;

var userPoints = 0;
var userChoice = "";

var computerPoints = 0;
var computerChoice = "";

var playerName = "";

playerName = prompt("Please enter your name.");

confirm("Are you ready to play Rock, Paper, Scissors " + playerName + ". If you are click OK then the game will begin. THERE WILL ONLY BE THREE ROUNDS UNLESS YOU TIE WITH THE COMPUTER WHICH WILL BEGIN TIEBREAKER MODE");

var choose = function()
{
    var userChoice = prompt("Do you choose rock, paper or scissors?");
    console.log(playerName + " has chosen " + userChoice + ".");
    
    var computerChoice = Math.random();
    if (computerChoice < 0.34) 
    {
        computerChoice = "rock";
        console.log("The computer chose " + computerChoice + ".");
    } 

    else if(computerChoice <= 0.67) 
    {
        computerChoice = "paper";
        console.log("The computer choose " + computerChoice + ".");
    } 

    else 
    {
        computerChoice = "scissors";
        console.log("The computer choose " + computerChoice + ".");
    }
    compare(userChoice, computerChoice);
};

var compare = function (choice1, choice2)
{
    if(choice1 === "Rock" || choice1 === "R"|| choice1 === "r")
    {
       choice1 = "rock"; 
    }
    else if(choice1 === "Paper" || choice1 === "P"|| choice1 === "p")
    {
        choice1 = "paper";
    }
    else if(choice1 === "Scissors"  || choice1 === "S"|| choice1 === "s")
    {
        choice1 = "scissors";
    }
    else if(choice1 === "Check"||choice1 === "check")
    {
        console.log("Your current score is: " + userPoints + ".");
        console.log("The computers current score is: " + computerPoints + ".");
    }
    if(choice1 === choice2)
    {
        numOfTies += 1;
        numOfRounds += 1;
        console.log("The result is a tie!");
    }
    
    else if(choice1 === "rock")
    {
        if(choice2 === "scissors")
        {
            userPoints += 1;
            numOfRounds += 1;
            console.log("Rock Wins!");
        }
        else
        {
            numOfRounds += 1;
            computerPoints += 1;
            console.log("Paper Wins!");
        }
    }
    
    else if(choice1 === "paper")
    {
        if(choice2 === "rock")
        {
            userPoints += 1;
            numOfRounds += 1;
            console.log("Paper Wins!");
        }
        else
        {
            numOfRounds += 1;
            computerPoints += 1;
            console.log("Scissors Wins!");
        }
    }
    
    else if(choice1 === "scissors")
    {
        if(choice2 === "rock")
        {
            numOfRounds += 1;
            computerPoints += 1;
            console.log("Rock Wins!");
        }
        else
        {
            userPoints += 1;
            numOfRounds += 1;
            console.log("Scissors Wins!");
        }
    }
};

var tieBreaker = function(number)
{
    console.log("Tie Breaker Mode has begun!");
    maxPlay++;
    confirm("There were this many ties: " + numOfTies + ". So click OK to start Tie Breaker Mode");
    var howMany = number;
    numOfTies = 0;
    numOfRounds = 0;
    
    if(howMany === 1)
    {
        choose();
        if(((numOfRounds === 3) && (numOfTies > 0)) && (maxPlay!=3))
        {
            if(numOfTies === 1)
            {
                confirm("Tie Breaker mode will continue because of " + numOfTies + " tie!");
            }
            else
            {
                confirm("Tie Breaker mode will continue because of " + numOfTies + " ties!");
            }
            tieBreaker(numOfTies);
        }
    }
    
    else if(howMany === 2)
    {
        choose();
        choose();
        if(((numOfRounds === 3) && (numOfTies > 0)) && (maxPlay!=3))
        {
            if(numOfTies === 1)
            {
                confirm("Tie Breaker mode will continue because of " + numOfTies + " tie!");
            }
            else
            {
                confirm("Tie Breaker mode will continue because of " + numOfTies + " ties!");
            }
            tieBreaker(numOfTies);
        }
    }
    
    else if(howMany === 3)
    {
        choose();
        choose();
        choose();
        if(((numOfRounds === 3) && (numOfTies > 0)) && (maxPlay!=3))
        {
            if(numOfTies === 1)
            {
                confirm("Tie Breaker mode will continue because of " + numOfTies + " tie!");
            }
            else
            {
                confirm("Tie Breaker mode will continue because of " + numOfTies + " ties!");
            }
            tieBreaker(numOfTies);
        }
    }
};

var finalScore = function()
{
    if((userPoints === 1) && (computerPoints === 1))
    {
        confirm("The game has ended. " + playerName + "'s final score is " + userPoints + " point. The computer scored " + computerPoints + " point.");
        console.log("The game has ended. " + playerName + "'s final score is " + userPoints + " point. The computer scored " + computerPoints + " point.");
    }
    
    else if((userPoints != 1) && (computerPoints === 1))
    {
        confirm("The game has ended. " + playerName + "'s final score is " + userPoints + " points. The computer scored " + computerPoints + " point.");
        console.log("The game has ended. " + playerName + "'s final score is " + userPoints + " point. The computer scored " + computerPoints + " point.");
    }
    
    else if((userPoints === 1) && (computerPoints != 1))
    {
        confirm("The game has ended. " + playerName + "'s final score is " + userPoints + " points. The computer scored " + computerPoints + " point.");
        console.log("The game has ended. " + playerName + "'s final score is " + userPoints + " point. The computer scored " + computerPoints + " point.");
    }
    
    else
    {
        confirm("The game has ended. " + playerName + "'s final score is " + userPoints + " points. The computer scored " + computerPoints + " points.");
        console.log("The game has ended. " + playerName + "'s final score is " + userPoints + " point. The computer scored " + computerPoints + " point.");
    }
};

var play = function()
{
    choose();
    choose();
    choose();
    if((numOfRounds === 3) && (numOfTies > 0))
    {
        confirm("Tie Breaker mode has begun!");
        tieBreaker(numOfTies);
        finalScore();
    }
    
    else
    {
        finalScore();
    }
};

play(); */