import React from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {BsYoutube} from 'react-icons/bs';
import { FaSearch } from "react-icons/fa";
import { FaMicrophone } from 'react-icons/fa';
import { MdVideoCall } from "react-icons/md";
import { BsBell } from 'react-icons/bs';
export default function Navbar (){
    return (
      <div className = 'flex justify-between items-center px-14 h-14  bg-[#212121] opacity-95 sticky top-0 z-50'>
        <div className='flex gap-8 items-center text-2xl'>
            <div>
            <GiHamburgerMenu/>
            </div>
            <div className='flex gap-2 items-center justify-center'>
                <BsYoutube className='text-3xl text-red-600'/>
                <span className='text-2xl'>YouTube</span>
            </div>
            </div>
            <div className='flex items-center justify-center gap-5'>
                <form >
                    <div className='flex bg-zinc-900 items-center h-10 px-4 pr-0 rounded-3xl'>
                        <div className='flex gap-5 items-center'>
                            <input type='text' placeholder='Search' className='w-96 bg-zinc-900 text-zinc-50 focus:outline-none border-none '/>
                            <button className='h-10 w-16 flex items-center justify-center bg-zinc-800 rounded-r-3xl'>
                            <FaSearch className='text-xl'/>
                            </button>
                        </div>
                    </div>
                </form>
                <div className='flex items-center justify-center gap-1 text-xl p-3 bg-zinc-900 rounded-full'>
            
            <FaMicrophone className='text-3xl text-zinc-50'/>
        </div>
                </div>
               
                <div className='flex items-center justify-center gap-5'>
                
                <div className='flex gap-5 items-center text-xl right-1'>
                    <MdVideoCall className='text-3xl text-zinc-50'/>
                    <div className='relative'>
                    <BsBell className='text-3xl text-zinc-50'/>
                    <span className='absolute bottom-4 left-3 text-xs bg-red-700 rounded-full' px-1>
                        9+
                    </span>
                    

                    </div>
                    <img alt = 'profile pic' className = 'w-9 h-9 rounded-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrUfiySJr8Org5W-oE2v3_i7VqufglYtSdqw&s'/>
                </div>

                </div>
        
       </div>
    )
}