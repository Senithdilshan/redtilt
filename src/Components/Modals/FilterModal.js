import { Modal } from '@mui/material';
import React, { useContext, useState } from 'react'
import CategoryDropdown from '../UI/Dropdowns/CategoryDropdown';
import CommonButton from '../UI/Buttons/CommonButton';
import { CategoriesString } from '../../Constants/Categories';
import MUISlider from '../UI/Sliders/MUISlider';
import { AppContext } from '../../Store/Store';

const FilterModal = ({
    isFilterModalOpen,
    handleClose,
    handleCategoryChange,
    categoryList,
    isLoading
}) => {
    const [category, setCategory] = useState(CategoriesString.ALL);
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const AppContextAPI = useContext(AppContext);
    const Theme = AppContextAPI.theme;
    const handleFilter = () => {
        handleCategoryChange(category, priceRange);
        handleClose();
    }
    const handleClear = () => {
        setPriceRange([0, 1000]);
        setCategory(CategoriesString.ALL);
        handleCategoryChange(CategoriesString.ALL, [0, 1000]);
        handleClose();
    }
    return (
        <Modal
            open={isFilterModalOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className={`absolute top-[50%] left-[50%] min-w-80 transform -translate-x-1/2 -translate-y-1/2 ${Theme === "dark" ? "bg-gray-500 text-white" : "bg-white"} rounded-2xl p-6`}>
                <div id='modal-modal-title' className='text-2xl text-center mb-4 font-bold '>Filter Your products</div>
                <div id='modal-modal-description' className='flex justify-center'>
                    <div className='w-full'>
                        <div className='flex justify-start mb-3'>
                            <CategoryDropdown handleCategoryChange={(e) => setCategory(e.target.value)} categoryList={categoryList} isLoading={isLoading} defaultValue={category} />
                        </div>
                        <div className='flex justify-start mb-3 gap-1'>
                            <div className='w-24'>Price ($)</div>
                            <MUISlider minRange={100} min={0} max={1000} step={100} getRange={setPriceRange} priceRange={priceRange} />
                        </div>
                        <div className='flex justify-end'>
                            <CommonButton text={'Clear'}
                                onclick={handleClear} bgColor={'bg-orange-400'} textColor={Theme === "dark" && "text-black"} disabled={false} />
                            <CommonButton text={'Filter'} onclick={handleFilter} bgColor={Theme === "dark" ? "bg-white" : "bg-indigo-400"} textColor={Theme === "dark" && "text-black"} disabled={false} />
                        </div>

                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default FilterModal;