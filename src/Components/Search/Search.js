import React from 'react'
import * as AI from "react-icons/ai";
const Search = ({ handleSearch }) => {
    return (
        <div className='w-full h-20 md:h-28 bg-search-gradient items-center justify-center flex sm:px-2'>
            <div className='bg-white w-[24rem] sm:w-[34rem] h-[3.5rem] rounded-[50px] flex items-center justify-center'>
                <div className='w-[85%] justify-center items-center'>
                    <input
                        onChange={handleSearch}
                        className='hidden md:block w-full text-center p-2 ml-6 rounded border-none text-[1.1rem] focus:outline-none focus:border-transparent'
                        placeholder='Search for Products, Brands, Categories, or Offers' />
                    <input
                        onChange={handleSearch}
                        className='block md:hidden w-full text-center p-2 ml-6 rounded border-none text-[1.1rem] focus:outline-none focus:border-transparent'
                        placeholder='Search Here' />
                </div>
                <div className='w-[15%] items-center justify-center flex cursor-pointer'>
                    <div className='w-8 h-8 bg-black p-2 rounded-full'><AI.AiOutlineSearch className='text-white' /></div>
                </div>
            </div>
        </div>
    )
}

export default Search