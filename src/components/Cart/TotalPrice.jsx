import React, { useState } from "react";
import { Alert, Button, ButtonGroup, Card, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../apis/baseApi";
import { clearCart } from "../../redux/actions/cart";
import { numberWithCommas } from "../../utils/utils";

export default function TotalPrice() {
  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const totalPrices = useSelector((state) => state.cart.totalPrices);
  const selectedProducts = useSelector((state) => state.cart.selectedProducts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePayment = () => {
    if (totalPrices === 0) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
    } else setShow(true);
  };

  const handleConfirm = async () => {
    const tranformCart = selectedProducts.map((product) => ({
      book: product.book["_id"],
      quantity: product.quantity,
    }));
    const newOrder = {
      books: tranformCart,
    };
    //POST order
    try {
      const res = await axiosInstance.post("/order", newOrder);
      if (res.status === 201) {
        const clearCartAction = clearCart();
        dispatch(clearCartAction);
      }
    } catch (err) {
      console.error(err);
    }
    //PUT cart
    try {
      const result = await axiosInstance.put("/cart", { cart: [] });
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Card className="shadow-sm p-3 mb-5">
        <div className="d-flex justify-content-between">
          <p className="fs-5">Total</p>
          <p className="fs-5 fw-bold text-danger">{`${numberWithCommas(
            totalPrices
          )} VNĐ`}</p>
        </div>
        <ButtonGroup>
          <LinkContainer to="/">
            <Button variant="outline-danger" className="w-50">
              Back to shopping
            </Button>
          </LinkContainer>
          <Button
            variant="info"
            className="w-50 text-white"
            onClick={() => handlePayment()}
          >
            Buy
          </Button>
        </ButtonGroup>
        <Alert
          show={showAlert}
          variant="danger"
          dismissible
          className="mb-0 mt-3"
          onClose={() => setShowAlert(false)}
        >
          Please add products to cart!!!
        </Alert>
        <Modal
          show={show}
          onHide={() => setShow(false)}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Confirm Payment</Modal.Title>
          </Modal.Header>
          <Modal.Body className="d-flex fs-5 align-items-center">
            <p className="me-2 mb-0">Total:</p>
            <p className="fw-bold text-danger mb-0">{`${numberWithCommas(
              totalPrices
            )} VNĐ`}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
              Close
            </Button>
            <Button
              variant="info"
              className="text-white"
              onClick={handleConfirm}
            >
              Confirm
            </Button>
          </Modal.Footer>
        </Modal>
      </Card>
    </div>
  );
}
