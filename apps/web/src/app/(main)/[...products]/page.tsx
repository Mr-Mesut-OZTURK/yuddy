import React from 'react'
import Link from 'next/link';
import { notFound, } from 'next/navigation';
import { MenuItem, FormControl, Select, AccordionSummary, AccordionDetails, Accordion } from '@mui/material';

import AddRounded from "@mui/icons-material/AddRounded"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { TCategories } from '@/ts';
import { IBrandCarouselItem } from '@/sections';
import { MainButton, MainProductCard, ProductsFilterAccordionItem, RangeSlider } from '@/components';



const sortList = [
    "Relevance",
    "Name, A to Z",
    "Name, Z to A",
    "Price, low to high",
    "Price, high to low"
]


const getCategories = async () => {
    const categoriesRes = await fetch("http://localhost:3005/categories", { cache: 'no-cache' })
    const brandsRes = await fetch("http://localhost:3005/brands", { cache: 'no-cache' })
    const categories = await categoriesRes.json()
    const brands = await brandsRes.json()
    return { categories, brands }
}

const ProductsPage = async ({ params }: any) => {

    const { products } = params

    if (products[0] === "not-found") {
        return notFound()
    }
    if (products[0] === "error") {
        throw new Error('Failed to fetch data')
    }


    const { categories, brands }: { categories: TCategories, brands: Array<IBrandCarouselItem> } = await getCategories()

    const filtersList = [
        {
            title: "Categories",
            items: (
                products?.length === 1
                    ? (categories?.find(item => item.value === products[0]))?.items
                    : (
                        products?.length === 2
                            ? (categories?.find(item => item.value === products[0]))?.items?.find(item => item.value === products[1])?.items
                            : (
                                products?.length === 3
                                    ? (categories?.find(item => item.value === products[0]))?.items?.find(item => item.value === products[1])?.items?.find(item => item.value === products[2])?.items
                                    : ([])
                            )
                    )
            )

        },
        {
            title: "Brand",
            items: brands
            // [
            //     {
            //         name: "Brand1",
            //         value: "brand1"
            //     },
            //     {
            //         name: "Brand2",
            //         value: "brand2"
            //     },
            //     {
            //         name: "Brand3",
            //         value: "brand3"
            //     },
            //     {
            //         name: "Brand4",
            //         value: "brand4"
            //     },
            //     {
            //         name: "Brand5",
            //         value: "brand5"
            //     },
            //     {
            //         name: "Brand6",
            //         value: "brand6"
            //     },
            //     {
            //         name: "Brand7",
            //         value: "brand7"
            //     },

            // ]
        },
    ]


    const getValue = (num?: number) => {

        const length = num ?? products?.length

        const value = length === 1
            ? (categories?.find(item => item.value?.toLowerCase() === products[0]?.toLowerCase()))?.name
            : (
                length === 2
                    ? (categories?.find(item => item.value?.toLowerCase() === products[0]?.toLowerCase()))?.items?.find(item => item.value?.toLowerCase() === products[1]?.toLowerCase())?.name
                    : (
                        length === 3
                            ? (categories?.find(item => item.value?.toLowerCase() === products[0]?.toLowerCase()))?.items?.find(item => item.value?.toLowerCase() === products[1]?.toLowerCase())?.items?.find(item => item.value?.toLowerCase() === products[2]?.toLowerCase())?.name
                            : ([])
                    )
            )
        return value
    }

    if (!getValue()) return notFound()

    return (
        <div className='container pb-20 pt-5'>

            {/* **************** breadcrumbs ****************** */}
            <div className='my-5 hidden sm:block'>
                <Link href="/">
                    Home&nbsp;
                </Link>

                <Link href={"/" + products[0]} className='capitalize'>
                    / {getValue(1)}&nbsp;
                </Link>

                {
                    products[1] ? (
                        <Link href={"/" + products[1] ? "/" + products[0] + "/" + products[1] : ""} className='capitalize'>
                            / {getValue(2)}&nbsp;
                        </Link>
                    ) : ""
                }

                {
                    products[2] ? (
                        <Link href={"#"} className='capitalize'>
                            / {getValue(3)}
                        </Link>
                    ) : ""
                }

            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-10 md:gap-x-10'>

                {/* **************** desktop filters ****************** */}
                <div className='col-span-1 hidden sm:block'>

                    <div className='border border-b-0 p-2 text-center uppercase font-bold'>
                        {getValue()}
                    </div>

                    <div className='border mb-10 p-2'>

                        {
                            (
                                products?.length === 1
                                    ? (categories?.find(item => item.value === products[0]))?.items
                                    : (
                                        products?.length === 2
                                            ? (categories?.find(item => item.value === products[0]))?.items?.find(item => item.value === products[1])?.items
                                            : (
                                                products?.length === 3
                                                    ? (categories?.find(item => item.value === products[0]))?.items?.find(item => item.value === products[1])?.items?.find(item => item.value === products[2])?.items
                                                    : ([])
                                            )
                                    )
                            )?.map((item, index) => {

                                return (
                                    <Link
                                        key={index}
                                        className='block'
                                        href={
                                            products?.length === 0
                                                ? "/" + products[0] + "/" + item.value
                                                : (
                                                    products.length === 1
                                                        ? "/" + products[0] + "/" + item.value
                                                        : (
                                                            products.length === 2
                                                                ? "/" + products[0] + "/" + products[1] + "/" + item.value
                                                                : "#"
                                                        )
                                                )

                                        }
                                    >
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
                        <h6 className='text-center p-2 border-b-[1px] font-bold'>
                            FILTER BY
                        </h6>

                        {
                            filtersList?.map((item: any, index) => {

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

                {/* **************** main ****************** */}
                <div className='col-span-2 lg:col-span-3 xl:col-span-4 flex flex-col gap-5'>

                    <div
                        className={`
                            bg-[url(https://demo4techies.com/prestashop/shopkart-lite/c/3-category_default/Shop.jpg)]
                            h-[180px] bg-no-repeat w-full bg-cover hidden sm:block
                        `}
                    />

                    <h3 className='text-[28px] uppercase font-[500] text-[#666] text-center sm:text-start'>
                        {getValue()}
                    </h3>

                    <p className='text-[14px] text-[#999] hidden sm:block'>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>

                    {/* **************** sort section ****************** */}
                    <div className='bg-[#f9f9f9] border-[#ccc] border-[1px] p-3 sm:p-5'>
                        <div className='flex flex-col-reverse sm:flex-row gap-3 sm:items-center text-[#666]'>
                            <p className='flex-1'>
                                There are 12 products.
                            </p>

                            <div className='flex items-center gap-3'>
                                <p className='hidden sm:block'>
                                    Sort by :
                                </p>

                                <FormControl className='min-w-[200px] w-full sm:w-auto'>
                                    {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        // value={""}
                                        defaultValue={sortList[0]}
                                        // label="Age"
                                        //   onChange={handleChange}
                                        className='bg-white border-[#ccc] h-[48px]'
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

                                <MainButton>
                                    FILTER
                                </MainButton>
                            </div>
                        </div>
                    </div>

                    {/* **************** products grid ****************** */}
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