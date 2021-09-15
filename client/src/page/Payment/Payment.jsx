import React from "react";
import ListPayment from "../../component/Payments/ListPayment";
import PaymentMain from "../../component/Payments/PaymentMain/PaymentMain";


export default function Payment() {
  return <ListPayment payname={<PaymentMain />} />;
}
