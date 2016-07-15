$(document).ready(function()
{
	$("body").append('<input id="clickMe" type="button" value="New" onclick="button_press(); return false" />');
	new_grid(16);
});

function button_press()
{
	$(".cell").css({
		"background": "white"}
	);
	var square_quantity = prompt("How many squares per side to make the new grid?");
	new_grid(square_quantity);
}

function new_grid(square_quantity)
{
	$("#wrapper").remove();
	$("body").append('<div id="wrapper"></div>');
	var endrow = "";
	for(var i=0;i<square_quantity;i++)
	{
		$("#wrapper").append('<div id=' + i + ' class="row"></div>');
		for(var j=0;j<square_quantity;j++)
		{
			$(".row#"+i).append('<div class="cell"></div>');
		}
	}
	var size = ((960)/square_quantity);
	$(".row").css(
		{"display":"inline-block"}
	);
	$(".cell").css(
		{"border":"1px solid grey", 
		"height" : ""+(size-2), 
		"width" : ""+(size-2),
		"background":"rgb(255,255,255)"}
	);

	$(".cell").mouseenter(function(){
		var stringList = $(this).css("background").split(",");
		
		var r = parseInt(stringList[0].substring(4));
		if(isNaN(r))
		{
			r = parseInt(stringList[0].substring(5));
		}
		var g = parseInt(stringList[1]);
		var b = parseInt(stringList[2]);
		if(r+g+b == 255+255+255)
		{
			$(this).css(
			{"background":"rgb("+Math.floor(Math.random()*255 + 1) + ","
							    +Math.floor(Math.random()*255 + 1) + ","
				                +Math.floor(Math.random()*255 + 1) + ")"}
			);
		}
		else
		{ 
			r-=25;
			g-=25;
			b-=25;
			if(r<0) r=0;
			if(g<0) g=0;
			if(b<0) b=0;
			$(this).css({"background":"rgb("+ r +","+ g +","+ b +")"}
		);
		}
	})
};




