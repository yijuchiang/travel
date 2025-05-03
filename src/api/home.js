import axios from 'axios'

export const homeApi = {
    getTravelData: async() => {
      const { data } = await axios.get('/mock/travelData')
      return data
    }
}