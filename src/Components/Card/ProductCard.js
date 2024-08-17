import React, { useContext } from 'react'
import StarRating from '../StarRating/StarRating';
import { Skeleton } from '@mui/material';
import { AppContext } from '../../Store/Store';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, isgridview, isLoading }) => {
    const AppContextAPI = useContext(AppContext);
    const Theme = AppContextAPI.theme;
    return (
        <Link to={`/product/${product.id}`}>
            <div className={`${isgridview ? 'w-[180px] sm:w-[18rem] md:w-[22rem] lg:w-[20rem] justify-center hover:scale-110 duration-500 transition-transform' :
                'w-[%80] justify-start hover:scale-95 duration-500 transition-transform'} h-fit ${Theme === "dark" ? "bg-slate-500 text-white" : "bg-white"} rounded-2xl p-5 m-5 flex  items-centern cursor-pointer `} >
                <div className='w-full'>
                    <div className='flex justify-center mb-4 w-full'>
                        {isLoading ?
                            <Skeleton variant="rectangular" className='w-32 sm:w-40 sm:h-40 rounded-lg' height={150} animation="wave" /> :
                            <img className='w-32 h-32 sm:w-40 sm:h-40 rounded-2xl ' src={product.image} alt={product.id} />
                        }
                    </div>
                    <div className='font-bold text-center sm:text-left overflow-hidden line-clamp-2 sm:line-clamp-1'>
                        {isLoading ?
                            <Skeleton variant="rectangular" className='w-50 sm:w-40 sm:h-40 rounded-lg my-1' height={25} animation="wave" /> :
                            product.title
                        }
                    </div>
                    <div className={`flex sm:hidden ${!isLoading && 'justify-center'}`} >
                        {isLoading ?
                            <Skeleton variant="rectangular" className='w-24 sm:w-40 sm:h-40 rounded-lg' height={40} animation="wave" /> :
                            <StarRating rating={product.rating.rate} count={product.rating.count} size={'small'} />
                        }

                    </div>
                    <div className='hidden sm:flex'>
                        {isLoading ?
                            <Skeleton variant="rectangular" className='w-56 rounded-lg' height={25} animation="wave" /> :
                            <StarRating rating={product.rating.rate} count={product.rating.count} />
                        }
                    </div>
                    {isLoading ?
                        <Skeleton variant="rectangular" className='w-24 rounded-lg my-1' height={25} animation="wave" /> :
                        <div className='font-bold text-2xl flex justify-center sm:justify-start'>{product.price} $</div>
                    }
                    {(!isgridview && isLoading) ?
                        <Skeleton variant="rectangular" className='w-full rounded-lg my-1' height={25} animation="wave" /> :
                        (!isgridview && !isLoading) ?
                            <div className='overflow-hidden '>{product.description}</div> : null
                    }
                </div>
            </div>
        </Link>
    )
}

export default ProductCard;