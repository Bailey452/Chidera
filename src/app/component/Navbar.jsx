"use client"
import React from 'react'
import { SiSpotify } from "react-icons/si";
import { GoHomeFill } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import { RxLockClosed } from "react-icons/rx";
import { IoRemoveOutline } from "react-icons/io5";
import Link from 'next/link'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar">
                <div><SiSpotify color='white' fontSize={30} className='ml-7' /></div>

                <div className='flex flex-row border-white border w-[40%] h-[100%] gap-4'>
                    <div className='bg-zinc-700 rounded-full w-[9%] h-[80%] flex text-center justify-center mt-1'>
                        <GoHomeFill color='white' fontSize={30} className='mt-2' />
                    </div>

                    <Link href={"/Router/inputroute"} className='flex flex-row bg-zinc-700 rounded-full w-[90%] h-[80%] text-center mt-'>
                        
                            <FaSearch color='white' className='mt-4 ml-3' fontSize={20} />
                            <input type="text" className='w-[90%]  mt-1 bg-zinc-700 rounded-full'
                                placeholder='What do you want to play?' />

                            <IoRemoveOutline color='white' fontSize={50} className='rotate-90 ml-4' />
                            <RxLockClosed color='white' fontSize={20} className='mt-4 mr-4' />
                        
                    </Link>
                </div>

                <div className='h-[100%] border-white border flex flex-row'>
                    <span className='text-white mr-6 text-1xl'>Sign up</span>
                    <button type="button" className="btn p-2 w-[80%] mt-1 h-[80%] rounded-full text-black bg-white">Log in</button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar