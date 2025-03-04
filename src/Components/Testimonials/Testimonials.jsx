import React from 'react'
import shef from './../../assets/img/shef.png'
const Testimonials = () => {
    return (
            <div className='w-[1300px] mx-auto'>
                <div className='flex gap-[300px] justify-center items-center mb-[100px]'>
                    <div className='w-[350px]'>
                        <img className='w-full' src={shef} alt="" />
                    </div>
                    <div>
                        <h2 className='text-[20px] uppercase text-red-500 font-bold'>Testimonials</h2>
                        <h1 className='text-[34px] font-bold my-[20px]'>What Our Customers <br /> Say About Us</h1>
                        <p className='w-[500px] text-[20px]'>“I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”</p>
                        <div className="mt-4 text-sm">
                            <span className="font-bold text-2xl">Customer Feedback</span>
                            <div className="flex items-center text-yellow-500">
                                 <span className="ml-1 font-bold text-2xl">4.9</span>
                                <span className="text-gray-500 ml-2 text-2xl">(18.6k Reviews)</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            )
}
export default Testimonials