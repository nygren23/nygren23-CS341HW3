//author @ Blake Nygren

submitHandler = function( event ) {
	
	var notes = $.trim($("#orderNotes").val());

    if(notes.includes("vegan")){
        alert("WARNING: the cheesecake you have selected contains dairy");
    } 

    $("#orderForm").hide();
    var formQuantity = $("#quantity").val();
    var formTopping = $("[name=topping]:checked").val();
                    
    var thanks = "<p>Thank you! Your order has been placed</p>";
    var topping = "<p>Topping: " + formTopping + "</p>";
    var quantity = "<p>Quantity: " + formQuantity + "</p>";
    var notes = "<p>Your Notes: " + notes + "</p><br>";
                                   
    $("#image").append(thanks, topping, quantity, notes);
}



$(function(){
    $("#submitButton").click(submitHandler);
});
