// "use client"
import React from 'react'
import { Link } from '@mui/material'
import { YButton } from '@yuddy/shared-ui'
import Image from 'next/image';

export interface IOfferCardItem {
    imgUrl: string;
    title: string;
    desc: string;
}

export interface IComponentProps {
    item: IOfferCardItem
}
export const MainOfferCard = ({ item }: IComponentProps) => {
    return (
        <div className='bg-[#f0f2f4] relative group overflow-hidden  w-full'>

            <Image
                alt=""
                width="100"
                height="100"
                layout="responsive"
                // objectFit="contain"
                src={item?.imgUrl ?? ""}
                style={{ objectFit: "cover" }}
                className='group-hover:scale-105 duration-300'
            />

            <div className='absolute top-2 left-2 right-2 flex flex-col gap-3 items-start justify-between'>
                <p className='text-[14px] p-1 uppercase relative mb-10'>
                    {item?.title}
                    <span className='w-[50px] h-[3px] bg-black absolute bottom-[-1px] left-1'></span>
                </p>
                <p className='flex flex-col gap-3 items-end text-[24px] md:text-[30px] font-[500] max-w-[200px]'>
                    {item?.desc}
                </p>
            </div>
        </div>
    )
}
