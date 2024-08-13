import Link from 'next/link'
import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { SlSocialTumblr } from "react-icons/sl";
import disc from "../../../public/images/discover.png"
import skrill from "../../../public/images/skrill.png"
import paypal from "../../../public/images/paypal.png"
import mastercard from "../../../public/images/mastercard.png"
import visa from "../../../public/images/visa.png"
import Image from 'next/image';

const Footer = () => {

    
    return (
        <div className='py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 mt-24 text-sm'>
            {/* TOP */}
            <div className='flex flex-col md:flex-row justify-between gap-24'>
                {/* LEFT */}
                <div className='w-full lg:w-1/4  md:w-1/2 flex flex-col gap-8'>
                    <Link href="/" className='text-2xl tracking-wide'>Sunny</Link>
                    <p>Gublberg green islamabad block B Luxus Mall </p>
                    <span className="font-semibold">sunnykhansadda@gmail.com</span>
                    <span className="font-semibold">+92 3085342445</span>
                    <div className='flex gap-4'>
                        <Link href="/">
                            <FaFacebook className='h-5 w-5' />
                        </Link>
                        <Link href="/">
                            <FaInstagram className='h-5 w-5' />
                        </Link>
                        <Link href="/">
                            <AiOutlineYoutube className='h-5 w-5' />
                        </Link>
                        <Link href="/">
                            <FaInstagram className='h-5 w-5' />
                        </Link>
                        <Link href="/">
                            <SlSocialTumblr className='h-5 w-5' />
                        </Link>

                    </div>
                </div>
                {/* CENTER */}
                <div className='hidden lg:flex justify-between w-1/2 '>
                    <div className='flex flex-col gap-6 '>
                        <h1 className='text-lg font-medium pb-5'>Company</h1>
                        <div className='flex flex-col gap-6'>
                            <Link href="">About Us</Link>
                            <Link href="">Carrers</Link>
                            <Link href="">Affilates</Link>
                            <Link href="">Blog</Link>
                            <Link href="">Contact Us</Link>
                        </div>
                    </div>
                    <div className='flex flex-col gap-6 '>
                        <h1 className='text-lg font-medium pb-5'>Shop</h1>
                        <div className='flex flex-col gap-6'>
                            <Link href="">news Arrivals</Link>
                            <Link href="">Acccessories</Link>
                            <Link href="">Men</Link>
                            <Link href="">Women</Link>
                            <Link href="">All Provides</Link>
                        </div>
                    </div>
                    <div className='flex flex-col gap-6 '>
                        <h1 className='text-lg font-medium pb-5'>Help</h1>
                        <div className='flex flex-col gap-6'>
                            <Link href="">Customer Services</Link>
                            <Link href="">My Account</Link>
                            <Link href="">Find a Store</Link>
                            <Link href="">Legal and Privacy</Link>
                            <Link href="">Gift Card</Link>
                        </div>
                    </div>
                </div>
                {/* RIGHT */}
                <div className='w-full lg:w-1/4  md:w-1/2 flex flex-col gap-8'>
                    <h1 className='font-medium text-lg'>SUBSCRIBE</h1>
                    <p>be the first to get latest news about trends, propmotions, and much more !</p>
                    <div className='flex'>
                        <input type='text' placeholder="Email Address" className='p-3 w-3/4' />
                        <button className='bg-lama text-white w-1/4'>Join</button>
                    </div>
                    <span className='font-semibold'>Secqure Payment's</span>
                    <div className='flex gap-2'>
                        <Image src={disc} alt="" width={40} height={20} className="w-[60px] h-[60px] object-cover" />
                        <Image src={skrill} alt="" width={60} height={60} className="w-[60px] h-[60px] object-cover" />
                        <Image src={paypal} alt="" width={60} height={60} className="w-[60px] h-[60px] object-cover" />
                        <Image src={mastercard} alt="" width={60} height={60} className="w-[60px] h-[60px] object-cover" />
                        <Image src={visa} alt="" width={60} height={60} className="lg:flex hidden w-[60px] h-[60px] object-cover" />
                    </div>

                </div>
            </div>
            {/* BOTTOM */}
            <div className='flex flex-col justify-between md:flex-row gap-8 mt-16'>
                <div>Copyright-@2024 </div>
                <div className='flex flex-col gap-8 md:flex-row'>
                    <div>
                        <span className='text-gray-500 mr-4'>Language</span>
                        {/* footer are completed here in now we re workunf  */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer