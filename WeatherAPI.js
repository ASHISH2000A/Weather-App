 const  searchBox=document.getElementById("search_Box");
 const  search_btn=document.getElementById("searchBtn");
 const  weatherData=document.querySelector(".weatherData");
 const tempreture=document.querySelector(".tempre");
 const weatherDesc=document.querySelector(".weather_desc");
 const airDesc=document.querySelector(".air_desc");
 const HumidityData=document.querySelector(".Humidity_Dta");
 const imgPath=document.getElementById("imgSrc");
 const  loc_not_fd=document.querySelector(".location-not-found");
 const  weather_IMg=document.querySelector(".weatherIMG");










 
 async function checkWeather(city)
{
    const api_key="064485509338333e25c5b95c603536c2";
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

    const weather_Fetch=await fetch(`${url}`).then(response=>response.json());
            console.log(weather_Fetch);
    
    if(weather_Fetch.cod === `404`)
    {
        loc_not_fd.style.display="flex";
        weather_IMg.style.display="none";
        console.log('error');
        
       return;
    }else
    {
        weather_IMg.style.display="block";
        loc_not_fd.style.display="none";
    }

    tempreture.innerHTML=`${Math.round(weather_Fetch.main.temp -273.15)}<sup>&deg;C</sup>`;
    weatherDesc.innerHTML=`${weather_Fetch.weather[0].description}`
    airDesc.innerHTML=`${Math.round(weather_Fetch.wind.speed)} KM/H`
    HumidityData.innerHTML=`${weather_Fetch.main.humidity}`



    switch(weather_Fetch.weather[0].main)
    {
        case 'Clouds':
            imgPath.src="./img/cloudy.svg";
        break;
        case 'clear sky':
            imgPath.src ="./img/clear-day.svg";
        break;
        case 'few clouds':
            imgPath.src ="./img/clear-day.svg";
        break;
        case 'Haze':
            imgPath.src ="./img/haze.svg";
        break;
        case 'overcast clouds':
            imgPath.src="./img/overcast.svg";
        break;
        case 'scattered clouds':
        imgPath.src ="./img/haze.svg";
        case 'broken clouds':
            imgPath.src="./img/cloudy.svg";
        break;
        case 'shower rain':
            imgPath.src ="./img/rain.svg";
        break;
        case 'rain':
            imgPath.src ="./img/rain.svg";
        break;
        case 'thunderstorm':
            imgPath.src ="./img/thunderstorms.svg";
        break;
        case 'snow':
            imgPath.src="./img/snow.svg";
        break;
        case 'mist':
        imgPath.src ="./img/mist.svg";
       

 }
}



search_btn.addEventListener('click',()=>{
    checkWeather(searchBox.value) 
})