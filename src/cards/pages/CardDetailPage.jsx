import { Box, Card, CardContent, CardMedia, Container, Divider, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useCards from '../hooks/useCards';
import Spinner from '../../components/Spiner';
import Error from '../../components/Error'
import PageHeader from '../../components/PageHeader';
import CardActionBar from '../components/Card/CardActionBar';
import { useCurrentUser } from '../../users/porviders/UserProvider';
import NoCards from '../components/NoCards';

export default function CardDetailPage() {
    const { id } = useParams();
    const { cardData, handleGetDummyCard, handleGetCardbyId, isLoading, error, handleEdit, handleLike, handleDelete } = useCards();
    const { user } = useCurrentUser()

    useEffect(() => {
        if (id == '12') {
            handleGetDummyCard();
            return
        }
        handleGetCardbyId(id)
    }, [id]);

    if (isLoading) return <Spinner />
    if (error) return <Error errorMessage={error} />
    if (cardData && cardData.length == 0) return <NoCards />
    if (cardData) return (
        <Container>
            <PageHeader title={cardData.title} />
            <Card variant='outlined' sx={{ width: { xs: '100%', md: '50%' }, m: '0 auto' }} >
                <CardMedia sx={{ height: { xs: '150px', md: '300px' }, width: 'auto' }} image={cardData.image.url} />
                <CardContent>
                    <Box sx={{ width: '100%', p: '15px', fontFamily: 'roboto' }}>
                        <Typography sx={{ color: 'gray' }}>{cardData.subtitle}</Typography>
                        <Typography paragraph={true}>
                            {cardData.description}
                        </Typography>
                        <Divider />
                        <Typography paragraph={true}>
                            <span style={{ fontWeight: 'bold' }}>Phone:</span> {cardData.phone}
                        </Typography>
                        <Typography paragraph={true}>
                            <span style={{ fontWeight: 'bold' }}>Email:</span> {cardData.email}
                        </Typography>
                        <Typography paragraph={true}>
                            <span style={{ fontWeight: 'bold' }}>Address:</span> {cardData.address.country + ' ' + cardData.address.city + ' ' + cardData.address.street}
                        </Typography>
                    </Box>
                </CardContent>
                <CardActionBar card={cardData} handleEdit={() => { handleEdit(cardData, user) }} handleLike={() => { handleLike(cardData._id) }} handleDelete={() => { handleDelete(cardData) }} />

            </Card>
        </Container >
    )
}
