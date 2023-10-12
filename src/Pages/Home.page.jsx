import React from 'react'
import EntertainmentCardSlider from '../components/Entertainment/EntertainmentCard.component';
import Premiere from '../components/Premiere/Premiere.component';

const HomePage = () => {
    return (
        <>
            <div className="flex flex-col gap-16">
                {/* EntertainmentCard */}
                <div className="container mx-auto pt-12">
                    <EntertainmentCardSlider />
                </div>

                {/* Premiere */}
                <div className=" bg-bgPremiere-1 text-white py-8">
                    <div className="container mx-auto ">
                        <div className="flex ">
                            <img
                                src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png"
                                alt="RuPay"
                                className="w-full h-full px-2" />
                        </div>
                        <Premiere />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage;