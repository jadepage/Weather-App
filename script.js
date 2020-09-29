let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

// Retrieve weather data from openweathermap
getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  //HINT: Use template literals to create a url with input and an API key
  const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
  //CODE GOES HERE
  const weatherPromise = fetch(FULL_URL);
  return weatherPromise.then((response) => {
    return response.json();
  });
};

// Retrieve city input and get the weather data
searchCity = () => {
  const city = document.getElementById("city-input").value;
  // CODE GOES HERE
  getWeatherData(city)
    .then((response) => {
      showWeatherData(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

// Show the weather data in HTML
showWeatherData = (weatherData) => {
  document.querySelector("#city-name").innerText = weatherData.name;
  document.querySelector("#weather-type").innerText =
    weatherData.weather[0].description;
  document.querySelector("#temp").innerText = weatherData.main.temp;
  document.querySelector("#min-temp").innerText = weatherData.main.temp_min;
  document.querySelector("#max-temp").innerText = weatherData.main.temp_max;
};
