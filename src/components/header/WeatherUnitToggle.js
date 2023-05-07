import React from 'react'
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft'
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter'
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight'
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify'
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
