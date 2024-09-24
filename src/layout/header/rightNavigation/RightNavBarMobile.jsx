import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import { useCurrentUser } from "../../../users/porviders/UserProvider";
import { Box, Divider, ListItemIcon, Menu, MenuItem } from "@mui/material";
import { Logout } from "@mui/icons-material";
import useUsers from "../../../users/hooks/useUsers";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModuel";
import PersonIcon from '@mui/icons-material/Person';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MenuIcon from '@mui/icons-material/Menu';

export default function RightNavBarMobile() {
    const { handleLogout } = useUsers()
    const { user } = useCurrentUser()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const navigate = useNavigate()
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ display: { xs: 'block', md: 'none' }, }}>
            <IconButton
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MenuIcon fontSize='large' />
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem sx={{ display: user ? 'block' : 'none' }} onClick={() => navigate(ROUTES.PROFILE)}>
                    <ListItemIcon>
                        <PersonIcon />
                    </ListItemIcon>
                    Profile
                </MenuItem>
                <MenuItem sx={{ display: user && user.isBusiness ? 'block' : 'none' }} onClick={() => navigate(ROUTES.MYCARDS)}>
                    <ListItemIcon>
                        <BookmarksIcon />
                    </ListItemIcon>
                    My Cards
                </MenuItem>
                <MenuItem sx={{ display: user ? 'block' : 'none' }} onClick={() => navigate(ROUTES.FAVOURITECARDS)}>
                    <ListItemIcon>
                        <FavoriteIcon />
                    </ListItemIcon>
                    Favourite Cards
                </MenuItem>
                <Divider />
                <MenuItem sx={{ display: user ? 'block' : 'none' }} onClick={() => {
                    handleLogout()
                }}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
                <MenuItem sx={{ display: !user ? 'block' : 'none' }} onClick={() => { navigate(ROUTES.LOGIN) }}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Login
                </MenuItem>
                <MenuItem sx={{ display: !user ? 'block' : 'none' }} onClick={() => { navigate(ROUTES.SIGNUP) }}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    SignUp
                </MenuItem>
            </Menu>
        </Box >
    );
}