// https://mui.com/material-ui/react-card/

import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

const isValueBlank = (value) => {
    return value === undefined || value === null || value === ''
}

const BasicCard = (props) => {
    // If the value is blank, then show value as N/A, else show the value as normal
    let dataValue = props.value
    if (isValueBlank(props.value)) {
        dataValue = 'N/A'
    }

    return (
        <div>
            <Card className="basic-card" variant="outlined">
                <CardContent>
                    <img
                        src={props.icon + '.png'}
                        alt="Card Icon"
                        height={props.iconSize}
                        width={props.iconSize}
                    />
                    <Typography variant="h5" component="div">
                        {dataValue}
                    </Typography>
                    <Typography sx={{mb: 1.5}} color="text.secondary">
                        {props.title}
                    </Typography>
                    {props.desc && (
                        <Typography
                            sx={{mb: 1.5, fontSize: 12}}
                            color="text.secondary"
                        >
                            {props.desc}
                        </Typography>
                    )}
                    {props.unit && (
                        <Typography
                            sx={{fontSize: 12}}
                            color="text.secondary"
                        >
                            Unit: {props.unit}
                        </Typography>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}

export default BasicCard
