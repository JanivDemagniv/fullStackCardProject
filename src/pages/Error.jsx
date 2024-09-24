import React from 'react'
import PageHeader from '../components/PageHeader'
import { Box, Button, Paper } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import ROUTES from '../routes/routesModuel'



export default function Error() {
    const navigate = useNavigate()
    return (
        <>
            <PageHeader title={"Error 404"} subTitle={"Page not found"} />
            <Box sx={{ display: "flex", flexDirection: 'column', alignItems: 'center', width: '500px', margin: '0 auto' }}>
                <img src='/images/robot.png' alt="robot" width='300px' />
                <Paper sx={{ p: '10px', m: '10px' }}>There is No Page Like That</Paper>
                <Button onClick={() => navigate(ROUTES.ROOT)} variant='contained' >Return to main page</Button>
            </Box>
        </>
    )
}
