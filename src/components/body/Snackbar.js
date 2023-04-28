// Documentation https://mui.com/material-ui/react-snackbar/

function Snackbar(message) {
    return (
        <div className="snackbar">
            <Snackbar
                // open={open}
                autoHideDuration={6000}
                // onClose={handleClose}
                message={message}
                // action={action}
            />
        </div>
    );
}

export default Snackbar;
