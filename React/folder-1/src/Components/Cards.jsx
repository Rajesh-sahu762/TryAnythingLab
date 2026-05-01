import React from 'react'

const Cards = (props) => {

  return (
    <>
    <div className="card">
      <img src={props.img} alt={props.user} />
      <h3>{props.user}</h3>
      <p>{props.age} years old</p>
      <button className="btn">Read More</button>
     </div>
    </>
  )
}

export default Cards
