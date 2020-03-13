import React from 'react'
import Img from "gatsby-image"

const Estate = (props)=>{
    return(
        <>
        <div>
            <Img fluid = {props.image}/>
            <h5>{props.name}</h5>
            <p>{props.country}</p>
            <p>{props.rooms}</p>
            <p>{props.area}</p>
            <p>{props.price}</p>
        </div>
        <button>Contact realtor</button>
        </>
    )
}
export default Estate
