# Travel-Application-Project

## Team-Members

1) Kyle Vance
2) Mason Davis
3) Danial Mirza

## Description

This webpage serves as a travel guide for users. It provides many common research points such as currency conversion and common phrases. We use HTML, CSS, and Javascript in our source code. The webpage utilizes various APIs that extract data from online. In our program, we manipulate the data to showcase a clean and easy to read display for the user with only relavent information. 

## Installation

N/A

## Usage

N/A

## Credits

N/A

## License

Please refer to the LICENSE in the repo.

## Technologies
HTML
CSS
JavaScript
GitHub
GIt

API's:
https://api.exchangerate.host/latest?base=USD
https://translated-mymemory---translation-memory.p.rapidapi.com/api/get?langpair=en
https://restcountries.com/v3.1/name/
https://api.openweathermap.org/data/2.5/forecast
https://maps.googleapis.com/maps/api/staticmap

Framework:
https://cdn.jsdelivr.net/npm/uikit@3.15.10/dist/js/uikit.min.js
https://cdn.jsdelivr.net/npm/uikit@3.15.10/dist/css/uikit.min.css

other technologies:
https://cdnjs.cloudflare.com/ajax/libs/luxon/3.0.4/luxon.min.js

## Features

1) Enter a country in a searchbar
2) Drop down menu to help fill in searchbar
3) Input validation on country input
4) Displays facts about the inputted country, including capital city, population, language, and currency
5) Additionally, gives user an option to convert USD to the inputted country's currency
6) Displays common phrases in country's native language
7) Displays a map of the capital city
8) Displays current and five-day-future weather forecast in the capital city
9) Lists five previous user inputs and allows them to quickly revert to a country in history list via buttons
10) Navbar that appears after the user input and allows them to jump to specific sections of the webpage


## Links

[Deploable Application Link](https://danialmirza99.github.io/travel-application/)

[Github Repository Link](https://github.com/danialmirza99/travel-application)

## Screenshots

<img width="1440" alt="Screen Shot 2022-10-16 at 10 57 15 PM" src="https://user-images.githubusercontent.com/61335608/196099864-a4c6000f-b971-4142-8edf-7dd31dd751e8.png">

<img width="332" alt="Screen Shot 2022-10-16 at 10 57 53 PM" src="https://user-images.githubusercontent.com/61335608/196099949-2f92932a-f4ae-488e-8dd6-619d010e1046.png">

<img width="1440" alt="Screen Shot 2022-10-16 at 10 58 26 PM" src="https://user-images.githubusercontent.com/61335608/196100017-a3ec838b-eb31-4700-b503-94e78ff097e6.png">

<img width="1440" alt="Screen Shot 2022-10-16 at 10 58 48 PM" src="https://user-images.githubusercontent.com/61335608/196100077-4e1787ac-9475-4210-9c86-6963e6514b90.png">

<img width="463" alt="Screen Shot 2022-10-16 at 10 59 01 PM" src="https://user-images.githubusercontent.com/61335608/196100110-548a3739-e4bd-47df-b804-b99b9e8580d8.png">

<img width="1440" alt="Screen Shot 2022-10-16 at 10 59 17 PM" src="https://user-images.githubusercontent.com/61335608/196100156-7487ddc7-5167-4af5-83f8-740348c4e93f.png">

<img width="1440" alt="Screen Shot 2022-10-16 at 10 59 34 PM" src="https://user-images.githubusercontent.com/61335608/196100199-9103deeb-6f4a-483c-ba18-d2e721b2b556.png">

<img width="470" alt="Screen Shot 2022-10-16 at 10 59 47 PM" src="https://user-images.githubusercontent.com/61335608/196100234-7d68702b-4d23-4c67-ae41-a51b17042e19.png">

<img width="1438" alt="Screen Shot 2022-10-16 at 11 00 06 PM" src="https://user-images.githubusercontent.com/61335608/196100282-aa3e6571-ff83-4cac-814d-bf489405c876.png">

<img width="894" alt="Screen Shot 2022-10-16 at 11 00 33 PM" src="https://user-images.githubusercontent.com/61335608/196100343-2ab3995a-130e-4046-a2e1-24cdde4078b4.png">

## Code Snippet

<img width="360" alt="Screen Shot 2022-10-16 at 11 02 58 PM" src="https://user-images.githubusercontent.com/61335608/196100658-f5175ec3-b20d-4714-b46e-fae70734ff6f.png">

The following snippet uses fetch to extract country data from an API. We then collect specific data from the API to dynamically generate and display on our webpage, such as the langauge spoken and a code for each country that we can reference for other parts of the webpage, such as finding dates and currency.

## Splide Library

<img width="734" alt="Screen Shot 2022-10-17 at 2 24 17 PM" src="https://user-images.githubusercontent.com/61335608/196286371-092f63c6-e793-4c62-870a-13209be2ba36.png">

<img width="358" alt="Screen Shot 2022-10-17 at 2 24 44 PM" src="https://user-images.githubusercontent.com/61335608/196286419-8076ffed-8117-4a11-911e-9cc4b473d4e6.png">

For our project, we implemented a library called Splide. In order to include this library, we had to download the javascript and css source code. We then included those two given files in our program and altered/referenced the material that we needed. For our project, we used the library to showcase images for inputted countries via a carousel.

[Link to Splide](https://splidejs.com/guides/options/)
