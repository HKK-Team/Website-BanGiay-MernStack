import React, { useState, useEffect } from 'react'
import axios from 'axios'
//call api menu từ folder api
function Menu2API() {
    const [menus2, setMenus2] = useState([])

    useEffect(() => {
        const getmenu2 = async() => {
            const res = await axios.get('http://localhost:5000/api/menu2')
            setMenus2(res.data)
        }
        getmenu2()
    }, [])

    return {
        menus2: [menus2, setMenus2]
    }
}
export default Menu2API