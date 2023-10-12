import React from 'react'
import EntertainmentCardSlider from '../components/Entertainment/EntertainmentCard.component';
import Premiere from '../components/Premiere/Premiere.component';

const HomePage = () => {
    return (
        <div className="container mx-auto p-2">
            <h1 className="text-2xl text-gray-800 font-bold p-2"> The Best Of Live Events</h1>
            <EntertainmentCardSlider />

            <h1 className="text-2xl text-gray-800 font-bold px-2 pt-4"> Premieres</h1>
            <p className="text-gray-800 px-2">Brand new release every Friday</p>
            <Premiere />
        </div>
    )
}

export default HomePage;