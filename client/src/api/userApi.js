import { useState, useEffect } from 'react'
import axios from 'axios'
export default function User () {
    const [user,setuser] = useState()
    const [callback, setCallback] = useState(false)
    useEffect(() => {
        const getuer = async() => {

            const res = await axios.get('http://localhost:5000/user/login')
            setuser(res.data)
        }
        getuer()
    }, [callback])

    return {
        user: [user, setuser],
        callback : [callback,setCallback]
    }
}