import React from "react";
import NavBarItem from "../../../routes/components/NavBarItem";
import { Box } from "@mui/material";
import ROUTES from "../../../routes/routesModuel";
import { useCurrentUser } from "../../../users/porviders/UserProvider";

export default function NotLogged() {
    const { user } = useCurrentUser()
    return (
        <Box>
            <NavBarItem label="Signup" to={ROUTES.SIGNUP} />
            <NavBarItem label="Login" to={ROUTES.LOGIN} />
        </Box>
    );
}