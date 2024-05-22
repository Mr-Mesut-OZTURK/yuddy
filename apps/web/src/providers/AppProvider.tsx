"use client"

import React from 'react'
import { YuddyProvider } from '@yuddy/shared-ui/dist/providers/YuddyProvider'

export const AppProvider = ({ children }: any) => {
    return (
        <>
            <YuddyProvider>
                {children}
            </YuddyProvider>
        </>
    )
}
