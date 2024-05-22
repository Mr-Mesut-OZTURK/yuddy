"use client"

import React, { useState } from 'react'
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';

export const HeaderDropdown = ({ }) => {

    const [isExpand, setIsExpand] = useState(false);
    const [selectedItem, setSelectedItem] = useState("English");

    return (
        <div className='w-auto relative p-2'
            onMouseLeave={() => setIsExpand(false)}
        >
            <div
                className='cursor-pointer flex'
                onClick={() => setIsExpand(!isExpand)}
            >
                {selectedItem}
                <div className={`transition-all duration-500 ${!isExpand ? "rotate-180" : "rotate-90"}`}>
                    <ExpandLessRoundedIcon />
                </div>
                {/* {isExpand ? (<ExpandLessRoundedIcon />) : (<ExpandMoreRoundedIcon />)} */}
            </div>

            <div className={`transition-[height] duration-500 overflow-hidden absolute top-[100%] z-10 bg-black  ${isExpand ? "p-2" : "h-0"}`}>
                <ul>
                    <li>
                        English
                    </li>
                    <li>
                        French
                    </li>
                </ul>
            </div>
        </div>
    )
}
