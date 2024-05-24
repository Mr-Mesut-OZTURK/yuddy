import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionSummary, AccordionDetails, Checkbox, FormControlLabel } from '@mui/material';


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

    if (!item?.items) return null

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
                sx={{ m: 0 }}
            >
                {item.title}
            </AccordionSummary>

            <AccordionDetails className='bg-white border-t-0 shadow-none' >
                <ul>
                    {
                        item?.items?.map((i, index) => {

                            return (
                                <li key={index} className=''>
                                    <FormControlLabel
                                        control={<Checkbox />}

                                        label={i?.name}
                                        className='text-[#999] gap-0 p-0'
                                    />
                                </li>
                            )
                        })
                    }
                </ul>
            </AccordionDetails>
        </Accordion>
    )
}
