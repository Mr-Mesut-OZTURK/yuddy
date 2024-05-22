"use client"

import { MainProductCard } from '@/components';
import { YButton } from '@yuddy/shared-ui';
import Image from 'next/image';
// import React from 'react'
import Link from 'next/link';
import { FC } from 'react';
import Slider, { Settings } from "react-slick";



export interface ICommentCarouselItem {
    name: string;
    jobTitle: string;
    desc: string;
    imgUrl: string;
}

export interface ICommentCarouselProps {
    slides: Array<ICommentCarouselItem>;
    settings?: Settings
}


export const CommentCarousel: FC<ICommentCarouselProps> = (props) => {
    const { slides = [], settings } = props

    const localSettings: Settings = {
        dots: false,
        // arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,

        responsive: [

            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    // dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    // dots: true
                }
            },
        ]

    };
    // console.log({ slides });
    return (
        <section className='comment_carousel'>
            <Slider {...(settings ?? localSettings)}>

                {
                    slides?.map((item, index) => {

                        return (
                            <div key={index} className='  text-white'>
                                <div className='p-2 sm:p-5 md:p-10 mx-2 bg-[#000a] pb-10 sm:pb-10 md:pb-20'>

                                    <div className='flex gap-10 items-center mb-14'>
                                        <Image
                                            src={item.imgUrl}
                                            alt=""
                                            width={90}
                                            height={90}
                                            className='rounded-full outline-orange-500 outline-3 outline-offset-4 outline'
                                        />

                                        <div>
                                            <h3 className='text-[18px]'>{item.name}</h3>
                                            <h4 className='text-[14px]'>{item.jobTitle}</h4>
                                        </div>
                                    </div>

                                    <p className='text-[14px]'>
                                        {item.desc}
                                    </p>

                                </div>
                            </div>
                        )
                    })
                }

            </Slider>
        </section>
    )
}