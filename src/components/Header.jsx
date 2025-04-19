import Logo from '@/assets/images/logo.png'
import { Link } from 'react-router-dom'
import { Drawer, Modal, Dropdown } from 'antd';
import { useState } from 'react'
import { useUserStore } from '@/store/user'
import i18n from '@/i18n'
import { useTranslation } from "react-i18next";
// a標籤 vs. Link標籤差別
// a標籤 => 自帶重新刷新頁面
// Link標籤 => 在頁面顯示的時候是ａ標籤，但是不會重刷頁面的方式跳轉頁面

const Header = () => {
  const { t } = useTranslation()
  const { darkMode, setDarkMode } = useUserStore()
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const languageList = {
    zh: 'zh_TW',
    en: 'en_US'
  }
  const changeLanguage = (lang) => {
    console.log(lang);
    i18n.changeLanguage(lang)
  }
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
                <Link className="menu-link menu-text" href="#">{t('destination')}</Link>
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
                <Dropdown placement="bottom" menu={{ items: [
                    { key: languageList.zh, label: (
                      <button onClick={() => changeLanguage(languageList.zh)}>繁體中文</button>
                    )},
                    { key: languageList.en, label: (
                      <button onClick={() => changeLanguage(languageList.en)}>English</button>
                    )}
                  ]
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
      <Drawer title="Basic Drawer" onClose={() => setIsCartOpen(false)} open={isCartOpen}>
        <div className='cart'>
          <div>
            {[1,2,3].map(item => (
              <div key={item}>
                產品：{item}
                <span>x 2</span>
                <button>刪除</button>
              </div>
            ))}
          </div>
          <div>
            共 3 個
            總共 1000元
            <button>立即結帳</button>
          </div>
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
