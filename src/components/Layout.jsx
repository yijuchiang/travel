import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Outlet } from 'react-router-dom'
import { useUserStore } from '@/store/user'

const Layout = () => {
  const darkMode = useUserStore(state => state.darkMode)

  return (
    <div className={`wrapper ${darkMode && 'darkMode'}`}>
      <Header/>
        <main>
          <Outlet/>
        </main>
      <Footer/>
    </div>
  )
}

export default Layout
