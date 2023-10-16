import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BsChevronRight, BsDot } from 'react-icons/bs'

const MovieHero = () => {
    return (
        <>
            <div className=" container md:hidden px-4 py-2 ">
                <img src='https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/the-exorcist-believer-et00365534-1696398220.jpg' alt='poster' className=" rounded-t-md" />
                <div className="bg-black text-white p-2 rounded-b-md flex justify-center">
                    <p className="text-xs">In cinemas</p>
                </div>
            </div>

            <div className="container hidden md:block lg:hidden px-4 py-2">
                <img src='https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/the-exorcist-believer-et00365534-1696398220.jpg' alt='poster' className=" rounded-t-md" />
                <div className="bg-black text-white p-2 rounded-b-md flex justify-center">
                    <p className="text-xs">In cinemas</p>
                </div>
            </div>

            <div className="relative hidden lg:block" style={{ height: "30rem" }}>

                <div className="absolute h-full w-full z-5"
                    style={{ backgroundImage: "linear-gradient(90deg, #1A1A1A 24.97%, #1A1A1A 38.3%, rgba(26, 26, 26, 0.0409746) 97.47%, #1A1A1A 100%)" }} />

                <div className="absolute z-6 w-full h-96 left-24 top-12 flex gap-8 items-center">
                    <div className='w-80'>
                        <img src='https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/the-exorcist-believer-et00365534-1696398220.jpg'
                            alt='poster'
                            className="h-full w-full rounded-t-md" />
                        <div className="bg-black text-white pb-2 pt-4 rounded-b-md flex justify-center">
                            <p className="text-xs">In cinemas</p>
                        </div>
                    </div>
                    <div className='w-full'>
                        <h1 className='text-white text-4xl font-bold'>The Exorcist: Believer</h1>
                        <div className="flex text-white gap-3 items-center py-5">
                            <AiFillStar className=' text-bgBtn-1 text-4xl' />
                            <h1 className="text-2xl font-bold">5.6/10</h1>
                            <p>9.8K Votes</p>
                            <BsChevronRight />
                        </div>
                        <div className=" bg-bgMovie-1 px-5 py-3 w-2/5 rounded-lg flex justify-between gap-24">
                            <div className="text-white">
                                <h1 className="text-xl">Add your rating & review</h1>
                                <p className="text-sm text-gray-400">Your ratings matter</p>
                            </div>
                            <div className=" flex items-center justify-center">
                                <button className="bg-white text-black text-lg w-24 rounded-md py-1.5">Rate now</button>
                            </div>
                        </div>
                        <div className="py-5 flex gap-2">
                            <div className="container flex justify-center bg-gray-200 w-52 text-black rounded px-2 py-1" >
                                <h1>2D, IMAX 2D, 4DX, MX4D</h1>
                            </div>
                            <div className="container flex justify-center bg-gray-200 w-56 text-black rounded px-2 py-1" >
                                <h1>English, Hindi, Telegu, Tamil</h1>
                            </div>
                        </div>
                        <div className="flex text-white items-center font-extralight pb-6">
                            <h1>1h 59m</h1>
                            <BsDot />
                            <h1>Horror, Thriller</h1>
                            <BsDot />
                            <h1>A</h1>
                            <BsDot />
                            <h1>6 Oct, 2023</h1>
                        </div>
                        <div className="bg-bgBtn-1 text-white flex items-center justify-center rounded-md w-52 py-3 mt-4">
                            <button>Book Tickets</button>
                        </div>
                    </div>
                </div>

                <img src='https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/the-exorcist-believer-et00365534-1696398220.jpg' alt='poster' className="w-full h-full" />

            </div>
        </>
    )
}

export default MovieHero;