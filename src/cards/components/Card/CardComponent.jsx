import { Card, CardActionArea } from '@mui/material';
import React from 'react'
import CardHeaderComponent from './CardHeaderComponent';
import CardBody from './CardBody';
import CardActionBar from './CardActionBar';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../../routes/routesModuel';

export default function CardComponent({ card, handleDelete, handleEdit, handleLike }) {
    const navigate = useNavigate();

    return (
        <Card sx={{ width: "250px", m: 2 }}>
            <CardActionArea onClick={() => navigate(ROUTES.CARDINFO + "/" + card._id)} >
                <CardHeaderComponent image={card.image.url} alt={card.image.alt} title={card.title} subtitle={card.subtitle} />
                <CardBody phone={card.phone} address={card.address} bizNumber={card.bizNumber} />
            </CardActionArea>
            <CardActionBar handleDelete={handleDelete} handleEdit={handleEdit} handleLike={handleLike} card={card} />
        </Card>)
}
