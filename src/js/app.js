import objectFitImages from 'object-fit-images';
import Header from '../pages/layout/_layout.js';
import Burger from '../components/burgerToggle/burgerToggle.js';
import Anchor from '../components/anchor/anchor.js';
import Slick from '../components/slickSlider/slickSlider.js';
import Map from '../components/map/map.js';

window.onload = () => {

	/* Добавление класса шапке при прокрутке страницы */
	const headerItem = document.querySelector('.j-header');
	if(headerItem) {
		Header();
	}

	/* Подключаем клик по бургеру */
	const burgerItem = document.querySelector('.j-burgerToggle');
	if(burgerItem) {
		Burger();
	}

	/* Подключаем якорь */
	const anchorItem = document.querySelector('.j-anchor');
	if(anchorItem) {
		Anchor();
	}

	/* Подключаем слайдер */
	const sliderItem = document.querySelector('.j-slider');
	if(sliderItem) {
		Slick();
	}

	/* Подключаем полифил для свойства object-fill */
	const imageContainer = document.querySelector('.j-portfolio__content');
	if(imageContainer) {
		let images = document.querySelectorAll('.j-image-polyfill');
		objectFitImages(images);
	}

	/* Подключегние карты Яндекс */
	const mapItem = document.querySelector('.j-map');
	if(mapItem) {
		Map();
	}

};