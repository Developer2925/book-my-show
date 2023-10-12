// HOC - Higher Order Components
// Transforms any certain part of a / a component into another component
// Adding additional functionalities to the existing components
import React from 'react'
import { Route, Routes } from 'react-router-dom'

// Layouts
import DefaultLayout from '../layouts/Default.layout'

const DefaultHOC = ({ Component, ...rest }) => {
    return (
    /* Component */ 
    /* Props -> path, exact */ 
    <>
        <Routes>
            <Route 
                {...rest}
                Component={(props) => (
                    <DefaultLayout>
                        <Component {...props} />
                    </DefaultLayout>
                )
                }
            />
        </Routes>
    </>
    )
}

export default DefaultHOC;