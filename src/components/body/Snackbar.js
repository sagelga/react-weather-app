import React from 'react'

// Documentation https://mui.com/material-ui/react-snackbar/
function Snackbar(props) {
    return (
        <div className="snackbar">
            <Snackbar
                // open={open}
                autoHideDuration={6000}
                // onClose={handleClose}
                message={props.message}
                // action={action}
            />
        </div>
    )
}

export default Snackbar