import React from 'react'

// Components
import Navbar from '../components/Navbar/Navbar.component'

const PlaysLayout = (props) => {
    return (
        <>
            <div>
                <Navbar />
                {props.children}
            </div>
        </>
    );
};

export default PlaysLayout;