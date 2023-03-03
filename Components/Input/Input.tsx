import React from 'react'
import Image from 'next/image'


export default function Input() {
  return (
    <div className=' w-full mt-[32vh] '>
      <form className="flex flex-row">
        
        <div className="relative flex justify-center w-full">
          <Image src="/map-pin.svg" alt="icon" width={40} height={50} className="absolute -ml-64 pt-2.5 z-20" />
          <input name="search" autoComplete='off' type="text" placeholder='Where to...' required className="w-80 h-16 rounded-full placeholder-black placeholder-opacity-90 placeholder-center text-2xl ring-2 ring-neutral-800 focus:ring-yellow-100 focus:ring-4 pr-28 pl-14 z-10 opacity-70 cursor-text" />
        </div>
        
      <button type="submit" className="bg-red-900 hover:bg-red-700 text-white font-light text-2xl h-16 w-17 py-2 px-5 rounded-full  -ml-36 z-10 cursor-pointer">Search</button>
      </form>
    </div>
      
  )
}
