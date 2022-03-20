import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import ProductForm from "../components/AddProduct/ProductForm";
import Header from "../components/common/Header";

export default function AddProduct() {
  let user = window.localStorage.getItem("user");
  let role = "user";
  if (user && user !== "") role = JSON.parse(user).role;

  if (role !== "admin") return <Navigate to="/" />;
  else
    return (
      <>
        <Header />
        <Container fluid>
          <Row className="d-flex justify-content-center">
            <Col md={6}>
              <ProductForm />
            </Col>
          </Row>
        </Container>
      </>
    );
}
