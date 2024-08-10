import Link from 'next/link'
import Menu from "../components/Menu"
import Search from "../components/Search"
import NavbarIcons from "../components/NavbarIcons"
import { CgShoppingCart } from "react-icons/cg";
import { IoIosNotificationsOutline } from "react-icons/io";
const Navbar = () => {
    return (
        <>
            <div className='h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-200 rounded-b-md sticky z-10 top-0'>
                {/* MOBILE */}
                <div className='h-full flex items-center justify-between md:hidden'>
                    <Link href="/" className='text-2xl tracking-wide'>Sunny</Link>
                    <Menu />
                </div>
                {/* BIGGER GREENS */}
                <div className='hidden md:flex items-center justify-between gap-8 h-full'>
                    {/* LEFT */}
                    <div className='w-1/3 xl:w-1/2 flex items-center gap-12'>
                        <Link href="" className='flex items-center gap-3'>
                            <CgShoppingCart className='text-orange-500 w-5 h-5' />
                            <Link href="/" className='text-2xl tracking-wide'>Sunny</Link>
                        </Link>

                        <div className='hidden xl:flex gap-4'>
                            <Link href="/">HomePage</Link>
                            <Link href="/">Shop</Link>
                            <Link href="/">Deals</Link>
                            <Link href="/">About</Link>
                            <Link href="/">Contact</Link>

                        </div>
                    </div>
                    {/* RIGHT */}
                    <div className='w-2/3 flex items-center justify-between gap-8'>
                        <Search />
                        <NavbarIcons />
                    </div>

                </div>
            </div>

        </>

    )
}

export default Navbar
