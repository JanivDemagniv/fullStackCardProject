import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CardsPage from '../cards/pages/CardsPage'
import About from '../pages/About'
import Error from '../pages/Error'
import ROUTES from './routesModuel'
import FavouriteCards from '../cards/pages/FavouriteCards'
import MyCards from '../cards/pages/MyCards'
import SandBoxPage from '../sandbox/SandBoxPage'
import LoginPage from '../users/pages/LogInPage'
import SignUpPage from '../users/pages/SignUpPage'
import CardDetailPage from '../cards/pages/CardDetailPage'
import AddCardPage from '../cards/pages/AddCardPage'
import Profile from '../users/pages/Profile'
import EditCardPage from '../cards/pages/EditCardPage'
import EditProfile from '../users/components/EditProfile'
import EditProfilePage from '../users/pages/EditProfilePage'
import Main from '../pages/Main'

export default function Router() {
    return (
        <Routes>
            <Route path={ROUTES.ROOT} element={<Main />} />
            <Route path={ROUTES.CARDS} element={<CardsPage />} />
            <Route path={ROUTES.ABOUT} element={<About />} />
            <Route path={ROUTES.FAVOURITECARDS} element={<FavouriteCards />} />
            <Route path={ROUTES.MYCARDS} element={<MyCards />} />
            <Route path={ROUTES.SANDBOX} element={<SandBoxPage />} />
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route path={ROUTES.SIGNUP} element={<SignUpPage />} />
            <Route path={ROUTES.ADDCARD} element={<AddCardPage />} />
            <Route path={ROUTES.CARDINFO + '/:id'} element={<CardDetailPage />} />
            <Route path={ROUTES.PROFILE} element={<Profile />} />
            <Route path={ROUTES.EDITPROFILE} element={<EditProfilePage />} />
            <Route path={ROUTES.EDITCARD + '/:id'} element={<EditCardPage />} />
            <Route path='*' element={<Error />} />
        </Routes>
    )
}
