// Mark as completed when a task is clicked
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//Adds new todo
$("input[type='text']").keypress(function(event){
	if (event.which === 13){
		//Enter Key was pressed
		var new_todo = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + new_todo + "</li>");
	}
});

//Toggle add new todo bar
$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});