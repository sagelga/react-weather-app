import React from 'react'
import Searchbox from './Searchbox'
import Box from '@mui/material/Box'
import Appbar from '@mui/material/AppBar'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import NightModeIcon from '@mui/icons-material/NightlightRound'

function Navbar() {
    return (
        <Box>
            <Appbar position="static">
                <Grid container spacing={0.5}>
                    <Grid item lg={1} className="site-logo">
                        <img src="https://img.icons8.com/fluency/24/000000/sun.png" />
                    </Grid>
                    <Grid item lg={8}>
                        <Searchbox />
                    </Grid>
                    <Grid item lg={3} className="navbar-nightmode">
                        <IconButton
                            type="button"
                            sx={{ p: '10px' }}
                            aria-label="night-mode"
                        >
                            <NightModeIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Appbar>
        </Box>
    )
}

export default Navbar
