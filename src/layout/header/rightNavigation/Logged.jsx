import React, { useEffect, useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import { useCurrentUser } from "../../../users/porviders/UserProvider";
import { Divider, ListItemIcon, Menu, MenuItem } from "@mui/material";
import { Logout } from "@mui/icons-material";
import useUsers from "../../../users/hooks/useUsers";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModuel";
import PersonIcon from '@mui/icons-material/Person';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { getUser } from "../../../users/services/localStorageService";


export default function Logged() {
    const { handleLogout } = useUsers()
    const { user } = useCurrentUser()
    const [userPic, setUserPic] = useState(null)
    const [anchorEl, setAnchorEl] = useState(null);
    const { handleUserDetails, userDetails } = useUsers()
    const open = Boolean(anchorEl);

    useEffect(() => {
        if (!user) {
            getUser()
        } else {
            handleUserDetails(user._id)
        }
    }, [user])

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    };
    const handleClose = () => {
        setAnchorEl(null)
    }
    const navigate = useNavigate()

    return (
        <>
            <Tooltip title="account settings">
                <IconButton
                    onClick={handleClick}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup='true'
                    aria-expanded={open ? 'true' : undefined}
                    sx={{ p: 0, display: "inline-flex", marginLeft: 2 }}>
                    <Avatar alt={userDetails ? userDetails.image.alt : "avatar"} src={userDetails ? userDetails.image.url : "/images/avatar.png"} />
                </IconButton>
            </Tooltip>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                sx={{
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: '1.5',
                    '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                    },
                    '&::before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                    }
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={() => navigate(ROUTES.PROFILE)}>
                    <ListItemIcon>
                        <PersonIcon />
                    </ListItemIcon>
                    Profile
                </MenuItem>
                <MenuItem sx={{ display: user.isBusiness ? 'block' : 'none' }} onClick={() => navigate(ROUTES.MYCARDS)}>
                    <ListItemIcon>
                        <BookmarksIcon />
                    </ListItemIcon>
                    My Cards
                </MenuItem>
                <MenuItem onClick={() => navigate(ROUTES.FAVOURITECARDS)}>
                    <ListItemIcon>
                        <FavoriteIcon />
                    </ListItemIcon>
                    Favourite Cards
                </MenuItem>
                <Divider />
                <MenuItem onClick={() => {
                    handleLogout()
                }}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </>
    );
}