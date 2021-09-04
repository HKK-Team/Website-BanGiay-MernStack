import { useState, useEffect } from 'react'
import axios from 'axios'
//call api baner từ folder api
function ProductGostoApi() {
    const [product_gosto, setproduct_gosto] = useState([])
    const [callback, setCallback] = useState(false)
    const [sort, setSort] = useState(' ')
    const [colorgosto, setcolor] = useState(' ')
    useEffect(() => {
        const getproducgosto = async() => {
            const res = await axios.get(`http://localhost:5000/api/products_gosto/?${colorgosto}&${sort}`)
            setproduct_gosto(res.data)
        }
        getproducgosto()

    }, [callback, sort, colorgosto])
    return {
        product_gosto: [product_gosto, setproduct_gosto],
        callback: [callback, setCallback],
        sort: [sort, setSort],
        colorgosto: [colorgosto, setcolor]
    }
}
export default ProductGostoApi