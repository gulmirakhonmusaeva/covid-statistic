const flagImg = document.getElementById(`flag-img`)
const countryName = document.getElementById(`countryName`)
const confirmed = document.getElementById(`confirmed`)
const deaths = document.getElementById(`deaths`)
const recovered = document.getElementById(`recovered`)
const active = document.getElementById(`active`)
const input = document.getElementById(`input-text`)
const searchButton = document.getElementById(`search-btn`)

//   api

//  addEventListener
searchButton.addEventListener('click',searchCountry)
    


//  function

function searchCountry(e) {
    e.preventDefault()
    const enterCountry = input.value 
    mainFunction(enterCountry)
}

// random api 

const allCountryApi = 'https://restcountries.eu/rest/v2/all'
const randomNumber = Math.floor(Math.random() *251)

function randomCountry() {
    fetch(allCountryApi).then(function(data) {
        return data.json()
    }).then(getRandomCountry)

   function getRandomCountry(data) {
       mainFunction(data[randomNumber].name)
   }
}

randomCountry()

function mainFunction(key) {
    const api = `https://api.covid19api.com/live/country/${key}/status/confirmed`
    fetch(api).then(function (data) {
        return data.json()
    }).then(getResult)

    function getResult(data) {
        showResult(data[data.length - 1])
    }

    function showResult(countryData) {

        console.log(countryData);
        flagImg.src = `https://www.countryflags.io/${countryData.CountryCode}/shiny/64.png`

        // countryName 

        countryName.textContent = countryData.Country

        // confirmed 

        confirmed.textContent = countryData.Confirmed

        // deaths 
        deaths.textContent = countryData.Deaths

        // recovered 

        recovered.textContent = countryData.Recovered

        // actiev 

        active.textContent = countryData.Active
    }
}

let typed = new Typed('#words', {
   
    strings: ['Statistic', 'Covid','All Information'],
    typeSpeed: 100,
    startDelay: 1000,
    backSpeed: 100,
    smartBackspace: true,
    loop: true,
  });

