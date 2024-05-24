"use client"

import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import { IconButton } from '@mui/material'
import { YButton } from '@yuddy/shared-ui'
import SearchIcon from '@mui/icons-material/Search';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';

import { MainButton } from '../buttons'
import { ProductDetailCarousel } from '@/sections'


export const AddToChartButton = () => {

    const [detailDialog, setDetailDialog] = useState(false)
    const [chartDialog, setChartDialog] = useState(false)

    const [quantity, setQuantity] = useState(1)

    return (
        <div>

            <MainButton
                onClick={() => {
                    setDetailDialog(false)
                    setChartDialog(true)
                }}
            >
                ADD TO CART
            </MainButton>

            <Dialog
                open={!!chartDialog}
                onClose={() => setChartDialog(false)}
                PaperProps={{

                    sx: {
                        width: '90%',
                        maxWidth: "900px",
                        bgcolor: 'red'
                    }
                }}
            >
                <div className=' bg-white'>
                    <p className='text-center bg-black text-white p-4'>
                        <span className='mr-3'>
                            <DoneRoundedIcon />
                        </span>
                        Product successfully added to your shopping cart
                    </p>
                    <div className='grid grid-cols-1 sm:grid-cols-2 p-5'>
                        <div>

                        </div>

                        <div>
                            <p className='mb-5'>
                                There is 0 item in your cart.
                            </p>

                            <div className='flex flex-col gap-3'>
                                <p className='flex justify-between'>
                                    Total products:
                                    <span className='text-[#999]'>
                                        $0.00
                                    </span>
                                </p>

                                <p className='flex justify-between'>
                                    Total shipping:
                                    <span className='text-[#999]'>
                                        Free
                                    </span>
                                </p>

                                <p className='flex justify-between'>
                                    Taxes
                                    <span className='text-[#999]'>
                                        $0.00
                                    </span>
                                </p>

                                <p className='flex justify-between'>
                                    Total:
                                    <span className='text-[#999]'>
                                        $0.00 (tax excl.)
                                    </span>
                                </p>
                            </div>

                            <div className='flex gap-2 mt-5'>
                                <MainButton
                                    sx={{ fontSize: '10px', width: '100%' }}
                                    onClick={() => {
                                        setChartDialog(false)
                                    }}
                                >
                                    CONTINUE SHOPPING
                                </MainButton>
                                <Link href="/chart" className='w-full'>
                                    <MainButton
                                        sx={{ fontSize: '10px', width: '100%' }}
                                    // onClick={() => {
                                    //     setChartDialog(false)
                                    // }}
                                    >
                                        <DoneRoundedIcon />
                                        PROCEED TO CHECKOUT
                                    </MainButton>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}
