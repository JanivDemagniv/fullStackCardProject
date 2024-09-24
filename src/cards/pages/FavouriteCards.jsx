import React, { useEffect } from 'react'
import PageHeader from '../../components/PageHeader'
import { useCurrentUser } from '../../users/porviders/UserProvider'
import useCards from '../hooks/useCards'
import CardsFeedback from '../components/CardsFeedback'
import AddNewCardButton from '../components/AddNewCardButton'
import { Navigate } from 'react-router-dom'
import ROUTES from '../../routes/routesModuel'


export default function FavouriteCards() {
    const { likedCards, isLoading, error, getLikedCards } = useCards();
    const { user } = useCurrentUser()

    useEffect(() => {
        getLikedCards()
    }, [])

    if (!user) return <Navigate to={ROUTES.ROOT} replace />
    if (likedCards) return (
        <>
            <PageHeader title={"Favourite Cards"} subtitle={"Your Favourite Cards"} />
            <CardsFeedback cards={likedCards} error={error} isLoading={isLoading} />
            {user && user.isBusiness ? <AddNewCardButton /> : <span></span>}
        </>
    )
}
