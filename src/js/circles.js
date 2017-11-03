// import from SimplexNoise 'simplex-noise';
// var SimplexNoise = require('simplex-noise');
// import noise from "./noize";

import Perlin from "./perlin";
let canvas = document.getElementById('mycanvas');
let ctx = canvas.getContext('2d');


// var noisefn =  noise.perlin3;
let time = 0;
let timeReverse = 0

function draw(){
	time++;
	timeReverse--;

	ctx.clearRect(0,0,1000,1000);

	for( let j = 0; j < 10; j++){

		let	color = 'black';
		let r = Perlin(j/1000, j/1000, time);
		console.log(r);

		if(j%2 == 0){
			
			
			color = "white"
			 // color = "rgba("+ Math.ceil(Math.random() * (255 - 0) + 0) +","+ Math.ceil(Math.random() * (255 - 0) + 0) +","+ Math.ceil(Math.random() * (255 - 0) + 0) +",1)";
			};


			ctx.beginPath();

			for (let i = 0; i < 200; i++) {
				let x = 200 + (140 - (j*10*r) +2*Math.sin((i)))*Math.sin(i*2*Math.PI/200 + time*j/1000 );
				let y = 200 + (140 - (j*10*r) +2*Math.sin((i)))*Math.cos(i*2*Math.PI/200 + time*j/1000 );
				ctx.lineTo(x,y);

			// if(j%2 == 0){
			// 	let x = 200 + (140 - (j*10) +2*Math.sin((i)))*Math.sin(i*2*Math.PI/200 + time*j/1000 );
			// 	let y = 200 + (140 - (j*10) +2*Math.sin((i)))*Math.cos(i*2*Math.PI/200 + time*j/1000 );
			// 	ctx.lineTo(x,y);
			// }else{
			// 	let x = 200 + (140 - (j*10) +2*Math.sin((i)))*Math.sin(i*2*Math.PI/200 + timeReverse*j/1000 );
			// 	let y = 200 + (140 - (j*10) +2*Math.sin((i)))*Math.cos(i*2*Math.PI/200 + timeReverse*j/1000 );
			// 	ctx.lineTo(x,y);
			// };


		};
		ctx.fillStyle = color;
		ctx.closePath();
		ctx.fill();
	}


	window.requestAnimationFrame(draw);
}

draw();