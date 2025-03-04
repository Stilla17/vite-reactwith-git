import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

import { FreeMode, Navigation } from 'swiper/modules';

import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";


function Menu() {
    return (
        <div className='w-[1300px] mx-auto my-[208px]'>
            <span className='text-[#FF6868] text-[20px] font-bold  spac'>Special Dishes</span>

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
                slidesPerView={4}
                spaceBetween={0}
                loop={true}
                navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', }}
                freeMode={true}
                modules={[FreeMode, Navigation]}
                className=" mt-16"
            >
                <SwiperSlide>
                    <div className="w-[250px] h-[250px] rounded-2xl shadow-xl">
                        <div className="w-[100px] h-[100px] bg-[#C1F1C6] rounded-[50%] text-center mx-auto grid place-items-center mt-[20px]">
                            <img src="./src/img/pngwing 4.png" alt="" />
                        </div>
                        <h1 className='text-1xl font-bold text-center pt-[20px]'>Main Dish</h1>
                        <p className='text-[#555555] text-center pt-[20px]'>(86 dishes)</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-[250px] h-[250px] rounded-2xl shadow-xl">
                        <div className="w-[100px] h-[100px] bg-[#C1F1C6] rounded-[50%] text-center mx-auto grid place-items-center mt-[20px]">
                            <img src="./src/img/pngwing 4.png" alt="" />
                        </div>
                        <h1 className='text-1xl font-bold text-center pt-[20px]'>Main Dish</h1>
                        <p className='text-[#555555] text-center pt-[20px]'>(86 dishes)</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-[250px] h-[250px] rounded-2xl shadow-xl">
                        <div className="w-[100px] h-[100px] bg-[#C1F1C6] rounded-[50%] text-center mx-auto grid place-items-center mt-[20px]">
                            <img src="./src/img/pngwing 4.png" alt="" />
                        </div>
                        <h1 className='text-1xl font-bold text-center pt-[20px]'>Main Dish</h1>
                        <p className='text-[#555555] text-center pt-[20px]'>(86 dishes)</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-[250px] h-[250px] rounded-2xl shadow-xl">
                        <div className="w-[100px] h-[100px] bg-[#C1F1C6] rounded-[50%] text-center mx-auto grid place-items-center mt-[20px]">
                            <img src="./src/img/pngwing 4.png" alt="" />
                        </div>
                        <h1 className='text-1xl font-bold text-center pt-[20px]'>Main Dish</h1>
                        <p className='text-[#555555] text-center pt-[20px]'>(86 dishes)</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-[250px] h-[250px] rounded-2xl shadow-xl">
                        <div className="w-[100px] h-[100px] bg-[#C1F1C6] rounded-[50%] text-center mx-auto grid place-items-center mt-[20px]">
                            <img src="./src/img/pngwing 4.png" alt="" />
                        </div>
                        <h1 className='text-1xl font-bold text-center pt-[20px]'>Main Dish</h1>
                        <p className='text-[#555555] text-center pt-[20px]'>(86 dishes)</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-[250px] h-[250px] rounded-2xl shadow-xl">
                        <div className="w-[100px] h-[100px] bg-[#C1F1C6] rounded-[50%] text-center mx-auto grid place-items-center mt-[20px]">
                            <img src="./src/img/pngwing 4.png" alt="" />
                        </div>
                        <h1 className='text-1xl font-bold text-center pt-[20px]'>Main Dish</h1>
                        <p className='text-[#555555] text-center pt-[20px]'>(86 dishes)</p>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    )
}

export default Menu