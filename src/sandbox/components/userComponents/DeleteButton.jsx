import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import { GridActionsCellItem, GridDeleteIcon } from '@mui/x-data-grid'
import React, { useState } from 'react'
import UpdateIcon from '@mui/icons-material/Update';

export default function DeleteButton({ handleDeleteUser, handleUpdateStatus, userId }) {
    const [open, setOpen] = useState(false)

    const handleOpenClick = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <>
            <GridActionsCellItem
                icon={<UpdateIcon />}
                label="Update"
                onClick={() => {
                    handleUpdateStatus(userId)
                }}
                color="inherit"
            />
            <GridActionsCellItem
                icon={<GridDeleteIcon />}
                label="Delete"
                onClick={handleOpenClick}
                color="inherit"
            />
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Delete This Card"}
                </DialogTitle>
                <DialogContent >
                    <DialogContentText id="alert-dialog-description">
                        Are You Sure You Want To Delete This Card?
                    </DialogContentText>
                </DialogContent>
                <DialogActions >
                    <Button onClick={handleClose} >No</Button>
                    <Button onClick={() => handleDeleteUser(userId)} autoFocus>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
