import { HeaderMenuItem } from '@/components'
import { TCategories } from '@/ts'
import Link from 'next/link'
import React from 'react'

const getCategories = async () => {

    const res = await fetch("http://localhost:3005/categories", { cache: 'no-cache' })
    const categories = await res.json()
    // console.log({ categories });

    return { categories }
}

export const HeaderNavigation = async () => {

    const { categories }: { categories: TCategories } = await getCategories()

    return (
        <div className='bg-[#e95f42]  text-white hidden sm:block'>
            <div className='container'>
                <div className='flex gap-4 '>
                    <Link className='text-[14px] py-3' href="/">HOME</Link>
                    {
                        categories?.map((category, index) => {

                            return (
                                <div key={index} className=''>
                                    <HeaderMenuItem category={category} />
                                </div>
                            )
                        })
                    }
                    {/* <Link className='text-[14px]' href="/shop">SHOP</Link>
                    <Link className='text-[14px]' href="/electronics">ELECTRONICS</Link>
                    <Link className='text-[14px]' href="/sport-and-books">SPORTS & BOOKS</Link>
                    <Link className='text-[14px]' href="/sale">SALE</Link> */}
                    <Link className='text-[14px] py-3' href="/contact-us">CONTACT US</Link>
                </div>
            </div>
        </div>)
}
