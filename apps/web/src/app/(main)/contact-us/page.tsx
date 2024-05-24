import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const ContactUsPage = () => {

    return (
        <div className='container py-10'>

            <h4 className='mb-5 text-[#555]'>Home / Contact us</h4>

            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-5'>

                <div>
                    <div className='border p-5 text-[#777] font-[300] h-auto'>
                        <h5 className='text-[#555] font-[500] text-center'>
                            STORE INFORMATION
                        </h5>

                        <div className='flex gap-3 p-5 border-b'>
                            <LocationOnIcon />
                            <p className='flex content-center items-center justify-center w-full'>
                                Shopkart Lite
                                <br />
                                United States
                            </p>
                        </div>

                        <div className='p-5'>
                            <div className='flex mb-3 gap-3'>
                                <EmailIcon />
                                <p>
                                    Email us:
                                </p>
                            </div>
                            <p>
                                info@domain.com
                            </p>
                        </div>
                    </div>
                </div>

                <div className='border p-5 col-span-1 sm:col-span-2 md:col-span-3  text-[#777]'>
                    <h5 className='font-[500] text-[#555] mb-10'>
                        CONTACT US
                    </h5>

                    <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 items-center'>
                        <span className='sm:text-end'>
                            Subject
                        </span>
                        <div className='col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 max-w-[400px]'>
                            <select className='border p-2 w-full bg-[#f1f1f1]'>
                                <option value="">Customer Service</option>
                                <option value="">Web Master</option>
                            </select>
                        </div>

                        <span className='sm:text-end'>
                            Email address
                        </span>
                        <div className='col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 max-w-[400px]'>
                            <input
                                type="text"
                                placeholder='your@email.com'
                                className='bg-[#f1f1f1] border p-2 w-full'
                            />
                        </div>

                        <span className='sm:text-end'>
                            Attachment
                        </span>
                        <div className='col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 max-w-[400px]'>
                            <label className='flex items-center' htmlFor='file' >
                                <div className='p-5 border bg-[#f1f1f1] flex-1' />
                                <button className='bg-black text-white p-2 mr-3 uppercase'>
                                    Chose File
                                </button> optional
                                <input type="file" placeholder='' className='hidden' id='file' />
                            </label>
                        </div>

                        <span className='sm:text-end'>
                            Message
                        </span>
                        <div className='col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 max-w-[400px]'>
                            <textarea name="" id=""
                                placeholder='How can we help?'
                                rows={1}
                                className='bg-[#f1f1f1] border p-2 w-full'
                            >

                            </textarea>
                        </div>
                        <div></div>
                        <div className='col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 max-w-[400px] flex justify-end'>
                            <button className='bg-black text-white p-2 uppercase'>
                                Send
                            </button>
                        </div>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default ContactUsPage