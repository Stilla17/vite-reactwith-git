import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

import { FreeMode, Navigation } from 'swiper/modules';

import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

import Fattoush from './../../img/Fattoush salad.png';
import star from './../../img/icons/fi-sr-star.svg'

function Menu() {
    return (
        <div className='w-[1300px] mx-auto my-[150px]'>
            <span className='text-[#FF6868] text-[20px] font-bold'>Special Dishes</span>

            <div className='swiper-position'>
                <h2 className='text-[60px] max-w-[580px] font-bold'>Standout Dishes From Our Menu</h2>
                <button className='swiper-button-next'>
                    <MdOutlineKeyboardArrowRight />
                </button>
                <button className='swiper-button-prev'>
                    <MdOutlineKeyboardArrowLeft />
                </button>

            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={40}
                loop={true}
                navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', }}
                freeMode={true}
                modules={[FreeMode, Navigation]}
                className=" mt-16"
            >
                <SwiperSlide>
                    <div className="rounded-2xl shadow-xl py-[36px] px-[46px]">
                        <img className='w-[276px] mx-auto' src={Fattoush} alt="" />
                        <p className='text-[30px] font-bold'>Fattoush salad</p>
                        <p className='text-[#555555]'>Description of the item</p>
                        <div className='flex justify-between items-center mt-4'>
                            <p><span className='text-[#FF6868]'>$</span>24.00</p>
                            <div className='flex gap-6'>
                                <img src={star} alt="star" />
                                <p>4.9</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="rounded-2xl shadow-xl py-[36px] px-[46px]">
                        <img className='w-[276px] mx-auto' src={Fattoush} alt="" />
                        <p className='text-[30px] font-bold'>Fattoush salad</p>
                        <p className='text-[#555555]'>Description of the item</p>
                        <div className='flex justify-between items-center mt-4'>
                            <p><span className='text-[#FF6868]'>$</span>24.00</p>
                            <div className='flex gap-6'>
                                <img src={star} alt="star" />
                                <p>4.9</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="rounded-2xl shadow-xl py-[36px] px-[46px]">
                        <img className='w-[276px] mx-auto' src={Fattoush} alt="" />
                        <p className='text-[30px] font-bold'>Fattoush salad</p>
                        <p className='text-[#555555]'>Description of the item</p>
                        <div className='flex justify-between items-center mt-4'>
                            <p><span className='text-[#FF6868]'>$</span>24.00</p>
                            <div className='flex gap-6'>
                                <img src={star} alt="star" />
                                <p>4.9</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="rounded-2xl shadow-xl py-[36px] px-[46px]">
                        <img className='w-[276px] mx-auto' src={Fattoush} alt="" />
                        <p className='text-[30px] font-bold'>Fattoush salad</p>
                        <p className='text-[#555555]'>Description of the item</p>
                        <div className='flex justify-between items-center mt-4'>
                            <p><span className='text-[#FF6868]'>$</span>24.00</p>
                            <div className='flex gap-6'>
                                <img src={star} alt="star" />
                                <p>4.9</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>

        </div>
    )
}

export default Menu