import HotCard from '@/components/HotCard'
import TopCard from '@/components/TopCard'
import ViewCard from '@/components/ViewCard'
import { useNavigate } from 'react-router-dom'
import { useTravelData } from '../../hooks/useTravelData'
import { useTranslation } from "react-i18next";



// 打API => 網址: (協議+域名)+路徑 + 請求方法: get/post
// axios 套件(協助前端去後端請求資料)
// axios.get(網址)
// axios.post(網址, 提交數據)


// 後端先設定好API(給前端的資料json + 請求網址)
// 設置給頁面的狀態，並給定初始值[]
// const [travelData, setTravelData] = useState([])
// 頁面資料放置 travelData
// 打API請求資料 => 將數據透過 setTravelData(data) 的方式去改變頁面資料

const Home = () => {
  const navigate = useNavigate()
  const { travelData } = useTravelData()
  // const [travelData, setTravelData] = useState([])
  // promise
  // useEffect(() => {
  //   axios.get('/mock/travelData').then(data => {
  //     console.log(data.data);
  //   })
  // }, [])

  // async/await
  // useEffect(() => {
  //   const getTravelData = async() => {
  //     const { data } = await homeApi.getTravelData()
  //     setTravelData(data)
  //   }
  //   getTravelData()

  // }, [])
    const { t } = useTranslation()


  return (
    <>
      <section className="banner">
        <div className="banner-content">
          <p className="banner-title">{t('banner-title')}</p>
          <p className="banner-desc">{t('banner-desc')}</p>
          <div className="banner-content-input">
            <input placeholder="搜尋景點、地方或城市" type="text"/>
            <button>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </section>
      <div className="my-container">
        <section className="activity-title">
          <h2 className="section-title">{t('hot-activity')}</h2>
          <div className="activity-content">
            {travelData.filter(item => item.category === "hot").map(item => (
              <HotCard key={item.city} image={item.image} title={item.title} onClick={() => navigate(`/destination/${item.city}`)} />
            ))}
          </div>
        </section>
        <section className="top">
          <h2 className="section-title">{t('top-city')}</h2>
          <div className="top-content">
            {travelData.filter(item => item.category === "top").map(item => (
              <TopCard key={item.id} image={item.images[0]} label={item.city} title={item.title} price={item.price} sale={item.sale} onClick={() => navigate(`/detail/${item.id}`)} />
            ))}
          </div>
        </section>
        <section className="view">
          <h2 className="section-title">{t('view')}</h2>
          <div className="view-content">
            {travelData.filter(item => item.category === "view").map(item => (
                <ViewCard key={item.id} image={item.images[0]} title={item.title} amount={item.sale} price={item.price} onClick={() => navigate(`/detail/${item.id}`)} />
              ))}
          </div>
        </section>
      </div>
    </>
  )
}

export default Home
