import React from 'react'

const TopCard = ({ image, label, title, price, sale , onClick}) => {
  return (
    <div className="top-card" onClick={onClick}>
      <div className="image__container">
        <img className="card__image" src={image} alt=""/>
      </div>
      <span className="card__city">{label}</span>
      <div className="card__info">
        <h1 className="card__info__title">{title}</h1>
          <button className="card__info__btn">立即確認</button>
          <div className="card__info__detail">
            <span className="card__info__price">${price}</span>
            <span className="sold">已售{sale}組</span>
          </div>
      </div>
    </div>
  )
}

export default TopCard
