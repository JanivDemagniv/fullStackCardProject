import { Avatar, Box, Button, Container, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import PageHeader from '../../components/PageHeader'
import { useCurrentUser } from '../porviders/UserProvider'
import useUsers from '../hooks/useUsers'
import Spinner from '../../components/Spiner'
import { getUser } from '../services/localStorageService'
import { Navigate, useNavigate } from 'react-router-dom'
import ROUTES from '../../routes/routesModuel'
import { makeFirstLetterCapital } from '../../forms/utils/algoMethods'
export default function Profile() {
    const { user } = useCurrentUser()
    const { handleUserDetails, isLoading, userDetails } = useUsers()
    const navigate = useNavigate()

    useEffect(() => {
        if (!user) {
            getUser()
        } else {
            handleUserDetails(user._id)
        }
    }, []);

    const handleEditCard = () => {
        navigate()
    }

    if (isLoading) return <Spinner />
    if (!user) return <Navigate to={ROUTES.ROOT} replace />
    if (userDetails == '' || userDetails == undefined) return <Typography>There's no user to show</Typography>
    return (
        <Container>
            <PageHeader title='Profile Page' />
            <Box sx={{ p: '10px', width: { xs: '90%', md: '50%' }, m: '0 auto', background: 'white', padding: '15px', borderRadius: '15px', minHeight: '50vh', boxShadow: '0 0 5px grey' }}>
                <Box sx={{ display: 'flex' }}>
                    <Box sx={{ width: '35%' }}>
                        <img alt={userDetails.image.alt} src={userDetails.image.url} style={{ width: '10vw', border: '1px solid black', borderRadius: '10px' }}></img>
                    </Box>
                    <Box sx={{ width: '65%' }}>
                        <Typography sx={{ textShadow: '0 0 2px grey', textDecoration: 'underLine', fontSize: '1.5em' }}>{makeFirstLetterCapital(userDetails.name.first) + " " + makeFirstLetterCapital(userDetails.name.last)}</Typography>
                        <Typography>{'First Name: ' + makeFirstLetterCapital(userDetails.name.first)}</Typography>
                        <Typography>{'Middle Name: ' + makeFirstLetterCapital(userDetails.name.middle)}</Typography>
                        <Typography>{'Last Name: ' + makeFirstLetterCapital(userDetails.name.last)}</Typography>
                        <Typography>{'Phone: ' + userDetails.phone}</Typography>
                        <Typography>{'Email: ' + userDetails.email}</Typography>
                    </Box>
                </Box>
                <Typography sx={{ textDecoration: 'underLine', fontSize: '1.5em' }}>Address</Typography>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', minHeight: '150px', alignItems: 'flex-start' }}>
                    <Typography sx={{ flexShrink: '0' }}>{'State: ' + makeFirstLetterCapital(userDetails.address.state)} </Typography>
                    <Typography sx={{ flexShrink: '0' }}>{'Country: ' + makeFirstLetterCapital(userDetails.address.country)} </Typography>
                    <Typography sx={{ flexShrink: '0' }} >{'City: ' + makeFirstLetterCapital(userDetails.address.city)} </Typography>
                    <Typography sx={{ flexShrink: '0' }}>{'Street: ' + makeFirstLetterCapital(userDetails.address.street)} </Typography>
                    <Typography sx={{ flexShrink: '0' }}>{'House Number: ' + userDetails.address.houseNumber} </Typography>
                    <Typography sx={{ flexShrink: '0' }}>{'Zip Code: ' + userDetails.address.zip} </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 'auto' }}>
                    <Button variant='contained' onClick={() => navigate(ROUTES.EDITPROFILE)}>Edit Profile</Button>
                </Box>
            </Box>
        </Container >
    )
}
