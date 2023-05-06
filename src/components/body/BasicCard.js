// https://mui.com/material-ui/react-card/

import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

function BasicCard(props) {
    let dataValue = props.value
    const isValueBlank = (value) => {
        return value === undefined || value === null || value === ''
    }

    // If the value is blank, then show value as - (dash).
    // Else, show the value as normal
    if (isValueBlank(props.value)) {
        dataValue = 'N/A'
    }

    return (
        <div className="basic-card">
            <Card variant="outlined">
                <CardContent>
                    <img
                        src={props.icon}
                        alt="Card Icon"
                        height={props.iconSize + 'px'}
                        width={props.iconSize + 'px'}
                    />
                    <Typography variant="h5" component="div">
                        {dataValue}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {props.title}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default BasicCard
