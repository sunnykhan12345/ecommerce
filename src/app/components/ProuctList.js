import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import img from "../../../public/images/first.jpg"
import cam from "../../../public/images/camera.jpg"
import pro1 from "../../../public/images/pro1.jpg"
import pro2 from "../../../public/images/pro2.jpg"
import pro3 from "../../../public/images/pro3.jpg"
import pro4 from "../../../public/images/pro3.jpg"
// import pro5 from "../../../public/images/pro.5jpg"
import pro6 from "../../../public/images/pro6.jpg"
import pro7 from "../../../public/images/pro7.jpg"
import pro8 from "../../../public/images/pro8.jpg"

const Productlist = () => {
  return (
    <div className='mt-12 flex justify-between gap-x-8 gap-y-16 flex-wrap'>
      <Link href="/test" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
        <div className='relative w-full h-44'>
          <Image src={pro1} alt='' className='absolute h-full rounded-md object-cover z-10 hover:opacity-0 transition-opacity ease-in-out duration-500' />
          <Image src={cam} alt='' className='absolute rounded-md object-cover ' />
        </div>
        <div className='flex justify-between '>
          <span className='font-medium '>Powder</span>
          <span className='font-semibold '>$49</span>
        </div>
        <div className='text-sm to-gray-500'>SoftNest Baby Powder</div>
        <button className='w-max rounded-xl ring-1 ring-lama text-lama py-2 px-3  text-lg hover:bg-lama hover:text-white'>Add to Cart</button>
      </Link>
      <Link href="/test" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
        <div className='relative w-full h-44'>
          <Image src={pro2} alt='' className='h-full absolute rounded-md object-cover z-10 hover:opacity-0 transition-opacity ease-in-out duration-500' />
          <Image src={pro3} alt='' className='absolute h-full rounded-md object-cover ' />
        </div>
        <div className='flex justify-between '>
          <span className='font-medium '>SoftNest Baby Powder</span>
          <span className='font-semibold '>$30</span>
        </div>
        <div className='text-sm to-gray-500'>brash  for face cleanless</div>
        <button className='w-max rounded-xl ring-1 ring-lama text-lama py-2 px-3  text-lg hover:bg-lama hover:text-white'>Add to Cart</button>
      </Link>
      <Link href="/test" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
        <div className='relative w-full h-44'>
          <Image src={pro3} alt='' className='absolute rounded-md object-cover z-10 hover:opacity-0 transition-opacity ease-in-out duration-500' />
          <Image src={pro6} alt='' className='absolute rounded-md object-cover ' />
        </div>
        <div className='flex justify-between '>
          <span className='font-medium '>RadiantGlow</span>
          <span className='font-semibold '>$60</span>
        </div>
        <div className='text-sm to-gray-500'>RadiantGlow and more good</div>
        <button className='w-max rounded-xl ring-1 ring-lama text-lama py-2 px-3  text-lg hover:bg-lama hover:text-white'>Add to Cart</button>
      </Link>
      <Link href="/test" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
        <div className='relative w-full h-44'>
          <Image src={pro7} alt='' className='absolute rounded-md object-cover z-10 hover:opacity-0 transition-opacity ease-in-out duration-500' />
          <Image src={pro8} alt='' className='absolute rounded-md object-cover ' />
        </div>
        <div className='flex justify-between '>
          <span className='font-medium '>GlamourGleam</span>
          <span className='font-semibold '>$78</span>
        </div>
        <div className='text-sm to-gray-500'>GlamourGleam mostly used</div>
        <button className='w-max rounded-xl ring-1 ring-lama text-lama py-2 px-3  text-lg hover:bg-lama hover:text-white'>Add to Cart</button>
      </Link>

    </div>
  )
}

export default Productlist
