import React, { useEffect } from 'react'
import { useCurrentUser } from '../../users/porviders/UserProvider'
import { Navigate, useParams } from 'react-router-dom'
import ROUTES from '../../routes/routesModuel'
import { Box, Container } from '@mui/material'
import useForm from '../../forms/hooks/useForm'
import initialCardForm from '../helpers/initialForms/initialCardForm'
import { cardSchema } from '../models/cardSchema'
import CardForm from '../components/CardForm'
import useCards from '../hooks/useCards'
import Spinner from '../../components/Spiner'
import Error from '../../components/Error'
import mapCardToModel from '../helpers/normalization/mapCardToModel'
import CardComponent from '../components/Card/CardComponent'
import normalizeCard from '../helpers/normalization/normalizeCard'
import EditCardComponent from '../components/Card/EditCardComponent'
import PageHeader from '../../components/PageHeader'
import NoCards from '../components/NoCards'



export default function EditCardPage() {
    const { id } = useParams()
    const { handleGetCardbyId, cardData, isLoading, handleUpdateCard, error } = useCards()
    const { user } = useCurrentUser()
    const {
        errors,
        data,
        setData,
        handleReset,
        handleChange,
        validateForm,
        onSubmit,
    } = useForm(initialCardForm, cardSchema, (data) => {
        handleUpdateCard(data, id)
    })

    useEffect(() => {
        if (cardData) {
            setData(mapCardToModel(cardData))
        } else {
            handleGetCardbyId(id)

        }

    }, [cardData])

    if (!user) return <Navigate to={ROUTES.ROOT} replace />
    if (user && !user.isBusiness) return <Navigate to={ROUTES.ROOT} replace />
    if (isLoading) return <Spinner />
    if (error) return <Error errorMessage={error} />
    if (data && data.length == 0) return <NoCards />
    if (data) return (
        <Container>
            <PageHeader title='Edit Card' />
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <CardForm
                    onSubmit={onSubmit}
                    onReset={handleReset}
                    validateForm={validateForm}
                    errors={errors}
                    data={data}
                    onInputChange={handleChange} />

                <EditCardComponent card={normalizeCard(data)} />
            </Box>
        </Container>
    )
}
