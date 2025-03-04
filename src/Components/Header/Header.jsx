import React from 'react'
import girlBg from './../../assets/img/Intersect.png';
import Nav from '../Navigation/Nav';

function Header() {
  return (
    <>
      <Nav/>
      <div className='w-[1300px] mx-auto border-amber-500'>

        <div className='flex justify-between items-center'>
          {/* text */}
          <div className='w-[596px] h-[500px] flex flex-wrap gap-[59px]'>
            <h2 className='font-bold text-[62px] w-[596px]'>Dive into Delights Of Delectable <span className='text-[#39DB4A]'>Food</span></h2>
            <p className='text-[#4A4A4A] text-[26px] w-[550px] '>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
            <div className='flex gap-[35px] items-center'>
              <button className='w-[229px] h-[80px] rounded-[40px] text-white text-[26px] bg-[#39DB4A] shadow-[-2px_22px_38px_0px_#8EFF9A80]'>Order Now</button>
              <h2 className='text-[#4D4D4D] text-[26px]'>Watch Video</h2>
              <button className='w-[80px] h-[80px] text-[px] shadow-[6px_27px_34px_0px_#0000001A] rounded-full'>▶️</button>
            </div>
          </div>
          {/* text end */}

          <div className=' w-[740px]'>
            <button className='w-[248px] h-[67px] shadow-[26px_22px_51px_0px_#00000024] rounded-[30px] rounded-br-[5px] absolute mt-[20px] bg-white'>Hot spicy Food 🌶️</button>
            <div className='w-[662px] h-[653px] bg-[#53EC62] rounded-full mx-auto z-1'>
              <img src={girlBg} alt="" />
            </div>
            <div className='flex gap-[55px] absolute mt-[-100px] z-50'>

              <div className='w-[349px] h-[132px] flex items-center justify-center bg-white gap-[28px] rounded-[25px] shadow-[7px_35px_51px_0px_#00000024]'>
                <div className='w-[98px] h-[98px] bg-gray-600 rounded-[25px]'></div>
                <div>
                  <h2 className='text-[22px] text-[#2C2C2C]'>Spicy noodles</h2>
                  <h2>⭐⭐⭐</h2>
                  <h2 className='text-[24px]'><span className='text-[#FF7979] text-[18px]'>$</span>18.00</h2>
                </div>
              </div>

              <div className='w-[349px] h-[132px] flex items-center bg-white justify-center gap-[28px] rounded-[25px] shadow-[7px_35px_51px_0px_#00000024]'>
                <div className='w-[98px] h-[98px] bg-gray-600 rounded-[25px]'></div>
                <div>
                  <h2 className='text-[22px] text-[#2C2C2C]'>Vegetarian salad</h2>
                  <h2>⭐⭐⭐⭐</h2>
                  <h2 className='text-[24px]'><span className='text-[#FF7979] text-[18px]'>$</span>23.00</h2>
                </div>
              </div>

            </div>
          </div>


        </div>

      </div>
    </>
  )
}

export default Header;