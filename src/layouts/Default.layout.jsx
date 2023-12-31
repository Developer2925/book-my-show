import React from 'react'

// Components
import Navbar from '../components/Navbar/Navbar.component'
import HeroCarousal from '../components/HeroCarousal/HeroCarousal.component';

const DefaultLayout = (props) => {
    return (
        <>
            <div>
                <Navbar />
                <HeroCarousal />
                {props.children}
            </div>
        </>
    );
};

export default DefaultLayout;