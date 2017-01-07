var square1=$('#square1');
var square2=$('#square2');
var square3=$('#square3');
var square4=$('#square4');
var square5=$('#square5');
var square6=$('#square6');
var square7=$('#square7');
var square8=$('#square8');
var square9=$('#square9');
// var emptyCell=[square1, square2, square3, square4, square5, square6, square7, square8, square9];

var empty=$('.empty').length;

var computerTurn=function (){
	var computerChoice= Math.floor(Math.random()*$(".empty").length);
	$(".empty").eq(computerChoice).html('O');
	$(".empty").eq(computerChoice).addClass('o');
	$(".empty").eq(computerChoice).addClass('full');
	$(".empty").eq(computerChoice).removeClass('empty');
	// emptyCell.splice(computerChoice, 1);
	checkWinner();
};

var playGame=function(){
	$('td').on('click',function(){
		// var choice= $(this).prop('id');
		if ($(this).hasClass('full')){
			$('#winner').css('display','block');
			$('#winner').html("This cell is taken. Pick another.");
		}else{
			//remove already picked text
			$('#winner').css('display','none');
			$('#winner').html("");
			//add classes and html
			$(this).html('X');
			$(this).addClass('x');
			$(this).removeClass('empty');
			$(this).addClass('full');
			// var choicePlace=emptyCell.indexOf(choice);
			// emptyCell.splice(choicePlace,1);
			computerTurn();
		}
	});
};

var checkWinner = function(){
if(square1.hasClass('x') && square2.hasClass('x') && square3.hasClass('x')|| 
	square4.hasClass('x') && square5.hasClass('x') && square6.hasClass('x')||
	square7.hasClass('x') && square8.hasClass('x') && square9.hasClass('x')||
	square1.hasClass('x') && square4.hasClass('x') && square7.hasClass('x')||
	square2.hasClass('x') && square5.hasClass('x') && square8.hasClass('x')||
	square3.hasClass('x') && square6.hasClass('x') && square9.hasClass('x')||
	square1.hasClass('x') && square5.hasClass('x') && square9.hasClass('x')||
	square3.hasClass('x') && square5.hasClass('x') && square7.hasClass('x')){
	$('#winner').css('display','block');
	$('img').css('display','block');
	$('#winner').html('You Won! Congratulations!');
	$('img').attr('src','http://www.reactiongifs.com/r/h-d.gif');
	$('td').off();
// identify if computer is winner
}else if(square1.hasClass('o') && square2.hasClass('o') && square3.hasClass('o')|| 
	square4.hasClass('o') && square5.hasClass('o') && square6.hasClass('o')||
	square7.hasClass('o') && square8.hasClass('o') && square9.hasClass('o')||
	square1.hasClass('o') && square4.hasClass('o') && square7.hasClass('o')||
	square2.hasClass('o') && square5.hasClass('o') && square8.hasClass('o')||
	square3.hasClass('o') && square6.hasClass('o') && square9.hasClass('o')||
	square1.hasClass('o') && square5.hasClass('o') && square9.hasClass('o')||
	square3.hasClass('o') && square5.hasClass('o') && square7.hasClass('o')){
	$('#winner').css('display','block');
	$('img').css('display','block');
	$('#winner').html("Computer won! It's laughing at you");
	$('img').attr('src','https://media.giphy.com/media/hEMF9k5UHh2U0/giphy.gif');
	$('td').off();//identify draw
}else if($('.empty').length==0){
	$('#winner').css('display','block');
	$('#winner').html("It's a draw. Play again");
	$('td').off();
}
}

var initialize = function(){
	$('td').addClass('empty');
// identify if user is winner
	//user turn
	playGame();
};

$('button').on('click', function(e){
	e.preventDefault();
	$('td').removeClass('full');
	$('td').removeClass('x');
	$('td').removeClass('o');
	$('td').html('');
	$('#winner').html('');
	$('#winner').css('display','none');
	$('img').css('display', 'none');
	initialize();
})

initialize();

