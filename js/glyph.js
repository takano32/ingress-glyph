var Position = function(x, y) {
	this.x = x;
	this.y = y;
};

var positions = [];

function initializePositions() {
	x = 320;
	y = 240;
	positions[0] = new Position(x, y);

	y -= 200;
	positions[1] = new Position(x, y);

	x -= 100 * Math.sqrt(3)
	y += 100;
	positions[2] = new Position(x, y);

	y += 200;
	positions[3] = new Position(x, y);

	x += 100 * Math.sqrt(3)
	y += 100;
	positions[4] = new Position(x, y);

	x += 100 * Math.sqrt(3)
	y -= 100;
	positions[5] = new Position(x, y);

	y -= 200;
	positions[6] = new Position(x, y);

	x = (positions[0].x + positions[2].x) / 2;
	y = (positions[0].y + positions[2].y) / 2;
	positions[7] = new Position(x, y);

	x = (positions[0].x + positions[3].x) / 2;
	y = (positions[0].y + positions[3].y) / 2;
	positions[8] = new Position(x, y);

	x = (positions[0].x + positions[5].x) / 2;
	y = (positions[0].y + positions[5].y) / 2;
	positions[9] = new Position(x, y);

	x = (positions[0].x + positions[6].x) / 2;
	y = (positions[0].y + positions[6].y) / 2;
	positions[10] = new Position(x, y);
}

initializePositions();

onload = function() {
	drawPoints();
	// drawClearAllGlyph();
	drawChaosGlyph();
	// drawClear();
};

function drawPoints() {
	var canvas = document.getElementById('glyph-canvas');
	if ( ! canvas || ! canvas.getContext ) {
		return false;
	}
	var ctx = canvas.getContext('2d');

	for (var index in positions) {
		var r = 10;
		var pos = positions[index];
		console.log(pos);
		ctx.beginPath();
		ctx.arc(pos.x, pos.y, r, Math.PI*2, false);
		ctx.stroke();
		ctx.closePath();
	}
}

function drawClearAllGlyph() {
	var indexes = [1, 2, 3, 4, 5, 6, 1];
	drawGlyph(indexes);
}

function drawChaosGlyph() {
	var indexes = [3, 2, 1, 6, 10, 0, 8, 4];
	drawGlyph(indexes);
}

function drawGlyph(indexes) {
	var pos = positions;
	var canvas = document.getElementById('glyph-canvas');
	if (!canvas || !canvas.getContext) {
		return false;
	}
	var ctx = canvas.getContext('2d');
	ctx.beginPath();
	var move = false;
	for (var index in indexes) {
		var i = indexes[index];
		if (move == false) {
			ctx.moveTo(pos[i].x, pos[i].y);
			move = true;
		} else {
			ctx.lineTo(pos[i].x, pos[i].y);
		}
	}
	ctx.stroke();
}

function drawClear() {
	var canvas = document.getElementById('glyph-canvas');
	if (!canvas || !canvas.getContext) {
		return false;
	}
	var ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, 640, 480);
}

