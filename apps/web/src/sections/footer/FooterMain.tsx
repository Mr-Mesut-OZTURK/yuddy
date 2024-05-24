import { MainButton, MobileFooterItem } from '@/components'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const footerList = [
    {
        title: 'QUICK CONTACT',
        children: [
            {
                text: "15 Main Rd E. St Albans VIC 1234, Australia",
            },
            {
                text: "Email: info@domain.com",
            },
            {
                text: "Phone: +1 234-456-7890",
            }
        ]
    },
    {
        title: 'PRODUCTS',
        children: [
            {
                text: "Prices drop",
                link: "#",
            },
            {
                text: "New products",
                link: "#",
            },
            {
                text: "Best sales",
                link: "#",
            },
            {
                text: "Stores",
                link: "#",
            },
            {
                text: "My account",
                link: "#",
            },
        ]
    },
    {
        title: 'OUR COMPANY',
        children: [
            {
                text: "Delivery",
                link: "#",
            },
            {
                text: "Legal Notice",
                link: "#",
            },
            {
                text: "About us",
                link: "#",
            },
            {
                text: "Secure payment",
                link: "#",
            },
            {
                text: "Sitemap",
                link: "#",
            },
        ]
    },
    {
        title: 'GET IN TOUCH',
        children: [

        ]
    },
]

export const FooterMain = () => {
    return (
        <div className='bg-black text-white'>
            <div className='container py-5'>
                <div className='hidden sm:grid sm:grid-cols-2 md:grid-cols-4 gap-5'>
                    {/* first column */}
                    <div>
                        <Image
                            src="https://demo4techies.com/prestashop/shopkart-lite/img/cms/footer-logo.png"
                            // fill
                            alt=''
                            width="100"
                            height="100"
                            layout="responsive"
                            // objectFit="contain"
                            style={{ objectFit: "cover" }}
                            className='group-hover:scale-105 duration-300 mb-5'
                        />
                        {
                            footerList[0].children.map((child) => {
                                return (
                                    <h6 key={child.text} className='text-[14px] mb-2'>
                                        {child.text}
                                    </h6>
                                )
                            })
                        }
                    </div>

                    {/* second column */}
                    <div>
                        <h3 className='mb-5'>
                            {footerList[1].title}
                        </h3>
                        {
                            footerList[1].children.map((child) => {
                                return (
                                    <Link href="#" key={child.text} className='mb-2 text-[14px] block'>
                                        {child.text}
                                    </Link>
                                )
                            })
                        }
                    </div>


                    {/* third column */}
                    <div>
                        <h3 className='mb-5'>
                            {footerList[2].title}
                        </h3>
                        {
                            footerList[2].children.map((child) => {
                                return (
                                    <Link href="#" key={child.text} className='mb-2 text-[14px] block'>
                                        {child.text}
                                    </Link>
                                )
                            })
                        }
                    </div>



                    {/* forth column */}
                    <div>
                        <h3 className='mb-5'>
                            {footerList[3].title}
                        </h3>

                        <div className='flex flex-col gap-3'>
                            <p className='text-[14px]'>
                                Subscribe to our newsletter to get exclusive discounts
                            </p>

                            <input
                                className='bg-black border-2 p-3 text-[14px]'
                                placeholder='Your email address'
                            />
                            <MainButton
                                color='secondary'
                                sx={{
                                    boxShadow: 'none'
                                }}
                                className='bg-red-600 shadow-none'
                            >
                                Subscribe
                            </MainButton>

                            <p className='text-[12px]'>
                                You may unsubscribe at any moment. For that purpose, please find our contact info in the legal notice.
                            </p>
                        </div>
                    </div>

                </div>

                <div className='block sm:hidden'>
                    {
                        footerList?.map((item, index) => {
                            return (<MobileFooterItem key={index} item={item} />)
                        })
                    }
                </div>
            </div>
            <div className="container">
                <div className='w-full h-[1px] bg-gray-600'></div>
            </div>
            <h3 className='text-center py-5'>
                © 2024 - Ecommerce software by PrestaShop™
            </h3>
        </div>
    )
}




