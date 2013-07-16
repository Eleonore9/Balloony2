function board(width, height) {
	this.width = width;
	this.height = height;
	this.setBoard = function(objectContent) {
		objectContent.css({"backrgound-color": "black", "height" : "10%", "width" : "10%"});
	}
}

exports.board = board;