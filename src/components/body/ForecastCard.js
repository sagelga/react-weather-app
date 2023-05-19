import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

const ForecastCard = () => {
    return (
        <div>
            <Card>
                <CardContent>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        09:00
                    </Typography>
                    <img
                        src="https://img.icons8.com/fluency/32/null/rain"
                        className="center"
                        alt="Current weather"
                    ></img>
                    <Typography variant="h5" component="div" className="center">
                        28
                    </Typography>
                    <Typography variant="body2" className="center">
                        Cloudy
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default ForecastCard
