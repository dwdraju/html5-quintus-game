var canvasWidth = 600;
var canvasHeight = 400;

$('#gameCanvas').attr('width',canvasWidth);
$('#gameCanvas').attr('height',canvasWidth);

var keysDown = {};


$('body').bind('keydown',function(e){
	keysDown[e.which]=true;
});

$('body').bind('keyup',function(e){
	keysDown[e.which]=false;
});

var canvas = $('#gameCanvas')[0].getContext('2d');

var image = new Image();
image.src = "img/player.png";

var playerX = ((canvasWidth/2)-(image.width/2));
var playerY = ((canvasHeight/2)-(image.width/2));

var FPS = 30;
setInterval(function(){
	update();
	draw();

},1000/FPS);

function update(){
	//playerX++;
	if(keysDown[37]){
		playerX -= 10;
	}
	if(keysDown[38]){
		playerY -= 10;
	}
	if(keysDown[39]){
		playerX += 10;
	}
	if(keysDown[40]){
		playerY += 10;
	}
	playerX = clamp(playerX, 0, canvasWidth-image.width);
	playerY = clamp(playerY, 0, canvasHeight-image.height);
}
 
function clamp(x, min, max){
	return x < min ? min : (x > max ? max:x);
} 

function draw(){
	console.log('draw');
	canvas.clearRect(0, 0, canvasWidth, canvasHeight);
	canvas.strokeRect(0,0,canvasWidth,canvasHeight);
	canvas.drawImage(image,playerX, playerY);

} 

/* $(image).load(function(){
}) */
