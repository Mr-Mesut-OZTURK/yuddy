"use client"

import { NotFoundLottie } from '@/assets/lotties'
import { MainButton } from '@/components'
// import Lottie from 'lottie-react'
import Link from 'next/link'
import { lazy } from 'react';
const Lottie = lazy(() => import('lottie-react'));


export default function NotFound() {
    return (
        <div className='container flex flex-col items-center justify-center py-10'>
            <div className='max-w-[800px]'>
                <Lottie
                    animationData={NotFoundLottie}
                    loop={true}
                />
            </div>
            <Link href="/">
                <MainButton>
                    Return Home
                </MainButton>
            </Link>
        </div>
    )
}