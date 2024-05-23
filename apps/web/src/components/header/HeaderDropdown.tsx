"use client"

import React, { useState } from 'react'
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';





export const HeaderDropdown = ({ items }: { items: any }) => {


    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [selectedItem, setSelectedItem] = useState(items?.[0]);

    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                className='text-black sm:text-white capitalize'
            >
                {selectedItem}
                <div className={`transition-all duration-500 ${!open ? "rotate-180" : "rotate-90"}`}>
                    <ExpandLessRoundedIcon />
                </div>
            </Button>


            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    sx: {
                        bgcolor: '#fff',
                        border: '1px solid #ccc',
                        padding: 0
                    }
                }}
            >
                {
                    items?.map((item: string, index: number) => {

                        return (
                            <MenuItem
                                key={index}
                                onClick={() => {
                                    setSelectedItem(item)
                                    handleClose()
                                }}
                            >
                                {item}
                            </MenuItem>
                        )
                    })
                }
            </Menu>
        </div>
    );
}
