import ViewCard from '@/components/ViewCard'
import { useNavigate } from 'react-router-dom'
import { useTravelData } from '../../hooks/useTravelData'

const Order = () => {

  const navigate = useNavigate();
  const { travelData } = useTravelData()

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
          {travelData.filter(item => item.category === "view").map(item => (
              <ViewCard key={item.id} image={item.images[0]} title={item.title} amount={item.sale} price={item.price} onClick={() => navigate(`/detail/${item.id}`)} />
            ))}
        </div>
      </div>
      <div class="right-section">
        <div class="summary-box">
          <p>訂單總金額（1件商品） <span>$332</span></p>
          <p>訂單完成後回饋 <span class="points">k 141</span></p>
          <button class="btn confirm" onClick={() => navigate('/finish')}>確認付款</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Order
