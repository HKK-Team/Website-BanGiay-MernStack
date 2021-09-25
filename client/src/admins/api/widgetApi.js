import { useState, useEffect } from "react";
import axios from "axios";

function WidgetAPI() {
  const [widget, setwidget] = useState([]);
  const [widgetbyyear, setwidgetbyyear] = useState([]);


  useEffect(() => {
    const getdata = async () => {
      const res = await axios.get("http://localhost:5000/admin/widget");
      setwidget(res.data);
    };
    getdata();
  }, []);

  useEffect(() => {
    const getdata = async () => {
      const res = await axios.get("http://localhost:5000/admin/widgetbyyear");
      setwidgetbyyear(res.data);
    };
    getdata();
  }, []);

 
  return {
    widget: [widget, setwidget],
    widgetbyyear:[widgetbyyear, setwidgetbyyear] 
  };
}
export default WidgetAPI;
