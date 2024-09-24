import React from 'react'
import NavBarLink from '../../../routes/components/NavBarLink'
import { Typography } from '@mui/material'
import ROUTES from '../../../routes/routesModuel'
import { useTheme } from '../../../providers/CustomThemeProvider'

export default function Logo({ sx }) {
    const { isDark } = useTheme()
    return (
        <NavBarLink sx={{ ...sx }} to={ROUTES.ROOT}>
            <Typography sx={{ display: { xs: 'none', md: 'inline-flex', alignSelf: 'center' }, fontFamily: 'fantasy', color: isDark ? 'white' : 'black', position: 'relative', top: '7px' }} variant='h4' component="h1">BCard</Typography>
        </NavBarLink>
    )
}
