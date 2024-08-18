import React, { createContext, useState } from 'react';

export const AppContext = createContext({
    toggleTheme: () => { },
    theme: 'light',
    products: [],
    addProducts: (data) => { },
    categoryList: [],
    addCategoryList: (data) => { }
});

const AppContextProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const [products, setProducts] = useState([]);
    const [categoryList, setCategoryList] = useState([]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const addProducts = (data) => {
        setProducts(data);
    }

    const addCategoryList = (data) => {
        setCategoryList(data);
    }

    return (
        <AppContext.Provider value={{ theme, toggleTheme, products, addProducts, categoryList, addCategoryList }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
