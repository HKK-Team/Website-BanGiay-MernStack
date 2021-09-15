import React from "react";
import ListPayment from "../../component/Payments/ListPayment";
import PaymentMethod from "../../component/Payments/PaymentMethod/PaymentMethod";

export default function PaymentMethods() {
  return <ListPayment payname={<PaymentMethod />} />;
}
