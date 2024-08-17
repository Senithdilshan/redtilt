import React from 'react'
import { Route, Routes } from 'react-router-dom';
import ProductDetails from '../Pages/ProductDetails';
import Layout from '../Components/Layout/Layout';
import Home from '../Pages/Home';

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='product/:id' element={<ProductDetails />} />
            </Route>
        </Routes>
    )
}

export default Router;