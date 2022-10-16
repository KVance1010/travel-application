let backImg;
const weatherDiv = document.querySelector('.weather');

// fetch the weather url
const weatherForecast = function (city) {
	const apiKey = 'c28fc1b364c90425efe5f07076264d92';
	const baseUrl = 'https://api.openweathermap.org/data/2.5/forecast?';
	const apiUrl = baseUrl + 'q=' + city + '&appid=' + apiKey;
	const currentForecast = 'https://api.openweathermap.org/data/2.5/weather?';

	let child = weatherDiv.lastElementChild;
	while (child) {
		weatherDiv.removeChild(child);
		child = weatherDiv.lastElementChild;
	}
	fetch(apiUrl)
		.then(function (response) {
			if (response.ok) {
				response.json().then(function (cityData) {
					let lon = cityData.city.coord.lon;
					let lat = cityData.city.coord.lat;
					backImg =
						'https://maps.googleapis.com/maps/api/staticmap?center=' +
						lat +
						',' +
						lon +
						'&scale=2&size=150x150&zoom=7&key=AIzaSyBSokTJWEqsYy2vJP9SpktywdnyQXrFzuw';
						console.log(backImg)
					let lonLatURL =
						'lat=' + lat + '&lon=' + lon + '&units=imperial&appid=' + apiKey;
					fetch(currentForecast + lonLatURL).then(function (response) {
						if (response.ok) {
                            langContent();
							response.json().then(function (cityData) {
								let card = document.createElement('div');
								card.setAttribute('class', 'card');
								let date = document.createElement('div');
								date.textContent = moment().add(0, 'days').format('L');
								let weatherIcon = document.createElement('img');
								weatherIcon.setAttribute(
									'src',
									'https://openweathermap.org/img/wn/' +
										cityData.weather[0].icon +
										'@2x.png'
								);
								weatherIcon.setAttribute('alt', 'weatherIcon');
								let temp = document.createElement('div');
								temp.textContent =
									'Temp: ' +
									cityData.main.temp +
									' ' +
									String.fromCharCode(176) +
									'F';
								let wind = document.createElement('div');
								wind.textContent =
									'Wind: ' + cityData.wind.speed + ' MPH';
								let humidity = document.createElement('div');
								humidity.textContent =
									'Humidity: ' + cityData.main.humidity;

								card.appendChild(date);
								card.appendChild(weatherIcon);
								card.appendChild(temp);
								card.appendChild(wind);
								card.appendChild(humidity);
								weatherDiv.append(card);
							});
						} else {
// TODO: need to add an alert of some sort alert('Error: ' + response.statusText);
						}
						fetch(baseUrl + lonLatURL).then(function (response) {
							if (response.ok) {
								response.json().then(function (cityData) {
									displayDaysTwoToSix(cityData);
								});
							} else {
// TODO: need to add an alert of some sort alert('Error: ' + response.statusText);
							}
						});
					});
				});
			} else {
// TODO: need to add an alert of some sort alert alert('Error: ' + response.statusText);
			}
		})
		.catch(function (error) {
// TODO: need to add an alert of some sort alert alert('Unable to connect' + error.message);
		});
};

// Displays day 2-6 of the forecast to the html
const displayDaysTwoToSix = function (cityData) {
	let j = 5;
	for (let i = 1; i < 6; i++, j += 8) {
		let card = document.createElement('div');
		card.setAttribute('class', 'card');
		let date = document.createElement('div');
		date.textContent = moment().add(i, 'days').format('L');
		let weatherIcon = document.createElement('img');
		weatherIcon.setAttribute(
			'src',
			'https://openweathermap.org/img/wn/' +
				cityData.list[j].weather[0].icon +
				'@2x.png'
		);
		weatherIcon.setAttribute('alt', 'weatherIcon');
		let temp = document.createElement('div');
		temp.textContent =
			'Temp: ' +
			cityData.list[j].main.temp +
			' ' +
			String.fromCharCode(176) +
			'F';
		let wind = document.createElement('div');
		wind.textContent = 'Wind: ' + cityData.list[j].wind.speed + ' MPH';
		let humidity = document.createElement('div');
		humidity.textContent = 'Humidity: ' + cityData.list[j].main.humidity;

		card.appendChild(date);
		card.appendChild(weatherIcon);
		card.appendChild(temp);
		card.appendChild(wind);
		card.appendChild(humidity);
		weatherDiv.append(card);
	}
};
