import React, { useEffect, useState } from 'react'
import CardComponent from './Card/CardComponent';
import { Box, Container, Pagination } from '@mui/material';
import { useCurrentUser } from '../../users/porviders/UserProvider';
import useCards from '../hooks/useCards';
import { useSearchParams } from 'react-router-dom';

export default function Cards({ cards }) {
    const { handleEdit, handleLike, handleDelete } = useCards();
    const { user } = useCurrentUser();
    const [currentPage, setCurrentPage] = useState(1);
    const itemPerPage = 12;
    const indexOfLastItem = currentPage * itemPerPage;
    const indexOfFirstItem = indexOfLastItem - itemPerPage;
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query' || '')


    const filterData = query ? cards.filter((card) => card.title.includes(query)) : cards;
    const currentItem = filterData.slice(indexOfFirstItem, indexOfLastItem);


    const handlePageChange = (event, value) => {
        setCurrentPage(value)
    }

    return (
        <Container >
            <Box sx={{ display: "flex", flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'stretch' } }}>
                {currentItem.map((card) => <CardComponent card={card} key={card._id} handleDelete={() => { handleDelete(card) }} handleEdit={() => { handleEdit(card, user) }} handleLike={() => { handleLike(card._id) }} />
                )}
            </Box>
            <Pagination
                sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}
                count={Math.ceil(cards.length / itemPerPage)}
                page={currentPage}
                onChange={handlePageChange}
            />
        </Container>
    )
}
