const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6d830eac78msh362ca88cf8a5f1ap18cc4ajsnb2b4a569553e',
		'X-RapidAPI-Host': 'translated-mymemory---translation-memory.p.rapidapi.com'
	}
};

fetch('https://translated-mymemory---translation-memory.p.rapidapi.com/createkey', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));