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

let currentTemp = document.querySelector("#temerature");
let likeTemp = document.querySelector("#likeTemp");
let discription = document.querySelector("#discription");
let icon = document.querySelector("#icon");

function getLocation(response) {
  city.innerHTML = response.data.city;
  console.log(response.data.city);
  currentTemp.innerHTML = Math.round(response.data.temperature.current);
  likeTemp.innerHTML = Math.round(response.data.temperature.feels_like);
  discription.innerHTML = response.data.condition.description;
  icon.setAttribute("src", `${response.data.condition.icon_url}`);
  console.log(response.data);
  console.log(response.data.time);
  let time = document.querySelector("#updateTime");
  let currentTime = new Date();
  time.innerHTML = formatDate(currentTime);
}

function searchCity(inputCity) {
  /* let apiKey = "928e46c99ce0ca15a897fe42916c9ab3"; */
  let apiKey = "bd64o304c00cb1336373a57ft8094a9d";
  /*   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&lat={lat}&lon={lon}&appid=${apiKey}&&units=metric`; */
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${inputCity}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(getLocation);
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
  /*  let apiKey = "928e46c99ce0ca15a897fe42916c9ab3"; */
  let apiKey = "bd64o304c00cb1336373a57ft8094a9d";
  /*   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
   */ let apiUrl = `https://api.shecodes.io/weather/v1/current?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(getLocation);
}

function getCurrentWeather() {
  navigator.geolocation.getCurrentPosition(displayWeather);
}

let btnCurrentLocation = document.querySelector("#btnCurrentLocation");
btnCurrentLocation.addEventListener("click", getCurrentWeather);

searchCity("Sunnyvale");
