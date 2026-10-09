const input = document.querySelector('.input')
const searchBtn = document.querySelector('.search-btn')
const forecastContainer = document.querySelector('.forecast')
const currentWeatherContainer = document.querySelector('.current-weather')

async function getData(city) {
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=a36f423ac55645d7b38153557260101&q=${city}&days=7&aqi=no&alerts=no`)
    
    const jsonResponse = await response.json()
    // console.log(jsonResponse)
    showData(jsonResponse)
    
}

function showData(jsonResponse) {
  const locationInfo = jsonResponse?.location
    const currentWeatherInfo = jsonResponse?.current
    const forecastInfo = jsonResponse?.forecast?.forecastday
console.log(currentWeatherInfo.condition.icon)
    // console.log('locationInfo' , locationInfo)
    // console.log('cuurentWeatherInfo' , currentWeatherInfo)
    // console.log('forecastInfo' , forecastInfo)

    currentWeatherContainer.innerHTML = ` <div class="location">
        <h2>${locationInfo.region}</h2>
        <p>${locationInfo.country}</p>
        <p>Local Time  : ${locationInfo.localtime}</p>
      </div>

      <div class="weather-info">
        <img src=${currentWeatherInfo.condition.icon} alt="condition" />
        <h1>${currentWeatherInfo.temp_c}°C</h1>
        <p>${currentWeatherInfo.condition.text}</p>

        <div class="extra">
          <span>💨 ${currentWeatherInfo.wind_kph} km/h</span>
          <span>Updated: ${currentWeatherInfo.last_updated}</span>
        </div>
      </div>`
      forecastContainer.innerHTML = ''
      forecastInfo?.map((day) => (
       forecastContainer.innerHTML += `<div class="day-card">
        <p class="date">${day.date}</p>
        <img src=${day.day.condition.icon} />
        <p>${day.day.condition.text}</p>
        <p class="temp">${day.day.maxtemp_c}° / ${day.day.mintemp_c}°</p>
      </div>`
      ))
}

searchBtn.addEventListener('click' , () => {
    const city = input.value.trim().toLowerCase()
    if(! city || city.length == 0) return
    getData(city)
})