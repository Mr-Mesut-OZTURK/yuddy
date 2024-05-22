import { MainProductCard } from '@/components'
import { BottomInfoSection, ProductCarousel } from '@/sections'
import Image from 'next/image'
import React from 'react'

const ProductDetails = () => {
    return (
        <div>

            <div>
                {/* *************** slider **************** */}
                <div>

                </div>

                {/* *************** description **************** */}
                <div>

                </div>
            </div>

            {/* *************** bottom info **************** */}
            <div className='container'>
                <BottomInfoSection
                    description={
                        <div className='text-[#666]'>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit
                                voluptatem accusantium doloremque laudantium, totam
                                rem aperiam, eaque ipsa quae ab illo inventore veritatis
                                et quasi architecto beatae vitae dicta sunt explicabo.
                            </p>
                            <br />
                            <p>
                                Duis aute irure dolor in reprehenderit in voluptate velit
                                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa qui officia
                                deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    }
                    details={
                        <div>

                            <div className='w-[200px]  border'>
                                <Image
                                    alt=""
                                    width="100"
                                    height="100"
                                    layout="responsive"
                                    // objectFit="contain"
                                    src="https://demo4techies.com/prestashop/shopkart-lite/img/m/1.jpg"
                                    style={{ objectFit: "cover" }}
                                    className='group-hover:scale-105 duration-300'
                                />
                            </div>

                            <p>
                                <strong>
                                    Reference
                                </strong>
                                <br />
                                <strong>In stock</strong> 2 Items
                            </p>

                            <div>
                                <h5>
                                    Data sheet
                                </h5>
                                <div className='flex flex-col gap-2 my-2'>
                                    {
                                        [
                                            {
                                                name: "gender",
                                                value: "male",
                                            },
                                            {
                                                name: "pattern",
                                                value: "solid",
                                            },
                                            {
                                                name: "ocassion",
                                                value: "casual",
                                            },
                                        ]?.map((item, index) => {

                                            return (
                                                <div key={index} className='flex gap-2'>
                                                    <div className={`p-2 flex-1 capitalize text-[#666] ${index % 2 === 0 ? 'bg-[#f9f9f9]' : 'bg-[#f1f1f1]'}`}>
                                                        {item.name}
                                                    </div>
                                                    <div className={`p-2 flex-1 capitalize text-[#666] ${index % 2 === 1 ? 'bg-[#f9f9f9]' : 'bg-[#f1f1f1]'}`}>
                                                        {item.value}
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                                <h5>
                                    Specific References
                                </h5>

                            </div>
                        </div>
                    }
                />
            </div>

            {/* *************** related products **************** */}
            <div className='container'>
                <div className='hidden sm:grid grid-cols-2 md:grid-cols-4 my-10 gap-5'>
                    {
                        [1, 2, 3, 4]?.map((item, index) => {
                            return (
                                <MainProductCard key={index} />
                            )
                        })
                    }
                </div>

                <div className='block sm:hidden'>
                    <ProductCarousel slides={[1, 2, 3, 4]} />
                </div>
            </div>

        </div>
    )
}

export default ProductDetails