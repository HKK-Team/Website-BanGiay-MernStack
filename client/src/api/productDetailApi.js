import { useState, useEffect } from 'react'
import axios from 'axios'
//call api baner từ folder api
function ProductDetailApi() {
    const [productDetail, setproductDetail] = useState([])
    const [callback, setCallback] = useState(false)
    useEffect(() => {
        const getproductDetail = async() => {
            const res = await axios.get('http://localhost:5000/api/product')
            setproductDetail(res.data)
        }
        getproductDetail()

    }, [callback])
    return {
        productDetail: [productDetail, setproductDetail],
        callback : [callback,setCallback]
    }
}
export default ProductDetailApi