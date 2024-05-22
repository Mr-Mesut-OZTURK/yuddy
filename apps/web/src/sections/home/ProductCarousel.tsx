"use client"

import { MainProductCard } from '@/components';
import { YButton } from '@yuddy/shared-ui';
// import React from 'react'
import Link from 'next/link';
import Slider, { Settings } from "react-slick";



interface IProductCarouselProps {
    slides: Array<any>;
    settings?: Settings
}


export const ProductCarousel: React.FC<IProductCarouselProps> = (props) => {
    const { slides = [], settings } = props

    const localSettings: Settings = {
        dots: false,
        // arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    // dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
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
        <section className='product_carousel'>
            <Slider {...(settings ?? localSettings)}>

                {
                    slides?.map((item, index) => {

                        return (
                            <MainProductCard
                                key={index}
                                className='mx-2'
                            />
                        )
                    })
                }

            </Slider>
        </section>
    )
}
