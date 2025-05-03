
// 打API => 後端把資料傳前端
// const data = [
//   {
//     id: 1,
//     title: '日本',
//     image: 'xcvbnm,'
//   },
//   {
//     id: 2,
//     title: '香港',
//     image: 'hhj'
//   }
// ]

import { useTravelData } from '../../hooks/useTravelData'
import { useParams } from 'react-router-dom';
import { Calendar } from 'antd';
const Detail = () => {
  const { travelData } = useTravelData()
  const { id } = useParams()
  const ticket = travelData.find(item => item.id === Number(id))
  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };
  // TODO: 做loading
  if (!ticket) return <div>loading</div>

  console.log(ticket);


  return (
    <>
      <section className="picture">
        <div className="container">
          <div className='pic_container'>
            <div className='pic_1'>
              <img src={ticket?.images?.[0]} alt=""/> 
            </div>
            <div className='pic_2'>
              <div className='pic_item1'>
                <div className="pic_item1_1">
                  <img src={ticket?.images?.[1]} alt=""/>
                </div>
                <div className="pic_item1_2">
                  <img src={ticket?.images?.[2]} alt=""/>
                </div>
              </div>
              <div className='pic_item2'>
                <div className="pic_item2_1">
                  <img src={ticket?.images?.[3]} alt=""/>
                </div>
                <div className="pic_item2_2">
                  <img src={ticket?.images?.[4]} alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="title">
        <div className='container'>
          <div className="title_container">
            <div className='title_detal_1'>
              <div className="title_detal_1_1">
                <p className="title_main">{ticket?.title}</p>
                {/* 加問號的意思，ticket是undefined就不要再執行 */}
                <i className="fa-regular fa-heart"></i>
              </div>
              <div className="title_detal_1_2">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <span>已售出{ticket?.sale}組</span>
              </div>
            </div>
            <div className='title_detal_2'>
              <p className='sold'>NT${ticket?.price}</p>
              <button className='button'>選擇方案</button>
              <i className="fa-solid fa-bolt-lightning"></i>
              <p className='check'>立即確認</p>
            </div>
          </div>
        </div>
      </section>
      <section className="desc">
        <div className="container">
          <div className="container-desc">
            <ul>
              <li>
              東京哈利波特影城是全球最大型《哈利波特》主題室內設施。 
              </li>
              <li>
              最豐富的《哈利波特》、《怪獸與牠們的產地》電影系列場景就在東京哈利波特影城。
              </li>
              <li>
              東京華納兄弟哈利波特影城交通方便，距離地鐵站只要走路2分鐘。
              </li>
              <li>
              在KKday購買東京哈利波特影城門票只要出示電子憑證即可輕鬆入場。 
              </li>
              <li>
              KKday提供涵蓋電子導覽、交通車票、網卡、百貨免稅券等東京哈利波特影城套票。
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="ticket">
        <div className="container">
          <h2 className="ticket_title">
            選擇方案
          </h2>
          <div className="ticket_card">
            <div className="ticket_pic">
            </div>
            <div className="ticket_info">
              <span className="ticket_title">
              東京華納兄弟哈利波特影城門票 + 百貨公司免稅優惠券
              </span>
              <span className="buy">即買即用</span>
              <p>最早可預訂日：2025-03-18</p>
              <ul className="ticket_detal">
                <li>「場次時間」請選擇進入「東京華納兄弟哈利波特影城」的時間。</li>
                <li>優惠券僅限使用一次。無法截圖重複使用，請知悉。</li>
                <li>每張憑證都有不同的效期。 憑證的包含內容可能會更動，請留意</li>
              </ul>
            </div>
            <div className="ticket_price">
              <p className="price">NT$1,092</p>
              <button className="ticket_price_cho">選擇</button>
            </div>
          </div>
          <Calendar fullscreen={false} onPanelChange={onPanelChange} />
        </div>
      </section>
    </>
  )
}

export default Detail




