import React from 'react'
import { useState } from "react";
import Image from 'next/image';

export default function HamburgerMenu() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    return (
      <div className="flex items-center justify-between border-b border-gray-400 py-8">
    
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
                <div className="w-14 h-1.5 bg-red-900"></div>
                <div className="w-14 h-1.5 bg-red-900"></div>
                <div className="w-14 h-1.5 bg-red-900"></div>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0  px-8 py-8 -mt-4"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-20 w-50  text-red-900"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px] text-3xl mt-32">
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="#">Cities</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="#">Towns</a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                <a href="#">Our Story</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="#">Contact Us</a>
                </li>
                            <button type="submit" className="bg-red-900 hover:bg-red-700 text-white font-light text-4xl py-3 w-36 px-5 mt-32 rounded-full cursor-pointer">Login</button>
                            
                <div className="flex flex-row mt-12 mb-8 w-full justify-between">
                    <div className="flex flex-row mt-4">
                            <Image src="/twitter.svg" width={40} height={10} alt="twitter icon" />
                            <Image src="/facebook.svg" width={40} height={10} alt="facebook icon" />
                    </div>    
                    
                    <div className="justify-end">
                            <Image src="/settings.svg" width={60} height={10} alt="settings icon" />
                    </div>
                            </div>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li>
            <a href="/aboutus">About Us</a>
          </li>
          <li>
            <a href="/locations">Locations</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
    )
}