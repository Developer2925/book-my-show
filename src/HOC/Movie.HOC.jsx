// HOC - Higher Order Components
// Transforms any certain part of a / a component into another component
// Adding additional functionalities to the existing components
import React from 'react'
import { Route, Routes } from 'react-router-dom'

// Layouts
import MovieLayout from '../layouts/Movie.layout'

const MovieHOC = ({ Component, ...rest }) => {
    return (
    /* Component */ 
    /* Props -> path, exact */ 
    <>
        <Routes>
            <Route 
                {...rest}
                Component={(props) => (
                    <MovieLayout>
                        <Component {...props} />
                    </MovieLayout>
                )
                }
            />
        </Routes>
    </>
    )
}

export default MovieHOC;