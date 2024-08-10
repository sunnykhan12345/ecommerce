'use client'
import { useState } from "react"
import img1 from "../../../public/images/first.jpg"
import Link from "next/link"
import Image from "next/image"
// sldies data

const slides = [
    {
        id: 1,
        title: "Summer Sale Collection",
        description: "Sale! Up to 50% off!",
        img: img1,
        url: "/",
        bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
    },
    {
        id: 2,
        title: "Winter Sale Collection",
        description: "Sale! Up to 50% off!",
        img: img1,
        url: "/",
        bg: "bg-gradient-to-r from-pink-50 to-blue-50",
    },
    {
        id: 3,
        title: "Spring Sale Collection",
        description: "Sale! Up to 50% off!",
        img: img1,
        url: "/",
        bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
    },

]
const Slider = () => {
    const [current, setCurrent] = useState(0)
    return (
        <div className="h-[calc(100vh-80px)] overflow-hidden ">
            <div className="w-max h-full flex transition-all ease-in-out duration-1000"
                // style={{ transform: `translateX(-${current * 100} vw` }}
                style={{ transform: `translateX(-${current * 100}vw)` }}
            >
                {
                    slides.map(slide => (
                        <div className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row lg:pt-0 pt-20`} key={slide.id}>
                            <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
                                {/* TEXT CONTAINER*/}
                                <h2 className="text-xl lg:text-3xl 2xl:text-5xl">{slide.description}</h2>
                                <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">{slide.title}</h1>
                                <Link href={slide.url}>
                                
                                    <button>Shop Now</button>
                                </Link>
                            </div>
                            {/* IMAGE CONTAINR */}
                            <div className="h-1/2 xl:w-1/2 xl:h-full relative">
                                <Image src={slide.img} alt="" className="object-cover w-full h-full" />
                            </div>
                        </div>



                    ))
                }
            </div>
            <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
                {
                    slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            onClick={() => setCurrent(index)}
                            className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${current === index ? "scale-105" : " "}`}>

                            {
                                current === index && <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Slider
