import  { useState, useEffect } from 'react'
import axios from 'axios'
//call api baner từ folder api
function ProductBetraiApi() {
    const [product_betrai, setproduct_betrai] = useState([])
    const [callback, setCallback] = useState(false)
    const [sort, setSort] = useState(' ')
    const [colorbetrai, setcolor] = useState(' ')
    const [sizeminbetrai, setsizeminbetrai] = useState(' ')
    const [sizemaxbetrai, setsizemaxbetrai] = useState(' ')

    useEffect(() => {
        const getproducbetrai = async() => {
            const res = await axios.get(`http://localhost:5000/api/products_betrai?${sizeminbetrai}&${sizemaxbetrai}&${colorbetrai}&${sort}`)
            setproduct_betrai(res.data)
        }
        getproducbetrai()

    }, [callback, sort, colorbetrai, sizeminbetrai, sizemaxbetrai])
    return {
        product_betrai: [product_betrai, setproduct_betrai],
        callback: [callback, setCallback],
        sort: [sort, setSort],
        colorbetrai: [colorbetrai, setcolor],
        sizeminbetrai: [sizeminbetrai, setsizeminbetrai],
        sizemaxbetrai: [sizemaxbetrai, setsizemaxbetrai]
    }
}
export default ProductBetraiApi