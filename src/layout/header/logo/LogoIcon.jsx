import React from 'react'
import NavBarLink from '../../../routes/components/NavBarLink'
import { Avatar, IconButton } from '@mui/material'
import ROUTES from '../../../routes/routesModuel'

export default function LogoIcon() {
    return (
        <NavBarLink to={ROUTES.ROOT}>
            <IconButton>
                <img style={{ width: '30px' }} alt='LogoIcon' src='/favicon.svg' />
            </IconButton>
        </NavBarLink>
    )
}
