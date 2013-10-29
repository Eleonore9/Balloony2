
$(document).ready(function() {
	var board = require('./game');
	var sky = new initClass.board(5);
    console.log(sky);
    var ball_left = $('.balloony').offset().left;
    var ball_top = $('.balloony').offset().top;
    $('span').html("Ballony - left: " + ball_left + ", top: " + ball_top);
    var grid_left = $('.grid.first_grid').offset().left;
    var grid_top = $('.grid.first_grid').offset().top;
    $('span').append(" *** Grid - left: " + grid_left + ", top: " + grid_top);
    $(document).keydown(function(key) {
    	// Use keys to move Ballony around
        switch(parseInt(key.which,10)) {
            case 76:
    		if(ball_left === 480 && ball_top === 320) {
			$('.cloud:nth-of-type(1)').addClass('noanimation');
	        	$('.balloony, .cloud:nth-of-type(1)').animate({left: "-=100px"}, 'slow');
			console.log('Yay! 1st switch case, if condition');
			//$('.balloony, .cloud.first').animate({left: "-=100px"}, 'slow');
			break;
		} else {   
                $('.balloony').animate({left: "-=100px"}, 'slow');
    		var ball_left = $('.balloony').offset().left;
    		var ball_top = $('.balloony').offset().top;
    		$('span').html("Balloony - left: " + ball_left + ", top: " + ball_top);
                $('span').append(" *** Grid - left: " + grid_left + ", top: " + grid_top);
		break;}
	    case 68:
		$('.balloony').animate({top: "+=100px"}, 'slow');
    		var ball_left = $('.balloony').offset().left;
    		var ball_top = $('.balloony').offset().top;
   		$('span').html("Balloony - left: " + ball_left + ", top: " + ball_top);
                $('span').append(" *** Grid - left: " + grid_left + ", top: " + grid_top);
		break;
	    case 85:
		$('.balloony').animate({top: "-=100px"}, 'slow');
    		var ball_left = $('.balloony').offset().left;
    		var ball_top = $('.balloony').offset().top;
    		$('span').html("Balloony - left: " + ball_left + ", top: " + ball_top);
                $('span').append(" *** Grid - left: " + grid_left + ", top: " + grid_top);
		break;
	    case 82:
    		if(ball_left === 480 && ball_top === 320) {
			$('.cloud:nth-of-type(1)').addClass('noanimation');
		        $('.balloony, .cloud:nth-of-type(1)').animate({left: "+=100px"}, 'slow');
			console.log('Yay! 4th switch case, if condition');
		        //$('.balloony, .cloud.first').animate({left: "+=100px"}, 'slow');
			break;
		} else {   
		$('.balloony').animate({left: "+=100px"}, 'slow');
    		var ball_left = $('.balloony').offset().left;
    		var ball_top = $('.balloony').offset().top;
    		$('span').html("Balloony - left: " + ball_left + ", top: " + ball_top);
                $('span').append(" *** Grid - left: " + grid_left + ", top: " + grid_top);
		break;}
	    default:
	        break;
	    }
	});
    // This idea is to move Balloony and the cloud when Balloony is on a cloud
    // initial position is 380 for left and 320 for top
    // after 2 clicks (200 px), Ballony is on the first cloud
    // I then when both to be animated together
    //var balloony = $('.balloony');
    //var position = balloony.position();
    //$('span').text('left: ' + position.left + ', top: ' + position.top);
    //if(position.left === 580 && position.top === 320) {
	//$(document).keydown(function(key) {
	   //switch(parseInt(key.which,10)) {
	        //case 76:
	            //$('.balloony, .cloud.first').animate({left: "-=100px"}, 'slow');
		    //break;
		//case 82:
		    //$('.balloony, .cloud.first').animate({left: "+=100px"}, 'slow');
		    //break;
	     //}
	// });
});
