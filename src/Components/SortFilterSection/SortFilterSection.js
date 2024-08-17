import React, { useContext } from 'react'
import SortDropdown from '../UI/Dropdowns/SortDropdown';
import CommonButton from '../UI/Buttons/CommonButton';
import GridListButton from '../UI/Buttons/GridListButton';
import * as IO5 from "react-icons/io5";
import * as BI from "react-icons/bi";
import { sortTypes } from '../../Constants/SortTypes';
import { AppContext } from '../../Store/Store';
const SortFilterSection = ({
    sortType,
    sortOrder,
    handleSort,
    isLoading,
    setIsFilterModalOpen,
    isFilterModalOpen,
    setIsGridView,
    isGridView
}) => {
    const AppContextAPI = useContext(AppContext);
    const Theme = AppContextAPI.theme;
    return (
        <div className='flex w-full justify-between mb-4'>
            <div className='flex sm:gap-2 items-center'>
                <p className={`${Theme === "dark" ? "text-white" : "text-black"} font-bold mr-1 sm:mr-0`}>Sort by</p>
                <SortDropdown handleSortOrder={(event) => {
                    sortType.current = event.target.value;
                    handleSort();
                }
                } isLoading={isLoading} />
                <button className='p-1 bg-white rounded-full ml-2'
                    onClick={async () => {
                        sortOrder.current = sortOrder.current === sortTypes.ASC ? sortTypes.DESC : sortTypes.ASC;
                        handleSort();
                    }}
                >
                    <BI.BiSort /></button>
            </div>
            <div className='flex sm:gap-2 mb-1 sm:mb-0'>
                <CommonButton
                    Icon={<IO5.IoFilter />}
                    text={'All Filters'}
                    onclick={() => setIsFilterModalOpen(!isFilterModalOpen)}
                    selectState={isFilterModalOpen}
                    disabled={isLoading}
                    bgColor={'bg-white'} textColor={'text-black'}
                />
                <GridListButton setIsGridView={setIsGridView} isGridView={isGridView} text={'Grid'} state={true} disabled={isLoading} />
                <GridListButton setIsGridView={setIsGridView} isGridView={isGridView} text={'List'} state={false} disabled={isLoading} />
            </div>
        </div>
    )
}

export default SortFilterSection;
