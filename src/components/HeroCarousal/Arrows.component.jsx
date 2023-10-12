import React from 'react'

export const NextArrow = (props) => {

    // const { className, style, onClick } = props
    return (
        <>
            <div
                className={props.className}
                style={{
                    ...props.style,
                    backgroundColor: "black",
                    opacity: "50%",
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderTopLeftRadius: "8px",
                    borderBottomLeftRadius: "8px"
                }}
                onClick={props.onClick}
            />
        </>
    )
}

export const PrevArrow = (props) => {
    return (
        <>
            <div
                className={props.className}
                style={{
                    ...props.style,
                    backgroundColor: "black",
                    opacity: "50%",
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderTopRightRadius: "8px",
                    borderBottomRightRadius: "8px"
                }}
                onClick={props.onClick}
            />
        </>
    )

}