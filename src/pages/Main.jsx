import { Box, Container, List, ListItem, Paper, Typography } from '@mui/material'
import React from 'react'
import PageHeader from '../components/PageHeader'
import CardComponent from '../cards/components/Card/CardComponent';
import dummyCard from '../helpers/dummyCard';


export default function Main() {
    return (
        <Container>
            <PageHeader title='BCard' subTitle='Welcome to the Cards Buissness App, Here you will find your buissness' />
            <Box>
                <Typography sx={{ m: '10px', fontSize: '1.5em' }}>Welcome To BCard</Typography>
                <Paper sx={{ padding: '20px', fontFamily: 'roboto', lineHeight: '1.5', textAlign: 'justify' }}>
                    Welcome to Buissness Card App, your one-stop solution for discovering and sharing business information.<br />
                    Whether you're looking for local shops, services, or businesses, or you're a business owner wanting to showcase<br /> your brand, our platform is designed to connect you with the community in the most efficient way.
                </Paper>
                <Typography sx={{ m: '10px', fontSize: '1.5em' }}>Not A Buissness?</Typography>
                <Paper sx={{ padding: '20px', fontFamily: 'roboto', lineHeight: '1.5', textAlign: 'justify' }}>
                    As a regular user, BCard offers you a personalized experience where you can explore and discover a wide range of business cards.<br /> You can like and save your favorite businesses, making it easy to keep track of the ones you love.<br /> Whether you're looking for a new service provider or want to stay updated on your preferred shops, BCard keeps everything in one convenient place.
                    <Typography>Benefits:</Typography>
                    <List>
                        <ListItem><span style={{ textDecoration: 'underLine' }}>Discover New Businesses:</span> Explore a variety of shops, services, and local businesses</ListItem>
                        <ListItem><span style={{ textDecoration: 'underLine' }}>Save Favorites:</span> Like and keep track of the businesses you care about.</ListItem>
                        <ListItem><span style={{ textDecoration: 'underLine' }}>Stay Informed:</span> Easily access the latest updates from your favorite businesses.</ListItem>
                    </List>
                </Paper>
                <Typography sx={{ m: '10px', fontSize: '1.5em' }}>Are You a Buissness?</Typography>
                <Paper sx={{ padding: '20px', fontFamily: 'roboto', lineHeight: '1.5', textAlign: 'justify' }}>
                    As a business user, BCard is your digital gateway to connect with potential customers.<br /> You can create, manage, and showcase your business card to a broader audience.<br /> Update your information as needed, and ensure your business stands out with a professional online presence.
                    <Typography>Benefits:</Typography>
                    <List>
                        <ListItem><span style={{ textDecoration: 'underLine' }}>Create and Manage Business Cards:</span> Easily create a digital business card that represents your brand.</ListItem>
                        <ListItem><span style={{ textDecoration: 'underLine' }}>Reach New Customers:</span> Increase your visibility by showcasing your business to users looking for services you provide.</ListItem>
                        <ListItem><span style={{ textDecoration: 'underLine' }}>Real-Time Updates:</span> Edit and update your business information anytime to keep your audience informed.</ListItem>
                    </List>
                </Paper>
                <Typography sx={{ m: '10px', fontSize: '1.5em' }}>Card Example:</Typography>
                <Paper sx={{ padding: '20px', fontFamily: 'roboto', lineHeight: '1.5', textAlign: 'justify', display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
                    <List sx={{ width: { xs: '100%', md: '70%' } }}>
                        <ListItem>
                            Title:<br /> This is the name of your business, prominently displayed to immediately catch the eye of potential customers. It serves as the first introduction to your brand.
                        </ListItem>
                        <ListItem>
                            Subtitle:<br /> A brief tagline or secondary title that provides a quick insight into the nature of your business. This is where you can sum up what makes your business unique in just a few words.
                        </ListItem>
                        <ListItem>
                            Description:<br /> The heart of your business card, the description allows you to elaborate on what your business does, what services or products you offer, and what sets you apart from the competition. This is your opportunity to connect with your audience and give them a reason to choose your business.
                        </ListItem>
                        <ListItem>
                            Contact Information:<br /> Finally, the card includes essential contact details, such as phone numbers, email addresses, and website links, making it easy for customers to reach out to you directly.
                        </ListItem>
                    </List>
                    <CardComponent card={dummyCard} handleLike={() => { }} handleDelete={() => { }} handleEdit={() => { }} />
                </Paper>
            </Box>
        </Container>
    )
}
