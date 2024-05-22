
import { HeaderDropdown } from '@/components'
import React from 'react'

export const HeaderTop = () => {
    return (
        <div className='bg-black  text-white hidden sm:block'>
            <div className='container'>
                <div>
                    <HeaderDropdown />
                </div>
            </div>
        </div>
    )
}
