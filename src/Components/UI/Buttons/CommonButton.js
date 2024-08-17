import React from 'react'
const CommonButton = ({ text, onclick, Icon, selectState, disabled, bgColor, textColor }) => {
    return (
        <button className={`flex gap-1 items-center px-4 py-2 mr-2 rounded-3xl ${selectState ? 'bg-indigo-300 text-white' : `${bgColor} ${textColor}`} 
        ${!disabled ? 'hover:scale-105 transition-transform cursor-pointer duration-500' : 'cursor-not-allowed bg-gray-400'} `}
            onClick={onclick}
            disabled={disabled}>
            {Icon}
            <div className='hidden sm:block'>{text}</div>
        </button>
    )
}

export default CommonButton;