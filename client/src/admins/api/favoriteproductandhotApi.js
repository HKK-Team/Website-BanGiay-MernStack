import { useState, useEffect } from "react";
import axios from "axios";

function FavAndHotAPI() {
  const [hotproduct, sethotproduct] = useState([]);
  const [favproduct, setfavproduct] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      const res = await axios.get("http://localhost:5000/admin/revenueproducthot");
      sethotproduct(res.data);
    };
    getdata();
  }, []);

  useEffect(() => {
    const getdata = async () => {
      const res = await axios.get("http://localhost:5000/admin/revenueproductfav");
      setfavproduct(res.data);
    };
    getdata();
  }, []);


  return {
    hotproduct: [hotproduct, sethotproduct],
    favproduct:[favproduct, setfavproduct], 
  };
}
export default FavAndHotAPI;
