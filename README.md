# Weather App

A simple web app that shows the current weather for any city. Type in a city name, hit search, and get the temperature, conditions, and a background that changes based on the weather.

## Demo

Project in action!

https://github.com/user-attachments/assets/cbad6b94-29d5-4dd0-bf61-4598e87ab6b4

## How it works

The app has two pages:

- `index.html`: a search page where you enter a city name.
- `weather.html`: displays the weather results for that city.

When you search, the city name is saved in `localStorage` and the browser is redirected to `weather.html`. That page reads the saved city, fetches the current weather from the OpenWeatherMap API, and displays the temperature, description, and a background image that matches the current conditions (clear, clouds, rain, snow, fog, smoke, or thunderstorm).

## Files

- `index.html`, `style.css`, `script.js`: search page and styling.
- `weather.html`, `weather.js`: results page and weather fetch logic.
- `images/`: background images used for each weather condition.

## Setup

1. Clone the repo.
2. Get a free API key from [OpenWeatherMap](https://openweathermap.org/api).
3. Open `weather.js` and replace the `apiKey` value with your own key.
4. Open `index.html` in a browser.

No build step or server is required. This is a static site.

## Possible improvements

- Add error handling for network failures beyond the basic message shown now.
- Support Celsius/Fahrenheit toggle.
- Add a loading state while the API call is in progress.