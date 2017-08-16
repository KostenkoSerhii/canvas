import sayHello from './lib/sayHello.js';
import Rect from "./rect";
sayHello();

$(document).ready(function(){




	function init(){
		let canvas = document.getElementById('canv'),
		ctx = canvas.getContext("2d"),
		game = new Rect("#000", 0, 0, 480, 320),
		ai = new Rect("#fff", 10, game.height / 2 - 40, 20, 80),
		player = new Rect("#fff", game.width - 30, game.height / 2 - 40, 20, 80),
		ball = new Rect("#fff", 40, game.height / 2 - 10, 20, 20);

		canvas.width = 480;
		canvas.height = 320;
		ai.scores = 0;
		player.scores = 0;

		draw({ctx: ctx, game: game});

	};

	function draw(props) {
		props.game.draw();
		props.ctx.fillStyle = "#000";
		props.ctx.fillRect(0, 0, 480, 320);
	};

	init();















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

