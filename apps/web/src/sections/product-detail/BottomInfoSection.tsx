"use client"
import React, { FC, useState } from 'react'


interface IBottomInfoSection {
    description: React.ReactNode;
    details: React.ReactNode;
}


export const BottomInfoSection: FC<IBottomInfoSection> = ({ description, details }) => {

    const [selectedTab, setSelectedTab] = useState(0)

    return (
        <div className='border-2'>
            <div className='flex border-b-2'>
                <h6
                    className={`p-3 cursor-pointer border-r-2 ${selectedTab === 0 ? "bg-gray-100" : ""}`}
                    onClick={() => setSelectedTab(0)}
                >
                    Description
                </h6>

                <h6
                    className={`p-3 cursor-pointer border-r-2 ${selectedTab === 1 ? "bg-gray-100" : ""}`}
                    onClick={() => setSelectedTab(1)}
                >
                    Product Details
                </h6>
            </div>

            {selectedTab === 0 ? (
                <div className='p-4'>
                    {description}
                </div>
            ) : (
                <div className='p-4'>
                    {details}
                </div>
            )}

        </div>
    )
}
