import React from 'react'
// import Container from '@mui/icons-material/Container'
import BasicCard from './BasicCard'
import Grid from '@mui/material/Unstable_Grid2'

function Dashboard(props) {
    // For each row, there will be 2-4 cards per row (depends on the screen size)
    // Each card will contains the title icon, title, main value, and description
    return (
        <div className="dashboard">
            <Grid container spacing={2}>
                <Grid xs={6} md={4} lg={3}>
                    <BasicCard
                        icon="https://img.icons8.com/color/48/null/sun--v1.png"
                        title="Sunrise"
                        value={props.weatherData.sys.sunrise}
                    />
                </Grid>
                <Grid xs={6} md={4} lg={3}>
                    <BasicCard
                        icon="https://img.icons8.com/color/48/null/sun--v1.png"
                        title="Sunset"
                        value={props.weatherData.sys.sunset}
                    />{' '}
                </Grid>
                <Grid xs={6} md={4} lg={3}>
                    <BasicCard
                        icon="https://img.icons8.com/color/48/null/sun--v1.png"
                        title="Wind"
                        value={props.weatherData.wind.speed}
                    />
                </Grid>
                <Grid xs={6} md={4} lg={3}>
                    <BasicCard
                        icon="https://img.icons8.com/color/48/null/sun--v1.png"
                        title="Cloud"
                        value={props.weatherData.clouds.all}
                    />
                </Grid>
                <Grid xs={6} md={4} lg={3}>
                    <BasicCard
                        icon="https://img.icons8.com/color/48/null/sun--v1.png"
                        title="Pressure"
                        value={props.weatherData.main.pressure}
                    />
                </Grid>
                <Grid xs={6} md={4} lg={3}>
                    <BasicCard
                        icon="https://img.icons8.com/color/48/null/sun--v1.png"
                        title="Visibility"
                        value={props.weatherData.visibility}
                    />
                </Grid>
                <Grid xs={6} md={4} lg={3}>
                    <BasicCard
                        icon="https://img.icons8.com/color/48/null/sun--v1.png"
                        title="Feels like"
                        value={props.weatherData.main.feels_like}
                    />
                </Grid>
                <Grid xs={6} md={4} lg={3}>
                    <BasicCard
                        icon="https://img.icons8.com/color/48/null/sun--v1.png"
                        title="Humidity"
                        value={props.weatherData.main.humidity}
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default Dashboard
