import React from 'react'

function Body() {

  return (
    <>
      <div className="max-w-[1300px] mx-auto">

        <h1 className='text-[#FF6868] font-bold text-center'>Customer Favorites</h1>
        <h1 className='text-3xl font-bold text-center pt-[20px]'>Popular Catagories</h1>

        <div className="flex items-center justify-between mt-[80px]">

          <div className="w-[250px] h-[250px] rounded-2xl shadow-xl">
            <div className="w-[100px] h-[100px] bg-[#C1F1C6] rounded-[50%] text-center mx-auto grid place-items-center mt-[20px]">
              <img src="./src/img/pngwing 4.png" alt="" />
            </div>
            <h1 className='text-1xl font-bold text-center pt-[20px]'>Main Dish</h1>
            <p className='text-[#555555] text-center pt-[20px]'>(86 dishes)</p>
          </div>

          <div className="w-[250px] h-[250px] rounded-2xl shadow-xl">
            <div className="w-[100px] h-[100px] bg-[#C1F1C6] rounded-[50%] text-center mx-auto grid place-items-center mt-[20px]">
              <img src="./src/img/pngwing 6.png" alt="" />
            </div>
            <h1 className='text-1xl font-bold text-center pt-[20px]'>Break Fast</h1>
            <p className='text-[#555555] text-center pt-[20px]'>(12 break fast)</p>
          </div>

          <div className="w-[250px] h-[250px] rounded-2xl shadow-xl">
            <div className="w-[100px] h-[100px] bg-[#C1F1C6] rounded-[50%] text-center mx-auto grid place-items-center mt-[20px]">
              <img src="./src/img/pngwing 3.png" alt="" />
            </div>
            <h1 className='text-1xl font-bold text-center pt-[20px]'>Dessert</h1>
            <p className='text-[#555555] text-center pt-[20px]'>(48 dessert)</p>
          </div>

          <div className="w-[250px] h-[250px] rounded-2xl shadow-xl">
            <div className="w-[100px] h-[100px] bg-[#C1F1C6] rounded-[50%] text-center mx-auto grid place-items-center mt-[20px]">
              <img src="./src/img/pngwing 7.png" alt="" />
            </div>
            <h1 className='text-1xl font-bold text-center pt-[20px]'>Browse All</h1>
            <p className='text-[#555555] text-center pt-[20px]'>(255 Items)</p>
          </div>

        </div>

      </div>
    </>
  )
}

export default Body