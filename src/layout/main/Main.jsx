import { Box } from '@mui/material'
import React from 'react'
import { useTheme } from '../../providers/CustomThemeProvider'

export default function Main({ children }) {
    const { isDark } = useTheme()
    return (


        <Box sx={{ p: '10px 0 30px', minHeight: '85vh', backgroundColor: isDark ? '#333333' : '#f5f5f5', color: isDark ? 'white' : 'black' }} >
            {children}
        </Box >
    )
}
