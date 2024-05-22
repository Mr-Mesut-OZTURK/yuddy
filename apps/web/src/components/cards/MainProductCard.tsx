"use client"
import React, { useState } from 'react'
import { Link, IconButton } from '@mui/material'
import { YButton } from '@yuddy/shared-ui'
import Image from 'next/image'
import SearchIcon from '@mui/icons-material/Search';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
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
import { MainButton } from '../buttons'


interface IComponentProps {
    className?: string
}
export const MainProductCard = ({ className }: IComponentProps) => {

    const [detailDialog, setDetailDialog] = useState(false)
    const [chartDialog, setChartDialog] = useState(false)

    const [quantity, setQuantity] = useState(1)


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



            <Dialog onClose={() => setDetailDialog(false)} open={!!detailDialog}
                PaperProps={{

                    sx: {
                        width: '90%',
                        maxWidth: "900px",
                        bgcolor: 'red'
                    }
                }}
            >
                <div className='p-5 bg-white'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 '>
                        <div className='hidden sm:block'>
                            Slider Section
                        </div>

                        <div>
                            <h2 className='text-[24px] font-[500] mb-5'>
                                CASUAL SHOES SNEAKER
                            </h2>

                            <p className='text-[#999] line-through mb-2'>
                                $99.00
                            </p>

                            <p className='text-red-500'>
                                $99.00
                                <span className='text-white bg-red-500 p-1 ml-2'>
                                    SAVE 12%
                                </span>
                            </p>

                            <p className='mt-5 font-[300] text-[14px] mb-2'>
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium doloremque laudantium,
                                totam rem aperiam, eaque ipsa quae ab illo inventore
                                veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            </p>

                            <ul className='font-[300] text-[14px] mb-5 list-disc list-inside ml-3'>
                                <li className='list-item'>
                                    Ut enim ad minima veniam, quis nostrum exercitationem.
                                </li>

                                <li>
                                    Nnisi ut aliquid ex ea commodi consequatur.
                                </li>

                                <li>
                                    Quis autem vel eum iure reprehenderit qui in ea voluptate
                                </li>

                                <li>
                                    Velit esse quam nihil molestiae consequatur, vel illum.
                                </li>

                                <li>
                                    Dolorem eum fugiat quo voluptas nulla pariatur.
                                </li>
                            </ul>

                            <div className='flex items-end justify-between gap-2'>
                                <div className='flex flex-col'>
                                    <span>
                                        Quantity :
                                    </span>
                                    <input
                                        type="number"
                                        name=""
                                        min={0}
                                        value={quantity}
                                        onChange={(e) => {
                                            // console.log({ e });
                                            setQuantity(Number(e.target.value))

                                        }}
                                        id=""
                                        className='border w-[70px] outline-none text-[22px] p-2 pl-4'
                                    />
                                </div>

                                <MainButton>
                                    ADD TO CART
                                </MainButton>

                                {
                                    true && (
                                        <div className='flex gap-2'>
                                            <WarningAmberRoundedIcon color='warning' />
                                            <p>
                                                Last items in stock
                                            </p>
                                        </div>
                                    )
                                }
                            </div>
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
