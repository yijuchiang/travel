import { useNavigate } from 'react-router-dom'



const Map = () => {
  const navigate = useNavigate();
  
  // const themeLabels = ['超值一日遊',"主題樂園", "博物館", "觀景台", "景點通票", "包車接送"]

  return (
    <div>
      <div className="container">
        <div className='destination-container'>
          <nav className="sidebar">
            <h3 className = "category">活動分類</h3>
            <ul className = "category-item">
              <li><input type="checkbox" />超值一日遊</li>
              <li><input type="checkbox" />主題樂園</li>
              <li><input type="checkbox" />博物館</li>
              <li><input type="checkbox" />觀景台</li>
              <li><input type="checkbox" />景點通票</li>
              <li><input type="checkbox" />包車接送</li>
            </ul>
          </nav>
          <main className="content">

          </main>
        </div>
      </div>     
    </div>
  )
}

export default Map
