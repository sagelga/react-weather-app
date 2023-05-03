import React from 'react'
// import Container from '@mui/icons-material/Container'
import BasicCard from './BasicCard'
import Grid from '@mui/material/Unstable_Grid2'

const numberToPercent = (number) => {
    return number + '%'
}

const epochToTime = (epoch) => {
    const date = new Date(epoch * 1000)
    return timeUnitFormat(date.getHours(), date.getMinutes())
}

const secondToTime = (seconds) => {
    return timeUnitFormat(Math.floor(seconds / 3600), seconds % 60)
}

const timeUnitFormat = (hour, minute) => {
    console.log(
        hour.toString().padStart(2, '0') +
            ':' +
            minute.toString().padStart(2, '0')
    )
    return (
        hour.toString().padStart(2, '0') +
        ':' +
        minute.toString().padStart(2, '0')
    )
}

function Dashboard(props) {
    // For each row, there will be 2-4 cards per row (depends on the screen size)
    // Each card will contains the title icon, title, main value, and description

    return (
        <div className="dashboard">
            <Grid container spacing={2}>
                {[
                    {
                        icon: 'https://img.icons8.com/fluency/48/null/sunrise.png',
                        title: 'Sunrise',
                        value: epochToTime(props.weatherData.sys.sunrise),
                    },
                    {
                        icon: 'https://img.icons8.com/fluency/48/null/sunset.png',
                        title: 'Sunset',
                        value: epochToTime(props.weatherData.sys.sunset),
                    },
                    {
                        icon: 'https://img.icons8.com/fluency/48/null/wind.png',
                        title: 'Wind Speed',
                        value: props.weatherData.wind.speed,
                    },
                    {
                        icon: 'https://img.icons8.com/fluency/48/null/windsock.png',
                        title: 'Wind Degree',
                        value: props.weatherData.wind.deg,
                    },
                    {
                        icon: 'https://img.icons8.com/fluency/48/null/windchill.png',
                        title: 'Wind Gust',
                        value: props.weatherData.wind.gust,
                    },
                    {
                        icon: 'https://img.icons8.com/fluency/48/null/cloud.png',
                        title: 'Cloud',
                        value: numberToPercent(props.weatherData.clouds.all),
                    },
                    {
                        icon: 'https://img.icons8.com/fluency/48/null/atmospheric-pressure.png',
                        title: 'Pressure',
                        value: props.weatherData.main.pressure,
                    },
                    {
                        icon: 'https://img.icons8.com/fluency/48/null/visible.png',
                        title: 'Visibility',
                        value: props.weatherData.visibility,
                    },
                    {
                        icon: 'https://img.icons8.com/fluency/48/null/temperature.png',
                        title: 'Feels like',
                        value: props.weatherData.main.feels_like,
                    },
                    {
                        icon: 'https://img.icons8.com/fluency/48/null/wet.png',
                        title: 'Humidity',
                        value: numberToPercent(props.weatherData.main.humidity),
                    },
                    {
                        icon: 'https://img.icons8.com/fluency/48/null/timezone.png',
                        title: 'Timezone',
                        value: secondToTime(props.weatherData.timezone),
                    },
                    {
                        icon: 'https://img.icons8.com/fluency/48/null/world-map--v2.png',
                        title: 'Country',
                        value: props.weatherData.sys.country,
                    },
                ].map((item) => (
                    <Grid xs={4} md={3} lg={2}>
                        <BasicCard
                            icon={item.icon}
                            title={item.title}
                            value={item.value}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default Dashboard
