$(document).ready(function() {
    var balloony = $('.balloony');
    var position = balloony.position();
    $(document).keydown(function(key) {
    	// Use keys to move Ballony around
        switch(parseInt(key.which,10)) {
            case 76:
    		if(position.left === 580 && position.top === 320) {
	        	$('.balloony, .cloud.first').animate({left: "-=100px"}, 'slow');
		} else {   
                $('.balloony').animate({left: "-=100px"}, 'slow');}
		break;
	    case 68:
		$('.balloony').animate({top: "+=100px"}, 'slow');
		break;
	    case 85:
		$('.balloony').animate({top: "-=100px"}, 'slow');
		break;
	    case 82:
    		if(position.left === 580 && position.top === 320) {
		    $('.balloony, .cloud.first').animate({left: "+=100px"}, 'slow');
		} else {   
		$('.balloony').animate({left: "+=100px"}, 'slow');}
		break;
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
