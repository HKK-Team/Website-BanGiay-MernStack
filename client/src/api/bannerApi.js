import { useState, useEffect } from 'react'
import axios from 'axios'
//call api baner từ folder api
function BannerAPI() {
    const [bannes, setbannes] = useState([]);
    const [callback, setCallback] = useState(false)
    useEffect(() => {
        const getbanner = async() => {
            const res = await axios.get('http://localhost:5000/api/banner')
            setbannes(res.data)
        }
        getbanner()

    }, [callback])
    return {
        bannes: [bannes, setbannes],
        callback : [callback,setCallback]
    }
}
export default BannerAPI