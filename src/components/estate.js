import React from 'react'
import Img from "gatsby-image"



const Estate = ({estate})=>{
    const {Photo, Name, Country, Rooms, Area, Price} = estate
    return(
        <>
        <div>
            <Img fluid = {Photo.childImageSharp.fluid} />
            <h5>{Name}</h5>
            <p>{Country}</p>
            <p> {Rooms} rooms</p>
            <p>Area: {Area} m2</p>
            <p>Price: ${Price}</p>
        </div>
        <button>Contact realtor</button>
        </>
    )
}
export default Estate
