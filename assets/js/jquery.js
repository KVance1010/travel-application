let nameInputEl = $('#search');
let repeat = 1;
let countryArr = [];
let zonesArr = []
let codesArr = []
const timezone = 'http://api.timezonedb.com/v2.1/list-time-zone?key=VHTN1OI9A887&format=json';
// Autocomplete widget for searching a country
$(function () {
  fetch('https://restcountries.com/v3.1/all')
  .then(function (response) {
		return response.json();
	})
	.then(function (data) {
    for(let i=0; i<250; i++){
    let titles = data[i].name.common;
    countryArr.push(titles);
  }});

  $('#search').autocomplete({
    source: countryArr,
  });
});

fetch(timezone)
  .then(function (res){
    return res.json();
  })
	.then(function(dateDetails){
		let zones = dateDetails.zones;
		for(let i = 0; i < 424; i++){
      zonesArr.push(zones[i].zoneName)
		}
	})
  fetch(timezone)
  .then(function (res){
    return res.json();
  })
	.then(function(dateDetails){
		let zones = dateDetails.zones;
		for(let i = 0; i < 424; i++){
      codesArr.push(zones[i].countryCode)
		}
	})

// Dialog box if there is an Error
function alertModal(){
  $( "#dialog" ).dialog();
}
function alertModal2(){
  $( "#dialog2" ).dialog();
}

