
// splide mount
new Splide( '.splide' ).mount()

function cityImages(country){
fetch("https://www.googleapis.com/customsearch/v1?key=AIzaSyD2Air4HDbFz87RcMILQyWEvWx6cfMmHfU&cx=33a69ec892ee346cb&q=" + country +"&searchType=image&imgSize=medium&alt=json&num=10&start=1")
	.then(function (response) {
		return response.json();
	})
	.then(function (data) {
		console.log(data);
		console.log(data.items[0].link);
		console.log(data.items[1].link);
			$("#img1").attr("src",data.items[0].link)
			$("#img2").attr("src",data.items[1].link)
			$("#img3").attr("src",data.items[2].link)
			$("#img4").attr("src",data.items[3].link)
			$("#img5").attr("src",data.items[4].link)
			$("#img6").attr("src",data.items[5].link)
			$("#img7").attr("src",data.items[6].link)
			$("#img8").attr("src",data.items[7].link)
			$("#img9").attr("src",data.items[8].link)
			$("#img10").attr("src",data.items[9].link)
		
// 		// attributes alt text
// 		// data.items[0].title	
// 		// data.items[0].snippet
// 		// href
// 		// data.items[0].contextlink

	})
	.catch((err) => console.error(err));
}

