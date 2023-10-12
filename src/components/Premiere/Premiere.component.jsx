import React from 'react'

// Slider
import Slider from 'react-slick';

// Poster Component
import Poster from '../Poster/Poster.component';



const Premiere = () => {

    const settings = {
        infinite: true,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll: 2,
        InitialSlide: 0
    }

    const settingsMd = {
        infinite: true,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        InitialSlide: 0
    }

    const PremiereImage = [
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00329481-zfnwxqqxde-portrait.jpg",
            alt: "Mission Impossible",
            title: "Mission Impossible: Dead Reckoning - Part One",
            subtitle: "English",
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00371914-vpmnexahvd-portrait.jpg",
            alt: "No Bear",
            title: "No Bears",
            subtitle: "Persian",
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00372107-vaadbdbuwy-portrait.jpg",
            alt: "Quick Sand",
            title: "Quick Sand",
            subtitle: "English",
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00358718-dhrfslgrnq-portrait.jpg",
            alt: "Gran Turismo",
            title: "Gran Turismo",
            subtitle: "English",
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00358212-xxqrspjyxz-portrait.jpg",
            alt: "The Equalizer",
            title: "The Equalizer 3",
            subtitle: "English",
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00371066-bfmfrxhcew-portrait.jpg",
            alt: "Titane",
            title: "Titane",
            subtitle: "French",
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00361074-hrqzqglzqb-portrait.jpg",
            alt: "Asteroid City",
            title: "Asteroid City",
            subtitle: "English",
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00371069-yrncufahfz-portrait.jpg",
            alt: "Tumse Milkar",
            title: "Tumse Milkar",
            subtitle: "Hindi",
        }
    ]

    return (
        <>
            <div className="lg:hidden">
                <div className="flex flex-col items-start">
                    <h1 className="text-2xl font-bold pt-4 pl-3"> Premieres</h1>
                    <p className="pl-3 pb-2">Brand new release every Friday</p>
                </div>
                <Slider {...settingsMd}>
                    {PremiereImage.map((premiere) => (
                        <Poster {...premiere} isDark />
                    ))}
                </Slider>
            </div>

            <div className="hidden lg:block">
                <div className="flex flex-col items-start">
                    <h1 className="text-2xl font-bold pt-4 pl-3"> Premieres</h1>
                    <p className="pl-3 pb-2">Brand new release every Friday</p>
                </div>
                <Slider {...settings}>
                    {PremiereImage.map((premiere) => (
                        <Poster {...premiere} isDark />
                    ))}
                </Slider>
            </div>
        </>
    )
}

export default Premiere;