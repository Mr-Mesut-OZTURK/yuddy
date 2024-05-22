"use client"

import { ErrorLottie } from '@/assets/lotties'
// import Lottie from 'lottie-react'
import React from 'react'
import { lazy } from 'react';
const Lottie = lazy(() => import('lottie-react'));

const error = () => {
    return (
        <div className='flex items-center justify-center py-10'>

            <div className='max-w-[800px]'>
                <Lottie
                    animationData={ErrorLottie}
                    loop={true}
                />
            </div>

        </div>
    )
}

export default error