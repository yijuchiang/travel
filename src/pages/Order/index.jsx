import { useNavigate } from 'react-router-dom'
import { useTravelData } from '../../hooks/useTravelData'
import CartCard from '../../components/CartCard';
import { useCartStore } from '@/store/cart';



const Order = () => {

  const navigate = useNavigate();
  const { travelData } = useTravelData();
  const cart = useCartStore((state) => state.cart);
  const totalAmount = cart.reduce((prev , item) => prev + item.amount, 0);
  const totalPrice = cart.reduce((prev , item) => prev + item.totalPrice, 0)

  return (
    <>
    <div class="checkout-container">
      <div class="left-section">
        <h2>訂購人資料</h2>
        <form class="checkout-form">
          <div class="form-row">
            <div class="form-group">
              <label>名字</label>
              <input type="text" placeholder="Lulu"/>
            </div>
            <div class="form-group">
              <label>姓氏</label>
              <input type="text" placeholder="Chiang"/>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label>國家/地區</label>
              <input type="country" placeholder="台灣"/>
            </div>
            <div class="form-group">
              <label>聯絡電話</label>
              <div class="phone-input">
                <select class="code">
                  <option>+886</option>
                </select>
                <input type="text" placeholder="912345678"/>
              </div>
            </div>
          </div>
          <div class="form-group full">
            <label>電子郵件信箱</label>
            <input type="email" placeholder="lulu01019@gmail.com"/>
          </div>
          <button class="btn primary">訂單明細</button>
        </form>
        <div class="product-summary">
          {cart.map(item => (
              <CartCard key={item.id} image={item.ticket.images[0]} title={item.ticket.title} amount={item.amount} price={item.ticket.price} onClick={() => navigate(`/detail/${item.ticket.id}`)} />
            ))}
        </div>
      </div>
      <div class="right-section">
        <div class="summary-box">
          <p>訂單總金額（{totalAmount} 件商品） <span>NT$ {totalPrice}</span></p>
          <p>訂單完成後回饋 <span class="points">k {Math.floor(totalPrice / 2)}</span></p>
          <button class="btn confirm" onClick={() => navigate('/finish')}>確認付款</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Order
