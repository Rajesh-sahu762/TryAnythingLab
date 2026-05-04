import React from 'react'
import ElectricBorder from "./ElectricBorder.jsx";

const Cards = (props) => {
  return (
    <ElectricBorder>
      <div className="cards-container">
        <img src={props.image} alt={props.title} style={{width:"100px", height:"100px", objectFit:"cover" }} className="card-image" />
        <div className="card-content">
          <h2 className="card-title">{props.title}</h2>
          <p className="card-description">{props.description}</p>
          <div className="card-meta">
            <span className="card-author">By {props.author}</span>
            <span className="card-date">{props.date}</span>
          </div>
          <div className="card-tags">
           
              <span className="card-tag">{props.tags }</span>
           
          </div>
          <a href={props.link} className="card-link">Read More</a>
        </div>
      </div>
     
    </ElectricBorder>
  )
}

export default Cards
