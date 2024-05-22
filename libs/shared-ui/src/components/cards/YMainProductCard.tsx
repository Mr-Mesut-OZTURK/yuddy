"use client"
import React from 'react'
import { YButton } from '../buttons'
import { Link } from '@mui/material'

export const YMainProductCard = () => {
    return (
        <div>

            {/* ************ main ************ */}
            <div className='bg-[#f0f2f4] p-2 relative'>
                <img src="https://demo4techies.com/prestashop/shopkart-lite/1-home_default/casual-shoes-sneaker.jpg" alt="" />
                <div className='top-0 left-0 right-0'>
                    <div className='bg-red-700'>
                        NEW PRODUCT
                    </div>
                    <div>
                        <div className='bg-gray-500'>
                            ON SALE
                        </div>
                        <div className='bg-black'>
                            -12%
                        </div>
                    </div>
                </div>
            </div>

            {/* ************ info ************ */}
            <div>
                <Link href="">
                    CASUAL SHOES SNEAKER
                </Link>
                <p className='font-bold'>
                    $99.00
                    <span className='color'>
                        $87.12
                    </span>
                </p>

            </div>

            {/* ************ button ************ */}
            <YButton
                sx={{
                    borderRadius: 0,
                    backgroundColor: '#000'
                }}
            >
                ADD TO CART
            </YButton>

        </div>
    )
}
