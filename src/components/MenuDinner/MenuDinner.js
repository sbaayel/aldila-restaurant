import React from 'react'
import './MenuDinner.css'

const MenuDinner = (props) => {
  let items = props.menu.items;
  console.log(items);
  return (
    <>
      <div className="menu-container">
        <p className="dish-type">Antipasti</p>
        {items.filter(item => item.type === "Antipasti").map(item => {
          return (
            <div>
              <div className="menu-dish"><strong>{item.dish}</strong> ${item.cost.toFixed(2)}<br />{item.caption}</div>
            </div>)
        })}
        <p className="dish-type">Primi</p>
        {items.filter(item => item.type === "Primi").map(item => {
          return (
            <div>
              <div className="menu-dish"><strong>{item.dish}</strong> ${item.cost.toFixed(2)}<br />{item.caption}</div>
            </div>)
        })}
        <p className="dish-type">Secondi</p>
        {items.filter(item => item.type === "Secondi").map(item => {
          return (
            <div>
              <div className="menu-dish"><strong>{item.dish}</strong> ${item.cost.toFixed(2)}<br />{item.caption}</div>
            </div>)
        })}
        <p id="contorni-p" className="dish-type">Contorni</p>
        {items.filter(item => item.type === "Contorni").map(item => {
          return (
            <div>
              <div className="menu-dish"><strong>{item.dish}</strong> ${item.cost.toFixed(2)}<br />{item.caption}</div>
            </div>)
        })}
      </div>
    </>
  )
}

export default MenuDinner