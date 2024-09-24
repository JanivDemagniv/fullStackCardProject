import { Card, CardActionArea } from '@mui/material'
import React from 'react'
import CardHeaderComponent from './CardHeaderComponent'
import CardActionBar from './CardActionBar'
import CardBody from './CardBody'


export default function EditCardComponent({ card }) {

    return (
        <Card sx={{ display: { xs: 'none', md: 'block' }, width: "250px", m: 2 }}>
            <CardActionArea >
                <CardHeaderComponent image={card.image.url} alt={card.image.alt} title={card.title} subtitle={card.subtitle} />
                <CardBody phone={card.phone} address={card.address} bizNumber={card.bizNumber} />
            </CardActionArea>
        </Card>)
}