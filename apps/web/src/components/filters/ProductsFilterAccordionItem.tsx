import React from 'react'

import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Link from 'next/link';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';


interface IProductsFilterAccordionItem {
    item: {
        title: string;
        items: Array<{
            name: string;
            value: string;
        }>
    }
}


export const ProductsFilterAccordionItem = ({ item }: IProductsFilterAccordionItem) => {

    return (
        <Accordion
            className='shadow-none mb-0 border-none border-t-0'
            elevation={0}
            sx={{
                '&:before': {
                    display: 'none'
                },
            }}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                className='bg-white m-0 py-0 min-h-0 border-none'
            >
                {item.title}
            </AccordionSummary>
            <AccordionDetails
                className='bg-white border-t-0 shadow-none'
            >
                <ul>
                    {
                        item.items?.map((i, index) => {

                            return (
                                <li key={index} className=''>
                                    <FormControlLabel control={<Checkbox />} label={i.name} />
                                </li>
                            )
                        })
                    }
                </ul>
            </AccordionDetails>
        </Accordion>
    )
}
