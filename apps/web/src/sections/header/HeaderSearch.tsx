import React from 'react'
import Image from 'next/image'
import { IconButton, Badge } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';


export const HeaderSearch = () => {
    return (
        <div className='bg-white p-2 text-black'>
            <div className='container flex items-center justify-between'>
                <Image
                    src="https://demo4techies.com/prestashop/shopkart-lite/img/shopkart-lite-logo-1561444415.jpg"
                    alt=''
                    width="180"
                    height="105"
                    // layout="responsive"
                    // objectFit="contain"
                    style={{ objectFit: "cover" }}
                />

                <div className='flex items-center gap-5'>
                    <div className='border-2 pr-1'>
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
        </div>
    )
}
