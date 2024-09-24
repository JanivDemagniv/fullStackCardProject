import React from "react";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModuel";
import { useCurrentUser } from "../porviders/UserProvider";
import { Box, Container } from "@mui/material";
import LoginForm from "../components/LoginForm";
import useForm from "../../forms/hooks/useForm";
import initialLoginForm from "../helpers/initialForms/initialLogInForm";
import loginSchema from "../models/logInSchema";
import useUsers from "../hooks/useUsers";
import PageHeader from "../../components/PageHeader";

export default function LoginPage() {
    const { error, handleLogin, isLoading } = useUsers()
    const {
        data,
        errors,
        handleChange,
        handleReset,
        validateForm,
        onSubmit,
    } = useForm(initialLoginForm, loginSchema, handleLogin);

    const { user } = useCurrentUser()

    if (user) return <Navigate to={ROUTES.ROOT} replace />;

    return <Container>
        <PageHeader title='Login Page' />
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
            <LoginForm
                onSubmit={onSubmit}
                onReset={handleReset}
                validateForm={validateForm}
                title={"Login Form"}
                errors={errors}
                data={data}
                onInputChange={handleChange}
            />
        </Box>
    </Container >;
}