import React, { useContext } from 'react';
import Rating from '@mui/material/Rating';
import { useMUIStyles } from '../../Constants/MaterialStyles';
import { AppContext } from '../../Store/Store';

const StarRating = ({ rating, count, size }) => {
    const AppContextAPI = useContext(AppContext);
    const Theme = AppContextAPI.theme;
    return (
        <div className='md:flex'>
            <Rating value={rating} precision={0.1} size={size} readOnly sx={Theme === "dark" && useMUIStyles.dark} />
            <div className='md:ml-2 flex justify-center'>
                ({count} reviews)
            </div>
        </div>
    );
};

export default StarRating;