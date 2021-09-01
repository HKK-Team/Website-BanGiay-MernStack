import { useState, useEffect } from 'react'
import axios from 'axios'
//call api baner từ folder api
function BannerGirlAPI() {
    const [bannergirls, setBannergirls] = useState([])

    useEffect(() => {
        const getbannergirl = async() => {
            const res = await axios.get('http://localhost:5000/api/banner_girl')
            setBannergirls(res.data)
        }
        getbannergirl()

    }, [])
    return {
        bannergirls: [bannergirls, setBannergirls],
    }
}
export default BannerGirlAPI