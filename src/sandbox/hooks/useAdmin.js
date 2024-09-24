import React, { useCallback, useState } from 'react';
import { deleteUser, getAllUsers, updateUserStatus } from '../services/mangementApiService';
import { useSnack } from "../../providers/SnakBarProvider";
import useAxios from '../../hooks/useAxios';
import { mapToAdmin } from '../helper/mapToAdmin';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../routes/routesModuel';


export default function useAdmin() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [allUsers, setAllUsers] = useState([]);
    const navigate = useNavigate()
    const setSnack = useSnack();


    const handleGetAllUsers = useCallback(async () => {
        setIsLoading(true);
        try {
            const data = await getAllUsers();
            const newData = data.map((user) => mapToAdmin(user))
            setSnack('success', 'All User been Loaded')
            setAllUsers(newData)
            setIsLoading(false)
        } catch (e) {
            setError(e);
            setSnack('error', e.message)
        }
        setIsLoading(false)
    }, [])

    const handleDeleteUser = useCallback(async (id) => {
        setIsLoading(true);
        try {
            await deleteUser(id);
            setSnack('success', 'user has been deleted');
        } catch (e) {
            setError(e)
            setSnack('error', e.message)
        }
        setIsLoading(false)
    }, [])

    const handleUpdateStatus = useCallback(async (id) => {
        setIsLoading(true)
        try {
            await updateUserStatus(id);
            setSnack('success', 'user status has been update');
            await handleGetAllUsers()
        } catch {
            setError(e);
            setSnack('error', e.message)
        }
        setIsLoading(false)
    }, [])

    return { handleDeleteUser, handleGetAllUsers, isLoading, error, allUsers, handleUpdateStatus }
}
