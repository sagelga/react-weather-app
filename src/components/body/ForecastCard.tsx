import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

const weatherIconToUrl = (weatherIcon) => {
    // Reference: https://openweathermap.org/weather-conditions
    const iconSize = 42
    const iconsBaseUrl = `https://img.icons8.com/fluency/${iconSize}/null/`
    const weatherCondition = {
        200: 'storm-with-heavy-rain',
        201: 'storm-with-heavy-rain',
        202: 'storm-with-heavy-rain',
        210: 'storm-with-heavy-rain',
        211: 'cloud-lighting',
        212: 'cloud-lighting',
        221: 'cloud-lighting',
        230: 'storm-with-heavy-rain',
        231: 'storm-with-heavy-rain',
        232: 'storm-with-heavy-rain',
        300: 'light-rain',
        301: 'light-rain',
        302: 'light-rain',
        310: 'light-rain',
        311: 'light-rain',
        312: 'light-rain',
        313: 'light-rain',
        314: 'light-rain',
        321: 'light-rain',
        500: 'light-rain',
        501: 'rain',
        502: 'heavy-rain',
        503: 'heavy-rain',
        504: 'heavy-rain',
        511: 'sleet',
        520: 'rain',
        521: 'rain',
        522: 'heavy-rain',
        531: 'heavy-rain',
        600: 'light-snow',
        601: 'snow',
        602: 'snow',
        611: 'sleet',
        612: 'sleet',
        613: 'sleet',
        615: 'sleet',
        616: 'sleet',
        620: 'sleet',
        621: 'snow',
        622: 'snow',
        701: 'haze',
        711: 'haze',
        721: 'haze',
        731: 'particles',
        741: 'haze',
        751: 'particles',
        761: 'particles',
        762: 'particles',
        771: 'tornado',
        781: 'tornado',
        800: 'sun',
        801: 'partly-cloudy-day',
        802: 'partly-cloudy-day',
        803: 'partly-cloudy-day',
        804: 'partly-cloudy-day',
    }

    // Get the weather icon from set of weather conditions. If the weather condition is not found, fallback to 800 (sun)
    let condition = 'sun'
    try {
        condition = weatherCondition[weatherIcon].valueOf()
    } catch {
        console.error('invalid/undefined weather condition id')
    }

    return `${iconsBaseUrl}${condition}.png`
}

const epochToTime = (epoch) => {
    const date = new Date(epoch * 1000)
    const hours = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')
    return `${hours}:${minutes}`
}

const capitalizeText = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
}

const ForecastCard = (props) => {
    const time = epochToTime(props.weatherForecastData.dt)
    // const icon = 'https://img.icons8.com/fluency/32/null/rain'
    const mainWeather = capitalizeText(
        props.weatherForecastData.weather[0].description
    )
    const weatherImg = weatherIconToUrl(props.weatherForecastData.weather[0].id)

    let temperature = 0
    // Evaluate the option
    if (props.valueOption === 'feelsLike') {
        temperature = Math.round(props.weatherForecastData.main.feels_like)
    } else {
        temperature = Math.round(props.weatherForecastData.main.temp)
    }

    return (
        <div>
            <Card className="forecastCard">
                <CardContent>
                    <Typography
                        sx={{ mb: 1.5 }}
                        color="text.secondary"
                        className="center"
                    >
                        {time}
                    </Typography>
                    <Typography variant="h5" component="div" className="center">
                        {`${temperature}°`}
                    </Typography>
                    <img
                        src={weatherImg}
                        className="center"
                        alt="Current weather"
                    ></img>
                    <Typography variant="body2" className="center">
                        {mainWeather}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default ForecastCard
