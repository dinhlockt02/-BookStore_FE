import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { axiosInstance } from "../apis/baseApi";
import OrderList from "../components/Order/OrderList";
import TotalPrice from "../components/Order/TotalPrice";
import Header from "../components/common/Header";

export default function Bought() {
  const [orderList, setOrderList] = useState([]);

  const getData = async () => {
    try {
      const res = await axiosInstance.get("/order");
      if (res.status === 200) setOrderList(res.data.orders);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header />
      <Container className="pt-3 h-100">
        <Row>
          <Col xs={12} lg={8}>
            <OrderList orderList={orderList} />
          </Col>
          <Col xs={12} lg={4}>
            <TotalPrice orderList={orderList} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
