import React from 'react'
import './MenuBrunch.css'

const MenuBrunch = (props) => {
  let items = props.menu.items;
  console.log(items);
  return (
    <>
    <div className="menu-container">
      <p className="dish-type">Eggs and Breakfast</p>
      {items.filter(item => item.type === "Eggs and Breakfast").map(item => {
        return (
          <div>
            <div className="menu-dish"><strong>{item.dish}</strong> ${item.cost.toFixed(2)}<br />{item.caption}</div>
          </div>)
      })}
      <p className="dish-type">Salads</p>
      {items.filter(item => item.type === "Salads").map(item => {
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
      <p className="dish-type">Sides</p>
      {items.filter(item => item.type === "Sides").map(item => {
        return (
          <div>
            <div className="menu-dish"><strong>{item.dish}</strong> ${item.cost.toFixed(2)}<br />{item.caption}</div>
          </div>)
      })}
      </div>
      </>
  )
}

export default MenuBrunch