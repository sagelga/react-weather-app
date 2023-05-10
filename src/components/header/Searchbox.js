import React from 'react'
import { styled, alpha } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import NearMeIcon from '@mui/icons-material/NearMe'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'
import Grid from '@mui/material/Unstable_Grid2'

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

const Searchbox = ({ setSearchQuery, getLocation }) => {
    // Handle location
    const locationButtonHandler = () => {
        getLocation()
    }

    return (
        <div className="searchbox">
            <Search>
                {/* <SearchIcon className="center" /> */}
                <StyledInputBase
                    inputProps={{ 'aria-label': 'search' }}
                    placeholder="Search for a city"
                    onChange={(event) => setSearchQuery(event.target.value)}
                    className="searchbox-input"
                />
                <IconButton
                    xs="auto"
                    aria-label="location"
                    onClick={locationButtonHandler}
                >
                    <NearMeIcon />
                </IconButton>
            </Search>
        </div>
    )
}
export default Searchbox
