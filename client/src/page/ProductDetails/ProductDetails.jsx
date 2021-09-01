import React from "react";
import GoogleMap from "../../component/GoogleMap/GoogleMaps";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import ProductDetail from "../../component/ProductDetails/ProductDetail";

import image from "../../images/Hunter-Nam/dsmh0400den-2_f9306264a1bf467fba65764b6fdb3ece_medium.jpg";

export default function ProductDetails() {
  return (
    <>
      <Header />
      <ProductDetail
        name="Túi Đeo Chéo Biti's ATUH00200DEN (Đen)"
        ProductCode="ATUH00200DEN21"
        price="399,000"
        color="Đen"
        sizeValue1="39"
        sizeValue2="39"
        sizeValue3="39"
        sizeValue4="39"
        sizeValue5="39"
        image={image}
        imageValue1={image}
        imageValue2={image}
        imageValue3={image}
        imageValue4={image}
        imageValue5={image}
      />
      <GoogleMap />
      <Footer />
    </>
  );
}
