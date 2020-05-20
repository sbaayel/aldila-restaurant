import React from 'react'
import './Menu/Menu.css'
import { Link, Route } from 'react-router-dom'
import MenuBrunch from '../components/MenuBrunch/MenuBrunch'
import MenuLunch from '../components/MenuLunch/MenuLunch'
import MenuDinner from '../components/MenuDinner/MenuDinner'
import MenuDessert from '../components/MenuDessert/MenuDessert'

export default function Menu({ dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
      <nav>
        <Link to='/' >Brunch</Link>
        <Link to='/lunch-menu' >Lunch</Link>
        <Link to='/dinner-menu' >Dinner</Link>
        <Link to='/dessert-menu' >Dessert</Link>
      </nav>
      <div className='current-menu'>
        <Route exact path='/' render={MenuBrunch} />
        <Route path='/lunch-menu' render={MenuLunch} />
        <Route path='/dinner-menu' render={MenuDinner} />
        <Route path='/dessert-menu' render={MenuDessert} />
      </div>
        
      </div>
    </div>
  );
}
