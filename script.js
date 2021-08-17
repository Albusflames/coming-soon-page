let hero = document.querySelector('.hero');
let winWidth = window.innerWidth;
	if ( winWidth >= 700) {
		hero.src = 'images/hero-desktop.jpg';
		let logo = document.querySelector('.logo');
		let large = document.querySelector('.large');
		let div = document.querySelector('div');
		div.insertBefore(logo, large);
	}
	else {
		hero.src = 'images/hero-mobile.jpg';
	}



 window.onresize = function () {
	let winWidth = window.innerWidth;
	if ( winWidth >= 700) {
		hero.src = 'images/hero-desktop.jpg';
		let logo = document.querySelector('.logo');
		let large = document.querySelector('.large');
		let div = document.querySelector('div');
		div.insertBefore(logo, large);
	}
	else {
		hero.src = 'images/hero-mobile.jpg';
		logo = document.querySelector('.logo');
		let body = document.querySelector('body');
		let main = document.querySelector('main');
		body.insertBefore(logo, main);
	}
	}