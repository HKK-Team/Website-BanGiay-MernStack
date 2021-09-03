import React, { useState, useEffect } from 'react'
import axios from 'axios'
//call api baner từ folder api
function ProductBetraiApi() {
    const [product_betrai, setproduct_betrai] = useState([])
    const [callback, setCallback] = useState(false)
    useEffect(() => {
        const getproducbetrai = async() => {
            const res = await axios.get('http://localhost:5000/api/products_betrai')
            setproduct_betrai(res.data)
        }
        getproducbetrai()

    }, [callback])
    return {
        product_betrai: [product_betrai, setproduct_betrai],
        callback : [callback,setCallback]
    }
}
export default ProductBetraiApi