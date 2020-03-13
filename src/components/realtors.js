import React from 'react'
import Real1 from '../images/realtor-1.jpg'
import Real2 from '../images/realtor-2.jpg'
import Real3 from '../images/realtor-3.jpg'
const Realtors =()=>{
    return(
        <div>
            <h3>Top 3 Realtors</h3>
            <div>
                <img src = {Real1} alt=''/>
                <h4>Erik Feinman</h4>
                <p>245 houses sold</p>
                <img src = {Real2} alt=''/>
                <h4>Kim Brown</h4>
                <p>212 houses sold</p>
                <img src = {Real3} alt=''/>
                <h4>Toby Ramsey</h4>
                <p>198 houses sold</p>
            </div>
        </div>
    )
}
    
export default Realtors