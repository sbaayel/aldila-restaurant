import React from 'react'
import './MenuLunch.css'


const MenuLunch = (props) => {
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
      <p className="dish-type">Panini</p>
      {items.filter(item => item.type === "Panini").map(item => {
        return (
          <div>
            <div className="menu-dish"><strong>{item.dish}</strong> ${item.cost.toFixed(2)}<br />{item.caption}</div>
          </div>)
      })}
      <p className="dish-type">Pasta</p>
      {items.filter(item => item.type === "Pasta").map(item => {
        return (
          <div>
            <div className="menu-dish"><strong>{item.dish}</strong> ${item.cost.toFixed(2)}<br />{item.caption}</div>
          </div>)
      })}
      <p className="dish-type">Piatti Caldi</p>
      {items.filter(item => item.type === "Piatti Caldi").map(item => {
        return (
          <div>
            <div className="menu-dish"><strong>{item.dish}</strong> ${item.cost.toFixed(2)}<br />{item.caption}</div>
          </div>)
      })}
      </div>
      </>
  )
}

export default MenuLunch