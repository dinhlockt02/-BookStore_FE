import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductList from "../components/Cart/ProductList";
import TotalPrice from "../components/Cart/TotalPrice";
import Header from "../components/common/Header";

export default function Cart() {
  return (
    <>
      <Header />
      <Container className="pt-3 h-100">
        <Row>
          <Col xs={12} lg={8}>
            <ProductList />
          </Col>
          <Col xs={12} lg={4}>
            <TotalPrice />
          </Col>
        </Row>
      </Container>
    </>
  );
}
