import React from 'react'
import Image from 'next/image'
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu'
import Link from 'next/link'

export default function () {
  return (<div className="bg-gray-300 w-full h-26  z-10 bg-opacity-70 -mt-96 flex flex-row justify-between">
 
    <div>
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={150} height={100} className="pt-3 mt-2 pl-4  cursor-pointer" />
    </Link>
    </div>
  <div className=" mr-8 cursor-pointer z-30">
  <HamburgerMenu/>
    </div>
    

  </div>
  )
}
