/************************  Global Variables / Selectors *********************************/
let textVal;
let rate;
let type;
let langValue;
let converted;
let capitalCity;
let currencyName;
let countryName;
let codeCountry;
let currencyAmount = document.createElement('span');
const contentInfo = document.querySelector('#content');
const searchResult = document.getElementById('search');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navItems = document.querySelectorAll('.nav-link');
const footerDate = document.querySelector('#date');
const hero = document.querySelector('.hero-section');

// Connection object
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6d830eac78msh362ca88cf8a5f1ap18cc4ajsnb2b4a569553e',
		'X-RapidAPI-Host':
			'translated-mymemory---translation-memory.p.rapidapi.com',
	},
};

/************************  Functions  *********************************/

// Displays the nav bar after a search is entered
function displayNavBar() {
	navMenu.style.display = 'flex';
	// hero.style.display = 'none';
}

// Converts dollar into foreign currency
function currencyConverter(amount, landing) {
	let requestURL = 'https://api.exchangerate.host/latest?base=USD';
	let request = new XMLHttpRequest();
	request.open('GET', requestURL);
	request.responseType = 'json';
	request.send();

	request.onload = function () {
		let response = request.response;
		console.log(response)
		rate = response.rates[type];
		converted = rate * amount;
		currencyAmount.textContent = converted.toFixed(2) + ' ' + currencyName;
	};
}

// Event handler for search that was entered
function currencyEventHandler() {
	const convertedCurrencyAmount = document.querySelector('#currencyInput');
	convertedCurrencyAmount.addEventListener('keypress', (event) => {
		if (event.key === 'Enter') {
			if (isNaN(event.target.value)) {
				alertModal2();
			} else {
				currencyConverter(event.target.value);
			}
		}
	});
}

// Dynamically creates the facts portion of the webpage
function genContent(data) {
	// Clears out any existing country information
	while (contentInfo.firstChild) {
		contentInfo.firstChild.remove();
	}

	// Clears out old currency information
	currencyAmount.textContent = '';

	// Facts container
	let factsDiv = document.createElement('div');
	factsDiv.classList.add('info-container', 'uk-grid');
	factsDiv.setAttribute('id', 'facts');

	// Generate the flag img
	let flagImg = document.createElement('img');
	flagImg.classList.add('uk-width-1-2');
	flagImg.setAttribute('src', data[0].flags.svg);

	// Container for the fact information
	let factContent = document.createElement('div');
	factContent.classList.add('sideBar-container', 'uk-width-1-2');

	//Header for Facts section
	let factsHeader = document.createElement('h2');
	factsHeader.textContent = 'Facts: ' + data[0].name.common;

	// Capital information
	let divCapital = document.createElement('div');
	divCapital.classList.add('info', 'uk-grid');
	let fact1 = document.createElement('span');
	fact1.classList.add('titles', 'uk-width-1-2', 'block');
	fact1.textContent = 'Capital City: ';
	let fact1Content = document.createElement('span');
	fact1Content.classList.add('content', 'uk-width-1-2', 'block');
	capitalCity = data[0].capital[0];
	fact1Content.textContent = data[0].capital[0];
	divCapital.append(fact1);
	divCapital.append(fact1Content);

	// Population information
	let divPopulation = document.createElement('div');
	divPopulation.classList.add('info', 'uk-grid');
	let fact2 = document.createElement('span');
	fact2.classList.add('titles', 'uk-width-1-2', 'block');
	fact2.textContent = 'Population: ';
	let fact2Content = document.createElement('span');
	fact2Content.classList.add('content', 'uk-width-1-2', 'block');
	fact2Content.textContent = data[0].population;
	divPopulation.append(fact2);
	divPopulation.append(fact2Content);

	// Language information
	let langOb = data[0].languages;
	let langArr = Object.values(langOb);
	let langName = langArr[0];
	let divLanguage = document.createElement('div');
	divLanguage.classList.add('info', 'uk-grid');
	let fact3 = document.createElement('span');
	fact3.classList.add('titles', 'uk-width-1-2', 'block');
	fact3.textContent = 'Language: ';
	let fact3Content = document.createElement('span');
	fact3Content.classList.add('content', 'uk-width-1-2', 'block');
	fact3Content.textContent = langName;
	divLanguage.append(fact3);
	divLanguage.append(fact3Content);

	// Currency information
	let currency = data[0].currencies;
	let curArr = Object.values(currency);
	type = Object.keys(currency);
	let curValue = curArr[0];
	currencyName = curValue.name;
	let divCurrency = document.createElement('div');
	divCurrency.classList.add('info', 'uk-grid');
	let fact4 = document.createElement('span');
	fact4.classList.add('titles', 'uk-width-1-2', 'block');
	fact4.textContent = 'Currency: ';
	let fact4Content = document.createElement('span');
	fact4Content.classList.add('content', 'uk-width-1-2', 'block');
	fact4Content.textContent = currencyName;
	divCurrency.append(fact4);
	divCurrency.append(fact4Content);

	// Currency exchange input information
	let currencyCon = document.createElement('div');
	currencyCon.classList.add('info', 'uk-grid');
	let currencyLabel = document.createElement('label');
	currencyLabel.setAttribute('for', 'currencyInput');
	currencyLabel.classList.add('content', 'uk-width-1-2', 'block');
	currencyLabel.textContent = 'Enter dollar amount: $ ';
	let currencyInput = document.createElement('input');
	currencyInput.classList.add('uk-width-1-2', 'block');
	currencyInput.setAttribute('id', 'currencyInput');
	currencyInput.setAttribute('type', 'text');
	currencyCon.append(currencyLabel);
	currencyCon.append(currencyInput);

	// Currency exchange return information
	let currencyReturn = document.createElement('div');
	currencyReturn.classList.add('info', 'uk-grid');
	let currencyInputContent = document.createElement('span');
	currencyInputContent.classList.add(
		'content',
		'uk-width-1-2',
		'returnCurrency',
		'block'
	);
	currencyInputContent.textContent = 'Exchange Amount: ';
	currencyAmount.classList.add('content', 'uk-width-1-2', 'amount', 'block');
	currencyReturn.append(currencyInputContent);
	currencyReturn.append(currencyAmount);

	// Appends each element to the webpage
	factContent.appendChild(factsHeader);
	factContent.appendChild(divCapital);
	factContent.appendChild(divPopulation);
	factContent.appendChild(divLanguage);
	factContent.appendChild(divCurrency);
	factContent.appendChild(currencyCon);
	factContent.appendChild(currencyReturn);
	factsDiv.append(flagImg);
	factsDiv.append(factContent);
	contentInfo.append(factsDiv);

	currencyEventHandler();
	weatherForecast(capitalCity);
	displayNavBar();
}

// Creates a map of the city and displays common sayings
function langContent() {
	// let textTest = ['hello'];
	let translated = [
		'Hello ',
		'Thank you ',
		'Goodbye ',
		'How are you ',
		'Where is the bathroom ',
		'My name is ',
	];

	// Translation Main Container
	let transDiv = document.createElement('div');
	transDiv.classList.add('info-container', 'uk-grid');
	transDiv.setAttribute('id', 'translation');

	// Container for the Common Translations
	let translatedContent = document.createElement('div');
	translatedContent.classList.add(
		'translated-container',
		'sideBar-container',
		'uk-width-1-2'
	);

	// Generates a map of the city
	let mapImg = document.createElement('img');
	mapImg.setAttribute('src', backImg);

	//Header for Translations Section
	let translationHeader = document.createElement('h2');
	translationHeader.textContent = 'Common Translations: ';
	translatedContent.append(translationHeader);

	for (const element of translated) {
		let text1 = element;
		if (langValue == 'en') {
			let saying = document.createElement('div');
			saying.classList.add('info', 'uk-grid');
			let originTextContent = document.createElement('span');
			originTextContent.classList.add('titles', 'uk-width-1-2');
			originTextContent.textContent = text1 + ': ';
			let newTextContent = document.createElement('span');
			newTextContent.classList.add('content', 'uk-width-1-2');
			newTextContent.textContent = text1;
			saying.append(originTextContent);
			saying.append(newTextContent);
			translatedContent.append(saying);
		} else {
			// fetch(
			// 	'https://translated-mymemory---translation-memory.p.rapidapi.com/api/get?langpair=en%7C' +
			// 		langValue +
			// 		'&q=' +
			// 		text1 +
			// 		'&mt=1&onlyprivate=0&de=a%40b.c',
			// 	options
			// )
			// 	.then(function (response) {
			// 		return response.json();
			// 	})
			// 	.then(function (data) {
			// 		let transText = data.responseData.translatedText;
			// 		let saying = document.createElement('div');
			// 		saying.classList.add('info', "uk-grid");
			// 		let originTextContent = document.createElement('span');
			// 		originTextContent.classList.add('titles',  "uk-width-1-2");
			// 		originTextContent.textContent = text1 + ": " ;
			// 		let newTextContent = document.createElement('span');
			// 		newTextContent.classList.add('content',  "uk-width-1-2");
			// 		newTextContent.textContent = transText;
			// 		saying.append(originTextContent);
			// 		saying.append(newTextContent);
			// 		translatedContent.append(saying);
			// 	})
			// 	.catch((err) => console.error(err));
		}
	}

	transDiv.append(translatedContent);
	transDiv.append(mapImg);
	contentInfo.append(transDiv);
}

// Connects to the server side APIs and collects information about the country and sets the language for the translator
function runSearch(name) {
	cityImages(name);
	fetch('https://restcountries.com/v3.1/name/' + name)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			console.log(data);
			genContent(data);
			codeCountry = data[0].cca2;
			let langOb = data[0].languages;
			let langArr = Object.values(langOb);
			let langName = langArr[0];
			langValue = languages[langName];
		})
		.catch((err) => console.error(err));
}

/************************  Event Listeners  *********************************/

// Main Search
searchResult.addEventListener('keypress', (event) => {
	if (event.key === 'Enter') {
		let validate = event.target.value;
		let onList = 0;
		for (i = 0; i < countryArr.length; i++) {
			if (validate === countryArr[i]) {
				onList = 1;
			}
		}
		if (onList === 1) {
			countryName = validate;
			runSearch(validate);
			addToSearchList(validate);
		} else {
			alertModal();
		}
	}
});

// Burger menu items
hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	navMenu.classList.toggle('active');
});
navItems.forEach((event) =>
	event.addEventListener('click', () => {
		hamburger.classList.remove('active');
		navMenu.classList.remove('active');
	})
);
