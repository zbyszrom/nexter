import React from "react"
//import { Link } from "gatsby"
import logo from '../images/logo.png'
import logoBb from '../images/logo-bbc.png'
import logoFo from '../images/logo-forbes.png'
import logoTe from '../images/logo-techcrunch.png'
import logoBi from '../images/logo-bi.png'



const Header = () => {
  return(
  <header>
    
            <img src={logo} alt="Nexter logo" />
            <h3 >Your own home:</h3>
            <h1 >The ultimate personal freedom</h1>
            <button >View our properties</button>
            <div >Seen on</div>
            <div className='colBg'>
                <img src={logoBb} alt="Seen on logo 1"/>
                <img src={logoFo} alt="Seen on logo 2"/>
                <img src={logoTe} alt="Seen on logo 3"/>
                <img src={logoBi} alt="Seen on logo 4"/>
            </div>
        
  </header>
)
  }



export default Header
