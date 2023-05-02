import React from 'react'
// import Container from '@mui/icons-material/Container'
import BasicCard from './BasicCard'

function Dashboard(props) {
    // For each row, there will be 2-4 cards per row (depends on the screen size)
    // Each card will contains the title icon, title, main value, and description
    return (
        <div className="dashboard">
            {/* <Container> */}
            <BasicCard />
            <BasicCard />
            <BasicCard />
            {/* </Container> */}
        </div>
    )
}

export default Dashboard
