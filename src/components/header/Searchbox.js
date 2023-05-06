import React from 'react'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
// import Box from '@mui/material/Box'
// import InputBase from '@mui/material/InputBase'
// import IconButton from '@mui/material/IconButton'
// import SearchIcon from '@mui/icons-material/Search'
// import Divider from '@mui/material/Divider'

function Searchbox({ setSearchQuery }) {
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
                    multiline
                    id="fullWidth"
                    placeholder="Search for a city"
                    onChange={(event) => setSearchQuery(event.target.value)}
                />
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
