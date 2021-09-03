import { useState, useEffect } from 'react'
import axios from 'axios'
//call api baner từ folder api
function ProductBegaiApi() {
    const [product_begai, setproduct_begai] = useState([])
    const [sort, setSort] = useState(' ')

    useEffect(() => {
        const getproducbegai = async() => {
            const res = await axios.get(`http://localhost:5000/api/products_begai/?${sort}`)
            setproduct_begai(res.data)
        }
        getproducbegai()

    }, [sort])
    return {
        product_begai: [product_begai, setproduct_begai],
        sort: [sort, setSort]
    }
}
export default ProductBegaiApi