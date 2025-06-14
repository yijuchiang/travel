import React from 'react'

const ViewCard = ({ image, title, amount, price ,onClick}) => {
  return (
    <div className="view-card-container" onClick={onClick} >
      <div className="view-card-image__container">
        <img className="card__image" src={image} alt=""/>
      </div>
      <div className="view-card-content">
        <div className="card-title-container">
          <h3 className="card-title">{title}</h3>
          <i className="fa-regular fa-heart"></i>
        </div>
        <div className="view-card-content-bottom">
          <div>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <span className="amount">{amount}</span>
          </div>
            <p className="price text-black">${price}</p>
        </div>
      </div>
  </div>
  )
}

export default ViewCard
