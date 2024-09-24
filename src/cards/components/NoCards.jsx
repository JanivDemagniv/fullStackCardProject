import { Box, Container, Typography } from '@mui/material'
import React from 'react'

export default function NoCards() {
    return (
        <Container>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography>There Is No Cards To Display</Typography>
            </Box>
        </Container>
    )
}
