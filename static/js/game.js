//defining board class
function board(grid) {
	this.grid = grid;
	this.setBoard = function() {
		$(".content").append(grid * "<div class="grid"></div>");
	};
}
//exporting board class
exports.board = board;
