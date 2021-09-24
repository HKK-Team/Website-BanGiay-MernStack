import { useState, useEffect } from "react";
import axios from "axios";
//call api baner từ folder api
function ChartAdminAPI() {
  const [chartbymonth, setchartbymonth] = useState([]);
  const [chartbyyear, setchartbyyear] = useState([]);
  const [chartbyqui, setchartbyqui] = useState([]);
  const [chartbyproducthot, setchartbyproducthot] = useState([]);
  const [chartbyproducthotquy1, setchartbyproducthotquy1] = useState([]);
  const [chartbyproducthotquy2, setchartbyproducthotquy2] = useState([]);
  const [chartbyproducthotquy3, setchartbyproducthotquy3] = useState([]);
  const [chartbyproducthotquy4, setchartbyproducthotquy4] = useState([]);
  const [chartbycountuser, setchartbycountuser] = useState([]);

  //call api xu li du lieu thong ke doanh thu theo thang
  useEffect(() => {
    const getdata = async () => {
      const res = await axios.get("http://localhost:5000/admin/chart");
      setchartbymonth(res.data);
    };
    getdata();
  }, []);
  //call api xu li du lieu thong ke doanh thu theo nam
  useEffect(() => {
    const getdata = async () => {
      const res = await axios.get("http://localhost:5000/admin/chartbyyear");
      setchartbyyear(res.data);
    };
    getdata();
  }, []);
  //call api xu li du lieu thong ke doanh thu theo quy
  useEffect(() => {
    const getdata = async () => {
      const res = await axios.get("http://localhost:5000/admin/chartbyqui");
      setchartbyqui(res.data);
    };
    getdata();
  }, []);
  //call api xu li du lieu thong ke san pham ban chay theo nam
  useEffect(() => {
    const getdata = async () => {
      const res = await axios.get(
        "http://localhost:5000/admin/chartbyproducthot"
      );
      setchartbyproducthot(res.data);
    };
    getdata();
  }, []);

  //call api xu li du lieu thong ke san pham ban chay theo quy 1
  useEffect(() => {
    const getdata = async () => {
      const res = await axios.get(
        "http://localhost:5000/admin/chartbyproducthotquy1"
      );
      setchartbyproducthotquy1(res.data);
    };
    getdata();
  }, []);

  //call api xu li du lieu thong ke san pham ban chay theo quy 2
  useEffect(() => {
    const getdata = async () => {
      const res = await axios.get(
        "http://localhost:5000/admin/chartbyproducthotquy2"
      );
      setchartbyproducthotquy2(res.data);
    };
    getdata();
  }, []);

  //call api xu li du lieu thong ke san pham ban chay theo quy 3
  useEffect(() => {
    const getdata = async () => {
      const res = await axios.get(
        "http://localhost:5000/admin/chartbyproducthotquy3"
      );
      setchartbyproducthotquy3(res.data);
    };
    getdata();
  }, []);

  //call api xu li du lieu thong ke san pham ban chay theo quy 4
  useEffect(() => {
    const getdata = async () => {
      const res = await axios.get(
        "http://localhost:5000/admin/chartbyproducthotquy4"
      );
      setchartbyproducthotquy4(res.data);
    };
    getdata();
  }, []);

    //call api xu li du lieu thong ke theo user su dung hang thang
    useEffect(() => {
      const getdata = async () => {
        const res = await axios.get(
          "http://localhost:5000/admin/chartbycountuser"
        );
        setchartbycountuser(res.data);
      };
      getdata();
    }, []);

  return {
    chartbymonth: [chartbymonth, setchartbymonth],
    chartbyyear: [chartbyyear, setchartbyyear],
    chartbyqui: [chartbyqui, setchartbyqui],
    chartbyproducthot: [chartbyproducthot, setchartbyproducthot],
    chartbyproducthotquy1: [chartbyproducthotquy1, setchartbyproducthotquy1],
    chartbyproducthotquy2: [chartbyproducthotquy2, setchartbyproducthotquy2],
    chartbyproducthotquy3: [chartbyproducthotquy3, setchartbyproducthotquy3],
    chartbyproducthotquy4: [chartbyproducthotquy4, setchartbyproducthotquy4],
    chartbycountuser:[chartbycountuser, setchartbycountuser] 
  };
}
export default ChartAdminAPI;
