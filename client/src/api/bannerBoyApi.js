import { useState, useEffect } from 'react'
import axios from 'axios'
//call api baner từ folder api
function BannerBoyAPI() {
    const [bannerboys, setBannerboys] = useState([])
    const [callback, setCallback] = useState(false)

    useEffect(() => {
        const getbanerboy = async() => {
            const res = await axios.get('http://localhost:5000/api/banner_boy')
            setBannerboys(res.data)
        }
        getbanerboy()

    }, [callback])
    return {
        bannerboys: [bannerboys, setBannerboys],
        callback : [callback,setCallback]
    }
}
export default BannerBoyAPI