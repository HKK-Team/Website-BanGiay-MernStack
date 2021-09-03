import React, { useState, useEffect } from 'react'
import axios from 'axios'
//call api product từ folder api
function ProductAPI() {
    const [product_boy, setproduct_boy] = useState([])
    const [product_girl, setproduct_girl] = useState([])
    const [product_pk, setproduct_pk] = useState([])
    const [product_gosto, setproduct_gosto] = useState([])
    const [product_betrai, setproduct_betrai] = useState([])
    const [product_begai, setproduct_begai] = useState([])
    const [product,setproduct] = useState([])
    const [callback, setCallback] = useState(false)
    const getproduct = async() =>{
        const res = await axios.get('http://localhost:5000/api/product')
        setproduct(res.data)
    }
    const getproduct_boy = async() => {
        const res = await axios.get('http://localhost:5000/api/products_boy')
        setproduct_boy(res.data)
    }
    const getproduct_girl = async() => {
        const res = await axios.get('http://localhost:5000/api/products_girl')
        setproduct_girl(res.data)
    }
    const getproduct_pk = async() => {
        const res = await axios.get('http://localhost:5000/api/products_pk')
        setproduct_pk(res.data)
    }
    const getproduct_gosto = async() => {
        const res = await axios.get('http://localhost:5000/api/products_gosto')
        setproduct_gosto(res.data)
    }
    const getproduct_betrai = async() => {
        const res = await axios.get('http://localhost:5000/api/products_betrai')
        setproduct_betrai(res.data)
    }
    const getproduct_begai = async() => {
        const res = await axios.get('http://localhost:5000/api/products_begai')
        setproduct_begai(res.data)
    }

    useEffect(() => {
        getproduct_boy()
        getproduct_girl()
        getproduct_pk()
        getproduct_gosto()
        getproduct_betrai()
        getproduct_begai()
        getproduct()
    }, [callback])
    return {
        product_boy: [product_boy, setproduct_boy],
        product_girl: [product_girl, setproduct_girl],
        product_pk: [product_pk, setproduct_pk],
        product_gosto: [product_gosto, setproduct_gosto],
        product_betrai: [product_betrai, setproduct_betrai],
        product_begai: [product_begai, setproduct_begai],
        product : [product,setproduct],
        callback : [callback,setCallback]
    }
}
export default ProductAPI