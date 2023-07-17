// Reference: https://mui.com/material-ui/react-tabs/
import React from 'react'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Container from '@mui/material/Container'

const MenuTab = () => {
    const [value, setValue] = React.useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <Box className="menu-tab-container" sx={{ width: '100%' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                className="menu-tab"
                textColor="secondary"
                indicatorColor="secondary"
            >
                <Tab
                    label={
                        <div className="menutab-tab">
                            <img
                                src="https://img.icons8.com/fluency/14/null/partly-cloudy-day.png"
                                alt="Rain"
                                className="label-image"
                            />
                            Weather
                        </div>
                    }
                />
                <Tab
                    label={
                        <div className="menutab-tab">
                            <img
                                src="https://img.icons8.com/fluency/14/null/forage.png"
                                alt="Rain"
                                className="label-image"
                            />
                            Air Quality
                        </div>
                    }
                />
                <Tab
                    label={
                        <div className="menutab-tab">
                            <img
                                src="https://img.icons8.com/fluency/14/null/sun.png"
                                alt="Rain"
                                className="label-image"
                            />
                            Sun & Outdoor
                        </div>
                    }
                />
                <Tab
                    label={
                        <div className="menutab-tab">
                            <img
                                src="https://img.icons8.com/fluency/14/null/wind.png"
                                alt="Rain"
                                className="label-image"
                            />
                            Wind
                        </div>
                    }
                />
                <Tab
                    label={
                        <div className="menutab-tab">
                            <img
                                src="https://img.icons8.com/fluency/14/null/water.png"
                                alt="Rain"
                                className="label-image"
                            />
                            Rain
                        </div>
                    }
                />
            </Tabs>
        </Box>
    )
}

export default MenuTab
