
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
			$("#img1").attr("src",data.items[0].link);
			$("#img1").attr("alt",data.items[0].title);
			$("#href1").attr("alt",data.items[0].contextlink);
			$("#img2").attr("src",data.items[1].link);
			$("#img2").attr("alt",data.items[1].title);
			$("#href2").attr("alt",data.items[1].contextlink);
			$("#img3").attr("src",data.items[2].link);
			$("#img3").attr("alt",data.items[2].title);
			$("#href3").attr("alt",data.items[2].contextlink);
			$("#img4").attr("src",data.items[3].link);
			$("#img4").attr("alt",data.items[3].title);
			$("#href4").attr("alt",data.items[3].contextlink);
			$("#img5").attr("src",data.items[4].link);
			$("#img5").attr("alt",data.items[4].title);
			$("#href5").attr("alt",data.items[4].contextlink);
			$("#img6").attr("src",data.items[5].link);
			$("#img6").attr("alt",data.items[5].title);
			$("#href6").attr("alt",data.items[5].contextlink);
			$("#img7").attr("src",data.items[6].link);
			$("#img7").attr("src",data.items[6].title);
			$("#href7").attr("alt",data.items[6].contextlink);
			$("#img8").attr("src",data.items[7].link);
			$("#img8").attr("src",data.items[7].title);
			$("#href8").attr("alt",data.items[7].contextlink);
			$("#img9").attr("src",data.items[8].link);
			$("#img9").attr("src",data.items[8].title);
			$("#href9").attr("alt",data.items[8].contextlink);
			$("#img10").attr("src",data.items[9].link);
			$("#img10").attr("src",data.items[9].title);
			$("#href10").attr("alt",data.items[9].contextlink);

	})
	.catch((err) => console.error(err));
}

