import React from 'react'

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';


export const PoliciesComponent = () => {
    return (
        <div className='border'>

            <div className='border-b p-4 flex gap-2'>
                <LockOutlinedIcon sx={{ color: 'orange', fontSize: 32 }} />
                <p className='text-[#666] text-[14px]'>
                    Security policy
                    <br />
                    (edit with the Customer Reassurance module)
                </p>
            </div>

            <div className='border-b p-4 flex gap-2'>
                <LocalShippingOutlinedIcon sx={{ color: 'orange', fontSize: 32 }} />
                <p className='text-[#666] text-[14px]'>
                    Delivery policy
                    <br />
                    (edit with the Customer Reassurance module)
                </p>
            </div>

            <div className='p-4 flex gap-2'>
                <VolunteerActivismOutlinedIcon sx={{ color: 'orange', fontSize: 32 }} />
                <p className='text-[#666] text-[14px]'>
                    Return policy
                    <br />
                    (edit with the Customer Reassurance module)
                </p>
            </div>
        </div>
    )
}
