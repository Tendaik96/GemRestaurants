import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
      <div className="bg-yellow-700 w-full fixed bottom-0 left-0 bg-opacity-60 text-center">
          <div className='flex justify-center'>
              <Image src="/logo.svg" alt="logo" width={50} height={100} className="p-2" />
          </div>
          <div className="">
                <ul className="flex flex-row justify-evenly text-gray-100 text-sm pb-2 ">
                        <li className="cursor-pointer">Contact</li>
                        <li className="cursor-pointer">Careers</li>
                        <li className="cursor-pointer">Terms and Conditions</li>
                        <li className="cursor-pointer">Privacy Policy</li>
              </ul>
          </div>
          <div className="flex flex-row justify-center">
              <Image src="/CopyRight.svg" alt="logo" width={20} height={10} className="ml-2" />
              <p className="text-red-900 text-sm font-bold">2023 Gem Restaurants</p> 
          </div>
          <div>
              <p className="text-gray-100 text-sm pb-2">Website made by Tendai Karuwo</p>
          </div>
    </div>
  )
}
