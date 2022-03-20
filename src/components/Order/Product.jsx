import React from "react";
import { Badge, Col, Row } from "react-bootstrap";
import { numberWithCommas } from "../../utils/utils";

export default function Product({ book, quantity }) {
  return (
    <Row className="my-2">
      <Col xs={4} sm={3} md={2} className="d-flex justify-content-center">
        <div
          className="d-flex justify-content-center me-0"
          style={{ height: "100px" }}
        >
          <img src={book.imageUrl} alt="" className="rounded mh-100 mw-100" />
        </div>
      </Col>
      <Col xs={8} sm={9} lg={10} className="h-auto pe-0">
        <Row className="h-100">
          <Col
            xs={12}
            lg={7}
            className="d-flex flex-column justify-content-center align-items-start"
          >
            <p className="text-start text-break fs-6 fw-bold mb-2 line-clamp-1">
              {book.title}
            </p>
            <div>
              <p>{`Quantities: ${quantity}`}</p>
              <Badge bg="info" className="py-2 px-3 mb-2">
                <p className="text-start m-0">{`${numberWithCommas(
                  book.price
                )} VNĐ`}</p>
              </Badge>
            </div>
          </Col>
          <Col xs={12} lg={5} className="d-flex justify-content-end"></Col>
        </Row>
      </Col>
    </Row>
  );
}
