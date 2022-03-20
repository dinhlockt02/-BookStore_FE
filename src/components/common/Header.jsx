import React from "react";
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";

export default function Header() {
  const productsInCart = useSelector(
    (state) => state.cart.selectedProducts.length
  );

  let userName = "";
  let user = window.localStorage.getItem("user");
  if (user) userName = JSON.parse(user).name;

  const handleLogout = () => {
    window.localStorage.clear();
  };

  return (
    <Navbar
      variant="dark"
      expand="lg"
      className="shadow-sm px-3"
      sticky="top"
      style={{ backgroundColor: "#20232a" }}
    >
      <LinkContainer to="/">
        <Navbar.Brand>Book Store</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "150px" }}
          navbarScroll
        >
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/order">
            <Nav.Link>Order</Nav.Link>
          </LinkContainer>
          <NavDropdown title={userName}>
            <LinkContainer to="/add">
              <NavDropdown.Item>Add Product</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/login">
              <NavDropdown.Item onClick={() => handleLogout()}>
                Log Out
              </NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button
            variant="outline-info"
            className="d-flex align-items-center justify-content-center me-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </Button>
          <LinkContainer to="/cart">
            <Button
              variant="outline-info"
              className="d-flex align-items-center justify-content-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-cart2"
                viewBox="0 0 16 16"
              >
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
              </svg>
              {`(${productsInCart})`}
            </Button>
          </LinkContainer>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
