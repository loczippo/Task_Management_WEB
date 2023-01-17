import { Routes, Route } from 'react-router-dom'
import React from 'react';
import { HomeView, NewsView, ErrorView, RegisterView, LoginView } from '../views';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

function AppRouter(): ReactJSXElement {
    return (
        <Routes>
            <Route path='/news' element={<NewsView/>} />
            <Route path='/home' element={<HomeView/>} />
            <Route path='/login' element={<LoginView/>} />
            <Route path='/register' element={<RegisterView/>} />
            <Route path='/' element={<HomeView/>} />
            <Route path='*' element={<ErrorView/>} />
        </Routes>
    )
}

export default AppRouter;