/* function formatDate(date) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let currentDay = days[date.getDay()];
  let hours = date.getHours();
  let minutes = date.getMinutes();

  if (hours < 10) {
    hours = `0${hours}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `Update time: ${currentDay} ${hours}:${minutes}`;
}

let time = document.querySelector("#updateTime");
let currentTime = new Date();
time.innerHTML = formatDate(currentTime);

let currentTemp = document.querySelector("#temerature");
let likeTemp = document.querySelector("#likeTemp");
let discription = document.querySelector("#discription");
let icon = document.querySelector("#icon");

function getLocation(response) {
  city.innerHTML = response.data.name;
  currentTemp.innerHTML = Math.round(response.data.main["temp"]);
  likeTemp.innerHTML = Math.round(response.data.main["feels_like"]);
  discription.innerHTML = response.data.weather[0].main;

  let weatherIcon = "";
  switch (response.data.weather[0].icon) {
    case "01d":
      weatherIcon = "☀️";
      break;
    case "01n":
      weatherIcon = "🌙";
      break;
    case "02d":
    case "02n":
      weatherIcon = "⛅️";
      break;
    case "03d":
    case "03n":
    case "04d":
    case "04n":
      weatherIcon = "☁️";
      break;
    case "09d":
    case "09n":
      weatherIcon = "🌧️";
      break;
    case "10d":
    case "10n":
      weatherIcon = "🌦️";
      break;
    case "11d":
    case "11n":
      weatherIcon = "⛈️";
      break;
    case "13d":
    case "13n":
      weatherIcon = "❄️";
      break;
    case "50d":
    case "50n":
      weatherIcon = "🌫️";
      break;
    default:
      weatherIcon = "❓";
  }
  icon.innerHTML = weatherIcon;
}

function hendelSubmit(event) {
  event.preventDefault();
  let apiKey = "928e46c99ce0ca15a897fe42916c9ab3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}&lat={lat}&lon={lon}&appid=${apiKey}&&units=metric`;
  axios.get(apiUrl).then(getLocation);
}

let inputCity = document.querySelector("#inputPassword2");
let city = document.querySelector("#cali");
let form = document.querySelector("#searchForm");
form.addEventListener("submit", hendelSubmit);

function displayWeather(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "928e46c99ce0ca15a897fe42916c9ab3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(getLocation);
}

function getCurrentWeather() {
  navigator.geolocation.getCurrentPosition(displayWeather);
}

let btnCurrentLocation = document.querySelector("#btnCurrentLocation");
btnCurrentLocation.addEventListener("click", getCurrentWeather);
 */
function formatDate(date) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let currentDay = days[date.getDay()];
  let hours = date.getHours();
  let minutes = date.getMinutes();

  if (hours < 10) {
    hours = `0${hours}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `Update time: ${currentDay} ${hours}:${minutes}`;
}

let time = document.querySelector("#updateTime");
let currentTime = new Date();
time.innerHTML = formatDate(currentTime);

let currentTemp = document.querySelector("#temerature");
let likeTemp = document.querySelector("#likeTemp");
let discription = document.querySelector("#discription");
let icon = document.querySelector("#icon");

function getLocation(response) {
  city.innerHTML = response.data.name;
  currentTemp.innerHTML = Math.round(response.data.main["temp"]);
  likeTemp.innerHTML = Math.round(response.data.main["feels_like"]);
  discription.innerHTML = response.data.weather[0].main;

  let weatherIcon = "";
  switch (response.data.weather[0].icon) {
    case "01d":
      weatherIcon = "☀️";
      break;
    case "01n":
      weatherIcon = "🌙";
      break;
    case "02d":
    case "02n":
      weatherIcon = "⛅️";
      break;
    case "03d":
    case "03n":
    case "04d":
    case "04n":
      weatherIcon = "☁️";
      break;
    case "09d":
    case "09n":
      weatherIcon = "🌧️";
      break;
    case "10d":
    case "10n":
      weatherIcon = "🌦️";
      break;
    case "11d":
    case "11n":
      weatherIcon = "⛈️";
      break;
    case "13d":
    case "13n":
      weatherIcon = "❄️";
      break;
    case "50d":
    case "50n":
      weatherIcon = "🌫️";
      break;
    default:
      weatherIcon = "❓";
  }
  icon.innerHTML = weatherIcon;
}

function searchCity(inputCity) {
  let apiKey = "928e46c99ce0ca15a897fe42916c9ab3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&lat={lat}&lon={lon}&appid=${apiKey}&&units=metric`;
  axios
    .get(apiUrl)
    .then(getLocation)
    .catch(function (error) {
      if (error.response.status === 404) {
        alert(`City ${inputCity} not found. Please enter a valid city name.`);
      } else {
        alert(
          "An error occurred while fetching weather data. Please try again later."
        );
      }
    });
}

function hendelSubmit(event) {
  event.preventDefault();
  let inputCity = document.querySelector("#inputPassword2").value;
  searchCity(inputCity);
}

/* let inputCity = document.querySelector("#inputPassword2");
 */ let city = document.querySelector("#cali");
let form = document.querySelector("#searchForm");
form.addEventListener("submit", hendelSubmit);

function displayWeather(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "928e46c99ce0ca15a897fe42916c9ab3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(getLocation);
}

function getCurrentWeather() {
  navigator.geolocation.getCurrentPosition(displayWeather);
}

let btnCurrentLocation = document.querySelector("#btnCurrentLocation");
btnCurrentLocation.addEventListener("click", getCurrentWeather);

searchCity("Sunnyvale");
