// import from SimplexNoise 'simplex-noise';
// var SimplexNoise = require('simplex-noise');
// import noise from "./noize";

import Perlin from "./perlin";
let canvas = document.getElementById('mycanvas');
let ctx = canvas.getContext('2d');


// var noisefn =  noise.perlin3;
let time = 0;
ctx.fillStyle = "#000";
let x  = 0
	// ctx.moveTo(time, 300 )
function draw(){
	time++;
	x+=5;
	// if(x >= 2200 ){
	// 	x = time = 0;
	// 	ctx.clearRect(0,0,1000,1000);
	// }else{
	// 	x +=5;
	// }

	// ctx.clearRect(0,0,1000,1000);

	ctx.beginPath();
	ctx.moveTo(x, 300 )
	ctx.lineTo(x, 300 + 50*Math.cos(time))

	ctx.closePath();


	ctx.stroke();
	// window.requestAnimationFrame(draw);

}

draw();
setInterval(draw, 100)