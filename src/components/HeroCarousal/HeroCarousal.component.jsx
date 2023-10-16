import React from 'react'
import HeroSlider from 'react-slick';

// Config
import settingsLg from '../../Config/HeroCarousal.config';

const HeroCarousal = () => {

    const images = [
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1695986750593_lolladesktop.jpg",
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1696436552401_bpraakoctdesktop.jpg",
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1696400907176_navratridesktop.jpg",
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1696064777807_web.jpg",
    ]

    return (
        <>
            <div className="hidden lg:block lg:bg-gray-100">
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