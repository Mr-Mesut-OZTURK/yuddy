"use client"

import React, { FC } from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ICategoryItem, TCategories } from '@/ts';
import Link from 'next/link';
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';




const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#fff',
        // color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: '100%',
        // fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9',

    },
}));


interface IHeaderMenuItemProps {
    // children: React.ReactNode;
    category: ICategoryItem
}

export const HeaderMenuItem: FC<IHeaderMenuItemProps> = ({ category }) => {

    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div>
            <HtmlTooltip
                placement='top-start'
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                slotProps={{
                    popper: {
                        modifiers: [
                            {
                                name: 'offset',
                                options: {
                                    offset: [0, -15],
                                },
                            },
                        ],
                    },
                }}
                title={
                    category?.items?.length > 0 ? (
                        <div className='bg-white flex gap-1' onClick={handleClose}>
                            {
                                category?.items?.map((menuItem) => {

                                    return (
                                        <div
                                            key={menuItem.name}
                                            className='flex flex-col items-start hover:bg-white p-4'
                                        >
                                            <Link
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
                        </div>
                    ) : null
                }
            >
                {/* <Button sx={{ zIndex: (theme) => theme.zIndex.modal + 1 }} > */}
                <Link
                    href={'/' + category?.value}
                    className='text-[14px] uppercase text-white hover:text-black py-3 block'
                >
                    {category?.name}
                </Link>
                {/* </Button> */}
            </HtmlTooltip>
        </div>
    )
}
