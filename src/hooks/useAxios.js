import React from 'react'
// import { useCurrentUser } from '../users/porviders/UserProvider';
import { getToken } from '../users/services/localStorageService';
import axios from 'axios';

export default function useAxios() {
    axios.defaults.headers.common["x-auth-token"] = getToken();
}
