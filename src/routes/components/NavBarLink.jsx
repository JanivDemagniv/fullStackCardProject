import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../../providers/CustomThemeProvider'

export default function NavBarLink({ to, sx, children }) {
    const { isDark } = useTheme()
    return (
        <Link to={to} style={{ textDecoration: 'none', color: isDark ? 'white' : '#000', ...sx }}>
            {children}
        </Link>
    )
}
