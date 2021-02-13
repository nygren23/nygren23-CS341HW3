//author @ Blake Nygren

monthSelectHandler = function(event) {
	var newMonth = $(this).text();
    $(".dropbtn").text(newMonth);
}


$(function(){
    $(".month").click(monthSelectHandler);
                
});