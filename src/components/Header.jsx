import Logo from '@/assets/images/logo.png';
import { Link } from 'react-router-dom';
import { Drawer, Modal, Dropdown, message } from 'antd';
import { useState } from 'react';
import { useUserStore } from '@/store/user';
import { useTranslation } from "react-i18next";
import { useLanguage } from '../hooks/useLanguage';
import CartCard from '@/components/CartCard';
import { useTravelData } from '../hooks/useTravelData'
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '@/store/cart';
import { homeApi } from '../api/home';

// a標籤 vs. Link標籤差別
// a標籤 => 自帶重新刷新頁面
// Link標籤 => 在頁面顯示的時候是ａ標籤，但是不會重刷頁面的方式跳轉頁面

// axios.post('url', {...})
// 前端把使用者帳密給後端的API => 後端ok => 後端將token傳給前端
// 前端將token存進本地(localStorage, cookie)
// 登入是前端給網頁的狀態: 有token就是登入 沒token登出
// JWT

const Header = () => {
  const { cart, removeCart } = useCartStore()
  const { t } = useTranslation()
  const { darkMode, setDarkMode, setToken, token, userInfo, setUserInfo } = useUserStore()
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { travelData } = useTravelData();
  const [messageApi, contextHolder] = message.useMessage();
  const {
        language,
        languageList,
        changeLanguage
    } = useLanguage()
  const reset = () => {
    setUsername('')
    setPassword('')
  }
  const login = async() => {
    if (!username || !password) {
      messageApi.open({
        type: 'error',
        content: '使用者名稱和密碼不能為空',
      });
      return
    }
    try {
      const { accessToken, firstName } = await homeApi.login(username, password)
      setToken(accessToken)
      setUserInfo({ ...userInfo, username: firstName })
      messageApi.open({
        type: 'success',
        content: '登入成功',
      });
      setIsLoginModalOpen(false)
      reset()
    } catch(err) {
      console.error(err);
      messageApi.open({
        type: 'error',
        content: '使用者名稱或密碼有誤',
      });
    }
  }
  const logout = () => {
    setToken('')
    setUserInfo({})
    messageApi.open({
      type: 'success',
      content: '登出成功',
    });
  }
  const handleCancel = () => {
    setUsername('')
    setPassword('')
    setIsLoginModalOpen(false)
  }

  const languageItems = [
        { key: languageList.zh, label: (
        <button onClick={() => changeLanguage(languageList.zh)} disabled={language === languageList.zh}>繁體中文</button>
        )},
        { key: languageList.en, label: (
        <button onClick={() => changeLanguage(languageList.en)}disabled={language === languageList.en}>English</button>
        )}
    ]
  const navigate = useNavigate();
  const totalAmount = cart.reduce((prev , item) => prev + item.amount, 0)
  const totalPrice = cart.reduce((prev , item) => prev + item.totalPrice, 0)

  return (
    <>
      {contextHolder}
      <header>
        <div className="my-container">
          <div className="flex justify-between items-center">
            <Link to='/'>
              <img className="logo" src={Logo} alt="logo"/>
            </Link>
            <ul className="flex gap-3">
              <li className="py-5 relative flex items-center menu-text group">
                <Link className="bg-none border-none transition-all menu-text group-hover:text-[#26bec9]" to="/map">{t('destination')}</Link>
              </li>
              {/* <li className="menu-item">
                <a className="menu-link menu-text" href="#">所有優惠</a>
              </li> */}
              <li className="py-5 relative flex items-center group">
                <button className="bg-none border-none transition-all group-hover:text-[#26bec9]" onClick={() => setDarkMode(!darkMode)}>
                  <i className="fa-regular fa-moon"></i>
                </button>
              </li>
              <li className="py-5 relative flex items-center group">
                <Dropdown placement="bottom" menu={{ items: languageItems
                }}>
                  <i className="fa-solid fa-globe group-hover:text-[#26bec9]"></i>
                </Dropdown>
              </li>
              <li className="py-5 relative flex items-center group">
                <button style={{ background: '#fff', border: 'none' }} className="bg-none border-none transition-all group-hover:text-[#26bec9] relative" onClick={() => setIsCartOpen(true)}>
                  <i className="fa-solid fa-cart-shopping"></i>
                  {cart.length > 0 && (
                    <p className='absolute -right-2 -top-2 text-xs text-white bg-red-600 rounded-full w-4 h-4'>{cart.length}</p>
                  )}
                </button>
              </li>
              <li className="py-5 relative flex items-center group">
                {token ? (
                  <button className="bg-none border-none transition-all group-hover:text-[#26bec9]" onClick={logout}>登出</button>
                ) : (
                  <button className="bg-none border-none transition-all group-hover:text-[#26bec9]" onClick={() => setIsLoginModalOpen(true)}>{t('login')}</button>
                )}
              </li>
              <li className="py-5 relative flex items-center group">
                {token ? userInfo.username : (
                  <p className="bg-none transition-all border border-solid border-[#000] block w-6 h-6 rounded-full relative group-hover:text-[#26bec9] group-hover:border-[#26bec9]">
                  <i className="fa-solid fa-user absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></i>
                  </p>
                )}
              </li>
            </ul>
          </div>
        </div>
      </header>
      <Drawer title="購物車" onClose={() => setIsCartOpen(false)} open={isCartOpen}>
          {cart.length ? (
          <div className="card-list">
            {cart.map(item => (
              <CartCard key={item.id} image={item.ticket.images[0]} title={item.ticket.title} price={item.ticket.price} amount={item.amount} onDelete={() => removeCart(item.id)} />
            ))}
          </div>
          ) : (
            <div>你的購物車是空的唷!</div>
          )}
          <div className="cart-summary">
            <div className="amo">
              <span className='text-[#29bec9] font-bold'>共 {totalAmount} 個</span>
              <span className='text-[#29bec9] font-bold'>總共 ${totalPrice} 元</span>
            </div>
            <button className='btn' onClick={() => navigate('/order')}>立即結帳</button>
          </div>       
      </Drawer>
      <Modal title="登入" open={isLoginModalOpen} onOk={login} onCancel={handleCancel} okText='登入' cancelText='取消' 
        okButtonProps={{
          style: { color: '#ffffff', backgroundColor: '#26bec9', borderColor: '#26bec9' }
          }}>
        <div>
          <label htmlFor="username">使用者名稱</label>
          <input id='username' type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">密碼</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
      </Modal>
    </>
  )
}

export default Header
