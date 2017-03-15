var menu = document.querySelector(".menu");
var col3 = document.querySelector(".espace");
var col1 = document.querySelector(".ci");
var col2 = document.querySelector(".ci2");

function scrolled(){
	var windowHeight = document.body.clientHeight,
		currentScroll = document.body.scrollTop || document.documentElement.scrollTop;
		
	if (currentScroll - 64 >= menu.offsetHeight) {
		menu.className = "row menu fixed";
		col3.className = "col-xs-1 espace";
		col1.className = "col-xs-1 ci";
		col2.className = "col-xs-2 ci";
	} else {
		menu.className = "row menu";
		col3.className = "col-xs-3 espace";
		col1.className = "col-xs-0 ci none";
		col2.className = "col-xs-0 ci none";
	}
	/*menu.className = (currentScroll - 64 >= //windowHeight - //menu.offsetHeight) ? "row menu fixed" : "row menu";
	col3.className = (currentScroll - 60 >= //windowHeight - //menu.offsetHeight) ? "col-xs-3 none" : "col-xs-3";
	col6.className = (currentScroll - 60 >= //windowHeight - //menu.offsetHeight) ? "col-xs-6" : "col-xs-6 none";*/
}

addEventListener("scroll", scrolled, false);
