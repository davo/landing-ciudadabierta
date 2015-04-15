// Inicializo el plugin OnePageScroll

$(".main").onepage_scroll({
	sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
	easing: "ease",                  // "ease", "linear", "ease-in", "ease-out", "ease-in-out", "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
	animationTime: 500,             // AnimationTime let you define how long each section takes to animate
	pagination: false,                // You can either show or hide the pagination. Toggle true for show, false for hide.
	updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
	beforeMove: function(index) { // This option accepts a callback function. The function will be called before the page moves.

	},  
	afterMove: function(index) { // This option accepts a callback function. The function will be called after the page moves.

	},   
	loop: false,
	keyboard: true,
	responsiveFallback: false,
	direction: "vertical"
});