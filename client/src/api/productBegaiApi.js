import { useState, useEffect } from 'react'
import axios from 'axios'
//call api baner từ folder api
function ProductBegaiApi() {
    const [product_begai, setproduct_begai] = useState([])

    useEffect(() => {
        const getproducbegai = async() => {
            const res = await axios.get('http://localhost:5000/api/products_begai')
            setproduct_begai(res.data)
        }
        getproducbegai()

    }, [])
    return {
        product_begai: [product_begai, setproduct_begai]
    }
}
export default ProductBegaiApi