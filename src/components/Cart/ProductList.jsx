import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTotalPrices } from "../../redux/actions/cart";
import { totalBooksPrices } from "../../utils/utils";
import Product from "./Product";

export default function ProductList() {
  const bookList = useSelector((state) => state.cart.selectedProducts);
  const dispatch = useDispatch();
  let totalPrices = totalBooksPrices(bookList);

  useEffect(() => {
    const updateTotalPricesAction = updateTotalPrices(totalPrices);
    dispatch(updateTotalPricesAction);
  });

  return (
    <ul className="m-0 p-0">
      {bookList.map((book, index) => (
        <Product key={index} book={book.book} quantity={book.quantity} />
      ))}
    </ul>
  );
}
