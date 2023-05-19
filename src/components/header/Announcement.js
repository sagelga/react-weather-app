import React from 'react'
import Alert from '@mui/material/Alert'

const Announcement = (props) => {
    return (
        <div className="announcement">
            {props.message && <Alert severity="error">{props.message}</Alert>}{' '}
        </div>
    )
}

export default Announcement
