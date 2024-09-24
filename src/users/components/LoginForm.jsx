import React from 'react'
import Form from '../../forms/components/Form'
import Input from '../../forms/components/Input'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import ROUTES from '../../routes/routesModuel'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Grid from "@mui/material/Grid";


export default function LoginForm({ errors, onInputChange, data, title, validateForm, onReset, onSubmit }) {

    return (
        <>
            <Form
                onSubmit={onSubmit}
                onReset={onReset}
                validateForm={validateForm}
                title={title}
                styles={{ maxWidth: "800px" }}>
                <Input
                    name="email"
                    label="email"
                    type="email"
                    error={errors.email}
                    onChange={onInputChange}
                    data={data}
                    sm={6}
                />
                <Input
                    name="password"
                    label="password"
                    type="password"
                    error={errors.password}
                    onChange={onInputChange}
                    data={data}
                    sm={6}
                />
                <Grid item xs={12} sm={12}>
                    <Button
                        sx={{ width: '100%' }}
                        variant="outlined"
                        component={Link}
                        to={ROUTES.SIGNUP}
                        startIcon={<AccountBoxIcon />}

                    >
                        Sign Up
                    </Button></Grid>
            </Form>
        </>
    )
}
