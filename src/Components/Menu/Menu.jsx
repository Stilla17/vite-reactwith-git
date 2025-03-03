import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './styles.css';

import { FreeMode, Navigation } from 'swiper/modules';

function Menu() {
    return (
        <>
            <div className="w-[1300px] h-[100vh] mx-auto">
                <span className='text-[#FF6868;] text-[20px] font-bold spac'>Special Dishes</span>
                <div className="">

                </div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={40}
                    navigation ={true}
                    modules={[FreeMode, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default Menu