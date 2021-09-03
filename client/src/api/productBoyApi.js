import { useState, useEffect } from 'react'
import axios from 'axios'
//call api baner từ folder api
function ProductBoyApi() {
    const [product_boy, setproduct_boy] = useState([])
    const [sort, setSort] = useState(' ')
    const [color, setcolor] = useState(' ')
    console.log(color)


    useEffect(() => {
        const getproductboy = async() => {
            const res = await axios.get(`http://localhost:5000/api/products_boy?${color}&${sort}`)
            console.log(res)
            setproduct_boy(res.data)
        }
        getproductboy()

    }, [sort, color])
    return {
        product_boy: [product_boy, setproduct_boy],
        sort: [sort, setSort],
        color: [color, setcolor]
    }
}
export default ProductBoyApi