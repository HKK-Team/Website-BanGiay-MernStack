import { useState, useEffect } from 'react'
import axios from 'axios'
//call api baner từ folder api
function ProductBetraiApi() {
    const [product_betrai, setproduct_betrai] = useState([])
    const [callback, setCallback] = useState(false)
    const [sort, setSort] = useState(' ')
    const [colorbetrai, setcolor] = useState(' ')
    const [sizeminbetrai, setsizeminbetrai] = useState(' ')
    const [detailCategorybetrai, setdetailCategorybetrai] = useState(' ')
    const [sizemaxbetrai, setsizemaxbetrai] = useState(' ')
    const [currentPagebetrai, setcurrentPagebetrai] = useState(1)
    const [postsPerPagebetrai] = useState(9)
    const [maxPicebetrai, setmaxPicebetrai] = useState([])
    const [minPricebetrai, setminPricebetrai] = useState([])

    useEffect(() => {
        const getproducbetrai = async() => {
            const res = await axios.get(`http://localhost:5000/api/products_betrai?${minPricebetrai}&${maxPicebetrai}&${detailCategorybetrai}&${sizeminbetrai}&${sizemaxbetrai}&${colorbetrai}&${sort}`)
            setproduct_betrai(res.data)
        }
        getproducbetrai()

    }, [callback, sort, colorbetrai, sizeminbetrai, sizemaxbetrai, detailCategorybetrai, maxPicebetrai, minPricebetrai])
    return {
        product_betrai: [product_betrai, setproduct_betrai],
        callback: [callback, setCallback],
        sort: [sort, setSort],
        colorbetrai: [colorbetrai, setcolor],
        sizeminbetrai: [sizeminbetrai, setsizeminbetrai],
        sizemaxbetrai: [sizemaxbetrai, setsizemaxbetrai],
        detailCategorybetrai: [detailCategorybetrai, setdetailCategorybetrai],
        currentPagebetrai: [currentPagebetrai, setcurrentPagebetrai],
        postsPerPagebetrai: [postsPerPagebetrai],
        minPricebetrai: [minPricebetrai, setminPricebetrai],
        maxPicebetrai: [maxPicebetrai, setmaxPicebetrai]
    }
}
export default ProductBetraiApi