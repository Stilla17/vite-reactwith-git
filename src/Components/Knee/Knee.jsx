import React from 'react'

import Cheff from './../../img/Cheff.png';
import profil1 from './../../img/Mask group (1).png';
import profil2 from './../../img/Mask group (2).png';
import profil3 from './../../img/Mask group (3).png';
import star from './../../img/Star.png';
import stiker from './../../img/stiker.png';
import pizza from './../../img/pizza.png';
function Knee() {
    return (
        <>
            <div className="mt-[400px]">
                <div className="w-[1300px] h-[100vh] mx-auto">

                    <div className="flex items-center justify-between">
                        <div className="w-[492px] h-[362px] bg-[#53EC62] rounded-tr-[140px] rounded-tl-[140px] rounded-bl-[41px] rounded-br-[41px] flex items-center justify-center">
                            <div className="flex items-center -ml-[40px]">
                                <img src={stiker} alt=""/>
                                <img src={Cheff} alt="" className="-mt-92" />
                                <img src={pizza} alt=""/>
                            </div>
                            <button className='w-[248px] h-[67px] shadow-[26px_22px_51px_0px_#00000024] rounded-[30px] rounded-tl-[5px] absolute mt-[200px] bg-white ml-[500px] font-bold'>Our Best Chef 😁</button>
                        </div>

                        <div className="w-[635px] -mt-[100px]">
                            <h1 className='text-[#FF6868;] text-2xl font-bold'>Testimonials</h1>
                            <h1 className='text-6xl font-bold mt-[30px]'>What Our Customers Say About Us</h1>
                            <p className='text-2xl text-[#555555;] mt-[30px]'>“I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”</p>
                            <div className="flex items-center gap-[20px] mt-[30px]">
                                <div className="flex items-center">
                                    <img src={profil1} alt="" className="rounded-full border-2 border-white" />
                                    <img src={profil2} alt="" className="rounded-full border-2 border-white -ml-6 " />
                                    <img src={profil3} alt="" className="rounded-full border-2 border-white -ml-6 " />
                                </div>
                                <div className="">
                                    <h1 className='text-1xl font-bold'>Customer Feedback</h1>
                                    <div className="flex items-center gap-[10px]">
                                        <img src={star} alt="" />
                                        <h1 className='font-bold'>4.9</h1>
                                        <p className='font-bold text-[#555555]'>(18.6k Reviews)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Knee