import React, { useEffect } from 'react'
import PageHeader from '../../components/PageHeader'
import useCards from '../hooks/useCards';
import AddNewCardButton from '../components/AddNewCardButton';
import CardsFeedback from '../components/CardsFeedback';
import { useCurrentUser } from '../../users/porviders/UserProvider';
import { Navigate } from 'react-router-dom';
import ROUTES from '../../routes/routesModuel';

export default function MyCards() {
    const { cardsData, isLoading, error, handleMyCards, handleLike, handleDelete } = useCards()
    const { user } = useCurrentUser()

    useEffect(() => {
        handleMyCards();
    }, [user])

    if (!user) return <Navigate to={ROUTES.ROOT} replace />
    if (!cardsData) return <Navigate to={ROUTES.CARDS} replace />
    return (
        <div>
            <PageHeader title={"My Cards"} subTitle={"On this page you can find all bussines cards from all categories"} />
            <CardsFeedback cards={cardsData} handleDelete={handleDelete} handleLike={handleLike} error={error} isLoading={isLoading} />
            <AddNewCardButton />
        </div>
    )
}
