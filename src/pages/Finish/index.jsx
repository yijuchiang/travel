import ViewCard from '@/components/ViewCard'
import { useNavigate } from 'react-router-dom'
import { useTravelData } from '../../hooks/useTravelData'

const Finish = () => {

  const navigate = useNavigate();
  const { travelData } = useTravelData()

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
        {travelData.filter(item => item.category === "view").map(item => (
            <ViewCard key={item.id} image={item.images[0]} title={item.title} amount={item.sale} price={item.price} onClick={() => navigate(`/detail/${item.id}`)} />
          ))}
      </div>
    </div>
  </div>
  )
}

export default Finish
