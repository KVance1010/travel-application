/************************  Global Variables / Selectors *********************************/
let textVal;
let rate;
let type;
let langValue;
let converted;
let capitalCity;
let currencyName;
let currencyAmount = document.createElement('span');
const contentInfo = document.querySelector('#content');
const searchResult = document.getElementById('search');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navItems = document.querySelector('.nav-link');

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
	hamburger.style.display = 'block';	
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
			currencyConverter(event.target.value);
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
	factsDiv.classList.add('info-container');
	factsDiv.setAttribute('id', 'facts');

	// Generate the flag img
	let flagImg = document.createElement('img');
	flagImg.setAttribute('src', data[0].flags.svg);

	// Container for the fact information
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
	capitalCity = data[0].capital[0];
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
	type = Object.keys(currency);
	let curValue = curArr[0];
	currencyName =  curValue.name;
	let divCurrency = document.createElement('div');
	divCurrency.setAttribute('class', 'info');
	let fact4 = document.createElement('span');
	fact4.classList.add('fact-titles');
	fact4.textContent = 'Currency: ';
	let fact4Content = document.createElement('span');
	fact4Content.classList.add('fact-content');
	fact4Content.textContent = currencyName;
	divCurrency.append(fact4);
	divCurrency.append(fact4Content);

	// Currency exchange input information
	let currencyCon = document.createElement('div');
	currencyCon.setAttribute('class', 'info');
	let currencyLabel = document.createElement('label');
	currencyLabel.setAttribute('for', 'currencyInput');
	currencyLabel.setAttribute('class', 'fact-content');
	currencyLabel.textContent = 'Enter dollar amount: $ ';
	let currencyInput = document.createElement('input');
	currencyInput.setAttribute('id', 'currencyInput');
	currencyInput.setAttribute('type', 'text');
	currencyCon.append(currencyLabel);
	currencyCon.append(currencyInput);

	// Currency exchange return information
	let currencyReturn = document.createElement('div');
	currencyReturn.setAttribute('class', 'info');
	let currencyInputContent = document.createElement('span');
	currencyInputContent.setAttribute('class', 'returnCurrency');
	currencyInputContent.setAttribute('class', 'fact-content');
	currencyInputContent.textContent = 'Exchange Amount: ';
	currencyAmount.setAttribute('class', 'amount');
	currencyAmount.setAttribute('class', 'fact-content');
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
	displayNavBar()
}

function langContent() {
	console.log(backImg)

	
	//add div for translation parents
	let transDiv = document.createElement('div');
	transDiv.classList.add('info-container');
	transDiv.setAttribute('id', 'translation');
	// div container
	
	// 2 children, one for translations and one for the map
	let mapImg = document.createElement('img');
	mapImg.setAttribute('src', backImg);
	let translatedWords = document.createElement('div')

	// another div container for translations
	// a parent div for each line we would like translated
	// span for english text and a span for the translation
	let textTest = ['hello'];
 	let translated = ['Hello','Thank you','Goodbye','How are you?','Where is the bathroom?','My name is,']
	for(i=0;i<textTest.length;i++){
		let text1 = textTest[i]
	// fetch('https://translated-mymemory---translation-memory.p.rapidapi.com/api/get?langpair=en%7C'+langValue+'&q='+text1+'&mt=1&onlyprivate=0&de=a%40b.c', options)
	// 		.then(function (response) {
	// 			return response.json();
	// 		})
	// 		.then(function (data) {
	//			let transText = data.responseData.translatedText;

	// 			let originText = document.createElement('div')
	// 			let newText = document.createElement('div')
	// 			let originTextContent = document.createElement('span')
	// 			let newTextContent = document.createElement('span')
	// 			
	// 			originTextContent.textContent = text1
	// 			newTextContent.textContent = transText
	// 			originText.append(originTextContent)
	//          newText.append(newTextContent)
	// 			translatedWords.append(originText)
	// 			translatedWords.append(newText)	
	// 		})
	// 		.catch(err => console.error(err));
	}
	transDiv.append(translatedWords)
	transDiv.append(mapImg)
	contentInfo.append(transDiv);
}

// Connects to the server side APIs and collects information about the country and sets the language for the translator
function runSearch(name) {
	fetch('https://restcountries.com/v3.1/name/' + name)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			console.log(data)
			genContent(data);
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
		for(i=0;i<countryArr.length;i++){
			if(validate === countryArr[i]){
				onList = 1;
			}
		}
		if(onList === 1){
		runSearch(validate);
		addToSearchList(validate);
		}else{
			alert()
		}
}
});

// Burger menu items
hamburger.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		navMenu.classList.toggle('active');
});
// }else{
// 	hamburger.classList.remove('active');
// 	navMenu.classList.remove('active');
// }