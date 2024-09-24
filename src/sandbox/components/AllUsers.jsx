import React, { useEffect } from 'react'
import useAdmin from '../hooks/useAdmin'
import Spinner from '../../components/Spiner'
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import DeleteButton from './userComponents/DeleteButton';

export default function AllUsers() {
    const { handleGetAllUsers, isLoading, error, allUsers, handleDeleteUser, handleUpdateStatus } = useAdmin()

    const columns = [
        { field: 'id', headerName: 'ID', width: 250 },
        { field: 'first', headerName: 'First name', width: 130 },
        { field: 'last', headerName: 'Last name', width: 130 },
        { field: 'phone', headerName: 'Phone', width: 130 },
        { field: 'email', headerName: 'Email', width: 130 },
        { field: 'address', headerName: 'address', width: 130 },
        { field: 'isBusiness', headerName: 'isBusiness', width: 130, editable: true, type: 'singleSelect', valueOptions: ['true', 'false'] },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            width: 100,
            renderCell: (params) => {
                return [
                    < DeleteButton key={params.id} handleDeleteUser={handleDeleteUser} handleUpdateStatus={handleUpdateStatus} userId={params.id} />
                ]
            }
        },

    ];

    const paginationModel = { page: 0, pageSize: 10 };

    useEffect(() => {
        handleGetAllUsers()
    }, [])



    if (isLoading) return <Spinner />
    if (allUsers == undefined) return <div>Something went wrong</div>
    if (allUsers) return (
        <Paper sx={{ height: '70%', width: '100%' }}>
            <DataGrid
                rows={allUsers}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10, 25, 50, 100]}
                sx={{ border: 0 }}
                editMode='row'
                disableRowSelectionOnClick
            />
        </Paper>
    );
}


