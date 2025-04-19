import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HotCard from '@/components/HotCard'
import TopCard from '@/components/TopCard'
import ViewCard from '@/components/ViewCard'
import { useNavigate } from 'react-router-dom'

const hotCardData = [
  {
    city: 'japan',
    title: '日本',
    image: 'https://plus.unsplash.com/premium_photo-1661964177687-57387c2cbd14?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    city: 'korea',
    title: '韓國',
    image: 'https://images.unsplash.com/photo-1570191913384-7b4ff11716e7?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    city: 'taiwan',
    title: '台灣',
    image: 'https://images.unsplash.com/photo-1601534622119-e9b3aa7c7bdf?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    city: 'america',
    title: '美國',
    image: 'https://images.unsplash.com/photo-1501466044931-62695aada8e9?q=80&w=3187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    city: 'england',
    title: '英國',
    image: 'https://images.unsplash.com/photo-1473896100090-53523650d4c6?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    city: 'australia',
    title: '澳洲',
    image: 'https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?q=80&w=3133&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
]

const topCardData = [
  {
    id: 1,
    label: '東京',
    image: 'https://images.unsplash.com/photo-1671372954216-a1ed945642cd?q=80&w=3034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: '日本富士山一日遊 | 富士山・河口湖・御殿場 Outlet・人野八海｜木之花之湯溫泉 | 東京銀座出發',
    price: 480,
    sale: 213,
  },
  {
    id: 2,
    label: '南投',
    image: 'https://images.unsplash.com/photo-1662106950578-75aea7f8f705?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: '南投日月潭＆清境農場拼車一日遊(含船票)｜台中出發',
    price: 564,
    sale: 199,
  },
  {
    id: 3,
    label: '紐約',
    image: 'https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?q=80&w=3276&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: '美國紐約市區包車一日游｜英文司機',
    price: 564,
    sale: 199,
  },
  {
    id: 4,
    label: '倫敦',
    image: 'https://images.unsplash.com/photo-1599833975787-5c143f373c30?q=80&w=3028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: '英國倫敦近郊一日遊｜巨石陣＆巴斯',
    price: 3320,
    sale: 98,
  },
]

const viewCardData = [
  {
    view: 1,
    image: 'https://images.unsplash.com/photo-1595672410691-67ca64d681d9?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: '東京鐵塔大展望台 Tokyo Tower ｜電子門票',
    amount: '(1,459)',
    price: 332,
  },
  {
    view: 2,
    image: 'https://images.unsplash.com/photo-1540126034813-121bf29033d2?q=80&w=3272&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: '韓國愛寶樂園 Everland 電子門票',
    amount: '(2,953)',
    price: 793,
  },
  {
    view: 3,
    image: 'https://images.unsplash.com/photo-1618944847828-82e943c3bdb7?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: '東京哈利波特影城門票',
    amount: '(4,036)',
    price: 1092,
  },

]


// 作用域

const Home = () => {
  const navigate = useNavigate()

  return (
    <>
      <section className="banner">
        <div className="banner-content">
          <p className="banner-title">我的天 超好玩</p>
          <p className="banner-desc">探索全世界獨特的旅遊體驗</p>
          <div className="banner-content-input">
            <input placeholder="搜尋景點、地方或城市" type="text"/>
            <button>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </section>
      <div className="container">
        <section className="activity-title">
          <h2 className="section-title">熱門活動</h2>
          <div className="activity-content">
            {hotCardData.map(item => (
              <HotCard key={item.city} image={item.image} title={item.title} onClick={() => navigate(`/destination/${item.city}`)} />
            ))}
          </div>
        </section>
        <section className="top">
          <h2 className="section-title">Top City</h2>
          <div className="top-content">
            {topCardData.map(item => (
              <TopCard key={item.id} image={item.image} label={item.label} title={item.title} price={item.price} sale={item.sale} onClick={() => navigate(`/detail/${item.id}`)} />
            ))}
          </div>
        </section>
        <section className="view">
          <h2 className="section-title">view</h2>
          <div className="view-content">
            {viewCardData.map(item => (
                <ViewCard key={item.view} image={item.image} title={item.title} amount={item.amount} price={item.price} onClick={() => navigate(`/detail/${item.view}`)} />
              ))}
          </div>
        </section>
      </div>
    </>
  )
}

export default Home
