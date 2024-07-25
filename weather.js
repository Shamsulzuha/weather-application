const w_Search = document.querySelector(".weather_search");
const w_City = document.querySelector(".weather_city");
const w_Date = document.querySelector(".weather_date");
const w_Cloud = document.querySelector(".weather_cloud");
const w_Img = document.querySelector(".weather_img");
const w_Degree = document.querySelector(".weather_degree");
const w_Min = document.querySelector(".weather_min");
const w_Max = document.querySelector(".weather_max");
const w_Feels = document.querySelector(".weather_feels");
const w_Humidity = document.querySelector(".weather_humidity");
const w_Wind = document.querySelector(".weather_wind");
const w_Pressure = document.querySelector(".weather_pressure");

// d365d4c1c64d11c5580c5d51112fd446

let city = "Sydney";
w_Search.addEventListener("submit", (e) => {
  e.preventDefault();

  const cityName = document.querySelector(".city_Name");
  city = cityName.value;
  getWeatherData();
  cityName.value = "";
});

const getWeatherData = async () => {
  apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d365d4c1c64d11c5580c5d51112fd446`;
  try {
    const res = await fetch(apiURL);
    const data = await res.json();
    // console.log(data);
    const { weather, main, dt, sys, name, wind } = data;
    w_City.innerHTML = `${name}, ${sys.country}`;
    w_Date.innerHTML = new Date().toLocaleString();
    w_Cloud.innerHTML = weather[0].main;
    w_Img.innerHTML = `<img class="weather_img" src= "http://openweathermap.org/img/wn/${weather[0].icon}@2x.png"/>`;
    w_Degree.innerHTML = `${main.temp}&#176`;
    w_Min.innerHTML = `Min: ${main.temp_min.toFixed()}&#176`;
    w_Max.innerHTML = `Max: ${main.temp_max.toFixed()}&#176`;
    w_Feels.innerHTML = `${main.feels_like.toFixed()}&#176`;
    w_Humidity.innerHTML = `${main.humidity}%`;
    w_Wind.innerHTML = `${wind.speed} m/s`;
    w_Pressure.innerHTML = `${main.pressure} hPa`;
  } catch (error) {
    console.log("API is not working...");
  }
};

document.body.addEventListener("load", getWeatherData());
