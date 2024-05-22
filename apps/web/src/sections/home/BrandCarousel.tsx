"use client"

import { MainProductCard } from '@/components';
import { YButton } from '@yuddy/shared-ui';
import Image from 'next/image';
// import React from 'react'
import Link from 'next/link';
import Slider, { Settings } from "react-slick";



export interface IBrandCarouselItem {
    // name: string;
    // jobTitle: string;
    // desc: string;
    imgUrl: string;
}
export interface IBrandCarouselProps {
    slides: Array<IBrandCarouselItem>;
    settings?: Settings
}


export const BrandCarousel: React.FC<IBrandCarouselProps> = (props) => {
    const { slides = [], settings } = props

    const localSettings: Settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        draggable: true,

        responsive: [

            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    infinite: true,
                    // dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    // dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
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
                            <div key={index} className='mx-2' >

                                <Image
                                    src={item.imgUrl}
                                    alt=""
                                    width="100"
                                    height="100"
                                    layout="responsive"
                                    // objectFit="contain"
                                    style={{ objectFit: "cover" }}
                                />

                            </div>
                        )
                    })
                }

            </Slider>
        </section>
    )
}
