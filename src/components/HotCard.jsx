import React from 'react'

const HotCard = ({ image, title, onClick }) => {
  return (
    <div className="hot-card" onClick={onClick}>
      <img className="card__image" src={image} alt=""/>
      <h2 className="card__title">{title}</h2>
    </div>
  )
}

export default HotCard