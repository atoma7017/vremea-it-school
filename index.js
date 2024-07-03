const currentCityTag = document.querySelector(".current-city");
let currentCity = localStorage.getItem("city");

//daca nu avem oras salvat in local storage, salvam orasul default, adica bucuresti

if (!currentCity) {
  localStorage.setItem("city", "București");
  currentCity = "București";
}

//actualizam orasul afisat pe ecran

currentCityTag.innerHTML = currentCity;

displayCurrentWeather(currentCity);

displayWeatherForecast(currentCity);
