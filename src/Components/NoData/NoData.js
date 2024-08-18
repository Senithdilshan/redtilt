import React from 'react'
import Nodata from '../../Assets/Nodata.jpg'
const NoData = () => {
    return (
        <div className='w-full h-full flex items-center justify-center p-10'>
            <img src={Nodata} alt="No data found" className='w-[70%] h-[50%] mb-10 rounded-2xl' />
        </div>
    )
}

export default NoData;
