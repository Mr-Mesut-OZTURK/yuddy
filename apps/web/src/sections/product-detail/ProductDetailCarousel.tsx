"use client"

import { YButton } from '@yuddy/shared-ui';
import Image from 'next/image';
// import React from 'react'
import Link from 'next/link';
import { FC, useRef, useState } from 'react';
import Slider, { Settings } from "react-slick";
import { IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';


export interface IProductDetailCarouselItem {
    imgUrl: string;
    title: string;
    desc1: string;
    desc2: string;
    subtitle: string;
}

export interface IProductDetailCarouselProps {
    // items: Array<IProductDetailCarouselItem>;
    settings?: Settings;
    vertical?: boolean;
}


const images = [
    "https://demo4techies.com/prestashop/shopkart-lite/1-large_default/casual-shoes-sneaker.jpg",
    "https://demo4techies.com/prestashop/shopkart-lite/2-large_default/casual-shoes-sneaker.jpg",
    "https://demo4techies.com/prestashop/shopkart-lite/3-large_default/casual-shoes-sneaker.jpg",
    "https://demo4techies.com/prestashop/shopkart-lite/4-large_default/casual-shoes-sneaker.jpg",
    "https://demo4techies.com/prestashop/shopkart-lite/5-large_default/casual-shoes-sneaker.jpg",
]


export const ProductDetailCarousel: FC<IProductDetailCarouselProps> = (props) => {

    const { settings, vertical } = props

    const [nav1, setNav1] = useState<Slider | null>(null);
    const [nav2, setNav2] = useState<Slider | null>(null);

    const slider1 = useRef<Slider>(null);
    const slider2 = useRef<Slider>(null);

    const localSettings: Settings = {
        dots: false,
        arrows: false,
        infinite: true,
        // speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (index) => slider2.current?.slickGoTo(index),
    };

    const localSettings2: Settings = {
        dots: false,
        arrows: true,
        // infinite: true,
        // speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        // centerMode: true,
        afterChange: (index) => slider1.current?.slickGoTo(index),
        focusOnSelect: true,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            }
        ]
    };


    return (
        <section className={`product_details_carousel`}>

            <div className=''>
                <Slider
                    {...(settings ?? localSettings)}
                    // asNavFor={nav2}
                    ref={slider1}
                >

                    {
                        images?.map((item, index) => {

                            return (
                                <div key={index} >
                                    <div className='relative group'>
                                        <Image
                                            alt=""
                                            width="100"
                                            height="100"
                                            layout="responsive"
                                            src={item}
                                            style={{ objectFit: "cover" }}
                                            className='group-hover:scale-105 duration-300'
                                        />

                                        <div className='hidden group-hover:flex absolute top-0 left-0 bottom-0 right-0 bg-[#fff0] items-center justify-center'>
                                            <IconButton sx={{ bgcolor: '#ccc' }} >
                                                <SearchIcon sx={{ width: 32, height: 32 }} />
                                            </IconButton>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </Slider>
            </div>

            <div className='w-[80%] m-auto'>
                <Slider
                    {...localSettings2}
                    // asNavFor={nav1}
                    ref={slider2}
                >

                    {
                        images?.map((item, index) => {
                            return (
                                <div key={index} className='p-1' >
                                    <Image
                                        alt=""
                                        width="200"
                                        height="100"
                                        layout="responsive"
                                        src={item}
                                        style={{ objectFit: "cover" }}
                                        className='cursor-pointer'

                                    // className={`cursor-pointer slider-item ${activeItem == index ? 'active' : ''}`}
                                    // onClick={() => handleItemClick(index)}
                                    />
                                </div>
                            )
                        })
                    }

                </Slider>
            </div>
        </section>
    )
}
