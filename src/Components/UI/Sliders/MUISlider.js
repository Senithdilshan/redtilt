import React, { useState } from 'react'
import { Slider } from '@mui/material';
const MUISlider = ({ minRange, min, max, step, getRange, priceRange }) => {
    const minDistance = minRange;
    const [value, setValue] = useState([priceRange[0], priceRange[1]]);

    const valuetext = (value) => {
        return `$${value}`;
    }
    const handleChange = (event, newValue, activeThumb) => {
        getRange(newValue);

        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
        } else {
            setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
        }
    };
    return (
        <Slider
            getAriaLabel={() => 'Minimum distance shift'}
            value={value}
            min={min}
            max={max}
            step={step}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            disableSwap
        />
    )
}

export default MUISlider;