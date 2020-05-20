import React from 'react'
import './Visit.css'
import Map from "../../Images/Map.png"

export default function Visit({ id }) {
  return (
      <visit className='visit-container' id={id}>
      <div className='visit-image'>
        <img src={Map} alt="" width="100%" height="100%" />
      </div>
      <div className='visit-box'>
        <p>248 5th Avenue Brooklyn, NY 11215<br />Phone: 718-783-4565<br />
        <br />al di là is primarily a walk-in restaurant, but a very limited number of reservations are available for parties of 6-10 people.<br />
        <br />Reservations, event booking & general inquiry:<br />info@aldilatrattoria.com<br />
        <br />Dinner: Mon. - Sat. 5:30 - 11pm | Sun. 5-10pm<br />Lunch: Mon. - Fri. 12pm - 3pm<br />Brunch: Sat. & Sun. 11am - 3pm</p>
      </div>
    </visit>
  )
}

