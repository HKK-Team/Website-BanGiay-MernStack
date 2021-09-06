import { useState, useEffect } from 'react'
import axios from 'axios'
//call api baner từ folder api
function ProductBoyApi() {
    const [product_boy, setproduct_boy] = useState([])
    const [callback, setCallback] = useState(false)
    const [sort, setSort] = useState(' ')
    const [colorboy, setcolorboy] = useState(' ')
    const [sizeminboy, setsizeminboy] = useState(' ')
    const [sizemaxboy, setsizemaxboy] = useState(' ')
    const [detailCategoryboy, setdetailCategoryboy] = useState(' ')
    const [currentPageboy, setcurrentPageboy] = useState(1)
    const [postsPerPageboy] = useState(12)

    useEffect(() => {
        const getproductboy = async() => {
            const res = await axios.get(`http://localhost:5000/api/products_boy?${detailCategoryboy}&${sizeminboy}&${sizemaxboy}&${colorboy}&${sort}`)
            setproduct_boy(res.data)
        }
        getproductboy()

    }, [callback, sort, colorboy, sizeminboy, sizemaxboy, detailCategoryboy])

    return {
        product_boy: [product_boy, setproduct_boy],
        callback: [callback, setCallback],
        sort: [sort, setSort],
        colorboy: [colorboy, setcolorboy],
        sizeminboy: [sizeminboy, setsizeminboy],
        sizemaxboy: [sizemaxboy, setsizemaxboy],
        detailCategoryboy: [detailCategoryboy, setdetailCategoryboy],
        postsPerPageboy: [postsPerPageboy],
        currentPageboy: [currentPageboy, setcurrentPageboy]
    }
}
export default ProductBoyApi