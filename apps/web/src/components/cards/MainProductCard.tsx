"use client"
import React from 'react'
import { Link } from '@mui/material'
import { YButton } from '@yuddy/shared-ui'


interface IComponentProps {
    className?: string
}
export const MainProductCard = ({ className }: IComponentProps) => {
    return (
        <div className={`${className}`}>

            {/* ************ main ************ */}
            <div className='bg-[#f0f2f4] p-2 relative'>
                <img src="https://demo4techies.com/prestashop/shopkart-lite/1-home_default/casual-shoes-sneaker.jpg" alt="" />

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
                <Link href="">
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
                >
                    ADD TO CART
                </YButton>

            </div>

        </div>
    )
}
