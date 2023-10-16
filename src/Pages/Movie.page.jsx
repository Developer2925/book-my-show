import React from 'react'
import MovieHero from '../components/MovieHero/MovieHero.component';

const MoviePage = () => {
    return (
        <>
            <MovieHero />
            <div className="container my-12 mx-auto px-4">
                <div className=" flex flex-col items-start gap-3 lg:w-3/4">
                    <h2 className="text-gray-800 font-bold text-2xl">About the Movie</h2>
                    <p className="font-light">Since the death of his pregnant wife in a Haitian earthquake 12 years ago, Victor Fielding has raised their daughter,
                        Angela on his own. But when Angela and her friend Katherine, disappear in the woods, only to return three days later
                        with no memory of what happened to them, it unleashes a chain of events that will force Victor to confront the nadir
                        of evil. In his terror and desperation, seek out the only person alive who has witnessed anything like it before:
                        Chris MacNeil.</p>
                </div>

                <hr className=" my-8 w-3/4" />

                <div className=" flex flex-col items-start gap-3 lg:w-3/4">
                    <h2 className="text-gray-800 font-bold text-2xl">Applicable Offers</h2>
                    <div className='container bg-bgOffr-1 flex justify-between w-2/5 p-3 rounded-md gap-2 border-[2px] border-dashed border-gray-300'>
                    <img src='https://asset.brandfetch.io/id4J58sqa_/idYuv668fY.png' className='h-6' />
                        <div>
                            <h1 className='text-gray-800'>Filmy pass</h1>
                            <p className='font-light text-xs text-gray-600'>Get Rs 75* off on 3 movies you buy/rent on Stream. Buy Filmy pass @Rs 99</p>
                        </div>
                    </div>
                </div>

                <hr className=" my-8 w-3/4" />

                <div className=" flex flex-col items-start gap-3 lg:w-3/4">
                    <h2 className="text-gray-800 font-bold text-2xl">Cast</h2>
                    
                </div>
            </div>


        </>
    )
}

export default MoviePage;