import TopCard from '@/components/TopCard'
import { useTravelData } from '../../hooks/useTravelData'
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { Pagination } from 'antd';
// 組件 => 積木(顏色、寬度....)
// 資料(顏色...)

// 0 1 2 3 4 5
// 6 7 8 9 10 11
// start (1 - 1) * 6 end 1 * 6
// start (2 - 1) * 6 end 2 * 6
const Destination = () => {
  const { city } = useParams()
  const { travelData } = useTravelData()
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('')
  const [filteredDestinations, setFilterDestinations] = useState([])
  const [themes, setThemes] = useState([])
  const destinations = travelData.filter(item => item.country === city)
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 6
  const showPageList = filteredDestinations.slice((currentPage - 1) * pageSize, currentPage * pageSize)

  const handleSearch = () => {
    const newDestinations = destinations.filter(item => item.title.includes(searchValue))
    if (!newDestinations.length){
      setFilterDestinations(destinations)
    } else {
      setFilterDestinations(newDestinations)
    }
  }
  const handleTheme = (value) => {
    const hasTheme = themes.some(item => item === value)
    let newThemes
    if (!hasTheme) {
      newThemes = [...themes, value]
      setThemes(newThemes)
    } else {
      newThemes = themes.filter(item => item !== value)
      setThemes(newThemes)
    }
    const newDestination = destinations.filter(item => newThemes.includes(item.theme))
    setFilterDestinations(newDestination)
  }

  const handleSelect = (method) => {
    const newDestination = [...destinations]
    if (method === 'asc') {
      newDestination.sort((a, b) => a.price - b.price)
    }
    if (method === 'desc') {
      newDestination.sort((a, b) => b.price - a.price)
    }
    setFilterDestinations(newDestination)
  }
  const handlePageChange = (page) => {
    console.log(page);
    setCurrentPage(page)
  }

  useEffect(() => {
    if (travelData.length) {
      const destinations = travelData.filter(item => item.country === city)
      setFilterDestinations(destinations)
    }
  }, [travelData, city])

  const themeLabels = ['超值一日遊',"主題樂園", "博物館", "觀景台", "景點通票", "包車接送"]

  return (
    <div className="my-container">
      <div className='destination-container'>
        <nav className="sidebar">
          <h3 className = "category">活動分類</h3>
          <ul className = "category-item">
            {themeLabels.map(item => (
              <li onClick={() => handleTheme(item)}><input type="checkbox" checked={themes.includes(item)} />{item}</li>
            ))}
          </ul>
        </nav>
        <main className="content">
          <div className="content-top mb-2">
          <input type="input" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
          <button onClick={handleSearch} className="check bg-orange-500 text-white ml-2 mr-2 pl-2 pr-2 rounded-lg">立即確認</button>
          <select className="option" onChange={(e) => handleSelect(e.target.value)}>
            <option value="desc">價格由高到低</option>
            <option value="asc">價格由低到高</option>
          </select>
          </div>
          <div className="destination-chose">
            {showPageList.map(item => (
              <TopCard key={item.id} image={item.images[0]} label={item.city} title={item.title} price={item.price} sale={item.sale} onClick={() => navigate(`/detail/${item.id}`)} />
            ))}
            {/* 根據選的城市（city），從 travelData 這個資料陣列裡，篩選出符合的項目，然後用 TopCard 這個元件一個一個渲染出來。 */}
          </div>
          <Pagination current={currentPage} defaultCurrent={1} total={filteredDestinations.length} pageSize={pageSize} onChange={handlePageChange} />
        </main>
      </div>
    </div>
  )
}

export default Destination




