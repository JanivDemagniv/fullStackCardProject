import React from 'react'
import PageHeader from '../components/PageHeader'
import { Box, Container, Typography } from '@mui/material'

export default function About() {
    return (
        <Container>
            <PageHeader title={"About"} subTitle={"This is Our Story"} />
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, width: { xs: '100%', md: "60%" }, margin: '0 auto' }}>
                <Typography variant='body1' sx={{ fontFamily: "roboto" }}>
                    BCard is designed to bridge the gap between businesses and consumers in the digital age. We provide a platform where users can discover local businesses, services, and shops, all in one place. Our mission is to make it easier for consumers to find what they need while giving businesses the tools they need to succeed online.
                    <br />
                    <br />
                    Whether you're a consumer looking to discover new services or a business owner wanting to increase your reach, BCard is here to help you connect. Our platform is user-friendly, efficient, and designed to meet the needs of both users and business owners alike.
                </Typography>
                <img src='/images/card.png' style={{ height: "350px", width: '250px' }} alt='card' />
            </Box>
        </Container>
    )
}
