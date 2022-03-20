import React from "react";
import ProductList from "./ProductList";

export default function OrderList({ orderList }) {
  return (
    <ul className="m-0 p-0">
      {orderList.map((order, index) => (
        <ProductList key={index} bookList={order.books} />
      ))}
    </ul>
  );
}
