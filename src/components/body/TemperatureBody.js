import React from 'react'
import Container from '@mui/material/Container'

function TemperatureBody(props) {
    // Building variables from props and passing it to component
    const locationName = props.weatherData.name
    const temperature = props.weatherData.main.temp
    const weatherCondition = props.weatherData.weather[0].description
    const feelsLike = props.weatherData.main.feels_like
    const humidity = props.weatherData.main.humidity

    const metric = 'C°'

    // If there is no value for the name, return an empty div
    if (props.weatherData.name === null) {
        return <div></div>
    }

    return (
        <Container>
            <div className="body-main">
                <div className="body-temperature-main-card">
                    <h2 className="city">Currently in {locationName}, it's</h2>
                    <h1 className="current">
                        {temperature} {metric} with {weatherCondition}
                    </h1>
                    <h2>
                        Feels like {feelsLike} {metric} with {humidity}%
                        humidity
                    </h2>
                </div>
            </div>
        </Container>
    )
}
export default TemperatureBody
