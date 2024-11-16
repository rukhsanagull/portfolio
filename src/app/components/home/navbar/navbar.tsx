import React from 'react'
import Image from 'next/image'
import { navLinks } from '../../../../../constant/constant'
import Link from 'next/link'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { useState } from 'react'
import { useEffect } from 'react'

//define props type
type Props = {
  openNav:() => void;

}

const Navbar = ({openNav}:Props) => {
  const [navBg, setNavBg] = useState(false);

 useEffect(() => {
const handler = ()=> {
  if(window.scrollY >= 90){
    setNavBg(true)
  }
  if(window.scrollY<90){
    setNavBg(false);
  }
};
window.addEventListener("scroll",handler);
return ()=>{
  window.removeEventListener("scroll",handler);
}
},[])
  return (
    <div className={`fixed ${
    navBg ? "bg-[#240b39]" : "fixed"
    } h-[12vh] z-[10] w-full transition-all duration-200`} 
    >
    <div className='flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto]'>
         {/* logo */}
        <Image 
        src="/images/logo.png"
         alt="LOGO"
         width={170} 
         height={170}
         className='ml-[-1-5rem] sm:ml-0' />
        {/* Navbar Links  */}
        <div className='flex items-center space-x-10'>
          <div className='hidden lg:flex items-center space-x-8'>
            
            {navLinks.map((navLink) => {
                return (
                    <Link key={navLink.id} href={navLink.url}>
                    <p className='nav_link'>{navLink.label}</p>
                    </Link>
                )
            })}
            </div>
            {/* Button */}
            <div className='flex items-center space-x-4'>
              <button className='md:px-10 md:py-8 py-3 text-blue-800 font-semibold sm:text-base text-sm bg-white 
              hover:bg-gray-200 transition-all duration-200 rounded-lg'>
                Here me</button>
              {/* Burger */}
              <HiBars3BottomRight
               onClick={openNav}
               className='w-8 h-8 cursor-pointer text-white lg:hidden'/>

            </div>
        </div>
        </div>  Navbar 
    </div>
  )
}

export default Navbar