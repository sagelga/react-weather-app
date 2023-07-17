import React from 'react'
import Searchbox from './Searchbox'
import Box from '@mui/material/Box'
import Appbar from '@mui/material/AppBar'
import Grid from '@mui/material/Grid'
import DarkModeToggle from '../header/DarkModeToggle'
import WeatherUnitToggle from '../header/WeatherUnitToggle'
import MenuTab from '../header/MenuTab'

const Navbar = ({
    searchQuery,
    geolocation,
    announceMessage,
    darkMode,
    weatherUnit,
}) => {
    return (
        <div>
            <Box>
                <Appbar position="static">
                    <Grid container spacing={0}>
                        <Grid item xs="auto" className="site-logo center">
                            <img
                                src="https://img.icons8.com/fluency/24/000000/sun.png"
                                alt="Weather icon"
                            />
                        </Grid>
                        <Grid item xs={10}>
                            <Searchbox
                                searchQuery={searchQuery}
                                geolocation={geolocation}
                                announceMessage={announceMessage}
                            />
                        </Grid>
                        <Grid item className="navbar-nightmode center">
                            <DarkModeToggle darkMode={darkMode} />
                            <WeatherUnitToggle weatherMetric={weatherUnit} />
                        </Grid>
                    </Grid>
                </Appbar>
            </Box>
            <MenuTab />
        </div>
    )
}

export default Navbar
