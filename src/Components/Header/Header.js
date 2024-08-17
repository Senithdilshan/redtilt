import React, { useContext } from 'react'
import ThemeSwitch from '../UI/Switches/ThemeSwitch';
import { AppContext } from '../../Store/Store';
const Header = () => {
    const AppContextAPI = useContext(AppContext);
    const Theme = AppContextAPI.theme;
    const handleTheme = () => {
        AppContextAPI.toggleTheme();
    }
    return (
        <div className={`${Theme === "dark" ? "bg-slate-500" : "bg-blue-400"} w-full px-40 fixed top-0 left-0 z-10 flex justify-center`}>
            <ThemeSwitch sx={{ m: 1 }} onChange={handleTheme} />
        </div>
    )
}

export default Header; 