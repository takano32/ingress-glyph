onload = function() {
	draw();
};
function draw() {
	var canvas = document.getElementById('glyph-canvas');
	if ( ! canvas || ! canvas.getContext ) {
		return false;
	}
	var ctx = canvas.getContext('2d');
	var x = 320;
	var y = 240;
	var r = 10;
	ctx.beginPath();
	ctx.arc(x, y, r, Math.PI*2, false);
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	y -= 200;
	ctx.arc(x, y, r, Math.PI*2, false);
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	x -= 100 * Math.sqrt(3)
	y += 100;
	ctx.arc(x, y, r, Math.PI*2, false);
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	y += 200;
	ctx.arc(x, y, r, Math.PI*2, false);
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	x += 100 * Math.sqrt(3)
	y += 100;
	ctx.arc(x, y, r, Math.PI*2, false);
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	x += 100 * Math.sqrt(3)
	y -= 100;
	ctx.arc(x, y, r, Math.PI*2, false);
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	y -= 200;
	ctx.arc(x, y, r, Math.PI*2, false);
	ctx.stroke();
	ctx.closePath();
}

