import React, {useState, useEffect} from 'react'
import axios from 'axios';
import EntertainmentCardSlider from '../components/Entertainment/EntertainmentCard.component';
import PosterSlider from '../components/PosterSlider/PosterSlider.component';

const HomePage = () => {

    // For Recommended Section
    const [recommendedMovies, setRecommendedMovies] = useState([]);

    useEffect(() => {
        const requestRecommendedMovies = async() => {
            const getRecommendedMovies = await axios.get("/movie/top_rated");
            setRecommendedMovies(getRecommendedMovies.data.results);
        }
        requestRecommendedMovies();
    }, [])
    console.log({recommendedMovies},[]);


    // For Premiere Section
    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        const requestPopularMovies = async() => {
            const getPopularMovies = await axios.get("/movie/popular");
            setPopularMovies(getPopularMovies.data.results);
        }
        requestPopularMovies();
    }, [])

    // For Upcoming Section
    const [upComingMovies, setUpComingMovies] = useState([]);

    useEffect(() => {
        const requestUpComingMovies = async() => {
            const getUpComingMovies = await axios.get("/movie/upcoming");
            setUpComingMovies(getUpComingMovies.data.results);
        }
        requestUpComingMovies();
    }, [])

    return (
        <>
            <div className="container mx-auto pt-12 hidden md:hidden lg:block">
                <img
                    src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/icc-cwc-banner-collection-202308220156.png"
                    alt="ICC WC"
                    className="w-full h-full px-2 rounded-[25px]" />
            </div>
            <div className="container mx-auto py-8">
                <PosterSlider images={recommendedMovies} title="Recommended Movies" subtitle="" isDark={false} />
            </div>
            <div className="container mx-auto py-12 hidden md:hidden lg:block">
                    <img
                        src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/stream-leadin-web-collection-202210241242.png"
                        alt=""
                        className="w-full h-full px-2 rounded-[25px]" />
                </div>
            <div className="flex flex-col gap-12">
                {/* EntertainmentCard */}
                <div className="container mx-auto pt-4">
                    <EntertainmentCardSlider />
                </div>

                {/* Premiere */}
                <div className=" bg-bgPremiere-1 text-white py-8">
                    <div className="container mx-auto ">
                        <div className="flex ">
                            <img
                                src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png"
                                alt="Premiere Image"
                                className="w-full h-full px-2" />
                        </div>
                        <div>
                            <PosterSlider images={popularMovies} title="Premieres" subtitle=" Brand new releases every Friday" isDark />
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="container mx-auto py-8">
                <PosterSlider images={upComingMovies} title="Upcoming Movies" subtitle="" isDark={false}/>
            </div>
        </>
    )
}

export default HomePage;