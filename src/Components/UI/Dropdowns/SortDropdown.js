import React, { useEffect, useState } from 'react'
import { sortTypes } from '../../../Constants/SortTypes';
import { capitalizeEveryWord } from '../../../Util/WordCaptilize';

const SortDropdown = ({ isLoading, handleSortOrder, defaultValue = sortTypes.NONE }) => {
    const [selectedValue, setSelectedValue] = useState(defaultValue);

    useEffect(() => {
        setSelectedValue(defaultValue);
    }, [defaultValue]);

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
        handleSortOrder(event);
    }
    return (
        <select className="bg-gray-50 border border-gray-300 rounded-3xl
    text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2 
    cursor-pointer"
            onChange={handleChange}
            disabled={isLoading}
            value={selectedValue}>
            <option value={sortTypes.NONE}>{capitalizeEveryWord(sortTypes.NONE)}</option>
            <option value={sortTypes.TITLE}>{capitalizeEveryWord(sortTypes.TITLE)}</option>
            <option value={sortTypes.PRICE}>{capitalizeEveryWord(sortTypes.PRICE)}</option>
            <option value={sortTypes.RATE}>{capitalizeEveryWord(sortTypes.RATE)}</option>
        </select>
    )
}

export default SortDropdown;