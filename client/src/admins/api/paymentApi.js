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
    },[]);
    const [orderbrowsing,setorderbrowsing] = useState([]);
    useEffect(() =>{
        const getOrderBrowsing = async() =>{
            const res = await axios.get('/admin/OrderBrowsing');
            setorderbrowsing(res.data)
        }
        getOrderBrowsing()
    },[])
    return{
        payments :[payments,setpayments],
        orderbrowsings : [orderbrowsing,setorderbrowsing]
    }
}