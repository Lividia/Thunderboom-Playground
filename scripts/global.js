$(document).ready(function() {
	'use strict';

	var Main = {
		el: {
			menuClose: $('.menu-close'),
			menuOpen: $('.menu-open'),
			menuCloseSlide: $('.menu-close .slide-btn'),
			menuOpenSlide: $('.menu-open .slide-btn')
		},
		init: function (){

			Main.el.menuCloseSlide.click(function (e){
				e.preventDefault();
				Main.el.menuOpen.animate({ left: '+=220' }, 400 ).removeClass('inactive');
				Main.el.menuClose.hide();
			});

			Main.el.menuOpenSlide.click(function (e){
				e.preventDefault();
				Main.el.menuOpen.animate({ left: '-=220' }, 400 ).addClass('inactive');
				Main.el.menuClose.show();
			});

		}

	};

	Main.init();

});