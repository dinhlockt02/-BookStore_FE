import React from "react";
import { Card } from "react-bootstrap";
import { numberWithCommas, totalBooksPrices } from "../../utils/utils";

export default function TotalPrice({ orderList }) {
  const totalPrices = orderList.reduce(
    (accumulator, item) => accumulator + totalBooksPrices(item.books),
    0
  );

  return (
    <div>
      <Card className="shadow-sm p-3 mb-3">
        <div className="d-flex justify-content-between">
          <p className="fs-5 mb-0">Total</p>
          <p className="fs-5 fw-bold text-danger mb-0">{`${numberWithCommas(
            totalPrices
          )} VNĐ`}</p>
        </div>
      </Card>
    </div>
  );
}
