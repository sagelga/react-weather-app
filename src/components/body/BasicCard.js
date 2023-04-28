// https://mui.com/material-ui/react-card/

import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

function BasicCard(props) {
    return (
        <div className="basic-card">
            <Box>
                <Card variant="outlined">
                    <CardContent>
                        <img
                            src="https://img.icons8.com/color/48/null/sun--v1.png"
                            alt="Card Icon"
                        />
                        <Typography variant="h5" component="div">
                            Title
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            subtitle
                        </Typography>
                        <Typography variant="body2">information</Typography>
                    </CardContent>
                </Card>
            </Box>
        </div>
    )
}

export default BasicCard
