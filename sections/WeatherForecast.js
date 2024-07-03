//declararea functiei pt afisarea predictiei/ prognozei pe 5 zile. Apelul se face in alte fisiere

function displayWeatherForecast(city) {
  //generam link-ul serverului pe baza orasului
  const forecastEndpoint = getForecastEndpoint(city);

  //inainte sa face cererea catre server si sa afisam noile informatii, le stergem de pe ecran pe cele vechi
  let weatherForecastContainer = document.querySelector(".weather-forecast");
  weatherForecastContainer.innerHTML = "";

  fetch(forecastEndpoint)
    .then((response) => response.json())
    .then((data) => {
      //din datele venite, pe noi ne intereseaza doar array-ul list

      const { list } = data;

      //avem nevoie de un obiect in care sa grupam predictiile pe zile:
      const daysMap = {};
      //Iteram prin cele 40 de predictii primite de la server
      list.forEach((element) => {
        //extragem data predictiei
        const { dt } = element;
        //getDayOfTheWeek este creata de noi, un utils/date
        const day = getDayOfTheWeek(dt);
        //daca deja avem ziua saptamanii in obiect, ii adaugam noua predictie
        if (daysMap[day]) {
          daysMap[day].push(element);
          //altfel adaugam ziua saptamnii in obiect, alaturi de o noua predictie
        } else {
          daysMap[day] = [element];
        }
      });
      //parcurgerea cu for..in continutul obiectului daysMap. Cheile sunt zilele saptamanii pentru care avem predictii
      for (key in daysMap) {
        //afisam ziua saptamnii pe ecran
        weatherForecastContainer.innerHTML += `<h3 class="text-primary">${key}</h3>`;
        //pentru fiecare zi a saptamanii extragem predictiile asciate si iteram prin ele

        let days = daysMap[key];
        days.forEach((element) => {
          //pt fiecare element(predictie), extragem datele de interes
          const { dt, main, weather } = element;
          //getHour este creata de noi, in utils/ date
          const hour = getHour(dt);
          //rotunjim temperaturile extrase din link-ul de unde e api-ul dintr-un obiect
          const temperature = Math.round(main.temp);
          const realFeel = Math.round(main.feels_like);
          //atentie weather este un array, cu un singur element, adica cu index 0
          const weatherDescription = weather[0].description;
          //getweatherIcon este creata de noi, in utils/weather.js
          const weatherIcon = getWeatherIcon(weather[0].icon);
          //afisam pe ecran informatiile extrase din AP
          weatherForecastContainer.innerHTML += ` 
          <div class="weather-forecast-box w-100 d-flex justify-content-between align-items-center border rounded p-3 mb-3">
            <div >${hour}</div>
            <div ><img src="${weatherIcon}" alt=" "/></div>
            <div class=""fs-3"><strong>${temperature}°C</strong></div>
            <div >${weatherDescription}</div>
            <div class="real-feel"> Real Feel:<strong>${realFeel}°C</strong></div>
          </div>
          `;
        });
      }
    });
}
