import sayHello from './lib/sayHello.js';
import Rect from "./rect";
import game from "./game";
sayHello();

$(document).ready(function(){
// game();

	// let canvas = document.getElementById('canv'),
	// ctx = canvas.getContext("2d"),
	// game = new Rect("#000", 0, 0, 480, 320),
	// ai = new Rect("#fff", 10, game.height / 2 - 40, 20, 80),
	// player = new Rect("#fff", game.width - 30, game.height / 2 - 40, 20, 80),
	// ball = new Rect("#fff", 40, game.height / 2 - 10, 20, 20);

	// function init(){

	// 	canvas.width = 480;
	// 	canvas.height = 320;
	// 	ai.scores = 0;
	// 	player.scores = 0;
	// 	draw();

	// };

	// function draw() {
	// 	game.draw(ctx);
	// 	ctx.font = 'bold 128px courier';
	// 	ctx.textAlign = 'center';
	// 	ctx.textBaseline = 'top';
	// 	ctx.fillStyle = "#ccc";
	// 	ctx.fillText(ai.scores, 100, 0);
	// 	ctx.fillText(player.scores, game.width-100, 0);

	// 	for (var i = 10; i < game.height; i += 45){
	// 		ctx.fillStyle = "#ccc";
	// 		ctx.fillRect(game.width/2 - 10, i, 20, 30);
	// 	};

	// 	ai.draw(ctx); // рисуем левого игрока
 //    player.draw(ctx); // правого игрока
 //    ball.draw(ctx); // шарик
 //  };

 //  init();






//  let canvas = document.getElementById('canv2'),
//  ctx = canvas.getContext("2d");
//  canvas.width = 1000;
//  canvas.height = 500;
//  ctx.fillStyle = "#000"; 
//  ctx.fillRect(0,0,canvas.width,  canvas.height); 


//  let particles = []; 
//  function loop() { 
//  	createParticles(); 
//  	updateParticles(); 
//  	killParticles(); 
//  	drawParticles(); 
//  	requestAnimationFrame(loop)
//  } 
//  requestAnimationFrame(loop);

//  function createParticles() { 
//   // добавляем частицу, если их меньше 100
//   if(particles.length < 100) { 
//   	particles.push({ 
//       x: -300+Math.random()*canvas.width, // между 0 и шириной холста
//       y: 0, 
//       speed: 2+Math.random()*3, // между 2 и 5 
//       radius: 5+Math.random()*5, // между 5 и 10
//       color: "white", 
//     }); 
//   } 
// };
// function updateParticles() { 
// 	for(var i in particles) { 
// 		var part = particles[i]; 
// 		part.y += part.speed; 
// 		part.x += part.speed; 
// 	} 
// };

// function killParticles() { 
// 	for(var i in particles) { 
// 		var part = particles[i]; 
// 		if(part.y > canvas.height || part.x > canvas.width) { 
// 			part.y = 0; 
// 			part.x = -300+Math.random()*canvas.width; 
// 		} 
// 	} 
// };

// function drawParticles() { 
// 	ctx.fillStyle = "black"; 
// 	ctx.fillRect(0,0,canvas.width,canvas.height); 
// 	for(var i in particles) { 
// 		var part = particles[i]; 
// 		ctx.beginPath(); 
// 		ctx.arc(part.x,part.y, part.radius, 0, Math.PI*2); 
// 		ctx.closePath(); 
// 		ctx.fillStyle = part.color; 
// 		ctx.fill(); 
// 	} 
// };













	//let img = new Image();
	//let drawImg = () => ctx.drawImage(img, 0, 80, 700, 500, );
	//img.src = ("http://i2.cdn.cnn.com/cnnnext/dam/assets/161021133655-img-worlds-velociraptor-super-169.jpg");
	//img.onload = drawImg


	//let draw = (x = 0,y = 0) => {
	//	ctx.beginPath(); 
	//	ctx.moveTo(x,y);
	//	ctx.lineTo(100,95);
	//	ctx.lineTo(110,25);
	//	// ctx.closePath();
	//	ctx.fill(); 
	//};

	//draw(70,30)
	//ready


	var canvas = document.getElementById('mycanvas');
	var context = canvas.getContext('2d');


	var time = 0;
	function draw(){
		time++;

		context.clearRect(0,0,600,600);

		context.beginPath();
		for (var n = 0; n < 200; n++) {
			var x = 200 + (140+2*Math.sin((n+5)/1.38))*Math.sin(n*2*Math.PI/200 + time/290 );
			var y = 200 + (140+2*Math.sin((n+5)/1.38))*Math.cos(n*2*Math.PI/200 + time/290 );
			context.lineTo(x,y);
		}
		context.fillStyle = 'black';
		context.closePath();
		context.stroke();
		context.fill();

		// context.beginPath();
		// for (var m = 0; m < 200; m++) {

		// 	var x = 200 + (135+3*Math.sin(m/1.38))*Math.sin(m*2*Math.PI/200 + time/290 );
		// 	var y = 200 + (135+3*Math.sin(m/1.38))*Math.cos(m*2*Math.PI/200 + time/290 );
		// 	context.lineTo(x,y);
		// }
		// context.fillStyle = 'white';
		// context.closePath();
		// context.stroke();
		// context.fill();


		// context.beginPath();
		// for (var t = 0; t < 200; t++) {
		// 	var x = 200 + (125+2*Math.sin((t+5)/1.38))*Math.sin(t*2*Math.PI/200 + time/270 );
		// 	var y = 200 + (125+2*Math.sin((t+5)/1.38))*Math.cos(t*2*Math.PI/200 + time/270 );
		// 	context.lineTo(x,y);
		// }
		// context.fillStyle = 'black';
		// context.closePath();
		// context.stroke();
		// context.fill();

		// context.beginPath();
		// for (var u = 0; u < 200; u++) {

		// 	var x = 200 + (120+3*Math.sin(u/1.38))*Math.sin(u*2*Math.PI/200 + time/270 );
		// 	var y = 200 + (120+3*Math.sin(u/1.38))*Math.cos(u*2*Math.PI/200 + time/270 );
		// 	context.lineTo(x,y);
		// }
		// context.fillStyle = 'white';
		// context.closePath();
		// context.stroke();
		// context.fill();


		// context.beginPath();
		// for (var r = 0; r < 200; r++) {
		// 	var x = 200 + (110+2*Math.sin((r+5)/1.59))*Math.sin(r*2*Math.PI/200 + time/250 );
		// 	var y = 200 + (110+2*Math.sin((r+5)/1.59))*Math.cos(r*2*Math.PI/200 + time/250 );
		// 	context.lineTo(x,y);
		// }
		// context.fillStyle = 'black';
		// context.closePath();
		// context.stroke();
		// context.fill();

		// context.beginPath();
		// for (var k = 0; k < 200; k++) {

		// 	var x = 200 + (105+3*Math.sin(k/1.59))*Math.sin(k*2*Math.PI/200 + time/250 );
		// 	var y = 200 + (105+3*Math.sin(k/1.59))*Math.cos(k*2*Math.PI/200 + time/250 );
		// 	context.lineTo(x,y);
		// }
		// context.fillStyle = 'white';
		// context.closePath();
		// context.stroke();
		// context.fill();


		// context.beginPath();
		// for (var j = 0; j < 200; j++) {
		// 	var x = 200 + (95+2*Math.sin((j+6)/1.99))*Math.sin(j*2*Math.PI/200 + time/230 );
		// 	var y = 200 + (95+2*Math.sin((j+6)/1.99))*Math.cos(j*2*Math.PI/200 + time/230 );
		// 	context.lineTo(x,y);
		// }
		// context.fillStyle = 'black';
		// context.closePath();
		// context.stroke();
		// context.fill();

		// context.beginPath();
		// for (var i = 0; i < 200; i++) {

		// 	var x = 200 + (90+3*Math.sin(i/1.99))*Math.sin(i*2*Math.PI/200 + time/230 );
		// 	var y = 200 + (90+3*Math.sin(i/1.99))*Math.cos(i*2*Math.PI/200 + time/230 );
		// 	context.lineTo(x,y);
		// }
		// context.fillStyle = 'white';
		// context.closePath();
		// context.stroke();
		// context.fill();


		// context.beginPath();
		// for (var q = 0; q < 200; q++) {
		// 	var x = 200 + (80+2*Math.sin((q+6)/1.99))*Math.sin(q*2*Math.PI/200 + time/200 );
		// 	var y = 200 + (80+2*Math.sin((q+6)/1.99))*Math.cos(q*2*Math.PI/200 + time/200 );
		// 	context.lineTo(x,y);
		// }
		// context.fillStyle = 'black';
		// context.closePath();
		// context.stroke();
		// context.fill();

		// context.beginPath();
		// for (var w = 0; w < 200; w++) {
		// 	var x = 200 + (75+3*Math.sin(w/1.99))*Math.sin(w*2*Math.PI/200 + time/200 );
		// 	var y = 200 + (75+3*Math.sin(w/1.99))*Math.cos(w*2*Math.PI/200 + time/200 );
		// 	context.lineTo(x,y);
		// }
		// context.fillStyle = 'white';
		// context.closePath();
		// context.stroke();
		// context.fill();

		// context.beginPath();
		// for (var p = 0; p < 200; p++) {
		// 	var x = 200 + (65+1.5*Math.sin((p+6)/2.28))*Math.sin(p*2*Math.PI/200 + time/170 );
		// 	var y = 200 + (65+1.5*Math.sin((p+6)/2.28))*Math.cos(p*2*Math.PI/200 + time/170 );
		// 	context.lineTo(x,y);
		// }
		// context.fillStyle = 'black';
		// context.closePath();
		// context.stroke();
		// context.fill();

		// context.beginPath();
		// for (var o = 0; o < 200; o++) {
		// 	var x = 200 + (60+2.5*Math.sin(o/2.28))*Math.sin(o*2*Math.PI/200 + time/170 );
		// 	var y = 200 + (60+2.5*Math.sin(o/2.28))*Math.cos(o*2*Math.PI/200 + time/170 );
		// 	context.lineTo(x,y);
		// }
		// context.fillStyle = 'white';
		// context.closePath();
		// context.stroke();
		// context.fill();


		window.requestAnimationFrame(draw);
	}

	draw();



});

