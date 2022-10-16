
import '@splidejs/splide/css';

function cityImages(country){
fetch("https://www.googleapis.com/customsearch/v1?key=AIzaSyD2Air4HDbFz87RcMILQyWEvWx6cfMmHfU&cx=33a69ec892ee346cb&q=" + country +"&searchType=image&imgSize=medium&alt=json&num=10&start=1")
	.then(function (response) {
		return response.json();
	})
	.then(function (data) {
		console.log(data);
		console.log(data.items[0].link);
		
		// attributes alt text
		// data.items[0].title	
		// data.items[0].snippet
		// href
		// data.items[0].contextlink

	})
	.catch((err) => console.error(err));
}

