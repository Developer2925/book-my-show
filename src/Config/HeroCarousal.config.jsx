// Arrow Component
import { NextArrow, PrevArrow } from "../components/HeroCarousal/Arrows.component";

const settingsLg = {
    arrows: true,
    dots: false,
    autoplay: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    centerPadding: "100px",
    infinite: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    
}

export default settingsLg;