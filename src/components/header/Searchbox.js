import React from 'react'
import { styled, alpha } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import NearMeIcon from '@mui/icons-material/NearMe'
import InputBase from '@mui/material/InputBase'

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

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}))

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

const Searchbox = ({ setSearchQuery, onButtonClick }) => {
    // Handle location
    const locationButtonHandler = () => {
        onButtonClick()
    }

    return (
        <div className="searchbox">
            <Search>
                <IconButton
                    xs="auto"
                    aria-label="location"
                    onClick={locationButtonHandler}
                >
                    <NearMeIcon />
                </IconButton>
                <StyledInputBase
                    inputProps={{ 'aria-label': 'search' }}
                    xs={11}
                    placeholder="Search for a city"
                    onChange={(event) => setSearchQuery(event.target.value)}
                />
            </Search>
        </div>
    )
}
export default Searchbox
