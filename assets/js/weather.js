let backImg

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
            let currTemp = data.list[0].main.temp;
            let currHumidity = data.list[0].main.humidity;
            let currWind = data.list[0].wind.speed;
            let currDescription = data.list[0].weather[0].description;
            console.log(currTemp);
            console.log(currHumidity);
            console.log(currWind);
            console.log(currDescription);
        })
    })

    
    
}