"use client"
import React, { useState } from 'react'
import { Link, IconButton } from '@mui/material'
import { YButton } from '@yuddy/shared-ui'
import Image from 'next/image'
import SearchIcon from '@mui/icons-material/Search';

import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';


interface IComponentProps {
    className?: string
}
export const MainProductCard = ({ className }: IComponentProps) => {

    const [detailDialog, setDetailDialog] = useState(false)
    const [chartDialog, setChartDialog] = useState(false)


    return (
        <div className={`${className}`}>

            {/* ************ main ************ */}
            <div className='bg-[#f0f2f4] p-2 relative'>
                {/* <img src="https://demo4techies.com/prestashop/shopkart-lite/1-home_default/casual-shoes-sneaker.jpg" alt="" /> */}

                <div className='relative group'>
                    <Image
                        alt=""
                        width="100"
                        height="100"
                        layout="responsive"
                        // objectFit="contain"
                        src={"https://demo4techies.com/prestashop/shopkart-lite/1-home_default/casual-shoes-sneaker.jpg"}
                        style={{ objectFit: "cover" }}
                        className='group-hover:scale-105 duration-300'
                    />

                    <div className='hidden group-hover:flex absolute top-0 left-0 bottom-0 right-0 bg-[#fff0] items-center justify-center'>
                        <IconButton sx={{ bgcolor: '#ccc' }} onClick={() => setDetailDialog(true)}>
                            <SearchIcon sx={{ width: 32, height: 32 }} />
                        </IconButton>
                    </div>
                </div>

                <div className='absolute top-2 left-2 right-2 flex gap-3 items-start justify-between'>
                    <div className='bg-red-700 text-white text-[10px] p-1'>
                        NEW PRODUCT
                    </div>
                    <div className='flex flex-col gap-3 items-end'>
                        <div className='bg-gray-500 text-white text-[10px] p-1'>
                            ON SALE
                        </div>
                        <div className='bg-black text-white text-[10px] p-1'>
                            -12%
                        </div>
                    </div>
                </div>
            </div>

            {/* ************ info ************ */}
            <div className='flex flex-col gap-4 items-center'>
                <Link href={`product/${"shoe"}`} className='text-center text-[14px] mt-2'>
                    CASUAL SHOES SNEAKER
                </Link>
                <p className='font-bold flex gap-2 '>
                    <span className='text-gray-500 line-through'>
                        $99.00
                    </span>
                    <span className='text-red-800'>
                        $87.12
                    </span>
                </p>

                <YButton
                    sx={{
                        borderRadius: 0,
                        backgroundColor: '#000',
                    }}
                    onClick={() => setChartDialog(true)}
                >
                    ADD TO CART
                </YButton>

            </div>



            <Dialog onClose={() => setDetailDialog(false)} open={!!detailDialog}>
                <div className='p-2 bg-white'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 '>
                        <div>
                            Slider Section
                        </div>

                        <div>
                            info section
                        </div>
                    </div>
                </div>
            </Dialog>


            <Dialog onClose={() => setChartDialog(false)} open={!!chartDialog}>
                <div>

                </div>
            </Dialog>

        </div>
    )
}
