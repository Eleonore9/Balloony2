// $(document).ready(function() {
// 	var game = require('game');
// 	var ballonyGame = new game.board(5, 3);
// 	console.log(ballonyGame.width + " - " + ballonyGame.height);
// 	ballonyGame.setBoard($('.content'));
// })

$(document).ready(function() {
    $(document).keydown(function(key) {
    	// Use keys to move Ballony around
        switch(parseInt(key.which,10)) {
            case 76:
            	// Add a condition on Ballony current position
                $('.balloony').animate({left: "-=200px"}, 'fast');
				break;
			case 68:
				$('.balloony').animate({top: "+=200px"}, 'fast');
				break;
			case 85:
				$('.balloony').animate({top: "-=200px"}, 'fast');
				break;
			case 82:
				$('.balloony').animate({left: "+=200px"}, 'fast');
				break;
			default:
				break;
		}
	});
});