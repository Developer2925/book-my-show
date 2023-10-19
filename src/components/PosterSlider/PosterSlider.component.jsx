import React from "react";
import Poster from "../Poster/Poster.component";
import settings from "../../Config/PosterCarousal.config";
import Slider from "react-slick";

const PosterSlider = (props) => {
    return (
        <>
            <div className=" lg:block">
                <div className="flex flex-col items-start">
                    <h1 className="text-2xl font-bold pt-4 pl-3"> {props.title}</h1>
                    <p className="pl-3 pb-2">{props.subtitle}</p>
                </div>
                <Slider {...settings} >
                    {props.images.map((image) => (
                        <Poster {...image} isDark={props.isDark}/>
                    ))}
                </Slider>
            </div>
        </>
    )
}

export default PosterSlider;