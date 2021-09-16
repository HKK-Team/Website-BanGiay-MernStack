import React from "react";
import ListPayment from "../../component/Payments/ListPayment";
import PaymentNoLogged from "../../component/Payments/PaymentMain/PaymentNoLogged";


export default function Payment() {
  return <ListPayment payname={<PaymentNoLogged />} />;
}
