import React from 'react'
import { useEffect } from 'react'
// import Dashboard from './Dashboard'

function TemperatureBody(props) {
    return (
        <div className="body-main">
            <div className="body-temperature-main-card">
                <h2 className="city">in {props.name}, it's</h2>
                <h1 className="current">
                    {props.temp} C° with {props.description}
                </h1>
                <h2>
                    Feels like {props.feels_like} C° with {props.humidity}%
                    humidity
                </h2>
            </div>
            {/* <div className="body-dashboard">
                <Dashboard />
            </div> */}
        </div>
    )
}
export default TemperatureBody
