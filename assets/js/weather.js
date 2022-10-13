let backImg;
const weatherPortion =document.querySelector('.weather');

function weatherForecast(){
    fetch("http://api.openweathermap.org/geo/1.0/direct?q="+capitalCity+"&limit=5&appid=239391e5829e93d40ba73fc38797a87d")
        .then(function (res){
            return res.json();
        })
    .then(function(data){
        let lon = data[0].lon;
        let lat = data[0].lat;
        backImg = "https://maps.googleapis.com/maps/api/staticmap?center="+lat+','+lon+"&scale=2&size=900x150&zoom=11&key=AIzaSyBSokTJWEqsYy2vJP9SpktywdnyQXrFzuw"
        console.log(backImg)
        fetch("https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&units=imperial&exclude=minutely,hourly&appid=239391e5829e93d40ba73fc38797a87d")
        .then(function (res){
            return res.json();
        })
        .then(function(data){
            langContent();
            let weatherDiv = document.createElement('div');
            weatherDiv.classList.add('weather-container');
            weatherDiv.setAttribute('id', 'weather');
            let j = 5;
            // for (let i = 0; i < 6; i++, j += 8) {
            //     let card = document.createElement('div');
            //     card.setAttribute('class', 'card');
            //     let date = document.createElement('div');
            //     date.textContent = moment().add(i, 'days').format('L');
            //     let weatherIcon = document.createElement('img');
            //     weatherIcon.setAttribute('src', 'https://openweathermap.org/img/wn/' + data.list[j].weather[0].icon + '@2x.png');
            //     weatherIcon.setAttribute('alt', 'weatherIcon');
            //     let temp = document.createElement('div');
            //     temp.textContent =
            //         'Temp: ' +
            //         data.list[j].main.temp +
            //         ' ' +
            //         String.fromCharCode(176) +
            //         'F';
            //     let wind = document.createElement('div');
            //     wind.textContent = 'Wind: ' + data.list[j].wind.speed + ' MPH';
            //     let humidity = document.createElement('div');
            //     humidity.textContent = 'Humidity: ' + data.list[j].main.humidity;
        
            //     card.appendChild(date);
            //     card.appendChild(weatherIcon);
            //     card.appendChild(temp);
            //     card.appendChild(wind);
            //     card.appendChild(humidity);
            //     cards.appendChild(card);
            //    weatherDiv.append(cards);
            // }}
        }
       
       
        )
    })

    
    
}

// const displayCity = function (cityData, city) {
// 	console.log(cityData, city);
// 	if (city.length === 0) {
// 		repoContainerEl.textContent = 'No content found.';
// 		return;
// 	}
// 	let j = 5;
// 	let child = cards.lastElementChild;
// 	while (child) {
// 		cards.removeChild(child);
// 		child = cards.lastElementChild;
// 	}

// 	for (let i = 0; i < 6; i++, j += 8) {
// 		let card = document.createElement('div');
// 		card.setAttribute('class', 'card');
// 		let date = document.createElement('div');
// 		date.textContent = moment().add(i, 'days').format('L');
// 		let weatherIcon = document.createElement('img');
// 		weatherIcon.setAttribute('src', 'https://openweathermap.org/img/wn/' + cityData.list[j].weather[0].icon + '@2x.png');
// 		weatherIcon.setAttribute('alt', 'weatherIcon');
// 		let temp = document.createElement('div');
// 		temp.textContent =
// 			'Temp: ' +
// 			cityData.list[j].main.temp +
// 			' ' +
// 			String.fromCharCode(176) +
// 			'F';
// 		let wind = document.createElement('div');
// 		wind.textContent = 'Wind: ' + cityData.list[j].wind.speed + ' MPH';
// 		let humidity = document.createElement('div');
// 		humidity.textContent = 'Humidity: ' + cityData.list[j].main.humidity;

// 		card.appendChild(date);
// 		card.appendChild(weatherIcon);
// 		card.appendChild(temp);
// 		card.appendChild(wind);
// 		card.appendChild(humidity);
// 		cards.appendChild(card);
// 	}}