const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const loc = document.querySelector('.loc-not-found');
const weatherBody = document.querySelector('.weather-body');

async function chechWeather(city){
    const api_key = "330b3d869044c028e029deaf0a771d47";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data = await fetch(`${url}`).then(response => response.json());


    if(weather_data.cod === `404`){
        loc.style.display = "flex";
        weatherBody.style.display = "none";
        console.log(weather_data);
        return;
    }
    loc.style.display = "none";
    weatherBody.style.display = "flex";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed *3.6} Km/h`;

    switch(weather_data.weather[0].main)
    {
        case "Clouds":
            weather_img.src = "images/cloud1.webp";
            break;
        case "Clear":
            weather_img.src = "images/clear.png";
            break;
        case "Rain":
            weather_img.src = "images/rain.png";
            break;

        case "Mist":
            weather_img.src = "images/mist.png";
            break;
        case "Snow":
            weather_img.src = "images/snow.png";
            break;


    }

    console.log(weather_data);
}


searchBtn.addEventListener('click', () => {
    chechWeather(inputBox.value);

});