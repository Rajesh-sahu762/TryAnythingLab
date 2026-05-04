import React from 'react'
import ElectricBorder from "./ElectricBorder.jsx";

const Cards = (props) => {

  return (
    <>
    <ElectricBorder
  color="#7df9ff"
  speed={1}
  chaos={0.12}
  thickness={2}
  style={{ borderRadius: 16 }}
>
    <div className="card">
      <img src={props.img} alt={props.user} />
      <h3>{props.user}</h3>
      <p>{props.age} years old</p>
      <button className="btn">Read More</button>
     </div>
 </ElectricBorder>
    </>
  )
}

export default Cards
