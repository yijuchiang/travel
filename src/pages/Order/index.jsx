import ViewCard from '@/components/ViewCard'

const viewCardData = [
  {
    view: 1,
    image: 'https://images.unsplash.com/photo-1595672410691-67ca64d681d9?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: '東京鐵塔大展望台 Tokyo Tower ｜電子門票',
    amount: '(1,459)',
    price: 332,
  },
]

const Order = () => {
  return (
    <>
    <div class="checkout-container">
      <div class="left-section">
        <h2>訂購人資料</h2>
        <form class="checkout-form">
          <div class="form-row">
            <div class="form-group">
              <label>名字</label>
              <input type="text" placeholder="Lulu"/>
            </div>
            <div class="form-group">
              <label>姓氏</label>
              <input type="text" placeholder="Chiang"/>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label>國家/地區</label>
              <input type="country" placeholder="台灣"/>
            </div>
            <div class="form-group">
              <label>聯絡電話</label>
              <div class="phone-input">
                <select class="code">
                  <option>+886</option>
                </select>
                <input type="text" placeholder="912345678"/>
              </div>
            </div>
          </div>
          <div class="form-group full">
            <label>電子郵件信箱</label>
            <input type="email" placeholder="lulu01019@gmail.com"/>
          </div>
          <button class="btn primary">繼續</button>
        </form>
        <div class="product-summary">
          {viewCardData.map(item => (
              <ViewCard key={item.view} image={item.image} title={item.title} amount={item.amount} price={item.price}/>
            ))}
        </div>
      </div>
      <div class="right-section">
        <div class="summary-box">
          <p>訂單總金額（1件商品） <span>$332</span></p>
          <p>訂單完成後回饋 <span class="points">k 141</span></p>
          <button class="btn confirm">確認付款</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Order
