import React from 'react'
import UserData from './UserData'
import IssueContainer from './IssueContainer'
import ChartContainer from './Visualization/ChartContainer'

const AdminHome = () => {
    return (
        <>
            <ChartContainer />
            <IssueContainer />
            <UserData />
        </>
    )
}

export default AdminHome