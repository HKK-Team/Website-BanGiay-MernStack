import { useState, useEffect } from 'react'
import axios from 'axios'
//call api baner từ folder api
function BannerAPI() {
    const [bannes, setbannes] = useState([]);
    useEffect(() => {
        const getbanner = async() => {
            const res = await axios.get('http://localhost:5000/api/banner')
            setbannes(res.data)
        }
        getbanner()

    }, [])
    return {
        bannes: [bannes, setbannes],
    }
}
export default BannerAPI