import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import BasicCard from './BasicCard'

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
    return (
        hour.toString().padStart(2, '0') +
        ':' +
        minute.toString().padStart(2, '0')
    )
}

function Dashboard(props) {
    // For each row, there will be 2-4 cards per row (depends on the screen size)
    // Each card will contains the title icon, title, main value, and description

    const iconSize = 42
    const iconsBaseUrl = `https://img.icons8.com/fluency/${iconSize}/null/`
    const iconsSuffix = '.png'

    return (
        <div className="dashboard">
            <Grid container spacing={2}>
                {[
                    {
                        icon: 'sunrise',
                        title: 'Sunrise',
                        value: epochToTime(props.weatherData.sys.sunrise),
                    },
                    {
                        icon: 'sunset',
                        title: 'Sunset',
                        value: epochToTime(props.weatherData.sys.sunset),
                    },
                    {
                        icon: 'wind',
                        title: 'Wind Speed',
                        value: props.weatherData.wind.speed,
                    },
                    {
                        icon: 'windsock',
                        title: 'Wind Degree',
                        value: props.weatherData.wind.deg,
                    },
                    {
                        icon: 'windchill',
                        title: 'Wind Gust',
                        value: props.weatherData.wind.gust,
                    },
                    {
                        icon: 'cloud',
                        title: 'Cloud',
                        value: numberToPercent(props.weatherData.clouds.all),
                    },
                    {
                        icon: 'atmospheric-pressure',
                        title: 'Pressure',
                        value: props.weatherData.main.pressure,
                    },
                    {
                        icon: 'visible',
                        title: 'Visibility',
                        value: props.weatherData.visibility,
                    },
                    {
                        icon: 'temperature',
                        title: 'Feels like',
                        value: props.weatherData.main.feels_like,
                    },
                    {
                        icon: 'wet',
                        title: 'Humidity',
                        value: numberToPercent(props.weatherData.main.humidity),
                    },
                    {
                        icon: 'timezone',
                        title: 'Timezone',
                        value: secondToTime(props.weatherData.timezone),
                    },
                    {
                        icon: 'world-map--v2',
                        title: 'Country',
                        value: props.weatherData.sys.country,
                    },
                ].map((item) => (
                    <Grid xs={4} md={3} lg={2}>
                        <BasicCard
                            icon={iconsBaseUrl + item.icon + iconsSuffix}
                            iconSize={iconSize}
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
