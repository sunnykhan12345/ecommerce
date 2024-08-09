import React from 'react'

const Cat = () => {
    return (
        <div className='py-10'>
            <div className='md:container mx-auto px-4 '>
                <div className='grid lg:grid-cols-4 grid-cols-1 gap-4'>
                    <div className='h-80 bg-green-500 rounded-md'>first </div>
                    <div className='h-80 bg-blue-500 rounded-md'>first </div>
                    <div className='h-80 bg-pink-500 rounded-md'>first </div>
                    <div className='h-80 bg-orange-500 rounded-md'>first </div>

                </div>
            </div>
        </div>
    )
}

export default Cat