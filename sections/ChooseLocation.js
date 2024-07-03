const bucharest = document.querySelector(".dropdown-menu .bucharest");
const timisoara = document.querySelector(".dropdown-menu .timisoara");
const oradea = document.querySelector(".dropdown-menu .oradea");
const cluj = document.querySelector(".dropdown-menu .cluj-napoca");
const bistrita = document.querySelector(".dropdown-menu .bistrita");

function updateCurrentCity(city) {
  //selectam spatiul pe ecran dedicat afisarii orasului si ii adaugam continut
  const currentCity = document.querySelector(".current-city"); //dar noi nu avem niciunde aceasta clasa, dar o adaugam in index.html
  currentCity.innerHTML = city; //dar injectam in clasa de mai sus orasul
}

function updateWeather(city) {
  //actualizam orasul din localStorage
  localStorage.setItem("city", city); //local.storage salveaza in browser si ii ramane pe viitor orasul selectat
  //actualizam orasul aflat pe ecran
  updateCurrentCity(city);
  //reafisam vremea curenta, pentru noul oras
  displayCurrentWeather(city);
}

//adaugam event listener pe butoanele din dropdown
bucharest.addEventListener("click", function () {
  updateWeather("București");
});

timisoara.addEventListener("click", function () {
  updateWeather("Timișoara");
});

oradea.addEventListener("click", function () {
  updateWeather("Oradea");
});

cluj.addEventListener("click", function () {
  updateWeather("Cluj-Napoca");
});

bistrita.addEventListener("click", function () {
  updateWeather("Bistrița");
});
