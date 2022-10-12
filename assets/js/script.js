/************************  Global Variables / Selectors *********************************/
let contentInfo = document.querySelector('#content');
const searchResult = document.getElementById('search');

// connection object
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6d830eac78msh362ca88cf8a5f1ap18cc4ajsnb2b4a569553e',
		'X-RapidAPI-Host':
			'translated-mymemory---translation-memory.p.rapidapi.com',
	},
};

let textVal = 'chicken';

/************************  Functions  *********************************/

// Dynamically creates the facts portion of the webpage
function genContent(data) {
	
	// clears out any existing country information
	while (contentInfo.firstChild) {
		contentInfo.firstChild.remove();
	}

	// Main container
	let factsDiv = document.createElement('div');
	factsDiv.classList.add('info-container');

	// Generate the flag img
	let flagImg = document.createElement('img');
	flagImg.setAttribute('src', data[0].flags.svg);

	// container for the fact information
	let factContent = document.createElement('div');
	factContent.classList.add('facts-container');

	//Header for Facts section
	let factsHeader = document.createElement('h2');
	factsHeader.textContent = 'Facts: ' + data[0].name.common;

	// Capital information
	let divCapital = document.createElement('div');
	divCapital.setAttribute('class', 'info');
	let fact1 = document.createElement('span');
	fact1.classList.add('fact-titles');
	fact1.textContent = 'Capital City: ';
	let fact1Content = document.createElement('span');
	fact1Content.classList.add('fact-content');
	fact1Content.textContent = data[0].capital[0];
	divCapital.append(fact1);
	divCapital.append(fact1Content);

	// Population information
	let divPopulation = document.createElement('div');
	divPopulation.setAttribute('class', 'info');
	let fact2 = document.createElement('span');
	fact2.classList.add('fact-titles');
	fact2.textContent = 'Population: ';
	let fact2Content = document.createElement('span');
	fact2Content.classList.add('fact-content');
	fact2Content.textContent = data[0].population;
	divPopulation.append(fact2);
	divPopulation.append(fact2Content);

	// Language information
	let langOb = data[0].languages;
	let langArr = Object.values(langOb);
	let langName = langArr[0];
	let divLanguage = document.createElement('div');
	divLanguage.setAttribute('class', 'info');
	let fact3 = document.createElement('span');
	fact3.classList.add('fact-titles');
	fact3.textContent = 'Language: ';
	let fact3Content = document.createElement('span');
	fact3Content.classList.add('fact-content');
	fact3Content.textContent = langName;
	divLanguage.append(fact3);
	divLanguage.append(fact3Content);

	// Currency information
	let currency = data[0].currencies;
	let curArr = Object.values(currency);
	let curValue = curArr[0];
	let divCurrency = document.createElement('div');
	divCurrency.setAttribute('class', 'info');
	let fact4 = document.createElement('span');
	fact4.classList.add('fact-titles');
	fact4.textContent = 'Currency: ';
	let fact4Content = document.createElement('span');
	fact4Content.classList.add('fact-content');
	fact4Content.textContent = curValue.name;
	divCurrency.append(fact4);
	divCurrency.append(fact4Content);

	// // append each portion of facts and the flag to the webpage
	factContent.appendChild(factsHeader);
	factContent.appendChild(divCapital);
	factContent.appendChild(divPopulation);
	factContent.appendChild(divLanguage);
	factContent.appendChild(divCurrency);
	factsDiv.append(flagImg);
	factsDiv.append(factContent);
	contentInfo.append(factsDiv);
}

// Connects to the server side APIs and collects information about the country and sets the language for the translator
function runSearch(name) {
	fetch('https://restcountries.com/v3.1/name/' + name)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			let langOb = data[0].languages;
			let langArr = Object.values(langOb);
			let langName = langArr[0];
			langValue = languages[langName];
			genContent(data);
			// fetch('https://translated-mymemory---translation-memory.p.rapidapi.com/api/get?langpair=en%7C'+langValue+'&q='+textVal+'&mt=1&onlyprivate=0&de=a%40b.c', options)
			// 	.then(function (response) {
			// 		return response.json();
			// 	})
			// 	.then(function (data) {
			// 		console.log(data);
			// 	})
			// 	.catch(err => console.error(err));
		})
		.catch((err) => console.error(err));
}

/************************  Event Listeners  *********************************/

searchResult.addEventListener('keypress', (event) => {
	if (event.key === 'Enter') {
		runSearch(event.target.value);
	}
});
