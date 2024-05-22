import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Link from 'next/link';



interface IMobileFooterItem {
    item: {
        title: string;
        children: Array<{
            text: string;
            link?: string;
        }>
    }
}


export const MobileFooterItem = ({ item }: IMobileFooterItem) => {

    return (
        <Accordion
            className='bg-black text-white shadow-none '
        >
            <AccordionSummary
                sx={{
                    minHeight: '0px!important',
                }}
                expandIcon={<ExpandMoreIcon className='text-white group-hover:text-red-600' />}
                aria-controls="panel1-content"
                id="panel1-header"
                className='hover:text-red-600 group mb-0 pb-0 min-h-0'
            >
                {item.title}
            </AccordionSummary>
            <AccordionDetails>
                <ul>
                    {
                        item.children?.map((i, index) => {

                            return (
                                <li key={index} className='mb-2'>
                                    <Link href={i?.link ?? ""}>
                                        <h6 className='hover:text-red-600 cursor-pointer'>
                                            {i.text}
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
}