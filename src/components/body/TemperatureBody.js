import React from 'react'
import Container from '@mui/material/Container'

function TemperatureBody(props) {
    return (
        <Container>
            <div className="body-main">
                <div className="body-temperature-main-card">
                    <h2 className="city">
                        Currently in {props.weatherData.name}, it's
                    </h2>
                    <h1 className="current">
                        {props.weatherData.main.temp} C° with{' '}
                        {props.weatherData.weather[0].description}
                    </h1>
                    <h2>
                        Feels like {props.weatherData.main.feels_like} C° with{' '}
                        {props.weatherData.main.humidity}% humidity
                    </h2>
                </div>
            </div>
        </Container>
    )
}
export default TemperatureBody
