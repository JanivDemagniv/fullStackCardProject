import React, { useEffect } from 'react'
import PageHeader from '../../components/PageHeader'
import CardsFeedback from '../components/CardsFeedback'
import useCards from '../hooks/useCards'
import AddNewCardButton from '../components/AddNewCardButton'
import { useCurrentUser } from '../../users/porviders/UserProvider'



export default function CardsPage() {
    const { cardsData, isLoading, error, handleGetCards } = useCards()
    const { user } = useCurrentUser()

    useEffect(() => {
        handleGetCards();
    }, [])

    return (
        <div>
            <PageHeader title={"Cards"} subTitle={"On this page you can find all bussines cards from all categories"} />
            <CardsFeedback cards={cardsData} error={error} isLoading={isLoading} />
            {user && user.isBusiness ? <AddNewCardButton /> : <span></span>}
        </div>
    )
}
