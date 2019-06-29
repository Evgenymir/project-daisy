const map = () => {

	ymaps.ready(init);
	let myMap;

	function init () {
	    myMap = new ymaps.Map('map', {
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

export default map;