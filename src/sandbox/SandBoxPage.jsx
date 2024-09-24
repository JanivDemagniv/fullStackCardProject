import React from "react";
import { useCurrentUser } from "../users/porviders/UserProvider";
import AllUsers from "./components/AllUsers";
import { Box, Container } from "@mui/material";
import PageHeader from "../components/PageHeader";
import { Navigate } from "react-router-dom";
import ROUTES from "../routes/routesModuel";


export default function FormExample() {
  const { user } = useCurrentUser()

  if (!user) return <Navigate to={ROUTES.ROOT} replace />
  if (user && user.isAdmin)
    return (
      <Container>
        <PageHeader title='All Users' subTitle='all users display here' />
        <Box>
          <AllUsers />
        </Box>
      </Container>
    );
}
