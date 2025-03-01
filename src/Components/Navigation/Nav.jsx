import React from 'react'
import logo from './../../assets/img/oodi.svg';
import lupa from './../../assets/img/lupa.svg'
import call from './../../assets/img/call.svg'
function Nav() {
  return (
    <div className='w-[1456px] mx-auto'>
      <nav className='py-10 flex justify-between'>
        <div className='flex items-center'>
          <div className='text-white text-[30px] rounded-md flex justify-center items-center w-[40px] h-[40px] bg-green-400'>F</div><img src={logo} alt="" />
        </div>
        <ul className='flex items-center gap-[20px]'>
          <li><a href="#" className='text-[20px] text-green-500'>Home</a></li>
          <li><a href="#" className='text-[20px]'>Menu</a></li>
          <li><a href="#" className='text-[20px]'>Services</a></li>
          <li><a href="#" className='text-[20px]'>Offers</a></li>
        </ul>
        <div className='flex items-center gap-10'>
          <div>
            <img src={lupa} alt="" />
          </div>
          <button className='py-4 px-10 bg-green-500 rounded-[50px] text-white flex gap-4'><img src={call} alt="" />Contact</button>
        </div>
      </nav>
    </div>
  )
}

export default Nav