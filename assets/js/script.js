let contentInfo = document.querySelector("#content");

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6d830eac78msh362ca88cf8a5f1ap18cc4ajsnb2b4a569553e',
		'X-RapidAPI-Host': 'translated-mymemory---translation-memory.p.rapidapi.com'
	}
};

let textVal = 'chicken'


function genContent(data){
	console.log(data)
	let factsDiv = document.createElement('div')
	factsDiv.classList.add('info-container')
	let flagImg = document.createElement('img')
	flagImg.setAttribute('src',data[0].flags.svg)
	let factContent = document.createElement('div')
	factContent.classList.add('facts')
	let factsHeader = document.createElement('div')
	factsHeader.textContent = 'Facts: ' + data[0].name.common


	let fact1 = document.createElement('div')
	fact1.classList.add('fact-titles')
	fact1.textContent = 'Capital City: '

	let fact1Content = document.createElement('div')
	fact1Content.classList.add('fact-content')
	fact1Content.textContent = data[0].capital[0]

	let fact2 = document.createElement('div')
	fact2.classList.add('fact-titles')
	fact2.textContent = 'Population: '

	let fact2Content = document.createElement('div')
	fact2Content.classList.add('fact-content')
	fact2Content.textContent = data[0].population
	
	let langOb = data[0].languages
	let langArr = Object.values(langOb) 
	let langName = langArr[0]
	
	let fact3 = document.createElement('div')
	fact3.classList.add('fact-titles')
	fact3.textContent = 'Language: '

	let fact3Content = document.createElement('div')
	fact3Content.classList.add('fact-content')
	fact3Content.textContent = langName
	
	let currency = data[0].currencies
    let curArr = Object.values(currency)
    let curValue = curArr[0]
    

	let fact4 = document.createElement('div')
	fact4.classList.add('fact-titles')
	fact4.textContent = 'Currency: '

	let fact4Content = document.createElement('div')
	fact4Content.classList.add('fact-content')
	fact4Content.textContent = curValue.name
	
	factContent.appendChild(factsHeader)
	factContent.appendChild(fact1)
	factContent.appendChild(fact1Content)
	factContent.appendChild(fact2)
	factContent.appendChild(fact2Content)
	factContent.appendChild(fact3)
	factContent.appendChild(fact3Content)
	factContent.appendChild(fact4)
	factContent.appendChild(fact4Content)

	factsDiv.appendChild(flagImg)
	factsDiv.appendChild(factContent)
	contentInfo.appendChild(factsDiv)
}

function runSearch(name){
fetch('https://restcountries.com/v3.1/name/'+name)
	.then(function (response) {
		return response.json();
	})
	.then(function (data) {
		let langOb = data[0].languages
		let langArr = Object.values(langOb) 
		let langName = langArr[0]
		langValue = languages[langName]
		genContent(data)
		// fetch('https://translated-mymemory---translation-memory.p.rapidapi.com/api/get?langpair=en%7C'+langValue+'&q='+textVal+'&mt=1&onlyprivate=0&de=a%40b.c', options)
		// 	.then(function (response) {
		// 		return response.json();
		// 	})
		// 	.then(function (data) {
		// 		console.log(data)
		// 	})
		// 	.catch(err => console.error(err));
		
	})
	.catch(err => console.error(err))

}


const searchResult = document.getElementById('search');

searchResult.addEventListener('keypress', (event) =>{
	if(event.key === "Enter"){
		runSearch(event.target.value);
	}
});