import { useTheme } from "../../../providers/CustomThemeProvider";
import { Box, IconButton } from "@mui/material";
import React from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useCurrentUser } from "../../../users/porviders/UserProvider";
import Logged from "./Logged";
import NotLogged from "./NotLogged";
import SearchAera from "./SearchAera";



export default function RightNavbar() {
    const { user } = useCurrentUser()
    const { isDark, toggleDarkMode } = useTheme();



    return (
        <Box
            sx={{
                display: { xs: "none", md: "inline-flex" },
                alignItems: "center",
            }}
        >
            <SearchAera />
            <IconButton sx={{ ml: 1 }} onClick={toggleDarkMode}>
                {isDark ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
            {user ? <Logged /> : <NotLogged />}
        </Box>
    );
}