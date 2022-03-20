import React from "react";
import { Badge, Card } from "react-bootstrap";
import { numberWithCommas, totalBooksPrices } from "../../utils/utils";
import Product from "./Product";

export default function ProductList({ bookList }) {
  const totalPrices = totalBooksPrices(bookList);

  return (
    <Card className="p-2 pb-0 bg-white mb-3 rounded shadow-sm">
      {bookList.map((book, index) => (
        <Product key={index} book={book.book} quantity={book.quantity} />
      ))}
      <Badge bg="info" className="py-2 px-3 mb-2">
        <p className="text-end fs-5 m-0">{`${numberWithCommas(
          totalPrices
        )} VNĐ`}</p>
      </Badge>
    </Card>
  );
}
