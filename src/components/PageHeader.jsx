import { Divider, Typography } from '@mui/material'
import React from 'react'

export default function PageHeader({ title, subTitle }) {
    return (
        <>
            <Typography align='center' variant='h2' component="h1">{title}</Typography>
            <Typography align='center' variant='h5' component="h2">{subTitle}</Typography>
            <Divider sx={{ my: 2 }} />
        </>
    )
}
