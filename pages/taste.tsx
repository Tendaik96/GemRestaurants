import React from 'react'
import Image from 'next/image'
import TasteCard from '@/Components/TasteCard/TasteCard'
import Navbar from '@/Components/Navbar/Navbar'
import Footer from '@/Components/Footer/Footer'


export default function taste() {
  return (
    <div > 
  
         <div className=" h-96 w-full bg-cover bg-fixed ">
          <Image src="/BrownPattern.jpg" alt="landing page" className="w-full h-full object-cover absolute mix-blend-overlay -z-10 blur-xs" width={100} height={ 50} />
      </div>
          <Navbar className="z-30"/>
          <p className="text-2xl text-gray-200 text-center mt-3 mb-3 font-extrabold">What are you looking for?</p>
      <TasteCard />
      <Footer/>
    </div>
  )
}
