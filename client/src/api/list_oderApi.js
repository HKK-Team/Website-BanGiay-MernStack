import { useState, useEffect } from 'react'
import axios from 'axios'
export default function List_OderApi() {
    const [list_oder, setlist_oder] = useState([])
    const [callback, setCallback] = useState(false)
    useEffect(() => {
        const getlist_oder = async() => {

            const res = await axios.get('http://localhost:5000/payment/payment')
            setlist_oder(res.data)
        }
        getlist_oder()
    }, [callback])

    return {
        list_oder: [list_oder, setlist_oder],
        callback : [callback,setCallback]
    }
}