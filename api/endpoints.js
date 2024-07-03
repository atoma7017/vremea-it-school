//API key-urile nu ar trebui stocate in format text, nu e sigur
// dar fara un server nu avem cum sa fin 100%, api-ul fiin gratuit in cel mai rau caz se poate bloca temporar aplicatia
//d40500dcd02a863c01e4588776e1cd7c
// ea3e3338d6a2f4fe6d246649169f3479
const API_KEY = "d40500dcd02a863c01e4588776e1cd7c";

//construim link-urile(endpoint-urile) serverele de la care vom primi date

function getCurrentWeatherEndpoint(city) {
  //intotdeauna cand folosim un API, putem obtine informatii extra prin query params
  //lang=ro => Rezultatele vin in romana
  //unites=metric => unitatea de masura va fi grade celsius.
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
  //in link-ul scris mai sus '?' are rol de querry
}

function getForecastEndpoint(city) {
  return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
}
