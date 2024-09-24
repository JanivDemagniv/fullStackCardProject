import React from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { IconButton } from '@mui/material';
import ROUTES from '../../routes/routesModuel';
import { useNavigate } from 'react-router-dom';
import { useCurrentUser } from '../../users/porviders/UserProvider';
import { useTheme } from '../../providers/CustomThemeProvider';

export default function AddNewCardButton() {
    const navigate = useNavigate();
    const { isDark } = useTheme()

    const { user } = useCurrentUser()

    const handleClick = () => {
        navigate(ROUTES.ADDCARD)
    }

    if (!user) return <></>
    return (
        <div>
            <IconButton onClick={() => { handleClick() }} sx={{ position: 'fixed', bottom: '70px', right: '10px' }}>
                <AddCircleOutlineIcon color={isDark ? 'action' : 'primary'} fontSize='large' />
            </IconButton>
        </div>
    )
}
