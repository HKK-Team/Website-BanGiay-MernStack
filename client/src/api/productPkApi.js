import { useState, useEffect } from 'react'
import axios from 'axios'
//call api baner từ folder api
function ProductPkApi() {
    const [product_pk, setproduct_pk] = useState([])
    const [callback, setCallback] = useState(false)
    const [sort, setSort] = useState(' ')
    const [colorpk, setcolor] = useState(' ')
    useEffect(() => {
        const getproducpk = async() => {
            const res = await axios.get(`http://localhost:5000/api/products_pk/?${colorpk}&${sort}`)
            setproduct_pk(res.data)
        }
        getproducpk()

    }, [callback, sort, colorpk])
    return {
        product_pk: [product_pk, setproduct_pk],
        callback: [callback, setCallback],
        sort: [sort, setSort],
        colorpk: [colorpk, setcolor]
    }
}
export default ProductPkApi