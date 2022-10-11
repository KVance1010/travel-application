const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6d830eac78msh362ca88cf8a5f1ap18cc4ajsnb2b4a569553e',
		'X-RapidAPI-Host': 'translated-mymemory---translation-memory.p.rapidapi.com'
	}
};

let textVal = 'chicken'


function genContent(){

}

function runSearch(name){
fetch('https://restcountries.com/v3.1/name/'+name)
	.then(function (response) {
		return response.json();
	})
	.then(function (data) {
		let langOb = data[0].languages
		console.log(data)
		let langArr = Object.values(langOb) 
		let langName = langArr[0]
		langValue = languages[langName]
		// fetch('https://translated-mymemory---translation-memory.p.rapidapi.com/api/get?langpair=en%7C'+langValue+'&q='+textVal+'&mt=1&onlyprivate=0&de=a%40b.c', options)
		// 	.then(function (response) {
		// 		return response.json();
		// 	})
		// 	.then(function (data) {
		// 		console.log(data)
		// 	})
		// 	.catch(err => console.error(err));
		genContent()
	})
	.catch(err => console.error(err))

}


const searchResult = document.getElementById('search');

searchResult.addEventListener('keypress', (event) =>{
	if(event.key === "Enter"){
		runSearch(event.target.value);
	}
});