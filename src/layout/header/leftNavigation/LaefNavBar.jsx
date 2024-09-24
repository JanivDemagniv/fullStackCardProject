import { Box } from '@mui/material'
import React from 'react'
import LogoIcon from '../logo/LogoIcon'
import Logo from '../logo/Logo'
import NavBarItem from '../../../routes/components/NavBarItem'
import ROUTES from '../../../routes/routesModuel'
import { useCurrentUser } from '../../../users/porviders/UserProvider'

export default function LaefNavBar() {
    const { user } = useCurrentUser()
    return (
        <Box>
            <LogoIcon />
            <Logo />
            <NavBarItem to={ROUTES.CARDS} label={"Cards"} />
            <NavBarItem to={ROUTES.ABOUT} label={"About"} />
            {user && user.isAdmin ? <NavBarItem to={ROUTES.SANDBOX} label={"Sandbox"} /> : <></>}
            {user ? <NavBarItem to={ROUTES.FAVOURITECARDS} label={"Favourite Cards"} /> : <></>}
            {user && user.isBusiness ? <NavBarItem to={ROUTES.MYCARDS} label={"My Cards"} /> : <></>}
        </Box>
    )
}
