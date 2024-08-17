import React, { useEffect, useState } from 'react'
import { CategoriesNameString, CategoriesString } from '../../../Constants/Categories'
import { capitalizeEveryWord } from '../../../Util/WordCaptilize';
const CategoryDropdown = ({ handleCategoryChange, isLoading, categoryList, defaultValue = CategoriesString.ALL }) => {
    const [selectedValue, setSelectedValue] = useState(defaultValue);

    useEffect(() => {
        setSelectedValue(defaultValue);
    }, [defaultValue]);

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
        handleCategoryChange(event);
    };
    return (
        <select className="bg-gray-50 border border-gray-300 rounded-3xl
            text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2 
            cursor-pointer"
            onChange={handleChange}
            disabled={isLoading}
            value={selectedValue}>
            <option value={CategoriesString.ALL}>{CategoriesNameString.ALL}</option>
            {!isLoading &&
                categoryList.map((category) => (
                    <option key={category} value={category}>{capitalizeEveryWord(category)}</option>
                ))}
        </select>
    )
}

export default CategoryDropdown;
