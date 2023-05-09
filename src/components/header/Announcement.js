import React from 'react'

const Announcement = (props) => {
    return (
        <div className="announcement">
            <p>{props.message}</p>
        </div>
    )
}

export default Announcement
