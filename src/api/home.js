import axios from 'axios'

export const homeApi = {
    getTravelData: async() => {
      const { data } = await axios.get('/mock/travelData')
      return data
    },
    login: async(username, password) => {
      const { data } = await axios.post('https://dummyjson.com/auth/login', { username, password })
      return data
    }
}