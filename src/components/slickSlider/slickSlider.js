import $ from 'jquery';
import slick from 'slick-carousel';

const runSlider = () => {
	
	$('.j-slider').slick({
		speed: 1000,
		infinite: false,
		prevArrow: $('.j-prev'),
		nextArrow: $('.j-next')
	});
};

export default runSlider;