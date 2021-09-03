import { useState, useEffect } from 'react'
import axios from 'axios'
//call api baner từ folder api
function ProductGostoApi() {
    const [product_gosto, setproduct_gosto] = useState([])
    const [callback, setCallback] = useState(false)
    const [sort, setSort] = useState(' ')
    useEffect(() => {
        const getproducgosto = async() => {
            const res = await axios.get(`http://localhost:5000/api/products_gosto/?${sort}`)
            setproduct_gosto(res.data)
        }
        getproducgosto()

    }, [callback, sort])
    return {
        product_gosto: [product_gosto, setproduct_gosto],
        callback: [callback, setCallback],
        sort: [sort, setSort]
    }
}
export default ProductGostoApi