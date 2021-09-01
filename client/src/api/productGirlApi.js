import { useState, useEffect } from 'react'
import axios from 'axios'
//call api baner từ folder api
function ProductGirlApi() {
    const [product_girl, setproduct_girl] = useState([])

    useEffect(() => {
        const getproductgirl = async() => {
            const res = await axios.get('http://localhost:5000/api/products_girl')
            setproduct_girl(res.data)
        }
        getproductgirl()

    }, [])
    return {
        product_girl: [product_girl, setproduct_girl],
    }
}
export default ProductGirlApi