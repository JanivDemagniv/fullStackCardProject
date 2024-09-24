import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, IconButton, CardActions } from "@mui/material";
import { useCurrentUser } from "../../../users/porviders/UserProvider";
import CardDialog from "./CardDialog";


export default function CardActionBar({ handleLike, handleDelete, handleEdit, card }) {
    const { user } = useCurrentUser();
    const [liked, setLiked] = useState(false)

    const handleLikeDisplay = () => {
        if (card.likes.includes(user._id)) {
            setLiked(true)
        }
        if (!card.likes.includes(user._id)) {
            setLiked(false)
        }
    };

    useEffect(() => {
        if (user) {
            handleLikeDisplay();
        }
    }, [])

    return (
        <CardActions sx={{ justifyContent: "space-between" }}>
            <Box>
                {user && user.isAdmin && card._id != '12' || user && user.isBusiness && user._id === card.user_id && card._id != '12' ? <CardDialog handleDelete={handleDelete} cardId={card._id} /> : <span></span>
                }
                {user && user.isBusiness && user._id === card.user_id || user && user.isAdmin && card._id != '12' ? <IconButton onClick={() => { handleEdit(card._Id) }}>
                    <ModeEditIcon />
                </IconButton> : <span></span>
                }
            </Box>
            <Box>
                <a href={"tel:" + card.phone}>
                    <IconButton>
                        <CallIcon />
                    </IconButton>
                </a>
                {user && card._id != '12' ? <IconButton onClick={() => { handleLike(card._Id); setLiked((p) => !p) }}>
                    <FavoriteIcon sx={{ color: liked ? 'red' : 'gray' }} />
                </IconButton> : <span></span>
                }
            </Box>
        </CardActions>
    )
}
