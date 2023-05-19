import React from 'react'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

const WeatherUnitToggle = (props) => {
    const [option, setOption] = React.useState('left')

    const handleoption = (event, newoption) => {
        setOption(newoption)
    }

    return (
        <ToggleButtonGroup
            color="secondary"
            value={option}
            exclusive
            onChange={handleoption}
            aria-label="outlined primary button group"
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
