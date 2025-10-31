import { useNavigate } from 'react-router-dom'
import CartCard from '../../components/CartCard';
import { useCartStore } from '@/store/cart';



const Order = () => {

  const navigate = useNavigate();
  const cart = useCartStore((state) => state.cart);
  const totalAmount = cart.reduce((prev , item) => prev + item.amount, 0);
  const totalPrice = cart.reduce((prev , item) => prev + item.totalPrice, 0)

  return (
    <>
    <div className="checkout-container">
      <div className="left-section">
        <h2>訂購人資料</h2>
        <form className="checkout-form">
          <div className="form-row">
            <div className="form-group">
              <label>名字</label>
              <input className='p-1' type="text" placeholder="Lulu"/>
            </div>
            <div className="form-group">
              <label>姓氏</label>
              <input className='p-1' type="text" placeholder="Chiang"/>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>國家/地區</label>
              <input className='p-1' type="country" placeholder="台灣"/>
            </div>
            <div className="form-group">
              <label>聯絡電話</label>
              <div className="phone-input">
                <select className="code p-1">
                  <option>+886</option>
                </select>
                <input className='p-1' type="text" placeholder="912345678"/>
              </div>
            </div>
          </div>
          <div className="form-group full">
            <label>電子郵件信箱</label>
            <input className='p-1' type="email" placeholder="lulu01019@gmail.com"/>
          </div>
          <button className="btn primary">訂單明細</button>
        </form>
        <div className="product-summary">
          {cart.map(item => (
              <CartCard key={item.id} image={item.ticket.images[0]} title={item.ticket.title} amount={item.amount} price={item.ticket.price} onClick={() => navigate(`/detail/${item.ticket.id}`)} />
            ))}
        </div>
      </div>
      <div className="right-section">
        <div className="summary-box">
          <p>訂單總金額（{totalAmount} 件商品） <span>NT$ {totalPrice}</span></p>
          <p>訂單完成後回饋 <span className="points">k {Math.floor(totalPrice / 2)}</span></p>
          <button className="btn confirm" onClick={() => navigate('/finish')}>確認付款</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Order
