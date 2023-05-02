import React from 'react'
// import Container from '@mui/icons-material/Container'
import BasicCard from './BasicCard'

function Dashboard() {
    // For each row, there will be only 3 cards per row
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
