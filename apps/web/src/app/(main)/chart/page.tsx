import { MainButton, PoliciesComponent } from '@/components'
import React from 'react'

const ChartPage = () => {
    return (
        <div className='container py-10'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
                <div className='col-span-1 md:col-span-2'>
                    <div className='border'>
                        <h4 className='p-4 border-b font-bold'>
                            SHOPPING CART
                        </h4>
                        <p className='p-4'>
                            There are no more items in your cart
                        </p>
                    </div>
                </div>

                <div className='flex flex-col gap-4'>
                    <div className='border'>
                        <div className='flex flex-col gap-3 border-b  p-4'>
                            <p className='flex justify-between'>
                                0 items
                                <span className='text-[#999]'>
                                    $0.00
                                </span>
                            </p>

                            <p className='flex justify-between'>
                                Shipping:
                                <span className='text-[#999]'>
                                    Free
                                </span>
                            </p>
                        </div>

                        <div className='flex flex-col gap-3 border-b  p-4'>
                            <p className='flex justify-between'>
                                Total (tax excl.)
                                <span className='text-[#999]'>
                                    $0.00
                                </span>
                            </p>

                            <p className='flex justify-between'>
                                Taxes
                                <span className='text-[#999]'>
                                    $0.00
                                </span>
                            </p>
                        </div>

                        <div className='p-4 flex items-center justify-center'>
                            <MainButton disabled>
                                CHECKOUT
                            </MainButton>
                        </div>
                    </div>

                    <div className='border'>
                        <PoliciesComponent />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChartPage