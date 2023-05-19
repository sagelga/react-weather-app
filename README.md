# React Weather App [![Netlify Status](https://api.netlify.com/api/v1/badges/ee9346dd-9372-4b34-851e-ee7d4f2689d0/deploy-status)](https://app.netlify.com/sites/frabjous-dusk-79cc84/deploys)

a weather app created in React. Powered by OpenWeatherMap and Unsplash.

## Description

This is a React-based weather application that leverages the OpenWeatherMap API for fetching weather data and Tailwind
CSS for styling.
Additionally, it utilizes Icons8 for weather icons and Unsplash for background images. The source code is later
deployed, tested, and hosted on Netlify.

Visit [http://weather.sagelga.com](http://weather.sagelga.com/) to see the app in action.
![Screenshot 2566-05-08 at 22 25 06](https://user-images.githubusercontent.com/13056824/236864847-c13e7c50-4834-46ee-a0e1-15b6b0b3d22a.png)

## Prequisites

-   Node.js version 16.20.0 or higher

## Installation

If you wish to run the app locally, you can clone the repository and run the following commands:

```bash
npm install
npm start
```

but we deployed this project in Netlify. You will have to use the Netlify CLI to run the project locally.

```bash
npm install -g netlify-cli
netlify env:import .env
netlify dev
```

## Components

```mermaid
graph LR
    App --> Announcement
    App --> Navbar
    Navbar --> DarkModeToggle
    Navbar --> MenuTab
    Navbar --> WeatherUnitToggle
    Navbar --> Searchbox
    App --> TemperatureBody
    App --> TemperatureForecast
    TemperatureForecast --> ForecastCard
    App --> Dashboard
    Dashboard --> BasicCard
    App --> Snackbar
    App --> Footer

```

## APIs

Here's all we are going to use API for

### Open Weather Map API

-   Current Weather Data [https://openweathermap.org/current](https://openweathermap.org/current)
-   5 days Forecast Weather Data [https://openweathermap.org/forecast5](https://openweathermap.org/forecast5)
-   Geocoding API [https://openweathermap.org/api/geocoding-api](https://openweathermap.org/api/geocoding-api)

### Unsplash API

-   Unsplash Image
    API [https://unsplash.com/documentation#search-photos](https://unsplash.com/documentation#search-photos)

### IP Info API

-   IP Info address data [https://ipinfo.io](https://ipinfo.io)

## Resources

-   React [https://react.dev/learn](https://react.dev/learn)
-   Open Weather Map API [https://openweathermap.org/api](https://openweathermap.org/api)
-   Unsplash API [https://unsplash.com/developers](https://unsplash.com/developers)
-   Icons8 [https://icons8.com/](https://icons8.com/)
-   Tailwind CSS [https://tailwindcss.com/](https://tailwindcss.com/)
-   React Material UI [https://mui.com/](https://mui.com/)
-   Netlify [https://www.netlify.com/](https://www.netlify.com/)
-   Netlify CLI [https://docs.netlify.com/cli/get-started/](https://docs.netlify.com/cli/get-started/)
-   BlurHash [https://blurha.sh/](https://blurha.sh/)
-   BlurHash for ReactJS [https://github.com/woltapp/react-blurhash](https://github.com/woltapp/react-blurhash)
-   Axios [https://github.com/axios/axios](https://github.com/axios/axios)

## Tools

Here's all the tools I used to develop this project

-   Netlify
-   Postman
-   Visual Studio Code
-   GitHub
-   Cloudflare
