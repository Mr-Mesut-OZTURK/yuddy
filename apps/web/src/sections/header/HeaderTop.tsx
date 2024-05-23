
import { HeaderDropdown } from '@/components'
import React from 'react'

export const HeaderTop = () => {
    return (
        <div className='bg-black  text-white hidden sm:block'>
            <div className='container'>
                <div className='flex gap-2'>
                    <HeaderDropdown
                        items={["english", "french"]}
                    />
                    <HeaderDropdown
                        items={["USD $", "EUR £"]}
                    />
                </div>
            </div>
        </div>
    )
}
