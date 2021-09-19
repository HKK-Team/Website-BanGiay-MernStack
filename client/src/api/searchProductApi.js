import { useState, useEffect } from "react";
import axios from "axios";
//call api baner từ folder api
function ProductDetailApi() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [callback, setCallback] = useState(false);
    const [currentPagesearch, setcurrentPagesearch] = useState(1);
    const [postsPerPagesearch] = useState(9);

    useEffect(() => {
        const getproductDetail = async() => {
            // search
            if (search !== "") {
                const ress = await axios.get(
                    `/api/products?nameProduct[regex]=${search}`
                );
                // check result with name if no result get product with title
                if (ress.data.result === 0) {
                    const temp = search.replaceAll(" ", "")
                        .toLowerCase()
                        .normalize("NFD")
                        .replace(/[\u0300-\u036f]/g, "")
                        .replace(/đ/g, "d")
                        .replace(/Đ/g, "D")

                    const res = await axios.get(
                        `/api/products?detailCategory[eq]=${temp}`
                    );
                    setProducts(res.data.products);
                } else setProducts(ress.data.products);
            }

        };
        getproductDetail();
    }, [callback, search]);
    return {
        products: [products, setProducts],
        search: [search, setSearch],
        callback: [callback, setCallback],
        postsPerPagesearch: [postsPerPagesearch],
        currentPagesearch: [currentPagesearch, setcurrentPagesearch],
    };
}
export default ProductDetailApi;