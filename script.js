function searchWeather() {
  const city = document.getElementById("cityInput").value.trim()
  if (!city) return;

  localStorage.setItem("city", city)
  window.location.href = "weather.html"
}