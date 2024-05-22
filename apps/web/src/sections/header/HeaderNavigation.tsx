import Link from 'next/link'
import React from 'react'

export const HeaderNavigation = () => {
    return (
        <div className='bg-[#e95f42] p-2 text-white hidden sm:block'>
            <div className='container'>
                <div className='flex gap-4 py-3'>
                    <Link className='text-[14px]' href="/">HOME</Link>
                    <Link className='text-[14px]' href="/shop">SHOP</Link>
                    <Link className='text-[14px]' href="/electronics">ELECTRONICS</Link>
                    <Link className='text-[14px]' href="/sport-and-books">SPORTS & BOOKS</Link>
                    <Link className='text-[14px]' href="/sale">SALE</Link>
                    <Link className='text-[14px]' href="/contact-us">CONTACT US</Link>
                </div>
            </div>
        </div>)
}
