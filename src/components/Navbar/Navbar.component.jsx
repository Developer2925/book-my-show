import React from 'react'
import { BiChevronDown, BiChevronRight, BiMenu, BiSearch } from 'react-icons/bi'
import { FiMenu } from 'react-icons/fi'

// Nav for Small Screen
const NavSm = () => {
    return (
        <>
            <div className=" text-white flex items-center justify-between ">
                <div>
                    <h3 className="text-xl font-bold">It All Starts Here!</h3>
                    <span className=" text-gray-400 text-xs flex items-center ">
                        Bhubaneshwar <BiChevronRight />
                    </span>
                </div>
                <div className="w-8 h-8 ">
                    <BiSearch className="w-full h-full" />
                </div>
            </div>
        </>
    )
}

// Nav for Medium Screen
const NavMd = () => {
    return (
        <>
            <div className="w-full flex items-center bg-white gap-3 px-3 py-2 rounded-sm">
                <BiSearch className=" text-gray-400" />
                <input type="search"
                    placeholder=" Search for Movies, Events, Plays, Sports and Activities "
                    className=" w-full focus:outline-none " />
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

const Navbar = () => {
    return (
        <>
            <nav className=" bg-navColor-700 px-4 py-2">
                <div className=" md:hidden ">
                    {
                        /* Mobile Screen */
                        <NavSm />
                    }
                </div>

                <div className=" hidden lg:hidden md:flex">
                    {
                        /* Tablet Screen */
                        <NavMd />
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
export default Navbar; 