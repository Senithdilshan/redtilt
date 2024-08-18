import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../Store/Store';
import { getProductById } from '../Helpers/API.helper';
import { Alert, Skeleton, Snackbar } from '@mui/material';
import StarRating from '../Components/StarRating/StarRating';
import * as FA6 from "react-icons/fa6";

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [alert, setAlert] = useState({ severity: '', message: '', open: false });
    const AppContextAPI = useContext(AppContext);
    const Theme = AppContextAPI.theme;

    //get product by id
    useEffect(() => {
        const getProduct = async () => {
            setIsLoading(true);
            try {
                const response = await getProductById(id);
                setProduct(response);
                setIsLoading(false);
                setAlert({ severity: 'success', message: 'Data fetched successfully.', open: true });
            } catch (error) {
                setAlert({ severity: 'error', message: 'Something went wrong.', open: true });
                console.log(error);
            }
        }
        getProduct();
    }, [id])

    //handle Snackbar closing
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setAlert({ ...alert, open: false });
    };
    return (
        <div className={`${Theme === "dark" ? "bg-black" : "bg-blue-200"}  md:mx-2 lg:mx-3 xl:mx-36 p-10 min-h-[100vh] pt-20 flex justify-center `}>
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
            <div className={` ${Theme === "dark" ? "bg-slate-500 text-white" : "bg-white"}  p-5 rounded-xl w-full h-fit`}>
                <span className='cursor-pointer ' onClick={() => navigate(-1)}> <FA6.FaCircleArrowLeft /></span>
                <div className='flex justify-center mt-2'>
                    {isLoading ?
                        <Skeleton variant="rectangular" className='w-[40rem] sm:w-[25rem] rounded-lg mb-6' height={50} /> :
                        <div className='font-bold text-xl sm:text-3xl mb-6 text-center w-[30rem] sm:w-[50rem]'>{product.title}</div>
                    }
                </div>
                <div className={`flex justify-center  w-full rounded-2xl items-center mb-10`}>
                    {isLoading ?
                        <Skeleton variant="rectangular" className='w-[20rem] sm:w-[25rem] rounded-lg' animation="wave" height={300} /> :
                        <img className='w-[18rem] h-[18rem] sm:w-[25rem] sm:h-[25rem] rounded-2xl hover:scale-110 duration-500 transition-transform cursor-pointer ' src={product.image} alt={product.id} />
                    }
                </div>
                <div className='flex justify-center gap-4'>
                    {isLoading ?
                        <Skeleton variant="rectangular" className='w-[40rem] sm:w-[25rem] rounded-lg mb-6' height={50} /> :
                        <div>
                            <div className='font-bold text-xl sm:text-3xl mb-2 text-center'>{product.price} $</div>
                            <StarRating rating={product?.rating?.rate} count={product?.rating?.count} />
                        </div>
                    }
                </div>
                <div className='flex justify-center'>
                    {isLoading ?
                        <Skeleton variant="rectangular" className='w-[40rem] sm:w-[25rem] rounded-lg mb-6' height={50} /> :
                        <div className='font-bold text-lg sm:text-xl mb-6 w-[25rem] sm:w-[30rem] text-justify '>{product.description}</div>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;