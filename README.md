# React Weather App

a weather app created in React. Powered by OpenWeatherMap and Unsplash.

| Production                                                                                                                                                                | Development |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| [![Netlify Status](https://api.netlify.com/api/v1/badges/ee9346dd-9372-4b34-851e-ee7d4f2689d0/deploy-status)](https://app.netlify.com/sites/frabjous-dusk-79cc84/deploys) |             |

## Description

This is a React-based weather application that leverages the OpenWeatherMap API for fetching weather data and Tailwind CSS for styling.
Additionally, it utilizes Icons8 for weather icons and Unsplash for background images. The source code is later deployed, tested, and hosted on Netlify.

Visit [http://weather-dev.sagelga.com](http://weather-dev.sagelga.com/) to see the app in action.

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
netlify dev
```

## Open Weather Map API

```json
{
    "coord": {
        "lon": 100.6102,
        "lat": 13.6497
    },
    "weather": [
        {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 35.97,
        "feels_like": 41.35,
        "temp_min": 34.99,
        "temp_max": 38.9,
        "pressure": 1004,
        "humidity": 46
    },
    "visibility": 10000,
    "wind": {
        "speed": 5.14,
        "deg": 180
    },
    "rain": {
        "1h": 0.18
    },
    "clouds": {
        "all": 20
    },
    "dt": 1682760755,
    "sys": {
        "type": 1,
        "id": 9241,
        "country": "TH",
        "sunrise": 1682722630,
        "sunset": 1682767955
    },
    "timezone": 25200,
    "id": 1618154,
    "name": "Ban Khlong Samrong",
    "cod": 200
}
```

## Resources

-   React [https://react.dev/learn](https://react.dev/learn)
-   Open Weather Map API [https://openweathermap.org/api](https://openweathermap.org/api)
-   Unsplash API [https://unsplash.com/developers](https://unsplash.com/developers)
-   Icons8 [https://icons8.com/](https://icons8.com/)
-   Tailwind CSS [https://tailwindcss.com/](https://tailwindcss.com/)
-   React Material UI [https://mui.com/](https://mui.com/)
-   Netlify [https://www.netlify.com/](https://www.netlify.com/)
-   Netlify CLI [https://docs.netlify.com/cli/get-started/](https://docs.netlify.com/cli/get-started/)
