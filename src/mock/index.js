import { mock } from "mockjs";
// 引用給前端的數據
import travelData from './data/travelData.json'

// 打API => 網址: (協議+域名)+路徑 + 請求方法: get/post
// axios 套件(協助前端去後端請求資料)

mock('/mock/travelData', { code: 200, data: travelData })