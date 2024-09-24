import { AppBar, Box, colors, Toolbar } from "@mui/material";
import React from "react";
import NavBarItem from "../../routes/components/NavBarItem";
import ROUTES from "../../routes/routesModuel";
import Logo from "./logo/Logo";
import LaefNavBar from "./leftNavigation/LaefNavBar";
import RightNavbar from "./rightNavigation/RightNavBar";
import RightNavBarMobile from "./rightNavigation/RightNavBarMobile";
export default function Header() {
    return (
        <AppBar position="sticky" color="primary" elevation={10}>
            <Toolbar sx={{ justifyContent: "space-between" }}>
                <LaefNavBar />
                <RightNavbar />
                <RightNavBarMobile />
            </Toolbar>
        </AppBar>
    );
}