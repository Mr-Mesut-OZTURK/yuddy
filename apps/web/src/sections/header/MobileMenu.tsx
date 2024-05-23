"use client"

import React from 'react'
import { IconButton, SwipeableDrawer } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { TCategories } from '@/ts';
import Link from 'next/link';
import { HeaderDropdown, HeaderMenuItemMobile } from '@/components';





export const MobileMenu = ({ categories }: { categories: TCategories }) => {


    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    return (
        <div>
            <IconButton className='flex sm:hidden' onClick={toggleDrawer(true)}>
                <MenuIcon sx={{ cursor: 'pointer', color: '#666' }} />
            </IconButton>

            <SwipeableDrawer
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}

                PaperProps={{
                    sx: {
                        width: '90%',
                        bgcolor: '#fff',
                    }
                }}
            >
                <div className=''>

                    <Link
                        href="/"
                        onClick={() => setOpen(false)}
                        className='text-[14px] p-4 block'
                    >
                        HOME
                    </Link>
                    <div className='flex flex-col border'>
                        {
                            categories?.map((category, index) => {

                                return (
                                    <HeaderMenuItemMobile
                                        key={index}
                                        category={category}
                                        onClick={() => setOpen(false)}
                                    />
                                )
                            })
                        }
                    </div>
                    <Link
                        href="/contact-us"
                        className='text-[14px] p-4 block border-b'
                        onClick={() => setOpen(false)}
                    >
                        CONTACT US
                    </Link>

                    <div className='flex gap-2 justify-center p-4 border-b'>
                        <HeaderDropdown
                            items={["english", "french"]}
                        />
                        <HeaderDropdown
                            items={["USD $", "EUR £"]}
                        />
                    </div>

                </div>
            </SwipeableDrawer>
        </div>
    )
}
