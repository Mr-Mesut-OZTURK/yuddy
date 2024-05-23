import React from 'react'
import Image from 'next/image'
import { IconButton, Badge } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';


export const HeaderSearch = () => {
    return (
        <div className='bg-white  text-black'>
            <div className='container flex items-center justify-between p-2'>

                <div className='flex items-center'>
                    <IconButton className='flex sm:hidden'>
                        <MenuIcon sx={{ cursor: 'pointer', color: '#666' }} />
                    </IconButton>

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

                    <Badge badgeContent={"0"} color="error">
                        <LocalMallOutlinedIcon sx={{ cursor: 'pointer', color: '#666' }} />
                    </Badge>
                </div>
            </div>

            <div className='bg-[#f1f1f1] p-2'>
                <div className='border-4 pr-1 flex sm:hidden bg-[#fff]'>
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
