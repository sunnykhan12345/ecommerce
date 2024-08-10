'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IoIosNotificationsOutline } from "react-icons/io";
import { PiShoppingCartThin } from "react-icons/pi";
import CartModel from "../components/CartModel"
const NavbarIcons = () => {
    const [isProfileOpen, setisProfileOpen] = useState(false)
    const [isCartOpen, setisCartOpen] = useState(false)


    const router = useRouter();
    // TEMPRARY
    const isLogin = false
    const handleProfile = () => {
        if (!isLogin) {
            router.push("/login")
        }
        setisProfileOpen((prev) => !prev)

    }
    return (
        <div className="flex items-center gap-4 xl:gap-6 relative">
            <CgProfile className="h-6 w-6 cursor-pointer" onClick={handleProfile} />
            {
                isProfileOpen && (
                    <div className="absolute top-14 z-10 p-4 rounded-md left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                        <Link href="/">Profile</Link>
                        <div className="mt-2 cursor-pointer">Logout</div>
                    </div>
                )
            }
            <IoIosNotificationsOutline className="h-6 w-6 cursor-pointer" />
            <div className="relative">
                <PiShoppingCartThin className="h-6 w-6 cursor-pointer" onClick={() => setisCartOpen((prev) => !prev)} />
                <div className="absolute -top-4 -right-4 h-6 w-6 bg-lama text-white rounded-full flex items-center justify-center text-sm">2</div>
            </div>
            {
                isCartOpen && (

                    <CartModel />

                )
            }
        </div>
    )
}

export default NavbarIcons