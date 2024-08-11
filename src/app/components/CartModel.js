'use client'

import Image from "next/image"
import img from "../../../public/images/first.jpg"

const CartModel = () => {

    const cartItem = true
    return (
        <div className="w-max absolute top-12 z-20  p-4 bg-white right-0 rounded-md  text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex flex-col gap-6 ">
            {
                !cartItem ? (
                    <div>Cart is Empty </div>
                ) : (
                    <>
                        <h2 className="text-lg">Shopping Card</h2>
                        <div className="flex flex-col gap-8">
                            <div className="flex gap-4 justify-between w-full">
                                <Image src={img} alt=" " width={72} height={72} className="object-cover rounded-md" />
                                {/* TOP */}
                                <div>
                                    <div className="flex justify-between gap-8 items-center">
                                        {/* TITLE */}
                                        <h3 className="font-semibold">Product Name</h3>
                                        <div className="p-1 bg-gray-100 rounded-sm">$49</div>

                                    </div>
                                    {/* DESC */}

                                    <div className="text-sm font-medium text-gray-500">avialable</div>

                                    {/* BOTTOM */}
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500">Qty. 2</span>
                                        <span className="text-blue-500">Remove</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-4 justify-between w-full">
                                <Image src={img} alt=" " width={72} height={72} className="object-cover rounded-md" />
                                {/* TOP */}
                                <div>
                                    <div className="flex justify-between gap-8 items-center">
                                        {/* TITLE */}
                                        <h3 className="font-semibold">Product Name</h3>
                                        <div className="p-1 bg-gray-100 rounded-sm">$49</div>

                                    </div>
                                    {/* DESC */}

                                    <div className="text-sm font-medium text-gray-500">avialable</div>

                                    {/* BOTTOM */}
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500">Qty. 2</span>
                                        <span className="text-blue-500">Remove</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* bootoom  */}

                        <div>
                            <div className="flex items-center justify-between font-semibold">
                                <span>Subtotal</span>
                                <span>$49</span>
                            </div>
                            <p className="text-gray-500 text-sm mt-2 pb-4">
                                Shipping and taxs calculated Checkout.
                            </p>
                            <div className="flex justify-between text-sm">
                                <button className="py-3 px-4 rounded-md ring-1 ring-gray-300">View Cart</button>
                                <button className="py-3 px-4 rounded-md ring-1 bg-black text-white">Check Out</button>
                            </div>
                        </div>


                    </>

                )
            }
        </div>
    )
}

export default CartModel