$(document).ready(function()
{
	$("body").append('<input id="clickMe" type="button" value="New" onclick="button_press();" />');
	new_grid(16);
});

function button_press()
{
	$(".cell").css("background", "white");
	var teste = prompt("How many squares per side to make the new grid?");
	new_grid(teste);
}

function new_grid(teste)
{
	$("#wrapper").remove();
	$("body").append('<table id="wrapper"></table>');
	var endrow = "";
	for(var i=0;i<teste;i++)
	{
		$("#wrapper").append('<tr id=' + i + ' class="row"></tr>');
		for(var j=0;j<teste;j++)
		{
			$(".row#"+i).append('<td class="cell"></td>');
		}
	}
	var size = 930/teste;
	$(".row").css({"border":"1px solid black","display":"inline-block", "width" : "930x"});
	$(".cell").css({"border":"1px solid black", "height" : ""+size, "width" : ""+size, "padding":"0px 0px 0px 0px"});
	$("#wrapper").css({"width":"1000px"});
	$(".cell").mouseenter(function(){
		$(this).css("background", "black");
	})
};




