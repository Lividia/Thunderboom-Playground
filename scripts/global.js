$(document).ready(function() {
	'use strict';

	var Main = {
		flags: {
			notificationsOpen: false
		},
		el: {
			menuClose: $('.menu-close'),
			menuOpen: $('.menu-open'),
			menuCloseSlide: $('.menu-close .slide-btn'),
			menuOpenSlide: $('.menu-open .slide-btn'),
			bellAlert: $('.notification-alert a'),
			notificationMessagesOpen: $('.notification-messages'),
			notificationsCloseBtn: $('.notification-messages .slide-btn')

		},
		init: function (){

			Main.el.menuCloseSlide.click(function (e){
				e.preventDefault();
				Main.el.menuOpen.animate({ left: '+=240' }, 400 );
				Main.el.menuClose.hide();
			});

			Main.el.menuOpenSlide.click(function (e){
				e.preventDefault();
				Main.el.menuOpen.animate({ left: '-=240' }, 400 );
				Main.el.menuClose.show();
			});

			Main.el.bellAlert.click(function (e){
				e.preventDefault();
				if (!Main.flags.notificationsOpen) {
					Main.flags.notificationsOpen = true;
					Main.el.notificationMessagesOpen.animate({ right: '+=230' }, 400 );
				}else{
					Main.flags.notificationsOpen = false;
					Main.el.notificationMessagesOpen.animate({ right: '-=230' }, 400 );
				}
			});

			Main.el.notificationsCloseBtn.click(function (e){
				e.preventDefault();
				if (Main.flags.notificationsOpen) {
					Main.flags.notificationsOpen = false;
					Main.el.notificationMessagesOpen.animate({ right: '-=230' }, 400 );
				}
			});

		}

	};

	Main.init();

});