import TopCard from '@/components/TopCard'

// 組件 => 積木(顏色、寬度....)
// 資料(顏色...)

const topCardData = [
  {
    id: 1,
    label: '東京',
    image: 'https://images.unsplash.com/photo-1671372954216-a1ed945642cd?q=80&w=3034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: '日本富士山一日遊 | 富士山・河口湖・御殿場 Outlet・人野八海｜木之花之湯溫泉 | 東京銀座出發',
    price: 1480,
    sale: 213
  },
  {
    id: 2,
    label: '東京',
    image: 'https://images.unsplash.com/photo-1528041119984-da3a9f8d04d1?q=80&w=3209&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: '東京迪士尼度假區 - 東京迪士尼樂園及東京迪士尼海洋',
    price: 1880,
    sale: 200
  },
  {
    id: 3,
    label: '沖繩',
    image: 'https://images.unsplash.com/photo-1647336963732-7446b9da7a6f?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: '沖繩JUNGLIA',
    price: 703,
    sale: 133
  },
  {
    id: 4,
    label: '大阪',
    image: 'https://images.unsplash.com/photo-1612404459571-ccef4b6588e7?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: '日本環球影城門票 Universal Studios Japan',
    price: 1823,
    sale: 565
  },
  {
    id: 5,
    label: '東京',
    image: 'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=3272&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: '日本東京鐵塔瞭望台門票 Tokyo Tower',
    price: 343,
    sale: 1150
  },
  {
    id: 6,
    label: '東京',
    image: 'https://lazyjapan.com/images/tokyo-subway-ticket-24-72.jpg',
    title: '東京地鐵三日券／二日券／一日券',
    price: 175,
    sale: 2190
  },
]

const Destination = () => {
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
            {topCardData.map(item => (
              <TopCard key={item.id} image={item.image} label={item.label} title={item.title} price={item.price} sale={item.sale}  />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

export default Destination




