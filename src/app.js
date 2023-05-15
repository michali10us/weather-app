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

function displayForcast(response) {
  let forecastElement = document.querySelector("#forcast");
  let forecastHtml = `<div class="row">`;
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
  days.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      `<div class="col-2">
    <div class="p-2 weather-forecast-date"> ${day}</div>
    <div class="p-2">
      <img
        src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
        id="icon"
        alt=""
        width="30px"
        height="30px"
      />
    </div>
    <div class="p-2 weather-forecast-temperature">
      <span class="weather-forecast-temperature-max">25°C</span>
      <span class="weather-forecast-temperature-min">20°C</span>
    </div>
</div>`;
  });
  forecastHtml = forecastHtml + `</div>`;
  forecastElement.innerHTML = forecastHtml;
  console.log(response.data.daily);
}

function getForcast(coordinates) {
  let apiKey = "bd64o304c00cb1336373a57ft8094a9d";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${coordinates.longitude}&lat=${coordinates.latitude}&key=${apiKey}&units=metric`;
  console.log(coordinates);
  console.log(apiUrl);
  axios.get(apiUrl).then(displayForcast);
}

function getLocation(response) {
  city.innerHTML = response.data.city;
  celsiusTemp = response.data.temperature.current;
  let currentTemp = document.querySelector("#temerature");
  currentTemp.innerHTML = Math.round(celsiusTemp);
  celsiusFeel = response.data.temperature.feels_like;
  let likeTemp = document.querySelector("#likeTemp");
  likeTemp.innerHTML = Math.round(celsiusFeel);
  let discription = document.querySelector("#discription");
  discription.innerHTML = response.data.condition.description;
  let icon = document.querySelector("#icon");
  icon.setAttribute("src", `${response.data.condition.icon_url}`);
  let time = document.querySelector("#updateTime");
  let currentTime = new Date();
  time.innerHTML = formatDate(currentTime);
  getForcast(response.data.coordinates);
}

function searchCity(inputCity) {
  let apiKey = "bd64o304c00cb1336373a57ft8094a9d";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${inputCity}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(getLocation);
}

function hendelSubmit(event) {
  event.preventDefault();
  let inputCity = document.querySelector("#inputPassword2").value;
  searchCity(inputCity);
}

function displayWeather(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "bd64o304c00cb1336373a57ft8094a9d";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(getLocation);
}

function getCurrentWeather() {
  navigator.geolocation.getCurrentPosition(displayWeather);
}

function displayfahrenheit(event) {
  event.preventDefault();
  let currentTemp = document.querySelector("#temerature");
  let fahrenheitTemp = (celsiusTemp * 9) / 5 + 32;
  currentTemp.innerHTML = Math.round(fahrenheitTemp);
  celsiusElement.classList.remove("active");
  fahrenheitElement.classList.add("active");
}

function displaycelsius(event) {
  event.preventDefault();
  let currentTemp = document.querySelector("#temerature");
  currentTemp.innerHTML = Math.round(celsiusTemp);
  celsiusElement.classList.add("active");
  fahrenheitElement.classList.remove("active");
}

function displaycelsiusFeel(event) {
  event.preventDefault();
  let likeTemp = document.querySelector("#likeTemp");
  likeTemp.innerHTML = Math.round(celsiusFeel);
  celsiusFeelLike.classList.add("active");
  fahrenheitFellLike.classList.remove("active");
}

function displayfahrenheitFell(event) {
  event.preventDefault();
  let likeTemp = document.querySelector("#likeTemp");
  let fahrenheitFell = (celsiusFeel * 9) / 5 + 32;
  likeTemp.innerHTML = Math.round(fahrenheitFell);
  celsiusFeelLike.classList.remove("active");
  fahrenheitFellLike.classList.add("active");
}

let city = document.querySelector("#cali");
let form = document.querySelector("#searchForm");

form.addEventListener("submit", hendelSubmit);

let btnCurrentLocation = document.querySelector("#btnCurrentLocation");
btnCurrentLocation.addEventListener("click", getCurrentWeather);

let fahrenheitElement = document.querySelector("#fahrenheit-link");
fahrenheitElement.addEventListener("click", displayfahrenheit);

let celsiusElement = document.querySelector("#celsius-link");
celsiusElement.addEventListener("click", displaycelsius);

let celsiusFeelLike = document.querySelector("#celsiusFell");
celsiusFeelLike.addEventListener("click", displaycelsiusFeel);

let fahrenheitFellLike = document.querySelector("#fahrenheitFell");
fahrenheitFellLike.addEventListener("click", displayfahrenheitFell);

let celsiusTemp = null;
let celsiusFeel = null;

searchCity("Sunnyvale");
