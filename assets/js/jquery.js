let nameInputEl = $('#search');

// Autocomplete widget for searching a country
$(function () {
  let countryArr = []
  fetch('https://restcountries.com/v3.1/all')
  .then(function (response) {
		return response.json();
	})
	.then(function (data) {
   
    for(i=0;i<250;i++){
    let titles = data[i].name.common
    countryArr.push(titles)
  }})


  $('#search').autocomplete({
    source: countryArr,
  });
});
