import React from 'react'


// props -> src, title, subtitle, isDark(boolean)
const Poster = (props) => {
    return (
        <>
            <div className="flex flex-col items-start gap-2 px-3">

                <div className="h-84">
                    <img src={`https://image.tmdb.org/t/p/original/${props.poster_path}`} alt={props.original_title} className="rounded-xl" />
                </div>

                <h3 className={`text-lg font-bold ${props.isDark ? "text-white" : "text-gray-700"
                    }`}>{props.original_title}</h3>
                <p className={`text-sm  ${props.isDark ? "text-white" : "text-gray-700"
                    }`}>{props.original_language}</p>
                <p className={`text-xs  ${props.isDark ? "text-white" : "text-gray-500"
                    }`}>{props.language}</p>
                <p className={`text-xs  ${props.isDark ? "text-white" : "text-gray-500"
                    }`}>{props.price}</p>
            </div>
        </>
    )
}

export default Poster;