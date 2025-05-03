import { homeApi } from '@/api/home'
import { useState, useEffect } from 'react'

export const useTravelData = () => {
    const [travelData, setTravelData] = useState([])

    useEffect(() => {
        const getTravelData = async() => {
            const { data } = await homeApi.getTravelData()
            setTravelData(data)
        }
        getTravelData()

    }, [])

    return { travelData }
}