import Logo from '@/assets/images/logo.png';
import { Link } from 'react-router-dom';
import { Drawer, Modal, Dropdown } from 'antd';
import { useState } from 'react';
import { useUserStore } from '@/store/user';
import { useTranslation } from "react-i18next";
import { useLanguage } from '../hooks/useLanguage';
import CartCard from '@/components/CartCard';
import { useTravelData } from '../hooks/useTravelData'
import { useNavigate } from 'react-router-dom';



// a標籤 vs. Link標籤差別
// a標籤 => 自帶重新刷新頁面
// Link標籤 => 在頁面顯示的時候是ａ標籤，但是不會重刷頁面的方式跳轉頁面

const Header = () => {
  const { t } = useTranslation()
  const { darkMode, setDarkMode } = useUserStore()
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const {travelData} = useTravelData();
  const {
        language,
        languageList,
        changeLanguage
    } = useLanguage()

  const languageItems = [
        { key: languageList.zh, label: (
        <button onClick={() => changeLanguage(languageList.zh)} disabled={language === languageList.zh}>繁體中文</button>
        )},
        { key: languageList.en, label: (
        <button onClick={() => changeLanguage(languageList.en)}disabled={language === languageList.en}>English</button>
        )}
    ]
  const navigate = useNavigate();


  return (
    <>
      <header>
        <div className="container">
          <div className="navbar">
            <Link to='/'>
              <img className="logo" src={Logo} alt="logo"/>
            </Link>
            <ul className="menu-list">
              <li className="menu-item menu-text">
                <Link className="menu-link menu-text" to="/destination">{t('destination')}</Link>
              </li>
              {/* <li className="menu-item">
                <a className="menu-link menu-text" href="#">所有優惠</a>
              </li> */}
              <li className="menu-item">
                <button className="menu-link" onClick={() => setDarkMode(!darkMode)}>
                  <i className="fa-regular fa-moon"></i>
                </button>
              </li>
              <li className="menu-item">
                <Dropdown placement="bottom" menu={{ items: languageItems
                }}>
                  <i className="fa-solid fa-globe"></i>
                </Dropdown>
              </li>
              <li className="menu-item">
                <button style={{ background: '#fff', border: 'none' }} className="menu-link" onClick={() => setIsCartOpen(true)}>
                  <i className="fa-solid fa-cart-shopping"></i>
                </button>
              </li>
              <li className="menu-item">
                <button className="menu-link" onClick={() => setIsLoginModalOpen(true)}>{t('login')}</button>
              </li>
              <li className="menu-item">
                <p className="menu-link menu-user">
                  <i className="fa-solid fa-user"></i>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <Drawer title="購物車" onClose={() => setIsCartOpen(false)} open={isCartOpen}>
        <div className="card-list">
          {travelData.filter(item => item.category === "view").map(item => (
            <CartCard key={item.id} image={item.images[0]} title={item.title} price={item.price}/>
          ))}
        </div>
        <div className="cart-summary">
          <div className="amo">
            <span>共 3 個</span>
            <span>總共 1000元</span>
          </div>
          <button className='btn' onClick={() => navigate('/order')}>立即結帳</button>
        </div>       
      </Drawer>
      <Modal title="登入" open={isLoginModalOpen} onOk={() => setIsLoginModalOpen(false)} onCancel={() => setIsLoginModalOpen(false)} okText='登入' cancelText='取消'>
        <div>
          <label htmlFor="username">使用者名稱</label>
          <input id='username' type="text" />
        </div>
        <div>
          <label htmlFor="">密碼</label>
          <input type="password" />
        </div>
      </Modal>
    </>
  )
}

export default Header
