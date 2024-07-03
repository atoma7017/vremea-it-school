//declarearea functiei pentru afisarea vremii curente. Apelul se face in alte fisiere

function displayCurrentWeather(city) {
  //generam link-ul serverului pe baza orasului
  const currentWeatherEndpoint = getCurrentWeatherEndpoint(city); //modificam argumentul in city
  fetch(currentWeatherEndpoint) //fetch ia date de la un server (vezi curs 23)
    .then((response) => response.json())
    .then((data) => {
      //extragem proprietatile care ne intereseaza si sa prelucram date - acestea sunt luate din responsul de tip json (care arata ca un obiect)
      const { name, dt, main, weather, wind } = data;
      const day = getDayOfTheWeek(dt);
      const hours = getHour(dt);
      //rotunjim temepraturile
      const temperature = Math.round(main.temp);
      const realFeel = Math.round(main.feels_like); //in obiectele din site-ul nostru (care vine ca rezultat in fisierul json) gasim aceste temp si feels_like
      //atentie !!! weather este un array, cu un singur element.
      const weatherDescription = weather[0].description; //description e luat din fisierul json
      const weatherIcon = getWeatherIcon(weather[0].icon);
      const windSpeed = Math.round(windToKmPerHour(wind.speed));

      //afisam pe ecran informatiile extrase din API
      let currentWeatherContainer = document.querySelector(".current-weather");
      currentWeatherContainer.innerHTML = `
      <div class="px-3"> 
        <div class="fs-2 mb-2"> <strong>${name}</strong></div>
        <div class="ps4"> <strong>${day}</strong>, ${hours}</div>
        <div class="d-flex align-items-center justify-content-center">
        <strong class="fs-1"> ${temperature}°C</strong>
        <img src="${weatherIcon}"/>
        </div>
      </div>
 <div class="px-3">
    <p class="fs-5"> Real feel: <strong>${realFeel}°C</strong></p>
    <p class="fs-5 text-capitalize">${weatherDescription}</p>
    <p class="fs-5"> Vant: <strong>${windSpeed} km/h </strong> </p>
 </div>   
    

    `;
    });
}
