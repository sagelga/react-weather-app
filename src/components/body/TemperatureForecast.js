import React from 'react'
import ForecastCard from './ForecastCard'
import Grid from '@mui/material/Unstable_Grid2'
import Paper from '@mui/material/Paper'

import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

const TemperatureForecast = (props) => {
    const [value, setValue] = React.useState(0)

    const handleChange = (event, newValue) => {
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
                        onChange={handleChange}
                        aria-label="text alignment"
                    >
                        <ToggleButton value="left" aria-label="left aligned">
                            Temperature
                        </ToggleButton>
                        <ToggleButton value="center" aria-label="centered">
                            Feels Like
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Toolbar>
                <Grid container spacing={1}>
                    <Grid xs={3} md={2} lg={1}>
                        <ForecastCard />
                    </Grid>
                    <Grid xs={3} md={2} lg={1}>
                        <ForecastCard />
                    </Grid>{' '}
                    <Grid xs={3} md={2} lg={1}>
                        <ForecastCard />
                    </Grid>{' '}
                    <Grid xs={3} md={2} lg={1}>
                        <ForecastCard />
                    </Grid>{' '}
                    <Grid xs={3} md={2} lg={1}>
                        <ForecastCard />
                    </Grid>
                    <Grid xs={3} md={2} lg={1}>
                        <ForecastCard />
                    </Grid>{' '}
                    <Grid xs={3} md={2} lg={1}>
                        <ForecastCard />
                    </Grid>{' '}
                    <Grid xs={3} md={2} lg={1}>
                        <ForecastCard />
                    </Grid>{' '}
                    <Grid xs={3} md={2} lg={1}>
                        <ForecastCard />
                    </Grid>{' '}
                    <Grid xs={3} md={2} lg={1}>
                        <ForecastCard />
                    </Grid>
                    <Grid xs={3} md={2} lg={1}>
                        <ForecastCard />
                    </Grid>
                    <Grid xs={3} md={2} lg={1}>
                        <ForecastCard />
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default TemperatureForecast
