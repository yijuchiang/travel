import { useState } from 'react';
import { useTravelData } from '../../hooks/useTravelData'
import { useParams } from 'react-router-dom';
import { Calendar, message } from 'antd';
import { useCartStore } from '../../store/cart';


const Detail = () => {
  const [amount, setAmount] = useState(1)
  const [date, setDate] = useState('')
  const [isCartOpen, setIsCartOpen] = useState(false)
  const setCart = useCartStore(state => state.addCart)
  const cart = useCartStore(state => state.cart)
  const { travelData } = useTravelData()
  const { id } = useParams()
  const ticket = travelData.find(item => item.id === Number(id))
  const handleDateChange = (value) => {
    setDate(value.format('YYYY-MM-DD'))
  };
  const addCart = () => {
    const product = {
      id: new Date().getTime(),
      totalPrice: amount * ticket.price,
      date,
      amount,
      ticket,
    }
    setCart(product)
    message.success('成功加入購物車!')
  }

  const handleAddCartAndOpen = () => {
    addCart();          // 執行加入購物車的邏輯
    setIsCartOpen(true); // 開啟購物車視窗
  };
  

  // TODO: 做loading
  if (!ticket) return <div>loading</div>

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
                {/* react把陣列看成重複渲染的列表 */}
              {Array.from({ length: 5 }, () => <i className="fa-solid fa-star"></i>)}
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
              {ticket?.desc.map(item => (<li key={item}>{item}</li>))}
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
              <img src={ticket?.images?.[0]} alt=""/> 
            </div>
            <div className="ticket_info">
              <span className="ticket_title">{ticket?.title}</span>
              <span className="buy">即買即用</span>
              <p className="time">{ticket?.card.time}</p>
              <ul className="ticket_detal">
                {ticket?.card.detail.map(item => (<li key={item}>{item}</li>))}
              </ul>
            </div>
            <div className="ticket_price">
              <p className="price">NT${ticket?.price}</p>
              <button className="ticket_price_cho">選擇</button>
            </div>
          </div>
          <div className="final_check">
            <h3 className="option">選擇日期、數量</h3>
            <div className='final_detail'>
              <div className='flex-1'>
                <p>請選擇出發日期</p>
                <Calendar fullscreen={false} onChange={handleDateChange} />
              </div>
              <div className="w-[360px] relative">
                <div className="absolute left-0 bottom-0 p-4">
                  <p className='font-bold'>選擇數量</p>
                  <div>
                    <p>人數</p>
                    <div>
                      <p>NT${ticket.price}/每人</p>
                      <div className='flex gap-2'>
                        <button style={{ background: 'yellow' }} onClick={() => setAmount(prev => Math.max(prev - 1, 1))}><i class="fa-solid fa-minus"></i></button>
                        {amount}
                        <button style={{ background: 'yellow' }} onClick={() => setAmount(prev => prev + 1)}><i class="fa-solid fa-plus"></i></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="total">
            <p className=''>總金額:NT${amount * ticket.price}</p>
            <button className="addcard_btn" onClick={handleAddCartAndOpen}>加入購物車</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Detail




