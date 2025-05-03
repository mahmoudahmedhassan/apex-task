import { Typography } from '@/components/ui/typography'
import { footerData } from '@/constants'
import Image from 'next/image'
import React from 'react'

export default function Subscribe() {
  return (
    <div className="flex flex-col gap-6">
      <Typography variant="h3" className="text-white">
        {footerData.newsletter.title}
      </Typography>

      <div className='relative max-w-[285px] w-full'>
        <input className='bg-white text-[#4A4A4A] rounded-[30px] h-[36px] w-full outline-none  ps-2 placeholder:text-[#4A4A4A] placeholder:text-sm' type="text" placeholder={footerData.newsletter.placeholder} />
        <button className='absolute left-2 top-1/2 -translate-y-1/2'>
          <Image src={footerData.newsletter.icon} alt={footerData.newsletter.title} />
        </button>
      </div>

      
    </div>
  )
}
