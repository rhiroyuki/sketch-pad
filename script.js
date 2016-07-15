$(document).ready(function()
{
	$("body").append('<table id="wrapper"></table>');
	for(var i=0;i<16;i++)
	{
		$("#wrapper").append('<tr id=' + i + ' class="row">uia</tr>');
		for(var j=0;j<16;j++)
		{
			$(".row#"+i).append('<td class="cell"></td>');
		}
	}
	$(".row").css({"display":"inline-block", "overflow":"hidden", "width" : "100%"});
	$(".cell").css({"border":"1px solid black", "height" : "25px", "width" : "25px"});
	
});