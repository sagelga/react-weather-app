import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import BasicCard from './BasicCard'

const numberToPercent = (number) => {
    return number + '%'
}

const epochToTime = (epoch) => {
    // This make sure that initial value (0) doesn't convert
    if (epoch === 0) {
        return '00:00'
    }
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

const Dashboard = (props) => {
    // For each row, there will be 2-4 cards per row (depends on the screen size)
    // Each card will contains the title icon, title, main value, and description

    const iconSize = 42
    const iconsBaseUrl = `https://img.icons8.com/fluency/${iconSize}/null/`

    const sunRise = epochToTime(props.weatherData.sys.sunrise)
    const sunSet = epochToTime(props.weatherData.sys.sunset)
    const dayTime = secondToTime(
        props.weatherData.sys.sunset - props.weatherData.sys.sunrise
    )
    const windSpeed = props.weatherData.wind.speed + ' m/s'
    const windDeg = props.weatherData.wind.deg + '°'
    const cloud = numberToPercent(props.weatherData.clouds.all)
    const pressure = props.weatherData.main.pressure + ' hPa'
    const visibility = props.weatherData.visibility + ' m'
    const feelsLike = props.weatherData.main.feels_like
    const humidity = numberToPercent(props.weatherData.main.humidity)
    const timeZone = secondToTime(props.weatherData.timezone)
    const country = props.weatherData.sys.country
    let windGust
    let rain1h
    let snow1h

    try {
        if (props.weatherData.wind.gust) {
            windGust = props.weatherData.wind.gust + ' m/s'
        } else {
            windGust = 'N/A'
        }

        if (props.weatherData.rain) {
            rain1h = Object.values(props.weatherData.rain)[0] + ' mm'
        } else {
            rain1h = '0 mm'
        }

        if (props.weatherData.snow) {
            snow1h = Object.values(props.weatherData.snow)[0] + ' mm'
        } else {
            snow1h = '0 mm'
        }
    } catch {
    }

    return (
        <div className="dashboard">
            <Grid container spacing={2}>
                {
                    [
                        {
                            icon: 'sunrise',
                            title: 'Sunrise',
                            value: sunRise,
                            desc: 'The time of day when the sun appears above the horizon',
                            unit: 'hours',
                        },
                        {
                            icon: 'sunset',
                            title: 'Sunset',
                            value: sunSet,
                            desc: 'The time of day when the sun disappears below the horizon',
                            unit: 'hours',
                        },
                        {
                            icon: 'vaporwave',
                            title: 'Daytime Length',
                            value: dayTime,
                            desc: 'Number of hours of daylight',
                            unit: 'hours',
                        },
                        {
                            icon: 'wind',
                            title: 'Wind Speed',
                            value: windSpeed,
                            desc: 'The speed of the wind',
                            unit: 'miles/hour',
                        },
                        {
                            icon: 'windsock',
                            title: 'Wind Direction',
                            value: windDeg,
                            desc: 'Direction of the wind',
                            unit: 'degrees',
                        },
                        {
                            icon: 'windchill',
                            title: 'Wind Gust',
                            value: windGust,
                            desc: 'Maximum speed of the wind',
                            unit: 'miles/hour',
                        },
                        {
                            icon: 'cloud',
                            title: 'Cloud Cover',
                            value: cloud,
                            desc: 'Percentage of sky covered by clouds',
                            unit: '%',
                        },
                        {
                            icon: 'atmospheric-pressure',
                            title: 'Pressure',
                            value: pressure,
                            desc: "The weight of the air pushing down on the Earth's surface",
                            unit: 'millibars',
                        },
                        {
                            icon: 'visible',
                            title: 'Visibility',
                            value: visibility,
                            desc: 'Distance at which an object can be seen',
                            unit: 'kilometers',
                        },
                        {
                            icon: 'temperature',
                            title: 'Feels Like',
                            value: feelsLike,
                            desc: 'Temperature that it feels like',
                            unit: 'celsius',
                        },
                        {
                            icon: 'wet',
                            title: 'Humidity',
                            value: humidity,
                            desc: 'Amount of water vapor in the air',
                            unit: '%',
                        },
                        {
                            icon: 'rain',
                            title: 'Rainfall (1h)',
                            value: rain1h,
                            desc: 'Amount of rain that has fallen in the last hour',
                            unit: 'millimeters',
                        },
                        {
                            icon: 'snow',
                            title: 'Snowfall (1h)',
                            value: snow1h,
                            desc: 'Amount of snow that has fallen in the last hour',
                            unit: 'millimeters',
                        },
                        {
                            icon: 'timezone',
                            title: 'Timezone',
                            value: timeZone,
                        },
                        {
                            icon: 'world-map--v2',
                            title: 'Country',
                            value: country,
                        },
                    ].map((item) => (
                            <Grid xs={4} md={3} lg={2} key={item.id}>
                                <BasicCard
                                    icon={iconsBaseUrl + item.icon}
                                    iconSize={iconSize}
                                    title={item.title}
                                    value={item.value}
                                    desc={item.desc}
                                    unit={item.unit}
                                />
                            </Grid>
                        )
                    )
                }
            </Grid>
        </div>
    )
}

export default Dashboard
