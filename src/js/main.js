// Показываем шапку при прокрутке страницы
const scrollPage = () => {
	const header = document.querySelector('.j-header');

	$(window).scroll(() => {
		if($(window).scrollTop() > 100) {
			header.classList.add('scroll');
		} else {
			header.classList.remove('scroll');
		}

		if($(window).scrollTop() > 150) {
			header.classList.add('scroll-animation-show');
		} else {
			header.classList.remove('scroll-animation-show');
		}
	});
};

// Клик по бургеру
const clickBurger = () => {
	const burger = document.querySelector('.j-burger');
	const mobileMenu = document.querySelector('.j-mobileMenu');
	const overlay = document.querySelector('.j-overlay');

	burger.addEventListener('click', function(e) {
		e.preventDefault();

		let x = window.scrollX;
		let y = window.scrollY;

		this.classList.toggle('active');

		if(this.classList.contains('active')) {
			mobileMenu.classList.add('active');
			overlay.classList.add('active');
			
			window.onscroll = function() {
				window.scrollTo(x, y);
			};

		} else {
			mobileMenu.classList.remove('active');
			overlay.classList.remove('active');
			window.onscroll = function() {};
		}
		
	});
};

// Плавная прокрутка к якорю
const buttonScroll = () => {
	$('.j-nextScreen').on('click', function(e) {
		e.preventDefault();

		let id = $(this).attr('href'),
			top = $(id).offset().top;

		$('body, html').animate({scrollTop: top}, 1000);
	});
};

// Слайдер цитат
const runSlider = () => {
	
	$('.j-slider').slick({
		speed: 1000,
		infinite: false,
		prevArrow: $('.j-prev'),
		nextArrow: $('.j-next')
	});
};

const runMap = () => {
	//карта yandex
	ymaps.ready(init);
	let myMap;

	function init () {
		myMap = new ymaps.Map('j-map', {
		center: [30.2789065790233,-81.40504349999999],
		controls: ['zoomControl'],
		zoom: 11
	}, {
		searchControlProvider: 'yandex#search'
	});

	myMap.behaviors
		.disable('scrollZoom');

	//Добавление меток на карту
	myMap.geoObjects
		.add(new ymaps.Placemark([30.2789065790233,-81.40504349999999], {
	    	balloonContent: '615 4th Ave S, Jacksonville Beach, FL 32250',
	    	iconCaption: 'Daisy'
	  	},{
	  		preset: 'islands#blueCircleDotIconWithCaption'
	  	}))
	}
};

window.onload = () => {
	scrollPage();
	clickBurger();
	buttonScroll();
	runSlider();
	runMap();
}