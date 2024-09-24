import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import InfoIcon from '@mui/icons-material/Info';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../routes/routesModuel';
import StyleIcon from '@mui/icons-material/Style';
import { useCurrentUser } from '../../users/porviders/UserProvider';

export default function Footer() {
    const navigation = useNavigate();
    const { user } = useCurrentUser()
    return (
        <Paper elevation={3} sx={{ position: 'sticky', bottom: 0, left: 0, right: 0 }}>
            <BottomNavigation showLabels>
                <BottomNavigationAction onClick={() => navigation(ROUTES.ABOUT)} label="About" icon={<InfoIcon />} />
                {user ? <BottomNavigationAction onClick={() => navigation(ROUTES.FAVOURITECARDS)} label="Favorites" icon={<FavoriteIcon />} /> : null}
                {user && user.isBusiness ? <BottomNavigationAction onClick={() => navigation(ROUTES.MYCARDS)} label="My Cards" icon={<StyleIcon />} /> : null}

            </BottomNavigation >
        </Paper>
    )
}
