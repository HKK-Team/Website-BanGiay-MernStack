import React, { useState, useEffect } from 'react'
import axios from 'axios'
//call api menu từ folder api
function MenuAPI() {
    const [menus, setMenus] = useState([])
    const [menus2, setMenus2] = useState([])
    const [callback, setCallback] = useState(false)
    useEffect(() => {
        const promise1 = axios.get('/api/menu1');
        const promise2 = axios.get('http://localhost:5000/api/menu2');

        Promise.all([promise1, promise2])
            .then(([promise1, promise2]) => {
                setMenus(promise1.data)
                setMenus2(promise2.data)
            })
            .catch(err => console.log(err))
    }, [callback])

    return {
        menus: [menus, setMenus],
        menus2: [menus2, setMenus2],
        callback : [callback,setCallback]
    }
}
export default MenuAPI