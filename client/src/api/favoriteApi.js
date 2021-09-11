import { useState, useEffect } from 'react'
import axios from 'axios'
//call api favorite từ folder api
function ProductFavorites() {
    const [productFavorites, setproductFavorites] = useState([])

    useEffect(() => {
        const productFavorites = async() => {
            const res = await axios.get('http://localhost:5000/api/favorite')
            setproductFavorites(res.data)
        }
        productFavorites()

    }, [])

    return {
        productFavorites: [productFavorites, setproductFavorites],
    }
}
export default ProductFavorites