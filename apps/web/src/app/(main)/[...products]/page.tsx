import { MainProductCard, ProductsFilterAccordionItem, RangeSlider } from '@/components';
import { notFound, } from 'next/navigation';
import React from 'react'

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import Slider from '@mui/material/Slider';
import Link from 'next/link';
import AddRounded from "@mui/icons-material/AddRounded"

const sortList = [
    "Relevance",
    "Name, A to Z",
    "Name, Z to A",
    "Price, low to high",
    "Price, high to low"
]

// const categories = [
//     {
//         name: "Shop",
//         value: "shop",
//         items: [
//             {
//                 name: "Autoparts",
//                 value: "autoparts",
//                 items: [
//                     {
//                         name: "Engine Parts",
//                         value: "engine-parts",
//                     },
//                     {
//                         name: "Exhaust Parts",
//                         value: "exhaust-parts",
//                     },
//                     {
//                         name: "Brake Parts",
//                         value: "brake-parts",
//                     },
//                     {
//                         name: "Body Parts",
//                         value: "body-parts",
//                     },
//                 ]
//             },
//             {
//                 name: "Fashion",
//                 value: "fashion",
//                 items: [
//                     {
//                         name: "Men",
//                         value: "men",
//                     },
//                     {
//                         name: "Women",
//                         value: "women",
//                     },
//                     {
//                         name: "Kids",
//                         value: "kids",
//                     },
//                     {
//                         name: "Accessories",
//                         value: "accessories",
//                     },
//                 ]
//             },
//             {
//                 name: "Furniture",
//                 value: "furniture",
//                 items: [
//                     {
//                         name: "Living Room",
//                         value: "living-room",
//                     },
//                     {
//                         name: "Kitchen",
//                         value: "kitchen",
//                     },
//                     {
//                         name: "Office",
//                         value: "office",
//                     },
//                     {
//                         name: "Home Decor",
//                         value: "home-decor",
//                     },
//                 ]
//             },
//             {
//                 name: "Jewellery",
//                 value: "Jewellery",
//                 items: [
//                     {
//                         name: "Rings",
//                         value: "rings",
//                     },
//                     {
//                         name: "Bracelets",
//                         value: "bracelets",
//                     },
//                     {
//                         name: "Necklaces",
//                         value: "necklaces",
//                     },
//                     {
//                         name: "Wedding Bands",
//                         value: "wedding-bands",
//                     },
//                 ]
//             },
//         ]
//     },

//     {
//         name: "Electronics",
//         value: "Electronics",
//         items: [
//             {
//                 name: "Mobiles",
//                 value: "mobiles",
//                 items: [
//                     {
//                         name: "Apple",
//                         value: "apple",
//                     },
//                     {
//                         name: "BlackBerry",
//                         value: "blackberry",
//                     },
//                     {
//                         name: "OnePlus",
//                         value: "oneplus",
//                     },
//                     {
//                         name: "Sonny",
//                         value: "sonny",
//                     },
//                 ]
//             },

//             {
//                 name: "Cameras",
//                 value: "cameras",
//                 items: [
//                     {
//                         name: "DSLR",
//                         value: "dslr",
//                     },
//                     {
//                         name: "Lences",
//                         value: "lences",
//                     },
//                     {
//                         name: "Tripods",
//                         value: "tripods",
//                     },
//                     {
//                         name: "Batteries",
//                         value: "batteries",
//                     },
//                 ]
//             },
//         ]
//     },

//     {
//         name: "Sport && Books",
//         value: "sport-books",
//         items: [
//             {
//                 name: "Sports",
//                 value: "sports",
//                 items: [
//                     {
//                         name: "Football",
//                         value: "football",
//                     },
//                     {
//                         name: "Vollyball",
//                         value: "vollyball",
//                     },
//                     {
//                         name: "Cricket",
//                         value: "cricket",
//                     }
//                 ]
//             },

//             {
//                 name: "Books",
//                 value: "books",
//                 items: [
//                     {
//                         name: "Literature",
//                         value: "literature",
//                     },
//                     {
//                         name: "Philosophy",
//                         value: "philosophy",
//                     },
//                     {
//                         name: "Academics",
//                         value: "academics",
//                     }
//                 ]
//             },
//         ]
//     },

//     {
//         name: "Sale",
//         value: "sale",
//         items: []
//     }
// ]


const getCategories = async () => {

    const res = await fetch("http://localhost:3005/categories", { cache: 'no-cache' })
    const categories = await res.json()
    // console.log({ categories });

    return { categories }
}

const ProductsPage = async ({ params, searchParams }: any) => {

    const { products } = params
    // const { category } = searchParams
    // console.log({ params, searchParams });


    if (products[0] === "not-found") {
        return notFound()
    }
    if (products[0] === "error") {
        throw new Error('Failed to fetch data')
    }


    const { categories } = await getCategories()

    const filtersList = [
        {
            title: "Categories",
            items: categories

        },
        {
            title: "Brand",
            items: [
                {
                    name: "Brand1",
                    value: "brand1"
                },
                {
                    name: "Brand2",
                    value: "brand2"
                },
                {
                    name: "Brand3",
                    value: "brand3"
                },
                {
                    name: "Brand4",
                    value: "brand4"
                },
                {
                    name: "Brand5",
                    value: "brand5"
                },
                {
                    name: "Brand6",
                    value: "brand6"
                },
                {
                    name: "Brand7",
                    value: "brand7"
                },

            ]
        },
    ]

    console.log("inside", { categories });

    return (
        <div className='container pb-20'>

            <div className='my-10'>
                <Link href="/">
                    Home
                </Link>

                <Link href="/shop">
                    / Shop
                </Link>

                {
                    products[1] ? (
                        <Link href={products[1] ? "/shop/" + products[1] : ""} className='capitalize'>
                            / {products[1]}
                        </Link>
                    ) : ""
                }

                {
                    products[2] ? (
                        <Link href={products[2] ? "/shop/" + products[2] : ""} className='capitalize'>
                            / {products[2]}
                        </Link>
                    ) : ""
                }

            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-10 md:gap-x-10'>
                <div className='col-span-1'>
                    <div className='border mb-10 p-2'>
                        {
                            (products[1] ? filtersList?.[0]?.items?.find((i: { value: any; }) => i?.value === products?.[1])?.items : filtersList?.[0]?.items)?.map((item: { value: string; name: string; }, index: number) => {

                                return (
                                    <Link key={index} href={(products[1] ? products[1] + '/' : 'shop/') + item?.value} className='block'>
                                        <div className='text-[#000] p-1 hover:text-red-600 flex justify-between'>
                                            {item.name}
                                            <AddRounded className='text-[18px]' />
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                    <div className='border'>
                        <h6 className='text-center p-2 border-b-[1px]'>
                            FILTER BY
                        </h6>

                        {
                            filtersList?.map((item, index) => {

                                return (
                                    <ProductsFilterAccordionItem
                                        item={item}
                                        key={index}
                                    />
                                )
                            })
                        }

                        <Accordion
                            className='shadow-none mb-0 border-none border-t-0'
                            elevation={0}
                            sx={{
                                '&:before': {
                                    display: 'none'
                                },
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                                className='bg-white m-0 py-0 min-h-0 border-none'
                            >
                                Price
                            </AccordionSummary>
                            <AccordionDetails
                                className='bg-white border-t-0 shadow-none'
                            >
                                <div>
                                    <p className='whitespace-nowrap text-[12px]'>
                                        $99.00 - $399.00
                                    </p>

                                    <RangeSlider />
                                </div>
                            </AccordionDetails>
                        </Accordion>

                    </div>
                </div>

                <div className='col-span-2 lg:col-span-3 xl:col-span-4 flex flex-col gap-5'>

                    <div
                        className={`
                            bg-[url(https://demo4techies.com/prestashop/shopkart-lite/c/3-category_default/Shop.jpg)]
                            h-[180px] bg-no-repeat w-full bg-cover 
                        `}
                    />

                    <h3 className='text-[28px] uppercase font-[500] text-[#666]'>
                        Shop
                    </h3>

                    <p className='text-[14px] text-[#999]'>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>

                    <div className='bg-[#f9f9f9] border-[#ccc] border-[1px] p-5'>
                        <div className='flex items-center text-[#666]'>
                            <p className='flex-1'>
                                There are 12 products.
                            </p>

                            <div className='flex items-center gap-3'>
                                <p>
                                    Sort by :
                                </p>

                                <FormControl className='min-w-[200px]'>
                                    {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        // value={""}
                                        defaultValue={sortList[0]}
                                        // label="Age"
                                        //   onChange={handleChange}
                                        className='bg-white border-[#ccc'
                                    >
                                        {
                                            sortList?.map((item) => {
                                                return (
                                                    <MenuItem key={item} value={item}>
                                                        <p className='text-[#666]'>
                                                            {item}
                                                        </p>
                                                    </MenuItem>
                                                )
                                            })
                                        }
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                    </div>

                    <div className='grid gap-3 sm:gap-10 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>

                        {
                            [1, 2, 3, 4, 5, 6, 7, 8]?.map((item, index) => {

                                return (
                                    <MainProductCard
                                        key={index}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductsPage