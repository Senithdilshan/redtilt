import React, { useContext, useEffect, useRef, useState } from 'react'
import Search from '../Components/Search/Search';
import ProductCard from '../Components/Card/ProductCard';
import { FilterHelper, getAllCategories, getAllProducts } from '../Helpers/API.helper';
import { dummyProducts } from '../Constants/mockdata';
import { Alert, Pagination, Snackbar } from '@mui/material';
import FilterModal from '../Components/Modals/FilterModal';
import { sortTypes } from '../Constants/SortTypes';
import { sortProducts } from '../Util/ProductSort';
import SortFilterSection from '../Components/SortFilterSection/SortFilterSection';
import { AppContext } from '../Store/Store';
import { useMUIStyles } from '../Constants/MaterialStyles';
import NoData from '../Components/NoData/NoData';

const Home = () => {
    const [isGridView, setIsGridView] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
    const [Products, setProducts] = useState([]);
    const [shownProducts, setshownProducts] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
    const [page, setPage] = useState(1);
    const [alert, setAlert] = useState({ severity: '', message: '', open: false });
    const sortOrder = useRef(sortTypes.ASC);
    const sortType = useRef(sortTypes.NONE);
    const AppContextAPI = useContext(AppContext);

    const Theme = AppContextAPI.theme;
    const ProductContext = AppContextAPI.products;
    const CategoryListContext = AppContextAPI.categoryList;
    const AddProductsContext = AppContextAPI.addProducts;
    const AddCategoryListContext = AppContextAPI.addCategoryList;

    const productsPerPage = 6;
    const indexOfLastProduct = page * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    let currentProducts = shownProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    //get all products and categories
    useEffect(() => {
        const getProducts = async () => {
            setIsLoading(true);
            try {
                if (ProductContext?.length === 0) {
                    const response = await getAllProducts();
                    AddProductsContext(response);
                    setshownProducts(response);
                    setProducts(response);
                } else {
                    setshownProducts(ProductContext);
                    setProducts(ProductContext);
                }
                if (CategoryListContext?.length === 0) {
                    const responseCategories = await getAllCategories();
                    AddCategoryListContext(responseCategories);
                    setCategoryList(responseCategories);
                } else {
                    setCategoryList(CategoryListContext);
                }
                setIsLoading(false);
                if (ProductContext?.length === 0 || CategoryListContext?.length === 0) {
                    setAlert({ severity: 'success', message: 'Data fetched successfully.', open: true });
                }

            } catch (error) {
                console.log(error);
                setAlert({ severity: 'error', message: 'Something went wrong.', open: true });
            }
        }
        getProducts();
    }, [AddCategoryListContext, AddProductsContext, CategoryListContext, ProductContext]);

    //filter products
    const handleCategoryChange = async (category, priceRange) => {
        setIsLoading(true);
        try {
            const response = await FilterHelper(category, priceRange);
            setshownProducts(response);
            setProducts(response);
            setIsLoading(false);
            setAlert({ severity: 'success', message: 'Data fetched successfully.', open: true });
        } catch (error) {
            console.log(error);
            setAlert({ severity: 'error', message: 'Something went wrong.', open: true });
        }
    };

    //handle search
    const handleSearch = (event) => {
        const title = event.target.value.toLowerCase();
        if (title.length === 0) {
            setshownProducts(Products);
        }
        else {
            setshownProducts(Products.filter((product) => product.title.toLowerCase().includes(title)));
        }

    }
    //handle sorting
    const handleSort = async () => {
        setIsLoading(true);
        let type = sortType.current;
        if (type === sortTypes.NONE) type = null;
        const sortedProducts = await sortProducts(Products, type, sortOrder.current);
        setshownProducts([...sortedProducts]);
        setIsLoading(false);
    }
    //handle Snackbar closing
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setAlert({ ...alert, open: false });
    };

    return (
        <div className={`${Theme === "dark" ? "bg-black" : "bg-blue-200"}  md:mx-2 lg:mx-3 xl:mx-36 p-5 min-h-[100vh]`}>
            <Snackbar
                open={alert.open}
                autoHideDuration={2000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <Alert onClose={handleClose} severity={alert.severity} sx={{ width: '100%' }}>
                    {alert.message}
                </Alert>
            </Snackbar>
            <FilterModal
                isFilterModalOpen={isFilterModalOpen}
                handleClose={() => setIsFilterModalOpen(!isFilterModalOpen)}
                handleCategoryChange={handleCategoryChange}
                categoryList={categoryList}
                isLoading={isLoading}
            />
            <div className='flex w-full justify-center pt-10'>
                <Search handleSearch={handleSearch} />
            </div>
            <SortFilterSection
                sortType={sortType}
                sortOrder={sortOrder}
                handleSort={handleSort}
                isLoading={isLoading}
                setIsFilterModalOpen={setIsFilterModalOpen}
                isFilterModalOpen={isFilterModalOpen}
                setIsGridView={setIsGridView}
                isGridView={isGridView}
            />
            {(currentProducts.length === 0 && !isLoading) && <NoData />}
            <div className='flex w-full justify-center'>
                <div
                    className={`w-full ${isGridView
                        ? 'grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center '
                        : 'flex flex-col gap-4 justify-items-center'
                        }`}
                >
                    {currentProducts.map((product) => (
                        <ProductCard key={product.id} product={product} isgridview={isGridView} isLoading={isLoading} />
                    ))}
                    {isLoading && dummyProducts.map((product) => (
                        <ProductCard key={product.id} product={product} isgridview={isGridView} isLoading={isLoading} />
                    ))}
                </div>
            </div>
            <div className='flex w-full justify-center'>
                {!isLoading &&
                    <Pagination
                        count={Math.ceil(shownProducts.length / productsPerPage)}
                        page={page}
                        onChange={(event, value) => setPage(value)}
                        sx={Theme === "dark" ? useMUIStyles.dark : useMUIStyles.light}
                    />}
            </div>
        </div >
    )
}

export default Home;
