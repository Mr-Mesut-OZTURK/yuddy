"use client"

import React, { FC } from 'react'
import { ICategoryItem, TCategories } from '@/ts';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Link from 'next/link';



interface IHeaderMenuItemMobileProps {
    // children: React.ReactNode;
    category: ICategoryItem;
    onClick?: (event?: any) => void;
}

export const HeaderMenuItemMobile: FC<IHeaderMenuItemMobileProps> = ({ category, onClick }) => {

    // const [open, setOpen] = React.useState(false);

    // const handleClose = () => {
    //     setOpen(false);
    // };

    // const handleOpen = () => {
    //     setOpen(true);
    // };

    return (
        <Accordion className='shadow-none bg-white' >
            <AccordionSummary
                sx={{
                    minHeight: '0px!important',

                }}
                expandIcon={<ExpandMoreIcon className='group-hover:text-red-600' />}
                aria-controls="panel1-content"
                id="panel1-header"
                className='hover:text-red-600 group mb-0 pb-0 min-h-0'
            >
                <Link href={"/" + category.value} onClick={onClick} className='uppercase'>
                    {category.name}
                </Link>
            </AccordionSummary>


            <AccordionDetails>
                {
                    category?.items?.map((subCategory, index) => {

                        return (
                            <Accordion key={index} className='shadow-none bg-white'>

                                <AccordionSummary
                                    sx={{
                                        minHeight: '0px!important',
                                    }}
                                    expandIcon={<ExpandMoreIcon className='group-hover:text-red-600' />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                    className='hover:text-red-600 group mb-0 pb-0 min-h-0'
                                >
                                    <Link href={"/" + category.value + "/" + subCategory.value} onClick={onClick}>
                                        {subCategory.name}
                                    </Link>
                                </AccordionSummary>

                                <AccordionDetails>
                                    <ul>
                                        {
                                            subCategory.items?.map((i, index) => {

                                                return (
                                                    <li key={index} className='mb-2'>
                                                        <Link href={"/" + category.value + "/" + subCategory.value + "/" + i?.value} onClick={onClick}>
                                                            <h6 className='hover:text-red-600 cursor-pointer'>
                                                                {i.name}
                                                            </h6>
                                                        </Link>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </AccordionDetails>
                            </Accordion>
                        )
                    })
                }
            </AccordionDetails>
        </Accordion>
    )
}
