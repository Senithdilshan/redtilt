import React, { useContext } from 'react'
import { AppContext } from '../../Store/Store';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    const AppContextAPI = useContext(AppContext);
    const Theme = AppContextAPI.theme;
    return (
        <div className={`${Theme === "dark" ? "bg-zinc-900" : "bg-white"} `}>
            <Header />
            <Outlet />
        </div>
    )
}

export default Layout;
