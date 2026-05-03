async function getWeather() {
  const apiKey = "269a5070235e6353963418a549ed5608";

  const city = document.getElementById("cityInput").value.trim();
  if (!city) return;

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`
  );

  const data = await response.json();

  if (!response.ok) {
    console.log("API Error:", data.message);
    return;
  }

  const temp = data.main.temp;
  const condition = data.weather[0].description;
}