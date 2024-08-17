import React from 'react'
import * as IO from "react-icons/io5";
const GridListButton = ({ setIsGridView, isGridView, text, state, disabled }) => {
    const isActive = isGridView === state;
    return (
        <button
            onClick={() => setIsGridView(state)}
            className={`px-4 py-2 mr-2 rounded-3xl ${isActive ? 'bg-indigo-300 text-white' : 'bg-white text-black'}
                } focus:outline-none ${!disabled ? 'hover:scale-105 transition-transform cursor-pointer duration-500' : 'cursor-not-allowed bg-gray-400'}`}
        >
            <div className='flex items-center gap-1'>
                {text === 'Grid' ? <IO.IoGrid /> : <IO.IoList />}
                <div className='hidden sm:block'>{text}</div>
            </div>
        </button>
    )
}

export default GridListButton
