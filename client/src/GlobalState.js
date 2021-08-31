import React, {createContext, useState, useEffect} from 'react'
import MenuAPI from './api/menuApi'
import BannerAPI from './api/bannerApi'
// import ProductAPI from './api/productApi'
//gọi lại api ở file client/api chuyển thành dạng dữ liệu object state
export const GlobalState = createContext()

export const DataProvider = ({children}) =>{
    const [token, setToken] = useState(false)


    const state = {
        token:[token, setToken],
        menu1API:MenuAPI(),
        menu2API:MenuAPI(),
        banner_boyAPI:BannerAPI(),
        banner_girlAPI:BannerAPI(),
        bannerAPI:BannerAPI(),
        // product_boyApi: ProductAPI(),
        // product_girlApi: ProductAPI(),
        // product_pkApi: ProductAPI(),
        // product_gostoApi: ProductAPI(),
        // product_betraiApi: ProductAPI(),
        // product_begaiApi: ProductAPI(),
    }


    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}