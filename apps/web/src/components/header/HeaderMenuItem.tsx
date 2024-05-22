"use client"

import React, { FC } from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ICategoryItem, TCategories } from '@/ts';
import Link from 'next/link';

interface IHeaderMenuItemProps {
    // children: React.ReactNode;
    category: ICategoryItem
}

export const HeaderMenuItem: FC<IHeaderMenuItemProps> = ({ category }) => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement> | any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div onMouseOut={handleClose} onMouseOver={handleClick}>
            <Button
                onMouseOver={handleClick}
                sx={{ zIndex: (theme) => theme.zIndex.modal + 1 }}
                onClick={handleClick}
                onMouseEnter={handleClick}
            >
                <Link
                    href={'/' + category?.value}
                    className='text-[14px] uppercase text-white hover:text-black py-3 block'
                >
                    {category?.name}
                </Link>
            </Button>

            {
                category?.items?.length > 0 && (
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            onMouseOver: handleClick,
                            sx: {
                                p: 0,
                                border: '1px solid #ccc'
                            }
                        }}
                    >
                        <div className='bg-white flex gap-4 p-2'>
                            {
                                category?.items?.map((menuItem) => {

                                    return (
                                        <div
                                            key={menuItem.name}
                                            onClick={handleClose}
                                            className='flex flex-col items-start hover:bg-white p-4'
                                        >
                                            <Link
                                                onClick={handleClose}
                                                href={'/' + category.value + '/' + menuItem.value}
                                                className='font-bold text-[14px] p-2  mb-1 text-start text-[#555] hover:text-red-500'
                                            >
                                                {menuItem.name}
                                            </Link>

                                            <ul>
                                                {
                                                    menuItem?.items?.map((subItem, index) => {

                                                        return (
                                                            <li key={index}>
                                                                <Link
                                                                    onClick={handleClose}
                                                                    href={'/' + category.value + '/' + menuItem.value + '/' + subItem.value}
                                                                    className='text-[14px] block p-1 px-2 text-[#555] hover:text-red-500'
                                                                >
                                                                    {subItem.name}
                                                                </Link>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    )
                                })
                            }
                            {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem> */}
                        </div>
                    </Menu>
                )
            }
        </div>
    )
}
