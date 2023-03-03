import Image from 'next/image'
import React from 'react'

export default function TasteCard() {

  return (
      <div className="flex flex-col items-center w-full z-10 ">
          
      <div className="overflow-hidden  cursor-pointer rounded-xl relative group">
        <div
                className="rounded-[60px] -mt-4 z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t  text-white "
            >
                <div>
                    <div
                        className=" p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out"
                    >

                        <div className="opacity-60 mt-10 font-bold text-7xl px-14 py-3 ">
                            FOOD
                        </div>
                    </div>
                </div>
        </div>
        
              <Image width={ 320} height={ 30} alt="" src="/Dinner.jpg" className="pb-4 w-70 h-48 rounded-[50px]" />
          
      </div>
      
      <div className="overflow-hidden  cursor-pointer rounded-xl relative group">
        <div
                className="rounded-[60px] -mt-4 z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t  text-white "
            >
                <div>
                    <div
                        className=" p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out"
                    >

                        <div className="opacity-60 mt-10 font-bold text-7xl py-3 px-11 ">
                            DRINK
                        </div>
                    </div>
                </div>
        </div>
        
              <Image width={ 320} height={ 48} alt="" src="/Drinks.jpg" className="pb-4 object-cover object-center w-70 h-48 rounded-[50px]" />
          
      </div>

       <div className="overflow-hidden  cursor-pointer rounded-xl relative group">
        <div
                className="rounded-[60px] -mt-4 z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t  text-white "
            >
                <div>
                    <div
                        className=" p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out"
                    >

                        <div className="opacity-60 mt-10 font-bold text-7xl py-6 pr-1">
                            DESSERT
                        </div>
                    </div>
                </div>
        </div>
        
              <Image width={ 320} height={ 50} alt="" src="/Dessert.jpg" className="object-cover object-bottom w-70 h-48 rounded-[50px]" />
          
      </div>
          
             {/*  <Image width={ 320} height={ 48} alt="" src="/Drinks.jpg" className="pb-4 object-cover object-center w-70 h-48 rounded-[50px]"/>
         
         
              <Image width={ 320} height={ 50} alt="" src="/Dessert.jpg" className="object-cover object-bottom w-70 h-48 rounded-[50px]" />
           */}
      </div>
  )
}
