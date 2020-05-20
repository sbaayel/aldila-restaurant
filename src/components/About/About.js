import React from 'react'
import './About.css'
import AboutImg from "../../Images/About.png"

export default function About({ id }) {
  return (
    <about className='about-container' id={id}>
    <div className='about-box'>
        <p>Rooted in the traditions of Northern Italian cuisine, al di l&agrave; has been a Park Slope staple for over ten years.<br />
        <br />We are owned and operated by husband and wife team Emiliano Coppa and Chef Anna Klinger.</p>
    </div>
      {/* <div className='about-image' style={{ backgroundImage: "url(" + AboutImg + ")", backgroundSize: "cover", padding: "80px" }} /> */}
      <div className='about-image'>
        <img src={AboutImg} alt="" width="100%" height="100%" />
      </div>
    </about>
  )
}

