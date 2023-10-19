import React from 'react'
import { BiChevronDown, BiChevronRight, BiSearch, BiChevronLeft, BiShareAlt } from 'react-icons/bi'
import { FiMenu } from 'react-icons/fi'
import { PiShareNetworkThin } from 'react-icons/pi'
import { BsChevronLeft, BsShare } from 'react-icons/bs'

// Nav for Small Screen
const NavSm = () => {
    return (
        <>
            <div className=" text-black flex items-center justify-between ">
                <div className="flex items-center gap-5">
                <BsChevronLeft />
                    <h3 className=" flex items-center font-semibold"> The Exorcist: Believer</h3>
                    
                </div>
                <div className="w-8 h-8 flex items-center">
                    <BsShare className="w-full h-1/2" />
                </div>
            </div>
        </>
    )
}


// Nav for Large Screen
const NavLg = () => {
    return (
        <>
            <div className="container mx-auto px-4 flex items-center justify-between" >
                <div className=" flex items-center w-1/2 gap-3">
                    <div className="w-30 h-10">
                        <img
                            src="https://asset.brandfetch.io/id4J58sqa_/idaQ1GyW_d.svg"
                            alt="logo"
                            className="w-full h-full" />
                    </div>
                    <div className="w-full flex items-center bg-white gap-3 px-3 py-2 rounded-sm">
                        <BiSearch className=" text-gray-400" />
                        <input type="search"
                            placeholder=" Search for Movies, Events, Plays, Sports and Activities "
                            className=" w-full h-4 focus:outline-none " />
                    </div>
                </div>

                <div className=" flex items-center gap-5">
                    <span className=" text-gray-400 text-sm flex items-center hover:text-white hover:cursor-pointer">
                        Bhubaneshwar <BiChevronDown className="text-white w-5 h-5" />
                    </span>
                    <button className=" bg-red-500 text-white text-xs rounded px-4 py-1">
                        Sign in
                    </button>
                    <div className="w-8 h-8 text-white">
                        <FiMenu className="w-full h-full" />
                    </div>
                </div>
            </div>
        </>
    )
}

const MovieNavbar = () => {
    return (
        <>
            <nav className=" lg:bg-navColor-700 px-4 py-2 border-b-2 lg:border-none">
                <div className=" md:hidden ">
                    {
                        /* Mobile Screen */
                        <NavSm />
                    }
                </div>

                <div className=" hidden lg:hidden md:block">
                    {
                        /* Tablet Screen */
                        <NavSm />
                    }
                </div>

                <div className=" hidden lg:flex ">
                    {
                        /* Desktop Screen */
                        <NavLg />
                    }
                </div>

            </nav>
        </>
    )
}
export default MovieNavbar; 