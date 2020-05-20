import React from 'react'
import './MenuDessert.css'


const MenuDessert = (props) => {
  let items = props.menu.items;
  console.log(items);
  return (
    <>
    <div className="menu-container dessert">
      {items.filter(item => item.type === "Dessert").map(item => {
        return (
          <div>
            <div className="menu-dish"><strong>{item.dish}</strong> ${item.cost.toFixed(2)}<br />{item.caption}</div>
          </div>)
      })}
      </div>
      </>
  )
}

export default MenuDessert