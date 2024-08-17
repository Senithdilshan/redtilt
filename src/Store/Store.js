import React, { createContext, useState } from 'react';

export const AppContext = createContext({
    toggleTheme: () => { },
    theme: 'light',
});

const AppContextProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <AppContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
