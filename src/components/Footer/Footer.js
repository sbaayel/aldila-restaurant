import React from 'react'
import './Footer.css'
import Fb from "../../Images/Facebook.svg"
import Ig from "../../Images/Instagram.svg"
import Copy from '../../Images/copyright.png'

const Footer = () => {
  return (
    <footer>
      <img src={Copy}/>
      <div>
        <img className="fb-link" src={Fb} />
        <img className="ig-link" src={Ig} />
      </div>
    </footer>
  )
}

export default Footer;