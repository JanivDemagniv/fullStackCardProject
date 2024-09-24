import { useCallback, useEffect, useState } from "react";
import { useSnack } from "../../providers/SnakBarProvider";
import normalizeCard from "../helpers/normalization/normalizeCard";
import { useNavigate, useSearchParams } from "react-router-dom";
import ROUTES from "../../routes/routesModuel";
import { createCardRequest, deleteCard, getCardById, getCards, getMyCards, likeCard, sendUpdateCard } from "../services/cardsApiService";
import { useCurrentUser } from "../../users/porviders/UserProvider";
import dummyCard from "../../helpers/dummyCard";

export default function useCards() {
    const navigate = useNavigate()

    const [cardsData, setCardsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const [cardData, setCardData] = useState();
    const [likedCards, setLikedCards] = useState([]);
    const [like, setLike] = useState(false);
    const { user } = useCurrentUser();
    const [searchParams] = useSearchParams();


    const setSnack = useSnack()

    const handleGetDummyCard = useCallback(() => {
        setIsLoading(true)
        setCardData(dummyCard);
        setIsLoading(false);
    }, [])

    const handleGetCards = useCallback(async () => {
        try {
            let response = await getCards();
            setCardsData(response)
            setSnack('success', 'all Card are loaded')
        } catch (err) {
            setError(err.message)
        }
        setIsLoading(false)
    }, []);

    const handleGetCardbyId = useCallback(async (id) => {
        setIsLoading(true)
        try {
            const response = await getCardById(id);
            setCardData(response)
        } catch (err) {
            setError(err.message)
        }
        setIsLoading(false)
    }, []);

    const handleLike = useCallback(async (id) => {
        try {
            await likeCard(id);
            setSnack('success', 'Your Requeset have been updated')
        } catch (e) {
            setError(e)
            setSnack('error', e.message)
        }
    }, [like]);

    const getLikedCards = useCallback(async () => {
        setIsLoading(true)
        try {
            const cards = await getCards();
            const favCards = cards.filter((card) => card.likes.includes(user._id))
            setLikedCards(favCards)
            setSnack('success', 'all Cards Updated')
        } catch (e) {
            setError(e)
            setSnack('error', e.message)
        }
        setIsLoading(false)
    }, [])


    const handleDelete = useCallback(async (card) => {
        setIsLoading(true)
        try {
            await deleteCard(card._id);
            setSnack('success', 'The Card has been deleted');
            navigate(ROUTES.ROOT)
        } catch (e) {
            setError(e)
            setSnack('error', e.message)
        }
        setIsLoading(false)
    }, [])

    const handleEdit = useCallback((card, user) => {
        if (card.user_id == user._id || user.isAdmin) {
            navigate(ROUTES.EDITCARD + '/' + card._id)
        } else (setSnack('error', "You can't edit  this card"))
    }, [])

    const handleCreateCard = async (card) => {
        setIsLoading(true)
        try {
            let addCard = normalizeCard(card);
            const newCard = await createCardRequest(addCard);
            setSnack('success', "Card is created")
            navigate(ROUTES.CARDINFO + '/' + newCard._id)
        } catch (e) {
            setError(e);
            setSnack('error', e.message)
        }
        setIsLoading(false)
    }

    const handleUpdateCard = useCallback(async (card, id) => {
        setIsLoading(true)
        try {
            let updateCard = normalizeCard(card);
            const updatedCard = await sendUpdateCard(updateCard, id)
            setSnack('success', "Card is Updated")
            navigate(ROUTES.CARDINFO + "/" + id)
        } catch (e) {
            setError(e)
            setSnack('error', e.message)
        }
    }, [])

    const handleMyCards = async () => {
        setIsLoading(true)
        try {
            const myCardData = await getMyCards();
            setCardsData(myCardData)
            setSnack('success', 'all Card are loaded')
        } catch (e) {
            setError(e)
            setSnack('error', e.message)
        }
        setIsLoading(false)
    }

    return { handleMyCards, cardData, handleGetCardbyId, handleGetDummyCard, cardsData, isLoading, error, setSnack, handleGetCards, handleLike, handleDelete, handleCreateCard, handleUpdateCard, handleEdit, getLikedCards, likedCards, like, setLike }
}