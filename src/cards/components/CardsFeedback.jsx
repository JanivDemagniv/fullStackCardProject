import React from 'react'
import Cards from './Cards'
import Error from '../../components/Error'
import Spinner from '../../components/Spiner'
import NoCards from './NoCards'

export default function CardsFeedback({ isLoading, cards, error, handleDelete, handleLike, handleEdit }) {
    if (isLoading) return <Spinner />
    if (error) return <Error errorMessage={error} />
    if (cards && cards.length == 0) return <NoCards />
    if (cards) return <Cards cards={cards} handleDelete={handleDelete} handleLike={handleLike} handleEdit={handleEdit} />
    return null
}

