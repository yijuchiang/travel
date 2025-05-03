import React from 'react'

const CartCard = ({image, title, price}) => {
  return (
    <div className='cart'>
      <div className='card'>
        <div className="pic">
          <img className="card__image" src={image} alt=""/>
        </div>
        <div className="content">
          <div className='title'>{title}</div>
          <div className="detail">
            <span>${price} x1</span>
          </div>
          <button className='delete'>刪除</button>
        </div>  
      </div>
    </div>
  )
}

export default CartCard
