async function getWeather() {
  const apiKey = "269a5070235e6353963418a549ed5608";

  const city = localStorage.getItem("city");
  if (!city) {
    document.getElementById("city").textContent = "No city selected.";
    return;
  }

  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`);

    const data = await response.json();

    if (!response.ok) {
      console.log("API Error:", data.message);
      document.getElementById("city").textContent = "City not found";
      document.body.style.background = "black";
      return;
    }

    const temp = Math.round(data.main.temp)
    const description = data.weather[0].description
    const mainWeather = data.weather[0].main;

    document.getElementById("city").textContent = city;
    document.getElementById("temp").textContent = `${temp}°F`;
    document.getElementById("description").textContent = description;

    setBackground(mainWeather);
  }
  
  catch(err) {
    console.log("Fetch Failed: ",err);
    document.getElementById("city").textContent = "Something went wrong.";
    return;
  }
}

function setBackground(weather) {
  console.log(weather);
  const body = document.body;

  // Clear, clouds, rain, drizzle, thunderstorm, snow, mist, smoke, haze, dust, fog, sand, ash, squall, tornado

  switch(weather) {
    case "Clear":
      body.style.background = "url('images/clear.jpg')";
      break;
    case "Clouds":
      body.style.background = "url('images/clouds.jpg')";
      break;
    case "Rain":
    case "Drizzle":
      body.style.background = "url('images/rain.webp')";
      break;
    case "Snow":
      body.style.background = "url('images/snow.jpeg')";
      break;
    case "Mist":
    case "Haze":
    case "Fog":
      body.style.background = "url('images/fog.jpeg')";
      break;
    case "Smoke":
    case "Dust":
    case "Ash":
    case "Sand":
      body.style.background = "url('images/smoke.jpeg')";
      break;
    case "Thunderstorm":
    case "Tornado":
      body.style.background = "url('images/thunderstorm.webp')"
      break;
    default:
      body.style.background = "linear-gradient(to bottom, #0f172a, #2563eb)";
  }

  body.style.backgroundSize = "cover";
  body.style.backgroundPosition = "center";
}

getWeather();