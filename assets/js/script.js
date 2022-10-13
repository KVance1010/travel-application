/************************  Global Variables / Selectors *********************************/
let textVal;
let rate;
let type;
let langValue;
let converted;
let capitalCity;
let currencyAmount = document.createElement('span');
const contentInfo = document.querySelector('#content');
const searchResult = document.getElementById('search');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navItems = document.querySelector('.nav-link');

// connection object
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6d830eac78msh362ca88cf8a5f1ap18cc4ajsnb2b4a569553e',
		'X-RapidAPI-Host':
			'translated-mymemory---translation-memory.p.rapidapi.com',
	},
};

/************************  Functions  *********************************/

function currencyConverter(amount,landing){
	var requestURL = 'https://api.exchangerate.host/latest?base=USD';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var response = request.response;
  rate = response.rates[type]
  converted = rate * amount
  console.log(converted.toFixed(2)) 
  currencyAmount.textContent = converted.toFixed(2);	
}
}

function currencyEventHandler(){
	const cenvertedCurrencyAmount = document.querySelector('#currencyInput');
	cenvertedCurrencyAmount.addEventListener('keypress', (event) => {
		if (event.key === 'Enter') {
			currencyConverter(event.target.value,);
		}
	});
}

// Dynamically creates the facts portion of the webpage
function genContent(data) {
	// clears out any existing country information
	while (contentInfo.firstChild) {
		contentInfo.firstChild.remove();
	}

	// clears out old currency information
	currencyAmount.textContent = '';

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

	// Currency exchange information
	let currencyCon = document.createElement('div');
	currencyCon.setAttribute('class', 'info');
	let currencyLabel = document.createElement('label');
	currencyLabel.setAttribute('for','currencyInput' );
	currencyLabel.textContent = 'Enter dollar amount: ';
	let currencyInput = document.createElement('input');
	currencyInput.setAttribute('id', 'currencyInput');
	currencyInput.setAttribute('type', 'text');
	let currencyInputContent = document.createElement('span');
	currencyInputContent.setAttribute('class', 'returnCurrency');
	currencyInputContent.textContent = 'Exchange Amount: ';
	currencyAmount.setAttribute('class', 'amount');		
	currencyCon.append(currencyLabel);
	currencyCon.append(currencyInput);
	currencyCon.append(currencyInputContent);
	currencyCon.append(currencyAmount);

	// append each portion of facts and the flag to the webpage
	factContent.appendChild(factsHeader);
	factContent.appendChild(divCapital);
	factContent.appendChild(divPopulation);
	factContent.appendChild(divLanguage);
	factContent.appendChild(divCurrency);
	factContent.appendChild(currencyCon);
	factsDiv.append(flagImg);
	factsDiv.append(factContent);
	contentInfo.append(factsDiv);
	currencyEventHandler();
}

function langContent(){
//add div for translation parents

// div container
// 2 children, one for translations and one for the map
// another div container for translations
// a parent div for each line we would like translated 
// span for english text and a span for the translation

text1 = 'Hello'
		// fetch('https://translated-mymemory---translation-memory.p.rapidapi.com/api/get?langpair=en%7C'+langValue+'&q='+text1+'&mt=1&onlyprivate=0&de=a%40b.c', options)
		// 		.then(function (response) {
		// 			return response.json();
		// 		})
		// 		.then(function (data) {
		// 			console.log(data);
		// 			let transText = data.responseData.translatedText;
		// 			console.log(transText)
		// 		})
		// 		.catch(err => console.error(err));
text2 = 'Thank you'
		// fetch('https://translated-mymemory---translation-memory.p.rapidapi.com/api/get?langpair=en%7C'+langValue+'&q='+text2+'&mt=1&onlyprivate=0&de=a%40b.c', options)
			// 	.then(function (response) {
			// 		return response.json();
			// 	})
			// 	.then(function (data) {
			// 		console.log(data);
			// 	})
			// 	.catch(err => console.error(err));
text3 = 'Goodbye'			
		// fetch('https://translated-mymemory---translation-memory.p.rapidapi.com/api/get?langpair=en%7C'+langValue+'&q='+text3+'&mt=1&onlyprivate=0&de=a%40b.c', options)
			// 	.then(function (response) {
			// 		return response.json();
			// 	})
			// 	.then(function (data) {
			// 		console.log(data);
			// 	})
			// 	.catch(err => console.error(err));
text4 = 'How are you?'
		// fetch('https://translated-mymemory---translation-memory.p.rapidapi.com/api/get?langpair=en%7C'+langValue+'&q='+text4+'&mt=1&onlyprivate=0&de=a%40b.c', options)
			// 	.then(function (response) {
			// 		return response.json();
			// 	})
			// 	.then(function (data) {
			// 		console.log(data);
			// 	})
			// 	.catch(err => console.error(err));
text5 = 'Where is the bathroom?'			
		// fetch('https://translated-mymemory---translation-memory.p.rapidapi.com/api/get?langpair=en%7C'+langValue+'&q='+text5+'&mt=1&onlyprivate=0&de=a%40b.c', options)
			// 	.then(function (response) {
			// 		return response.json();
			// 	})
			// 	.then(function (data) {
			// 		console.log(data);
			// 	})
			// 	.catch(err => console.error(err));	
text6 = 'My name is,'	
		// fetch('https://translated-mymemory---translation-memory.p.rapidapi.com/api/get?langpair=en%7C'+langValue+'&q='+text6+'&mt=1&onlyprivate=0&de=a%40b.c', options)
			// 	.then(function (response) {
			// 		return response.json();
			// 	})
			// 	.then(function (data) {
			// 		console.log(data);
			// 	})
			// 	.catch(err => console.error(err));	
}

// Connects to the server side APIs and collects information about the country and sets the language for the translator
function runSearch(name) {
	fetch('https://restcountries.com/v3.1/name/' + name)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			genContent(data);
			let langOb = data[0].languages;
			let langArr = Object.values(langOb);
			let langName = langArr[0];
			langValue = languages[langName];
			langContent()
			
			
		})
		.catch((err) => console.error(err));
}

/************************  Event Listeners  *********************************/

searchResult.addEventListener('keypress', (event) => {
	if (event.key === 'Enter') {
		runSearch(event.target.value);
	}
});


// burger menu items
hamburger.addEventListener('click',() => {
hamburger.classList.toggle("active");
navMenu.classList.toggle("active");
});
navItems.forEach(n => n.addEventListener("click",() =>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));
