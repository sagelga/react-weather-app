import React from 'react'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

// handles click from the weather unit button
const clickHandler = () => {}

const WeatherUnitToggle = (props) => {
    const [alignment, setAlignment] = React.useState('left')

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment)
    }

    return (
        <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
        >
            <ToggleButton value="left" aria-label="left aligned">
                C°
            </ToggleButton>
            <ToggleButton value="center" aria-label="centered">
                F°
            </ToggleButton>
        </ToggleButtonGroup>
    )
}

export default WeatherUnitToggle
