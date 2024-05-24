
import { HeaderDropdown } from '@/components'
import Link from 'next/link'
import React from 'react'

export const HeaderTop = () => {
    return (
        <div className='bg-black  text-white hidden sm:block'>
            <div className='container flex justify-between items-center'>
                <div className='flex gap-2'>
                    <HeaderDropdown
                        items={["english", "french"]}
                    />
                    <HeaderDropdown
                        items={["USD $", "EUR £"]}
                    />
                </div>

                <div className='flex gap-2 '>
                    <Link href="#" className='font-[300] hover:text-red-600'>
                        Sign in
                    </Link>

                    <Link href="/contact-us" className='font-[300] hover:text-red-600'>
                        Contact us
                    </Link>
                </div>
            </div>
        </div>
    )
}
