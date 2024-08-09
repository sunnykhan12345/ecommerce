'use client'
import Link from "next/link";
import { useState } from "react";
import { FcMenu } from "react-icons/fc";
const Menu = () => {
    const [open, setisOpen] = useState(false)
    return (
        <div className="md:hidden flex">
            <FcMenu className="h-5 w-5" onClick={() => setisOpen((prev) => !prev)} />
            {
                open && (
                    <>
                        <div className="bg-cyan-950 left-0 z-20 text-white absolute top-20 flex flex-col justify-center items-center w-full h-[calc(100vh-80px)] gap-8 text-xl">
                            <Link href="/">HomePage</Link>
                            <Link href="/">Shop</Link>
                            <Link href="/">Deals</Link>
                            <Link href="/">About</Link>
                            <Link href="/">Contact</Link>
                            <Link href="/">LogOut</Link>
                            <Link href="/">Cart(1)</Link>

                        </div>
                    </>
                )
            }
        </div>
    )
}

export default Menu