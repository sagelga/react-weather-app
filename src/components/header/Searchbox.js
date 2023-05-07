import React from 'react'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import NearMeIcon from '@mui/icons-material/NearMe'
// import Box from '@mui/material/Box'
// import InputBase from '@mui/material/InputBase'
// import Divider from '@mui/material/Divider'

function Searchbox({ setSearchQuery, onButtonClick }) {
    const getLocation = () => {
        onButtonClick()
    }
    return (
        <div className="searchbox">
            <Paper>
                {/* <Box
                    sx={{
                        maxWidth: '100%',
                    }}
                > */}
                <TextField
                    fullWidth
                    id="fullWidth"
                    placeholder="Search for a city"
                    onChange={(event) => setSearchQuery(event.target.value)}
                />
                {/* When the user press the button, it will retrieve users geolocationn data */}
                <IconButton aria-label="location" onClick={getLocation}>
                    <NearMeIcon />
                </IconButton>
                {/* <InputBase
                        placeholder="Search for a city"
                        inputProps={{ 'aria-label': 'Search' }}
                        value={searchQuery}
                        onChange={(event) => setSearchQuery(event.target.value)}
                    /> */}
                {/* </Box> */}
            </Paper>
        </div>
    )
}
export default Searchbox
