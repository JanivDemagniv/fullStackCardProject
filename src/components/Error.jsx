import React from "react";
import Container from "@mui/material/Container";
import { Box, Button, Paper } from "@mui/material";
import PageHeader from "./PageHeader";
import ROUTES from "../routes/routesModuel";
import { useNavigate } from "react-router-dom";
const Error = ({ errorMessage }) => {
    const navigate = useNavigate();

    return (
        <Container>
            <PageHeader title='Error' subTitle={errorMessage} />
            <Box sx={{ display: "flex", flexDirection: 'column', alignItems: 'center', width: '500px', margin: '0 auto' }}>
                <img src='/images/robot.png' alt="robot" width='300px' />
                <Paper sx={{ p: '10px', m: '10px' }}>{errorMessage}</Paper>
                <Button onClick={() => navigate(ROUTES.ROOT)} variant='contained' >Return to main page</Button>
            </Box>
        </Container>
    );
};
export default Error;