import React, { useState, useEffect } from 'react'
import axios from 'axios'
//call api baner từ folder api
function ProductPkApi() {
    const [product_pk, setproduct_pk] = useState([])

    useEffect(() => {
        const getproducpk = async() => {
            const res = await axios.get('http://localhost:5000/api/products_pk')
            setproduct_pk(res.data)
        }
        getproducpk()

    }, [])
    return {
        product_pk: [product_pk, setproduct_pk],
    }
}
export default ProductPkApi