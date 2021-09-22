import { useState, useEffect } from 'react';
import axios from 'axios';
export default function UsersApi (){
    const [allusers,setallusers] = useState([]);
    useEffect(() =>{
        const getAlluser = async() =>{
            const res = await axios.get('/admin/alluser');
            setallusers(res.data)
        }
        getAlluser()
    },[])
    return{
        allusers :[allusers,setallusers]
    }
}