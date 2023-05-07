import React from 'react'
import Searchbox from './Searchbox'
import Box from '@mui/material/Box'
import Appbar from '@mui/material/AppBar'
import Grid from '@mui/material/Grid'
import DarkModeToggle from './DarkModeToggle'
import WeatherUnitToggle from './WeatherUnitToggle'
import MenuTab from './MenuTab'

function Navbar({ setSearchQuery, onButtonClick }) {
    return (
        <div>
            <Box>
                <Appbar position="static">
                    <Grid container spacing={0}>
                        <Grid item xs={1} className="site-logo center">
                            <img
                                src="https://img.icons8.com/fluency/24/000000/sun.png"
                                alt="Weather icon"
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <Searchbox
                                setSearchQuery={setSearchQuery}
                                onButtonClick={onButtonClick}
                            />
                        </Grid>
                        <Grid item xs={3} className="navbar-nightmode center">
                            <DarkModeToggle />
                            <WeatherUnitToggle />
                        </Grid>
                    </Grid>
                </Appbar>
            </Box>
            <MenuTab />
        </div>
    )
}

export default Navbar
