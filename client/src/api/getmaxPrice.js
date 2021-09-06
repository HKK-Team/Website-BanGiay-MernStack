import { useState, useEffect } from 'react'
import axios from 'axios'
//call api baner từ folder api
function PriceProductApimax() {
    const [priceProduct_max, setpriceProduct_max] = useState([])

    useEffect(() => {
        const priceProduct_max = async() => {
            const res = await axios.get('http://localhost:5000/api/maxprice')
            setpriceProduct_max(res.data)
        }
        priceProduct_max()
    }, [])

    return {
        priceProduct_max: [priceProduct_max, setpriceProduct_max],
    }
}
export default PriceProductApimax