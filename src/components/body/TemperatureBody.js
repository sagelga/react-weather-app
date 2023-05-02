import React from 'react'

function TemperatureBody(props) {
    return (
        <div className="body-main">
            <div className="body-temperature-main-card">
                <h2 className="city">in {props.weatherData.name}, it's</h2>
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
    )
}
export default TemperatureBody
