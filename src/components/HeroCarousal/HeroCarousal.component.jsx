import React, { useState, useEffect } from 'react'
import HeroSlider from 'react-slick';
import axios from 'axios';


// Config
import settingsLg from '../../Config/HeroCarousal.config';

const HeroCarousal = () => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        const requestNowPlayingMovies = async() => {
            const getImages = await axios.get("/movie/now_playing");
            setImages(getImages.data.results);
        }
        requestNowPlayingMovies();
    }, []);

    /*const requestNowPlayingMovies = async() => {
            const getImages = await axios.get("/movie/now_playing");
            setImages(getImages.data.results);
        }
        requestNowPlayingMovies; */

    return (
        <>
            <div className="hidden lg:block lg:bg-gray-100">
                <HeroSlider {...settingsLg /* Spread the settings */}>
                    {
                        images.map((image) => (
                            <div className=" w-full h-80 px-1 py-2 ">
                                <img 
                                src={`https://image.tmdb.org/t/p/original/${image.backdrop_path}`} 
                                alt="Images" 
                                className=" w-full h-full rounded " 
                                />
                            </div>
                        ))
                    }
                </HeroSlider>
            </div>
        </>
    )
}

export default HeroCarousal;