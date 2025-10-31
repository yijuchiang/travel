import TopCard from '@/components/TopCard'
import { useTravelData } from '../../hooks/useTravelData'
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { Pagination } from 'antd';


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
  
  useEffect(() => {
    if (travelData.length) {
      setFilterDestinations(destinations)
    }
  }, [travelData, city])


  const themeLabels = ['超值一日遊',"主題樂園", "博物館", "觀景台", "景點通票", "包車接送"]

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
    setCurrentPage(page)
  }


  return (
    <div className="my-container">
      <div className='md:flex pt-4'>
        <nav className="w-full md:w-[200px] mb-3 mb:mb-0">
          <h3 className = "text-xl font-bold mb-2">活動分類</h3>
          <ul className = "flex flex-wrap md:block">
            {themeLabels.map(item => (
              <li className='mb-0 md:mb-2 mr-2 md:mr-0' onClick={() => handleTheme(item)}>
                <input className='mr-2' type="checkbox" checked={themes.includes(item)} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </nav>
        <main className="flex-1">
          <div className="flex mb-2">
          <input type="input" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
          <button onClick={handleSearch} className="check bg-[#26bec9] text-white ml-2 mr-2 pl-2 pr-2 rounded-lg">立即確認</button>
          <select className="p-2 rounded-[10px]" onChange={(e) => handleSelect(e.target.value)}>
            <option value="desc">價格由高到低</option>
            <option value="asc">價格由低到高</option>
          </select>
          </div>
          <div className="flex gap-3 flex-wrap mb-5">
            {showPageList.map(item => (
              <TopCard key={item.id} image={item.images[0]} label={item.city} title={item.title} price={item.price} sale={item.sale} onClick={() => navigate(`/detail/${item.id}`)} />
            ))}
          </div>
          <Pagination current={currentPage} defaultCurrent={1} total={filteredDestinations.length} pageSize={pageSize} onChange={handlePageChange} />
        </main>
      </div>
    </div>
  )
}

export default Destination




