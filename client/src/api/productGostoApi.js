import { useState, useEffect } from 'react'
import axios from 'axios'
//call api baner từ folder api
function ProductGostoApi() {
    const [product_gosto, setproduct_gosto] = useState([])

    useEffect(() => {
        const getproducgosto = async() => {
            const res = await axios.get('http://localhost:5000/api/products_gosto')
            setproduct_gosto(res.data)
        }
        getproducgosto()

    }, [])
    return {
        product_gosto: [product_gosto, setproduct_gosto],
    }
}
export default ProductGostoApi