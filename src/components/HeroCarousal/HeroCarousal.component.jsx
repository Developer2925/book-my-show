import React from 'react'
import HeroSlider from 'react-slick';

// Slick CSS Files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Component
import { NextArrow, PrevArrow } from './Arrows.component';

const HeroCarousal = () => {

    const settingsLg = {
        /* For Large Screen */
        arrows: true,
        dots: false,
        autoplay: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "100px",
        infinite: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    }

    const settings = {
        /* For Small Screen */
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    }

    const images = [
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1695986750593_lolladesktop.jpg",
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1696436552401_bpraakoctdesktop.jpg",
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1696400907176_navratridesktop.jpg",
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1696064777807_web.jpg",
    ]

    return (
        <>
            {/* For Small and Medium Screens */}
            <div className="lg:hidden hidden">
                <HeroSlider {...settings /* Spread the settings */}>
                    {
                        images.map((image) => (
                            <div className=" w-full h-full md:h-full py-3 ">
                                <img src={image} alt="Images" className=" w-full h-full rounded-md " />
                            </div>
                        ))
                    }
                </HeroSlider>
            </div>

            {/* For Larger Screens */}
            <div className="hidden lg:block bg-gray-100">
                <HeroSlider {...settingsLg /* Spread the settings */}>
                    {
                        images.map((image) => (
                            <div className=" w-full h-80 px-1 py-2 ">
                                <img src={image} alt="Images" className=" w-full h-full rounded " />
                            </div>
                        ))
                    }
                </HeroSlider>
            </div>
        </>
    )
}

export default HeroCarousal;