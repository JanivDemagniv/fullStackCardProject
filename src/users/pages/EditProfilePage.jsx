import React, { useEffect } from 'react'
import EditProfile from '../components/EditProfile'
import useForm from '../../forms/hooks/useForm';
import editProfileSchema from '../models/editProfileSchema';
import initialEditProfileForm from '../helpers/initialForms/initialEditProfileForm';
import { useCurrentUser } from '../porviders/UserProvider';
import { Box, Container } from '@mui/material';
import useUsers from '../hooks/useUsers';
import { getUser } from '../services/localStorageService';
import mapToUserModel from '../helpers/normalization/mapToUserModel';
import PageHeader from '../../components/PageHeader';
import { Navigate } from 'react-router-dom';
import ROUTES from '../../routes/routesModuel';

export default function EditProfilePage() {
    const {
        data,
        setData,
        errors,
        handleChange,
        handleReset,
        validateForm,
        onSubmit,
        handleChangeCheckBox,
    } = useForm(initialEditProfileForm, editProfileSchema, () => { handleUpdateUserDetails(user._id, data) });

    const { handleUserDetails, userDetails, handleUpdateUserDetails } = useUsers()
    const { user } = useCurrentUser();

    useEffect(() => {
        if (!user) {
            getUser()
        } else if (userDetails) {
            const newdata = mapToUserModel(userDetails)
            setData(newdata)
        } else {
            handleUserDetails(user._id)
        }
    }, [userDetails, user])

    if (!user) return <Navigate to={ROUTES.ROOT} replace />
    return (
        <Container>
            <PageHeader title="Edit Profile" />
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}  >
                <EditProfile
                    onSubmit={onSubmit}
                    onReset={handleReset}
                    validateForm={validateForm}
                    title={"Edit Profile form"}
                    errors={errors}
                    data={data}
                    onInputChange={handleChange}
                    handleChangeCheckBox={handleChangeCheckBox}
                />
            </Box>
        </Container>
    )
}
