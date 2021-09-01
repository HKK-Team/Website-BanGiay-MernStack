import { useState, useEffect } from 'react'
import axios from 'axios'
//call api baner từ folder api
function BannerBoyAPI() {
    const [bannerboys, setBannerboys] = useState([])

    useEffect(() => {
        const getbanerboy = async() => {
            const res = await axios.get('http://localhost:5000/api/banner_boy')
            setBannerboys(res.data)
        }
        getbanerboy()

    }, [])
    return {
        bannerboys: [bannerboys, setBannerboys]
    }
}
export default BannerBoyAPI