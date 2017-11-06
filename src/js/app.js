import sayHello from './lib/sayHello.js';
import Rect from "./rect";
import game from "./game";
// import  "./circles";
import  "./sin-cos";
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






});

