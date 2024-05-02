const getWeather = () => {
  const city = document.getElementById("cityInput").value;

  const apikey = "3caa46314d68d2f367e76a8cb82e974b";

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const weatherInfo = document.getElementById("weatherInfo");

      const description = data.weather[0].description;
      const temperature = data.main.temp;
      const humidity = data.main.humidity;
      const windSpeed = data.wind.speed;

      weatherInfo.innerHTML = `<h3> Description: ${description} </h3>
      
      <h3>Temperature: ${temperature} &#8451</h3>
      <h3>Humidity: ${humidity}%</h3>
      <h3>Wind Speed : ${windSpeed} m/s</h3>
     
      `;
    })

    .catch(error =>{
      console.error('Ooops!, Sorry', error);
      document.getElementById('weatherInfo').innerText ='City Not Found'
    })
};
