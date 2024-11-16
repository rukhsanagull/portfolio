"use client";
import React, { useEffect, useState } from 'react'
import { navLinks } from '../../../../../constant/constant'
import Link from 'next/link'
import { CgClose } from 'react-icons/cg'



//props type
type Props = {
  showNavbar:boolean;
  closeNav:()=>void;
};

// const [navBg, setNavBg] = useState(false);

// useEffect(() => {
// const handler = ()=> {
//   if(window.scrollY >= 90){
//     setNavBg(true)
//   }
//   if(window.scrollY<90){
//     setNavBg(false);
//   }
// };
// window.addEventListener("scroll",handler)
// return ()=>{
//   window.removeEventListener("scroll",handler);
// }
// },[])
const MobileNavbar = ({closeNav,showNavbar}:Props) => {
  const navOpen = showNavbar ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div>
    {/* overLay */}
    <div className={`fixed ${navOpen} transform transition-all duration-500 inset-0 z-[1000] bg-black opacity-70 
    w-full h-screen`}
    ></div>
    {/* NavbarLinks */}
    <div className={`text-white  ${navOpen} transform transition-all duration-500 delay-300 fixed justify-center flex flex-col h-full w-[80%] sm:w-[60%] bg-[#0f0715]
    space-y-6 z-[10000]`}>
      {/* <div className='hidden lg:flex items-center space-x-8  '>
             */}
            {navLinks.map((navLink) => {
                return (
                    <Link key={navLink.id} href={navLink.url}>
                    <p className='nav_link text-[20px] ml-12 border-b-[1.5px] pb-2 border-white sm:text-[30px]'>
                      {navLink.label}</p>
                    </Link>
                );
            })}
            {/* closs button */}
            <CgClose
            onClick={closeNav}
             className='absolute top-[0.7rem] right-[1.4rem] sm:h-6 text-white '/>
            </div>
    </div>
    // </div>
  )
}

export default MobileNavbar
