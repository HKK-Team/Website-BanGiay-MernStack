import React, {createContext, useState,useEffect} from 'react';
import Menu1API from './api/menu1Api';
import Menu2API from './api/menu2Api';
import BannerAPI from './api/bannerApi';
import BannerBoyAPI from './api/bannerBoyApi';
import BannerGirlAPI from './api/bannerGirlApi';
import ProductBoyApi from './api/productBoyApi';
import ProductGirlApi from './api/productGirlApi';
import ProductGostoApi from './api/productGostoApi';
import ProductPkApi from './api/productPkApi';
import ProductBetraiApi from './api/productBetraiApi';
import ProductBegaiApi from './api/productBegaiApi';
import ProductDetailApi from './api/productDetailApi';
import PriceProductApimax from './api/getmaxPrice';
import UserApi from './api/userApi';
import Banner_mainAPI from './api/banner_mainApi';
import ProductFavorites from './api/favoriteApi';
import axios from 'axios';
import SearchProductApi from './api/searchProductApi';
import List_OderApi from './api/list_oderApi';
import AdminApi from './admins/api/adminApi';
import Admin_User from "./admins/api/userApi";
import PaymentsApi from "./admins/api/paymentApi";
import ChartAdminAPI from "./admins/api/chartAdminApi";
import FavAndHotAPI from "./admins/api/favoriteproductandhotApi";
import WidgetAPI from "./admins/api/widgetApi";
//gọi lại api ở file client/api chuyển thành dạng dữ liệu object state
export const GlobalState = createContext()

export const DataProvider = ({children}) =>{
    const [token, setToken] = useState(false)
    const [tokenn,setTokenn] = useState(false)
    useEffect(() =>{
        // token login user
        const firstLogin = localStorage.getItem('firstLogin')
        if(firstLogin){
            const refreshToken = async () =>{
                const res = await axios.get('/user/refresh_token')
                setToken(res.data.accesstoken)
                setTimeout(() => {
                    refreshToken()
                }, 10 * 60 * 1000)
            }
            refreshToken()
        }
        // token login admin
        const adminlogin = localStorage.getItem('AdminLogin')
        if(adminlogin){
            const refreshToken = async () =>{
                const res = await axios.get('/admin/refresh_token')
                setTokenn(res.data.accesstoken)
                setTimeout(() =>{
                    refreshToken()
                },10 * 60 *1000)
            }
            refreshToken()
        }
    },[])
    const state = {
        token:[token, setToken],
        userAPI : UserApi(token),
        tokenn :[tokenn,setTokenn],
        adminApi : AdminApi(tokenn),
        menu1API:Menu1API(),
        menu2API:Menu2API(),
        bannerboyAPI:BannerBoyAPI(),
        bannergirlAPI:BannerGirlAPI(),
        bannerAPI:BannerAPI(),
        productboyApi: ProductBoyApi(),
        productgirlApi: ProductGirlApi(),
        productpkApi: ProductPkApi(),
        productgostoApi: ProductGostoApi(),
        productbetraiApi: ProductBetraiApi(),
        productbegaiApi: ProductBegaiApi(),
        productDetailApi : ProductDetailApi(),
        priceProduct_max:PriceProductApimax(),
        banner_mainApi : Banner_mainAPI(),
        productFavorites:ProductFavorites(),
        searchProductApi : SearchProductApi(),
        list_oderApi : List_OderApi(),
        alluserApi : Admin_User(),
        paymentsApi : PaymentsApi(),
        chartAdminAPI:ChartAdminAPI(),
        favAndHotAPI:FavAndHotAPI(),
        widgetAPI:WidgetAPI(),
        CheckBoxCancelOrder :[],
    }
    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    );
}