import React from 'react'

import { alpha, styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import NearMeIcon from '@mui/icons-material/NearMe'
import InputBase from '@mui/material/InputBase'

const service = {
    openWeather: {
        current: 'https://api.openweathermap.org/data/2.5/weather',
        forecast: 'https://api.openweathermap.org/data/2.5/forecast',
        geoCode: {
            direct: 'https://api.openweathermap.org/geo/1.0/direct',
            reverse: 'https://api.openweathermap.org/geo/1.0/reverse',
        },
        key: process.env.REACT_APP_OPEN_WEATHER_API_KEY,
    },
}

const Search = styled('div')(({ theme }) => ({
    color: 'black',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.85),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 1),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}))

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
// }))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}))

const Searchbox = (props) => {
    // Handle location by retrieving user's navigation.geolocation
    const locationButtonPressHandler = () => {
        const userGeolocation = navigator.geolocation
        if (userGeolocation) {
            props.announceMessage('Retrieving location') // @todo : Replace this with spinner

            userGeolocation.getCurrentPosition(async (position) => {
                const geolocation = {
                    lat: position.coords.latitude,
                    lon: position.coords.longitude,
                }
                props.geolocation(geolocation)
            })
        } else {
            props.announceMessage(
                "We don't have an access to your location, please enter your location manually or click 'Allow' on location"
            )
        }
    }

    // Converts searchQuery given by Search Box to a geolocation. Add debouncing timer to 700ms
    const searchQueryChangeHandler = (() => {
        let timeoutId

        return (event) => {
            const searchQuery = event.target.value
            // console.log(searchQuery);

            clearTimeout(timeoutId)

            timeoutId = setTimeout(async () => {
                if (searchQuery) {
                    const url = `${service.openWeather.geoCode.direct}?q=${searchQuery}&appid=${service.openWeather.key}`

                    await fetch(url)
                        .then((response) => response.json())
                        .then((data) => {
                            const geolocation = {
                                lat: data[0].lat,
                                lon: data[0].lon,
                            }
                            props.searchQuery(searchQuery) // Stores searchQuery value
                            props.geolocation(geolocation) // Stores geolocation
                        })
                }
            }, 700)
        }
    })()

    return (
        <div className="searchbox">
            <Search>
                <StyledInputBase
                    inputProps={{ 'aria-label': 'search' }}
                    placeholder="Search for a city"
                    onChange={searchQueryChangeHandler}
                    className="searchbox-input"
                />
                <IconButton
                    xs="auto"
                    aria-label="location"
                    onClick={locationButtonPressHandler}
                >
                    <NearMeIcon />
                </IconButton>
            </Search>
        </div>
    )
}
export default Searchbox
