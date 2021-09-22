import { useState, useEffect } from 'react';
import axios from 'axios';
export default function UsersApi (){
    const [payments,setpayments] = useState([]);
    useEffect(() =>{
        const getPayments = async() =>{
            const res = await axios.get('/payment/payment');
            setpayments(res.data)
        }
        getPayments()
    },[])
    return{
        payments :[payments,setpayments]
    }
}