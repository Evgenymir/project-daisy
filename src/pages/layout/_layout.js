import $ from 'jquery';

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

export default scrollPage;