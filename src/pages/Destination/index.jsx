import TopCard from '@/components/TopCard'
import { useTravelData } from '../../hooks/useTravelData'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

// 組件 => 積木(顏色、寬度....)
// 資料(顏色...)

const Destination = () => {
  const { travelData } = useTravelData()
  const { city } = useParams()
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className='destination-container'>
        <nav className="sidebar">
          <h3 className = "category">活動分類</h3>
          <ul className = "category-item">
              <li><input type="checkbox"/> 超值一日遊</li>
              <li><input type="checkbox"/> 主題樂園</li>
              <li><input type="checkbox"/> 博物館</li>
              <li><input type="checkbox"/> 觀景台</li>
              <li><input type="checkbox"/> 景點通票</li>
              <li><input type="checkbox"/> 包車接送</li>
          </ul>
        </nav>
        <main className="content">
          <div className="content-top">
          <input type="input"/>
          <button className="check">立即確認</button>
          <select className="option">
            <option value="價格由高到低">價格由高到低</option>
            <option value="價格由低到高">價格由低到高</option>
          </select>
          </div>
          <div className="destination-chose">
            {travelData.filter(item => item.country === city ).map(item => (
              <TopCard key={item.id} image={item.images[0]} label={item.city} title={item.title} price={item.price} sale={item.sale} onClick={() => navigate(`/detail/${item.id}`)} />
            ))}
            {/* 根據選的城市（city），從 travelData 這個資料陣列裡，篩選出符合的項目，然後用 TopCard 這個元件一個一個渲染出來。 */}
          </div>
        </main>
      </div>
    </div>
  )
}

export default Destination




