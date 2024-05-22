import React from 'react'
import { HeaderTop } from './HeaderTop'
import { HeaderSearch } from './HeaderSearch'
import { HeaderNavigation } from './HeaderNavigation'

export const HeaderMain = () => {
    return (
        <div>
            <HeaderTop />
            <HeaderSearch />
            <HeaderNavigation />
        </div>
    )
}
