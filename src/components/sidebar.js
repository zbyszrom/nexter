import React from 'react'
import {Link} from 'gatsby'
const Sidebar = ()=>{
    return(
        <div>
        <h3>sidebar</h3>
        <ul>
            <li>
            <Link to = '/'>Home</Link>
            </li>
            <li>
             <Link to = '/estates'>Estates</Link>
            </li>
            <li>
            <Link to = '/galleryPage'>Gallery</Link>
            </li>

        </ul>
        </div>
    )
}


export default Sidebar