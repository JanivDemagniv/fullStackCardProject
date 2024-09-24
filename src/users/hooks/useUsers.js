import { useCallback, useState } from "react";
import { useCurrentUser } from "../porviders/UserProvider";
import { getUserDeatails, login, signUp, updateUserDeatails } from "../services/usersApiService";
import { getUser, removeToken, setTokenInLocalStorage } from "../services/localStorageService";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModuel";
import normalizeUser from "../helpers/normalization/normalizeUser";
import { useSnack } from "../../providers/SnakBarProvider";
import normalizeUpdateUser from "../helpers/normalization/normlizeUpdateUser";

export default function useUsers() {
    const [isLoading, setIsLoading] = useState();
    const [error, setError] = useState();
    const [userDetails, setUserDetails] = useState('')
    const { setUser, setToken } = useCurrentUser();
    const navigate = useNavigate()
    const setSnack = useSnack()



    const handleLogin = useCallback(async (userData) => {
        setIsLoading(true)
        try {
            const token = await login(userData);
            setTokenInLocalStorage(token);
            setToken(token);
            setUser(getUser());
            setSnack('success', 'You Are Logged In')
            navigate(ROUTES.CARDS);
        } catch (err) {
            setError(err.message)
            setSnack('error', err.message)
        }
        setIsLoading(false)
    }, [])

    const handleLogout = useCallback(() => {
        removeToken();
        setUser(null);
        navigate(ROUTES.ROOT)
        setSnack('success', 'You logged Out')
    }, []);

    const handleSignup = useCallback(async (signUpDeatails) => {
        setIsLoading(true)
        try {
            const signUpNormlize = normalizeUser(signUpDeatails)
            await signUp(signUpNormlize);
            setSnack('success', 'You are signed Up')
            await handleLogin({ email: signUpDeatails.email, password: signUpDeatails.password });
        } catch (err) {
            setError(err);
            setSnack('error', err.message)
        }
        setIsLoading(false)
    }, [])

    const handleUserDetails = useCallback(async (id) => {
        setIsLoading(true)
        try {
            let userInfo = await getUserDeatails(id)
            setUserDetails(userInfo);
            setSnack('success', 'information has been loaded')
        } catch (e) {
            setError(e)
            setSnack('error', e.message)
        }
        setIsLoading(false)
    }, [])

    const handleUpdateUserDetails = useCallback(async (id, cardData) => {
        setIsLoading(true)
        try {
            const updateUserData = normalizeUpdateUser(cardData)
            await updateUserDeatails(id, updateUserData)
            setSnack('success', 'Your details have been updated')
            navigate(ROUTES.PROFILE)
        } catch (e) {
            setError(e)
            setSnack('error', e.message)
        }
        setIsLoading(false)
    }, [])

    return {
        isLoading, error, handleLogin, handleLogout, handleSignup, handleUserDetails, userDetails, handleUpdateUserDetails
    }
}