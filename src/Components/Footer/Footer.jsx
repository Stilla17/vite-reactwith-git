import React from 'react'
import logo from './../../assets/img/oodi.svg';
import facebook from './../../assets/img/facebook.png';
import instagram from './../../assets/img/instagram.png';
import twitter from './../../assets/img/twitter.png';
import youtube from './../../assets/img/youtube.png';

const Footer = () => {
    return (
        <>
            <div className='w-[1300px] mx-auto'>
                <div className='py-10 flex justify-between mt-[200px]'>
                    <div>
                        <div className='flex items-center '>
                            <div className='text-white text-[30px] rounded-md flex justify-center items-center w-[40px] h-[40px] font-bold bg-green-400'>F</div><img src={logo} alt="" />
                        </div>
                        <p className='text-2xl w-[300px] mt-10'>Savor the artistry where every dish is a culinary masterpiece</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className='text-2xl font-bold'>Useful links</p>
                        <p className='text-xl text-[#555555]'>About us</p>
                        <p className='text-xl text-[#555555]'>Events</p>
                        <p className='text-xl text-[#555555]'>Blogs</p>
                        <p className='text-xl text-[#555555]'>FAQ</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className='text-2xl font-bold'>Main Menu</p>
                        <p className='text-xl text-[#555555]'>Home</p>
                        <p className='text-xl text-[#555555]'>Offers</p>
                        <p className='text-xl text-[#555555]'>Menus</p>
                        <p className='text-xl text-[#555555]'>Reservation</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className='text-2xl font-bold'>Contact Us</p>
                        <p className='text-xl text-[#555555]'>example@email.com</p>
                        <p className='text-xl text-[#555555]'>+64 958 248 966</p>
                        <p className='text-xl text-[#555555]'>Social media</p>
                    </div>
                </div>
                <div className='pb-10'>
                    <div className='flex items-center justify-between mt-[50px]'>
                        <div className='flex gap-10'>
                        <button className='bg-green-600 w-16 h-16 flex items-center justify-center rounded-full'><img src={facebook} alt="" /></button>
                        <button className='bg-green-100 w-16 h-16 flex items-center justify-center rounded-full'><img src={instagram} alt="" /></button>
                        <button className='bg-green-100 w-16 h-16 flex items-center justify-center rounded-full'><img src={twitter} alt="" /></button>
                        <button className='bg-green-100 w-16 h-16 flex items-center justify-center rounded-full'><img src={youtube} alt="" /></button>
                        
                        </div>
                        <a href="#" className='text-2xl text-[#555555]'>Copyright       2023 Dscode | All rights reserved</a>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Footer