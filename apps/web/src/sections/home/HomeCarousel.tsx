"use client"

import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Slider, { Settings } from "react-slick";



type PropType = {
    slides: Array<{
        imgUrl: string;
        title: string;
        desc1: string;
        desc2: string;
        subtitle: string;
    }>;
    settings?: Settings
}


export const HomeCarousel: React.FC<PropType> = (props) => {
    const { slides = [], settings } = props

    const localSettings: Settings = {
        dots: false,
        // arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

    };
    // console.log({ slides });
    return (
        <section className=''>
            <Slider {...(settings ?? localSettings)}>

                {
                    slides?.map((item, index) => {

                        return (
                            <div
                                key={index}
                                className='relative'
                            >
                                <img src={item.imgUrl} alt="" />

                                <div className='absolute right-0 left-[50%] top-0 bottom-0 flex items-center justify-center'>

                                    <div className='flex flex-col gap-3 md:gap-3'>
                                        <h2 className='text-[14px] sm:text-[18px] lg:text-[20px] uppercase flex-col items-center'>
                                            {item.title}
                                            <br />
                                            <strong className='text-[20px] sm:text-[36px] lg:text-[48px]'>
                                                {item.desc1}
                                                <br />
                                                {item.desc2}
                                            </strong>
                                            <br />
                                            <span className='text-[12px] sm:text-[14px] lg:text-[16px] capitalize'>
                                                {item.subtitle}
                                            </span>
                                        </h2>

                                        <Link href="">
                                            <button className='bg-red-600 hover:scale-105 active:bg-red-500 active:scale-95 text-white p-1 text-[10px] sm:p-2 sm:text-[14px] lg:p-3 lg:text-[16px]'>
                                                Shop Today
                                            </button>
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        )
                    })
                }

            </Slider>
        </section>
    )
}
