import React, { useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import Paper from '@mui/material/Paper'
import Toolbar from '@mui/material/Toolbar'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import ForecastCard from './ForecastCard'

const TemperatureForecast = (props) => {
    const [value, setValue] = useState('temperature')

    const weatherForecastData = props.weatherForecastData
    console.log(weatherForecastData)

    const toggleButtonChangeHandler = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <div className="temperature-forecast">
            <Paper>
                <Toolbar disableGutters>
                    <h2>Forecast</h2>
                    <ToggleButtonGroup
                        value={value}
                        exclusive
                        onChange={toggleButtonChangeHandler}
                        aria-label="text alignment"
                    >
                        <ToggleButton
                            value="temperature"
                            aria-label="temperature"
                        >
                            Temperature
                        </ToggleButton>
                        <ToggleButton value="feelsLike" aria-label="feels like">
                            Feels Like
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Toolbar>

                <Grid container spacing={1} className="forecastCardGrid">
                    {weatherForecastData.map((item) => (
                        <Grid xs={2} md={2} lg={1} key={item.id}>
                            <ForecastCard
                                weatherForecastData={item}
                                valueOption={value}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Paper>
        </div>
    )
}

export default TemperatureForecast
