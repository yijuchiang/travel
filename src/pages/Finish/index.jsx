import { useNavigate } from 'react-router-dom'
import { useTravelData } from '../../hooks/useTravelData'
import CartCard from '../../components/CartCard';
import { useCartStore } from '@/store/cart';

const Finish = () => {

  const navigate = useNavigate();
  const { travelData } = useTravelData();
  const cart = useCartStore((state) => state.cart);


  return (
  <div>
    <div class="status-header">
      <h1>付款成功</h1>
      <p>1個工作日內確認</p>
    </div>
    <div class="order-info">
      <h2>訂購人資料</h2>
      <div class="info-grid">
        <div class="info-item">
          <label>訂單編號</label>
          <p>#19KK092634357</p>
        </div>
        <div class="info-item">
          <label>名字</label>
          <p>Lulu</p>
        </div>
        <div class="info-item">
          <label>姓氏</label>
          <p>Chiang</p>
        </div>
        <div class="info-item">
          <label>國家/地區</label>
          <p>台灣</p>
        </div>
        <div class="info-item">
          <label>聯絡電話</label>
          <p>+886 912345678</p>
        </div>
        <div class="info-item">
          <label>電子郵件信箱</label>
          <p>lulu01019@gmail.com</p>
        </div>
      </div>
      <button class="btn primary">訂單明細</button>
      <div class="product-summary">
          {cart.map(item => (
              <CartCard key={item.id} image={item.ticket.images[0]} title={item.ticket.title} amount={item.amount} price={item.ticket.price} onClick={() => navigate(`/detail/${item.ticket.id}`)} />
            ))}
      </div>
    </div>
  </div>
  )
}

export default Finish
