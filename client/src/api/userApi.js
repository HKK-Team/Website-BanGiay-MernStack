import { useState, useEffect } from 'react'
import axios from 'axios'
import { toastError } from '../admins/components/ToastMassage/ToastMassage'

function UserAPI(token) {
    const [isLogged, setIsLogged] = useState(false)
    const [user, setuser] = useState([])
    const [iduser, setiduser] = useState([])
    useEffect(() => {
        if (token) {
            const getUser = async() => {
                try {
                    const res = await axios.get('/user/infor', {
                        headers: { Authorization: token }
                    })
                    setuser(res.data)
                    setIsLogged(true)
                    setiduser(res.data._id)
                } catch (err) {
                    toastError(err.response.data.msg)
                }
            }

            getUser()

        }
    }, [token])



    return {
        user: [user, setuser],
        isLogged: [isLogged, setIsLogged],
        iduser: [iduser, setiduser]
    }
}

export default UserAPI