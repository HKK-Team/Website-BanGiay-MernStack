import { useState, useEffect } from 'react'
import axios from 'axios'
//call api baner từ folder api
function ProductBegaiApi() {
    const [product_begai, setproduct_begai] = useState([])
    const [callback, setCallback] = useState(false)
    const [sort, setSort] = useState(' ')
    const [colorbegai, setcolor] = useState(' ')
    const [sizeminbegai, setsizeminbegai] = useState(' ')
    const [sizemaxbegai, setsizemaxbegai] = useState(' ')

    useEffect(() => {
        const getproducbegai = async() => {
            const res = await axios.get(`http://localhost:5000/api/products_begai?${sizeminbegai}&${sizemaxbegai}&${colorbegai}&${sort}`)
            setproduct_begai(res.data)
        }
        getproducbegai()

    }, [callback, sort, colorbegai, sizeminbegai, sizemaxbegai])
    return {
        product_begai: [product_begai, setproduct_begai],
        callback: [callback, setCallback],
        sort: [sort, setSort],
        colorbegai: [colorbegai, setcolor],
        sizeminbegai: [sizeminbegai, setsizeminbegai],
        sizemaxbegai: [sizemaxbegai, setsizemaxbegai]
    }
}
export default ProductBegaiApi