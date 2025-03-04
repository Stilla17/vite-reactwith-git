import React from 'react'
import image from './../../assets/img/image.svg'
function Section() {
    return (
        <div className='w-[1300px] mx-auto'>
            <div className='flex gap-[250px] justify-center items-center'>
                <div>
                    <h2 className='text-[#FF6868] text-[26px] uppercase'>Our Story & Services</h2>
                    <h1 className='text-[40px] font-bold my-6'>Our Culinary Journey <br /> And Services</h1>
                    <p className='w-[500px] text-[20px] my-6'>Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.</p>
                    <button className='py-4 px-10 bg-green-500 rounded-[50px] text-white flex gap-4'>Explore</button>
                </div>
                <div className='flex flex-wrap gap-10'>
                    <div className='w-[250px] text-center shadow-xl rounded-3xl p-6'>
                        <div className='w-[60px] mx-auto'><img src={image} alt="" /></div>
                        <h2 className='text-2xl text-[#5FE26C] uppercase font-bold my-2'>Catering</h2>
                        <p className='text-md text-[#90BD95] text-[20px]'>Delight your guests with our flavors and  presentation</p>
                    </div>
                    <div className='w-[250px] text-center shadow-xl rounded-3xl p-6'>
                        <div className='w-[60px] mx-auto'><img src={image} alt="" /></div>
                        <h2 className='text-2xl text-[#5FE26C] uppercase font-bold my-2'>Fast delivery</h2>
                        <p className='text-md text-[#90BD95] text-[20px]'>Delight your guests with our flavors and  presentation</p>
                    </div>
                    <div className='w-[250px] text-center shadow-xl rounded-3xl p-6'>
                        <div className='w-[60px] mx-auto'><img src={image} alt="" /></div>
                        <h2 className='text-2xl text-[#5FE26C] uppercase font-bold my-2'>Online Ordering</h2>
                        <p className='text-md text-[#90BD95] text-[20px]'>Delight your guests with our flavors and  presentation</p>
                    </div>
                    <div className='w-[250px] text-center shadow-xl rounded-3xl p-6'>
                        <div className='w-[60px] mx-auto'><img src={image} alt="" /></div>
                        <h2 className='text-2xl text-[#5FE26C] uppercase font-bold my-2'>Gift Cards</h2>
                        <p className='text-md text-[#90BD95] text-[20px]'>Delight your guests with our flavors and  presentation</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section