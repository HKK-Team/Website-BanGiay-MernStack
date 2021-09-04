import { useState, useEffect } from 'react'
import axios from 'axios'
//call api baner từ folder api
function ProductBoyApi() {
    const [product_boy, setproduct_boy] = useState([])
    const [callback, setCallback] = useState(false)
    const [sort, setSort] = useState(' ')
    const [colorboy, setcolorboy] = useState(' ')


    useEffect(() => {
        const getproductboy = async() => {
            const res = await axios.get(`http://localhost:5000/api/products_boy?${colorboy}&${sort}`)
            setproduct_boy(res.data)
        }
        getproductboy()

    }, [callback, sort, colorboy])
    return {
        product_boy: [product_boy, setproduct_boy],
        callback: [callback, setCallback],
        sort: [sort, setSort],
        colorboy: [colorboy, setcolorboy]
    }
}
export default ProductBoyApi