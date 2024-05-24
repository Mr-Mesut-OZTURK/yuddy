import React from 'react'
import Image from 'next/image'
import { IconButton, Badge } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import Link from 'next/link';
import { MobileMenu } from './MobileMenu';
import { TCategories } from '@/ts';


const getCategories = async () => {

    const res = await fetch("http://localhost:3005/categories", { cache: 'no-cache' })
    const categories = await res.json()
    // console.log({ categories });

    return { categories }
}

export const HeaderSearch = async () => {

    const { categories }: { categories: TCategories } = await getCategories()


    return (
        <div className='bg-white  text-black'>
            <div className='container flex items-center justify-between p-2'>

                <div className='flex items-center'>

                    <MobileMenu categories={categories} />

                    <Link href="/">
                        <Image
                            src="https://demo4techies.com/prestashop/shopkart-lite/img/shopkart-lite-logo-1561444415.jpg"
                            alt=''
                            width="100"
                            height="100"
                            // layout="responsive"
                            // objectFit="contain"
                            style={{ objectFit: "cover" }}
                            className='w-[120px] sm:w-[180px]'
                        />
                    </Link>
                </div>

                <div className='flex items-center gap-5'>
                    <div className='border-2 pr-1 hidden sm:block'>
                        <input
                            className='bg-white  p-3 text-[14px] outline-none'
                            placeholder='Search our catlog'
                        />
                        <IconButton sx={{}}>
                            <SearchIcon />
                        </IconButton>
                    </div>

                    <Link href="/chart" className='mr-4'>
                        <Badge badgeContent={"0"} color="error">
                            <LocalMallOutlinedIcon sx={{ cursor: 'pointer', color: '#666' }} />
                        </Badge>
                    </Link>
                </div>
            </div>

            <div className='bg-[#f1f1f1] p-2 sm:hidden '>
                <div className='border-4 pr-1 flex bg-[#fff]'>
                    <input
                        className='bg-white  p-3 text-[14px] outline-none flex-1'
                        placeholder='Search our catlog'
                    />
                    <IconButton sx={{}}>
                        <SearchIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}
