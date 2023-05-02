// https://mui.com/material-ui/react-card/

import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

function BasicCard(props) {
    return (
        <div className="basic-card">
            <Card variant="outlined">
                <CardContent>
                    <img src={props.icon} alt="Card Icon" loading="lazy" />
                    <Typography variant="h5" component="div">
                        {props.value}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {props.title}
                    </Typography>
                    {/* <Typography variant="body2">details</Typography> */}
                </CardContent>
            </Card>
        </div>
    )
}

export default BasicCard
