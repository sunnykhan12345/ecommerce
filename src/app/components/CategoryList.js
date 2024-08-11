import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import pro6 from "../../../public/images/pro6.jpg"
import pro7 from "../../../public/images/pro8.jpg"
import pro8 from "../../../public/images/pro9.jpg"
import pro9 from "../../../public/images/pro11.jpg"
import pro10 from "../../../public/images/pro12.jpg"
import pro11 from "../../../public/images/pro13.avif"
import pro12 from "../../../public/images/pro14.avif"
import pro13 from "../../../public/images/pro15.avif"

const CategoryList = () => {
    return (
        <div className='px-4 overflow-x-scroll scrollbar-hide'>
            <div className='flex gap-4 md:gap-8'>
                <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
                    <div className='relative bg-slate-100 w-full h-96'>
                        <Image src={pro7} alt='' className='h-full absolute rounded-md object-cover z-10 hover:opacity-0 transition-opacity ease-in-out duration-500' />
                        <Image src={pro8} alt='' className='absolute h-full rounded-md object-cover ' />
                    </div>
                    <h4 className='mt-8 text-base font-light tracking-wide'>Category Name</h4>
                </Link>
                <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
                    <div className='relative bg-slate-100 w-full h-96'>
                        <Image src={pro9} alt='' className='h-full absolute rounded-md object-cover z-10 hover:opacity-0 transition-opacity ease-in-out duration-500' />
                        <Image src={pro6} alt='' className='absolute h-full rounded-md object-cover ' />
                    </div>
                    <h4 className='mt-8 text-base font-light tracking-wide'>Category Name</h4>
                </Link>
                <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
                    <div className='relative bg-slate-100 w-full h-96'>
                        <Image src={pro10} alt='' className='h-full absolute rounded-md object-cover z-10 hover:opacity-0 transition-opacity ease-in-out duration-500' />
                        <Image src={pro6} alt='' className='absolute h-full rounded-md object-cover ' />
                    </div>
                    <h4 className='mt-8 text-base font-light tracking-wide'>Category Name</h4>
                </Link>
                <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
                    <div className='relative bg-slate-100 w-full h-96'>
                        <Image src={pro11} alt='' className='h-full absolute rounded-md object-cover z-10 hover:opacity-0 transition-opacity ease-in-out duration-500' />
                        <Image src={pro6} alt='' className='absolute h-full rounded-md object-cover ' />
                    </div>
                    <h4 className='mt-8 text-base font-light tracking-wide'>Category Name</h4>
                </Link>
                <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
                    <div className='relative bg-slate-100 w-full h-96'>
                        <Image src={pro12} alt='' className='h-full absolute rounded-md object-cover z-10 hover:opacity-0 transition-opacity ease-in-out duration-500' />
                        <Image src={pro6} alt='' className='absolute h-full rounded-md object-cover ' />
                    </div>
                    <h4 className='mt-8 text-base font-light tracking-wide'>Category Name</h4>
                </Link>
                <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
                    <div className='relative bg-slate-100 w-full h-96'>
                        <Image src={pro13} alt='' className='h-full absolute rounded-md object-cover z-10 hover:opacity-0 transition-opacity ease-in-out duration-500' />
                        <Image src={pro6} alt='' className='absolute h-full rounded-md object-cover ' />
                    </div>
                    <h4 className='mt-8 text-base font-light tracking-wide'>Category Name</h4>
                </Link>
                <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
                    <div className='relative bg-slate-100 w-full h-96'>
                        <Image src={pro6} alt='' className='h-full absolute rounded-md object-cover z-10 hover:opacity-0 transition-opacity ease-in-out duration-500' />
                        <Image src={pro6} alt='' className='absolute h-full rounded-md object-cover ' />
                    </div>
                    <h4 className='mt-8 text-base font-light tracking-wide'>Category Name</h4>
                </Link>
            </div>
        </div>
    )
}

export default CategoryList